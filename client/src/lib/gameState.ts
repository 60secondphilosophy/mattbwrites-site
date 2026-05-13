/**
 * Game State Management: Initialize and manage game state transitions
 * 
 * Responsibilities:
 * - Create initial game state
 * - Manage turn transitions
 * - Track scoring
 * - Handle game over conditions
 */

import { GameState, Player, Pin, Puck, DEFAULT_GAME_CONFIG, GameConfig, GAME_CONSTANTS } from './gameTypes';
import { nanoid } from 'nanoid';

export function createInitialGameState(config: GameConfig = DEFAULT_GAME_CONFIG): GameState {
  const boardCenterX = config.boardWidth / 2;
  const boardCenterY = config.boardHeight / 2;

  // Create pins for player 1 (right side)
  const player1Pins: Pin[] = [
    {
      id: nanoid(),
      position: { x: config.boardWidth - 90, y: boardCenterY - 50 }, // Top pin (moved in and up)
      radius: config.pinRadius,
      playerId: 1,
      isSelected: false,
      isLeadPin: false,
    },
    {
      id: nanoid(),
      position: { x: config.boardWidth - 150, y: boardCenterY }, // Middle pin (lead pin - must move) - moved forward
      radius: config.pinRadius,
      playerId: 1,
      isSelected: false,
      isLeadPin: true,
    },
    {
      id: nanoid(),
      position: { x: config.boardWidth - 90, y: boardCenterY + 50 }, // Bottom pin (moved in and down)
      radius: config.pinRadius,
      playerId: 1,
      isSelected: false,
      isLeadPin: false,
    },
    // Blocking pins on sides to prevent wall-bounce goals
    {
      id: nanoid(),
      position: { x: config.boardWidth - 70, y: boardCenterY - 80 }, // Top-side blocker
      radius: config.pinRadius,
      playerId: 1,
      isSelected: false,
      isLeadPin: false,
    },
    {
      id: nanoid(),
      position: { x: config.boardWidth - 70, y: boardCenterY + 80 }, // Bottom-side blocker
      radius: config.pinRadius,
      playerId: 1,
      isSelected: false,
      isLeadPin: false,
    },
  ];

  // Create pins for player 2 (left side)
  const player2Pins: Pin[] = [
    {
      id: nanoid(),
      position: { x: 90, y: boardCenterY - 50 }, // Top pin (moved in and up)
      radius: config.pinRadius,
      playerId: 2,
      isSelected: false,
      isLeadPin: false,
    },
    {
      id: nanoid(),
      position: { x: 150, y: boardCenterY }, // Middle pin (lead pin - must move) - moved forward
      radius: config.pinRadius,
      playerId: 2,
      isSelected: false,
      isLeadPin: true,
    },
    {
      id: nanoid(),
      position: { x: 90, y: boardCenterY + 50 }, // Bottom pin (moved in and down)
      radius: config.pinRadius,
      playerId: 2,
      isSelected: false,
      isLeadPin: false,
    },
    // Blocking pins on sides to prevent wall-bounce goals
    {
      id: nanoid(),
      position: { x: 70, y: boardCenterY - 80 }, // Top-side blocker
      radius: config.pinRadius,
      playerId: 2,
      isSelected: false,
      isLeadPin: false,
    },
    {
      id: nanoid(),
      position: { x: 70, y: boardCenterY + 80 }, // Bottom-side blocker
      radius: config.pinRadius,
      playerId: 2,
      isSelected: false,
      isLeadPin: false,
    },
  ];

  const player1: Player = {
    id: 1,
    score: 0,
    pins: player1Pins,
    goalPosition: { x: config.boardWidth, y: boardCenterY },
    goalWidth: 20,
    goalHeight: 100,
  };

  const player2: Player = {
    id: 2,
    score: 0,
    pins: player2Pins,
    goalPosition: { x: 0, y: boardCenterY },
    goalWidth: 20,
    goalHeight: 100,
  };

  const puck: Puck = {
    position: { x: boardCenterX, y: boardCenterY },
    velocity: { x: 0, y: 0 },
    radius: config.puckRadius,
    mass: 1,
  };

  return {
    status: 'playing',
    currentPlayer: 1,
    players: [player1, player2],
    puck,
    selectedPinId: null,
    turnPhase: 'pin-placement',
    trajectoryPreview: null,
    shotPower: 0.15,
    winningScore: 5,
    gameTime: 0,
  };
}

export function selectPin(gameState: GameState, pinId: string): GameState {
  const pin = findPinById(gameState, pinId);
  if (!pin) return gameState;

  // Deselect all pins first
  for (const player of gameState.players) {
    for (const p of player.pins) {
      p.isSelected = false;
    }
  }

  // Select the clicked pin
  pin.isSelected = true;

  return {
    ...gameState,
    selectedPinId: pinId,
  };
}

export function movePinToward(
  gameState: GameState,
  pinId: string,
  targetPos: { x: number; y: number },
  config: GameConfig
): GameState {
  const pin = findPinById(gameState, pinId);
  if (!pin) return gameState;

  // Check if target position is in the crease (restricted zone)
  const creaseWidth = GAME_CONSTANTS.CREASE_WIDTH;
  const creaseHeight = GAME_CONSTANTS.CREASE_HEIGHT;
  const creaseTop = (config.boardHeight - creaseHeight) / 2;
  const creaseBottom = creaseTop + creaseHeight;

  // Player 1 (right side) - crease is on the right
  const player1CreaseLeft = config.boardWidth - creaseWidth;
  const player1CreaseRight = config.boardWidth;

  // Player 2 (left side) - crease is on the left
  const player2CreaseLeft = 0;
  const player2CreaseRight = creaseWidth;

  // Check if target is in crease
  if (pin.playerId === 1) {
    if (targetPos.x >= player1CreaseLeft && targetPos.x <= player1CreaseRight &&
        targetPos.y >= creaseTop && targetPos.y <= creaseBottom) {
      // Target is in crease - reject move
      return gameState;
    }
  } else if (pin.playerId === 2) {
    if (targetPos.x >= player2CreaseLeft && targetPos.x <= player2CreaseRight &&
        targetPos.y >= creaseTop && targetPos.y <= creaseBottom) {
      // Target is in crease - reject move
      return gameState;
    }
  }

  // Move pin directly to target position (constrained to board)
  const margin = 30;
  pin.position.x = Math.max(margin, Math.min(config.boardWidth - margin, targetPos.x));
  pin.position.y = Math.max(margin, Math.min(config.boardHeight - margin, targetPos.y));
  pin.isSelected = false;

  return gameState;
}

export function startPuckAiming(gameState: GameState): GameState {
  return {
    ...gameState,
    turnPhase: 'puck-aiming',
    selectedPinId: null,
    trajectoryPreview: null,
    shotPower: 0.15,
  };
}

export function setShotPower(gameState: GameState, power: number): GameState {
  return {
    ...gameState,
    shotPower: Math.max(0, Math.min(1, power)),
  };
}

export function shootPuck(
  gameState: GameState,
  direction: { x: number; y: number },
  config: GameConfig
): GameState {
  const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y);
  if (magnitude === 0) return gameState;

  const normalizedDir = { x: direction.x / magnitude, y: direction.y / magnitude };
  const velocity = {
    x: normalizedDir.x * gameState.shotPower * config.maxShotPower,
    y: normalizedDir.y * gameState.shotPower * config.maxShotPower,
  };

  return {
    ...gameState,
    puck: { ...gameState.puck, velocity },
    turnPhase: 'puck-moving',
    trajectoryPreview: null,
    shotPower: 0,
  };
}

export function endTurn(gameState: GameState): GameState {
  const nextPlayer = gameState.currentPlayer === 1 ? 2 : 1;
  return {
    ...gameState,
    currentPlayer: nextPlayer,
    turnPhase: 'pin-placement',
    puck: {
      ...gameState.puck,
      velocity: { x: 0, y: 0 },
    },
    selectedPinId: null,
    trajectoryPreview: null,
  };
}

export function scoreGoal(gameState: GameState, scoringPlayer: number): GameState {
  const newState = { ...gameState };
  newState.players[scoringPlayer - 1].score += 1;

  // Check if game is over
  if (newState.players[scoringPlayer - 1].score >= newState.winningScore) {
    return {
      ...newState,
      status: 'game-over',
    };
  }

  // Reset puck and continue - always rotate to the OTHER player (simple turn switch)
  const boardCenterX = 400; // Assuming default board width
  const boardCenterY = 200; // Assuming default board height
  const nextPlayer = gameState.currentPlayer === 1 ? 2 : 1;
  return {
    ...newState,
    status: 'playing',
    puck: {
      position: { x: boardCenterX, y: boardCenterY },
      velocity: { x: 0, y: 0 },
      radius: gameState.puck.radius,
      mass: gameState.puck.mass,
    },
    currentPlayer: nextPlayer,
    turnPhase: 'pin-placement',
  };
}

export function resetGame(config: GameConfig = DEFAULT_GAME_CONFIG): GameState {
  return createInitialGameState(config);
}

// Helper functions
function findPinById(gameState: GameState, pinId: string): Pin | null {
  for (const player of gameState.players) {
    const pin = player.pins.find(p => p.id === pinId);
    if (pin) return pin;
  }
  return null;
}

export function isPuckMoving(gameState: GameState): boolean {
  const vel = gameState.puck.velocity;
  return Math.sqrt(vel.x * vel.x + vel.y * vel.y) > 0.1;
}
