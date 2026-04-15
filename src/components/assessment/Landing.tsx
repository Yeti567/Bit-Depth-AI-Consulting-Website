'use client';

import { PILLARS } from '@/lib/assessment/pillars';

interface LandingProps {
  onStart: () => void;
}

export function Landing({ onStart }: LandingProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span className="px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-cyan-500/20 text-cyan-400 rounded-full border border-cyan-500/30">
            Free Assessment Tool
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
          AI Readiness Assessment
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          Find out if your business is ready for AI, where the biggest opportunities are, and what to fix first.
        </p>

        {/* Sub-text */}
        <p className="text-gray-400 mb-8">
          25 questions across 5 business areas. Takes about 8 minutes.
        </p>

        {/* Pillar chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm"
            >
              <span className="text-xl">{pillar.emoji}</span>
              <span className="text-sm text-gray-300">{pillar.label}</span>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          onClick={onStart}
          className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Start Your Assessment
          <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
        </button>

        {/* Footer note */}
        <p className="mt-8 text-sm text-gray-500">
          No signup required. Your results are private.
        </p>
      </div>
    </div>
  );
}
