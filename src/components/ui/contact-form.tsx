'use client';

import { useState } from 'react';

type ContactFormFields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload: ContactFormFields = {
      name: String(formData.get('name') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim()
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.error || 'We could not send your message right now. Please try again.');
        return;
      }

      form.reset();
      setIsSubmitted(true);
    } catch {
      setError('We could not send your message right now. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="mt-8 rounded-md border border-[var(--color-border)] bg-white p-6 shadow-soft">
        <p className="eyebrow">Received</p>
        <h3 className="mt-5 text-[var(--color-navy)]">Thanks. We&apos;ve got your message.</h3>
        <p className="mt-3 text-[var(--color-slate)]">
          Blake will review it and follow up within one business day. If your situation is urgent,
          email{' '}
          <a
            href="mailto:blake@bitdepthaiconsulting.com"
            className="text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
          >
            blake@bitdepthaiconsulting.com
          </a>{' '}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-8 grid gap-4 rounded-md border border-[var(--color-border)] bg-white p-6 shadow-soft"
    >
      <div>
        <label htmlFor="contact-name" className="sr-only">
          Full name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your full name"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-company" className="sr-only">
          Company name
        </label>
        <input
          id="contact-company"
          type="text"
          name="company"
          autoComplete="organization"
          placeholder="Your company name"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="sr-only">
          Email address
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Your email address"
          required
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="sr-only">
          Phone number (optional)
        </label>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          placeholder="Phone number (optional)"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="sr-only">
          What are you hoping AI could help you with?
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="What are you hoping AI could help you with?"
          required
        />
      </div>

      {error ? (
        <p role="alert" className="text-sm text-red-700">
          {error}
        </p>
      ) : null}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {isSubmitting ? 'Sending…' : 'Send my inquiry'}
        </button>
      </div>
    </form>
  );
}
