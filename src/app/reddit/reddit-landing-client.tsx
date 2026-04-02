'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  AlertTriangle,
  Building2,
  CheckCircle2,
  ChevronDown,
  Factory,
  Gauge,
  HardHat,
  MapPin,
  Quote,
  ShieldCheck,
  Wrench
} from 'lucide-react';
import { FAQSchemaScript } from '@/components/ui/faq-schema-script';

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/blake-bitdepthaiconsulting/30min';

const painCards = [
  {
    title: 'Data trapped in silos',
    description: 'Critical information is locked in spreadsheets and disconnected systems, so nobody sees the full picture.',
    icon: Building2
  },
  {
    title: 'Hours lost to manual work',
    description: 'Teams are copy-pasting between tools and rebuilding reports instead of improving operations.',
    icon: Wrench
  },
  {
    title: 'No operational visibility',
    description: 'Decisions are made from lagging reports and gut feel, not live operational data.',
    icon: Gauge
  },
  {
    title: 'AI pilots that go nowhere',
    description: 'Tools get tested, nothing sticks, and there is no foundation for measurable ROI.',
    icon: AlertTriangle
  }
];

const processSteps = [
  {
    title: 'Discovery Audit',
    description:
      'Map systems, workflows, and data. Interview team members from leadership to frontline operations.',
    tags: ['Workflow mapping', 'Data assessment', 'Stakeholder interviews']
  },
  {
    title: 'Identify Opportunities',
    description:
      'Build an AI Opportunity Matrix that separates quick wins from long-term plays with projected ROI.',
    tags: ['Opportunity scoring', 'ROI modeling', 'Prioritization']
  },
  {
    title: 'Recommend Solutions',
    description:
      'Present best-fit options without pushing a predetermined vendor, then define a clear 90-day roadmap.',
    tags: ['Vendor-neutral options', 'Roadmap', 'Cost and metrics']
  },
  {
    title: 'Build & Implement',
    description:
      'Deploy practical automation, analytics, and AI systems, then train your team for day-to-day execution.',
    tags: ['Implementation', 'Team enablement', 'Performance tracking']
  }
];

const testimonials = [
  {
    quote: '[Client testimonial about time savings and ROI — will be replaced]',
    author: 'Operations Leader',
    role: 'Industrial Services'
  },
  {
    quote: '[Client testimonial about clarity and practical approach — will be replaced]',
    author: 'General Manager',
    role: 'Mid-Market Manufacturing'
  }
];

const outcomes = [
  'Full operational visibility',
  'Hours of manual work eliminated',
  'Connected systems and clean data',
  'Measurable ROI from day one',
  'A real foundation where AI actually works'
];

const industries = [
  { label: 'Oil & Gas', icon: Wrench },
  { label: 'Manufacturing', icon: Factory },
  { label: 'Construction', icon: HardHat },
  { label: 'Field Services', icon: MapPin }
];

const faqs = [
  {
    question: 'What happens on the discovery call?',
    answer:
      "It's a 30-minute conversation where we learn about your operations, identify potential problem areas, and determine if there is a fit. No pitch, no pressure. You leave with clarity either way."
  },
  {
    question: 'Do I actually need AI?',
    answer:
      "Not always. Sometimes fixing process and data flow creates immediate value before AI is even added. We'll tell you honestly."
  },
  {
    question: 'What if our data is messy?',
    answer:
      "That's the most common starting point. We identify where data quality and structure are blocking decisions, then recommend practical fixes before implementation."
  },
  {
    question: 'How long does this take?',
    answer:
      'Most discovery engagements are completed in weeks, not months. You leave with a prioritized roadmap and clear next steps.'
  },
  {
    question: 'Is this just for big companies?',
    answer:
      "No. We work specifically with small and mid-market businesses ($2M-$50M revenue). Our process is designed for companies that cannot afford to waste budget on the wrong AI project."
  },
  {
    question: 'How much does it cost?',
    answer:
      "Our Discovery Audit starts at $5,000. The first step is a free 30-minute call to see if there is a fit, with no commitment required."
  }
];

function CTAButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center rounded-lg bg-[#00B4D8] px-6 py-3 text-sm font-semibold text-[#060F1F] shadow-[0_0_0_rgba(0,180,216,0)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#00D4FF] hover:shadow-[0_0_24px_rgba(0,180,216,0.35)] sm:px-8 sm:text-base ${className}`.trim()}
    >
      Book Your Free Discovery Call &rarr;
    </a>
  );
}

function Divider() {
  return <div className="h-px w-full bg-[linear-gradient(90deg,transparent,rgba(0,180,216,0.2),transparent)]" aria-hidden />;
}

function SectionLabel({ children }: { children: string }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00B4D8]">{children}</p>;
}

export function RedditLandingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen scroll-smooth bg-[#060F1F] text-[#F5F7FA]">
      <FAQSchemaScript faqs={faqs} id="reddit-faq-schema" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#00B4D8]/20 bg-[#060F1F]/80 backdrop-blur-md">
        <div className="container-shell flex min-h-16 items-center justify-between gap-3 sm:min-h-20">
          <Link href="/" className="relative block h-8 w-[140px] sm:h-10 sm:w-[180px]" aria-label="BitDepth AI Consulting home">
            <Image
              src="/images/logo svg transparent.svg"
              alt="BitDepth AI Consulting logo"
              fill
              priority
              sizes="(max-width: 640px) 140px, 180px"
              className="object-contain object-left"
            />
          </Link>
          <CTAButton className="px-4 text-xs sm:px-6 sm:text-sm" />
        </div>
      </header>

      <main className="pt-20 sm:pt-24">
        <section className="relative overflow-hidden border-b border-[#00B4D8]/15 bg-[#060F1F] py-14 sm:py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,180,216,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,216,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(0,180,216,0.16),transparent_36%),radial-gradient(circle_at_78%_32%,rgba(0,180,216,0.08),transparent_40%)]" />
          <div className="container-shell relative grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#00B4D8]/35 bg-[#00B4D8]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#8FEFFF]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#00D4FF]" aria-hidden />
                Vendor-Neutral AI Consulting
              </div>
              <h1 className="mt-6 max-w-4xl text-[2.2rem] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-[60px]">
                Your business doesn&apos;t need more AI tools. It needs a system that works.
              </h1>
              <p className="mt-6 max-w-3xl font-[var(--font-barlow)] text-base leading-7 text-[#9CA3AF] sm:text-xl sm:leading-8">
                We diagnose the operational problems costing you time and money, then build the AI systems that actually
                fix them. No vendor lock-in. No wasted pilots.
              </p>
              <div className="mt-8">
                <CTAButton className="w-full sm:w-auto" />
              </div>
              <p className="mt-3 text-sm text-[#9CA3AF]">30 minutes · No cost · No commitment · Talk to a real consultant</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#A7F2FF]">
                <span className="rounded-full border border-[#00B4D8]/25 bg-[#00B4D8]/10 px-3 py-1">Limited monthly slots</span>
                <span className="rounded-full border border-[#00B4D8]/25 bg-[#00B4D8]/10 px-3 py-1">Canadian SMB focus</span>
                <span className="rounded-full border border-[#00B4D8]/25 bg-[#00B4D8]/10 px-3 py-1">Discovery Audit from $5,000</span>
              </div>
            </div>

            <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[#00B4D8]/25 bg-[#0B1F3B]/60 shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[420px] lg:min-h-[520px]">
              <Image
                src="/images/Industrial energy with digital precision landing.png"
                alt="Industrial team reviewing operations with digital overlays"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#060F1F]/70 via-[#060F1F]/25 to-transparent" />
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3B] py-14 sm:py-16 md:py-20">
          <div className="container-shell">
            <SectionLabel>SOUND FAMILIAR?</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
              The problems nobody talks about before selling you AI
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {painCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.title} className="rounded-2xl border border-[#4B5563]/50 bg-[rgba(31,41,51,0.5)] p-5 sm:p-6">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-red-400/40 bg-red-400/10 text-red-300">
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-2 font-[var(--font-barlow)] text-base leading-7 text-[#9CA3AF]">{card.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#060F1F] py-14 sm:py-16 md:py-20">
          <div className="container-shell">
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl border border-[#00B4D8]/25 bg-[rgba(31,41,51,0.5)] p-6">
                <p className="text-4xl font-extrabold text-[#00D4FF]">80%</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#9CA3AF]">of AI projects never reach production</p>
              </article>
              <article className="rounded-2xl border border-[#00B4D8]/25 bg-[rgba(31,41,51,0.5)] p-6">
                <p className="text-4xl font-extrabold text-[#00D4FF]">2×</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#9CA3AF]">budget overrun when data isn&apos;t ready</p>
              </article>
              <article className="rounded-2xl border border-[#00B4D8]/25 bg-[rgba(31,41,51,0.5)] p-6">
                <p className="text-4xl font-extrabold text-[#00D4FF]">90 days</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-[#9CA3AF]">from audit to measurable ROI with our process</p>
              </article>
            </div>

            <div className="mt-6 rounded-2xl border border-red-400/30 bg-red-400/5 p-6">
              <p className="border-l-4 border-red-400 pl-4 font-[var(--font-barlow)] text-base leading-7 text-[#D1D5DB] sm:text-lg">
                AI doesn&apos;t fix broken processes, it exposes them. Most companies try to layer AI on top of messy data.
                That is expensive guessing. We diagnose first, then build on a stable foundation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3B] py-12 sm:py-14">
          <div className="container-shell">
            <div className="mx-auto max-w-3xl rounded-2xl border border-[#00B4D8]/25 bg-[rgba(31,41,51,0.45)] px-6 py-8 text-center sm:px-10">
              <h2 className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">Ready to find out what&apos;s actually broken?</h2>
              <div className="mt-6">
                <CTAButton className="w-full sm:w-auto" />
              </div>
              <p className="mt-3 text-sm text-[#9CA3AF]">30 minutes · No cost · No commitment</p>
            </div>
          </div>
        </section>

        <Divider />

        <section className="bg-[#060F1F] py-14 sm:py-16 md:py-20">
          <div className="container-shell">
            <SectionLabel>HOW IT WORKS</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
              We don&apos;t start with tools. We start with your business.
            </h2>

            <div className="mt-10 space-y-5">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-2xl border border-[#4B5563]/45 bg-[rgba(31,41,51,0.5)] p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#00B4D8]/40 bg-[#00B4D8]/10 text-sm font-bold text-[#00D4FF]">
                      {index + 1}
                      {index < processSteps.length - 1 ? (
                        <span className="absolute left-1/2 top-full h-8 w-px -translate-x-1/2 bg-[#00B4D8]/40" aria-hidden />
                      ) : null}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      <p className="mt-2 font-[var(--font-barlow)] leading-7 text-[#9CA3AF]">{step.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {step.tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-[#00B4D8]/35 bg-[#00B4D8]/10 px-3 py-1 text-xs font-semibold text-[#A7F2FF]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3B] py-14 sm:py-16 md:py-20">
          <div className="container-shell">
            <SectionLabel>WHAT CLIENTS SAY</SectionLabel>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {testimonials.map((item) => (
                <article key={item.author} className="rounded-2xl border border-[#4B5563]/50 bg-[rgba(31,41,51,0.5)] p-6">
                  <Quote className="h-8 w-8 text-[#00B4D8]/60" aria-hidden />
                  <p className="mt-4 font-[var(--font-barlow)] text-lg italic leading-8 text-[#D1D5DB]">{item.quote}</p>
                  <p className="mt-5 text-sm font-semibold text-white">{item.author}</p>
                  <p className="text-sm text-[#9CA3AF]">{item.role}</p>
                </article>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#00B4D8]/30 bg-[#00B4D8]/10 px-4 py-3 text-sm font-semibold text-[#A7F2FF]">
                <ShieldCheck className="h-4 w-4" aria-hidden /> Vendor-Neutral
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#00B4D8]/30 bg-[#00B4D8]/10 px-4 py-3 text-sm font-semibold text-[#A7F2FF]">
                <MapPin className="h-4 w-4" aria-hidden /> Canadian-Owned
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#00B4D8]/30 bg-[#00B4D8]/10 px-4 py-3 text-sm font-semibold text-[#A7F2FF]">
                <Factory className="h-4 w-4" aria-hidden /> Industrial Focus
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-[#00B4D8]/30 bg-[#00B4D8]/10 px-4 py-3 text-sm font-semibold text-[#A7F2FF]">
                <Gauge className="h-4 w-4" aria-hidden /> 90-Day ROI
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#060F1F] py-14 sm:py-16 md:py-20">
          <div className="container-shell">
            <SectionLabel>WHAT CHANGES</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
              After working with us, your business has:
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outcomes.map((outcome) => (
                <article key={outcome} className="rounded-2xl border border-emerald-500/35 bg-emerald-500/5 p-5 sm:p-6">
                  <div className="inline-flex items-center gap-2 text-emerald-300">
                    <CheckCircle2 className="h-5 w-5" aria-hidden />
                    <h3 className="text-lg font-semibold text-white">{outcome}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0B1F3B] py-14 sm:py-16">
          <div className="container-shell text-center">
            <SectionLabel>INDUSTRIES WE SERVE</SectionLabel>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              {industries.map((industry) => {
                const Icon = industry.icon;
                return (
                  <div key={industry.label} className="inline-flex items-center gap-2 rounded-full border border-[#4B5563]/50 bg-[rgba(31,41,51,0.65)] px-4 py-2 text-sm font-semibold text-[#D1D5DB]">
                    <Icon className="h-4 w-4 text-[#00B4D8]" aria-hidden />
                    {industry.label}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#060F1F] py-14 sm:py-16 md:py-20">
          <div className="container-shell">
            <SectionLabel>QUESTIONS</SectionLabel>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">
              Before you book, here&apos;s what people ask
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const panelId = `reddit-faq-${index}`;
                return (
                  <article key={faq.question} className="rounded-2xl border border-[#4B5563]/50 bg-[rgba(31,41,51,0.5)] p-5 sm:p-6">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-start justify-between gap-4 text-left"
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <h3 className="text-lg font-semibold text-white sm:text-xl">{faq.question}</h3>
                      <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-[#00B4D8] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`.trim()} aria-hidden />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'mt-3 grid-rows-[1fr]' : 'grid-rows-[0fr]'}`.trim()}>
                      <div id={panelId} className="overflow-hidden">
                        <p className="font-[var(--font-barlow)] leading-7 text-[#9CA3AF]">{faq.answer}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0B1F3B] py-14 sm:py-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,180,216,0.26),transparent_55%)]" />
          <div className="container-shell relative">
            <div className="mx-auto max-w-4xl rounded-2xl border border-[#00B4D8]/30 bg-[rgba(6,15,31,0.65)] px-6 py-9 text-center sm:px-10 sm:py-12">
              <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">Stop guessing. Start with a diagnostic.</h2>
              <p className="mx-auto mt-5 max-w-3xl font-[var(--font-barlow)] text-base leading-7 text-[#9CA3AF] sm:text-lg">
                One 30-minute call. No cost. No obligation. Just clarity on where your business is losing time and
                money, and whether AI can fix it.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm font-semibold text-[#D1D5DB]">
                <span>✓ Free consultation</span>
                <span>✓ No vendor lock-in</span>
                <span>✓ Actionable next steps</span>
              </div>
              <div className="mt-8">
                <CTAButton className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#00B4D8]/20 bg-[#060F1F] py-8">
        <div className="container-shell flex flex-col gap-4 text-sm text-[#9CA3AF] md:flex-row md:items-center md:justify-between">
          <Link href="/" className="relative block h-8 w-[140px] sm:h-10 sm:w-[180px]" aria-label="BitDepth AI Consulting home">
            <Image
              src="/images/logo svg transparent.svg"
              alt="BitDepth AI Consulting logo"
              fill
              sizes="(max-width: 640px) 140px, 180px"
              className="object-contain object-left"
            />
          </Link>

          <div className="flex flex-col gap-2 md:items-end">
            <p>© 2026 BitDepth AI Consulting Ltd. Barriere, British Columbia, Canada</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="transition hover:text-[#00D4FF]">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="transition hover:text-[#00D4FF]">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
