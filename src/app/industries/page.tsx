import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, HardHat, Truck, UserCog, Factory, CheckCircle2, BarChart3 } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Industries We Serve | BitDepth AI Consulting',
  description:
    'BitDepth serves Canadian SMBs in trades, construction, field services, professional services, manufacturing, transportation, and oil & gas. Practical AI for operations-driven businesses.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/industries'
  },
  openGraph: {
    title: 'Industries We Serve | BitDepth AI Consulting',
    description:
      'We work with Canadian businesses where operations, people, and data drive results — trades, field services, manufacturing, professional services, logistics, and oil & gas.',
    url: 'https://bitdepthaiconsulting.com/industries',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting industries social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'Industries We Serve | BitDepth AI Consulting',
    description:
      'We work with Canadian businesses where operations, people, and data drive results — trades, field services, manufacturing, professional services, logistics, and oil & gas.',
    images: ['/images/og-industries.jpg']
  }
};

const industries = [
  {
    icon: <HardHat className="h-6 w-6" />,
    title: 'Trades & Construction',
    pain: "You don't know which crews are making money until the year is over. We fix that.",
    href: '/industries/construction'
  },
  {
    icon: <Truck className="h-6 w-6" />,
    title: 'Transportation & Logistics',
    pain: 'Dispatching, driver shortages, fuel costs, and demanding clients. AI helps you manage all of it.',
    href: '/industries/transportation'
  },
  {
    icon: <UserCog className="h-6 w-6" />,
    title: 'Field Services',
    pain: "If the phone isn't getting answered, you're losing jobs. We fix that without hiring anyone.",
    href: '/industries/field-services'
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: 'Oil & Gas Services',
    pain: "Your systems don't talk to each other. Your data is siloed. That costs you more than you think.",
    href: '/industries/oil-gas'
  },
  {
    icon: <Factory className="h-6 w-6" />,
    title: 'Manufacturing',
    pain: 'Predictive maintenance and smarter scheduling — built around what you actually have, not what\'s ideal.',
    href: '/industries/manufacturing'
  },
  {
    icon: <CheckCircle2 className="h-6 w-6" />,
    title: 'Professional Services',
    pain: 'No-shows, scheduling chaos, and document overload. AI handles the admin so you can bill more hours.',
    href: '/industries/professional-services'
  }
];

export default function IndustriesPage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <span className="eyebrow-pill">Industries</span>
            <h1 className="mt-5 text-4xl font-extrabold text-white md:text-6xl">
              We Work With Industries Where Operations, People, and Profit Are Always on the Line
            </h1>
            <p className="mt-5 text-lg text-white/74">
              Every business on this list shares the same core problem — money and time are being lost in places that are hard to see until it&apos;s too late. AI doesn&apos;t fix that by being clever. It fixes it by making the invisible visible: where the profit is leaking, where the bottlenecks are hiding, and where your team is spending time on things a system should be handling.
            </p>
            <p className="mt-4 text-lg text-white/74">
              We&apos;ve worked in some of these industries firsthand. We understand the pressure. And we know that a $5,000 audit that finds a $50,000 profit leak pays for itself before the ink is dry.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/industries-hero.png" alt="Diverse Canadian business landscape" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} index={index} className="card-light p-6 flex flex-col">
                <div className="text-cyan">{industry.icon}</div>
                <h3 className="mt-4 text-2xl font-bold text-[var(--color-navy)]">{industry.title}</h3>
                <p className="mt-3 text-[var(--color-slate)] flex-grow">{industry.pain}</p>
                <Link href={industry.href} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-[var(--color-cyan-dark)] transition-colors">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="section-charcoal section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Don&apos;t See Your Industry?</h2>
            <p className="mt-5 text-lg text-white/70">
              If your business runs on operations, people, and data, there&apos;s almost certainly an AI opportunity inside it. Book a free discovery call and we&apos;ll tell you honestly whether we can help.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
