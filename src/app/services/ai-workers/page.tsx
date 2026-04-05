import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Custom AI Workers | Digital Workforce | BitDepth AI',
  description:
    'Purpose-built AI agents that perform defined job functions inside your business. Operations assistants, sales agents, document processors — custom built and continuously managed.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/services/ai-workers'
  },
  openGraph: {
    title: 'Custom AI Workers | BitDepth AI Consulting',
    description:
      'Add a highly capable digital team member who works around the clock, never makes the same mistake twice, and costs a fraction of a full-time hire.',
    url: 'https://bitdepthaiconsulting.com/services/ai-workers',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/ai-workers-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Professional working alongside AI assistant interface actively processing business tasks on second monitor'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'Custom AI Workers | BitDepth AI Consulting',
    description:
      'Add a highly capable digital team member who works around the clock, never makes the same mistake twice, and costs a fraction of a full-time hire.',
    images: ['/images/ai-workers-hero.webp']
  }
};

const aiWorkerExamples = [
  {
    title: 'Operations Assistant',
    whatItDoes:
      'Answers internal questions from staff, searches your SOPs and policy documents, surfaces relevant procedures, and helps field teams find the information they need without calling the office.',
    bestFor:
      'Businesses with large field teams, multiple locations, or complex internal procedures that staff struggle to navigate.'
  },
  {
    title: 'Customer Service Agent',
    whatItDoes:
      'Handles incoming customer inquiries around the clock, answers common questions, books appointments, collects information, and escalates to a human only when genuinely needed.',
    bestFor:
      'Field service businesses, professional services firms, and any business where the phone not being answered means a lost job.'
  },
  {
    title: 'Sales Intelligence Agent',
    whatItDoes:
      'Qualifies incoming leads, enriches CRM records with relevant information, drafts personalized follow-up emails, and ensures no lead falls through the cracks.',
    bestFor:
      'Businesses with high lead volume where sales staff are spending too much time on qualification and data entry instead of selling.'
  },
  {
    title: 'Document Processing Agent',
    whatItDoes:
      'Receives incoming documents, extracts the relevant information, classifies them by type, and routes them to the right person or system automatically.',
    bestFor:
      'Businesses that process high volumes of invoices, field tickets, contracts, or compliance documents.'
  },
  {
    title: 'Finance Reconciliation Agent',
    whatItDoes:
      'Matches invoices to purchase orders, flags discrepancies and exceptions, routes items for approval, and maintains a clean audit trail — without manual review of every transaction.',
    bestFor:
      'Construction, oil and gas services, transportation, and any business managing high volumes of subcontractor invoices or field-generated costs.'
  }
];

export default function AIWorkersPage() {
  return (
    <PageShell>
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
              <span className="text-white/80">Custom AI Workers</span>
            </nav>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                What If You Could Add a Highly Capable Team Member Who Works Around the Clock, Never Makes the Same Mistake Twice, and Costs a Fraction of a Full-Time Hire?
              </h1>
              <p className="mt-5 text-lg text-white/74">
                Custom AI Workers are purpose-built AI agents that perform a defined job function inside your business on an ongoing basis. Not a chatbot. Not a generic tool. A digital worker built specifically for how your business operates.
              </p>
              <Link href="/ai-audit" className="btn-primary mt-8">
                Book an Audit First
              </Link>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-workers-hero.webp.webp"
                alt="Professional working alongside AI assistant interface actively processing business tasks on second monitor"
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
                Some Functions Need More Than a One-Time Automation. They Need Someone to Own Them.
              </h2>
              <p className="mt-5 text-[var(--color-slate)] leading-7">
                Workflow automation handles a process. An AI Worker handles a role. The difference matters. An automation fires when triggered and completes a defined task. An AI Worker operates continuously — monitoring, responding, processing, and acting within its defined function without needing to be triggered every time.
              </p>
              <p className="mt-4 text-[var(--color-slate)] leading-7">
                Think about the functions in your business that currently require a person to be available, attentive, and consistent. Answering customer inquiries. Qualifying incoming leads. Processing documents as they arrive. Reconciling invoices against purchase orders. These are not one-time tasks. They are ongoing job functions.
              </p>
              <p className="mt-4 text-[var(--color-slate)] leading-7">
                And they do not always need a human to do them — they need something reliable that shows up every day and does the work correctly. AI is moving fast. Things that were not possible six months ago are standard practice today. Businesses that are waiting for the technology to prove itself are already falling behind the ones that are quietly using it to get more done with the same team.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-workers-supporting.webp.webp"
                alt="Dashboard showing multiple AI agent status panels for different business functions running simultaneously"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 — AI Worker Examples */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              What an AI Worker Actually Does
            </h2>
            <p className="mt-4 text-white/74">
              Each AI Worker is built around a specific job function inside your business. Here are the most common ones we build.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {aiWorkerExamples.map((worker, index) => (
              <ScrollReveal key={worker.title} index={index} className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
                <h3 className="text-lg font-bold text-white">{worker.title}</h3>
                <p className="mt-3 text-sm text-white/74 leading-6">
                  <strong className="text-cyan">What it does:</strong> {worker.whatItDoes}
                </p>
                <p className="mt-3 text-sm text-white/60 leading-6">
                  <strong>Best for:</strong> {worker.bestFor}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — How It Works */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
              How We Build Your AI Worker
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal className="card-light p-6">
              <p className="text-sm font-semibold text-cyan">Step 1</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-navy)]">Define the Role</h3>
              <p className="mt-3 text-sm text-[var(--color-slate)] leading-6">
                We start by understanding exactly what job function the AI Worker needs to perform — what inputs it receives, what decisions it needs to make, what outputs it produces, and what edge cases require human escalation.
              </p>
            </ScrollReveal>

            <ScrollReveal index={1} className="card-light p-6">
              <p className="text-sm font-semibold text-cyan">Step 2</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-navy)]">Audit First</h3>
              <p className="mt-3 text-sm text-[var(--color-slate)] leading-6">
                If you have not completed an AI Opportunity Audit, we recommend starting there. The audit ensures we are building the right AI Worker for the right problem — and that your data and systems are ready to support it.
              </p>
            </ScrollReveal>

            <ScrollReveal index={2} className="card-light p-6">
              <p className="text-sm font-semibold text-cyan">Step 3</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-navy)]">Build and Test</h3>
              <p className="mt-3 text-sm text-[var(--color-slate)] leading-6">
                We build the AI Worker around your actual business data, your actual processes, and your actual systems. We test extensively before deployment to make sure it performs reliably in real conditions.
              </p>
            </ScrollReveal>

            <ScrollReveal index={3} className="card-light p-6">
              <p className="text-sm font-semibold text-cyan">Step 4</p>
              <h3 className="mt-2 text-xl font-bold text-[var(--color-navy)]">Deploy and Improve</h3>
              <p className="mt-3 text-sm text-[var(--color-slate)] leading-6">
                Once deployed, we monitor performance and refine the AI Worker over time. As your business evolves and the technology improves, we update the worker to keep it performing at its best.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 4 — Pricing */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">Pricing</h2>
            <p className="mt-4 text-white/74 max-w-2xl mx-auto">
              AI Workers are custom built for each client. Pricing depends on the complexity of the role, the number of systems it needs to connect to, and the volume of work it will handle.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
            <ScrollReveal className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
              <h3 className="text-xl font-bold text-white">Build</h3>
              <p className="mt-4 text-white/78">
                From <strong className="text-white text-2xl">$10,000</strong>
              </p>
              <p className="mt-2 text-sm text-white/60">
                One-time build fee for design, development, testing, and deployment of your custom AI Worker.
              </p>
            </ScrollReveal>

            <ScrollReveal index={1} className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
              <h3 className="text-xl font-bold text-white">Monthly Retainer</h3>
              <p className="mt-4 text-white/78">
                <strong className="text-white text-2xl">$1,500–$3,000</strong> per month
              </p>
              <p className="mt-2 text-sm text-white/60">
                Ongoing monitoring, maintenance, performance tuning, and updates as your business needs evolve and the technology improves.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-6 rounded-lg border-l-[3px] border-l-cyan bg-cyan/10 p-4 text-sm text-white/80 max-w-3xl mx-auto">
            <strong className="text-cyan">Note:</strong> If you complete an AI Opportunity Audit first, the full audit fee is credited against your build fee dollar for dollar.
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
              Not Sure Which AI Worker Your Business Needs?
            </h2>
            <p className="mt-5 text-[var(--color-slate)] leading-7">
              Start with the audit. We will identify exactly which job functions in your business are the best candidates for an AI Worker — and give you honest ROI estimates before you commit to building anything.
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
