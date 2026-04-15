'use client';

import { useState } from 'react';
import { Question } from '@/lib/assessment/questions';
import { PILLARS } from '@/lib/assessment/pillars';

interface QuestionCardProps {
  question: Question;
  onAnswer: (score: number) => void;
  selectedScore: number | null;
}

export function QuestionCard({ question, onAnswer, selectedScore }: QuestionCardProps) {
  const [showInfo, setShowInfo] = useState(false);
  const pillar = PILLARS.find(p => p.id === question.pillar);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Pillar tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="text-2xl">{pillar?.emoji}</span>
        <span 
          className="px-3 py-1 text-sm font-semibold uppercase tracking-wide rounded-full"
          style={{ 
            backgroundColor: `${pillar?.color}20`,
            color: pillar?.color,
            border: `1px solid ${pillar?.color}40`
          }}
        >
          {pillar?.label}
        </span>
      </div>

      {/* Question text */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
        {question.text}
      </h2>

      {/* Info toggle */}
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-6"
      >
        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs">i</span>
        <span>What does this mean?</span>
      </button>

      {/* Info panel */}
      {showInfo && (
        <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
          <p className="text-gray-300 text-sm leading-relaxed">
            {question.info}
          </p>
        </div>
      )}

      {/* Answer options */}
      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedScore === option.score;
          
          return (
            <button
              key={index}
              onClick={() => onAnswer(option.score)}
              className={`
                w-full text-left p-4 sm:p-5 min-h-[52px] rounded-lg border transition-all duration-200
                ${isSelected 
                  ? 'bg-cyan-500/20 border-cyan-500/50 text-white' 
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                }
              `}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
