import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, Check, CheckCircle2, Factory, HardHat, Link2, Repeat, Truck, UserCog } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQSchemaScript } from '@/components/ui/faq-schema-script';
import { CaseStudies } from '@/components/ui/case-studies';
import { LeadMagnet } from '@/components/ui/lead-magnet';
import { buildOrganizationSchema, buildWebSiteSchema, buildLocalBusinessSchema } from '@/lib/schema';
import Script from 'next/script';
 
export const metadata: Metadata = {
  title: 'AI Consulting for Canadian Businesses | BitDepth AI',
  description:
    'Vendor-neutral AI consulting for Canadian small and mid-sized businesses. We audit first, then build what fits. Starting at $5,000. Book a free discovery call.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/'
  },
  openGraph: {
    title: 'AI Consulting for Canadian Businesses | BitDepth AI',
    description:
      'Vendor-neutral AI consulting for Canadian small and mid-sized businesses. We audit first, then build what fits. Starting at $5,000. Book a free discovery call.',
    url: 'https://bitdepthaiconsulting.com/',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-home.webp',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting - Vendor-neutral AI consulting for Canadian SMBs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Canadian Businesses | BitDepth AI',
    description:
      'Vendor-neutral AI consulting for Canadian small and mid-sized businesses. We audit first, then build what fits. Starting at $5,000. Book a free discovery call.',
    images: ['/images/og-home.webp']
  }
};

const painPoints = [
  {
    title: 'Data spread across disconnected systems',
    description: "Your team can't get a clear picture because information lives in 4 different places."
  },
  {
    title: 'Manual processes eating staff time',
    description: 'Repetitive admin work that should take minutes takes hours every single day.'
  },
  {
    title: 'Decisions made on incomplete information',
    description: "You're running the business on gut feel because the data isn't visible or usable."
  },
  {
    title: "Systems that don't talk to each other",
    description: 'Quoting, scheduling, invoicing, and reporting all require manual re-entry.'
  }
];

const processSteps = [
  {
    icon: <BarChart3 className="h-5 w-5 text-cyan" />,
    title: 'Diagnose',
    description:
      'We run a structured AI Opportunity Audit across your operations, data, and technology stack. We map your processes and identify exactly where AI will deliver the highest ROI.'
  },
  {
    icon: <Link2 className="h-5 w-5 text-cyan" />,
    title: 'Design',
    description:
      'We build a prioritized roadmap: short-term quick wins and longer-term strategic initiatives with realistic ROI estimates for each.'
  },
  {
    icon: <Repeat className="h-5 w-5 text-cyan" />,
    title: 'Implement',
    description:
      'We build and deploy the right solution: automations, AI workers, dashboards, or integrations. No unnecessary tech. No wasted budget.'
  }
];

const services = [
  {
    icon: <BarChart3 className="h-5 w-5 text-cyan" />,
    title: 'AI Opportunity Audit',
    summary: 'Your starting point.',
    description: 'Structured discovery of where AI will save you the most time and money. Includes roadmap + ROI estimates. From $5,000.'
  },
  {
    icon: <Repeat className="h-5 w-5 text-cyan" />,
    title: 'Workflow Automation',
    summary: 'Eliminate the manual.',
    description: 'Automate repetitive processes across invoicing, scheduling, reporting, onboarding, and more. From $5,000.'
  },
  {
    icon: <UserCog className="h-5 w-5 text-cyan" />,
    title: 'Custom AI Workers',
    summary: 'Your digital workforce.',
    description: 'Purpose-built AI agents that perform defined job functions inside your business. From $10,000.'
  },
  {
    icon: <Link2 className="h-5 w-5 text-cyan" />,
    title: 'AI Strategy & Roadmapping',
    summary: 'A clear plan forward.',
    description: 'Multi-phase AI implementation strategy aligned to your business goals and budget. From $12,000.'
  },
  {
    icon: <CheckCircle2 className="h-5 w-5 text-cyan" />,
    title: 'AI Training & Enablement',
    summary: 'Make it stick.',
    description: "Workshops and playbooks that ensure your team actually uses the AI you've invested in. From $2,500."
  }
];

const differentiators = [
  {
    title: "We don't sell software.",
    description: "We recommend the best solution for your situation, not the one we're paid to push."
  },
  {
    title: 'We start with a diagnosis, not a pitch.',
    description: 'Every engagement begins with a structured audit. No guessing. No wasted budget.'
  },
  {
    title: 'Built for Canadian SMBs.',
    description: 'Enterprise-quality AI thinking at mid-market prices. Starting at $5,000, not $50,000.'
  },
  {
    title: 'Measurable ROI.',
    description: "We estimate ROI before we build anything. If the numbers don't work, we tell you."
  }
];

const industries = [
  { icon: <HardHat className="h-6 w-6" />, label: 'Trades & Construction' },
  { icon: <UserCog className="h-6 w-6" />, label: 'Field Services' },
  { icon: <Factory className="h-6 w-6" />, label: 'Manufacturing' },
  { icon: <CheckCircle2 className="h-6 w-6" />, label: 'Professional Services' },
  { icon: <Truck className="h-6 w-6" />, label: 'Transportation & Logistics' },
  { icon: <BarChart3 className="h-6 w-6" />, label: 'Oil & Gas Services' }
];

const homepageFaq = [
  {
    question: 'What makes you qualified to do this?',
    answer: "Blake has five years of hands-on AI implementation experience, working behind the scenes for companies across North America. He's done this work. He has not managed people who do it. When you hire BitDepth, you're getting that experience applied directly to your business."
  },
  {
    question: "What if the audit doesn't find anything useful?",
    answer: "That's a real outcome and we'll tell you if it applies to you. If your business isn't ready for AI, you'll leave with a clear picture of what needs to be in place before it makes sense, plus a prioritized plan to get there. That roadmap has value on its own."
  },
  {
    question: 'How much of my time will this take?',
    answer: "We try to keep your team's involvement focused and efficient. The audit typically requires a few structured interviews and the ability to walk us through your key systems and workflows. Most clients find it takes less time than they expected."
  },
  {
    question: 'Is the outcome guaranteed?',
    answer: "We guarantee the audit credit: 100% of what you pay for the audit is credited against any implementation you choose to move forward with. What we can't guarantee is a specific ROI, because that depends on your business, your data, and how you execute. What we can guarantee is that we'll be honest with you about what we find, including if the numbers don't justify building anything yet."
  },
  {
    question: 'How does the audit credit actually work?',
    answer: 'Simple. You pay for the audit. We deliver it. If you decide to move forward with any implementation (automation, AI workers, strategy, or training), the full audit fee comes off your project invoice. No minimums, no conditions beyond the 90-day window. You pay the difference.'
  }
];

export default function HomePage() {
  return (
    <PageShell>
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(buildOrganizationSchema())}
      </Script>
      <Script id="localbusiness-schema" type="application/ld+json">
        {JSON.stringify(buildLocalBusinessSchema())}
      </Script>
      <Script id="website-schema" type="application/ld+json">
        {JSON.stringify(buildWebSiteSchema())}
      </Script>
      <FAQSchemaScript faqs={homepageFaq} id="homepage-faq-schema" />
      <section className="section-navy dot-grid relative overflow-hidden section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <ScrollReveal>
            <span className="eyebrow-pill">Vendor-Neutral AI Consulting</span>
            <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Fix the inefficiencies slowing down your business.
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-white/78">
              Most businesses don&apos;t have an AI problem, they have a systems and data problem. We identify exactly where time and money are being lost, then implement the right solution.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="#how-we-work" className="btn-outline">
                See How It Works
              </Link>
            </div>
            <p className="mt-5 text-sm text-white/64">Vendor-neutral · No software sales · Canadian-owned · Starting at $5,000</p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[340px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/Homepage hero section.webp" alt="Business owner reviewing operational dashboard" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The Real Problem</p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">You don&apos;t need more technology. You need clarity on what&apos;s breaking down.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              We solve the operational blockers that prevent AI from making any impact. Before building anything, we diagnose exactly where your business is losing time and money.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {painPoints.map((point, index) => (
              <ScrollReveal key={point.title} index={index} className="card-light border-l-4 border-l-cyan p-6">
                <h3 className="text-xl font-bold">{point.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{point.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">How Our AI Consulting Process Works</h2>
          </ScrollReveal>
          <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-cyan/40 lg:block" />
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} index={index} className="card-dark relative p-6">
                <p className="text-5xl font-extrabold text-cyan/80">{index + 1}</p>
                <div className="mt-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/35 bg-cyan/10">{step.icon}</div>
                <h3 className="mt-4 text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-white/70">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-10 text-center">
            <Link href="/ai-audit" className="btn-primary">
              See What&apos;s in an AI Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-charcoal border-y border-[var(--color-border)] py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.5fr,1fr] lg:items-center">
          <ScrollReveal>
            <span className="inline-flex rounded-full border border-cyan px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-cyan">
              The Audit Credit Guarantee
            </span>
            <h2 className="mt-5 text-3xl font-extrabold text-white md:text-5xl">Your Audit Pays for Itself. Guaranteed.</h2>
            <p className="mt-5 max-w-3xl text-white/78">
              When you complete an AI Opportunity Audit with BitDepth and move forward with any recommended implementation, we credit the full cost of your audit, dollar for dollar, against your project invoice. No conditions. No minimums. No fine print.
            </p>
            <p className="mt-4 max-w-3xl text-white/78">
              This is how confident we are in what the audit finds. If the numbers don&apos;t justify building, we&apos;ll tell you that too. You&apos;ll still have a clear operational roadmap worth far more than you paid for it.
            </p>

            <div className="mt-7 space-y-3 text-white/80">
              <p className="inline-flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                <span>
                  <strong className="text-white">Full credit:</strong> 100% of your audit fee applied to implementation
                </span>
              </p>
              <p className="inline-flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                <span>
                  <strong className="text-white">90-day window:</strong> Proceed at your pace, not ours
                </span>
              </p>
              <p className="inline-flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                <span>
                  <strong className="text-white">Any service:</strong> Applies to automation, AI workers, strategy, or training
                </span>
              </p>
            </div>

            <Link href="/ai-audit" className="btn-primary mt-8">
              Book Your Audit
            </Link>
          </ScrollReveal>

          <ScrollReveal index={1} className="mx-auto w-full max-w-md rounded-2xl border-2 border-cyan bg-[var(--color-navy)] px-8 py-10 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan text-[var(--color-navy)]">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <p className="mt-5 font-heading text-[52px] font-extrabold leading-none text-cyan">100%</p>
            <p className="mt-2 text-base font-medium text-[var(--color-offwhite)]">Audit Credit</p>
            <div className="my-6 h-px w-full bg-[var(--color-border)]" />
            <div className="space-y-3 text-sm text-white/80">
              <p className="flex items-center justify-between gap-4">
                <span>Credit window:</span>
                <span className="font-semibold text-white">90 days</span>
              </p>
              <p className="flex items-center justify-between gap-4">
                <span>Applies to:</span>
                <span className="font-semibold text-white">Any implementation</span>
              </p>
              <p className="flex items-center justify-between gap-4">
                <span>Minimum build:</span>
                <span className="font-semibold text-white">None</span>
              </p>
            </div>
            <p className="mt-6 text-center text-xs text-[var(--color-slate)]">
              Credit applied to implementation invoice at time of project sign-off. Valid for 90 days from audit delivery date.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">AI Consulting Services</h2>
            <p className="mt-4 text-[var(--color-slate)]">Each service is designed to meet your business at its current stage.</p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} index={index} className="card-dark p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10">{service.icon}</div>
                <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 font-medium text-cyan">{service.summary}</p>
                <p className="mt-3 text-white/72">{service.description}</p>
                <Link href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Why BitDepth AI Consulting</h2>
            <div className="mt-8 space-y-4">
              {differentiators.map((item, index) => (
                <ScrollReveal key={item.title} index={index} className="rounded-xl border border-[var(--color-border)] bg-white/5 p-5">
                  <p className="inline-flex items-start gap-3 text-white">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                    <span>
                      <strong>{item.title}</strong> {item.description}
                    </span>
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[420px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/Home page BC Canada section.webp" alt="Consultant and owner reviewing strategy roadmap" fill className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Meet the Founder</p>
            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">Blake Cowan</h2>
            <p className="mt-2 text-lg font-semibold text-[var(--color-cyan)]">Founder, BitDepth AI Consulting</p>
          </ScrollReveal>
          <div className="mt-8 max-w-3xl space-y-4 text-[var(--color-charcoal)]">
            <ScrollReveal>
              <p className="text-lg leading-relaxed">
                Blake has spent the last five years working in AI. Not as a salesperson, but hands-on behind the scenes, doing the same work he now does for BitDepth clients. Most of that experience was built working with companies in the United States.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p className="text-lg leading-relaxed">
                He started BitDepth because he saw that Canada was underserved. Businesses here deserve access to the same quality of AI consulting that larger US markets take for granted.
              </p>
            </ScrollReveal>
            <ScrollReveal index={2}>
              <p className="text-lg leading-relaxed">
                One thing Blake learned early in his career: data and systems have to be solid before AI can do anything useful. Build on a shaky foundation and everything you build with AI becomes a house of cards. That belief shapes everything BitDepth does.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">How We Think About AI</h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl mx-auto space-y-6 text-white/80">
            <ScrollReveal>
              <p className="text-lg leading-relaxed">
                Most businesses aren&apos;t ready for AI yet. That&apos;s not a criticism; it&apos;s just the reality. AI is still new, expectations are high, and a lot of companies are going to be disappointed because they jumped in before their data and processes were ready to support it.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p className="text-lg leading-relaxed">
                Before we recommend anything, we run a discovery audit. We tell you exactly where you stand. What's working, what isn't, and what needs to be fixed before AI will do you any good. That honesty is the most valuable thing we offer.
              </p>
            </ScrollReveal>
            <ScrollReveal index={2}>
              <p className="text-lg leading-relaxed">
                BitDepth is lean by design. Blake works with a small group of trusted consultants, which keeps costs reasonable and means you're always dealing with someone who actually knows your file. We work with small and mid-sized businesses. That's not a limitation; it's a deliberate choice. These are the companies we understand best and where we can make the biggest difference.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold md:text-5xl">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl mx-auto space-y-4">
            <ScrollReveal className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_28px_rgba(11,31,59,0.08)]">
              <h3 className="text-lg font-bold text-[var(--color-navy)]">What makes you qualified to do this?</h3>
              <p className="mt-3 text-[var(--color-slate)] leading-relaxed">
                Blake has five years of hands-on AI implementation experience, working behind the scenes for companies across North America. He's done this work. He has not managed people who do it. When you hire BitDepth, you're getting that experience applied directly to your business.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1} className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_28px_rgba(11,31,59,0.08)]">
              <h3 className="text-lg font-bold text-[var(--color-navy)]">What if the audit doesn&apos;t find anything useful?</h3>
              <p className="mt-3 text-[var(--color-slate)] leading-relaxed">
                That's a real outcome and we'll tell you if it applies to you. If your business isn't ready for AI, you'll leave with a clear picture of what needs to be in place before it makes sense, plus a prioritized plan to get there. That roadmap has value on its own.
              </p>
            </ScrollReveal>
            <ScrollReveal index={2} className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_28px_rgba(11,31,59,0.08)]">
              <h3 className="text-lg font-bold text-[var(--color-navy)]">How much of my time will this take?</h3>
              <p className="mt-3 text-[var(--color-slate)] leading-relaxed">
                We try to keep your team&apos;s involvement focused and efficient. The audit typically requires a few structured interviews and the ability to walk us through your key systems and workflows. Most clients find it takes less time than they expected.
              </p>
            </ScrollReveal>
            <ScrollReveal index={3} className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_28px_rgba(11,31,59,0.08)]">
              <h3 className="text-lg font-bold text-[var(--color-navy)]">Is the outcome guaranteed?</h3>
              <p className="mt-3 text-[var(--color-slate)] leading-relaxed">
                We guarantee the audit credit: 100% of what you pay for the audit is credited against any implementation you choose to move forward with. What we can't guarantee is a specific ROI, because that depends on your business, your data, and how you execute. What we can guarantee is that we'll be honest with you about what we find, including if the numbers don't justify building anything yet.
              </p>
            </ScrollReveal>
            <ScrollReveal index={4} className="rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_28px_rgba(11,31,59,0.08)]">
              <h3 className="text-lg font-bold text-[var(--color-navy)]">How does the audit credit actually work?</h3>
              <p className="mt-3 text-[var(--color-slate)] leading-relaxed">
                Simple. You pay for the audit. We deliver it. If you decide to move forward with any implementation (automation, AI workers, strategy, or training), the full audit fee comes off your project invoice. No minimums, no conditions beyond the 90-day window. You pay the difference.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <CaseStudies />
        </div>
      </section>

      <section className="section-charcoal section-space">
        <div className="container-shell">
          <LeadMagnet source="homepage" />
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">Industries We Work With</h2>
            <p className="mt-4 text-[var(--color-slate)]">We focus on businesses where operations, people, and data drive results.</p>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <ScrollReveal
                key={industry.label}
                index={index}
                className="rounded-xl border border-transparent bg-white p-5 shadow-[0_10px_28px_rgba(11,31,59,0.08)] transition hover:border-[var(--color-border)]"
              >
                <div className="text-cyan">{industry.icon}</div>
                <p className="mt-3 text-lg font-semibold text-[var(--color-navy)]">{industry.label}</p>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/industries" className="btn-primary">
              Explore Industries
            </Link>
          </div>
        </div>
      </section>

      <section className="section-charcoal section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">What You&apos;ll Walk Away With</h2>
            <p className="mt-4 text-white/70">
              By the end of your audit, you will have a clear, honest picture of where your business stands relative to AI. That is not a sales pitch for what to buy next.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <ScrollReveal className="card-dark p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10">
                <Check className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Current Systems Map</h3>
              <p className="mt-2 text-white/70">A map of your current systems and where the gaps are.</p>
            </ScrollReveal>
            <ScrollReveal index={1} className="card-dark p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10">
                <Check className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">AI Readiness Scorecard</h3>
              <p className="mt-2 text-white/70">Across five key pillars: know exactly where you stand.</p>
            </ScrollReveal>
            <ScrollReveal index={2} className="card-dark p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10">
                <Check className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Prioritized Opportunities</h3>
              <p className="mt-2 text-white/70">Ranked by impact and feasibility: focus on what matters.</p>
            </ScrollReveal>
            <ScrollReveal index={3} className="card-dark p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10">
                <Check className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">ROI Estimates</h3>
              <p className="mt-2 text-white/70">Realistic numbers for your top use cases.</p>
            </ScrollReveal>
            <ScrollReveal index={4} className="card-dark p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10">
                <Check className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Quick Wins</h3>
              <p className="mt-2 text-white/70">Lower-cost, faster implementations that pay for themselves.</p>
            </ScrollReveal>
            <ScrollReveal index={5} className="card-dark p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-cyan/30 bg-cyan/10">
                <Check className="h-5 w-5 text-cyan" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Long-Term Roadmap</h3>
              <p className="mt-2 text-white/70">Where AI can take your business as it grows.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-white/70 leading-relaxed">
              We&apos;re not looking for a two-month engagement. We want to be the AI consultant you come back to as your business grows and as the technology keeps evolving. The audit is the starting point, not the finish line.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-charcoal py-14">
        <div className="container-shell grid gap-8 text-center md:grid-cols-3">
          <div>
            <p className="text-4xl font-extrabold text-cyan">$5,000</p>
            <p className="mt-2 text-white/65">Starting audit price</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-cyan">5–10 Days</p>
            <p className="mt-2 text-white/65">Typical audit timeline</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-cyan">$2M–$50M</p>
            <p className="mt-2 text-white/65">Revenue range we serve</p>
          </div>
        </div>
      </section>

      <section className="section-navy section-space border-t border-t-cyan/30">
        <div className="container-shell text-center">
          <ScrollReveal className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Start With a Diagnostic, Not a Guess.</h2>
            <p className="mt-5 text-white/72">
              Before building anything, we identify exactly where time is being lost, where money is leaking, and where AI will actually make an impact.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book Your AI Diagnostic
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
