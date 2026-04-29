import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CaseStudies } from '@/components/ui/case-studies';
import { buildAIAuditFaqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Opportunity Audit for Canadian Businesses | Bit Depth AI',
  description:
    'Find out exactly where AI will save your business time and money before you spend a dollar on it. Audits from $1,500. Full fee credited to any implementation.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/ai-audit' },
  openGraph: {
    title: 'AI Opportunity Audit for Canadian Businesses | Bit Depth AI',
    description:
      'Find out exactly where AI will save your business time and money before you spend a dollar on it. Audits from $1,500. Full fee credited to any implementation.',
    url: 'https://bitdepthaiconsulting.com/ai-audit',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-audit.jpg',
        width: 1200,
        height: 630,
        alt: 'Bit Depth AI Opportunity Audit for Canadian businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Opportunity Audit for Canadian Businesses | Bit Depth AI',
    description:
      'Find out exactly where AI will save your business time and money before you spend a dollar on it. Audits from $1,500.',
    images: ['/images/og-audit.jpg']
  }
};

const deliverables = [
  'A complete map of your current systems and where the gaps are.',
  'An AI Readiness Scorecard across five operational pillars.',
  'A prioritized opportunity list, ranked by impact and feasibility.',
  'ROI estimates for your top 3 to 5 use cases, so you know the numbers before you commit.',
  'A 90-day implementation roadmap you can act on immediately.',
  'A set of quick wins, lower-cost implementations that pay for themselves in the near term.',
  'Honest advice, including if AI is not the right move for your business right now.'
];

interface Tier {
  name: string;
  price: string;
  duration: string;
  fit: string;
  bullets: string[];
  creditWindow: string;
  highlight?: boolean;
}

const tiers: Tier[] = [
  {
    name: 'Quick scan',
    price: '$1,500 – $3,000',
    duration: '2 to 3 business days',
    fit: 'Micro SMB · 1 to 2 systems · 1 to 2 teams',
    bullets: [
      '2 discovery sessions',
      '3 to 5 key processes reviewed',
      'Basic AI readiness score',
      '90-day recommendation summary'
    ],
    creditWindow: 'Full fee credited if you proceed within 30 days.'
  },
  {
    name: 'Standard audit',
    price: '$5,000 – $7,500',
    duration: '5 to 8 business days',
    fit: 'SMB · 15 to 150 staff · 3+ departments',
    bullets: [
      '4 to 6 stakeholder interviews',
      'Full technology stack inventory',
      '6 to 10 processes mapped with time and cost baselines',
      'AI Readiness Scorecard across 5 pillars',
      'ROI estimates for top 3 use cases',
      'Prioritized 90-day implementation roadmap'
    ],
    creditWindow: 'Full fee credited if you proceed within 90 days.',
    highlight: true
  },
  {
    name: 'Deep-dive roadmap',
    price: '$8,000 – $15,000+',
    duration: '10 to 15 business days',
    fit: 'Larger SMB · multiple departments · multi-location',
    bullets: [
      '8 to 12 interviews across departments',
      'Structured data sampling and quality checks',
      '10 to 20 processes mapped with quantified cost baselines',
      'AI Readiness Score with risk analysis by pillar',
      '5 to 10 ROI use cases with fidelity ranges',
      'Multi-phase roadmap: 0 to 3, 3 to 12, 12 to 24 months'
    ],
    creditWindow: 'Full fee credited if you proceed within 90 days.'
  }
];

const creditSteps = [
  {
    title: 'Complete your audit',
    description:
      'We deliver your AI Opportunity Audit: roadmap, AI Readiness Scorecard, and ROI estimates. A standalone deliverable with real value regardless of what comes next.'
  },
  {
    title: 'Review on your own pace',
    description:
      'You review the findings on your own timeline. No pressure calls. If the audit finds AI is not right for your business yet, we will tell you. You will still have a clear operational roadmap worth more than you paid for it.'
  },
  {
    title: 'Your audit fee disappears',
    description:
      'When you sign your implementation agreement, the full audit fee is deducted from your project invoice, dollar for dollar. You pay only the difference. No minimums. No conditions beyond the 90-day window.'
  }
];

const faqs = [
  {
    question: 'What does an AI audit actually look like day to day?',
    answer:
      "We start with a short intake call to understand your business and get access to the information we need. From there we run structured interviews with you and your key staff, typically 4 to 12 people depending on the audit tier. We map your workflows, review your technology stack, and assess your data environment. Most of the work happens on our end. Your team's time commitment is focused and manageable. At the end you get a readout call where we walk you through everything we found."
  },
  {
    question: 'How long does the audit take?',
    answer:
      'Most standard audits take 5 to 8 business days. Quick scans can be done in 2 to 3 days. Deep-dive roadmaps for larger or more complex businesses take 10 to 15 days.'
  },
  {
    question: 'Do we need to do a lot of preparation before you start?',
    answer:
      'No heavy preparation required. We provide a short intake checklist and guide your team through the process. Most clients find it takes less time than they expected.'
  },
  {
    question: 'What if the audit finds that we are not ready for AI?',
    answer:
      'That is still a successful outcome. If your data is not clean or your systems are not integrated enough to support AI yet, we will tell you exactly what needs to be in place and give you a prioritized plan to get there. That foundation work has real value, and it means when you do invest in AI it will actually work.'
  },
  {
    question: 'What if the numbers do not justify building anything?',
    answer:
      'We will tell you. Honestly. We are not in the business of selling implementations that do not make financial sense. If the ROI is not there we will say so. You will still walk away with a clear picture of your operations and a roadmap for the future.'
  },
  {
    question: 'What exactly are the terms of the audit credit guarantee?',
    answer:
      'When you complete any tier of the Bit Depth AI Opportunity Audit, the full fee you paid is credited against your first implementation engagement, provided you sign your implementation agreement within 90 days of receiving your audit deliverables. The credit applies to any Bit Depth implementation service: workflow automation, custom AI workers, AI strategy and roadmapping, or training and enablement. It is applied as a line-item deduction on your implementation invoice. There is no minimum project size. The credit has no cash value, is non-transferable, and applies to your first implementation engagement only. Extensions are handled on a case-by-case basis for clients with a legitimate reason for delay.'
  }
];

export default function AIAuditPage() {
  return (
    <PageShell>
      <Script id="ai-audit-faq-schema" type="application/ld+json">
        {JSON.stringify(buildAIAuditFaqSchema())}
      </Script>

      {/* 1. Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Our entry offer</p>
            <h1 className="mt-6 max-w-2xl">
              Know where AI pays off before you spend a dollar.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Most businesses waste their first AI budget on the wrong thing. The AI Opportunity
              Audit eliminates that risk. In 5 to 10 business days you get a prioritized picture of
              where AI will make the biggest impact, with honest ROI estimates to back it up.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="#pricing" className="btn-outline">
                See pricing
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              Audits from <span className="tabular">$1,500</span>. Full fee credited to any
              implementation within 90 days.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/ai-audit-hero.webp.webp"
              alt="Business owner and consultant reviewing AI readiness dashboard at boardroom table"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Deliverables */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">What you get</p>
            <h2 className="mt-6">By the end of the audit.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Every audit produces the same set of deliverables. The depth scales with the tier.
            </p>
          </ScrollReveal>
          <ul className="mt-12 grid gap-x-10 gap-y-5 md:grid-cols-2">
            {deliverables.map((item, index) => (
              <ScrollReveal key={item} index={index}>
                <li className="flex items-start gap-3 text-[var(--color-charcoal)]">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                  <span>{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
          <ScrollReveal className="mt-14">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-md border border-[var(--color-border)]">
              <Image
                src="/images/ai-audit-supporting.webp.webp"
                alt="Printed AI readiness roadmap beside a laptop showing prioritized business opportunities"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Pricing */}
      <section id="pricing" className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-6">Three tiers. One guarantee.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Choose the audit tier that fits your business. If you move forward with
              implementation, your full audit fee comes off the project invoice on day one.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <ScrollReveal
                key={tier.name}
                index={index}
                className={`flex flex-col rounded-md border bg-white p-7 ${
                  tier.highlight
                    ? 'border-[var(--color-navy)] shadow-soft'
                    : 'border-[var(--color-border)]'
                }`}
              >
                {tier.highlight ? (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-cyan)]">
                    Most popular
                  </p>
                ) : (
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                    {tier.name}
                  </p>
                )}
                <h3 className="mt-4 text-[var(--color-navy)]">
                  {tier.highlight ? tier.name : <>&nbsp;</>}
                </h3>
                <p className="mt-3 tabular text-2xl font-bold text-[var(--color-navy)]">
                  {tier.price}
                </p>
                <p className="mt-1 text-sm text-[var(--color-slate)]">{tier.duration}</p>
                <p className="mt-1 text-sm text-[var(--color-slate)]">{tier.fit}</p>
                <ul className="mt-6 flex-1 space-y-2.5 text-sm text-[var(--color-charcoal)]">
                  {tier.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[var(--color-cyan)]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-[var(--color-border)] pt-4 text-xs text-[var(--color-slate)]">
                  {tier.creditWindow}
                </p>
                <Link
                  href="/contact"
                  className={`${tier.highlight ? 'btn-primary' : 'btn-outline'} mt-5 w-full justify-center`}
                >
                  Book an AI Audit
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Audit credit explainer */}
      <section id="audit-credit-details" className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">The audit credit</p>
            <h2 className="mt-6">How it works.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              The mechanism is simple. The math is even simpler.
            </p>
          </ScrollReveal>

          <ol className="mt-12 grid gap-12 md:grid-cols-3">
            {creditSteps.map((step, index) => (
              <ScrollReveal key={step.title} index={index}>
                <li>
                  <p className="font-mono text-sm text-[var(--color-cyan)] tabular">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-[var(--color-navy)]">{step.title}</h3>
                  <p className="mt-3 text-[var(--color-slate)]">{step.description}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>

          <ScrollReveal className="mt-14 max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
              Example
            </p>
            <pre className="mt-4 overflow-x-auto rounded-md border border-[var(--color-border)] bg-white p-6 font-mono text-sm leading-relaxed tabular-nums text-[var(--color-charcoal)]">
{`Standard audit             $6,500
Workflow automation        $22,000
Audit credit applied       -$6,500
─────────────────────────────────
You pay                    $15,500`}
            </pre>
          </ScrollReveal>

          <p className="mt-8 max-w-2xl text-xs text-[var(--color-slate)]">
            Credit applies to any Bit Depth implementation service: workflow automation, custom AI
            workers, AI strategy, or training engagements. Credit window is 90 days from audit
            delivery date. Credit is non-transferable, has no cash value, and applies to your first
            implementation engagement only.
          </p>
        </div>
      </section>

      {/* 5. Case studies */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <CaseStudies />
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-6">Frequently asked.</h2>
          </ScrollReveal>
          <div className="mt-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} index={index}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[var(--color-navy)]">
                    <span className="font-semibold">{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-[var(--color-cyan)] transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[var(--color-slate)]">{faq.answer}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">The math</span>
            <h2 className="mt-6 text-white">
              If we find <span className="tabular">$50,000</span> in recoverable time, the{' '}
              <span className="tabular">$5,000</span> audit is the best investment you make this
              year.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              The audit is not a sales pitch. It is a diagnosis. You will know exactly where your
              business stands, what the opportunities are, and what they are worth, before you
              commit to building anything.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
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
