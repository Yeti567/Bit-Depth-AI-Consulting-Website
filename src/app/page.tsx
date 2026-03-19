import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';

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

const testimonials = [
  {
    quote:
      'The audit gave us a clear picture of where AI could actually save us time versus where it would just create new problems. That clarity alone was worth the investment.',
    source: 'Operations Manager, BC Energy Company'
  },
  {
    quote:
      'We had been pitched three different AI platforms before we called BitDepth. The audit showed us we did not need any of them. We automated two processes with tools we already had.',
    source: 'General Manager, BC Manufacturing Firm'
  }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="bg-navy text-white">
        <div className="container-shell grid gap-12 py-20 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:py-28">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">AI Consulting for Oil and Gas and Manufacturing Companies</h1>
            <h2 className="mt-5 text-2xl font-semibold text-white/90 md:text-3xl">
              Vendor-Neutral. Audit-First. Built for the Size of Your Business.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82">
              BitDepth AI Consulting delivers practical AI consulting for oil and gas and manufacturing companies across Western Canada. We start with a structured AI audit, identify exactly where automation creates real value, and then build the systems that change how you operate. No software to sell. No predetermined answers. Just results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary">
                Book Your AI Opportunity Audit - Starting at $5,000
              </Link>
              <Link href="#how-it-works" className="btn-secondary border-white/20 bg-transparent text-white hover:border-cyan hover:text-cyan">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/Homepage hero section.webp"
              alt="Photorealistic aerial view of a large industrial oil and gas facility at dusk with glowing amber lights, pipelines, and processing towers"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-5xl">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">The Problem We Solve</h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-charcoal/82">
            <p>
              Most AI consulting is built for enterprise. The minimum engagements start at $50,000. The timelines stretch to 12 months. And most of the work goes to software your vendor already sells.
            </p>
            <p>
              Canadian small and mid-market businesses in oil and gas and manufacturing are left out entirely. You have the operations, the data, and the problems worth solving. You just do not have the budget for an enterprise firm or the in-house team to vet which vendors are telling you the truth.
            </p>
            <p>That is the gap BitDepth was built to close.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="surface-card h-full p-8">
                <h3 className="text-2xl font-semibold text-navy">{pillar.title}</h3>
                <p className="mt-4 text-charcoal/80">{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-space bg-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr,0.95fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">How the AI Consulting Process Works</h2>
            <p className="mt-4 text-lg text-charcoal/80">
              AI consulting for oil and gas and manufacturing should follow a clear sequence. Here is how we work.
            </p>
            <div className="mt-10 space-y-6">
              <article className="surface-card p-8">
                <h3 className="text-2xl font-semibold text-navy">Step 1: AI Opportunity Discovery Audit</h3>
                <p className="mt-4 text-charcoal/80">
                  A fixed-price, two-to-four week engagement. We interview your team at every level, assess your current technology stack, and score your AI readiness across five pillars: data quality, process clarity, technology maturity, organizational readiness, and strategic alignment. You receive a written report and a prioritized roadmap.
                </p>
              </article>
              <article className="surface-card p-8">
                <h3 className="text-2xl font-semibold text-navy">Step 2: Prioritized Implementation</h3>
                <p className="mt-4 text-charcoal/80">
                  We take the highest-value opportunities from your audit and build them. This may be a workflow automation, a predictive maintenance model, a custom AI worker, or an LLM-powered document processing system. We select the right tools for your situation, not our preferred stack.
                </p>
              </article>
              <article className="surface-card p-8">
                <h3 className="text-2xl font-semibold text-navy">Step 3: Measure and Iterate</h3>
                <p className="mt-4 text-charcoal/80">
                  Every implementation is tied to a measurable outcome defined before we start. We track results, refine the system, and produce a training and handoff package so your team can operate it independently.
                </p>
              </article>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-coolgray/60">
            <Image
              src="/images/Home page process section.webp"
              alt="Clean flat-lay style diagram on a dark navy background showing three connected steps labeled Audit, Build, Measure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell max-w-5xl">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">AI Consulting Services Overview</h2>
          <p className="mt-4 text-lg text-charcoal/80">
            BitDepth delivers AI consulting services built around five core offerings. Each one can be engaged independently or as part of a full AI implementation roadmap.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {serviceOverview.map((item) => (
              <div key={item} className="surface-card p-6 text-charcoal/85">
                {item}
              </div>
            ))}
          </div>
          <Link href="/services" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell max-w-5xl">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">Industries We Serve</h2>
          <p className="mt-4 text-lg text-charcoal/80">
            Our AI consulting practice is built around two sectors where the data is rich, the operational stakes are high, and the mid-market is underserved.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <article className="surface-card p-8">
              <h3 className="text-2xl font-semibold text-navy">Oil and Gas</h3>
              <p className="mt-4 text-charcoal/80">
                We work with upstream, midstream, and downstream oil and gas companies on predictive maintenance, reservoir data modeling, pipeline integrity monitoring, production optimization, and generative AI for document and regulatory processing.
              </p>
              <Link href="/industries/oil-and-gas" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                Oil and Gas AI Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
            <article className="surface-card p-8">
              <h3 className="text-2xl font-semibold text-navy">Manufacturing</h3>
              <p className="mt-4 text-charcoal/80">
                We work with manufacturers on Industry 4.0 implementation, computer vision quality control, AI-driven predictive maintenance, supply chain optimization, and intelligent process automation.
              </p>
              <Link href="/industries/manufacturing" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                Manufacturing AI Solutions <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr,0.95fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-navy md:text-4xl">Why Canadian Mid-Market Businesses Choose BitDepth</h2>
            <div className="mt-8 space-y-6 text-lg leading-8 text-charcoal/82">
              <p>
                The global AI consulting market is projected to reach $116 billion by 2035. The fastest-growing segment is the small and mid-market business sector, growing at 25.7 percent annually. Yet most AI consulting capacity is locked behind enterprise minimums that start at $50,000 and run into the hundreds of thousands.
              </p>
              <p>
                BitDepth was built specifically for Canadian businesses with $2M to $50M in revenue that need enterprise-grade AI thinking at a price point that reflects their actual scale.
              </p>
            </div>
            <ul className="mt-8 space-y-3 text-charcoal/82">
              <li>Minimum engagement: $5,000</li>
              <li>No software commissions. No vendor relationships.</li>
              <li>Discovery before every dollar of implementation</li>
              <li>Western Canada focus: BC, Alberta, and expanding</li>
              <li>PIPEDA and PIPA-compliant data handling built into every engagement</li>
            </ul>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/Home page BC Canada section.webp"
              alt="Wide-angle photograph of the British Columbia interior landscape at golden hour near Kamloops"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell max-w-5xl">
          <h2 className="text-3xl font-bold text-navy md:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-charcoal/80">
            Placeholder cards below. Replace with real testimonials when available.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article key={testimonial.source} className="surface-card h-full p-8">
                <p className="text-lg text-charcoal/85">&apos;{testimonial.quote}&apos;</p>
                <p className="mt-6 border-t border-coolgray pt-6 text-sm font-semibold text-navy">- {testimonial.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white">
        <div className="container-shell rounded-[2rem] border border-white/10 bg-navy px-8 py-10 md:px-12 md:py-14">
          <h2 className="text-3xl font-bold md:text-4xl">Is Your Business Ready for AI?</h2>
          <p className="mt-4 max-w-3xl text-lg text-white/80">
            Find out in under two minutes. Take our free AI Readiness Assessment and get a score across five operational pillars. No email required to start.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/ai-readiness-assessment" className="btn-secondary border-white/20 bg-transparent text-white hover:border-cyan hover:text-cyan">
              Take the Free AI Readiness Assessment
            </Link>
            <Link href="/contact" className="btn-primary">
              Book Your AI Opportunity Audit
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
