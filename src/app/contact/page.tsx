import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Start Your AI Assessment | BitDepth AI Consulting',
  description:
    'Contact BitDepth AI Consulting to start your AI assessment. We specialize in AI strategy consulting, implementation services, and industrial AI solutions that deliver measurable ROI.',
  keywords: [
    'AI strategy consulting',
    'AI implementation services',
    'AI integration services',
    'machine learning consulting',
    'digital transformation consultant',
    'enterprise AI solutions',
    'AI audit services',
    'predictive analytics consulting'
  ],
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Start Your AI Assessment | BitDepth AI Consulting',
    description:
      'Tell us about your operations and we will identify where AI can deliver measurable business impact.',
    url: '/contact',
    type: 'website',
    images: [
      {
        url: '/images/contact-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial contact hero image for BitDepth AI Consulting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start Your AI Assessment | BitDepth AI Consulting',
    description: 'Book an AI strategy call with BitDepth AI Consulting to uncover high-impact opportunities.',
    images: ['/images/contact-hero.webp']
  }
};

const nextSteps = [
  {
    title: 'Initial Review',
    description: 'We review your submission and identify potential opportunities before the call.'
  },
  {
    title: 'Strategy Call',
    description: 'We discuss your operations, systems, and goals to understand constraints.'
  },
  {
    title: 'AI Opportunity Breakdown',
    description: 'We outline where AI, automation, or analytics can create measurable impact.'
  },
  {
    title: 'Recommended Next Steps',
    description: 'You decide how to move forward — no pressure, no locked-in solutions.'
  }
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="container-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[1.02fr,1fr] lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">Contact BitDepth</p>
            <h1 className="mt-5 max-w-3xl text-[2.35rem] font-extrabold leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-[58px]">
              Start Your AI Assessment
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 sm:mt-6 sm:text-lg sm:leading-8">
              Tell us about your operations, and we’ll identify where AI can deliver real business impact.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book a Strategy Call
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[580px]">
            <Image src="/images/contact-hero.webp" alt="Industrial setting for AI contact page" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/10 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0E1728] py-12 text-white md:py-20">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <p className="eyebrow">Qualification</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Let’s Understand Your Business First</h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              We don’t jump straight into tools or software. Every engagement begins with a structured AI audit to identify the highest-impact opportunities in your operations. Before we connect, we ask a few key questions to ensure we can deliver value.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section id="contact-form" className="section-dark py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr,1fr] lg:items-center lg:gap-12">
          <ScrollReveal index={1} className="relative order-first min-h-[240px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[560px]">
            <Image src="/images/contact-meeting.webp" alt="AI consultants meeting with industrial leaders" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
          <ScrollReveal>
            <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.04] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Tell us about your operations</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Start your AI assessment</h3>
              <form className="mt-6 grid gap-5">
                <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" type="text" name="fullName" placeholder="Full Name" />
                <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" type="text" name="company" placeholder="Company Name" />
                <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" type="email" name="email" placeholder="Email" />
                <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" type="tel" name="phone" placeholder="Phone (optional)" />
                <select className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" name="industry" defaultValue="">
                  <option value="" disabled>
                    Industry
                  </option>
                  <option value="oil-gas">Oil &amp; Gas</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="construction">Construction</option>
                  <option value="logistics">Logistics</option>
                  <option value="other">Other</option>
                </select>
                <select className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" name="companySize" defaultValue="">
                  <option value="" disabled>
                    Company Size
                  </option>
                  <option value="1-10">1–10</option>
                  <option value="10-50">10–50</option>
                  <option value="50-250">50–250</option>
                  <option value="250-plus">250+</option>
                </select>
                <select className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" name="primaryInterest" defaultValue="">
                  <option value="" disabled>
                    Primary Interest
                  </option>
                  <option value="ai-strategy">AI Strategy Consulting</option>
                  <option value="predictive-maintenance">Predictive Maintenance</option>
                  <option value="automation">Automation / Process Optimization</option>
                  <option value="computer-vision">Computer Vision / Quality Control</option>
                  <option value="data-analytics">Data &amp; Analytics</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
                <textarea
                  className="min-h-36 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan"
                  name="challenge"
                  placeholder="What operational challenge are you trying to solve?"
                />
                <button type="submit" className="btn-primary w-full sm:w-fit">
                  Request AI Assessment
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow text-charcoal/60">Process</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">What Happens Next</h2>
            <p className="mt-4 text-base leading-7 text-charcoal/78 sm:mt-5 sm:text-lg sm:leading-8">
              We keep the process structured so you know exactly what to expect.
            </p>
            <div className="mt-7 grid gap-4 sm:mt-8">
              {nextSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-black/5 bg-white p-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/50">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold text-navy">{step.title}</h3>
                  <p className="mt-2 text-charcoal/75">{step.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.15)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image src="/images/contact-cta.webp" alt="Industrial contact process" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/70 via-transparent to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy-soft py-12 md:py-24">
        <div className="container-shell">
          <ScrollReveal className="max-w-4xl">
            <p className="eyebrow">Built for industrial businesses</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Built for Industrial Businesses</h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              We specialize in AI consulting for oil &amp; gas and manufacturing companies. Our focus is on practical, high-impact solutions — not experiments.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0">
          <Image src="/images/contact-cta.webp" alt="Final CTA backdrop" fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.88),rgba(11,31,59,0.82),rgba(27,36,52,0.86))]" />
        </div>
        <div className="container-shell">
          <ScrollReveal className="relative rounded-[1.5rem] border border-amber/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.02))] px-5 py-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:px-8 sm:py-10 md:rounded-[2rem] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Ready?</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
            <p className="mt-4 max-w-3xl text-base text-white/72 sm:mt-5 sm:text-lg">
              Whether you're exploring AI for the first time or scaling existing systems, we help you move forward with clarity and confidence.
            </p>
            <div className="mt-8">
              <Link href="#contact-form" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.32)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book Your AI Strategy Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
