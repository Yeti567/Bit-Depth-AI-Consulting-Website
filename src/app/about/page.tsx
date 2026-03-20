import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'About BitDepth AI Consulting | Industrial AI Consulting Firm',
  description:
    'Learn how BitDepth AI Consulting combines AI strategy consulting, machine learning consulting, and AI implementation services to help oil & gas and manufacturing leaders modernize their operations.',
  keywords: [
    'industrial AI consulting firm',
    'AI consultant',
    'machine learning consulting',
    'AI strategy consulting',
    'digital transformation consulting',
    'predictive maintenance AI'
  ],
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About BitDepth AI Consulting | Practical AI Consulting for Industry',
    description:
      'Discover how BitDepth AI Consulting helps industrial businesses build measurable AI solutions from data foundations to deployment.',
    url: '/about',
    type: 'website',
    images: [
      {
        url: '/images/about-hero.webp',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting industrial hero image'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BitDepth AI Consulting | Practical AI Consulting for Industry',
    description: 'Learn about our founder-led AI consulting practice built for oil & gas and manufacturing operations.',
    images: ['/images/about-hero.webp']
  }
};

const capabilityItems = [
  'AI Audit & Strategy',
  'Data Engineering & Pipelines',
  'Machine Learning Implementation',
  'Agentic Workflows & Automation',
  'AI Integration & Deployment'
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="container-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">About BitDepth</p>
            <h1 className="mt-5 max-w-3xl text-[2.4rem] font-extrabold leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-[62px]">
              About BitDepth AI Consulting
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 sm:mt-6 sm:text-lg sm:leading-8">
              Practical AI consulting built for real business operations, not theory. We help industrial companies design, implement, and scale AI solutions that deliver measurable results.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[560px]">
            <Image src="/images/about-hero.webp" alt="Industrial about hero" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/10 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr,1fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">Founder story</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Built From Real-World Experience</h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              My name is Blake Cowan, founder of BitDepth AI Consulting Ltd. I’ve been working in AI consulting since 2019, helping businesses understand how to apply AI in real operational environments. In 2026, I made the decision to build BitDepth into a full-time consulting firm focused on delivering practical, results-driven AI solutions.
            </p>
            <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Through years of working with businesses, one thing became clear: most AI projects fail because the data isn’t ready. That insight became the foundation of everything we do.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[240px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image src="/images/about-founder.webp" alt="BitDepth founder portrait" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow text-charcoal/60">Core philosophy</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">AI Starts With Data, Not Tools</h2>
            <p className="mt-4 text-base leading-7 text-charcoal/78 sm:mt-5 sm:text-lg sm:leading-8">
              Reliable, clean data is the backbone of every successful AI system.
            </p>
            <ul className="mt-6 space-y-3 text-charcoal/78">
              <li>• Data collection and integration</li>
              <li>• Data cleaning and normalization</li>
              <li>• Structuring data for machine learning systems</li>
              <li>• Building scalable data pipelines</li>
            </ul>
            <p className="mt-6 text-base leading-7 text-charcoal/78 sm:text-lg sm:leading-8">Without this foundation, AI systems fail to deliver value.</p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.2)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[500px]">
            <Image src="/images/about-data.webp" alt="Data pipelines and AI visualization" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/70 via-transparent to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy-soft py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">What makes us different</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Our Approach Is Different</h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              Most AI consulting firms start by selling tools. We don’t. We begin every engagement with an AI audit to identify where automation makes sense, what data is available (and what’s missing), and which systems will deliver the highest ROI.
            </p>
            <p className="mt-4 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              This ensures no wasted investment, faster results, and systems that actually get used.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="rounded-[1.5rem] border border-white/12 bg-white/[0.04] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Audit-first lens</p>
            <ul className="mt-4 space-y-3 text-white/78">
              <li>• Identify the highest-impact opportunities before implementation.</li>
              <li>• Understand your data reality and integration constraints.</li>
              <li>• Recommend solutions only after evidence-based analysis.</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-12 md:py-24">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow text-charcoal/60">Capabilities</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">What We Do</h2>
            <p className="mt-4 text-base leading-7 text-charcoal/78 sm:mt-5 sm:text-lg sm:leading-8">
              We specialize in retrieving, cleaning, structuring, and activating data, then building AI systems and agentic workflows on top of that foundation.
            </p>
          </ScrollReveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityItems.map((item) => (
              <ScrollReveal key={item} className="rounded-2xl border border-black/5 bg-white p-5 text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                <p className="text-xl font-semibold text-navy">{item}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">Canadian presence</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Built in Canada, Serving Industry</h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              BitDepth AI Consulting is a Canadian-based firm focused on helping businesses across oil &amp; gas, manufacturing, and industrial sectors adopt AI in a practical and effective way. We understand the realities of these industries, and we build solutions that work within them.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image src="/images/about-cta.webp" alt="Canadian industrial presence" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0">
          <Image src="/images/about-cta.webp" alt="About page CTA backdrop" fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.88),rgba(11,31,59,0.82),rgba(27,36,52,0.86))]" />
        </div>
        <div className="container-shell">
          <ScrollReveal className="relative rounded-[1.5rem] border border-amber/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.02))] px-5 py-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:px-8 sm:py-10 md:rounded-[2rem] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Start with an audit</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">Start With an AI Audit</h2>
            <p className="mt-4 max-w-3xl text-base text-white/72 sm:mt-5 sm:text-lg">
              Before you automate anything, understand where AI will actually deliver value. Let’s get your business the information it needs to succeed.
            </p>
            <div className="mt-6 space-y-2 text-white/80">
              <p>Phone: <Link href="tel:7808325158" className="text-white hover:text-amber">780-832-5158</Link></p>
              <p>Email: <Link href="mailto:blake@bitdepthaiconsulting.com" className="text-white hover:text-amber">blake@bitdepthaiconsulting.com</Link></p>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.32)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book Your AI Assessment
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
