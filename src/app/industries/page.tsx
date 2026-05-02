import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Industries We Serve | Bit Depth AI Consulting',
  description:
    'Built for Canadian field service businesses. HVAC and plumbing, electrical, roofing and ICI construction, field services, professional services, and the COR Pathway crossover.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries' },
  openGraph: {
    title: 'Industries We Serve | Bit Depth AI Consulting',
    description:
      'Built for Canadian field service businesses. HVAC and plumbing, electrical, roofing and ICI construction, field services, professional services, and the COR Pathway crossover.',
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
    title: 'Industries We Serve | Bit Depth AI Consulting',
    description:
      'Built for Canadian field service businesses. HVAC, electrical, roofing and ICI, field services, professional services, COR Pathway.',
    images: ['/images/og-industries.jpg']
  }
};

const industries = [
  {
    title: 'HVAC and Plumbing',
    href: '/industries/hvac-plumbing',
    image: '/images/hero-industry-hvac-plumbing.webp',
    imageAlt: 'Residential HVAC technician beside an outdoor air conditioner unit',
    summary:
      'Residential HVAC and plumbing is where missed calls hurt the most. One recovered emergency job pays for our service for the year.'
  },
  {
    title: 'Electrical Contractors',
    href: '/industries/electrical',
    image: '/images/hero-industry-electrical.webp',
    imageAlt: 'Electrician in a hi-vis vest with a clipboard at a residential job site',
    summary:
      'ESA notifications, permits, and apprentice hours should not live in three spreadsheets the office manager rebuilds every Monday.'
  },
  {
    title: 'Roofing and ICI Construction',
    href: '/industries/roofing-ici-construction',
    image: '/images/hero-industry-roofing-construction.webp',
    imageAlt: 'Flat commercial rooftop in Ontario at late afternoon',
    summary:
      'If you cannot bid Toronto, Metrolinx, or Infrastructure Ontario, you cannot grow. We automate the back office around your COR readiness.'
  },
  {
    title: 'General Field Services',
    href: '/industries/field-services',
    image: '/images/hero-industry-field-services.webp',
    imageAlt: 'Field service technician beside a pickup truck on a rural Ontario road',
    summary:
      'Pest, restoration, and commercial cleaning live and die by renewals and route density. We protect both without adding admin headcount.'
  },
  {
    title: 'Professional Services',
    href: '/industries/professional-services',
    image: '/images/hero-industry-professional-services.webp',
    imageAlt: 'Empty professional desk in a Canadian office with closed laptop and notebook',
    summary:
      'AI for law firms, accounting practices, and brokerages that respects confidentiality, regulatory restrictions, and trust accounting.'
  },
  {
    title: 'COR Pathway',
    href: '/industries/cor-pathway',
    image: '/images/hero-cor-pathway-construction.webp',
    imageAlt: 'Construction project manager on an Ontario ICI commercial site',
    summary:
      'COR Pathway is a sister product. If COR is your primary problem, start there. If it is one piece of a bigger picture, start with the audit.'
  }
];

export default function IndustriesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Industries we serve</p>
            <h1 className="mt-6">Built for Canadian field service businesses.</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              Most of our work is with trades, contractors, and field service operators between
              10 and 100 employees. We also serve professional services firms (legal, accounting,
              brokerages) on referral. Pick your industry below to see what we typically find and
              what we typically build.
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
        </div>
      </section>

      {/* Six-card grid */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} index={index}>
                <Link
                  href={industry.href}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--color-border)] bg-white transition hover:border-[var(--color-cyan)]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-[var(--color-navy)] group-hover:text-[var(--color-cyan)]">
                      {industry.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-[var(--color-slate)]">{industry.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-cyan)]">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Do not see your industry</span>
            <h2 className="mt-6 text-white">If your business runs on operations, we can help.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              If your business runs on operations, people, and data, there is almost certainly an
              AI opportunity inside it. Book a discovery call and we will tell you honestly whether
              we can help.
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
