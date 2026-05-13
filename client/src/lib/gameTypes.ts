/**
 * Game Architecture: Retro Arcade Neon
 * 
 * Core Data Structures:
 * - GameState: Manages overall game flow (setup, playing, scoring, game over)
 * - Player: Represents each player with their pins and score
 * - Puck: Physics object with position, velocity, and collision detection
 * - Pin: Defensive obstacle controlled by players
 * 
 * Physics Model:
 * - Continuous position updates with velocity
 * - Elastic collisions with walls and pins
 * - Friction to gradually slow the puck
 * - Goal detection when puck reaches opponent's goal zone
 */

export interface Vector2 {
  x: number;
  y: number;
}

export interface Puck {
  position: Vector2;
  velocity: Vector2;
  radius: number;
  mass: number;
}

export interface Pin {
  id: string;
  position: Vector2;
  radius: number;
  playerId: number; // 1 or 2
  isSelected: boolean;
  isLeadPin: boolean; // Must be moved every turn
}

export interface Player {
  id: number; // 1 or 2
  score: number;
  pins: Pin[];
  goalPosition: Vector2; // Center of their goal
  goalWidth: number;
  goalHeight: number;
}

export interface GameState {
  status: 'setup' | 'playing' | 'scoring' | 'game-over';
  currentPlayer: number; // 1 or 2
  players: [Player, Player];
  puck: Puck;
  selectedPinId: string | null;
  turnPhase: 'pin-placement' | 'puck-aiming' | 'puck-shot' | 'puck-moving';
  trajectoryPreview: Vector2[] | null; // For aiming visualization
  shotPower: number; // 0 to 1
  winningScore: number;
  gameTime: number; // Milliseconds elapsed
}

export interface GameConfig {
  boardWidth: number;
  boardHeight: number;
  puckRadius: number;
  pinRadius: number;
  pinsPerPlayer: number;
  winningScore: number;
  friction: number; // 0 to 1, how much velocity is lost per frame
  elasticity: number; // 0 to 1, how bouncy collisions are
  maxShotPower: number; // Maximum velocity when shooting
}

export const DEFAULT_GAME_CONFIG: GameConfig = {
  boardWidth: 800,
  boardHeight: 400,
  puckRadius: 8,
  pinRadius: 12,
  pinsPerPlayer: 3,
  winningScore: 5,
  friction: 0.98, // Slight friction each frame
  elasticity: 0.95, // Bouncy collisions
  maxShotPower: 15, // Max pixels per frame
};

export const NEON_COLORS = {
  background: '#0a0e27',
  darkBg: '#050810',
  cyan: '#00f0ff',
  pink: '#ff006e',
  lime: '#39ff14',
  purple: '#b537f2',
  white: '#ffffff',
  darkGray: '#1a1f3a',
  gridGray: '#2a2f4a',
};

export const GAME_CONSTANTS = {
  WALL_THICKNESS: 20,
  GOAL_ZONE_WIDTH: 100,
  GOAL_ZONE_HEIGHT: 150,
  PUCK_VELOCITY_THRESHOLD: 0.1, // Below this, puck is considered stopped
  COLLISION_DAMPING: 0.85, // Energy loss on collision
  PIN_MOVE_DISTANCE: 40, // How far a pin can move per turn
  TRAJECTORY_POINTS: 50, // Number of points in trajectory preview
  FRAME_RATE: 60,
  CREASE_WIDTH: 80, // Width of restricted zone near goal
  CREASE_HEIGHT: 200, // Height of restricted zone
};
