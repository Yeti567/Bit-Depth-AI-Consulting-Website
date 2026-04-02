import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BarChart3, Check, CheckCircle2, Factory, HardHat, Link2, Repeat, Truck, UserCog } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
 
export const metadata: Metadata = {
  title: 'AI Consulting for Canadian Businesses | BitDepth AI Consulting',
  description:
    'BitDepth helps Canadian SMBs eliminate manual work, connect their systems, and make better decisions with AI. We audit first, then build what fits.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'AI Consulting for Canadian Businesses | BitDepth AI Consulting',
    description:
      'BitDepth helps Canadian SMBs eliminate manual work, connect their systems, and make better decisions with AI.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/images/Homepage hero section.webp',
        width: 1200,
        height: 630,
        alt: 'Business owner reviewing operational dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting for Canadian Businesses | BitDepth AI Consulting',
    description: 'Vendor-neutral AI consulting focused on measurable operational outcomes for Canadian SMBs.',
    images: ['/images/Homepage hero section.webp']
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

export default function HomePage() {
  return (
    <PageShell>
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
