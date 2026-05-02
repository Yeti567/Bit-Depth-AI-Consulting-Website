import type { Metadata } from 'next';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ArticleHeader, ArticleBody, ArticleCTA } from '@/components/ui/article-layout';
import { buildArticleSchema } from '@/lib/schema';

const TITLE = 'What to expect from your first AI consulting engagement.';

export const metadata: Metadata = {
  title: `${TITLE} | BitDepth AI`,
  description:
    'A step-by-step walkthrough of the BitDepth discovery, audit, roadmap, and implementation process for first-time AI consulting clients.',
  alternates: {
    canonical:
      'https://bitdepthaiconsulting.com/resources/what-to-expect-from-your-first-ai-consulting-engagement'
  },
  openGraph: {
    title: `${TITLE} | BitDepth AI`,
    description:
      'A step-by-step walkthrough of the BitDepth discovery, audit, roadmap, and implementation process.',
    url: 'https://bitdepthaiconsulting.com/resources/what-to-expect-from-your-first-ai-consulting-engagement',
    type: 'article',
    siteName: 'BitDepth AI Consulting',
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
    title: `${TITLE} | BitDepth AI`,
    description:
      'A step-by-step walkthrough of the BitDepth discovery, audit, roadmap, and implementation process.',
    images: ['/images/resources-article-3.webp.webp']
  }
};

const stages = [
  {
    title: 'The discovery call.',
    meta: 'Free, 30 to 45 minutes',
    description:
      'Every engagement starts with a free discovery call. This is not a sales call. It is a conversation about your business: what you do, how you operate, where the friction is, and whether AI is likely to help. By the end of the call you will know whether an audit makes sense for your situation. If it does not, we will tell you that and point you in the right direction. If it does, we will recommend the right audit tier and explain exactly what happens next.'
  },
  {
    title: 'The AI Opportunity Audit.',
    meta: '5 to 10 business days',
    description:
      "Once you decide to proceed with an audit, we send you a short intake checklist: basic information about your business, your team, and your current technology stack. From there we schedule a series of structured interviews with you and your key staff. These are conversational, not technical. We are trying to understand how your business actually works, not test anyone's knowledge. Alongside the interviews we review your systems, map your key workflows, and assess the quality and accessibility of your data. Most of the work happens on our end. Your team's time commitment is typically four to eight hours spread across the audit period."
  },
  {
    title: 'The readout.',
    meta: '60 to 90 minutes',
    description:
      'At the end of the audit we deliver your findings in a readout call. We walk you through your AI Readiness Scorecard, your prioritized opportunity list, and your 90-day implementation roadmap. We explain the ROI estimates for your top use cases and answer any questions you have. You will receive a written copy of everything discussed. This is the point where you decide whether to move forward with implementation. There is no pressure. The audit is a complete deliverable on its own. If you need time to review the findings or consult with partners, take it.'
  },
  {
    title: 'Implementation.',
    meta: 'If you choose to proceed',
    description:
      'If the audit findings justify moving forward, we scope an implementation project based on your priorities. The audit credit is applied to your project invoice on day one. We build and deploy the solution, whether that is a workflow automation, a custom AI worker, a data integration, or a combination, and we make sure your team knows how to use it before we hand it over. Most implementations take four to twelve weeks depending on complexity. We stay involved after deployment to make sure everything is working as expected.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function WhatToExpectPage() {
  return (
    <PageShell>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(
          buildArticleSchema(
            TITLE,
            'https://bitdepthaiconsulting.com/resources/what-to-expect-from-your-first-ai-consulting-engagement',
            'https://bitdepthaiconsulting.com/images/resources-article-3.webp.webp',
            '2026-04-05'
          )
        )}
      </Script>

      <ArticleHeader
        category="Playbook"
        readTime="7 min read"
        title={TITLE}
        breadcrumbLabel="Your first engagement"
        imageSrc="/images/resources-article-3.webp.webp"
        imageAlt="Consultant and business owner shaking hands across a desk with a roadmap and laptop visible"
        lead="If you have never worked with an AI consultant before, you probably have questions. What does the process actually look like? Who needs to be involved? What will you have at the end? And most importantly, will it be worth it? This article walks you through exactly what a BitDepth engagement looks like, from first call to final deliverable. No surprises. No fine print."
      />

      <ArticleBody>
        <ScrollReveal>
          <ol className="space-y-10">
            {stages.map((stage, index) => (
              <li key={stage.title} className="flex gap-5">
                <span className="font-mono text-sm tabular text-[var(--color-cyan)] pt-1">
                  {pad2(index + 1)}
                </span>
                <div>
                  <h2 className="text-[var(--color-navy)]">{stage.title}</h2>
                  <p className="mt-1 text-sm text-[var(--color-slate)]">{stage.meta}</p>
                  <p className="mt-4 text-[var(--color-slate)]">{stage.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">What happens if you are not ready.</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            Not every audit ends with an implementation project, and that is completely fine. If
            your data is not clean enough, your systems are too fragmented, or the ROI simply is
            not there yet, we will tell you honestly. You will leave with a clear picture of what
            needs to be addressed and a prioritized plan for getting there. Some clients come back
            six months later when they have worked through the foundation issues. Others use the
            roadmap to guide internal improvements on their own timeline. Either way, the audit
            was worth it.
          </p>
        </ScrollReveal>
      </ArticleBody>

      <ArticleCTA
        eyebrow="Ready to see what we find"
        title="The first step is a free 30-minute call."
        body="No commitment, no pressure, just an honest conversation about whether this makes sense for your business."
      />
    </PageShell>
  );
}
