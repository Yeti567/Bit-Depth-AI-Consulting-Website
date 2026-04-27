import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildServiceSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Strategy & Roadmapping for Canadian Businesses | Bit Depth AI',
  description:
    'Not ready to build yet? Get a clear phased AI roadmap built around your actual systems, data, and budget. Vendor-neutral. Honest. Starting at $12,000.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/services/ai-strategy'
  },
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
      'Not ready to build yet? Get a clear phased AI roadmap built around your actual systems, data, and budget. Vendor-neutral. Honest. Starting at $12,000.',
    images: ['/images/og-strategy.jpg']
  }
};

const deliverables = [
  {
    title: 'Current State Assessment',
    description:
      'A complete picture of your current systems, data environment, and key processes: what is working, what is fragile, and where the gaps are that are limiting what AI can do for you right now.'
  },
  {
    title: 'AI Readiness Scorecard',
    description:
      'Your business scored across five operational pillars data quality, systems integration, process documentation, team readiness, and leadership alignment. You will know exactly where you stand and what needs to move before implementation begins.'
  },
  {
    title: 'Gap Analysis',
    description:
      'A clear identification of what needs to be in place before AI will work. and a prioritized plan for addressing each gap in the right sequence.'
  },
  {
    title: 'Phased Implementation Roadmap',
    description:
      'A multi-phase plan showing what to build when, how each phase builds on the last, and what the investment and timeline looks like at each stage. Phases are typically structured as zero to three months, three to twelve months, and twelve to twenty-four months.'
  },
  {
    title: 'Vendor and Tool Recommendations',
    description:
      'Vendor-neutral recommendations for the tools and platforms that fit your environment, your budget, and your team not the tools we are paid to sell.'
  },
  {
    title: 'Executive Summary',
    description:
      'A written summary of findings and recommendations suitable for presenting to business partners, ownership groups, or a board.'
  }
];

export default function AIStrategyPage() {
  return (
    <PageShell>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(buildServiceSchema(
          'AI Strategy & Roadmapping for Canadian Businesses',
          'Not ready to build yet? Get a clear phased AI roadmap built around your actual systems, data, and budget. Vendor-neutral. Honest. Starting at $12,000.',
          'https://bitdepthaiconsulting.com/services/ai-strategy',
          'AI Strategy'
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
              <span className="text-white/80">AI Strategy & Roadmapping</span>
            </nav>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                You Know AI Is Coming. You Are Just Not Sure Where to Start, What to Build First, or Whether Your Business Is Actually Ready.
              </h1>
              <p className="mt-5 text-lg text-white/74">
                AI Strategy and Roadmapping gives you a clear, phased, realistic plan for how AI fits into your business built around where you actually are, not where a textbook says you should be.
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Book a Discovery Call
              </Link>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-strategy-hero.webp.webp"
                alt="Business owner and consultant reviewing phased strategic roadmap on whiteboard in professional office"
                fill
                priority
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section X: The Real Problem */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
                The Most Expensive AI Mistake Is Building the Wrong Thing at the Wrong Time.
              </h2>
              <p className="mt-5 text-[var(--color-slate)] leading-7">
                AI is moving fast. Something that was not possible six months ago is standard practice today. That pace creates pressure pressure to do something, to not fall behind, to show the team and the ownership group that the business is keeping up.
              </p>
              <p className="mt-4 text-[var(--color-slate)] leading-7">
                That pressure leads to rushed decisions. A tool gets purchased before anyone has figured out what problem it is solving. An implementation starts before the data is clean enough to support it. A vendor makes a compelling pitch and the business signs before asking the right questions.
              </p>
              <p className="mt-4 text-[var(--color-slate)] leading-7">
                The result is wasted budget, frustrated staff, and a growing skepticism about whether AI actually works. It works. But only when it is built on the right foundation, in the right sequence, targeting the right problems. That is what AI Strategy and Roadmapping delivers. a clear plan so that when you do invest, the investment lands.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-strategy-supporting.webp.webp"
                alt="Overhead view of large printed strategic roadmap document on boardroom table with sticky notes and laptop"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section X: Why Businesses Are Not Ready */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              The Most Common Reason Businesses Are Not Ready for AI Is Disconnected Systems
            </h2>
            <p className="mt-5 text-white/74 leading-7">
              Almost every business we audit has the same underlying issue. The data exists but it lives in systems that do not talk to each other. The accounting software that has been in place for twelve years. The CRM that the sales team built their whole process around. The scheduling tool that works fine on its own but has never been connected to invoicing.
            </p>
            <p className="mt-4 text-white/74 leading-7">
              Nobody wants to replace these tools. They are familiar, they work for their purpose, and the team has built their routines around them.
            </p>
            <p className="mt-4 text-white/74 leading-7">
              The problem is not the tools themselves. The problem is that the gaps between them. the manual steps, the re-entered data, the information that never makes it from one system to another. are exactly where AI needs to operate.
            </p>
            <p className="mt-4 text-cyan font-medium leading-7">
              Before any AI implementation can succeed, those gaps need to be understood and addressed. The strategy engagement maps them, prioritizes them, and gives you a sequenced plan for closing them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section X: What Is Included */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">What You Get</h2>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {deliverables.map((item, index) => (
              <ScrollReveal key={item.title} index={index} className="card-light p-6">
                <h3 className="text-lg font-bold text-[var(--color-navy)]">{item.title}</h3>
                <p className="mt-3 text-[var(--color-slate)] text-sm leading-6">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section X: How It Works */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              How the Strategy Engagement Works
            </h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            <ScrollReveal className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
              <p className="text-sm font-semibold text-cyan">Step 1</p>
              <h3 className="mt-2 text-xl font-bold text-white">Discovery and Assessment</h3>
              <p className="mt-3 text-sm text-white/74 leading-6">
                We start with a structured assessment of your current state interviewing key staff, reviewing your systems, mapping your processes, and evaluating your data environment. This is the same foundation as the AI Opportunity Audit, extended to include a deeper look at strategic fit and long-term sequencing.
              </p>
            </ScrollReveal>

            <ScrollReveal index={1} className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
              <p className="text-sm font-semibold text-cyan">Step 2</p>
              <h3 className="mt-2 text-xl font-bold text-white">Analysis and Roadmap Development</h3>
              <p className="mt-3 text-sm text-white/74 leading-6">
                We analyze the findings, identify the gaps, and build your phased roadmap. Every recommendation is sequenced deliberately quick wins first to build momentum and demonstrate ROI, longer-term initiatives structured so each one builds on the foundation laid by the last.
              </p>
            </ScrollReveal>

            <ScrollReveal index={2} className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
              <p className="text-sm font-semibold text-cyan">Step 3</p>
              <h3 className="mt-2 text-xl font-bold text-white">Readout and Handoff</h3>
              <p className="mt-3 text-sm text-white/74 leading-6">
                We deliver the strategy in a structured readout session, walk you through every recommendation, and answer your questions. You receive a complete written document you can act on immediately. or share with partners and leadership for alignment before moving forward.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section X: Pricing */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">Pricing</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-7">
              From <strong className="text-[var(--color-navy)] text-2xl">$12,000</strong>. Final pricing depends on the size and complexity of your business, the number of systems and departments involved, and the depth of roadmapping required. Every engagement is scoped after an initial discovery call.
            </p>
            <div className="mt-6 rounded-lg border-l-[3px] border-l-cyan bg-[rgba(0,180,216,0.07)] p-4 text-sm text-[var(--color-navy)]">
              <strong>Note:</strong> If you complete an AI Opportunity Audit first, the full audit fee is credited against your strategy engagement dollar for dollar.
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              A Clear Plan Is Worth More Than a Fast Start
            </h2>
            <p className="mt-5 text-white/74 leading-7">
              Every dollar you invest in implementation after a proper strategy engagement goes further than a dollar invested without one. Book a discovery call and we will tell you honestly whether a strategy engagement is the right starting point for your business. or whether the audit is enough to get you moving.
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
