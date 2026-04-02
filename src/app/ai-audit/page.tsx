import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Opportunity Discovery Audit | BitDepth AI Consulting',
  description:
    'BitDepth\'s AI Opportunity Audit is a structured 5–10 day assessment that finds where AI will save your business the most time and money. Starting at $5,000.',
  alternates: {
    canonical: '/ai-audit'
  },
  openGraph: {
    title: 'AI Opportunity Discovery Audit | BitDepth AI Consulting',
    description:
      'A structured 5–10 day audit to identify where AI can create measurable operational ROI.',
    url: '/ai-audit',
    type: 'website',
    images: [
      {
        url: '/images/audit-process.png',
        width: 1200,
        height: 630,
        alt: 'Consultant presenting an AI assessment roadmap in a boardroom'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Opportunity Discovery Audit | BitDepth AI Consulting',
    description: 'Find where AI will save the most time and money before you build anything.',
    images: ['/images/audit-process.png']
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
    question: 'How does the audit credit work toward a build project?',
    answer: 'If you proceed into implementation with BitDepth, your audit fee is credited toward the build scope.'
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
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">Pricing Tiers</h2>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <ScrollReveal className="card-light p-6">
              <h3 className="text-xl font-bold">Quick Scan</h3>
              <p className="mt-2 text-2xl font-extrabold text-[var(--color-navy)]">$1,500–$3,000</p>
              <p className="mt-2 text-[var(--color-slate)]">Micro SMB, 2–3 days, 3–5 processes</p>
              <p className="mt-4 text-sm text-[var(--color-slate)]">Audit fees credit toward implementation. Start without risk.</p>
            </ScrollReveal>
            <ScrollReveal index={1} className="card-light border-2 border-cyan p-6">
              <p className="inline-flex rounded-lg bg-cyan px-3 py-1 text-xs font-semibold text-[var(--color-navy)]">Recommended</p>
              <h3 className="mt-3 text-xl font-bold">Standard Audit</h3>
              <p className="mt-2 text-2xl font-extrabold text-[var(--color-navy)]">$5,000–$7,500</p>
              <p className="mt-2 text-[var(--color-slate)]">5–8 days, 6–10 processes mapped, full roadmap</p>
              <p className="mt-4 text-sm text-[var(--color-slate)]">Audit fees credit toward implementation. Start without risk.</p>
            </ScrollReveal>
            <ScrollReveal index={2} className="card-light p-6">
              <h3 className="text-xl font-bold">Deep-Dive Roadmap</h3>
              <p className="mt-2 text-2xl font-extrabold text-[var(--color-navy)]">$8,000–$15,000+</p>
              <p className="mt-2 text-[var(--color-slate)]">10–15 days, 10–20 processes, 5–10 ROI use cases</p>
              <p className="mt-4 text-sm text-[var(--color-slate)]">Audit fees credit toward implementation. Start without risk.</p>
            </ScrollReveal>
          </div>
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
                  <p className="mt-3 text-[var(--color-slate)]">{faq.answer}</p>
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
