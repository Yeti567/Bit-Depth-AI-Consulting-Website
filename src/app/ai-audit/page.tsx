import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Opportunity Discovery Audit | Starting at $5,000 | BitDepth AI',
  description:
    'BitDepth\'s AI Opportunity Audit is a structured 5–10 day assessment that identifies exactly where AI will save your business the most time and money — with ROI estimates and a 90-day roadmap.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/ai-audit'
  },
  openGraph: {
    title: 'AI Opportunity Discovery Audit | BitDepth AI Consulting',
    description:
      'Find out exactly where AI will deliver ROI in your business. BitDepth\'s structured audit maps your operations, scores your AI readiness, and produces a prioritized roadmap. Starting at $5,000.',
    url: 'https://bitdepthaiconsulting.com/ai-audit',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/og-audit.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting audit social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Opportunity Discovery Audit | BitDepth AI Consulting',
    description:
      'Find out exactly where AI will deliver ROI in your business. BitDepth\'s structured audit maps your operations, scores your AI readiness, and produces a prioritized roadmap. Starting at $5,000.',
    images: ['/images/og-audit.jpg']
  }
};

const deliverables = [
  'Stakeholder interviews (4–12 people)',
  'Technology stack inventory and integration map',
  'Process mapping: 6–20 workflows',
  'AI Readiness Scorecard (5 pillars)',
  'Prioritized opportunity list: quick wins vs. strategic initiatives',
  'ROI estimates for top 3–5 use cases',
  '90-day AI implementation roadmap'
];

const faqs = [
  {
    question: 'What does an AI audit actually look like day-to-day?',
    answer:
      'We run interviews, map workflows, review systems, and score readiness over 5–10 days. You get a clear list of opportunities, ROI estimates, and a practical roadmap.'
  },
  {
    question: 'How long does the audit take?',
    answer: 'Most audits take 5–8 business days. Quick scans can take 2–3 days, and deep dives can take 10–15 days.'
  },
  {
    question: 'Will we need to do a lot of preparation before you start?',
    answer: 'No heavy prep is required. We provide a short intake checklist and guide your team through interviews and discovery sessions.'
  },
  {
    question: "What if we're not ready for AI after the audit?",
    answer: 'That is still a successful outcome. If readiness is low, we provide a prioritized foundation plan so you can build toward AI confidently.'
  },
  {
    question: 'What exactly are the terms of the Audit Credit Guarantee?',
    answer:
      'The Audit Credit Guarantee is straightforward. When you complete any tier of the BitDepth AI Opportunity Audit, the full fee you paid for that audit is credited against your first implementation engagement — provided you sign your implementation agreement within 90 days of receiving your audit deliverables.\n\nThe credit applies to any BitDepth implementation service: AI workflow automation, custom AI workers, AI strategy and roadmapping, or AI training and enablement engagements. It is applied as a line-item deduction on your implementation invoice.\n\nThere is no minimum project size required to use the credit. The credit has no cash value, is non-transferable, and applies to your first implementation engagement only.\n\nIf you are not ready to proceed within 90 days, just let us know — we handle extensions on a case-by-case basis for clients with a legitimate reason for delay.'
  }
];

export default function AIAuditPage() {
  return (
    <PageShell>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Our Entry Offer</p>
            <h1 className="mt-5 text-4xl font-extrabold text-white md:text-6xl">
              Find Out Exactly Where AI Will Save Your Business Time and Money
            </h1>
            <p className="mt-5 text-lg text-white/74">
              Most businesses waste their first AI budget on the wrong thing. The AI Opportunity Audit eliminates that risk. In 5–10 business days, we give you a clear, prioritized picture of where AI will make the biggest impact, with ROI estimates to back it up.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book Your Audit
            </Link>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[340px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/audit-process.png" alt="Consultant presenting roadmap to business owners" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">What You Get</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {deliverables.map((item, index) => (
              <ScrollReveal key={item} index={index} className="card-light p-5">
                <p className="inline-flex gap-3 text-[var(--color-slate)]">
                  <span className="font-bold text-cyan">✓</span>
                  <span>{item}</span>
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-offwhite section-space pt-0">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold md:text-5xl">Audit Pricing — And Why It Costs You Nothing to Build With Us</h2>
            <p className="mt-5 text-lg text-[var(--color-slate)]">
              Choose the audit tier that fits your business. If you move forward with implementation, your full audit fee is credited back on day one of your
              project.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <ScrollReveal className="rounded-xl border border-[var(--color-border)] bg-white p-6">
              <span className="inline-flex rounded-full bg-[rgba(107,114,128,0.15)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]">
                Quick Scan
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-[var(--color-navy)]">$1,500 – $3,000</h3>
              <p className="mt-2 text-sm text-[var(--color-slate)]">2–3 Business Days</p>
              <p className="mt-1 text-sm text-[var(--color-slate)]">Micro SMB · 1–2 systems · 1–2 teams</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--color-slate)]">
                <li>· 2 discovery sessions</li>
                <li>· 3–5 key processes reviewed</li>
                <li>· Basic AI readiness score</li>
                <li>· 90-day recommendation summary</li>
              </ul>
              <div className="mt-6 rounded-lg border-l-[3px] border-l-cyan bg-[rgba(0,180,216,0.07)] p-3 text-sm text-[var(--color-navy)]">
                Full audit fee credited if you proceed with a build within 30 days.
              </div>
              <Link href="/contact" className="btn-outline mt-6 w-full justify-center">
                Get Started
              </Link>
            </ScrollReveal>

            <ScrollReveal index={1} className="relative rounded-xl border-2 border-cyan bg-[var(--color-navy)] p-6 text-[var(--color-offwhite)]">
              <p className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded bg-cyan px-3.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-[var(--color-navy)]">
                Most Popular
              </p>
              <h3 className="mt-3 text-2xl font-extrabold">$5,000 – $7,500</h3>
              <p className="mt-2 text-sm text-white/78">5–8 Business Days</p>
              <p className="mt-1 text-sm text-white/78">SMB · 15–150 staff · 3+ departments</p>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                <li className="inline-flex gap-2">
                  <span className="text-cyan">✓</span>
                  <span>4–6 stakeholder interviews</span>
                </li>
                <li className="inline-flex gap-2">
                  <span className="text-cyan">✓</span>
                  <span>Full technology stack inventory</span>
                </li>
                <li className="inline-flex gap-2">
                  <span className="text-cyan">✓</span>
                  <span>6–10 processes mapped with time/cost baselines</span>
                </li>
                <li className="inline-flex gap-2">
                  <span className="text-cyan">✓</span>
                  <span>AI Readiness Scorecard (5 pillars)</span>
                </li>
                <li className="inline-flex gap-2">
                  <span className="text-cyan">✓</span>
                  <span>ROI estimates for top 3 use cases</span>
                </li>
                <li className="inline-flex gap-2">
                  <span className="text-cyan">✓</span>
                  <span>Prioritized 90-day implementation roadmap</span>
                </li>
              </ul>
              <div className="mt-6 rounded-lg border-l-[3px] border-l-cyan bg-[rgba(0,180,216,0.12)] p-3 text-sm text-[var(--color-offwhite)]">
                Full audit fee credited if you proceed with a build within 90 days.
              </div>
              <Link href="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cyan px-5 py-3 text-sm font-semibold text-[var(--color-navy)] transition hover:bg-cyan/90">
                Book This Audit
              </Link>
            </ScrollReveal>

            <ScrollReveal index={2} className="rounded-xl border border-[var(--color-border)] bg-white p-6">
              <span className="inline-flex rounded-full bg-[rgba(107,114,128,0.15)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]">
                Deep-Dive Roadmap
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-[var(--color-navy)]">$8,000 – $15,000+</h3>
              <p className="mt-2 text-sm text-[var(--color-slate)]">10–15 Business Days</p>
              <p className="mt-1 text-sm text-[var(--color-slate)]">Larger SMB · Multiple departments · Multi-location</p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--color-slate)]">
                <li>· 8–12 interviews across departments</li>
                <li>· Structured data sampling and quality checks</li>
                <li>· 10–20 processes mapped with quantified cost baselines</li>
                <li>· AI Readiness Score with risk analysis by pillar</li>
                <li>· 5–10 ROI use cases with fidelity ranges</li>
                <li>· Multi-phase roadmap: 0–3, 3–12, 12–24 months</li>
              </ul>
              <div className="mt-6 rounded-lg border-l-[3px] border-l-cyan bg-[rgba(0,180,216,0.07)] p-3 text-sm text-[var(--color-navy)]">
                Full audit fee credited if you proceed with a build within 90 days.
              </div>
              <Link href="/contact" className="btn-outline mt-6 w-full justify-center">
                Get Started
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal id="audit-credit-details" className="mt-10 rounded-2xl bg-[var(--color-navy)] p-8 text-[var(--color-offwhite)] md:p-12">
            <h3 className="text-center text-2xl font-extrabold md:text-3xl">How the Audit Credit Works</h3>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-5">
                <p className="text-sm font-semibold text-cyan">Step 1</p>
                <h4 className="mt-2 text-xl font-bold">Complete Your Audit</h4>
                <p className="mt-3 text-sm text-white/74">
                  We deliver your AI Opportunity Audit — including your roadmap, AI Readiness Scorecard, and ROI estimates. This is a standalone deliverable
                  with real value, regardless of what comes next.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-5">
                <p className="text-sm font-semibold text-cyan">Step 2</p>
                <h4 className="mt-2 text-xl font-bold">Review the Recommendations</h4>
                <p className="mt-3 text-sm text-white/74">
                  You review the findings at your own pace. If the numbers make sense and you want to move forward, you let us know. No pressure, no
                  follow-up calls unless you want them.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-5">
                <p className="text-sm font-semibold text-cyan">Step 3</p>
                <h4 className="mt-2 text-xl font-bold">Your Audit Fee Disappears</h4>
                <p className="mt-3 text-sm text-white/74">
                  When you sign your implementation agreement, your full audit fee is deducted from your project invoice — dollar for dollar. You pay only
                  the difference.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-cyan/70 bg-cyan/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-cyan">Example</p>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-relaxed tabular-nums text-[var(--color-offwhite)]">
{`Standard Audit: $6,500
Workflow Automation Project: $22,000
Audit Credit Applied: -$6,500
--------------------------------
You Pay: $15,500`}
              </pre>
            </div>

            <p className="mt-6 text-center text-xs text-[var(--color-slate)]">
              Credit applies to any BitDepth implementation service: workflow automation, custom AI workers, AI strategy, or training engagements. Credit
              window is 90 days from audit delivery date. Credit is non-transferable and has no cash value. Valid on first implementation engagement only.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space pt-0">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold md:text-5xl">FAQ</h2>
          </ScrollReveal>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} index={index}>
                <details className="card-light p-5">
                  <summary className="cursor-pointer text-lg font-semibold text-[var(--color-navy)]">{faq.question}</summary>
                  <p className="mt-3 whitespace-pre-line text-[var(--color-slate)]">{faq.answer}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">The Audit Pays for Itself.</h2>
            <p className="mt-5 text-white/74">
              If we find $50,000/year in recoverable time and efficiency, the $5,000 audit fee is the best investment you&apos;ll make this year.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book Your AI Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
