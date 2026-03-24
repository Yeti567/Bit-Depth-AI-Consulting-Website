import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FAQSchemaScript } from '@/components/ui/faq-schema-script';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Discovery Call | BitDepth AI Consulting',
  description:
    'BitDepth AI Consulting helps operational businesses diagnose system issues before deploying AI. Book a discovery call.',
  alternates: {
    canonical: '/reddit'
  },
  openGraph: {
    title: 'Most companies don’t have an AI problem. They have a systems problem.',
    description:
      'Disconnected data and manual workflows are costly. Start with a diagnostic-first AI audit.',
    url: '/reddit',
    type: 'website',
    images: [
      {
        url: '/images/Industrial energy with digital precision landing.png',
        width: 1200,
        height: 630,
        alt: 'Business professional reviewing operations with digital system overlays'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Most companies don’t have an AI problem. They have a systems problem.',
    description: 'Book a discovery call to diagnose what is actually broken before building anything.',
    images: ['/images/Industrial energy with digital precision landing.png']
  }
};

const painPoints = [
  'Data scattered across multiple systems',
  'Teams copying and pasting between tools',
  'No clear view of operations',
  'Reports that take hours to build',
  'Decisions made without full information'
];

const processSteps = [
  {
    title: 'Discovery',
    description: 'We map your systems, workflows, and data.'
  },
  {
    title: 'Identify Problems',
    description: 'We find where time, money, and visibility are being lost.'
  },
  {
    title: 'Recommend Solutions',
    description: 'We present the best options — not a predetermined tool.'
  },
  {
    title: 'Implement',
    description: 'We build what actually moves the needle.'
  }
];


const outcomes = [
  'Reduce manual work',
  'Improve operational visibility',
  'Eliminate data silos',
  'Make faster, better decisions',
  'Create a foundation where AI actually works'
];

const industries = ['Oil & Gas', 'Construction', 'Manufacturing', 'Field Services'];

const faqs = [
  {
    question: 'Do I need AI?',
    answer:
      'Not always. First we diagnose your systems and workflows. Sometimes fixing process and data flow creates immediate value before AI is added.'
  },
  {
    question: 'What if my data is messy?',
    answer:
      'That is common. We identify where data quality and structure are blocking decisions, then recommend the practical fixes needed before implementation.'
  },
  {
    question: 'How long does this take?',
    answer:
      'Most discovery engagements are completed in weeks, not months. You leave with a clear map of priorities and next steps.'
  }
];

const primaryCtaHref = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/blake-bitdepthaiconsulting/30min';
const primaryCtaLabel = 'Book a Discovery Call';
const isExternalCta = primaryCtaHref.startsWith('http');

function PrimaryCTA({ className = '' }: { className?: string }) {
  if (isExternalCta) {
    return (
      <a
        href={primaryCtaHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,180,216,0.35)] transition hover:-translate-y-0.5 hover:bg-[#17C6E8] sm:px-8 sm:py-4 sm:text-base ${className}`.trim()}
      >
        {primaryCtaLabel}
      </a>
    );
  }

  return (
    <Link
      href={primaryCtaHref}
      className={`inline-flex min-h-12 items-center justify-center rounded-lg bg-cyan px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(0,180,216,0.35)] transition hover:-translate-y-0.5 hover:bg-[#17C6E8] sm:px-8 sm:py-4 sm:text-base ${className}`.trim()}
    >
      {primaryCtaLabel}
    </Link>
  );
}

function SectionWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`relative overflow-hidden py-14 md:py-24 ${className}`.trim()}>{children}</section>;
}

export default function RedditLandingPage() {
  return (
    <div className="min-h-screen bg-[#091830] text-white">
      <FAQSchemaScript faqs={faqs} id="reddit-faq-schema" />
      <header className="sticky top-0 z-40 border-b border-cyan/20 bg-[rgba(11,31,59,0.92)] backdrop-blur-lg">
        <div className="container-shell flex min-h-16 items-center justify-between gap-4 sm:min-h-20">
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
          <PrimaryCTA />
        </div>
      </header>

      <main>
        <SectionWrapper className="bg-[linear-gradient(145deg,#0B1F3B_0%,#0A2545_58%,#0C1D34_100%)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(0,180,216,0.18),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(0,180,216,0.12),transparent_34%)]" />
          <div className="container-shell relative grid gap-10 lg:grid-cols-[1fr,1.05fr] lg:items-center lg:gap-14">
            <ScrollReveal>
              <h1 className="max-w-3xl text-[2.3rem] font-extrabold leading-[1.05] text-white sm:text-5xl md:text-[62px]">
                Most companies don’t have an AI problem.
              </h1>
              <h2 className="mt-4 max-w-2xl text-2xl font-semibold text-cyan sm:text-3xl md:text-4xl">They have a systems problem.</h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/78 sm:text-lg sm:leading-8">
                Disconnected data, manual workflows, and poor visibility are costing your business time and money. Before anything gets built, you need to understand what’s actually broken.
              </p>
              <div className="mt-8">
                <PrimaryCTA />
              </div>
            </ScrollReveal>

            <ScrollReveal index={1} className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-cyan/25 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.42)] sm:min-h-[380px] sm:rounded-[2rem] lg:min-h-[580px]">
              <Image
                src="/images/Industrial energy with digital precision landing.png"
                alt="Business professional reviewing operations with digital system overlays"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/25 to-transparent" />
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-y border-white/10 bg-[#0A1529]">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">This is what we see in most businesses</h2>
              <ul className="mt-7 space-y-3 text-base text-white/80 sm:text-lg">
                {painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan shadow-[0_0_16px_rgba(0,180,216,0.8)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-xl font-semibold leading-8 text-white sm:text-2xl">
                This isn’t a people problem.
                <br />
                <span className="text-cyan">It’s a systems problem.</span>
              </p>
            </ScrollReveal>

            <ScrollReveal index={1} className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[500px]">
              <Image
                src="/images/Workspaces chaos vs. order landing.png"
                alt="Split scene showing chaotic workflow versus organized dashboard-driven workflow"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081221]/45 via-transparent to-[#081221]/10" />
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-[linear-gradient(170deg,#0A1C36_0%,#0B1F3B_100%)]">
          <div className="container-shell">
            <ScrollReveal className="max-w-5xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Why most AI projects fail</h2>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
                Most teams are pushed to add AI before core systems are stable. That creates expensive pilots that never turn into real operational gains.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-cyan/20 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">01</p>
                  <p className="mt-3 text-white/82">Most companies try to layer AI on top of messy systems.</p>
                </article>
                <article className="rounded-2xl border border-cyan/20 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">02</p>
                  <p className="mt-3 text-white/82">Bad data in → bad results out.</p>
                </article>
                <article className="rounded-2xl border border-cyan/20 bg-white/5 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">03</p>
                  <p className="mt-3 text-white/82">AI doesn’t fix broken processes. It exposes them.</p>
                </article>
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-[#0B162B]">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <ScrollReveal className="order-2 lg:order-1">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">We don’t start with tools. We start with your business.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="rounded-2xl border border-cyan/20 bg-white/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{index + 1}. {step.title}</p>
                    <p className="mt-3 text-white/78">{step.description}</p>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal index={1} className="relative order-1 min-h-[240px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-2 lg:min-h-[460px]">
              <Image
                src="/images/Four-step process flow landing.png"
                alt="Four-step process flow visual with cyan accents"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081221]/40 via-transparent to-[#081221]/15" />
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-[#081427]">
          <div className="container-shell">
            <ScrollReveal className="max-w-4xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">What this actually fixes</h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outcomes.map((item, index) => (
                <ScrollReveal key={item} index={index} className="rounded-2xl border border-cyan/20 bg-white/5 p-5 text-white/85">
                  {item}
                </ScrollReveal>
              ))}
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="border-y border-white/10 bg-[#0A1529]">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Built for real-world operations</h2>
              <ul className="mt-7 grid gap-3 text-lg text-white/82 sm:grid-cols-2">
                {industries.map((industry) => (
                  <li key={industry} className="rounded-xl border border-cyan/20 bg-white/5 px-4 py-3">
                    {industry}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal index={1} className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[500px]">
              <Image
                src="/images/Industrial inspection at twilight with AR overlays landing.png"
                alt="Industrial facility at dusk with subtle digital data overlays"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081221]/50 via-transparent to-[#081221]/12" />
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-[linear-gradient(140deg,#0B1F3B_0%,#0A2545_65%,#091A31_100%)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,180,216,0.2),transparent_50%)]" />
          <div className="container-shell relative">
            <ScrollReveal className="rounded-[1.5rem] border border-cyan/25 bg-[rgba(6,16,33,0.72)] px-6 py-8 shadow-[0_25px_80px_rgba(0,0,0,0.36)] sm:px-10 sm:py-12 md:rounded-[2rem] md:px-14 md:py-16">
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">If your business feels more complicated than it should be…</h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-white/82 sm:text-lg">
                There’s usually a reason.
                <br />
                <br />
                And it’s usually fixable.
              </p>
              <div className="mt-8">
                <PrimaryCTA />
              </div>
            </ScrollReveal>
          </div>
        </SectionWrapper>

        <SectionWrapper className="bg-[#070F1F] py-12 md:py-16">
          <div className="container-shell">
            <ScrollReveal className="max-w-4xl">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">Quick FAQ</h2>
            </ScrollReveal>
            <div className="mt-6 grid gap-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={faq.question} index={index} className="rounded-2xl border border-cyan/20 bg-white/5 p-5">
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{faq.question}</h3>
                  <p className="mt-3 text-white/75">{faq.answer}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>

      <footer className="border-t border-cyan/20 bg-[#050B17] py-8">
        <div className="container-shell flex flex-col gap-5 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="relative block h-8 w-[140px] sm:h-10 sm:w-[180px]" aria-label="BitDepth AI Consulting home">
            <Image src="/images/logo svg transparent.svg" alt="BitDepth AI Consulting logo" fill sizes="180px" className="object-contain object-left" />
          </Link>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
            <Link href="https://bitdepthaiconsulting.com" className="transition hover:text-cyan">
              bitdepthaiconsulting.com
            </Link>
            <a href="mailto:blake@bitdepthaiconsulting.com" className="transition hover:text-cyan">
              blake@bitdepthaiconsulting.com
            </a>
            <Link href="/privacy-policy" className="transition hover:text-cyan">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="transition hover:text-cyan">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

