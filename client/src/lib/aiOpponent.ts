/**
 * AI Opponent Logic: Computer player with scalable difficulty levels
 * 
 * Architecture:
 * - Difficulty settings define AI behavior parameters
 * - Pin placement strategy based on puck position and opponent threat
 * - Shot aiming with accuracy variance based on difficulty
 * - Decision making with strategic considerations
 */

import { GameState, Pin, GameConfig } from './gameTypes';
import { distance, normalize, subtractVectors } from './physics';

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

interface DifficultySettings {
  aimAccuracy: number;           // 0-1: how accurate the AI's aim is
  reactionTime: number;          // ms delay before AI makes decisions
  pinPlacementStrategy: 'random' | 'defensive' | 'adaptive';
  shotPowerVariance: number;     // 0-1: variance in shot power
  decisionDelay: number;         // ms delay for decision making
}

const DIFFICULTY_CONFIGS: Record<DifficultyLevel, DifficultySettings> = {
  easy: {
    aimAccuracy: 0.5,
    reactionTime: 1000,
    pinPlacementStrategy: 'random',
    shotPowerVariance: 0.3,
    decisionDelay: 1500,
  },
  medium: {
    aimAccuracy: 0.75,
    reactionTime: 600,
    pinPlacementStrategy: 'defensive',
    shotPowerVariance: 0.15,
    decisionDelay: 800,
  },
  hard: {
    aimAccuracy: 0.95,
    reactionTime: 300,
    pinPlacementStrategy: 'adaptive',
    shotPowerVariance: 0.05,
    decisionDelay: 400,
  },
};

export function getDifficultyConfig(level: DifficultyLevel): DifficultySettings {
  return DIFFICULTY_CONFIGS[level];
}

/**
 * Determine which pin the AI should move
 */
export function selectPinToMove(
  aiPins: Pin[],
  opponentPins: Pin[],
  puckPos: { x: number; y: number },
  config: GameConfig,
  difficulty: DifficultyLevel
): string {
  const settings = DIFFICULTY_CONFIGS[difficulty];
  const leadPin = aiPins.find(p => p.isLeadPin);
  
  if (!leadPin) return aiPins[0].id;

  // Lead pin must be moved, so always return it
  return leadPin.id;
}

/**
 * Determine where to move the selected pin
 */
export function calculatePinMovement(
  pin: Pin,
  aiPins: Pin[],
  opponentPins: Pin[],
  puckPos: { x: number; y: number },
  config: GameConfig,
  difficulty: DifficultyLevel
): { x: number; y: number } {
  const settings = DIFFICULTY_CONFIGS[difficulty];
  const boardCenterY = config.boardHeight / 2;

  if (settings.pinPlacementStrategy === 'random') {
    return getRandomDefensivePosition(pin, config);
  } else if (settings.pinPlacementStrategy === 'defensive') {
    return getDefensivePosition(pin, puckPos, config);
  } else {
    // adaptive
    return getAdaptivePosition(pin, puckPos, opponentPins, config);
  }
}

/**
 * Random defensive position (easy difficulty)
 */
function getRandomDefensivePosition(
  pin: Pin,
  config: GameConfig
): { x: number; y: number } {
  const boardCenterY = config.boardHeight / 2;
  const margin = 30;
  
  // Keep pins on the left side (AI defends left goal)
  const x = 80 + Math.random() * 60;
  const y = boardCenterY + (Math.random() - 0.5) * 80;

  return {
    x: Math.max(margin, Math.min(config.boardWidth - margin, x)),
    y: Math.max(margin, Math.min(config.boardHeight - margin, y)),
  };
}

/**
 * Defensive position based on puck location (medium difficulty)
 */
function getDefensivePosition(
  pin: Pin,
  puckPos: { x: number; y: number },
  config: GameConfig
): { x: number; y: number } {
  const boardCenterY = config.boardHeight / 2;
  const margin = 30;

  // Position between puck and goal, favoring center
  const targetY = Math.max(
    boardCenterY - 60,
    Math.min(boardCenterY + 60, puckPos.y)
  );

  const x = 100;
  const y = targetY;

  return {
    x: Math.max(margin, Math.min(config.boardWidth - margin, x)),
    y: Math.max(margin, Math.min(config.boardHeight - margin, y)),
  };
}

/**
 * Adaptive position considering opponent pins (hard difficulty)
 */
function getAdaptivePosition(
  pin: Pin,
  puckPos: { x: number; y: number },
  opponentPins: Pin[],
  config: GameConfig
): { x: number; y: number } {
  const boardCenterY = config.boardHeight / 2;
  const margin = 30;
  const isLeadPin = pin.isLeadPin;

  if (isLeadPin) {
    // Lead pin: position aggressively toward opponent's shooting angle
    const targetY = puckPos.y;
    const x = 140; // Move forward more aggressively

    return {
      x: Math.max(margin, Math.min(config.boardWidth - margin, x)),
      y: Math.max(margin, Math.min(config.boardHeight - margin, targetY)),
    };
  } else {
    // Support pins: create defensive wall
    const distFromCenter = Math.abs(pin.position.y - boardCenterY);
    const direction = pin.position.y > boardCenterY ? 1 : -1;
    const targetY = boardCenterY + direction * (60 + Math.random() * 20);
    const x = 80;

    return {
      x: Math.max(margin, Math.min(config.boardWidth - margin, x)),
      y: Math.max(margin, Math.min(config.boardHeight - margin, targetY)),
    };
  }
}

/**
 * Calculate shot direction for the AI
 */
export function calculateShotDirection(
  puckPos: { x: number; y: number },
  opponentGoalPos: { x: number; y: number },
  opponentPins: Pin[],
  difficulty: DifficultyLevel
): { x: number; y: number } {
  const settings = DIFFICULTY_CONFIGS[difficulty];
  const boardCenterY = 200; // Assuming default board height

  // Base direction toward opponent's goal
  const baseDir = normalize(subtractVectors(opponentGoalPos, puckPos));

  // Add accuracy variance based on difficulty
  const angleVariance = (1 - settings.aimAccuracy) * 0.5; // Up to 0.5 radians
  const randomAngle = (Math.random() - 0.5) * angleVariance;

  // Rotate base direction by random angle
  const cos = Math.cos(randomAngle);
  const sin = Math.sin(randomAngle);
  const rotatedDir = {
    x: baseDir.x * cos - baseDir.y * sin,
    y: baseDir.x * sin + baseDir.y * cos,
  };

  return normalize(rotatedDir);
}

/**
 * Calculate shot power for the AI
 */
export function calculateShotPower(
  difficulty: DifficultyLevel,
  puckDistance: number
): number {
  const settings = DIFFICULTY_CONFIGS[difficulty];
  
  // Base power: 0.6-0.8 depending on distance
  const basePower = Math.min(0.8, 0.6 + puckDistance / 1000);
  
  // Add variance based on difficulty
  const variance = (Math.random() - 0.5) * settings.shotPowerVariance;
  const power = Math.max(0.15, Math.min(1, basePower + variance));

  return power;
}

/**
 * Determine if AI should skip optional pin placement and go straight to aiming
 */
export function shouldSkipPinPlacement(
  difficulty: DifficultyLevel,
  pinsMovedThisTurn: number
): boolean {
  const settings = DIFFICULTY_CONFIGS[difficulty];
  
  // Easy: always move multiple pins
  if (difficulty === 'easy') return false;
  
  // Medium: sometimes skip after moving lead pin
  if (difficulty === 'medium') return pinsMovedThisTurn > 0 && Math.random() < 0.3;
  
  // Hard: frequently skip after moving lead pin
  if (difficulty === 'hard') return pinsMovedThisTurn > 0 && Math.random() < 0.6;
  
  return false;
}
