import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ServiceAnchorNav } from '@/components/service-anchor-nav';

export const metadata: Metadata = {
  title: 'AI Consulting Services for Canadian SMBs | Bit Depth AI',
  description:
    'Five AI consulting services for Canadian businesses: discovery audits, workflow automation, custom AI workers, strategy, and training. Starting at $1,500.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services' },
  openGraph: {
    title: 'AI Consulting Services for Canadian SMBs | Bit Depth AI',
    description:
      'Five AI consulting services for Canadian businesses: discovery audits, workflow automation, custom AI workers, strategy, and training. Starting at $1,500.',
    url: 'https://bitdepthaiconsulting.com/services',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      { url: '/images/og-services.jpg', width: 1200, height: 630, alt: 'Bit Depth AI Consulting services' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting Services for Canadian SMBs | Bit Depth AI',
    description:
      'Five AI consulting services for Canadian businesses: discovery audits, workflow automation, custom AI workers, strategy, and training.',
    images: ['/images/og-services.jpg']
  }
};

interface PricingRow {
  label: string;
  value: string;
}

interface ServiceBlock {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  forWhom: string;
  listHeading: string;
  bullets: Array<string | { strong: string; text: string }>;
  pricing: PricingRow[];
  pricingNote?: string;
  ctaLabel: string;
  ctaHref: string;
}

const services: ServiceBlock[] = [
  {
    id: 'ai-audit',
    eyebrow: 'Start here',
    title: 'Before you build, know where you stand.',
    body:
      "Most businesses that struggle with AI didn't fail because the technology didn't work. They failed because they weren't ready for it: wrong data, disconnected systems, unclear processes. The AI Opportunity Audit tells you exactly where your business stands before you spend a dollar on implementation. You get a clear picture of what's working, what isn't, and what the highest-value opportunities are.",
    forWhom:
      'Business owners and operations leaders who want to make a smart first move on AI, not just the fastest one.',
    listHeading: "What's included",
    bullets: [
      'Stakeholder interviews across your key departments',
      'Full inventory of your current technology stack and integrations',
      'Mapping of 6 to 20 core workflows with time and cost baselines',
      'AI Readiness Scorecard across five operational pillars',
      'Prioritized opportunity list, quick wins and long-term initiatives',
      'ROI estimates for your top 3 to 5 use cases',
      'A 90-day implementation roadmap you can act on immediately'
    ],
    pricing: [
      { label: 'Quick scan', value: '$1,500 – $3,000 · 2 to 3 days' },
      { label: 'Standard audit', value: '$5,000 – $7,500 · 5 to 8 days' },
      { label: 'Deep-dive roadmap', value: '$8,000 – $15,000+ · 10 to 15 days' }
    ],
    pricingNote: 'Full audit fee credited dollar-for-dollar against any implementation within 90 days.',
    ctaLabel: 'Book an AI Audit',
    ctaHref: '/ai-audit'
  },
  {
    id: 'workflow-automation',
    eyebrow: 'Eliminate the manual work',
    title: 'Stop paying people to do what a system should handle.',
    body:
      "If your team spends hours every week on repetitive tasks, re-entering data, chasing approvals, building the same reports, processing the same documents, that's recoverable time. Workflow automation replaces those manual steps with reliable, consistent systems that run without supervision. We design and build automation around your actual processes, not generic templates. Most clients recover 10 to 40 hours per week within the first implementation.",
    forWhom:
      'Operations-heavy businesses where staff time is being eaten by admin, data entry, or manual handoffs between systems.',
    listHeading: 'Common automations we build',
    bullets: [
      'Invoice processing and accounts payable / receivable automation',
      'HR onboarding document preparation and routing',
      'Sales lead qualification and CRM enrichment',
      'Customer service triage and auto-response workflows',
      'Scheduled report generation from live business data',
      'Dispatch, scheduling, and routing optimization'
    ],
    pricing: [
      { label: 'Starter', value: '$5,000 – $12,000' },
      { label: 'Standard suite', value: '$15,000 – $35,000' },
      { label: 'Enterprise program', value: '$40,000 – $100,000+' },
      { label: 'Ongoing support', value: '$1,500 – $4,000 / month' }
    ],
    pricingNote: 'Every implementation begins with the audit.',
    ctaLabel: 'Book an AI Audit',
    ctaHref: '/ai-audit'
  },
  {
    id: 'custom-ai-workers',
    eyebrow: 'Your digital workforce',
    title: 'AI that does a job, not just a task.',
    body:
      "A workflow automation handles a process. An AI Worker handles a role. These are purpose-built AI agents designed to perform a defined job function inside your business on an ongoing basis: answering questions, processing documents, qualifying leads, reconciling invoices. Think of it as a highly capable digital team member who works around the clock, doesn't make the same mistake twice, and costs a fraction of a full-time hire.",
    forWhom:
      "Businesses that have identified a specific function that needs to run consistently and at scale, and don't want to hire another person to do it.",
    listHeading: 'Examples of AI Workers we build',
    bullets: [
      {
        strong: 'Operations Assistant.',
        text: 'Answers internal questions, searches SOPs, surfaces relevant procedures for field staff.'
      },
      {
        strong: 'Sales Intelligence Agent.',
        text: 'Qualifies leads, enriches CRM records, drafts follow-up emails.'
      },
      {
        strong: 'Document Processing Agent.',
        text: 'Extracts, classifies, and routes incoming documents automatically.'
      },
      {
        strong: 'Finance Reconciliation Agent.',
        text: 'Matches invoices to purchase orders, flags exceptions, routes for approval.'
      }
    ],
    pricing: [
      { label: 'Build', value: 'From $10,000' },
      { label: 'Ongoing management', value: '$1,500 – $3,000 / month' }
    ],
    pricingNote: 'Retainer covers monitoring, refinement, and improvement of your AI Worker.',
    ctaLabel: 'Book an AI Audit',
    ctaHref: '/ai-audit'
  },
  {
    id: 'ai-strategy',
    eyebrow: 'Not ready to build yet',
    title: 'A clear plan is worth more than a fast start.',
    body:
      "Some businesses know AI is coming but aren't ready to build anything yet, and that's a reasonable place to be. If your data isn't clean, your systems aren't integrated, or your team isn't aligned, jumping into implementation will cost you more than waiting. AI Strategy and Roadmapping gives you a phased, realistic plan for how AI fits into your business: what to fix first, what to build when, and how to sequence investments so each one builds on the last.",
    forWhom:
      'Business owners who want a credible plan before committing to implementation, or who have tried AI tools before and want to do it properly this time.',
    listHeading: "What's included",
    bullets: [
      'Current state assessment of your data, systems, and processes',
      'Gap analysis: what needs to be in place before AI will work',
      'Phased roadmap with timelines and investment ranges',
      'Vendor and tool recommendations based on your environment',
      'Executive summary suitable for presenting to partners or a board'
    ],
    pricing: [{ label: 'Engagement', value: 'From $12,000' }],
    ctaLabel: 'Book a discovery call',
    ctaHref: '/contact'
  },
  {
    id: 'ai-training',
    eyebrow: 'Make it stick',
    title: "The best AI implementation fails if your team doesn't use it.",
    body:
      "Deployment is only half the job. The other half is making sure your team understands, trusts, and uses what you've built. We run workshops and build playbooks tailored to your specific tools, your specific roles, and your specific workflows, so adoption isn't an afterthought.",
    forWhom:
      "Businesses that have already implemented AI tools or are about to, and want to make sure the investment doesn't collect dust.",
    listHeading: 'Training options',
    bullets: [
      {
        strong: 'AI Foundations Workshop.',
        text: '$2,500 to $4,500. What AI is, what it isn\'t, and how to think about it as a business tool.'
      },
      {
        strong: 'Role-Specific AI Playbooks.',
        text: '$1,500 to $3,000 per playbook. Step-by-step guides for how specific roles use AI day to day.'
      },
      {
        strong: 'Prompt Engineering Workshop.',
        text: '$3,500 to $6,000. How to get reliable, useful output from AI tools your team already uses.'
      },
      {
        strong: 'Tool Adoption Bootcamp.',
        text: '$4,000 to $7,500. Hands-on training to drive consistent usage after a new tool goes live.'
      }
    ],
    pricing: [{ label: 'Programs', value: 'Customized to your team' }],
    ctaLabel: 'Book a discovery call',
    ctaHref: '/contact'
  }
];

function ServiceSection({ service, surface }: { service: ServiceBlock; surface: 'cream' | 'stone' }) {
  const sectionClass = surface === 'cream' ? 'section-offwhite' : 'section-stone';
  return (
    <section id={service.id} className={`${sectionClass} section-space section-rule scroll-mt-24`}>
      <div className="container-shell grid gap-12 lg:grid-cols-[1.4fr,1fr] lg:items-start">
        <ScrollReveal>
          <p className="eyebrow">{service.eyebrow}</p>
          <h2 className="mt-6 max-w-2xl">{service.title}</h2>
          <p className="mt-6 text-[var(--color-slate)]">{service.body}</p>
          <p className="mt-5 text-[var(--color-charcoal)]">
            <span className="font-semibold text-[var(--color-navy)]">Who this is for. </span>
            {service.forWhom}
          </p>
          <h3 className="mt-9 text-[var(--color-navy)]">{service.listHeading}</h3>
          <ul className="mt-4 space-y-3 text-[var(--color-charcoal)]">
            {service.bullets.map((bullet, i) =>
              typeof bullet === 'string' ? (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-[var(--color-slate)]" />
                  <span>{bullet}</span>
                </li>
              ) : (
                <li key={i} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-[var(--color-slate)]" />
                  <span>
                    <strong className="font-semibold text-[var(--color-navy)]">{bullet.strong}</strong>{' '}
                    <span className="text-[var(--color-slate)]">{bullet.text}</span>
                  </span>
                </li>
              )
            )}
          </ul>
        </ScrollReveal>
        <ScrollReveal index={1} className="lg:sticky lg:top-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
            Pricing
          </p>
          <dl className="mt-4 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {service.pricing.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-sm text-[var(--color-slate)]">{row.label}</dt>
                <dd className="tabular text-sm font-semibold text-[var(--color-navy)]">{row.value}</dd>
              </div>
            ))}
          </dl>
          {service.pricingNote ? (
            <p className="mt-4 text-xs text-[var(--color-slate)]">{service.pricingNote}</p>
          ) : null}
          <Link href={service.ctaHref} className="btn-primary mt-6 w-full justify-center">
            {service.ctaLabel}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">What we offer</p>
            <h1 className="mt-6 max-w-2xl">Five services. One starting point.</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Five core service lines, each designed to meet you at your current stage of AI
              readiness. Most clients begin with the audit. Everything else follows from what we
              find.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="#ai-audit" className="btn-outline">
                Browse services
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/services-hero.png"
              alt="Overhead desk with workflow diagrams and laptop dashboard"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Anchor nav */}
      <ServiceAnchorNav />

      {/* Service blocks (alternating cream / stone) */}
      <ServiceSection service={services[0]} surface="stone" />

      {/* Audit credit reassurance — quiet text strip, replaces full-rust banner */}
      <section className="section-offwhite section-rule">
        <div className="container-shell py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm text-[var(--color-charcoal)]">
              <span className="font-semibold text-[var(--color-navy)]">Audit credit guarantee. </span>
              Move forward with any implementation within{' '}
              <span className="tabular">90</span> days and your full audit fee comes off the
              project, dollar for dollar.
            </p>
            <Link
              href="/ai-audit#audit-credit-details"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
            >
              How it works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <ServiceSection service={services[1]} surface="cream" />
      <ServiceSection service={services[2]} surface="stone" />
      <ServiceSection service={services[3]} surface="cream" />
      <ServiceSection service={services[4]} surface="stone" />

      {/* Final CTA — only dark section */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Not sure where to start</span>
            <h2 className="mt-6 text-white">That&apos;s exactly what the audit is for.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Every Bit Depth engagement begins with a structured discovery, because guessing at
              the right solution is how businesses waste their first AI budget. The audit costs
              less than a bad hire, takes less than two weeks, and tells you exactly what to build
              next. If you move forward with us, the fee comes straight off your project.
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
