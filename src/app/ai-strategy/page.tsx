import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Strategy & Implementation Services | BitDepth AI Consulting',
  description:
    'AI strategy consulting and AI implementation services for oil & gas and manufacturing. BitDepth delivers industrial AI solutions, enterprise AI integration, and measurable ROI.',
  keywords: [
    'AI strategy consulting',
    'AI implementation services',
    'AI integration services',
    'machine learning consulting',
    'digital transformation consultant',
    'enterprise AI solutions',
    'AI consulting firm',
    'data analytics consulting',
    'industrial AI solutions',
    'AI audit services',
    'AI roadmap consulting',
    'business transformation consultant',
    'predictive analytics consulting',
    'generative AI consulting',
    'AI process automation consulting'
  ],
  alternates: {
    canonical: '/ai-strategy'
  },
  openGraph: {
    title: 'AI Strategy & Implementation Services | BitDepth AI Consulting',
    description:
      'BitDepth AI Consulting delivers AI strategy, implementation, and integration services for industrial operations with measurable business outcomes.',
    url: '/ai-strategy',
    type: 'website',
    images: [
      {
        url: '/images/strategy-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial AI strategy and implementation composite image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Strategy & Implementation Services | BitDepth AI Consulting',
    description:
      'AI strategy consulting and AI implementation services tailored to oil & gas and manufacturing companies.',
    images: ['/images/strategy-hero.webp']
  }
};

const approachSteps = [
  {
    title: 'AI Audit & Discovery',
    description:
      'We analyze your workflows, systems, and data to identify where AI can deliver measurable impact.',
    detail: 'AI audit services · data readiness assessment · operational diagnostics'
  },
  {
    title: 'Opportunity Mapping',
    description:
      'We prioritize use cases such as predictive maintenance, automation, and analytics based on ROI.',
    detail: 'AI roadmap consulting · predictive analytics consulting · automation prioritization'
  },
  {
    title: 'Solution Design',
    description:
      'We define architecture, tools, and implementation strategy tailored to your business.',
    detail: 'AI integration services · enterprise AI solutions · digital transformation consultant'
  },
  {
    title: 'Implementation & Integration',
    description:
      'We deploy AI solutions and integrate them into your existing operations.',
    detail: 'AI implementation services · machine learning consulting · AI process automation consulting'
  },
  {
    title: 'Optimization & Scaling',
    description:
      'We monitor performance, refine models, and scale successful systems across the organization.',
    detail: 'Data analytics consulting · generative AI consulting · continuous improvement'
  }
];

const capabilities = [
  {
    title: 'AI Strategy Consulting',
    description: 'Define a clear roadmap aligned with business objectives and operational reality.'
  },
  {
    title: 'Machine Learning Consulting',
    description: 'Develop models for prediction, optimization, automation, and decision support.'
  },
  {
    title: 'AI Implementation Services',
    description: 'Deploy production-ready AI systems that integrate with your infrastructure.'
  },
  {
    title: 'Data Analytics Consulting',
    description: 'Turn raw data into actionable insights, dashboards, and forecasting.'
  },
  {
    title: 'Industrial AI Solutions',
    description: 'Apply AI in real operations across oil & gas and manufacturing environments.'
  },
  {
    title: 'Generative AI Consulting',
    description: 'Implement modern AI copilots for workflows, reporting, and knowledge systems.'
  }
];

const industryFocus = [
  {
    title: 'Oil & Gas',
    description:
      'We design AI solutions for upstream, midstream, and downstream operations where reliability and safety matter.',
    capabilities: ['Predictive maintenance', 'Pipeline monitoring', 'Production optimization']
  },
  {
    title: 'Manufacturing',
    description:
      'We modernize factories with smart systems, quality inspection, and automated workflows.',
    capabilities: ['Smart factory systems', 'Quality inspection', 'Process automation']
  }
];

const whyPoints = [
  'We start with an AI audit, not a product pitch.',
  'We are vendor-neutral, so you choose the solution.',
  'We focus on measurable ROI and adoption.',
  'We understand industrial environments and constraints.'
];

export default function AIStrategyPage() {
  return (
    <PageShell>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="container-shell grid gap-9 py-11 sm:py-16 lg:grid-cols-[1fr,1.05fr] lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">AI Strategy & Implementation</p>
            <h1 className="mt-5 max-w-3xl text-[2.2rem] font-extrabold leading-[1.08] text-white sm:mt-6 sm:text-5xl md:text-[60px]">
              AI Strategy & Implementation for Industrial Businesses
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8 md:text-xl">
              We help oil &amp; gas and manufacturing companies design, validate, and deploy AI solutions that deliver real operational results, not experiments.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/ai-audit" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Start Your AI Assessment
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[240px] overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[340px] sm:rounded-[2rem] lg:min-h-[600px]">
            <Image src="/images/strategy-hero.webp" alt="Industrial AI strategy composite" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/10 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0E1728] py-12 text-white md:py-20">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <p className="eyebrow">The problem</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Most AI Projects Fail Before They Start
            </h2>
            <p className="mt-3 text-base leading-7 text-white/72 sm:mt-4 sm:text-lg sm:leading-8">
              Many companies jump straight into tools, platforms, or software without understanding where AI actually fits in their business.
            </p>
            <p className="mt-3 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">We take a different approach.</p>
            <p className="mt-3 text-base leading-7 text-white/72 sm:mt-4 sm:text-lg sm:leading-8">
              Before recommending any technology, we perform a structured AI audit to uncover operational bottlenecks, data readiness, high-ROI automation opportunities, and integration constraints. This ensures every AI initiative is grounded in business value, not hype.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark py-10 md:py-18">
        <div className="container-shell grid gap-8 sm:gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              AI Strategy Built Around Your Operations
            </h2>
            <p className="mt-3 text-base leading-7 text-white/72 sm:mt-4 sm:text-lg sm:leading-8">
              Our AI consulting firm combines AI strategy consulting, AI implementation services, and AI integration services to deliver enterprise AI solutions that actually fit how you work.
            </p>
            <div className="mt-6 space-y-3 sm:mt-7">
              {approachSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-cyan/20 bg-white/95 p-5 text-navy shadow-[0_18px_30px_rgba(0,0,0,0.18)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan/80">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold sm:text-2xl text-navy">{step.title}</h3>
                  <p className="mt-2 text-charcoal/80">{step.description}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/60">{step.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[600px]">
            <Image src="/images/strategy-implementation.webp" alt="AI implementation visuals" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-12 md:py-24">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow text-charcoal/60">Capabilities</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
              What We Deliver
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal/78 sm:mt-5 sm:text-lg sm:leading-8">
              From AI strategy consulting to data analytics consulting, we deliver industrial AI solutions that support your transformation roadmap.
            </p>
          </ScrollReveal>
          <div className="mt-9 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <ScrollReveal key={item.title} className="surface-card h-full rounded-[1.5rem] border border-black/5 bg-white p-5 text-left sm:p-6">
                <h3 className="text-xl font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-charcoal/75">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-12 md:py-24">
        <div className="container-shell grid gap-8 sm:gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">Industry focus</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Built for Industrial Environments
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              We specialize in applying AI in complex, asset-heavy industries where reliability, safety, and performance matter.
            </p>
            <div className="mt-7 grid gap-5 sm:mt-8">
              {industryFocus.map((industry) => (
                <div key={industry.title} className="rounded-2xl border border-cyan/20 bg-white/95 p-5 text-navy shadow-[0_18px_30px_rgba(0,0,0,0.18)]">
                  <h3 className="text-xl font-semibold text-navy">{industry.title}</h3>
                  <p className="mt-2 text-charcoal/78">{industry.description}</p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-sm text-charcoal/75">
                    {industry.capabilities.map((capability) => (
                      <li key={capability} className="rounded-full border border-cyan/40 px-3 py-1 text-cyan/80">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image src="/images/strategy-mapping.webp" alt="Industry AI mapping visuals" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy-soft py-12 md:py-24">
        <div className="container-shell grid gap-8 sm:gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">Why BitDepth</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Why Companies Choose Us</h2>
            <div className="mt-6 space-y-4 text-white/78">
              {whyPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-cyan/15 bg-white/5 p-4 text-base leading-7">
                  {point}
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image src="/images/strategy-analytics.webp" alt="AI analytics visualization" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0">
          <Image src="/images/strategy-cta.webp" alt="CTA industrial backdrop" fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.88),rgba(11,31,59,0.82),rgba(27,36,52,0.86))]" />
        </div>
        <div className="container-shell">
          <ScrollReveal className="relative rounded-[1.5rem] border border-amber/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.02))] px-5 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:px-8 sm:py-10 md:rounded-[2rem] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Next step</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Ready to Build Your AI Roadmap?</h2>
            <p className="mt-4 max-w-3xl text-base text-white/72 sm:mt-5 sm:text-lg">
              Whether you're exploring AI for the first time or scaling existing systems, we help you move forward with clarity and confidence.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.32)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book an AI Strategy Session
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
