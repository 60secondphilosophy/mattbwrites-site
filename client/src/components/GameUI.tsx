/**
 * GameUI Component: Displays game information and controls
 * 
 * Retro Arcade Neon Design:
 * - Neon colored text with glow effects
 * - Clear turn indicators with player colors
 * - Power slider for shot control
 * - Score display
 */

import React from 'react';
import { GameState, NEON_COLORS } from '@/lib/gameTypes';

interface GameUIProps {
  gameState: GameState;
  onPowerChange: (power: number) => void;
  onReset: () => void;
}

function getPinMovementText(gameState: GameState): string {
  if (gameState.turnPhase !== 'pin-placement') return '';
  const currentPlayer = gameState.players[gameState.currentPlayer - 1];
  const selectedPin = currentPlayer.pins.find(p => p.isSelected);
  return selectedPin ? 'PIN SELECTED' : 'SELECT A PIN';
}

export const GameUI: React.FC<GameUIProps> = ({ gameState, onPowerChange, onReset }) => {
  const player1 = gameState.players[0];
  const player2 = gameState.players[1];

  const getTurnPhaseText = () => {
    switch (gameState.turnPhase) {
      case 'pin-placement':
        return 'Place Pins';
      case 'puck-aiming':
        return 'Aim & Shoot';
      case 'puck-moving':
        return 'Puck Moving...';
      default:
        return '';
    }
  };

  return (
    <div className="w-full max-w-2xl">
      {/* Score Display with Turn Indicator */}
      <div className="flex justify-between items-center mb-3 md:mb-6 px-2 md:px-4 gap-2 md:gap-4">
        <div
          className="text-xl md:text-3xl font-bold flex-1 text-center py-2 md:py-3 rounded-lg transition-all"
          style={{
            color: NEON_COLORS.pink,
            textShadow: `0 0 10px ${NEON_COLORS.pink}`,
            backgroundColor: gameState.currentPlayer === 1 ? 'rgba(255, 0, 110, 0.2)' : 'transparent',
            borderColor: gameState.currentPlayer === 1 ? NEON_COLORS.pink : 'transparent',
            borderWidth: gameState.currentPlayer === 1 ? '2px' : '0px',
            boxShadow: gameState.currentPlayer === 1 ? `0 0 20px ${NEON_COLORS.pink}` : 'none',
          }}
        >
          P1: {player1.score}
        </div>

        <div
          className="text-center flex-1 py-2 md:py-3 rounded-lg"
          style={{
            color: NEON_COLORS.cyan,
            textShadow: `0 0 10px ${NEON_COLORS.cyan}`,
            backgroundColor: 'rgba(0, 240, 255, 0.1)',
            borderColor: NEON_COLORS.cyan,
            borderWidth: '1px',
          }}
        >
          <div className="text-xs md:text-sm font-mono">TURN: P{gameState.currentPlayer}</div>
          <div className="text-sm md:text-lg font-bold">{getTurnPhaseText()}</div>
        </div>

        <div
          className="text-xl md:text-3xl font-bold flex-1 text-center py-2 md:py-3 rounded-lg transition-all"
          style={{
            color: NEON_COLORS.purple,
            textShadow: `0 0 10px ${NEON_COLORS.purple}`,
            backgroundColor: gameState.currentPlayer === 2 ? 'rgba(181, 55, 242, 0.2)' : 'transparent',
            borderColor: gameState.currentPlayer === 2 ? NEON_COLORS.purple : 'transparent',
            borderWidth: gameState.currentPlayer === 2 ? '2px' : '0px',
            boxShadow: gameState.currentPlayer === 2 ? `0 0 20px ${NEON_COLORS.purple}` : 'none',
          }}
        >
          P2: {player2.score}
        </div>
      </div>

      {/* Game Status */}
      {gameState.status === 'game-over' && (
        <div className="text-center mb-6 p-4 rounded-lg" style={{ backgroundColor: NEON_COLORS.darkBg, borderColor: NEON_COLORS.lime, borderWidth: '2px' }}>
          <div
            className="text-2xl font-bold mb-4"
            style={{
              color: NEON_COLORS.lime,
              textShadow: `0 0 15px ${NEON_COLORS.lime}`,
            }}
          >
            GAME OVER!
          </div>
          <div
            className="text-xl mb-4"
            style={{ color: NEON_COLORS.cyan }}
          >
            {gameState.players[0].score > gameState.players[1].score
              ? 'PLAYER 1 WINS!'
              : 'PLAYER 2 WINS!'}
          </div>
          <button
            onClick={onReset}
            className="px-6 py-2 font-bold rounded-lg transition-all"
            style={{
              backgroundColor: NEON_COLORS.lime,
              color: NEON_COLORS.background,
              boxShadow: `0 0 15px ${NEON_COLORS.lime}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 0 25px ${NEON_COLORS.lime}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 15px ${NEON_COLORS.lime}`;
            }}
          >
            NEW GAME
          </button>
        </div>
      )}

      {/* Power Slider (shown during aiming) */}
      {gameState.turnPhase === 'puck-aiming' && (
        <div className="mb-4 md:mb-6 px-2 md:px-4">
          <div
            className="text-xs md:text-sm font-mono mb-2"
            style={{
              color: NEON_COLORS.lime,
              textShadow: `0 0 8px ${NEON_COLORS.lime}`,
            }}
          >
            POWER: {Math.round(gameState.shotPower * 100)}%
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={gameState.shotPower}
            onChange={(e) => onPowerChange(parseFloat(e.target.value))}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer"
            style={{
              backgroundColor: NEON_COLORS.darkGray,
              accentColor: NEON_COLORS.cyan,
            }}
          />
        </div>
      )}

      {/* Instructions */}
      <div
        className="text-center text-sm font-mono p-4 rounded-lg"
        style={{
          backgroundColor: NEON_COLORS.darkBg,
          color: NEON_COLORS.cyan,
          borderColor: NEON_COLORS.cyan,
          borderWidth: '1px',
        }}
      >
        {gameState.turnPhase === 'pin-placement' && (
          <div>
            <div>Click a pin to select it (glows lime green)</div>
            <div>Click on the board to move it</div>
            <div className="text-xs mt-2" style={{ color: NEON_COLORS.lime }}>You can skip pin placement and go straight to aiming</div>
          </div>
        )}
        {gameState.turnPhase === 'puck-aiming' && (
          <div>
            <div>Move mouse to aim, adjust power slider</div>
            <div>Click to shoot!</div>
          </div>
        )}
        {gameState.turnPhase === 'puck-moving' && (
          <div>Puck is in motion...</div>
        )}
      </div>
    </div>
  );
};
