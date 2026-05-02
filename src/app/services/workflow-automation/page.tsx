import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Workflow Automation for Canadian Trades | BitDepth AI',
  description:
    'Stop your office from being the integration. We connect quote-to-job, field-to-office, customer comms, and compliance flows. From $5,000 per workflow.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/workflow-automation' }
};

const automations = [
  {
    title: 'Quote to job.',
    description: 'Approved estimates create dispatch records, customer files, and invoices.'
  },
  {
    title: 'Field to office.',
    description:
      'Technician notes, photos, and time entries flow back to accounting without re-keying.'
  },
  {
    title: 'Customer comms.',
    description: 'Automated booking confirmations, on-the-way SMS, and post-job reviews.'
  },
  {
    title: 'Compliance.',
    description: 'Automatic logging of safety meetings, training records, and incident reports.'
  }
];

export default function WorkflowAutomationPage() {
  return (
    <PageShell>
      <Script id="service-workflow-automation-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'Workflow Automation',
            'Connect quote-to-job, field-to-office, customer comms, and compliance flows. From $5,000 per workflow.',
            'https://bitdepthaiconsulting.com/services/workflow-automation',
            'Business Process Automation'
          )
        )}
      </Script>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Eliminate the manual</p>
            <h1 className="mt-6">Workflow Automation for trades and contractors. Stop your office from being the integration.</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              When jobs get re-keyed into three systems, your office staff is the integration
              layer. We connect the systems instead, so a job moves from quote to invoice without
              anyone re-typing anything.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit to find the highest-ROI automations first
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              From <span className="tabular">$5,000</span> per workflow, depending on the number of
              systems and the integration complexity.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Automations */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Common automations</p>
            <h2 className="mt-6">Four flows we build for trades and contractors.</h2>
          </ScrollReveal>
          <ul className="mt-10 space-y-5">
            {automations.map((item) => (
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
            <span className="eyebrow">Start where it leaks the most</span>
            <h2 className="mt-6 text-white">The audit picks the right automation first.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Building the wrong automation first is how businesses waste their first AI budget. The
              audit identifies the highest-ROI flow before any work begins.
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
