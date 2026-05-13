/**
 * GameHelp Component: Displays game rules and instructions
 */

import React, { useState } from 'react';
import { NEON_COLORS } from '@/lib/gameTypes';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const GameHelp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-3 rounded-lg transition-all"
        style={{
          backgroundColor: NEON_COLORS.darkBg,
          borderColor: NEON_COLORS.lime,
          borderWidth: '1px',
          color: NEON_COLORS.lime,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 15px ${NEON_COLORS.lime}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <span className="font-bold">HOW TO PLAY</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div
          className="mt-2 p-4 rounded-lg text-sm font-mono space-y-3"
          style={{
            backgroundColor: NEON_COLORS.darkBg,
            borderColor: NEON_COLORS.lime,
            borderWidth: '1px',
            color: NEON_COLORS.cyan,
          }}
        >
          <div>
            <div style={{ color: NEON_COLORS.lime, fontWeight: 'bold' }}>OBJECTIVE</div>
            <div>Score 5 goals before your opponent to win!</div>
          </div>

          <div>
            <div style={{ color: NEON_COLORS.lime, fontWeight: 'bold' }}>PIN PLACEMENT PHASE</div>
            <div><span style={{ color: NEON_COLORS.cyan }}>★ LEAD PIN (with cyan dot) MUST be moved each turn!</span></div>
            <div>1. Click the lead pin to select it (cyan dot in center)</div>
            <div>2. Click anywhere on the board to move it</div>
            <div>3. After moving the lead pin, you can move the other 2 pins or skip to aiming</div>
            <div>4. Click the board to proceed to aiming phase</div>
          </div>

          <div>
            <div style={{ color: NEON_COLORS.lime, fontWeight: 'bold' }}>AIMING & SHOOTING</div>
            <div>1. Move your mouse to aim the puck</div>
            <div>2. Adjust the power slider (0-100%)</div>
            <div>3. Click to shoot the puck toward your opponent's goal</div>
          </div>

          <div>
            <div style={{ color: NEON_COLORS.lime, fontWeight: 'bold' }}>SCORING</div>
            <div>Get the puck into the opponent's goal zone (left or right)</div>
            <div>Pins can block shots - position them strategically!</div>
          </div>

          <div>
            <div style={{ color: NEON_COLORS.lime, fontWeight: 'bold' }}>COLORS & INDICATORS</div>
            <div>
              <span style={{ color: NEON_COLORS.pink }}>● Pink Pins</span> = Player 1 (Right)
            </div>
            <div>
              <span style={{ color: NEON_COLORS.purple }}>● Purple Pins</span> = Player 2 (Left)
            </div>
            <div>
              <span style={{ color: NEON_COLORS.cyan }}>● Cyan Puck</span> = The ball
            </div>
            <div>
              <span style={{ color: NEON_COLORS.cyan }}>● Cyan Dot + Border</span> = Lead Pin (must move)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
