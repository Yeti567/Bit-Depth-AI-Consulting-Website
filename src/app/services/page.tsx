import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ServiceAnchorNav } from '@/components/service-anchor-nav';

export const metadata: Metadata = {
  title: 'AI Consulting Services for Canadian SMBs | BitDepth AI',
  description:
    'From AI audits to workflow automation and custom AI workers — BitDepth builds AI solutions for Canadian businesses. Vendor-neutral. Starting at $5,000.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/services'
  },
  openGraph: {
    title: 'AI Consulting Services | BitDepth AI Consulting',
    description:
      'Five AI service lines for Canadian SMBs: AI audits, workflow automation, custom AI workers, strategy, and training. No software sales. Just outcomes.',
    url: 'https://bitdepthaiconsulting.com/services',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting services social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting Services | BitDepth AI Consulting',
    description:
      'Five AI service lines for Canadian SMBs: AI audits, workflow automation, custom AI workers, strategy, and training. No software sales. Just outcomes.',
    images: ['/images/og-services.jpg']
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

      <ServiceAnchorNav />

      <section id="ai-audit" className="section-offwhite section-space scroll-mt-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
          <ScrollReveal>
            <span className="eyebrow-pill">Entry Point — Start Here</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Before You Build Anything, Know Where You Stand</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Most businesses that struggle with AI didn&apos;t fail because the technology didn&apos;t work. They failed because they weren&apos;t ready for it — wrong data, disconnected systems, unclear processes. The AI Opportunity Audit tells you exactly where your business stands before you spend a dollar on implementation. You get a clear picture of what&apos;s working, what isn&apos;t, and what the highest-value opportunities are. No guessing. No wasted budget.
            </p>
            <p className="mt-4 font-medium text-[var(--color-navy)]">
              Who this is for: Business owners and operations leaders who want to make a smart first move on AI — not just the fastest one.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-[var(--color-navy)]">What&apos;s included:</h3>
            <ul className="list-check mt-3 space-y-2 text-[var(--color-slate)]">
              <li>Stakeholder interviews across your key departments</li>
              <li>Full inventory of your current technology stack and integrations</li>
              <li>Mapping of 6–20 core workflows with time and cost baselines</li>
              <li>AI Readiness Scorecard across five operational pillars</li>
              <li>Prioritized opportunity list: quick wins and long-term initiatives</li>
              <li>ROI estimates for your top 3–5 use cases</li>
              <li>A 90-day implementation roadmap you can act on immediately</li>
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
            <p className="mt-4 text-sm text-cyan">Note: Your full audit fee is credited dollar-for-dollar against any implementation you choose within 90 days.</p>
            <Link href="/ai-audit" className="btn-primary mt-6 w-full text-sm">
              Book Your Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite pt-0">
        <div className="container-shell">
          <ScrollReveal className="my-10 rounded-xl bg-cyan px-7 py-7 md:px-12 md:py-7">
            <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--color-navy)]">
                <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>

              <div className="flex-1">
                <p className="font-heading text-[17px] font-bold text-[var(--color-navy)]">Audit Credit Guarantee</p>
                <p className="mt-1 text-[15px] text-[color:rgba(11,31,59,0.8)]">
                  Proceed with any implementation within 90 days and your full audit fee is credited against your project — dollar for dollar.
                </p>
              </div>

              <Link
                href="/ai-audit#audit-credit-details"
                className="w-full rounded-lg border-[1.5px] border-[var(--color-navy)] bg-transparent px-6 py-2.5 text-center text-sm font-semibold text-[var(--color-navy)] transition hover:bg-[rgba(11,31,59,0.1)] md:w-auto"
              >
                See How It Works
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="workflow-automation" className="section-navy section-space scroll-mt-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <ScrollReveal>
            <span className="eyebrow-pill">Eliminate the Manual Work</span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">Stop Paying People to Do What a System Should Handle</h2>
            <p className="mt-5 text-white/74">
              If your team is spending hours every week on repetitive tasks — re-entering data, chasing approvals, building the same reports, processing the same documents — that&apos;s recoverable time. Workflow automation replaces those manual steps with reliable, consistent systems that run without supervision. We design and build automation around your actual processes, not generic templates. Most clients recover 10 to 40 hours per week within the first implementation.
            </p>
            <p className="mt-4 font-medium text-cyan">
              Who this is for: Operations-heavy businesses where staff time is being eaten by admin, data entry, or manual handoffs between systems.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-white">Common automations we build:</h3>
            <ul className="list-check mt-3 space-y-2 text-white/74">
              <li>Invoice processing and accounts payable/receivable automation</li>
              <li>HR onboarding document preparation and routing</li>
              <li>Sales lead qualification and CRM enrichment</li>
              <li>Customer service triage and auto-response workflows</li>
              <li>Scheduled report generation from live business data</li>
              <li>Dispatch, scheduling, and routing optimization</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal index={1} className="card-dark p-6">
            <h3 className="text-xl font-bold text-white">Pricing</h3>
            <ul className="mt-4 space-y-3 text-white/78">
              <li>
                <strong>Starter:</strong> $5,000–$12,000
              </li>
              <li>
                <strong>Standard Suite:</strong> $15,000–$35,000
              </li>
              <li>
                <strong>Enterprise Program:</strong> $40,000–$100,000+
              </li>
              <li>
                <strong>Ongoing support retainer:</strong> $1,500–$4,000/month
              </li>
            </ul>
            <Link href="/ai-audit" className="btn-primary mt-6 w-full text-sm">
              Book an Audit First
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section id="custom-ai-workers" className="section-offwhite section-space scroll-mt-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <ScrollReveal>
            <span className="eyebrow-pill">Your Digital Workforce</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">AI That Does a Job, Not Just a Task</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              A workflow automation handles a process. An AI Worker handles a role. These are purpose-built AI agents designed to perform a defined job function inside your business on an ongoing basis — answering questions, processing documents, qualifying leads, reconciling invoices. Think of it as adding a highly capable digital team member who works around the clock, doesn&apos;t make the same mistake twice, and costs a fraction of a full-time hire.
            </p>
            <p className="mt-4 font-medium text-[var(--color-navy)]">
              Who this is for: Businesses that have identified a specific function that needs to run consistently and at scale — and don&apos;t want to hire another person to do it.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-[var(--color-navy)]">Examples of AI Workers we build:</h3>
            <ul className="mt-3 space-y-4 text-[var(--color-slate)]">
              <li>
                <strong className="text-[var(--color-navy)]">Operations Assistant:</strong> Answers internal questions, searches SOPs, surfaces relevant procedures for field staff
              </li>
              <li>
                <strong className="text-[var(--color-navy)]">Sales Intelligence Agent:</strong> Qualifies leads, enriches CRM records, drafts follow-up emails
              </li>
              <li>
                <strong className="text-[var(--color-navy)]">Document Processing Agent:</strong> Extracts, classifies, and routes incoming documents automatically
              </li>
              <li>
                <strong className="text-[var(--color-navy)]">Finance Reconciliation Agent:</strong> Matches invoices to purchase orders, flags exceptions, routes for approval
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal index={1} className="card-dark p-6">
            <h3 className="text-xl font-bold text-white">Pricing</h3>
            <p className="mt-4 text-white/78">
              From <strong>$10,000</strong> to build + <strong>$1,500–$3,000/month</strong> retainer for ongoing management and improvement
            </p>
            <Link href="/ai-audit" className="btn-primary mt-6 w-full text-sm">
              Book an Audit First
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section id="ai-strategy" className="section-navy section-space scroll-mt-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <ScrollReveal>
            <span className="eyebrow-pill">Not Ready to Build Yet</span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-5xl">A Clear Plan Is Worth More Than a Fast Start</h2>
            <p className="mt-5 text-white/74">
              Some businesses know AI is coming but aren&apos;t ready to build anything yet — and that&apos;s a completely reasonable place to be. If your data isn&apos;t clean, your systems aren&apos;t integrated, or your team isn&apos;t aligned, jumping into implementation will cost you more than waiting. AI Strategy & Roadmapping gives you a phased, realistic plan for how AI fits into your business — what to fix first, what to build when, and how to sequence investments so each one builds on the last.
            </p>
            <p className="mt-4 font-medium text-cyan">
              Who this is for: Business owners who want a credible plan before committing to implementation — or who have tried AI tools before and want to do it properly this time.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-white">What&apos;s included:</h3>
            <ul className="list-check mt-3 space-y-2 text-white/74">
              <li>Current state assessment of your data, systems, and processes</li>
              <li>Gap analysis: what needs to be in place before AI will work</li>
              <li>Phased roadmap with timelines and investment ranges</li>
              <li>Vendor and tool recommendations based on your environment</li>
              <li>Executive summary suitable for presenting to partners or a board</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal index={1} className="card-dark p-6">
            <h3 className="text-xl font-bold text-white">Pricing</h3>
            <p className="mt-4 text-white/78">
              From <strong>$12,000</strong>
            </p>
            <Link href="/contact" className="btn-primary mt-6 w-full text-sm">
              Book a Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section id="ai-training" className="section-offwhite section-space scroll-mt-24">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <ScrollReveal>
            <span className="eyebrow-pill">Make It Stick</span>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">The Best AI Implementation Fails If Your Team Doesn&apos;t Use It</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Deployment is only half the job. The other half is making sure your team actually understands, trusts, and uses what you&apos;ve built. We run workshops and build playbooks tailored to your specific tools, your specific roles, and your specific workflows — so adoption isn&apos;t an afterthought.
            </p>
            <p className="mt-4 font-medium text-[var(--color-navy)]">
              Who this is for: Businesses that have already implemented AI tools or are about to, and want to make sure the investment doesn&apos;t collect dust.
            </p>
            <h3 className="mt-6 font-heading text-lg font-bold text-[var(--color-navy)]">Training options:</h3>
            <ul className="mt-3 space-y-4 text-[var(--color-slate)]">
              <li>
                <strong className="text-[var(--color-navy)]">AI Foundations Workshop:</strong> $2,500–$4,500 — what AI is, what it isn&apos;t, and how to think about it as a business tool
              </li>
              <li>
                <strong className="text-[var(--color-navy)]">Role-Specific AI Playbooks:</strong> $1,500–$3,000 per playbook — step-by-step guides for how specific roles in your business should use AI day-to-day
              </li>
              <li>
                <strong className="text-[var(--color-navy)]">Prompt Engineering Workshop:</strong> $3,500–$6,000 — how to get reliable, useful output from AI tools your team is already using
              </li>
              <li>
                <strong className="text-[var(--color-navy)]">Tool Adoption Bootcamp:</strong> $4,000–$7,500 — hands-on training to drive consistent usage after a new tool goes live
              </li>
            </ul>
          </ScrollReveal>
          <ScrollReveal index={1} className="card-dark p-6">
            <h3 className="text-xl font-bold text-white">Get Started</h3>
            <p className="mt-4 text-white/78">
              Training programs are customized to your team&apos;s needs and current AI maturity level.
            </p>
            <Link href="/contact" className="btn-primary mt-6 w-full text-sm">
              Book a Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Not Sure Where to Start?</h2>
            <p className="mt-5 text-white/74">
              That&apos;s exactly what the audit is for. Every BitDepth engagement begins with a structured discovery — because guessing at the right solution is how businesses waste their first AI budget. The audit costs less than a bad hire, takes less than two weeks, and tells you exactly what to build next. And if you move forward with us, the fee comes straight off your project.
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
