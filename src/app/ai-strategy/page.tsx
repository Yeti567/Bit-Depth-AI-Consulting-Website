import type { Metadata } from 'next';
import Image from 'next/image';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Our AI Consulting Approach | Diagnose, Design, Implement | Bit Depth AI',
  description:
    'Bit Depth uses a structured three-phase methodology diagnose, Design, Implement. Every engagement starts with a discovery audit, not a sales pitch.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/ai-strategy'
  },
  openGraph: {
    title: 'Our AI Consulting Methodology | Bit Depth AI',
    description:
      'Learn how Bit Depth\'s Diagnose → Design → Implement approach eliminates wasted AI spend and delivers measurable outcomes for Canadian SMBs.',
    url: 'https://bitdepthaiconsulting.com/ai-strategy',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    images: [
      {
        url: '/images/og-strategy.jpg',
        width: 1200,
        height: 630,
        alt: 'Bit Depth AI consulting methodology social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'Our AI Consulting Methodology | Bit Depth AI',
    description:
      'Learn how Bit Depth\'s Diagnose → Design → Implement approach eliminates wasted AI spend and delivers measurable outcomes for Canadian SMBs.',
    images: ['/images/og-strategy.jpg']
  }
};

const phases = [
  {
    title: 'Phase 1: Diagnose',
    steps: [
      'Kickoff and stakeholder interviews',
      'Technology stack inventory',
      'Process mapping and time analysis',
      'Data readiness assessment',
      'AI Readiness Scorecard'
    ]
  },
  {
    title: 'Phase 2: Design',
    steps: [
      'Opportunity prioritization (quick wins vs. strategic)',
      'ROI modelling for top use cases',
      'Vendor and technology selection (vendor-neutral)',
      'Phased implementation roadmap'
    ]
  },
  {
    title: 'Phase 3: Implement',
    steps: ['Build, test, and deploy', 'Team training and handover', 'Documentation and SOPs', 'Optional ongoing managed service retainer']
  }
];

const differentiators = [
  {
    title: 'Vendor-neutral',
    description: "We don't resell software. We recommend what fits."
  },
  {
    title: 'Discovery first',
    description: 'No building before diagnosing.'
  },
  {
    title: 'ROI-anchored',
    description: 'Every project is justified by numbers.'
  },
  {
    title: 'Canadian-built',
    description: 'PIPEDA and BC PIPA compliant by default.'
  }
];

export default function AIStrategyPage() {
  return (
    <PageShell>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold text-white md:text-6xl">We Diagnose Before We Build. Every Time.</h1>
            <p className="mt-5 text-lg text-white/74">
              Most failed AI projects start with a solution looking for a problem. We do the opposite. Our structured methodology ensures every dollar you spend on AI is justified by a real business outcome.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[260px] overflow-hidden rounded-2xl border border-[var(--color-border)] bg-white">
            <Image src="/images/methodology-diagram.png" alt="Diagnose Design Implement methodology" fill priority className="object-contain p-6" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">The 3-Phase Methodology</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {phases.map((phase, index) => (
              <ScrollReveal key={phase.title} index={index} className="card-light p-6">
                <h3 className="text-2xl font-bold">{phase.title}</h3>
                <ul className="list-check mt-5 space-y-2 text-[var(--color-slate)]">
                  {phase.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">What Makes Our Approach Different</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {differentiators.map((item, index) => (
                <ScrollReveal key={item.title} index={index} className="card-dark p-6">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-white/72">{item.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
