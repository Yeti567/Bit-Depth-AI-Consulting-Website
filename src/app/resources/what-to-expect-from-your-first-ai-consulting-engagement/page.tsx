import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildArticleSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'What to Expect From Your First AI Consulting Engagement | Bit Depth AI',
  description:
    'A step-by-step walkthrough of the Bit Depth discovery, audit, roadmap, and implementation process for first-time AI consulting clients.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/resources/what-to-expect-from-your-first-ai-consulting-engagement'
  },
  openGraph: {
    title: 'What to Expect From Your First AI Consulting Engagement | Bit Depth AI',
    description:
      'A step-by-step walkthrough of the Bit Depth discovery, audit, roadmap, and implementation process for first-time AI consulting clients.',
    url: 'https://bitdepthaiconsulting.com/resources/what-to-expect-from-your-first-ai-consulting-engagement',
    type: 'article',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/resources-article-3.webp.webp',
        width: 1200,
        height: 630,
        alt: 'AI consulting engagement process walkthrough'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'What to Expect From Your First AI Consulting Engagement | Bit Depth AI',
    description:
      'A step-by-step walkthrough of the Bit Depth discovery, audit, roadmap, and implementation process for first-time AI consulting clients.',
    images: ['/images/resources-article-3.webp.webp']
  }
};

export default function WhatToExpectPage() {
  return (
    <PageShell>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(buildArticleSchema(
          'What to Expect From Your First AI Consulting Engagement',
          'https://bitdepthaiconsulting.com/resources/what-to-expect-from-your-first-ai-consulting-engagement',
          'https://bitdepthaiconsulting.com/images/resources-article-3.webp.webp',
          '2026-04-05'
        ))}
      </Script>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-4xl">
            <nav className="text-sm text-white/60">
              <Link href="/" className="hover:text-cyan">Home</Link>
              <span className="mx-2">{'>'}</span>
              <Link href="/resources" className="hover:text-cyan">Resources</Link>
              <span className="mx-2">{'>'}</span>
              <span className="text-white">What to Expect From Your First AI Consulting Engagement</span>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <span className="inline-flex rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">Playbook</span>
              <span className="text-sm text-white/60">7 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              What to Expect From Your First AI Consulting Engagement
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <div className="relative mb-10 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/resources-article-3.webp.webp"
                alt="Consultant and business owner shaking hands across desk with roadmap and laptop visible"
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="text-lg leading-relaxed text-[var(--color-slate)]">
              If you have never worked with an AI consultant before, you probably have questions. What does the process actually look like? Who needs to be involved from your team? What will you have at the end? And most importantly will it be worth it? This article walks you through exactly what a Bit Depth engagement looks like from first call to final deliverable. No surprises. No fine print. Just a clear picture of what you are signing up for.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">Stage 1. The Discovery Call (Free, 30–45 Minutes)</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              Every engagement starts with a free discovery call. This is not a sales call. It is a conversation about your business. what you do, how you operate, where the friction is, and whether AI is likely to help. By the end of the call you will know whether an audit makes sense for your situation. If it does not, we will tell you that and point you in the right direction. If it does, we will recommend the right audit tier and explain exactly what happens next.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">Stage 2. The AI Opportunity Audit (5–10 Business Days)</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              Once you decide to proceed with an audit, we send you a short intake checklist basic information about your business, your team, and your current technology stack. From there we schedule a series of structured interviews with you and your key staff. These are conversational, not technical. We are trying to understand how your business actually works, not test anyone&apos;s knowledge. Alongside the interviews we review your systems, map your key workflows, and assess the quality and accessibility of your data. Most of the work happens on our end. Your team&apos;s time commitment is typically four to eight hours spread across the audit period.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">Stage 3. The Readout (60–90 Minutes)</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              At the end of the audit we deliver your findings in a readout call. We walk you through your AI Readiness Scorecard, your prioritized opportunity list, and your 90-day implementation roadmap. We explain the ROI estimates for your top use cases and answer any questions you have. You will receive a written copy of everything discussed. This is the point where you decide whether to move forward with implementation. There is no pressure. The audit is a complete deliverable on its own if you need time to review the findings or consult with partners, take it.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">Stage 4: Implementation (If You Choose to Proceed)</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              If the audit findings justify moving forward, we scope an implementation project based on your priorities. The audit credit is applied to your project invoice on day one. We build and deploy the solution whether that is a workflow automation, a custom AI worker, a data integration, or a combination. and we make sure your team knows how to use it before we hand it over. Most implementations take four to twelve weeks depending on complexity. We stay involved after deployment to make sure everything is working as expected.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">What Happens if You Are Not Ready</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              Not every audit ends with an implementation project and that is completely fine. If your data is not clean enough, your systems are too fragmented, or the ROI simply is not there yet, we will tell you honestly. You will leave with a clear picture of what needs to be addressed and a prioritized plan for getting there. Some clients come back six months later when they have worked through the foundation issues. Others use the roadmap to guide internal improvements on their own timeline. Either way the audit was worth it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Ready to See What We Find?</h2>
            <p className="mt-5 text-white/74">
              The first step is a free 30-minute discovery call. No commitment, no pressure just an honest conversation about whether this makes sense for your business.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Free Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
