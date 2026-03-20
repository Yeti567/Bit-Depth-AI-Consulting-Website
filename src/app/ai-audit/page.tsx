import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Audit Services & AI Strategy Consulting | BitDepth AI',
  description:
    'AI consulting firm specializing in AI audits, strategy, and implementation. We deliver predictive analytics, automation, and AI solutions for real business operations.',
  alternates: {
    canonical: '/ai-audit'
  },
  openGraph: {
    title: 'AI Audit Services & AI Strategy Consulting | BitDepth AI',
    description:
      'AI consulting firm specializing in AI audits, strategy, and implementation. We deliver predictive analytics, automation, and AI solutions for real business operations.',
    url: '/ai-audit',
    type: 'website',
    images: [
      {
        url: '/images/Engineers analyzing system data in control room revised.webp',
        width: 1200,
        height: 630,
        alt: 'Engineers reviewing AI audit insights on control room displays'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Audit Services & AI Strategy Consulting | BitDepth AI',
    description:
      'AI consulting firm specializing in AI audits, strategy, and implementation for industrial operators.',
    images: ['/images/Engineers analyzing system data in control room revised.webp']
  }
};

const processSteps = [
  {
    title: 'AI Audit & Discovery',
    text: 'We analyze your operations, workflows, and data systems to identify where AI can deliver measurable impact.',
    keywords: 'AI audit services · data analytics consulting · business process analysis'
  },
  {
    title: 'AI Strategy & Roadmap',
    text: 'We build a clear AI strategy aligned with your business goals, including prioritized opportunities and implementation plans.',
    keywords: 'AI strategy consulting · digital transformation strategy · enterprise AI solutions'
  },
  {
    title: 'Solution Design & Architecture',
    text: 'We design AI systems tailored to your environment, integrating with your existing tools and infrastructure.',
    keywords: 'AI implementation consulting · AI integration services · machine learning consulting'
  },
  {
    title: 'AI Implementation & Deployment',
    text: 'We build and deploy AI solutions including predictive maintenance, automation systems, and analytics platforms.',
    keywords: 'predictive analytics consulting · AI process automation consulting · enterprise AI solutions'
  },
  {
    title: 'Optimization & Continuous Improvement',
    text: 'We monitor performance and continuously refine models to improve accuracy, efficiency, and ROI.',
    keywords: 'data analytics consulting · business intelligence consulting · AI optimization'
  }
];

const overviewPoints = [
  'AI consulting firm with audit-first methodology',
  'AI strategy consulting aligned to operations',
  'Digital transformation consultant with real delivery muscle',
  'AI audit services that precede every implementation'
];

export default function AIAuditPage() {
  return (
    <PageShell>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="hero-particle left-[9%] top-[18%] h-2 w-2" />
        <div className="hero-particle left-[22%] top-[68%] h-2.5 w-2.5" style={{ animationDelay: '1.2s' }} />
        <div className="hero-particle right-[12%] top-[16%] h-2 w-2" style={{ animationDelay: '2s' }} />
        <div className="hero-particle right-[26%] top-[57%] h-3 w-3" style={{ animationDelay: '3.1s' }} />
        <div className="container-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr,1.05fr] lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">AI Audit & Implementation</p>
            <h1 className="mt-5 max-w-3xl text-[2.3rem] font-extrabold leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-[60px]">
              AI Audit & Implementation Process
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              We don’t start with software; we start with your business. Our AI consulting process identifies real opportunities, then designs and implements solutions that deliver measurable ROI.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book an AI Audit
              </Link>
              <Link href="/contact" className="btn-secondary min-h-12 text-white">
                Speak With a Consultant
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[580px]">
            <Image
              src="/images/Engineers analyzing system data in control room revised.webp"
              alt="AI consultants reviewing audit data and operational dashboards"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/65 via-navy/20 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0E1728] py-12 text-white md:py-20">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <p className="text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Most AI consulting firms jump straight into tools. We don’t.
            </p>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              Our process begins with a structured AI audit to uncover inefficiencies, data gaps, and automation opportunities before recommending any solution. We operate as an AI consulting firm, AI strategy consulting partner, and digital transformation consultant that leads with AI audit services instead of vendor lock-in.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr,1fr] lg:items-center lg:gap-12">
          <ScrollReveal index={1} className="relative order-first min-h-[240px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image src="/images/Industrial control room with strategic visuals revised.webp" alt="Industrial control room overview image" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
          <ScrollReveal>
            <p className="eyebrow">Our philosophy</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Audit-first, Implementation-ready
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              Every engagement is grounded in a rigorous analysis of how your business actually operates. Once we identify the highest-impact opportunities, we move into strategy, design, and implementation without losing sight of ROI.
            </p>
            <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2">
              {overviewPoints.map((item) => (
                <div key={item} className="rounded-2xl border border-cyan/15 bg-white/5 p-4 text-sm text-white sm:text-base">
                  {item}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-12 md:py-24">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Our process</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
              Step-by-step AI audit & implementation process
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal/78 sm:mt-5 sm:text-lg sm:leading-8">
              Each stage preserves the same rigor: clarify the business objective, align AI to real operations, and implement systems that can be adopted by your team.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} className="surface-card h-full rounded-[1.5rem] border border-black/5 bg-white p-5 text-left sm:p-6" index={index}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/45">Step {index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-navy sm:text-2xl">{step.title}</h3>
                <p className="mt-3 text-charcoal/78">{step.text}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-charcoal/55">{step.keywords}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy-soft py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">Why audit-first works</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Why this approach works</h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              AI only delivers value when it aligns with real operations. Our audit-first approach ensures:
            </p>
            <ul className="mt-6 space-y-3 text-white/75">
              <li>No wasted investment</li>
              <li>Faster ROI</li>
              <li>Solutions that actually get used</li>
            </ul>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[240px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image src="/images/Industrial nightscape with digital flow revised.webp" alt="Industrial nightscape with AI data overlays" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0">
          <Image src="/images/Industrial glow in the dark revised.webp" alt="Industrial glow image for CTA" fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.88),rgba(11,31,59,0.82),rgba(27,36,52,0.86))]" />
        </div>
        <div className="container-shell">
          <ScrollReveal className="relative rounded-[1.5rem] border border-amber/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.02))] px-5 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:px-8 sm:py-10 md:rounded-[2rem] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Start with clarity</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Start With an AI Audit</h2>
            <p className="mt-4 max-w-3xl text-base text-white/72 sm:mt-5 sm:text-lg">
              Discover where AI can drive measurable results in your business.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.32)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book Your AI Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
