import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
 
export const metadata: Metadata = {
  title: 'AI Consulting Firm | Machine Learning & Digital Transformation for Oil & Gas and Manufacturing',
  description:
    'AI consulting services for oil & gas and manufacturing companies. We deliver predictive maintenance, computer vision, and industrial AI solutions that drive measurable ROI.',
  keywords: [
    'AI consulting firm',
    'machine learning consulting',
    'digital transformation consultant',
    'AI audit services',
    'AI strategy consulting',
    'AI implementation services',
    'AI integration services',
    'enterprise AI solutions',
    'predictive maintenance',
    'computer vision quality control',
    'process automation'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'AI Consulting Firm | Machine Learning & Digital Transformation for Oil & Gas and Manufacturing',
    description:
      'AI consulting services for oil & gas and manufacturing companies. We deliver predictive maintenance, computer vision, and industrial AI solutions that drive measurable ROI.',
    url: '/',
    type: 'website',
    images: [
      {
        url: '/images/Home page hero image revised.png',
        width: 1200,
        height: 630,
        alt: 'Industrial facility with subtle AI-inspired overlay lighting for BitDepth AI Consulting homepage'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting Firm | Machine Learning & Digital Transformation for Oil & Gas and Manufacturing',
    description:
      'AI consulting services for oil & gas and manufacturing companies. We deliver predictive maintenance, computer vision, and industrial AI solutions that drive measurable ROI.',
    images: ['/images/Home page hero image revised.png']
  }
};

const processSteps = [
  {
    step: '01',
    title: 'AI Audit',
    description:
      'We assess your operations, data, and workflows to identify high-impact AI opportunities.'
  },
  {
    step: '02',
    title: 'AI Strategy & Roadmap',
    description:
      'We build a practical AI strategy using machine learning, data analytics, and automation solutions aligned to your business.'
  },
  {
    step: '03',
    title: 'Implementation & Integration',
    description:
      'We deliver AI implementation services, AI integration services, and enterprise AI solutions that work in real environments.'
  }
];

const industries = [
  {
    title: 'Oil & Gas',
    description:
      'AI consulting for oil and gas operations, including predictive maintenance, pipeline monitoring, and digital transformation.',
    href: '/industries/oil-and-gas',
    image: '/images/Workers with predictive maintenance data revised.png',
    alt: 'Industrial field workers reviewing predictive maintenance data in an oil and gas environment'
  },
  {
    title: 'Manufacturing',
    description:
      'Manufacturing AI consulting focused on Industry 4.0, smart factory solutions, and process automation.',
    href: '/industries/manufacturing',
    image: '/images/High-tech manufacturing in action revised.png',
    alt: 'Advanced manufacturing line with high-tech production activity'
  },
  {
    title: 'Construction',
    description:
      'Operational AI solutions for field workflows, reporting, and safety automation.',
    href: '/contact',
    image: '/images/Engineers examining data in high-tech factory revised.png',
    alt: 'Engineering team reviewing operational data for field and project workflows'
  },
  {
    title: 'Logistics & Supply Chain',
    description:
      'AI-driven supply chain optimization, demand forecasting, and warehouse automation.',
    href: '/contact',
    image: '/images/Autonomous logistics in a modern warehouse revised.png',
    alt: 'Modern warehouse logistics environment with autonomous systems'
  }
];

const services = [
  {
    title: 'AI Strategy Consulting',
    description:
      'AI strategy consulting and digital transformation consulting tailored to your operations.'
  },
  {
    title: 'Machine Learning & Predictive Analytics',
    description:
      'Machine learning consulting and predictive analytics services to improve decision-making and forecasting.'
  },
  {
    title: 'Predictive Maintenance Solutions',
    description:
      'AI predictive maintenance, equipment failure prediction, and condition monitoring systems.'
  },
  {
    title: 'Computer Vision & Quality Control',
    description:
      'Computer vision for manufacturing, automated visual inspection, and defect detection systems.'
  },
  {
    title: 'Industrial IoT & Digital Twin',
    description:
      'Industrial IoT consulting and digital twin solutions for real-time monitoring and asset optimization.'
  },
  {
    title: 'Generative AI & Automation',
    description:
      'Generative AI consulting, LLM implementation consulting, and AI process automation consulting.'
  }
];

const outcomes = [
  {
    problem: 'Manual reporting',
    outcome: 'Automated data pipelines and dashboards'
  },
  {
    problem: 'Unexpected equipment failure',
    outcome: 'AI predictive maintenance systems'
  },
  {
    problem: 'Disconnected systems',
    outcome: 'Unified data integration and AI-ready infrastructure'
  },
  {
    problem: 'Quality defects',
    outcome: 'Computer vision quality control systems'
  },
  {
    problem: 'Inefficient workflows',
    outcome: 'Intelligent automation and process optimization'
  }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="hero-particle left-[9%] top-[18%] h-2 w-2" />
        <div className="hero-particle left-[22%] top-[68%] h-2.5 w-2.5" style={{ animationDelay: '1.2s' }} />
        <div className="hero-particle right-[14%] top-[22%] h-2 w-2" style={{ animationDelay: '2.1s' }} />
        <div className="hero-particle right-[26%] top-[60%] h-3 w-3" style={{ animationDelay: '3.2s' }} />
        <div className="container-shell relative grid min-h-[calc(100svh-4rem)] gap-12 py-16 sm:py-20 lg:grid-cols-[1fr,1.05fr] lg:items-center lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">Premium Industrial AI Consulting</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-[64px]">
              AI Consulting Firm for Real-World Operations
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              We deliver AI consulting, machine learning consulting, and digital transformation solutions for oil and gas and manufacturing companies. We start with an AI audit to uncover real operational inefficiencies, then implement the right solution.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book an AI Audit
              </Link>
              <Link href="#how-we-work" className="btn-secondary text-white">
                See How It Works
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] lg:min-h-[620px]">
            <Image
              src="/images/Home page hero image revised.png"
              alt="Industrial facility with subtle AI overlay lines and data nodes"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/65 via-navy/20 to-transparent" />
            <div className="absolute left-[10%] top-[15%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,180,216,0.9)]" />
            <div className="absolute left-[26%] top-[28%] h-px w-[18%] bg-gradient-to-r from-cyan/70 to-transparent" />
            <div className="absolute right-[18%] top-[20%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,180,216,0.9)]" />
            <div className="absolute right-[24%] top-[22%] h-[16%] w-px bg-gradient-to-b from-cyan/70 to-transparent" />
            <div className="absolute bottom-[18%] left-[18%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,180,216,0.9)]" />
            <div className="absolute bottom-[22%] left-[20%] h-px w-[22%] bg-gradient-to-r from-cyan/70 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0E1728] py-5 text-white">
        <div className="container-shell flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Built for real-world operations, not theoretical AI.</p>
          <div className="flex flex-col gap-2 text-sm text-white/65 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <span>Vendor-neutral AI consulting</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>Outcome-driven engagements</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>Designed for industrial environments</span>
          </div>
        </div>
      </section>

      <section id="how-we-work" className="section-dark section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">A practical path from AI audit to implementation</h2>
            <p className="mt-5 text-lg text-white/65">
              We lead with operational reality. Our AI audit services, AI strategy consulting, and AI implementation services are designed to move from assessment to delivery without losing sight of ROI.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps.map((item, index) => (
              <ScrollReveal key={item.title} as="article" className="surface-card-dark h-full p-8" index={index}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">Step {item.step}</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-white/72">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-offwhite">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Industries</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">Industrial AI consulting built for the environments where operations matter most</h2>
            <p className="mt-5 text-lg text-charcoal/72">
              We design AI programs for sectors where downtime, quality, and field execution have direct financial consequences.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} as="article" className="surface-card group h-full overflow-hidden p-0" index={index}>
                <div className="relative h-64 overflow-hidden">
                  <Image src={industry.image} alt={industry.alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-[#081221]/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-navy">{industry.title}</h3>
                  <p className="mt-4 text-charcoal/78">{industry.description}</p>
                  <Link href={industry.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy-soft section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr,0.95fr] lg:items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow">Services</p>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Our AI Consulting Services</h2>
              <p className="mt-5 max-w-2xl text-lg text-white/68">
                We bring consulting discipline and implementation depth across AI strategy consulting, machine learning consulting, predictive maintenance, computer vision, Industrial IoT, digital twin solutions, and generative AI automation.
              </p>
            </ScrollReveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} className="surface-card-dark p-6" index={index}>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-white/72">{service.description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal index={1} className="relative min-h-[360px] overflow-hidden rounded-[2rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.4)] lg:min-h-[640px]">
            <Image
              src="/images/Industrial data dashboard in dim environment revised.png"
              alt="Industrial environment with AI dashboard overlays and monitoring data"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space bg-[#F7F8FB]">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Problem to Outcome</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">From Operational Problems to Measurable Outcomes</h2>
            <p className="mt-5 text-lg text-charcoal/72">
              We focus on measurable business improvement, from predictive maintenance to computer vision quality control and process automation.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-5">
            {outcomes.map((item, index) => (
              <ScrollReveal key={item.problem} className="surface-card h-full p-6" index={index}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/45">Problem</p>
                <h3 className="mt-3 text-xl font-semibold text-navy">{item.problem}</h3>
                <div className="mt-5 h-px w-12 bg-amber" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/45">Outcome</p>
                <p className="mt-3 text-charcoal/78">{item.outcome}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow">Why BitDepth</p>
              <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">We do not sell software.</h2>
            </ScrollReveal>
            <ScrollReveal className="mt-8 space-y-5 text-lg text-white/72" index={1}>
              <p>We are an AI consulting firm that starts with your business, not a product.</p>
              <p>
                Every engagement begins with an AI audit to uncover real inefficiencies, followed by a vendor-neutral recommendation and implementation plan.
              </p>
            </ScrollReveal>
            <ScrollReveal className="mt-8 grid gap-4 sm:grid-cols-3" index={2}>
              <div className="rounded-2xl border border-cyan/15 bg-white/5 p-5 text-white">ROI-driven AI solutions</div>
              <div className="rounded-2xl border border-cyan/15 bg-white/5 p-5 text-white">Practical implementation</div>
              <div className="rounded-2xl border border-cyan/15 bg-white/5 p-5 text-white">Industrial-grade reliability</div>
            </ScrollReveal>
          </div>
          <ScrollReveal index={1} className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-cyan/15 shadow-[0_24px_70px_rgba(0,0,0,0.38)] lg:min-h-[520px]">
            <Image
              src="/images/Engineers examining data in high-tech factory revised.png"
              alt="Consulting-style industrial planning session with operational data in view"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/20" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B1F3B 65%, #1b2434 100%)' }}>
        <div className="container-shell">
          <ScrollReveal className="rounded-[2rem] border border-amber/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.02))] px-8 py-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Start with clarity</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">Start With an AI Audit, Not a Guess</h2>
            <p className="mt-5 max-w-3xl text-lg text-white/72">
              Discover where AI can actually deliver ROI in your business before investing in technology.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.32)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book Your AI Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
