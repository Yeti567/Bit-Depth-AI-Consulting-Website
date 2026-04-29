import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ContactForm } from '@/components/ui/contact-form';

export const metadata: Metadata = {
  title: 'Book an AI Audit or Discovery Call | Bit Depth AI Consulting',
  description:
    'Ready to find out where AI can save your business time and money? Book an AI Opportunity Audit or a free discovery call with Bit Depth AI Consulting.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/contact' },
  openGraph: {
    title: 'Contact Bit Depth AI Consulting',
    description:
      "Book your AI Opportunity Audit or a free 30-minute discovery call. Bit Depth serves Canadian SMBs across BC and Alberta. No pressure: if AI isn't the right move, we'll tell you.",
    url: 'https://bitdepthaiconsulting.com/contact',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Bit Depth AI Consulting contact card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'Contact Bit Depth AI Consulting',
    description:
      "Book your AI Opportunity Audit or a free 30-minute discovery call. No pressure: if AI isn't the right move, we'll tell you.",
    images: ['/images/og-contact.jpg']
  }
};

const nextSteps = [
  {
    title: 'We review your inquiry',
    description: 'Within one business day.'
  },
  {
    title: 'We schedule a 30-minute discovery call',
    description: 'We align on goals, constraints, and current systems.'
  },
  {
    title: 'We recommend your best starting point',
    description: 'No sales pressure and no unnecessary scope.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <ScrollReveal>
            <p className="eyebrow">Contact</p>
            <h1 className="mt-6 max-w-2xl">Let&apos;s talk about your business.</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Tell us what you&apos;re trying to improve. We&apos;ll help you find the right AI
              starting point, or tell you honestly if AI isn&apos;t the right move yet.
            </p>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal index={1} className="lg:sticky lg:top-24">
            <p className="eyebrow">What happens next</p>
            <ol className="mt-8 space-y-7">
              {nextSteps.map((step, index) => (
                <li key={step.title} className="flex gap-5">
                  <span className="font-mono text-sm tabular text-[var(--color-cyan)] pt-1">
                    {pad2(index + 1)}
                  </span>
                  <div>
                    <h3 className="text-[var(--color-navy)]">{step.title}</h3>
                    <p className="mt-2 text-[var(--color-slate)]">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-slate)]">
              <p>
                Email:{' '}
                <Link
                  href="mailto:blake@bitdepthaiconsulting.com"
                  className="text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
                >
                  blake@bitdepthaiconsulting.com
                </Link>
              </p>
              <p className="mt-2">
                LinkedIn:{' '}
                <Link
                  href="https://www.linkedin.com/company/bitdepth-ai-consulting-ltd"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
                >
                  Bit Depth AI Consulting
                </Link>
              </p>
            </div>

            <p className="mt-6 text-sm text-[var(--color-slate)]">
              No sales pressure. If AI isn&apos;t the right move for your business right now,
              we&apos;ll tell you.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
