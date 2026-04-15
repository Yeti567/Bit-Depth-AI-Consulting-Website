'use client';

import { ScoreRing } from './ScoreRing';
import { RadarChart } from './RadarChart';
import { ActionPlan } from './ActionPlan';
import { getTier } from '@/lib/assessment/tiers';
import { PILLARS } from '@/lib/assessment/pillars';

interface ResultsProps {
  pillarScores: Record<string, number>;
  totalScore: number;
  onRestart: () => void;
}

export function Results({ pillarScores, totalScore, onRestart }: ResultsProps) {
  const tier = getTier(totalScore);

  return (
    <div className="min-h-screen px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Overall Score Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Your AI Readiness Score
          </h2>
          <ScoreRing
            score={totalScore}
            grade={tier.grade}
            label={tier.label}
            gradient={tier.gradient}
          />
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            {totalScore >= 80
              ? "Your business is well-positioned for AI adoption. You have strong foundations across most areas and can move forward with confidence."
              : totalScore >= 60
              ? "Your business has good AI readiness with some areas needing attention. Focus on the recommendations below to strengthen your foundation."
              : totalScore >= 40
              ? "Your business is developing AI readiness. There are clear opportunities to improve before launching major AI initiatives."
              : "Your business needs foundational work before AI adoption. Focus on the recommendations below to build a solid base."}
          </p>
        </section>

        {/* Radar Chart Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Performance by Area
          </h3>
          <RadarChart pillarScores={pillarScores} />
        </section>

        {/* Pillar Score Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {PILLARS.map((pillar) => {
              const score = pillarScores[pillar.id] || 0;
              const progressPercent = (score / 20) * 100;
              const getColor = () => {
                if (score >= 15) return 'bg-green-500';
                if (score >= 7) return 'bg-cyan-500';
                return 'bg-amber-500';
              };

              return (
                <div
                  key={pillar.id}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm text-center"
                >
                  <div className="text-3xl mb-2">{pillar.emoji}</div>
                  <div className="text-sm text-gray-400 font-medium uppercase tracking-wide mb-2">
                    {pillar.label}
                  </div>
                  <div className="text-2xl font-bold text-white mb-3">
                    {score}/20
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getColor()} transition-all duration-500`}
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Action Plan Section */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Your Personalized Action Plan
          </h3>
          <ActionPlan pillarScores={pillarScores} />
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="p-6 sm:p-8 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Ready for the Full Picture?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              This assessment gives you the overview. Our AI Opportunity Discovery Audit goes deeper with live interviews, process mapping, and a custom 90-day roadmap with ROI projections.
            </p>
            <a
              href="https://calendly.com/blake-bitdepthaiconsulting/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-8 py-4 min-h-[52px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Book a Free Discovery Call →
            </a>
          </div>
        </section>

        {/* Restart Button */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="w-full sm:w-auto px-8 py-4 min-h-[48px] bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            Take Assessment Again
          </button>
        </div>
      </div>
    </div>
  );
}
