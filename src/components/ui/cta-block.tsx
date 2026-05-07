import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export type CtaIntent = 'discovery' | 'roadmap' | 'missed-calls' | 'automation' | 'risk';

interface CtaConfig {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

const VARIANTS: Record<CtaIntent, CtaConfig> = {
  discovery: {
    eyebrow: 'Soft entry',
    title: 'Not sure where the money is going? Start with $250.',
    body: 'A focused two-week diagnostic of where missed calls, slow quotes, and broken admin are leaking revenue from your business. Written report. Credited toward implementation if you move forward.',
    primaryHref: '/services/profit-leak-review',
    primaryLabel: 'Book a Profit Leak Review',
    secondaryHref: '/services/ai-audit',
    secondaryLabel: 'Or learn about the AI Opportunity Audit'
  },
  roadmap: {
    eyebrow: 'Strategic next step',
    title: 'Ready to plan a real implementation? Book the audit.',
    body: 'A structured 14-day diagnostic. $5,000 flat. The full fee is credited toward implementation if you proceed within 90 days. You either get a roadmap you can hand to any vendor, or you get the audit free as part of building it.',
    primaryHref: '/contact?topic=audit',
    primaryLabel: 'Book an AI Opportunity Audit',
    secondaryHref: '/services/profit-leak-review',
    secondaryLabel: 'Not ready? Start with a $250 Profit Leak Review'
  },
  'missed-calls': {
    eyebrow: 'Stop the leak',
    title: 'Missing calls right now? Book a fit check.',
    body: 'A 15-minute call to see if a missed-call recovery system makes sense for your business. We look at your inbound volume, your average ticket, and your existing booking flow. If the math does not work, we tell you.',
    primaryHref: '/services/missed-call-text-back',
    primaryLabel: 'Book a 15-minute fit check',
    secondaryHref: '/services/profit-leak-review',
    secondaryLabel: 'Or run the full Profit Leak Review for $250'
  },
  automation: {
    eyebrow: 'Stop the double-entry',
    title: 'Office team doing the integration by hand?',
    body: 'Workflow automation connects the tools you already pay for so the work stops getting done twice. Quote-to-job, field-to-office, customer comms, and compliance flows. From $5,000 per workflow.',
    primaryHref: '/services/workflow-automation',
    primaryLabel: 'See workflow automation pricing',
    secondaryHref: '/services/profit-leak-review',
    secondaryLabel: 'Or start with a Profit Leak Review for $250'
  },
  risk: {
    eyebrow: 'Trust and control',
    title: 'Worried about data, safety, or AI going off-script?',
    body: 'Plain-English answers on how we handle your data, train our automations, test before launch, and keep watching after launch. No legal language, no buzzwords.',
    primaryHref: '/security-and-data',
    primaryLabel: 'Read about security and data',
    secondaryHref: '/services/profit-leak-review',
    secondaryLabel: 'Or start with a Profit Leak Review for $250'
  }
};

interface CtaBlockProps {
  intent: CtaIntent;
  /**
   * Section background. Defaults to navy (matches the standard final-CTA treatment on every
   * deeply built page). Pass 'offwhite' for an inline mid-page CTA on a cream-section page.
   */
  background?: 'navy' | 'offwhite';
}

export function CtaBlock({ intent, background = 'navy' }: CtaBlockProps) {
  const config = VARIANTS[intent];
  const isNavy = background === 'navy';
  const sectionClass = isNavy
    ? 'section-navy section-space'
    : 'section-offwhite section-space section-rule';
  const headingClass = isNavy ? 'mt-6 text-white' : 'mt-6';
  const bodyClass = isNavy
    ? 'mx-auto mt-6 max-w-xl text-white/75'
    : 'mx-auto mt-6 max-w-2xl text-[var(--color-charcoal)]';

  return (
    <section className={sectionClass}>
      <div className="container-shell max-w-3xl text-center">
        <ScrollReveal>
          <span className="eyebrow justify-center">{config.eyebrow}</span>
          <h2 className={headingClass}>{config.title}</h2>
          <p className={bodyClass}>{config.body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={config.primaryHref} className="btn-primary">
              {config.primaryLabel}
            </Link>
            {config.secondaryHref && config.secondaryLabel ? (
              <Link href={config.secondaryHref} className="btn-outline">
                {config.secondaryLabel}
              </Link>
            ) : null}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
