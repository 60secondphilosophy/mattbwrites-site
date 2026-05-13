/**
 * GameOver Component: Displays winner announcement and restart button
 * 
 * Retro Arcade Neon Design
 */

import React from 'react';
import { GameState } from '@/lib/gameTypes';

interface GameOverProps {
  gameState: GameState;
  onRestart: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ gameState, onRestart }) => {
  const winner = gameState.players[0].score >= 5 ? 1 : 2;
  const winnerName = winner === 1 ? 'PLAYER 1' : 'PLAYER 2';
  const winnerColor = winner === 1 ? '#ff1493' : '#a020f0';
  const winnerGlow = winner === 1 ? 'rgba(255, 20, 147, 0.8)' : 'rgba(160, 32, 240, 0.8)';

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{
        backgroundColor: 'rgba(10, 14, 39, 0.95)',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div className="flex flex-col items-center gap-8 p-8 max-w-md">
        {/* Winner Announcement */}
        <div className="flex flex-col items-center gap-4">
          <div
            className="text-6xl font-bold animate-pulse"
            style={{
              color: winnerColor,
              textShadow: `0 0 30px ${winnerGlow}, 0 0 60px ${winnerGlow}`,
            }}
          >
            WINNER!
          </div>
          <div
            className="text-4xl font-bold"
            style={{
              color: winnerColor,
              textShadow: `0 0 20px ${winnerGlow}`,
            }}
          >
            {winnerName}
          </div>
        </div>

        {/* Final Score */}
        <div className="flex gap-8 justify-center w-full">
          <div className="flex flex-col items-center gap-2">
            <div style={{ color: '#ff1493', textShadow: '0 0 10px #ff1493' }} className="text-sm font-bold">
              PLAYER 1
            </div>
            <div
              style={{
                color: '#ff1493',
                textShadow: '0 0 15px #ff1493',
                fontSize: '2.5rem',
              }}
              className="font-bold"
            >
              {gameState.players[0].score}
            </div>
          </div>

          <div style={{ color: '#888' }} className="text-2xl font-bold">
            -
          </div>

          <div className="flex flex-col items-center gap-2">
            <div style={{ color: '#a020f0', textShadow: '0 0 10px #a020f0' }} className="text-sm font-bold">
              PLAYER 2
            </div>
            <div
              style={{
                color: '#a020f0',
                textShadow: '0 0 15px #a020f0',
                fontSize: '2.5rem',
              }}
              className="font-bold"
            >
              {gameState.players[1].score}
            </div>
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="px-8 py-4 text-xl font-bold rounded-lg transition-all duration-200 w-full uppercase"
          style={{
            backgroundColor: 'transparent',
            border: '2px solid #00f0ff',
            color: '#00f0ff',
            textShadow: '0 0 10px #00f0ff',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.8)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.5)';
          }}
        >
          Play Again
        </button>

        {/* Back to Menu Button */}
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 text-sm font-bold rounded-lg transition-all duration-200 w-full uppercase"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #666',
            color: '#888',
            textShadow: '0 0 5px #666',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#00f0ff';
            e.currentTarget.style.borderColor = '#00f0ff';
            e.currentTarget.style.textShadow = '0 0 10px #00f0ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#888';
            e.currentTarget.style.borderColor = '#666';
            e.currentTarget.style.textShadow = '0 0 5px #666';
          }}
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
};
