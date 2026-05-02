import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Custom AI Workers for Trades and Contractors | BitDepth AI',
  description:
    'Purpose-built AI agents that perform defined job functions inside your business. Intake, estimating, compliance, and AR follow-up. From $10,000.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/custom-ai-workers' }
};

const workers = [
  {
    title: 'Intake worker.',
    description: 'Answers inbound inquiries, qualifies the lead, and books the appointment.'
  },
  {
    title: 'Estimating assistant.',
    description: 'Drafts quotes from voice notes or photos using your pricing rules.'
  },
  {
    title: 'Compliance assistant.',
    description: 'Reviews safety documentation against your OHSMS and flags gaps.'
  },
  {
    title: 'AR follow-up worker.',
    description: 'Sends sequenced collections messages and escalates to a human at the right moment.'
  }
];

export default function CustomAiWorkersPage() {
  return (
    <PageShell>
      <Script id="service-custom-ai-workers-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'Custom AI Workers',
            'Purpose-built AI agents that perform defined job functions inside your business. Intake, estimating, compliance, and AR follow-up. From $10,000.',
            'https://bitdepthaiconsulting.com/services/custom-ai-workers',
            'AI Consulting'
          )
        )}
      </Script>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">A new job function</p>
            <h1 className="mt-6">Custom AI Workers. Purpose-built AI agents for defined work.</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              A custom AI worker is an agent that performs a specific job inside your business, day
              after day, without supervision. Not a chatbot. A piece of software that does work a
              human used to do. We design, build, and train the agent on your data and your
              processes, then maintain it.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit to identify which job function is the right first AI worker
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              From <span className="tabular">$10,000</span> per worker, with optional managed
              maintenance from <span className="tabular">$750</span> per month.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Worker types */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Common AI workers</p>
            <h2 className="mt-6">Four roles we build, day after day.</h2>
          </ScrollReveal>
          <ul className="mt-10 space-y-5">
            {workers.map((item) => (
              <li key={item.title} className="flex gap-3 text-[var(--color-charcoal)]">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-cyan)]" />
                <span>
                  <strong className="font-semibold text-[var(--color-navy)]">{item.title}</strong>{' '}
                  <span className="text-[var(--color-slate)]">{item.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Start with the right job function</span>
            <h2 className="mt-6 text-white">The audit picks the right first worker.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Building the wrong worker first is expensive. The audit identifies the highest-ROI
              role before any work begins.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a discovery call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
