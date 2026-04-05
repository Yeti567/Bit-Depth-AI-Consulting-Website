import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

import { buildServiceSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Workflow Automation for Canadian Businesses | BitDepth AI',
  description:
    'Replace repetitive manual processes with reliable automated systems. Invoice processing, scheduling, reporting, customer service, and more. Starting at $5,000.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/services/workflow-automation'
  },
  openGraph: {
    title: 'AI Workflow Automation for Canadian Businesses | BitDepth AI',
    description:
      'Replace repetitive manual processes with reliable automated systems. Invoice processing, scheduling, reporting, customer service, and more. Starting at $5,000.',
    url: 'https://bitdepthaiconsulting.com/services/workflow-automation',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-workflow-automation.webp',
        width: 1200,
        height: 630,
        alt: 'AI workflow automation for Canadian businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Workflow Automation for Canadian Businesses | BitDepth AI',
    description:
      'Replace repetitive manual processes with reliable automated systems. Invoice processing, scheduling, reporting, customer service, and more. Starting at $5,000.',
    images: ['/images/og-workflow-automation.webp']
  }
};

const automationCards = [
  {
    title: 'Invoice Processing and Accounts Payable',
    description:
      'Invoices received, matched to purchase orders, flagged for exceptions, and routed for approval — automatically. No manual data entry, no missed payments, no approval bottlenecks sitting in an inbox.'
  },
  {
    title: 'Scheduling and Dispatch',
    description:
      'Jobs assigned, crews scheduled, and dispatch notifications sent based on availability, location, and priority — without a dispatcher manually managing every change.'
  },
  {
    title: 'Customer Service and Inquiry Response',
    description:
      'Common customer questions answered automatically around the clock. Inquiries triaged and routed to the right person. Appointment requests handled without staff involvement. Clients feel taken care of even when nobody is available.'
  },
  {
    title: 'Report Generation',
    description:
      'Weekly and monthly reports built and delivered automatically from your live business data — no more pulling numbers from three different systems and formatting them by hand every time.'
  },
  {
    title: 'HR and Onboarding Documents',
    description:
      'New hire paperwork prepared, distributed, and tracked automatically. Onboarding checklists triggered the moment someone is added to the system. Nothing falls through the cracks.'
  },
  {
    title: 'Sales Lead Qualification and CRM Updates',
    description:
      'New leads assessed, scored, and entered into your CRM automatically. Follow-up tasks created. Sales staff notified with the context they need to act — without anyone doing data entry.'
  },
  {
    title: 'Document Routing and Approvals',
    description:
      'Documents classified, routed to the right person, and tracked through the approval process automatically — with escalation triggers when something is overdue.'
  },
  {
    title: 'Client Communication and Follow-Up',
    description:
      'Appointment reminders, status updates, follow-up sequences, and satisfaction check-ins — sent automatically at the right time without staff having to remember to do it.'
  }
];

export default function WorkflowAutomationPage() {
  return (
    <PageShell>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(buildServiceSchema(
          'AI Workflow Automation for Canadian Businesses',
          'Replace repetitive manual processes with reliable automated systems. Invoice processing, scheduling, reporting, customer service, and more. Starting at $5,000.',
          'https://bitdepthaiconsulting.com/services/workflow-automation',
          'Workflow Automation'
        ))}
      </Script>
      {/* Hero Section */}
      <section className="section-navy dot-grid section-space">
        <div className="container-shell">
          {/* Breadcrumb */}
          <ScrollReveal>
            <nav className="mb-8 text-sm text-white/60">
              <Link href="/" className="hover:text-cyan transition-colors">
                Home
              </Link>
              <span className="mx-2">{'>'}</span>
              <Link href="/services" className="hover:text-cyan transition-colors">
                Services
              </Link>
              <span className="mx-2">{'>'}</span>
              <span className="text-white/80">Workflow Automation</span>
            </nav>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                Your Team Is Spending Hours Every Week Doing Things a System Should Be Handling
              </h1>
              <p className="mt-5 text-lg text-white/74">
                Workflow automation replaces repetitive manual processes with reliable systems that run without supervision — across every industry, every department, and every size of business.
              </p>
              <Link href="/ai-audit" className="btn-primary mt-8">
                Book an Audit First
              </Link>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/workflow-automation-hero.webp.webp"
                alt="Split view showing manual paper-based process versus clean automated digital dashboard"
                fill
                priority
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 1 — The Real Problem */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
                The Problem Is Not Your People. It Is the Process.
              </h2>
              <p className="mt-5 text-[var(--color-slate)] leading-7">
                Every business has them — tasks that happen the same way every single day, handled manually by someone who has better things to do. Data re-entered from one system into another. Invoices processed by hand. Reports built from scratch every week by pulling numbers from three different places. Approval requests that sit in someone&apos;s inbox until they remember to look.
              </p>
              <p className="mt-4 text-[var(--color-slate)] leading-7">
                These are not signs of a bad team. They are signs of a business that has outgrown its manual processes but has not yet replaced them with something better.
              </p>
              <p className="mt-4 text-[var(--color-slate)] leading-7">
                The cost is not just time. Every manual step is a place where errors creep in, things fall through the cracks, and your best people spend their energy on work that adds no real value. AI changes that. Not by replacing your team — but by handling the work that should never have required a human in the first place.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/workflow-automation-supporting.webp.webp"
                alt="Laptop screen showing connected workflow automation diagram with automated process steps"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 — The Systems Problem */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              The Biggest Barrier to Automation Is Not Technology. It Is Old Systems That Nobody Wants to Let Go Of.
            </h2>
            <p className="mt-5 text-white/74 leading-7">
              Here is something we see in almost every business we audit. There is a CRM that has been in place for ten years. Or an accounting package that the bookkeeper knows inside and out. Or a scheduling tool that the operations manager built in Excel and has been maintaining ever since.
            </p>
            <p className="mt-4 text-white/74 leading-7">
              These tools work. People are comfortable with them. And nobody wants to replace them.
            </p>
            <p className="mt-4 text-white/74 leading-7">
              The good news is they do not have to. Modern automation tools can connect to almost any existing system — pulling data out, pushing data in, and creating workflows that bridge the gaps between tools that were never designed to talk to each other.
            </p>
            <p className="mt-4 text-cyan font-medium">
              You do not have to rip out what works. You just have to connect it. That is exactly what we do.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3 — What We Automate */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
              What We Typically Automate
            </h2>
            <p className="mt-4 text-[var(--color-slate)]">
              Every engagement is different but these are the most common automation opportunities we find across industries.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            {automationCards.map((card, index) => (
              <ScrollReveal key={card.title} index={index} className="card-light p-6">
                <h3 className="text-lg font-bold text-[var(--color-navy)]">{card.title}</h3>
                <p className="mt-3 text-[var(--color-slate)] text-sm leading-6">{card.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — How It Works */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              How We Approach Automation
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
              <p className="text-sm font-semibold text-cyan">Step 1</p>
              <h3 className="mt-2 text-xl font-bold text-white">Audit First</h3>
              <p className="mt-3 text-sm text-white/74 leading-6">
                We never build automation without understanding your business first. The AI Opportunity Audit maps your processes, identifies the highest-value automation opportunities, and estimates the ROI of each one before we write a single line of code.
              </p>
            </ScrollReveal>

            <ScrollReveal index={1} className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
              <p className="text-sm font-semibold text-cyan">Step 2</p>
              <h3 className="mt-2 text-xl font-bold text-white">Build Around What You Have</h3>
              <p className="mt-3 text-sm text-white/74 leading-6">
                We do not ask you to replace your existing systems. We build automation that connects to the tools you already use — bridging the gaps and eliminating the manual steps between them.
              </p>
            </ScrollReveal>

            <ScrollReveal index={2} className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
              <p className="text-sm font-semibold text-cyan">Step 3</p>
              <h3 className="mt-2 text-xl font-bold text-white">Make Sure It Sticks</h3>
              <p className="mt-3 text-sm text-white/74 leading-6">
                Every automation we build comes with documentation and training so your team knows how it works and what to do if something goes wrong. We stay involved after deployment to make sure everything is running as expected.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 5 — Pricing */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">Pricing</h2>
          </ScrollReveal>

          <div className="grid gap-5 lg:grid-cols-3">
            <ScrollReveal className="rounded-xl border border-[var(--color-border)] bg-white p-6">
              <span className="inline-flex rounded-full bg-[rgba(107,114,128,0.15)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]">
                Starter
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-[var(--color-navy)]">$5,000–$12,000</h3>
              <p className="mt-2 text-sm text-[var(--color-slate)]">
                Single automation or small suite. Ideal for businesses automating their first process or solving one specific operational bottleneck.
              </p>
            </ScrollReveal>

            <ScrollReveal index={1} className="rounded-xl border-2 border-cyan bg-[var(--color-navy)] p-6 text-[var(--color-offwhite)]">
              <span className="inline-flex rounded-full bg-cyan/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-cyan">
                Standard Suite
              </span>
              <h3 className="mt-4 text-2xl font-extrabold">$15,000–$35,000</h3>
              <p className="mt-2 text-sm text-white/78">
                Multiple connected automations across one or more departments. Ideal for businesses ready to systematically eliminate manual work across their operations.
              </p>
            </ScrollReveal>

            <ScrollReveal index={2} className="rounded-xl border border-[var(--color-border)] bg-white p-6">
              <span className="inline-flex rounded-full bg-[rgba(107,114,128,0.15)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]">
                Enterprise Program
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-[var(--color-navy)]">$40,000–$100,000+</h3>
              <p className="mt-2 text-sm text-[var(--color-slate)]">
                Comprehensive automation program across the full business. Ideal for larger SMBs with complex operations and multiple departments to automate.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-8 rounded-xl border border-[var(--color-border)] bg-white p-6 text-center">
            <p className="text-[var(--color-slate)]">
              <strong className="text-[var(--color-navy)]">Ongoing support retainer:</strong> $1,500–$4,000 per month — monitoring, maintenance, and continuous improvement of your automation suite.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-6 rounded-lg border-l-[3px] border-l-cyan bg-[rgba(0,180,216,0.07)] p-4 text-sm text-[var(--color-navy)]">
            <strong>Note:</strong> If you complete an AI Opportunity Audit first, the full audit fee is credited against your automation project dollar for dollar.
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Not Sure Which Processes to Automate First?
            </h2>
            <p className="mt-5 text-white/74 leading-7">
              That is exactly what the audit is for. We map your operations, identify the highest-value automation opportunities, and give you a prioritized list with ROI estimates before you commit to building anything.
            </p>
            <Link href="/ai-audit" className="btn-primary mt-8">
              Book Your AI Audit
            </Link>
            <div className="mt-6">
              <Link href="/contact" className="text-sm text-cyan hover:text-cyan/80 underline">
                Have questions? Book a free discovery call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
