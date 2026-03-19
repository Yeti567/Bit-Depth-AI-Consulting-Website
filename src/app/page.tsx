import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { CountUp } from '@/components/ui/count-up';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'AI Consulting for Oil and Gas and Manufacturing | BitDepth AI Consulting',
  description:
    'BitDepth AI Consulting delivers vendor-neutral AI consulting for oil and gas and manufacturing companies in Western Canada. We audit first. We build what works.',
  keywords: [
    'AI consulting for oil and gas and manufacturing',
    'machine learning consulting',
    'AI implementation services',
    'digital transformation consultant',
    'predictive maintenance AI',
    'industrial AI solutions',
    'AI strategy consulting',
    'data analytics consulting'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'AI Consulting for Oil and Gas and Manufacturing | BitDepth AI Consulting',
    description:
      'BitDepth AI Consulting delivers vendor-neutral AI consulting for oil and gas and manufacturing companies in Western Canada. We audit first. We build what works.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/images/Homepage hero section.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial oil and gas facility used in the BitDepth AI homepage hero'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting for Oil and Gas and Manufacturing | BitDepth AI Consulting',
    description:
      'Vendor-neutral AI consulting for oil and gas and manufacturing companies in Western Canada. Audit first. Build what works.',
    images: ['/images/Homepage hero section.webp']
  }
};

const pillars = [
  {
    title: 'Vendor-Neutral',
    description:
      'We are not affiliated with any software platform. We have no commission, no referral fee, and no preferred vendor. Our only product is the outcome we help you achieve.'
  },
  {
    title: 'Audit-First',
    description:
      'Every engagement starts with a structured discovery audit. We map your operations, assess your data, score your AI readiness across five pillars, and deliver a prioritized roadmap before you spend a dollar on implementation.'
  },
  {
    title: 'Outcomes Only',
    description:
      'We measure success by the operational improvements our clients achieve. Not the number of tools deployed. Not the size of the contract. The actual reduction in downtime, manual hours, or processing costs.'
  }
];

const serviceOverview = [
  'AI Opportunity Discovery Audit: $5,000 to $7,500 fixed price',
  'AI Workflow Automation: $15,000 to $75,000',
  'Custom AI Workers: Project-based',
  'AI Strategy and Roadmapping: $12,000 to $30,000',
  'AI Training and Enablement: $2,500 to $7,500'
];

const caseStudies = [
  {
    label: 'Case Study 01',
    title: 'A manufacturer being sold the wrong AI project',
    situation:
      'A mid-market manufacturer was being pitched a custom AI platform before anyone had mapped the underlying workflow, data quality, or handoff points between teams.',
    pointOfView:
      'Our view: if the process is still inconsistent and the source data is fragmented, custom AI is too early. Audit first. Fix the operating foundation. Then automate the highest-friction step with the smallest viable build.',
    outcome:
      'The right first move was not a large platform purchase. It was a narrower automation roadmap built around process clarity, document flow, and existing systems the business already understood.'
  },
  {
    label: 'Case Study 02',
    title: 'An oil and gas operator under pressure to “do something with AI”',
    situation:
      'Leadership wanted to move quickly, but the available opportunities ranged from field reporting automation to predictive maintenance, each with different data, risk, and implementation demands.',
    pointOfView:
      'Our view: speed matters, but sequencing matters more. Start where the operational pain is clear, the data is accessible, and the ROI can be measured without a multi-quarter transformation program.',
    outcome:
      'Instead of chasing the most ambitious concept first, the business got a prioritized roadmap focused on lower-risk, operations-led use cases that could prove value before expanding investment.'
  }
];

const stats = [
  { value: 5, suffix: 'K', label: 'Entry Point' },
  { value: 2, suffix: '', label: 'Core Industries' },
  { value: 3, suffix: '', label: 'Western Provinces' }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="section-navy section-angle relative overflow-hidden">
        <div className="hero-particle left-[8%] top-[24%] h-2 w-2" />
        <div className="hero-particle left-[20%] top-[70%] h-3 w-3" style={{ animationDelay: '1s' }} />
        <div className="hero-particle right-[12%] top-[18%] h-2.5 w-2.5" style={{ animationDelay: '2s' }} />
        <div className="hero-particle right-[24%] top-[62%] h-2 w-2" style={{ animationDelay: '3s' }} />
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10 md:block" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/5 md:block" />
        <div className="container-shell relative grid min-h-[calc(100svh-4rem)] gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:py-32">
          <ScrollReveal>
            <p className="industry-pill inline-flex">Western Canada AI Consulting</p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-[56px]">
              AI Consulting for Oil and Gas and Manufacturing Companies
            </h1>
            <h2 className="mt-5 text-xl font-semibold text-white/90 sm:text-2xl md:text-3xl">
              Vendor-Neutral. Audit-First. Built for the Size of Your Business.
            </h2>
            <p className="mt-6 max-w-3xl text-lg font-normal leading-7 text-white/70 sm:text-xl sm:leading-8">
              BitDepth AI Consulting delivers practical AI consulting for oil and gas and manufacturing companies across Western Canada. We start with a structured AI audit, identify exactly where automation creates real value, and then build the systems that change how you operate. No software to sell. No predetermined answers. Just results.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="btn-primary">
                Book Your AI Opportunity Audit - Starting at $5,000
              </Link>
              <Link href="#how-it-works" className="btn-secondary text-white">
                See How It Works
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.08em] text-white/50 sm:mt-10 sm:gap-4 sm:text-[13px] md:gap-6">
              <span>$5K entry point</span>
              <span className="h-4 w-px bg-cyan/30" />
              <span>Vendor-neutral</span>
              <span className="h-4 w-px bg-cyan/30" />
              <span>Western Canada</span>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[280px] overflow-hidden rounded-[2rem] border border-cyan/20 shadow-dark sm:min-h-[360px] lg:min-h-[560px]">
            <Image
              src="/images/Homepage hero section.webp"
              alt="Photorealistic aerial view of a large industrial oil and gas facility at dusk with glowing amber lights, pipelines, and processing towers"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light-grid section-space">
        <div className="container-shell max-w-5xl">
          <ScrollReveal>
            <SectionHeading title="The Problem We Solve" description="" />
          </ScrollReveal>
          <ScrollReveal className="mt-8 space-y-6 text-lg leading-8 text-charcoal/82" index={1}>
            <p>
              Most AI consulting is built for enterprise. The minimum engagements start at $50,000. The timelines stretch to 12 months. And most of the work goes to software your vendor already sells.
            </p>
            <p>
              Canadian small and mid-market businesses in oil and gas and manufacturing are left out entirely. You have the operations, the data, and the problems worth solving. You just do not have the budget for an enterprise firm or the in-house team to vet which vendors are telling you the truth.
            </p>
            <p>That is the gap BitDepth was built to close.</p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} index={index}>
                <article className="surface-card h-full p-8">
                  <div className="icon-chip" />
                  <h3 className="text-2xl font-semibold text-navy">{pillar.title}</h3>
                  <p className="mt-4 text-charcoal/80">{pillar.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-dark section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr,0.95fr] lg:items-start">
          <div>
            <ScrollReveal>
              <SectionHeading
                title="How the AI Consulting Process Works"
                description="AI consulting for oil and gas and manufacturing should follow a clear sequence. Here is how we work."
                theme="dark"
              />
            </ScrollReveal>
            <div className="mt-10 space-y-6">
              <ScrollReveal as="article" className="surface-card-dark p-8" index={0}>
                <h3 className="text-2xl font-semibold text-white">Step 1: AI Opportunity Discovery Audit</h3>
                <p className="mt-4 text-white/75">
                  A fixed-price, two-to-four week engagement. We interview your team at every level, assess your current technology stack, and score your AI readiness across five pillars: data quality, process clarity, technology maturity, organizational readiness, and strategic alignment. You receive a written report and a prioritized roadmap.
                </p>
              </ScrollReveal>
              <ScrollReveal as="article" className="surface-card-dark p-8" index={1}>
                <h3 className="text-2xl font-semibold text-white">Step 2: Prioritized Implementation</h3>
                <p className="mt-4 text-white/75">
                  We take the highest-value opportunities from your audit and build them. This may be a workflow automation, a predictive maintenance model, a custom AI worker, or an LLM-powered document processing system. We select the right tools for your situation, not our preferred stack.
                </p>
              </ScrollReveal>
              <ScrollReveal as="article" className="surface-card-dark p-8" index={2}>
                <h3 className="text-2xl font-semibold text-white">Step 3: Measure and Iterate</h3>
                <p className="mt-4 text-white/75">
                  Every implementation is tied to a measurable outcome defined before we start. We track results, refine the system, and produce a training and handoff package so your team can operate it independently.
                </p>
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal index={1} className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-cyan/20 shadow-dark">
            <Image
              src="/images/Home page process section.webp"
              alt="Clean flat-lay style diagram on a dark navy background showing three connected steps labeled Audit, Build, Measure"
              fill
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space bg-offwhite">
        <div className="container-shell max-w-5xl">
          <ScrollReveal>
            <SectionHeading
              title="AI Consulting Services Overview"
              description="BitDepth delivers AI consulting services built around five core offerings. Each one can be engaged independently or as part of a full AI implementation roadmap."
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceOverview.map((item, index) => (
              <ScrollReveal key={item} index={index}>
                <div className="surface-card p-6 text-charcoal/85">{item}</div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-8" index={2}>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy-soft section-space">
        <div className="container-shell max-w-5xl">
          <ScrollReveal>
            <SectionHeading
              title="Industries We Serve"
              description="Our AI consulting practice is built around two sectors where the data is rich, the operational stakes are high, and the mid-market is underserved."
              theme="dark"
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ScrollReveal as="article" className="surface-card-dark p-8" index={0}>
              <span className="industry-pill">Oil and Gas</span>
              <h3 className="mt-5 text-2xl font-semibold text-white">Oil and Gas</h3>
              <p className="mt-4 text-white/75">
                We work with upstream, midstream, and downstream oil and gas companies on predictive maintenance, reservoir data modeling, pipeline integrity monitoring, production optimization, and generative AI for document and regulatory processing.
              </p>
              <Link href="/industries/oil-and-gas" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                Oil and Gas AI Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
            <ScrollReveal as="article" className="surface-card-dark p-8" index={1}>
              <span className="industry-pill">Manufacturing</span>
              <h3 className="mt-5 text-2xl font-semibold text-white">Manufacturing</h3>
              <p className="mt-4 text-white/75">
                We work with manufacturers on Industry 4.0 implementation, computer vision quality control, AI-driven predictive maintenance, supply chain optimization, and intelligent process automation.
              </p>
              <Link href="/industries/manufacturing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                Manufacturing AI Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-space section-accent-left bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr,0.95fr] lg:items-center">
          <div>
            <ScrollReveal>
              <SectionHeading title="Why Canadian Mid-Market Businesses Choose BitDepth" description="" />
            </ScrollReveal>
            <ScrollReveal className="mt-8 space-y-6 text-lg leading-8 text-charcoal/82" index={1}>
              <p>
                The global AI consulting market is projected to reach $116 billion by 2035. The fastest-growing segment is the small and mid-market business sector, growing at 25.7 percent annually. Yet most AI consulting capacity is locked behind enterprise minimums that start at $50,000 and run into the hundreds of thousands.
              </p>
              <p>
                BitDepth was built specifically for Canadian businesses with $2M to $50M in revenue that need enterprise-grade AI thinking at a price point that reflects their actual scale.
              </p>
            </ScrollReveal>
            <ScrollReveal className="mt-8" index={2}>
              <ul className="space-y-3 text-charcoal/82">
                <li>Minimum engagement: $5,000</li>
                <li>No software commissions. No vendor relationships.</li>
                <li>Discovery before every dollar of implementation</li>
                <li>Western Canada focus: BC, Alberta, and expanding</li>
                <li>PIPEDA and PIPA-compliant data handling built into every engagement</li>
              </ul>
            </ScrollReveal>
          </div>
          <ScrollReveal index={1} className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-cyan/15 shadow-soft">
            <Image
              src="/images/Home page BC Canada section.webp"
              alt="Wide-angle photograph of the British Columbia interior landscape at golden hour near Kamloops"
              fill
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark section-space">
        <div className="container-shell max-w-5xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Case Studies"
              title="Two examples of how we think about AI before anything gets built"
              description="These examples reflect BitDepth&apos;s point of view: audit first, challenge the default recommendation, and sequence AI around operational reality instead of hype."
              theme="dark"
            />
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((caseStudy, index) => (
              <ScrollReveal key={caseStudy.title} index={index}>
                <article className="surface-card-dark h-full p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{caseStudy.label}</p>
                  <h3 className="mt-4 text-2xl font-bold text-white">{caseStudy.title}</h3>
                  <div className="mt-6 space-y-5 text-white/75">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/45">Situation</p>
                      <p className="mt-2">{caseStudy.situation}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/45">BitDepth Point of View</p>
                      <p className="mt-2">{caseStudy.pointOfView}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/45">Likely Outcome</p>
                      <p className="mt-2">{caseStudy.outcome}</p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta-radial py-16 text-white md:py-20">
        <div className="container-shell cta-shell px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Is Your Business Ready for AI?</h2>
            <p className="mt-4 max-w-3xl text-base text-white/65 sm:text-lg">
              Find out in under two minutes. Take our free AI Readiness Assessment and get a score across five operational pillars. No email required to start.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="btn-primary">
                Book Your AI Opportunity Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark border-y border-white/10 py-10">
        <div className="container-shell grid gap-6 md:grid-cols-3 md:divide-x md:divide-white/10">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} className="px-4 md:px-8" index={index}>
              <div className="text-5xl font-extrabold text-cyan md:text-[52px]">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.08em] text-white/60">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
