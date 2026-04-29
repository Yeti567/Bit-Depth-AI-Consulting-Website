import type { Metadata } from 'next';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { buildServiceSchema } from '@/lib/schema';
import {
  ServiceHero,
  ProblemBlock,
  ListBlock,
  ProcessBlock,
  PricingBlock,
  FinalCTA,
  type ListItem,
  type ProcessStep
} from '@/components/ui/service-page-blocks';

export const metadata: Metadata = {
  title: 'AI Strategy & Roadmapping for Canadian Businesses | Bit Depth AI',
  description:
    'Not ready to build yet? Get a clear phased AI roadmap built around your actual systems, data, and budget. Vendor-neutral. Honest. Starting at $12,000.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/ai-strategy' },
  openGraph: {
    title: 'AI Strategy & Roadmapping for Canadian Businesses | Bit Depth AI',
    description:
      'Not ready to build yet? Get a clear phased AI roadmap built around your actual systems, data, and budget. Vendor-neutral. Honest. Starting at $12,000.',
    url: 'https://bitdepthaiconsulting.com/services/ai-strategy',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-strategy.jpg',
        width: 1200,
        height: 630,
        alt: 'AI strategy and roadmapping for Canadian businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Strategy & Roadmapping for Canadian Businesses | Bit Depth AI',
    description:
      'Not ready to build yet? Get a clear phased AI roadmap built around your actual systems, data, and budget.',
    images: ['/images/og-strategy.jpg']
  }
};

const deliverables: ListItem[] = [
  {
    title: 'Current state assessment',
    description:
      'A complete picture of your current systems, data environment, and key processes: what is working, what is fragile, and where the gaps are limiting what AI can do for you right now.'
  },
  {
    title: 'AI Readiness Scorecard',
    description:
      'Your business scored across five operational pillars: data quality, systems integration, process documentation, team readiness, and leadership alignment. You will know exactly where you stand.'
  },
  {
    title: 'Gap analysis',
    description:
      'A clear identification of what needs to be in place before AI will work, and a prioritized plan for addressing each gap in the right sequence.'
  },
  {
    title: 'Phased implementation roadmap',
    description:
      'A multi-phase plan showing what to build when, how each phase builds on the last, and what the investment and timeline look like at each stage. Typically structured as 0 to 3 months, 3 to 12 months, and 12 to 24 months.'
  },
  {
    title: 'Vendor and tool recommendations',
    description:
      'Vendor-neutral recommendations for the tools and platforms that fit your environment, your budget, and your team. Not the tools we are paid to sell.'
  },
  {
    title: 'Executive summary',
    description:
      'A written summary of findings and recommendations suitable for presenting to business partners, ownership groups, or a board.'
  }
];

const processSteps: ProcessStep[] = [
  {
    title: 'Discovery and assessment',
    description:
      'A structured assessment of your current state: interviewing key staff, reviewing your systems, mapping your processes, and evaluating your data environment. The same foundation as the AI Opportunity Audit, extended to include strategic fit and long-term sequencing.'
  },
  {
    title: 'Analysis and roadmap development',
    description:
      'We analyze the findings, identify the gaps, and build your phased roadmap. Every recommendation is sequenced deliberately, quick wins first to build momentum and demonstrate ROI, longer-term initiatives structured so each one builds on the last.'
  },
  {
    title: 'Readout and handoff',
    description:
      'We deliver the strategy in a structured readout session, walk you through every recommendation, and answer your questions. You receive a complete written document you can act on immediately, or share with partners and leadership for alignment.'
  }
];

export default function AIStrategyPage() {
  return (
    <PageShell>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'AI Strategy & Roadmapping for Canadian Businesses',
            'Not ready to build yet? Get a clear phased AI roadmap built around your actual systems, data, and budget. Vendor-neutral. Honest. Starting at $12,000.',
            'https://bitdepthaiconsulting.com/services/ai-strategy',
            'AI Strategy'
          )
        )}
      </Script>

      <ServiceHero
        eyebrow="AI Strategy & Roadmapping"
        breadcrumb="AI Strategy & Roadmapping"
        title="A clear plan is worth more than a fast start."
        lead="AI Strategy and Roadmapping gives you a clear, phased, realistic plan for how AI fits into your business, built around where you actually are, not where a textbook says you should be."
        primaryHref="/contact"
        primaryLabel="Book a discovery call"
        secondaryHref="#pricing"
        secondaryLabel="See pricing"
        imageSrc="/images/ai-strategy-hero.webp.webp"
        imageAlt="Business owner and consultant reviewing phased strategic roadmap on a whiteboard"
        reassurance="Engagements from $12,000. Audit fee credited dollar-for-dollar if you complete the audit first."
      />

      <ProblemBlock
        surface="stone"
        eyebrow="The problem"
        title="The most expensive AI mistake is building the wrong thing at the wrong time."
        paragraphs={[
          'AI is moving fast. Something that was not possible six months ago is standard practice today. That pace creates pressure, pressure to do something, to not fall behind, to show the team and the ownership group that the business is keeping up.',
          'That pressure leads to rushed decisions. A tool gets purchased before anyone has figured out what problem it is solving. An implementation starts before the data is clean enough to support it. A vendor makes a compelling pitch and the business signs before asking the right questions.',
          'The result is wasted budget, frustrated staff, and a growing skepticism about whether AI actually works. It works. But only when it is built on the right foundation, in the right sequence, targeting the right problems.'
        ]}
        pullQuote="A clear plan is so that when you do invest, the investment lands."
        imageSrc="/images/ai-strategy-supporting.webp.webp"
        imageAlt="Overhead view of a printed strategic roadmap document on a boardroom table with sticky notes"
      />

      <ProblemBlock
        surface="cream"
        eyebrow="The underlying issue"
        title="The most common reason businesses are not ready for AI is disconnected systems."
        paragraphs={[
          'Almost every business we audit has the same underlying issue. The data exists, but it lives in systems that do not talk to each other. The accounting software that has been in place for twelve years. The CRM that the sales team built their whole process around. The scheduling tool that works fine on its own but has never been connected to invoicing.',
          'Nobody wants to replace these tools. They are familiar, they work for their purpose, and the team has built their routines around them.',
          'The problem is not the tools themselves. The problem is the gaps between them: the manual steps, the re-entered data, the information that never makes it from one system to another. Those gaps are exactly where AI needs to operate.',
          'Before any AI implementation can succeed, those gaps need to be understood and addressed. The strategy engagement maps them, prioritizes them, and gives you a sequenced plan for closing them.'
        ]}
      />

      <ListBlock
        surface="stone"
        eyebrow="What you get"
        title="Six deliverables. One document."
        items={deliverables}
        columns={2}
      />

      <ProcessBlock
        surface="cream"
        eyebrow="How it works"
        title="A three-phase engagement."
        steps={processSteps}
      />

      <div id="pricing">
        <PricingBlock
          surface="stone"
          eyebrow="Pricing"
          title="Scoped to fit."
          lead="Final pricing depends on the size and complexity of your business, the number of systems and departments involved, and the depth of roadmapping required. Every engagement is scoped after an initial discovery call."
          rows={[
            {
              label: 'Strategy engagement',
              value: 'From $12,000',
              description: 'Includes all six deliverables and the readout session.'
            }
          ]}
          note="If you complete an AI Opportunity Audit first, the full audit fee is credited against your strategy engagement, dollar for dollar."
          ctaHref="/contact"
          ctaLabel="Book a discovery call"
        />
      </div>

      <FinalCTA
        eyebrow="The math"
        title="Every dollar of implementation goes further with a proper strategy behind it."
        body="Book a discovery call and we will tell you honestly whether a strategy engagement is the right starting point for your business, or whether the audit is enough to get you moving."
        primaryHref="/contact"
        primaryLabel="Book a discovery call"
        secondaryHref="/ai-audit"
        secondaryLabel="Book an AI Audit"
      />
    </PageShell>
  );
}
