import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting Services | Machine Learning, Predictive Maintenance & Industrial AI',
  description:
    'Explore AI consulting services including predictive maintenance, machine learning consulting, and industrial IoT solutions for oil & gas and manufacturing.',
  keywords: [
    'AI consulting services',
    'AI strategy consulting',
    'machine learning consulting',
    'predictive maintenance',
    'industrial IoT solutions',
    'computer vision quality control',
    'digital transformation consulting',
    'industrial AI'
  ],
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'AI Consulting Services | Machine Learning, Predictive Maintenance & Industrial AI',
    description:
      'Explore AI consulting services including predictive maintenance, machine learning consulting, and industrial IoT solutions for oil & gas and manufacturing.',
    url: '/services',
    type: 'website',
    images: [
      {
        url: '/images/Industrial twilight fusion of tech and energy revised.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial energy environment with subtle AI-inspired lighting and overlays'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting Services | Machine Learning, Predictive Maintenance & Industrial AI',
    description:
      'Explore AI consulting services including predictive maintenance, machine learning consulting, and industrial IoT solutions for oil and gas and manufacturing.',
    images: ['/images/Industrial twilight fusion of tech and energy revised.webp']
  }
};

const services = [
  {
    id: 'ai-strategy-roadmap',
    title: 'AI Strategy Consulting & Digital Transformation',
    text: 'We provide AI strategy consulting and digital transformation consulting to help businesses identify where AI creates real value. Our approach focuses on aligning machine learning, data analytics, and automation with your operational goals.',
    includes: ['AI audits', 'Opportunity mapping', 'ROI modeling', 'Implementation roadmaps'],
    image: '/images/Industrial meeting with data analytics revised.webp',
    alt: 'Industrial strategy meeting with analytics and planning visuals'
  },
  {
    id: 'machine-learning-analytics',
    title: 'Machine Learning Consulting & Predictive Analytics',
    text: 'Our machine learning consulting services help organizations unlock insights from their data. We design and deploy predictive analytics systems that improve forecasting, decision-making, and operational performance.',
    includes: ['Predictive analytics', 'Data modeling', 'Forecasting systems', 'Business intelligence integration'],
    image: '/images/Industrial control room with data displays revised.webp',
    alt: 'Industrial control room with live data displays and analytics systems'
  },
  {
    id: 'predictive-maintenance',
    title: 'Predictive Maintenance Solutions',
    text: 'Reduce downtime and extend equipment life with AI predictive maintenance systems. We implement condition monitoring, equipment failure prediction, and asset health monitoring solutions.',
    includes: ['IoT sensor integration', 'Machine learning models', 'Real-time monitoring', 'Maintenance optimization'],
    image: '/images/Workers with predictive maintenance data revised.png',
    alt: 'Workers reviewing predictive maintenance signals in an industrial environment'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision & Quality Control',
    text: 'We deploy computer vision systems for automated inspection and quality control. Detect defects, improve production quality, and reduce manual inspection with AI-driven visual systems.',
    includes: ['Automated inspection', 'Defect detection', 'Machine vision systems', 'Quality analytics'],
    image: '/images/Automated inspection of metal parts revised.webp',
    alt: 'Automated inspection system examining manufactured metal parts'
  },
  {
    id: 'industrial-iot-digital-twin',
    title: 'Industrial IoT & Digital Twin Solutions',
    text: 'We build Industrial IoT systems and digital twin models to monitor, simulate, and optimize operations in real time.',
    includes: ['Real-time monitoring', 'Asset tracking', 'Digital twins', 'Operational optimization'],
    image: '/images/Factory and digital twin in harmony revised.webp',
    alt: 'Factory environment blended with digital twin visualization'
  },
  {
    id: 'generative-ai-automation',
    title: 'Generative AI & Process Automation',
    text: 'We implement generative AI and process automation solutions to streamline workflows, reporting, and decision-making.',
    includes: ['LLM implementation', 'AI automation workflows', 'Document processing', 'Internal tools'],
    image: '/images/Modern office with AI-driven systems revised.webp',
    alt: 'Modern operational workspace supported by AI-driven systems'
  }
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="hero-particle left-[8%] top-[22%] h-2 w-2" />
        <div className="hero-particle left-[24%] top-[68%] h-2.5 w-2.5" style={{ animationDelay: '1.2s' }} />
        <div className="hero-particle right-[12%] top-[16%] h-2 w-2" style={{ animationDelay: '2s' }} />
        <div className="hero-particle right-[26%] top-[58%] h-3 w-3" style={{ animationDelay: '3.1s' }} />
        <div className="container-shell relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr,1.02fr] lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">Industrial AI Services</p>
            <h1 className="mt-5 max-w-3xl text-[2.3rem] font-extrabold leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-[60px]">
              AI Consulting Services Built for Real Operations
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              From AI strategy consulting to predictive maintenance and machine learning consulting, we deliver practical, high-impact solutions for oil and gas and manufacturing companies.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/ai-audit" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book an AI Audit
              </Link>
              <Link href="/contact" className="btn-secondary min-h-12 text-white">
                Talk to an Expert
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[620px]">
            <Image
              src="/images/Industrial twilight fusion of tech and energy revised.webp"
              alt="Industrial facility with subtle AI overlay and cinematic lighting"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/65 via-navy/20 to-transparent" />
            <div className="absolute left-[10%] top-[18%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,180,216,0.9)]" />
            <div className="absolute left-[26%] top-[30%] h-px w-[20%] bg-gradient-to-r from-cyan/70 to-transparent" />
            <div className="absolute right-[18%] top-[22%] h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(0,180,216,0.9)]" />
            <div className="absolute right-[22%] top-[24%] h-[16%] w-px bg-gradient-to-b from-cyan/70 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0E1728] py-12 text-white md:py-20">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <p className="text-lg leading-8 text-white/72 sm:text-xl">
              We do not offer pre-packaged software.
            </p>
            <p className="mt-4 text-base leading-7 text-white/68 sm:mt-5 sm:text-lg sm:leading-8">
              Every engagement begins with an AI audit to identify real inefficiencies, followed by a tailored AI strategy and implementation plan. Our services are designed for companies that need measurable ROI, not experimentation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={index % 2 === 0 ? 'section-dark py-12 md:py-24' : 'bg-offwhite py-12 md:py-24'}
        >
          <div className={`container-shell grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
            <ScrollReveal className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
              <p className={index % 2 === 0 ? 'eyebrow' : 'eyebrow'}>{`Service ${index + 1}`}</p>
              <h2 className={`mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl ${index % 2 === 0 ? 'text-white' : 'text-navy'}`}>
                {service.title}
              </h2>
              <p className={`mt-4 text-base leading-7 sm:mt-5 sm:text-lg sm:leading-8 ${index % 2 === 0 ? 'text-white/72' : 'text-charcoal/78'}`}>
                {service.text}
              </p>
              <div className="mt-7 sm:mt-8">
                <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${index % 2 === 0 ? 'text-cyan' : 'text-charcoal/45'}`}>Includes</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {service.includes.map((item) => (
                    <div
                      key={item}
                      className={index % 2 === 0 ? 'rounded-2xl border border-cyan/15 bg-white/5 p-4 text-sm text-white sm:text-base' : 'rounded-2xl border border-black/5 bg-white p-4 text-sm text-charcoal shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:text-base'}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal index={1} className={`relative order-first min-h-[240px] overflow-hidden rounded-[1.5rem] border shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px] ${index % 2 === 0 ? 'border-cyan/20' : 'border-black/5'} ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
              <Image src={service.image} alt={service.alt} fill className="object-cover" />
              <div className={`absolute inset-0 ${index % 2 === 0 ? 'bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10' : 'bg-gradient-to-t from-[#0B1F3B]/50 via-transparent to-transparent'}`} />
            </ScrollReveal>
          </div>
        </section>
      ))}

      <section className="py-12 md:py-24" style={{ background: 'linear-gradient(135deg, #111827 0%, #0B1F3B 65%, #1b2434 100%)' }}>
        <div className="container-shell">
          <ScrollReveal className="rounded-[1.5rem] border border-amber/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.02))] px-5 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:px-8 sm:py-10 md:rounded-[2rem] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Start with clarity</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Start With an AI Audit</h2>
            <p className="mt-4 max-w-3xl text-base text-white/72 sm:mt-5 sm:text-lg">
              Before investing in AI, understand where it actually delivers ROI.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.32)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book Your Consultation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
