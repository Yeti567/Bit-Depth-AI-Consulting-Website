'use client';

import { PILLARS } from '@/lib/assessment/pillars';

interface PillarScorebarProps {
  pillarScores: Record<string, number>;
  activePillar: string;
}

export function PillarScorebar({ pillarScores, activePillar }: PillarScorebarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
      {PILLARS.map((pillar) => {
        const score = pillarScores[pillar.id] || 0;
        const isActive = activePillar === pillar.id;
        
        return (
          <div
            key={pillar.id}
            className={`
              flex items-center gap-2 px-3 py-2 rounded-lg border backdrop-blur-sm transition-all duration-300
              ${isActive 
                ? 'bg-white/10 border-cyan-500/50 shadow-lg shadow-cyan-500/10' 
                : 'bg-white/5 border-white/10'
              }
            `}
          >
            <span className="text-lg sm:text-xl">{pillar.emoji}</span>
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-medium uppercase tracking-wide hidden sm:block">
                {pillar.label}
              </span>
              <span className="text-sm font-semibold text-white">
                {score}/20
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
