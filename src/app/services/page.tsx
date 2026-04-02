import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting Services for Canadian SMBs | BitDepth AI',
  description:
    'From AI audits to workflow automation and custom AI workers, BitDepth builds practical AI solutions for Canadian businesses between $2M and $50M in revenue.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'AI Consulting Services for Canadian SMBs | BitDepth AI',
    description:
      'From AI audits to workflow automation and custom AI workers, BitDepth builds practical AI solutions for Canadian businesses.',
    url: '/services',
    type: 'website',
    images: [
      {
        url: '/images/services-hero.png',
        width: 1200,
        height: 630,
        alt: 'Business workflow planning desk with diagrams and dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting Services for Canadian SMBs | BitDepth AI',
    description: 'Practical AI services from audit to implementation for Canadian SMB operators.',
    images: ['/images/services-hero.png']
  }
};

const auditDeliverables = [
  'Stakeholder interviews (4–12 people)',
  'Technology stack inventory and integration map',
  'Process mapping: 6–20 workflows',
  'AI Readiness Scorecard (5 pillars)',
  'Prioritized opportunity list: quick wins vs. strategic initiatives',
  'ROI estimates for top 3–5 use cases',
  '90-day AI implementation roadmap'
];

const automationUseCases = [
  'Invoice processing and AP/AR automation',
  'HR onboarding document preparation',
  'Sales lead qualification and CRM enrichment',
  'Customer service auto-response and ticket triage',
  'Report generation from structured data',
  'Scheduling, dispatch, and routing optimization'
];

const aiWorkers = [
  {
    title: 'Operations Assistant',
    description: 'Answers internal questions, searches SOPs, and surfaces relevant procedures.'
  },
  {
    title: 'Sales Intelligence Agent',
    description: 'Qualifies leads, enriches CRM data, and drafts follow-up emails.'
  },
  {
    title: 'Document Processing Agent',
    description: 'Extracts, classifies, and routes documents automatically.'
  },
  {
    title: 'Finance Reconciliation Agent',
    description: 'Matches invoices to POs, flags exceptions, and routes for approval.'
  }
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">What We Offer</p>
            <h1 className="mt-4 text-4xl font-extrabold text-white md:text-6xl">
              AI Services Built for How Your Business Actually Works
            </h1>
            <p className="mt-5 text-lg text-white/74">
              We offer five core service lines, each designed to meet you at your current stage of AI readiness. Most clients begin with an audit. Everything else follows from what we find.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/services-hero.png" alt="Overhead desk with workflow diagrams and laptop dashboard" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <ScrollReveal>
            <span className="eyebrow-pill">Entry Point</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">AI Opportunity Discovery Audit</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              A structured 5–10 day assessment of your business operations, technology stack, and data environment. We interview your team, map your key processes, and produce a prioritized AI roadmap with ROI estimates.
            </p>
            <ul className="list-check mt-6 space-y-3 text-[var(--color-slate)]">
              {auditDeliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal index={1} className="card-dark p-6">
            <h3 className="text-xl font-bold text-white">Pricing Tiers</h3>
            <ul className="mt-4 space-y-4 text-white/78">
              <li>
                <strong>Quick Scan:</strong> $1,500–$3,000 (2–3 days)
              </li>
              <li className="rounded-lg border border-cyan/40 bg-cyan/10 p-3">
                <strong>Standard Audit:</strong> $5,000–$7,500 (5–8 days)
              </li>
              <li>
                <strong>Deep-Dive Roadmap:</strong> $8,000–$15,000+ (10–15 days)
              </li>
            </ul>
            <p className="mt-4 text-sm text-cyan">Note: Audit fees credit toward implementation builds.</p>
            <Link href="/ai-audit" className="btn-primary mt-6 w-full text-sm">
              Book an Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">AI Workflow Automation</h2>
            <p className="mt-5 text-white/74">
              We design and implement AI-powered automation for your most repetitive, time-consuming processes, typically saving clients 10–40+ hours per week.
            </p>
            <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-white/5 p-5">
              <p className="font-semibold text-cyan">Pricing</p>
              <p className="mt-3 text-white/74">Starter: $5,000–$12,000</p>
              <p className="text-white/74">Standard Suite: $15,000–$35,000</p>
              <p className="text-white/74">Enterprise Program: $40,000–$100,000+</p>
              <p className="text-white/74">Monthly retainer: $1,500–$4,000/mo</p>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="card-dark p-6">
            <h3 className="text-xl font-bold text-white">Common Use Cases</h3>
            <ul className="list-check mt-5 space-y-3 text-white/74">
              {automationUseCases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">Custom AI Workers</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              AI Workers are purpose-built AI agents that perform a defined job function inside your business, like hiring a digital employee for a specific role.
            </p>
            <p className="mt-3 font-medium text-[var(--color-navy)]">Pricing: Build from $10,000 + $1,500–$3,000/mo retainer</p>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {aiWorkers.map((worker, index) => (
              <ScrollReveal key={worker.title} index={index} className="card-light p-6">
                <h3 className="text-xl font-bold">{worker.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{worker.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">AI Strategy & Roadmapping</h2>
            <p className="mt-5 text-white/74">
              Not ready to build yet? We define exactly where AI creates real value, build a phased roadmap, and establish the foundations needed to execute successfully.
            </p>
            <p className="mt-3 font-medium text-cyan">Pricing: From $12,000</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold md:text-5xl">AI Training & Enablement</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Deployment is only half the battle. We make sure your team adopts and uses the AI you&apos;ve invested in through workshops, playbooks, and role-specific training.
            </p>
            <ul className="mt-6 space-y-3 text-[var(--color-slate)]">
              <li>AI Foundations Workshop — $2,500–$4,500</li>
              <li>Role-Specific AI Playbooks — $1,500–$3,000/playbook</li>
              <li>Prompt Engineering Workshop — $3,500–$6,000</li>
              <li>Tool Adoption Bootcamp — $4,000–$7,500</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Not Sure Which Service Is Right for You?</h2>
            <p className="mt-5 text-white/74">
              Start with an AI Audit. It costs less than a bad hire, takes less than two weeks, and tells you exactly what to build next.
            </p>
            <Link href="/ai-audit" className="btn-primary mt-8">
              Book Your AI Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
