/**
 * GameCanvas Component: Renders the air hockey game board with neon aesthetic
 * 
 * Retro Arcade Neon Design:
 * - Dark navy background with electric cyan, hot pink, and lime green accents
 * - Glowing effects on all interactive elements
 * - Scan-line overlay for authenticity
 * - Smooth 60fps rendering
 */

import React, { useRef, useEffect, useState } from 'react';
import { GameState, DEFAULT_GAME_CONFIG, NEON_COLORS, GAME_CONSTANTS } from '@/lib/gameTypes';
import { Vector2 } from '@/lib/gameTypes';

interface GameCanvasProps {
  gameState: GameState;
  onCanvasClick?: (pos: Vector2) => void;
  onCanvasMouseMove?: (pos: Vector2) => void;
}

export const GameCanvas: React.FC<GameCanvasProps> = ({
  gameState,
  onCanvasClick,
  onCanvasMouseMove,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState<Vector2>({ x: 0, y: 0 });

  const config = DEFAULT_GAME_CONFIG;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = NEON_COLORS.background;
    ctx.fillRect(0, 0, config.boardWidth, config.boardHeight);

    // Draw grid pattern (subtle)
    drawGrid(ctx, config);

    // Draw walls with glow
    drawWalls(ctx, config);

    // Draw goal zones
    drawGoalZones(ctx, config);

    // Draw crease (restricted zone)
    drawCrease(ctx, config);

    // Draw pins
    drawPins(ctx, gameState, config);

    // Draw puck
    drawPuck(ctx, gameState, config);

    // Draw trajectory preview if aiming
    if (gameState.trajectoryPreview) {
      drawTrajectoryPreview(ctx, gameState.trajectoryPreview);
    }

    // Draw scan-lines overlay
    drawScanLines(ctx, config);
  }, [gameState, config]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    onCanvasClick?.({ x, y });
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });
    onCanvasMouseMove?.({ x, y });
  };

  const handleCanvasTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    setMousePos({ x, y });
    onCanvasMouseMove?.({ x, y });
  };

  const handleCanvasTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    setMousePos({ x, y });
    onCanvasMouseMove?.({ x, y });
  };

  const handleCanvasTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const touch = e.changedTouches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    onCanvasClick?.({ x, y });
  };

  return (
    <canvas
      ref={canvasRef}
      width={config.boardWidth}
      height={config.boardHeight}
      onClick={handleCanvasClick}
      onMouseMove={handleCanvasMouseMove}
      onTouchStart={handleCanvasTouchStart}
      onTouchMove={handleCanvasTouchMove}
      onTouchEnd={handleCanvasTouchEnd}
      className="border-2 cursor-crosshair touch-none"
      style={{
        borderColor: NEON_COLORS.cyan,
        boxShadow: `0 0 20px ${NEON_COLORS.cyan}, inset 0 0 20px rgba(0, 240, 255, 0.1)`,
        backgroundColor: NEON_COLORS.background,
      }}
    />
  );
};

function drawGrid(ctx: CanvasRenderingContext2D, config: any) {
  ctx.strokeStyle = `${NEON_COLORS.gridGray}40`; // Semi-transparent
  ctx.lineWidth = 0.5;

  const gridSize = 40;
  for (let x = 0; x < config.boardWidth; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, config.boardHeight);
    ctx.stroke();
  }

  for (let y = 0; y < config.boardHeight; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(config.boardWidth, y);
    ctx.stroke();
  }
}

function drawWalls(ctx: CanvasRenderingContext2D, config: any) {
  const wallThickness = GAME_CONSTANTS.WALL_THICKNESS;
  const goalZoneHeight = GAME_CONSTANTS.GOAL_ZONE_HEIGHT;

  // Wall color with glow
  ctx.fillStyle = NEON_COLORS.cyan;
  ctx.shadowColor = NEON_COLORS.cyan;
  ctx.shadowBlur = 15;

  // Left wall (with goal cutout)
  const goalTop = (config.boardHeight - goalZoneHeight) / 2;
  const goalBottom = goalTop + goalZoneHeight;

  // Left-top wall segment
  ctx.fillRect(0, 0, wallThickness, goalTop);
  // Left-bottom wall segment
  ctx.fillRect(0, goalBottom, wallThickness, config.boardHeight - goalBottom);

  // Right wall (with goal cutout)
  // Right-top wall segment
  ctx.fillRect(config.boardWidth - wallThickness, 0, wallThickness, goalTop);
  // Right-bottom wall segment
  ctx.fillRect(config.boardWidth - wallThickness, goalBottom, wallThickness, config.boardHeight - goalBottom);

  // Top wall
  ctx.fillRect(0, 0, config.boardWidth, wallThickness);

  // Bottom wall
  ctx.fillRect(0, config.boardHeight - wallThickness, config.boardWidth, wallThickness);

  ctx.shadowBlur = 0;
}

function drawGoalZones(ctx: CanvasRenderingContext2D, config: any) {
  const goalZoneHeight = GAME_CONSTANTS.GOAL_ZONE_HEIGHT;
  const goalTop = (config.boardHeight - goalZoneHeight) / 2;
  const goalBottom = goalTop + goalZoneHeight;

  // Left goal zone (player 2's goal)
  ctx.fillStyle = `${NEON_COLORS.lime}20`; // Semi-transparent
  ctx.fillRect(0, goalTop, GAME_CONSTANTS.WALL_THICKNESS, goalZoneHeight);

  // Right goal zone (player 1's goal)
  ctx.fillRect(config.boardWidth - GAME_CONSTANTS.WALL_THICKNESS, goalTop, GAME_CONSTANTS.WALL_THICKNESS, goalZoneHeight);

  // Goal zone borders with glow
  ctx.strokeStyle = NEON_COLORS.lime;
  ctx.lineWidth = 2;
  ctx.shadowColor = NEON_COLORS.lime;
  ctx.shadowBlur = 10;

  // Left goal border
  ctx.beginPath();
  ctx.moveTo(GAME_CONSTANTS.WALL_THICKNESS, goalTop);
  ctx.lineTo(GAME_CONSTANTS.WALL_THICKNESS, goalBottom);
  ctx.stroke();

  // Right goal border
  ctx.beginPath();
  ctx.moveTo(config.boardWidth - GAME_CONSTANTS.WALL_THICKNESS, goalTop);
  ctx.lineTo(config.boardWidth - GAME_CONSTANTS.WALL_THICKNESS, goalBottom);
  ctx.stroke();

  ctx.shadowBlur = 0;
}

function drawPins(ctx: CanvasRenderingContext2D, gameState: GameState, config: any) {
  for (const player of gameState.players) {
    for (const pin of player.pins) {
      const color = pin.playerId === 1 ? NEON_COLORS.pink : NEON_COLORS.purple;
      const isLeadPin = pin.isLeadPin;

      // Draw pin with glow
      ctx.fillStyle = color;
      ctx.shadowColor = color;
      ctx.shadowBlur = pin.isSelected ? 25 : (isLeadPin ? 15 : 10);

      ctx.beginPath();
      ctx.arc(pin.position.x, pin.position.y, pin.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw lead pin indicator (cyan dot in center)
      if (isLeadPin) {
        ctx.fillStyle = NEON_COLORS.cyan;
        ctx.beginPath();
        ctx.arc(pin.position.x, pin.position.y, pin.radius * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw selection ring only for selected pins
      if (pin.isSelected) {
        ctx.strokeStyle = NEON_COLORS.lime;
        ctx.lineWidth = 3;
        ctx.shadowColor = NEON_COLORS.lime;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(pin.position.x, pin.position.y, pin.radius + 8, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Draw lead pin border indicator
      if (isLeadPin && !pin.isSelected) {
        ctx.strokeStyle = NEON_COLORS.cyan;
        ctx.lineWidth = 2;
        ctx.shadowColor = NEON_COLORS.cyan;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(pin.position.x, pin.position.y, pin.radius + 4, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
  }

  ctx.shadowBlur = 0;
}

function drawPuck(ctx: CanvasRenderingContext2D, gameState: GameState, config: any) {
  const puck = gameState.puck;

  // Draw puck with bright glow
  ctx.fillStyle = NEON_COLORS.cyan;
  ctx.shadowColor = NEON_COLORS.cyan;
  ctx.shadowBlur = 25;

  ctx.beginPath();
  ctx.arc(puck.position.x, puck.position.y, puck.radius, 0, Math.PI * 2);
  ctx.fill();

  // Draw inner highlight
  ctx.fillStyle = NEON_COLORS.white;
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.arc(puck.position.x - 3, puck.position.y - 3, puck.radius * 0.4, 0, Math.PI * 2);
  ctx.fill();
}

function drawTrajectoryPreview(ctx: CanvasRenderingContext2D, trajectory: Vector2[]) {
  if (trajectory.length < 2) return;

  ctx.strokeStyle = `${NEON_COLORS.lime}60`; // Semi-transparent
  ctx.lineWidth = 2;
  ctx.setLineDash([5, 5]);
  ctx.shadowColor = NEON_COLORS.lime;
  ctx.shadowBlur = 8;

  ctx.beginPath();
  ctx.moveTo(trajectory[0].x, trajectory[0].y);

  for (let i = 1; i < trajectory.length; i++) {
    ctx.lineTo(trajectory[i].x, trajectory[i].y);
  }

  ctx.stroke();
  ctx.setLineDash([]);
  ctx.shadowBlur = 0;
}

function drawCrease(ctx: CanvasRenderingContext2D, config: any) {
  const creaseWidth = GAME_CONSTANTS.CREASE_WIDTH;
  const creaseHeight = GAME_CONSTANTS.CREASE_HEIGHT;
  const creaseTop = (config.boardHeight - creaseHeight) / 2;
  const creaseBottom = creaseTop + creaseHeight;

  // Player 2 crease (left side)
  ctx.fillStyle = `${NEON_COLORS.cyan}10`; // Very subtle
  ctx.fillRect(0, creaseTop, creaseWidth, creaseHeight);
  ctx.strokeStyle = `${NEON_COLORS.cyan}40`; // Subtle border
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 5]);
  ctx.strokeRect(0, creaseTop, creaseWidth, creaseHeight);
  ctx.setLineDash([]);

  // Player 1 crease (right side)
  ctx.fillRect(config.boardWidth - creaseWidth, creaseTop, creaseWidth, creaseHeight);
  ctx.beginPath();
  ctx.strokeRect(config.boardWidth - creaseWidth, creaseTop, creaseWidth, creaseHeight);
  ctx.setLineDash([]);
}

function drawScanLines(ctx: CanvasRenderingContext2D, config: any) {
  ctx.strokeStyle = `${NEON_COLORS.white}08`; // Very subtle
  ctx.lineWidth = 1;

  for (let y = 0; y < config.boardHeight; y += 2) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(config.boardWidth, y);
    ctx.stroke();
  }
}
