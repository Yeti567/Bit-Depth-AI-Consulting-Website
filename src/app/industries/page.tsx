import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting by Industry | Trades, Oil & Gas, Trucking | Bit Depth AI',
  description:
    'Industry-specific AI consulting for trades, construction, transportation, field services, oil and gas, manufacturing, and professional services across Canada.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries' },
  openGraph: {
    title: 'AI Consulting by Industry | Trades, Oil & Gas, Trucking | Bit Depth AI',
    description:
      'Industry-specific AI consulting for trades, construction, transportation, field services, oil and gas, manufacturing, and professional services across Canada.',
    url: 'https://bitdepthaiconsulting.com/industries',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'Bit Depth AI Consulting industries'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting by Industry | Trades, Oil & Gas, Trucking | Bit Depth AI',
    description:
      'Industry-specific AI consulting for trades, construction, transportation, field services, oil and gas, manufacturing, and professional services across Canada.',
    images: ['/images/og-industries.jpg']
  }
};

const industries = [
  {
    title: 'Trades & Construction',
    pain:
      "You don't know which crews are making money until the year is over. We fix that.",
    href: '/industries/construction'
  },
  {
    title: 'Transportation & Logistics',
    pain:
      'Dispatching, driver shortages, fuel costs, and demanding clients. AI helps you manage all of it.',
    href: '/industries/transportation'
  },
  {
    title: 'Field Services',
    pain:
      "If the phone isn't getting answered, you're losing jobs. We fix that without hiring anyone.",
    href: '/industries/field-services'
  },
  {
    title: 'Oil & Gas Services',
    pain:
      "Your systems don't talk to each other. Your data is siloed. That costs you more than you think.",
    href: '/industries/oil-and-gas'
  },
  {
    title: 'Manufacturing',
    pain:
      "Predictive maintenance and smarter scheduling, built around what you actually have, not what's ideal.",
    href: '/industries/manufacturing'
  },
  {
    title: 'Professional Services',
    pain:
      'No-shows, scheduling chaos, and document overload. AI handles the admin so you can bill more hours.',
    href: '/industries/professional-services'
  }
];

export default function IndustriesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Industries</p>
            <h1 className="mt-6 max-w-2xl">
              Where operations, people, and profit are always on the line.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Every business on this list shares the same core problem: money and time are being
              lost in places that are hard to see until it&apos;s too late. AI doesn&apos;t fix
              that by being clever. It fixes it by making the invisible visible.
            </p>
            <p className="mt-4 max-w-xl text-lg text-[var(--color-slate)]">
              We&apos;ve worked in some of these industries firsthand. We understand the pressure.
              And we know that a <span className="tabular">$5,000</span> audit that finds a{' '}
              <span className="tabular">$50,000</span> profit leak pays for itself before the ink
              is dry.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a discovery call
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal
            index={1}
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]"
          >
            <Image
              src="/images/industries-hero.png"
              alt="Canadian businesses across multiple industries"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Industry list */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Where we work</p>
            <h2 className="mt-6">Six industries. One starting point.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Pick the closest match to your business. The audit fits all of them.
            </p>
          </ScrollReveal>
          <ul className="mt-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} index={index}>
                <li>
                  <Link
                    href={industry.href}
                    className="group grid gap-3 py-7 md:grid-cols-[1fr,2fr,auto] md:items-baseline md:gap-10"
                  >
                    <h3 className="text-[var(--color-navy)] group-hover:text-[var(--color-cyan)]">
                      {industry.title}
                    </h3>
                    <p className="text-[var(--color-slate)]">{industry.pain}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-cyan)] md:justify-end">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Don&apos;t see your industry</span>
            <h2 className="mt-6 text-white">If your business runs on operations, we can help.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              If your business runs on operations, people, and data, there&apos;s almost certainly
              an AI opportunity inside it. Book a discovery call and we&apos;ll tell you honestly
              whether we can help.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a discovery call
              </Link>
              <Link href="/ai-audit" className="btn-outline">
                Book an AI Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
