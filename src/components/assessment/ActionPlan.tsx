'use client';

import { PILLARS } from '@/lib/assessment/pillars';
import { getRecommendations } from '@/lib/assessment/recommendations';

interface ActionPlanProps {
  pillarScores: Record<string, number>;
}

export function ActionPlan({ pillarScores }: ActionPlanProps) {
  const getStatus = (score: number) => {
    if (score >= 15) return { label: 'Strong', color: 'text-green-400' };
    if (score >= 7) return { label: 'Getting There', color: 'text-cyan-400' };
    return { label: 'Needs Work', color: 'text-amber-400' };
  };

  const getProgressColor = (score: number) => {
    if (score >= 15) return 'bg-green-500';
    if (score >= 7) return 'bg-cyan-500';
    return 'bg-amber-500';
  };

  return (
    <div className="space-y-8">
      {PILLARS.map((pillar) => {
        const score = pillarScores[pillar.id] || 0;
        const status = getStatus(score);
        const recommendations = getRecommendations(pillar.id, score);
        const progressPercent = (score / 20) * 100;

        return (
          <div
            key={pillar.id}
            className="p-6 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{pillar.emoji}</span>
                <div>
                  <h3 className="text-xl font-bold text-white">{pillar.label}</h3>
                  <span className={`text-sm font-semibold ${status.color}`}>
                    {status.label}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-white">{score}/20</div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 bg-white/10 rounded-full mb-6 overflow-hidden">
              <div
                className={`h-full ${getProgressColor(score)} transition-all duration-500`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Recommendations */}
            <div className="space-y-3">
              {recommendations.map((rec, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-cyan-400">{index + 1}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
