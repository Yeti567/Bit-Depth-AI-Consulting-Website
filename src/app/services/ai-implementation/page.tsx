import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Implementation for Canadian Trades | BitDepth AI',
  description:
    'Phased implementation of AI workers, integrations, dashboards, and automations the audit identified. Audit fee credited 100 percent within 90 days.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/ai-implementation' }
};

const phases = [
  {
    name: 'Phase 1. Quick Wins',
    cadence: 'Two to four week sprints',
    scope: 'Typical scope: missed call recovery, auto-quote, invoice automation.',
    range: '$12,000 to $25,000'
  },
  {
    name: 'Phase 2. Integration',
    cadence: 'Connecting the systems you already use',
    scope: 'Dispatch to accounting, CRM to quoting, field data to office.',
    range: '$15,000 to $40,000'
  },
  {
    name: 'Phase 3. Custom AI Workers',
    cadence: 'Purpose-built agents handling defined job functions',
    scope: 'Intake, qualification, dispatch, follow-up.',
    range: '$20,000 to $60,000'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function AiImplementationPage() {
  return (
    <PageShell>
      <Script id="service-ai-implementation-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'AI Implementation',
            'Phased implementation of AI workers, integrations, dashboards, and automations identified in the audit. Audit fee credited 100 percent within 90 days.',
            'https://bitdepthaiconsulting.com/services/ai-implementation',
            'AI Consulting'
          )
        )}
      </Script>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">After the audit</p>
            <h1 className="mt-6">AI Implementation for Canadian trades. Build what the audit recommended.</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              Most clients move from the audit straight into a phased implementation. We build the
              integrations, the AI workers, the dashboards, or the automations the audit identified,
              in priority order, with the full audit fee credited against the first invoice.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?topic=audit" className="btn-primary">
                Book an AI Audit
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              Implementation work begins after the audit. Audit fee is credited{' '}
              <span className="tabular">100%</span> within 90 days.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Phases */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">How implementation runs</p>
            <h2 className="mt-6">Three phases, sequenced by ROI.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {phases.map((phase, index) => (
              <ScrollReveal key={phase.name} index={index}>
                <article className="flex h-full flex-col rounded-md border border-[var(--color-border)] bg-white p-7">
                  <p className="font-mono text-sm text-[var(--color-cyan)] tabular">{pad2(index + 1)}</p>
                  <h3 className="mt-3 text-[var(--color-navy)]">{phase.name}</h3>
                  <p className="mt-3 text-sm text-[var(--color-slate)]">{phase.cadence}</p>
                  <p className="mt-4 text-[var(--color-charcoal)]">{phase.scope}</p>
                  <p className="mt-6 border-t border-[var(--color-border)] pt-4 text-sm font-semibold text-[var(--color-navy)] tabular">
                    {phase.range}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Start where the audit ends</span>
            <h2 className="mt-6 text-white">Build the highest-ROI piece first.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Implementation always begins with the diagnostic. The audit fee comes off the first
              invoice.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact?topic=audit" className="btn-primary">
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
