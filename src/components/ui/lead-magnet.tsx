'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

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
    } catch {
      setError('Failed to submit. Please try again.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <ScrollReveal className="mx-auto max-w-2xl">
        <p className="eyebrow">All set</p>
        <h3 className="mt-6 text-[var(--color-navy)]">Check your inbox.</h3>
        <p className="mt-4 text-[var(--color-slate)]">
          It will arrive within a few minutes. If you don&apos;t see it, check your junk folder.
        </p>
      </ScrollReveal>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <ScrollReveal>
        <p className="eyebrow">Free download</p>
        <h2 className="mt-6 text-[var(--color-navy)]">The AI readiness checklist.</h2>
        <p className="mt-5 max-w-2xl text-[var(--color-slate)]">
          A practical 20-point checklist for Canadian business owners evaluating whether AI will
          actually save them time and money. No fluff, no sales pitch.
        </p>
      </ScrollReveal>

      <ScrollReveal index={1} className="mt-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-md border border-[var(--color-border)] bg-white p-6 shadow-soft"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor={`firstName-${source}`} className="sr-only">
                First name
              </label>
              <input
                type="text"
                id={`firstName-${source}`}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your first name"
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
                required
              />
            </div>
          </div>

          {error && <p className="mt-4 text-sm text-red-700">{error}</p>}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
          >
            {isSubmitting ? 'Sending…' : 'Send me the checklist'}
          </button>

          <p className="mt-4 text-xs text-[var(--color-slate)]">
            No spam. Unsubscribe anytime. PIPEDA-compliant Canadian data handling.
          </p>
        </form>
      </ScrollReveal>
    </div>
  );
}
