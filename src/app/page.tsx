import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
 
export const metadata: Metadata = {
  title: 'AI Consulting Firm for Oil & Gas and Manufacturing | BitDepth AI',
  description:
    'BitDepth AI Consulting is a vendor-neutral AI consulting firm providing machine learning consulting, data analytics consulting, predictive maintenance AI, and digital transformation services for oil & gas and manufacturing leaders.',
  keywords: [
    'AI consulting firm',
    'AI consultant',
    'machine learning consulting',
    'digital transformation consulting',
    'data analytics consulting',
    'AI implementation services',
    'predictive maintenance AI',
    'industrial AI solutions',
    'AI strategy consulting',
    'AI integration services'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'AI Consulting Firm for Oil & Gas and Manufacturing | BitDepth AI',
    description:
      'Vendor-neutral AI consulting, machine learning consulting, predictive maintenance AI, and digital transformation services for industrial companies.',
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
    title: 'AI Consulting Firm for Oil & Gas and Manufacturing | BitDepth AI',
    description:
      'AI consulting, machine learning consulting, and predictive maintenance AI solutions for real-world operations.',
    images: ['/images/Home page hero image revised.png']
  }
};

const processSteps = [
  {
    step: 'Step 1',
    title: 'Diagnose',
    description:
      'We run a structured AI audit and data assessment to understand systems, workflows, and bottlenecks.',
    seo: 'AI audit services • AI strategy consulting'
  },
  {
    step: 'Step 2',
    title: 'Design',
    description:
      'We build a roadmap using machine learning, automation, and analytics solutions tailored to your business.',
    seo: 'machine learning consulting • data analytics consulting'
  },
  {
    step: 'Step 3',
    title: 'Implement',
    description:
      'We deliver AI implementation services, integrating systems, building data pipelines, and deploying real solutions.',
    seo: 'AI implementation services • AI integration services'
  }
];

const services = [
  {
    title: 'AI Strategy & AI Consulting',
    description: 'We help businesses define where AI creates real value, not just where it sounds good.',
    keywords: ['AI strategy consulting', 'digital transformation consulting', 'business process optimization']
  },
  {
    title: 'Machine Learning & Predictive Analytics',
    description: 'Turn your data into insights and predictions you can act on.',
    keywords: ['machine learning consulting', 'predictive analytics consultancy', 'data analytics consulting']
  },
  {
    title: 'Predictive Maintenance & Operations AI',
    description: 'Reduce downtime and prevent failures before they happen.',
    keywords: ['predictive maintenance AI', 'equipment failure prediction', 'condition monitoring']
  },
  {
    title: 'AI Automation & Integration',
    description: 'Eliminate repetitive work and connect your systems end to end.',
    keywords: ['AI implementation services', 'process automation consulting', 'RPA + AI workflows']
  },
  {
    title: 'Industrial AI & Data Systems',
    description: 'Designed for real-world assets, operations, and frontline teams.',
    keywords: ['industrial AI solutions', 'industrial IoT consulting', 'digital twin systems']
  }
];

const industries = [
  {
    title: 'Oil & Gas',
    description: 'We focus on predictive maintenance, production optimization, and digital oilfield solutions.',
    keywords: ['AI in oil and gas', 'predictive maintenance oil and gas', 'digital oilfield solutions'],
    href: '/industries/oil-and-gas',
    image: '/images/Workers with predictive maintenance data revised.png',
    alt: 'Industrial field workers reviewing predictive maintenance data in an oil and gas environment'
  },
  {
    title: 'Manufacturing',
    description: 'Industry 4.0 consulting for smart factories, quality, and throughput.',
    keywords: ['manufacturing AI consulting', 'Industry 4.0 consulting', 'smart factory solutions'],
    href: '/industries/manufacturing',
    image: '/images/High-tech manufacturing in action revised.png',
    alt: 'Advanced manufacturing line with high-tech production activity'
  }
];

const valuePoints = [
  'No vendor bias; we recommend what fits your business',
  'Built for real operations, not theory',
  'Focused on measurable ROI',
  'Designed for SMB and mid-market companies'
];

const faqs = [
  {
    question: 'What does an AI consulting firm do?',
    answer:
      'An AI consulting firm like BitDepth evaluates your operations, data, and systems to design practical machine learning consulting, digital transformation consulting, and AI implementation services that deliver measurable ROI.'
  },
  {
    question: 'How can AI improve industrial operations?',
    answer:
      'AI improves industrial operations by unifying data analytics consulting, predictive maintenance AI, and automation so teams eliminate manual work, reduce downtime, and make faster decisions based on live data.'
  },
  {
    question: 'What is predictive maintenance AI?',
    answer:
      'Predictive maintenance AI uses sensor data, machine learning models, and industrial AI solutions to predict failures before they happen, allowing oil & gas and manufacturing companies to schedule repairs and avoid unplanned shutdowns.'
  },
  {
    question: 'Do you provide AI implementation services?',
    answer:
      'Yes. BitDepth AI Consulting delivers AI implementation services and AI integration services, including data pipelines, automation workflows, and deployment support so solutions run reliably in production environments.'
  }
];

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BitDepth AI Consulting Ltd.',
  url: 'https://bitdepthaiconsulting.com',
  logo: 'https://bitdepthaiconsulting.com/images/Social Media Profile Card.webp',
  description:
    'Vendor-neutral AI consulting firm delivering machine learning consulting, digital transformation consulting, predictive maintenance AI, and industrial AI solutions for oil & gas and manufacturing companies.',
  sameAs: ['https://www.linkedin.com/company/bitdepth-ai-consulting/']
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Industrial AI Consulting Services',
  provider: {
    '@type': 'Organization',
    name: 'BitDepth AI Consulting Ltd.',
    url: 'https://bitdepthaiconsulting.com'
  },
  areaServed: 'Canada',
  serviceType: [
    'AI consulting firm',
    'machine learning consulting',
    'digital transformation consulting',
    'predictive maintenance AI',
    'industrial AI solutions'
  ],
  url: 'https://bitdepthaiconsulting.com/services'
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
};

export default function HomePage() {
  return (
    <PageShell>
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </Script>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <Script id="faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="hero-particle left-[9%] top-[18%] h-2 w-2" />
        <div className="hero-particle left-[22%] top-[68%] h-2.5 w-2.5" style={{ animationDelay: '1.2s' }} />
        <div className="hero-particle right-[14%] top-[22%] h-2 w-2" style={{ animationDelay: '2.1s' }} />
        <div className="hero-particle right-[26%] top-[60%] h-3 w-3" style={{ animationDelay: '3.2s' }} />
        <div className="container-shell relative grid min-h-[calc(100svh-4rem)] gap-10 py-12 sm:py-16 lg:grid-cols-[1fr,1.05fr] lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">Independent Industrial AI Consulting</p>
            <h1 className="mt-5 max-w-3xl text-[2.35rem] font-extrabold leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-[64px]">
              AI Consulting Firm for Industrial &amp; Operational Businesses
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              We provide AI consulting, machine learning consulting, and digital transformation services to eliminate inefficiencies, reduce downtime, and unlock better decisions from your data.
            </p>
            <div className="mt-5 space-y-2 text-base text-white/72 sm:space-y-1">
              <p>We don’t sell software.</p>
              <p>We diagnose your business, identify what’s actually slowing you down, and implement the right solution.</p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Start Your AI Diagnostic
              </Link>
              <Link href="#how-we-work" className="btn-secondary min-h-12 text-white">
                See How It Works
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[300px] overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[620px]">
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
        <div className="container-shell flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Helping companies with</p>
          <div className="flex flex-col gap-2 text-sm leading-6 text-white/70 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <span>Predictive maintenance</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>Data analytics &amp; reporting</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>Process automation</span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span>AI implementation</span>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24 bg-offwhite">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow text-charcoal/60">The real problem</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">Most Businesses Don’t Have an AI Problem, They Have an Operations Problem</h2>
            <p className="mt-6 text-base leading-7 text-charcoal/78 sm:text-lg">
              We solve the operational blockers that prevent AI from making an impact:
            </p>
            <ul className="mt-6 space-y-3 text-base text-charcoal/78 sm:text-lg">
              <li>• Data is spread across systems</li>
              <li>• Teams rely on manual processes and spreadsheets</li>
              <li>• Decisions are delayed or based on incomplete information</li>
              <li>• Systems don’t talk to each other</li>
            </ul>
            <p className="mt-6 text-base text-charcoal/78 sm:text-lg">This is where AI consulting actually creates value.</p>
          </ScrollReveal>
        </div>
      </section>

      <section id="how-we-work" className="section-dark py-14 md:py-24">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Our process</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">How Our AI Consulting Process Works</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
            {processSteps.map((item, index) => (
              <ScrollReveal key={item.title} as="article" className="surface-card-dark h-full p-6 sm:p-8" index={index}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">{item.step}</p>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-white/72">{item.description}</p>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">{item.seo}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy-soft py-14 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12">
          <div>
            <ScrollReveal>
              <p className="eyebrow">Services</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">AI Consulting Services</h2>
            </ScrollReveal>
            <div className="mt-8 grid gap-4 sm:mt-10">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} className="surface-card-dark p-5 sm:p-6" index={index}>
                  <h3 className="text-lg font-semibold text-white sm:text-xl">{service.title}</h3>
                  <p className="mt-3 text-white/72">{service.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                    {service.keywords.map((keyword) => (
                      <span key={keyword} className="rounded-full border border-white/15 px-3 py-1 text-[11px]">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal index={1} className="relative order-first min-h-[280px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.4)] sm:min-h-[360px] sm:rounded-[2rem] lg:order-none lg:min-h-[640px]">
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

      <section className="py-14 md:py-24 bg-[#F7F8FB]">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Industries</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">Industries We Work With</h2>
            <p className="mt-4 text-base text-charcoal/72 sm:mt-5 sm:text-lg">We focus on industries where operations, assets, and data matter.</p>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} as="article" className="surface-card group h-full overflow-hidden p-0" index={index}>
                <div className="relative h-56 overflow-hidden sm:h-64">
                  <Image src={industry.image} alt={industry.alt} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-[#081221]/30 to-transparent" />
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-semibold text-navy sm:text-2xl">{industry.title}</h3>
                  <p className="mt-3 text-charcoal/78 sm:mt-4">{industry.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/55">
                    {industry.keywords.map((keyword) => (
                      <span key={keyword} className="rounded-full border border-charcoal/15 px-3 py-1 text-[11px]">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <Link href={industry.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-14 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div>
            <ScrollReveal>
              <p className="eyebrow">Why BitDepth AI Consulting</p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Why BitDepth AI Consulting</h2>
            </ScrollReveal>
            <div className="mt-6 grid gap-3 sm:mt-8">
              {valuePoints.map((point, index) => (
                <ScrollReveal key={point} className="rounded-2xl border border-cyan/15 bg-white/5 p-4 text-white sm:p-5" index={index}>
                  {point}
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal index={1} className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-cyan/15 shadow-[0_24px_70px_rgba(0,0,0,0.38)] sm:min-h-[320px] sm:rounded-[2rem] lg:min-h-[520px]">
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

      <section className="bg-offwhite py-14 md:py-24">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow text-charcoal/60">AI Consulting FAQs</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">Answers for AI and Industrial Teams</h2>
            <p className="mt-4 text-base text-charcoal/75 sm:text-lg">
              Clear answers for leaders evaluating AI consulting, predictive maintenance AI, and AI implementation services.
            </p>
          </ScrollReveal>
          <div className="mt-8 space-y-5">
            {faqs.map((faq) => (
              <ScrollReveal key={faq.question} className="surface-card border border-black/5 p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-navy">{faq.question}</h3>
                <p className="mt-3 text-charcoal/78">{faq.answer}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B1F3B 65%, #1b2434 100%)' }}>
        <div className="container-shell">
          <ScrollReveal className="rounded-[1.5rem] border border-amber/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.02))] px-5 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10 md:rounded-[2rem] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Start with a diagnostic, not a guess</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Start with a Diagnostic, Not a Guess</h2>
            <p className="mt-4 max-w-3xl text-base text-white/72 sm:mt-5 sm:text-lg">
              Before building anything, we identify exactly where time is being lost, where money is leaking, and where AI will actually make an impact.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.32)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book Your AI Diagnostic
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#060E1A] py-10 text-sm text-white/70">
        <div className="container-shell">
          <ScrollReveal>
            <p>
              BitDepth AI Consulting is an AI consulting firm providing machine learning consulting, data analytics consulting, and AI implementation services for industrial businesses. We specialize in predictive maintenance, industrial automation, and digital transformation for oil &amp; gas and manufacturing companies.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
