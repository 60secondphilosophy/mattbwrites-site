/**
 * Physics Engine: Handles puck movement, collisions, and trajectory prediction
 * 
 * Key Functions:
 * - updatePuckPosition: Applies velocity and friction to puck
 * - checkCollisions: Detects and resolves collisions with walls and pins
 * - predictTrajectory: Generates preview path for aiming
 * - calculateBounce: Computes reflection vectors for elastic collisions
 */

import { Vector2, Puck, Pin, GameConfig, GAME_CONSTANTS } from './gameTypes';
import { soundManager } from './soundManager';

export function addVectors(a: Vector2, b: Vector2): Vector2 {
  return { x: a.x + b.x, y: a.y + b.y };
}

export function subtractVectors(a: Vector2, b: Vector2): Vector2 {
  return { x: a.x - b.x, y: a.y - b.y };
}

export function multiplyVector(v: Vector2, scalar: number): Vector2 {
  return { x: v.x * scalar, y: v.y * scalar };
}

export function dotProduct(a: Vector2, b: Vector2): number {
  return a.x * b.x + a.y * b.y;
}

export function magnitude(v: Vector2): number {
  return Math.sqrt(v.x * v.x + v.y * v.y);
}

export function normalize(v: Vector2): Vector2 {
  const mag = magnitude(v);
  if (mag === 0) return { x: 0, y: 0 };
  return { x: v.x / mag, y: v.y / mag };
}

export function distance(a: Vector2, b: Vector2): number {
  return magnitude(subtractVectors(b, a));
}

export function updatePuckPosition(puck: Puck, config: GameConfig, deltaTime: number = 1): void {
  // Apply friction
  puck.velocity.x *= config.friction;
  puck.velocity.y *= config.friction;

  // Stop if velocity is very small
  if (magnitude(puck.velocity) < GAME_CONSTANTS.PUCK_VELOCITY_THRESHOLD) {
    puck.velocity = { x: 0, y: 0 };
  }

  // Update position (deltaTime is in frames, not seconds)
  puck.position.x += puck.velocity.x;
  puck.position.y += puck.velocity.y;
}

export function checkWallCollisions(puck: Puck, config: GameConfig): void {
  const wallThickness = GAME_CONSTANTS.WALL_THICKNESS;
  const goalZoneHeight = GAME_CONSTANTS.GOAL_ZONE_HEIGHT;

  // Left wall (except goal zone)
  if (puck.position.x - puck.radius < wallThickness) {
    const goalTop = (config.boardHeight - goalZoneHeight) / 2;
    const goalBottom = goalTop + goalZoneHeight;
    if (puck.position.y < goalTop || puck.position.y > goalBottom) {
      puck.position.x = wallThickness + puck.radius;
      puck.velocity.x *= -config.elasticity;
      soundManager.play('collision');
    }
  }

  // Right wall (except goal zone)
  if (puck.position.x + puck.radius > config.boardWidth - wallThickness) {
    const goalTop = (config.boardHeight - goalZoneHeight) / 2;
    const goalBottom = goalTop + goalZoneHeight;
    if (puck.position.y < goalTop || puck.position.y > goalBottom) {
      puck.position.x = config.boardWidth - wallThickness - puck.radius;
      puck.velocity.x *= -config.elasticity;
      soundManager.play('collision');
    }
  }

  // Top wall
  if (puck.position.y - puck.radius < wallThickness) {
    puck.position.y = wallThickness + puck.radius;
    puck.velocity.y *= -config.elasticity;
    soundManager.play('collision');
  }

  // Bottom wall
  if (puck.position.y + puck.radius > config.boardHeight - wallThickness) {
    puck.position.y = config.boardHeight - wallThickness - puck.radius;
    puck.velocity.y *= -config.elasticity;
    soundManager.play('collision');
  }
}

export function checkPinCollisions(puck: Puck, pins: Pin[], config: GameConfig): void {
  for (const pin of pins) {
    const dist = distance(puck.position, pin.position);
    const minDist = puck.radius + pin.radius;

    if (dist < minDist) {
      // Collision detected
      const normal = normalize(subtractVectors(puck.position, pin.position));
      
      // Separate puck from pin
      const overlap = minDist - dist;
      puck.position = addVectors(puck.position, multiplyVector(normal, overlap + 0.5));

      // Reflect velocity
      const velocityAlongNormal = dotProduct(puck.velocity, normal);
      if (velocityAlongNormal < 0) {
        const reflection = multiplyVector(normal, -2 * velocityAlongNormal * config.elasticity);
        puck.velocity = addVectors(puck.velocity, reflection);
        soundManager.play('collision');
      }
    }
  }
}

export function checkGoal(puck: Puck, config: GameConfig): number | null {
  // Check if puck reached right goal (player 1's goal)
  if (puck.position.x > config.boardWidth - GAME_CONSTANTS.WALL_THICKNESS) {
    const goalTop = (config.boardHeight - GAME_CONSTANTS.GOAL_ZONE_HEIGHT) / 2;
    const goalBottom = goalTop + GAME_CONSTANTS.GOAL_ZONE_HEIGHT;
    if (puck.position.y > goalTop && puck.position.y < goalBottom) {
      return 2; // Player 2 scored (into player 1's goal)
    }
  }

  // Check if puck reached left goal (player 2's goal)
  if (puck.position.x < GAME_CONSTANTS.WALL_THICKNESS) {
    const goalTop = (config.boardHeight - GAME_CONSTANTS.GOAL_ZONE_HEIGHT) / 2;
    const goalBottom = goalTop + GAME_CONSTANTS.GOAL_ZONE_HEIGHT;
    if (puck.position.y > goalTop && puck.position.y < goalBottom) {
      return 1; // Player 1 scored (into player 2's goal)
    }
  }

  return null;
}

export function predictTrajectory(
  startPos: Vector2,
  direction: Vector2,
  power: number,
  config: GameConfig,
  pins: Pin[]
): Vector2[] {
  // Simple trajectory preview: just show a short line without bounce simulation
  const points: Vector2[] = [startPos];
  const normalizedDir = normalize(direction);
  const previewDistance = 100; // Short preview distance
  const previewSteps = 10; // Only 10 steps instead of 50
  const stepSize = previewDistance / previewSteps;

  for (let i = 1; i <= previewSteps; i++) {
    const point = {
      x: startPos.x + normalizedDir.x * stepSize * i,
      y: startPos.y + normalizedDir.y * stepSize * i,
    };
    points.push(point);
  }

  return points;
}
