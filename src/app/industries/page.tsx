import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting for Oil & Gas and Manufacturing',
  description:
    'AI consulting for oil and gas and manufacturing, including machine learning, predictive maintenance, Industrial IoT, and digital transformation strategies built for industrial operations.',
  alternates: {
    canonical: '/industries'
  },
  openGraph: {
    title: 'AI Consulting for Oil & Gas and Manufacturing',
    description:
      'AI consulting for oil and gas and manufacturing, including machine learning, predictive maintenance, Industrial IoT, and digital transformation strategies built for industrial operations.',
    url: '/industries',
    type: 'website',
    images: [
      {
        url: '/images/Industrial harmony at twilight revised.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial energy and manufacturing environments blended in a cinematic composite'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting for Oil & Gas and Manufacturing',
    description:
      'AI consulting for oil and gas and manufacturing operations, from predictive maintenance to smart factory modernization.',
    images: ['/images/Industrial harmony at twilight revised.webp']
  }
};

const overviewPoints = [
  'AI in oil and gas operations',
  'Manufacturing AI consulting and automation',
  'Industrial IoT and connected systems',
  'Data analytics consulting and business intelligence'
];

const oilAndGasUseCases = [
  'Predictive maintenance for pipelines and equipment',
  'AI pipeline monitoring and leak detection',
  'Reservoir modeling and production optimization',
  'Digital twin solutions for asset management'
];

const manufacturingUseCases = [
  'Computer vision quality control and defect detection',
  'Predictive maintenance for production equipment',
  'Smart factory and Industry 4.0 implementation',
  'Supply chain optimization using AI'
];

const capabilityPoints = [
  'Industrial IoT consulting',
  'Data integration and analytics platforms',
  'Enterprise AI solutions',
  'Generative AI for operations and reporting'
];

export default function IndustriesPage() {
  return (
    <PageShell>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_28%)]" />
        <div className="hero-particle left-[9%] top-[18%] h-2 w-2" />
        <div className="hero-particle left-[22%] top-[68%] h-2.5 w-2.5" style={{ animationDelay: '1.1s' }} />
        <div className="hero-particle right-[12%] top-[16%] h-2 w-2" style={{ animationDelay: '2s' }} />
        <div className="hero-particle right-[26%] top-[57%] h-3 w-3" style={{ animationDelay: '3.2s' }} />
        <div className="container-shell relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr,1.02fr] lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">Industry AI Consulting</p>
            <h1 className="mt-5 max-w-3xl text-[2.3rem] font-extrabold leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-[60px]">
              AI Consulting for Oil & Gas and Manufacturing
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-white/72 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl">
              We deliver AI consulting, machine learning solutions, and digital transformation strategies tailored for industrial operations, from oilfield infrastructure to smart factories.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/62 sm:text-lg sm:leading-8">
              Our approach begins with a deep operational audit, identifying high-impact opportunities across predictive maintenance, automation, and data-driven decision-making.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/ai-audit" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Request an AI Audit
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[620px]">
            <Image
              src="/images/Industrial harmony at twilight revised.webp"
              alt="Cinematic industrial composite spanning energy and manufacturing environments"
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

      <section className="section-dark py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr,1fr] lg:items-center lg:gap-12">
          <ScrollReveal index={1} className="relative order-first min-h-[240px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image
              src="/images/Futuristic industrial network connections revised.webp"
              alt="Industrial overview image with connected systems and data overlays"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
          <ScrollReveal>
            <p className="eyebrow">Industry overview</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              AI Solutions Built for Real-World Industrial Environments
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              We specialize in AI consulting for complex, asset-heavy industries where downtime, inefficiency, and data silos cost millions.
            </p>
            <div className="mt-7 sm:mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">Our expertise spans</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {overviewPoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-cyan/15 bg-white/5 p-4 text-sm text-white sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
              We do not push software, we identify the right solution for your operation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr,1fr] lg:items-center lg:gap-12">
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-black/5 shadow-[0_24px_70px_rgba(0,0,0,0.18)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image
              src="/images/Oil refinery at dusk with holographic data revised.webp"
              alt="Oil refinery at dusk with holographic monitoring data"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/55 via-transparent to-transparent" />
          </ScrollReveal>
          <ScrollReveal>
            <p className="eyebrow">Oil &amp; gas</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
              AI Consulting for Oil &amp; Gas
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal/78 sm:mt-5 sm:text-lg sm:leading-8">
              We help energy companies implement AI across upstream, midstream, and downstream operations. Our work in AI in oil and gas combines oil and gas analytics consulting, predictive maintenance oil and gas systems, and digital transformation oil and gas programs that improve reliability and operational visibility.
            </p>
            <div className="mt-7 sm:mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal/45">Use cases</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {oilAndGasUseCases.map((item) => (
                  <div key={item} className="rounded-2xl border border-black/5 bg-white p-4 text-sm text-charcoal shadow-[0_10px_30px_rgba(0,0,0,0.05)] sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">Manufacturing</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Manufacturing AI &amp; Industry 4.0 Solutions
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              We enable manufacturers to transition into smart factory environments through AI and automation. Our manufacturing AI consulting supports industry 4.0 consulting initiatives, smart manufacturing AI programs, and computer vision quality control systems that reduce waste and improve throughput.
            </p>
            <div className="mt-7 sm:mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">Use cases</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {manufacturingUseCases.map((item) => (
                  <div key={item} className="rounded-2xl border border-cyan/15 bg-white/5 p-4 text-sm text-white sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image
              src="/images/Automated manufacturing with inspection data revised.webp"
              alt="Smart factory environment with automated inspection and production data"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy-soft py-12 md:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <p className="eyebrow">Cross-industry capabilities</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Connected Intelligence Across Operations
            </h2>
            <p className="mt-4 text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              Our AI consulting services unify data across systems, enabling real-time visibility, automation, and decision-making across your entire organization. We bring industrial IoT consulting, enterprise AI solutions, and data analytics consulting together in one practical operating model.
            </p>
            <div className="mt-7 sm:mt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">Capabilities</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {capabilityPoints.map((item) => (
                  <div key={item} className="rounded-2xl border border-cyan/15 bg-white/5 p-4 text-sm text-white sm:text-base">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative order-first min-h-[220px] overflow-hidden rounded-[1.5rem] border border-cyan/20 shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-none lg:min-h-[520px]">
            <Image
              src="/images/Futuristic industrial network connections revised.webp"
              alt="Connected intelligence and industrial network systems across operations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#081221] via-transparent to-[#081221]/10" />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0">
          <Image
            src="/images/Industrial harmony at twilight revised.webp"
            alt="Industrial facilities at twilight for the industries call to action"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.88),rgba(11,31,59,0.82),rgba(27,36,52,0.86))]" />
        </div>
        <div className="container-shell">
          <ScrollReveal className="relative rounded-[1.5rem] border border-amber/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.02))] px-5 py-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:px-8 sm:py-10 md:rounded-[2rem] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Start with clarity</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">Start With an AI Audit</h2>
            <p className="mt-4 max-w-3xl text-base text-white/72 sm:mt-5 sm:text-lg">
              Every engagement begins with understanding your business. We identify opportunities, evaluate your data, and present tailored AI solutions aligned with your operational goals.
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
