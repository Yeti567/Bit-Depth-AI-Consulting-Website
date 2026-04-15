'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface LeadGateProps {
  totalScore: number;
  grade: string;
  tierLabel: string;
  pillarScores: Record<string, number>;
  onUnlock: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  industry: string;
}

const INDUSTRIES = [
  'Trades (Plumbing, HVAC, Electrical, Roofing)',
  'Construction',
  'Oil and Gas',
  'Professional Services',
  'Healthcare / Medical Administration',
  'Transportation / Logistics',
  'Manufacturing',
  'Legal / Law Firms',
  'Real Estate',
  'Retail',
  'Other'
];

export function LeadGate({ totalScore, grade, tierLabel, pillarScores, onUnlock }: LeadGateProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Send data to backend API
      const response = await fetch('/api/assessment/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          total_score: totalScore,
          grade: grade,
          tier: tierLabel,
          pillar_scores: pillarScores,
          submitted_at: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        // Track GA4 event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'lead_form_submitted', {
            event_category: 'ai_readiness',
            total_score: totalScore,
            grade: grade,
            industry: data.industry,
          });
        }
      } else {
        console.warn('Lead submission returned non-OK status, but unlocking results anyway');
      }
    } catch (error) {
      console.warn('Lead submission failed, but unlocking results anyway:', error);
    } finally {
      setIsSubmitting(false);
      // Always unlock results - don't block users from their report
      onUnlock();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-lg mx-auto">
        {/* Teased score */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white/30 blur-sm">
              {totalScore}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                {totalScore}
              </div>
            </div>
          </div>
          <div className="mt-4 px-4 py-2 bg-white/10 rounded-full inline-block backdrop-blur-sm">
            <span className="text-white/60 text-sm">Your report is ready</span>
          </div>
        </div>

        {/* Lead gate card */}
        <div className="p-4 sm:p-6 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 text-center">
            Your AI Readiness Report is Ready
          </h2>
          <p className="text-gray-300 mb-6 text-center text-sm">
            Enter your details below to unlock your full report with personalized recommendations.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-3 min-h-[48px] bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="Jane Smith"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-3 min-h-[48px] bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="jane@company.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                Company Name *
              </label>
              <input
                id="company"
                type="text"
                {...register('company', { required: 'Company name is required' })}
                className="w-full px-4 py-3 min-h-[48px] bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="Smith Construction Ltd"
              />
              {errors.company && (
                <p className="mt-1 text-sm text-red-400">{errors.company.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium text-gray-300 mb-2">
                Industry *
              </label>
              <select
                id="industry"
                {...register('industry', { required: 'Industry is required' })}
                className="w-full px-4 py-3 min-h-[48px] bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
              >
                <option value="" className="bg-[#0B1426]">Select your industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry} className="bg-[#0B1426]">
                    {industry}
                  </option>
                ))}
              </select>
              {errors.industry && (
                <p className="mt-1 text-sm text-red-400">{errors.industry.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number (optional)
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                className="w-full px-4 py-3 min-h-[48px] bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="(optional)"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 min-h-[52px] bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Unlock My Full Report →'}
            </button>

            <p className="text-center text-xs text-gray-500">
              We'll email you a copy of your report. No spam. No pressure. Just your results.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
