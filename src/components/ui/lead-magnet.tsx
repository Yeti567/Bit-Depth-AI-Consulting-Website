'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CheckCircle, FileCheck } from 'lucide-react';

interface LeadMagnetProps {
  source: string;
}

export function LeadMagnet({ source }: LeadMagnetProps) {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName.trim()) {
      setError('Please enter your first name.');
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/lead-magnet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim().toLowerCase(),
          source,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        setIsSubmitting(false);
        return;
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan/10 text-cyan">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-[var(--color-navy)]">
          You&apos;re all set.
        </h3>
        <p className="mt-3 text-[var(--color-slate)]">
          Check your inbox it&apos;ll be there within a few minutes. If you don&apos;t see it, check your junk folder.
        </p>
      </ScrollReveal>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <ScrollReveal className="text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl border border-cyan/40 bg-cyan/10 text-cyan">
          <FileCheck className="h-7 w-7" />
        </div>
        <h2 className="mt-5 text-3xl font-extrabold md:text-4xl text-[var(--color-navy)]">
          Get the Free AI Readiness Checklist
        </h2>
        <p className="mt-3 text-[var(--color-slate)]">
          A practical 20-point checklist for Canadian business owners evaluating whether AI will actually save them time and money. No fluff, no sales pitch.
        </p>
      </ScrollReveal>

      <ScrollReveal index={1} className="mt-8">
        <form onSubmit={handleSubmit} className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_28px_rgba(11,31,59,0.08)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`firstName-${source}`} className="sr-only">
                First Name
              </label>
              <input
                type="text"
                id={`firstName-${source}`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                required
              />
            </div>
            <div>
              <label htmlFor={`email-${source}`} className="sr-only">
                Email
              </label>
              <input
                type="email"
                id={`email-${source}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email"
                className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
                required
              />
            </div>
          </div>

          {error && (
            <p className="mt-4 text-sm text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary mt-4 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Me the Checklist'}
          </button>

          <p className="mt-4 text-xs text-[var(--color-slate)]">
            No spam. Unsubscribe anytime. Canadian data handling pIPEDA compliant.
          </p>
        </form>
      </ScrollReveal>
    </div>
  );
}
