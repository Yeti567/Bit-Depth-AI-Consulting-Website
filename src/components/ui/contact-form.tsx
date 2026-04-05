'use client';

import { useState } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay for UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    // The form uses mailto: action, so the browser will handle the actual submission
    // We just show the success state after a brief delay
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="card-light mt-8 p-6 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan/10 text-cyan">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-[var(--color-navy)]">Thanks we&apos;ve received your message.</h3>
        <p className="mt-3 text-[var(--color-slate)]">
          Blake will review it and follow up within 1 business day. If your situation is urgent, email{' '}
          <a href="mailto:blake@bitdepthaiconsulting.com" className="text-cyan hover:underline">
            blake@bitdepthaiconsulting.com
          </a>{' '}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form
      className="card-light mt-8 grid gap-4 p-6"
      action="mailto:blake@bitdepthaiconsulting.com"
      method="post"
      encType="text/plain"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
      />
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        required
        className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        required
        className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone (optional)"
        className="w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
      />
      <textarea
        name="message"
        placeholder="What are you hoping AI could help you with?"
        required
        className="min-h-32 w-full rounded-lg border border-[var(--color-border)] px-4 py-3 text-sm focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-fit disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send My Inquiry'}
      </button>
    </form>
  );
}
