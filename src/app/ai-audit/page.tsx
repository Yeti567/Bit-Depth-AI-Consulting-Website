import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Opportunity Audit for Canadian Businesses | BitDepth AI',
  description:
    "Find out exactly where AI will save your business time and money before you spend a dollar on it. Audits from $1,500. Full fee credited to any implementation.",
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/ai-audit'
  },
  openGraph: {
    title: 'AI Opportunity Audit for Canadian Businesses | BitDepth AI',
    description:
      "Find out exactly where AI will save your business time and money before you spend a dollar on it. Audits from $1,500. Full fee credited to any implementation.",
    url: 'https://bitdepthaiconsulting.com/ai-audit',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-audit.webp',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Opportunity Audit for Canadian businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Opportunity Audit for Canadian Businesses | BitDepth AI',
    description:
      "Find out exactly where AI will save your business time and money before you spend a dollar on it. Audits from $1,500. Full fee credited to any implementation.",
    images: ['/images/og-audit.webp']
  }
};

const deliverables = [
  'A complete map of your current systems and where the gaps are',
  'An AI Readiness Scorecard across five key operational pillars',
  'A prioritized opportunity list — quick wins and longer-term initiatives ranked by impact and feasibility',
  'ROI estimates for your top 3–5 use cases so you know the numbers before you commit to anything',
  'A 90-day implementation roadmap you can act on immediately',
  'A set of quick wins — lower-cost faster implementations that will pay for themselves in the near term',
  'Honest advice — including if AI is not the right move for your business right now'
];

const faqs = [
  {
    question: 'What does an AI audit actually look like day to day?',
    answer:
      'We start with a short intake call to understand your business and get access to the information we need. From there we run structured interviews with you and your key staff — typically 4 to 12 people depending on the audit tier. We map your workflows, review your technology stack, and assess your data environment. Most of the work happens on our end. Your team\'s time commitment is focused and manageable. At the end you get a readout call where we walk you through everything we found.'
  },
  {
    question: 'How long does the audit take?',
    answer: 'Most standard audits take 5 to 8 business days. Quick scans can be done in 2 to 3 days. Deep-dive roadmaps for larger or more complex businesses take 10 to 15 days.'
  },
  {
    question: 'Do we need to do a lot of preparation before you start?',
    answer: 'No heavy preparation required. We provide a short intake checklist and guide your team through the process. Most clients find it takes less time than they expected.'
  },
  {
    question: 'What if the audit finds that we are not ready for AI?',
    answer: 'That is still a successful outcome. If your data is not clean or your systems are not integrated enough to support AI yet, we will tell you exactly what needs to be in place and give you a prioritized plan to get there. That foundation work has real value — and it means when you do invest in AI it will actually work.'
  },
  {
    question: 'What if the numbers do not justify building anything?',
    answer: 'We will tell you. Honestly. We are not in the business of selling implementations that do not make financial sense. If the ROI is not there we will say so — and you will still walk away with a clear picture of your operations and a roadmap for the future.'
  },
  {
    question: 'What exactly are the terms of the audit credit guarantee?',
    answer:
      'When you complete any tier of the BitDepth AI Opportunity Audit, the full fee you paid is credited against your first implementation engagement — provided you sign your implementation agreement within 90 days of receiving your audit deliverables. The credit applies to any BitDepth implementation service: workflow automation, custom AI workers, AI strategy and roadmapping, or training and enablement. It is applied as a line-item deduction on your implementation invoice. There is no minimum project size. The credit has no cash value, is non-transferable, and applies to your first implementation engagement only. Extensions are handled on a case-by-case basis for clients with a legitimate reason for delay.'
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
              Find Out Exactly Where AI Will Save Your Business Time and Money — Before You Spend a Dollar on It
            </h1>
            <p className="mt-5 text-lg text-white/74">
              Most businesses waste their first AI budget on the wrong thing. The AI Opportunity Audit eliminates that risk. In 5–10 business days you get a clear prioritized picture of where AI will make the biggest impact in your business — with honest ROI estimates to back it up.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book Your Audit
            </Link>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[340px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/ai-audit-hero.webp" alt="Business owner and consultant reviewing AI readiness dashboard together at boardroom table" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">What You Get at the End of the Audit</h2>
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
          <ScrollReveal className="mt-12">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-audit-supporting.webp"
                alt="Printed AI readiness roadmap beside a laptop showing prioritized business opportunities"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
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
                  We deliver your AI Opportunity Audit — your roadmap, AI Readiness Scorecard, and ROI estimates. This is a standalone deliverable with real value regardless of what comes next. You will know exactly where your business stands.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-5">
                <p className="text-sm font-semibold text-cyan">Step 2</p>
                <h4 className="mt-2 text-xl font-bold">Review the Recommendations at Your Own Pace</h4>
                <p className="mt-3 text-sm text-white/74">
                  You review the findings on your own timeline. If the numbers make sense and you want to move forward, you let us know. There are no follow-up pressure calls unless you want them. If the audit finds that AI is not right for your business yet, we will tell you that honestly — and you will still have a clear operational roadmap worth more than you paid for it.
                </p>
              </div>

              <div className="rounded-xl border border-[var(--color-border)] bg-white/5 p-5">
                <p className="text-sm font-semibold text-cyan">Step 3</p>
                <h4 className="mt-2 text-xl font-bold">Your Audit Fee Disappears</h4>
                <p className="mt-3 text-sm text-white/74">
                  When you sign your implementation agreement, your full audit fee is deducted from your project invoice dollar for dollar. You pay only the difference. No minimums. No conditions beyond the 90-day window.
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
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">If We Find $50,000 a Year in Recoverable Time and Efficiency, the $5,000 Audit Fee Is the Best Investment You Will Make This Year</h2>
            <p className="mt-5 text-white/74">
              The audit is not a sales pitch. It is a diagnosis. You will know exactly where your business stands, what the opportunities are, and what they are worth — before you commit to building anything. And if you move forward with us, the fee comes straight off your project.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book Your AI Audit
            </Link>
            <div className="mt-6">
              <Link href="/contact" className="text-sm text-cyan hover:text-cyan/80 underline">
                Have questions first? Book a free discovery call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
