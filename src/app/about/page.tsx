import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'About BitDepth AI Consulting | Vendor-Neutral AI for Canadian SMBs',
  description:
    'BitDepth AI Consulting Ltd. is a vendor-neutral AI advisory firm based in British Columbia, Canada. We audit first, recommend what fits, and deliver real operational outcomes.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/about'
  },
  openGraph: {
    title: 'About BitDepth AI Consulting',
    description:
      'Built for Canadian SMBs that were being underserved by enterprise consultancies and under-qualified freelancers. BitDepth delivers enterprise-quality AI thinking at mid-market prices.',
    url: 'https://bitdepthaiconsulting.com/about',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting about social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'About BitDepth AI Consulting',
    description:
      'Built for Canadian SMBs that were being underserved by enterprise consultancies and under-qualified freelancers. BitDepth delivers enterprise-quality AI thinking at mid-market prices.',
    images: ['/images/og-about.jpg']
  }
};

const pillars = [
  {
    title: 'Audit First',
    description: 'Every engagement starts with structured discovery so we can identify high-impact opportunities before any build begins.'
  },
  {
    title: 'Recommend What Fits',
    description: 'We are vendor-neutral. We recommend the right tools for your environment, budget, and operational reality.'
  },
  {
    title: 'Deliver Outcomes',
    description: 'We measure success in time saved, costs reduced, and decisions improved. Not in slides or software licenses.'
  }
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold text-white md:text-6xl">
              We Built BitDepth to Solve a Real Problem in the Canadian Market
            </h1>
            <p className="mt-5 text-lg text-white/74">
              Canadian small and mid-sized businesses were being underserved. Enterprise consultancies charged $50,000 minimums. Freelancers lacked methodology and accountability. Digital agencies pushed marketing tools when what businesses needed was operational improvement. BitDepth was built to fill that gap.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[300px] overflow-hidden rounded-2xl border border-[var(--color-border)] sm:min-h-[360px] lg:min-h-[520px]">
            <Image src="/images/about-hero.webp" alt="Industrial about hero" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <blockquote className="rounded-2xl border-l-4 border-cyan bg-white p-7 text-2xl font-semibold leading-tight text-[var(--color-navy)] md:text-4xl">
              &quot;We don&apos;t enter engagements to sell software or justify a predetermined product. We work with our clients to identify the best possible solutions for their situation.&quot;
            </blockquote>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              Mission: We sell outcomes, not software. Our success is measured by the operational improvements our clients achieve.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} index={index} className="card-dark p-6">
                <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-3 text-white/72">{pillar.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold md:text-5xl">Company Credentials</h2>
            <ul className="mt-6 space-y-3 text-lg text-[var(--color-slate)]">
              <li>Vendor-neutral (no software commissions)</li>
              <li>Canadian-owned and operated</li>
              <li>PIPEDA and BC PIPA compliant</li>
              <li>Serving BC Interior, Lower Mainland, and Alberta</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Let&apos;s Talk About Your Business</h2>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Free Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
