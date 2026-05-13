/**
 * Game Component: Main game logic and state management
 * 
 * Responsibilities:
 * - Manage game loop (60fps)
 * - Handle physics updates
 * - Manage turn-based mechanics
 * - Coordinate between canvas rendering and game state
 * - Integrate AI opponent for single-player mode
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GameState, Vector2, DEFAULT_GAME_CONFIG, GameConfig, GAME_CONSTANTS } from '@/lib/gameTypes';
import {
  createInitialGameState,
  selectPin,
  movePinToward,
  startPuckAiming,
  setShotPower,
  shootPuck,
  endTurn,
  scoreGoal,
  resetGame,
  isPuckMoving,
} from '@/lib/gameState';
import {
  updatePuckPosition,
  checkWallCollisions,
  checkPinCollisions,
  checkGoal,
  predictTrajectory,
  normalize,
  subtractVectors,
  magnitude,
} from '@/lib/physics';
import {
  DifficultyLevel,
  selectPinToMove,
  calculatePinMovement,
  calculateShotDirection,
  calculateShotPower,
  shouldSkipPinPlacement,
} from '@/lib/aiOpponent';
import { GameCanvas } from './GameCanvas';
import { GameUI } from './GameUI';
import { GameHelp } from './GameHelp';
import { GameOver } from './GameOver';
import { soundManager } from '@/lib/soundManager';

interface GameProps {
  gameMode?: 'pvp' | 'ai';
  aiDifficulty?: DifficultyLevel;
}

export const Game: React.FC<GameProps> = ({ gameMode = 'pvp', aiDifficulty = 'medium' }) => {
  const [gameState, setGameState] = useState<GameState>(() => createInitialGameState());
  const [config] = useState<GameConfig>(DEFAULT_GAME_CONFIG);
  const soundsInitializedRef = useRef(false);

  // Initialize sounds on first render
  useEffect(() => {
    if (!soundsInitializedRef.current) {
      soundManager.initialize().then(() => {
        soundManager.preloadAll();
      });
      soundsInitializedRef.current = true;
    }
  }, []);
  const gameLoopRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const mouseDownRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<Vector2>({ x: 0, y: 0 });
  const leadPinMovedRef = useRef<boolean>(false);
  const aiActionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aiPinsMovedThisTurnRef = useRef<number>(0);
  const lastGameStateRef = useRef<GameState>(gameState);

  // Update ref whenever gameState changes
  useEffect(() => {
    lastGameStateRef.current = gameState;
  }, [gameState]);

  // AI turn handler - only trigger when it's AI's turn
  useEffect(() => {
    if (gameMode !== 'ai' || gameState.currentPlayer !== 2 || gameState.status !== 'playing') {
      return;
    }

    const handleAITurn = () => {
      const currentState = lastGameStateRef.current;
      
      if (currentState.currentPlayer !== 2 || currentState.status !== 'playing') {
        return;
      }

      console.log('AI Turn - Phase:', currentState.turnPhase);

      if (currentState.turnPhase === 'pin-placement') {
        // AI pin placement logic
        const aiPlayer = currentState.players[1]; // Player 2 is AI
        const pinToMove = selectPinToMove(aiPlayer.pins, currentState.players[0].pins, currentState.puck.position, config, aiDifficulty);
        
        console.log('AI selecting pin:', pinToMove);
        
        // Select the pin
        setGameState((prevState) => {
          let newState = selectPin(prevState, pinToMove);

          // Calculate where to move it
          const selectedPin = newState.players[1].pins.find(p => p.id === pinToMove);
          if (selectedPin) {
            const targetPos = calculatePinMovement(
              selectedPin,
              newState.players[1].pins,
              newState.players[0].pins,
              newState.puck.position,
              config,
              aiDifficulty
            );

            console.log('AI moving pin to:', targetPos);

            // Move the pin
            newState = movePinToward(newState, pinToMove, targetPos, config);
            aiPinsMovedThisTurnRef.current += 1;

            // Mark lead pin as moved
            if (selectedPin.isLeadPin) {
              leadPinMovedRef.current = true;
            }

            // If lead pin was moved, transition to aiming
            if (leadPinMovedRef.current) {
              newState = startPuckAiming(newState);
              aiPinsMovedThisTurnRef.current = 0;
              console.log('AI transitioning to aiming');
            }
          }

          return newState;
        });
      } else if (currentState.turnPhase === 'puck-aiming') {
        // AI shooting logic
        // Player 2 (AI) defends left goal (x=0) and shoots at right goal (x=boardWidth)
        const opponentGoal = { x: config.boardWidth, y: config.boardHeight / 2 };

        // Calculate shot direction
        const direction = calculateShotDirection(
          currentState.puck.position,
          opponentGoal,
          currentState.players[0].pins,
          aiDifficulty
        );

        // Calculate shot power
        const puckDistance = Math.sqrt(
          (currentState.puck.position.x - opponentGoal.x) ** 2 +
          (currentState.puck.position.y - opponentGoal.y) ** 2
        );
        const power = calculateShotPower(aiDifficulty, puckDistance);

        console.log('AI shooting with power:', power, 'direction:', direction);

        // Update power and shoot
        setGameState((prevState) => {
          let newState = setShotPower(prevState, power);
          newState = shootPuck(newState, direction, config);
          aiPinsMovedThisTurnRef.current = 0;
          leadPinMovedRef.current = false;
          return newState;
        });
      }
    };

    // Delay AI action based on difficulty
    const delayMap = { easy: 1500, medium: 800, hard: 400 };
    const delay = delayMap[aiDifficulty];

    aiActionTimeoutRef.current = setTimeout(handleAITurn, delay);

    return () => {
      if (aiActionTimeoutRef.current) clearTimeout(aiActionTimeoutRef.current);
    };
  }, [gameState.currentPlayer, gameState.turnPhase, gameState.status, gameMode, aiDifficulty, config]);

  // Game loop
  useEffect(() => {
    const gameLoop = () => {
      const now = performance.now();
      const deltaTime = (now - lastFrameTimeRef.current) / 1000;
      lastFrameTimeRef.current = now;

      setGameState((prevState) => {
        if (prevState.status !== 'playing') return prevState;

        let newState = { ...prevState };

        // Update puck physics during puck-moving phase
        if (prevState.turnPhase === 'puck-moving') {
          updatePuckPosition(prevState.puck, config, deltaTime);
          checkWallCollisions(prevState.puck, config);
          
          // Get all pins from both players
          const allPins = prevState.players.flatMap(p => p.pins);
          checkPinCollisions(prevState.puck, allPins, config);

          // Only check for goal if puck is moving (to avoid multiple triggers)
          if (magnitude(prevState.puck.velocity) > GAME_CONSTANTS.PUCK_VELOCITY_THRESHOLD) {
            const goal = checkGoal(prevState.puck, config);
            if (goal) {
              soundManager.play('goal');
              newState = scoreGoal(prevState, goal);
              leadPinMovedRef.current = false;
              aiPinsMovedThisTurnRef.current = 0;

              return newState;
            }
          }

          // Check if puck has stopped
          if (!isPuckMoving(prevState)) {
            newState = endTurn(prevState);
            leadPinMovedRef.current = false;
            aiPinsMovedThisTurnRef.current = 0;
          }
        }

        return newState;
      });

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (gameLoopRef.current) cancelAnimationFrame(gameLoopRef.current);
    };
  }, [config]);

  const handleCanvasClick = useCallback(
    (pos: Vector2) => {
      // Only allow player 1 to click in AI mode
      if (gameMode === 'ai' && gameState.currentPlayer !== 1) return;

      setGameState((prevState) => {
        if (prevState.status !== 'playing') return prevState;

        if (prevState.turnPhase === 'pin-placement') {
          // Check if clicking on a pin to select it
          for (const pin of prevState.players[prevState.currentPlayer - 1].pins) {
            const dist = Math.sqrt(
              (pin.position.x - pos.x) ** 2 + (pin.position.y - pos.y) ** 2
            );
            if (dist < pin.radius + 20) {
              // If clicking the same pin, deselect it
              if (prevState.selectedPinId === pin.id) {
                return { ...prevState, selectedPinId: null };
              }
              return selectPin(prevState, pin.id);
            }
          }

          // If a pin is selected and we click elsewhere, move it
          if (prevState.selectedPinId) {
            const newState = movePinToward(prevState, prevState.selectedPinId, pos, config);
            const selectedPin = newState.players[newState.currentPlayer - 1].pins.find(
              p => p.id === prevState.selectedPinId
            );

            // If the lead pin was moved, mark it as done
            if (selectedPin?.isLeadPin) {
              leadPinMovedRef.current = true;
            }

            return { ...newState, selectedPinId: null };
          }

          // Check if trying to skip to aiming without moving lead pin
          const currentPlayer = prevState.players[prevState.currentPlayer - 1];
          const leadPin = currentPlayer.pins.find(p => p.isLeadPin);
          if (!leadPinMovedRef.current && leadPin) {
            // Lead pin hasn't been moved yet, can't skip to aiming
            return prevState;
          }

          // Otherwise, start aiming (lead pin has been moved)
          return startPuckAiming(prevState);
        } else if (prevState.turnPhase === 'puck-aiming') {
          // Shoot the puck
          const direction = normalize(subtractVectors(pos, prevState.puck.position));
          return shootPuck(prevState, direction, config);
        }

        return prevState;
      });
    },
    [config, gameMode, gameState.currentPlayer]
  );

  const handleCanvasMouseMove = useCallback(
    (pos: Vector2) => {
      // Only show trajectory for player 1 in AI mode
      if (gameMode === 'ai' && gameState.currentPlayer !== 1) return;

      lastMousePosRef.current = pos;

      setGameState((prevState) => {
        if (prevState.status !== 'playing' || prevState.turnPhase !== 'puck-aiming') {
          return prevState;
        }

        const direction = normalize(subtractVectors(pos, prevState.puck.position));
        const allPins = prevState.players.flatMap(p => p.pins);
        const trajectory = predictTrajectory(prevState.puck.position, direction, prevState.shotPower, config, allPins);

        return {
          ...prevState,
          trajectoryPreview: trajectory,
        };
      });
    },
    [config, gameMode, gameState.currentPlayer]
  );

  const handlePowerChange = useCallback((power: number) => {
    // Only allow player 1 to change power in AI mode
    if (gameMode === 'ai' && gameState.currentPlayer !== 1) return;

    setGameState((prevState) => setShotPower(prevState, power));
  }, [gameMode, gameState.currentPlayer]);

  const handleResetGame = useCallback(() => {
    leadPinMovedRef.current = false;
    aiPinsMovedThisTurnRef.current = 0;
    setGameState(() => createInitialGameState());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3 md:gap-6 p-2 md:p-4 overflow-x-hidden" style={{ backgroundColor: '#0a0e27' }}>
      <div className="flex flex-col items-center gap-2 md:gap-4 w-full max-w-3xl">
        <h1 className="text-2xl md:text-5xl font-bold" style={{ color: '#00f0ff', textShadow: '0 0 20px #00f0ff' }}>
          PINOCKEY
        </h1>
        <GameUI gameState={gameState} onPowerChange={handlePowerChange} onReset={handleResetGame} />
      </div>

      <div className="flex justify-center">
        <GameCanvas
          gameState={gameState}
          onCanvasClick={handleCanvasClick}
          onCanvasMouseMove={handleCanvasMouseMove}
        />
      </div>

      <div className="w-full max-w-3xl">
        <GameHelp />
      </div>

      {gameState.status === 'game-over' && <GameOver gameState={gameState} onRestart={handleResetGame} />}
    </div>
  );
};
