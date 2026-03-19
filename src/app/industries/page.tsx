import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { CtaBanner } from '@/components/ui/cta-banner';
import { industries } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'AI Consulting for Oil and Gas and Manufacturing Industries | BitDepth AI',
  description: 'AI consulting for oil and gas, manufacturing, and industrial mid-market businesses across Canada with vendor-neutral guidance and audit-first implementation planning.',
  alternates: {
    canonical: '/industries'
  },
  openGraph: {
    title: 'AI Consulting for Oil and Gas and Manufacturing Industries | BitDepth AI',
    description: 'Explore BitDepth industry-specific AI consulting for oil and gas, manufacturing, and industrial mid-market businesses across Canada.',
    url: '/industries',
    type: 'website',
    images: [
      {
        url: '/images/Social Media Profile Card.webp',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting for Oil and Gas and Manufacturing Industries | BitDepth AI',
    description: 'Explore BitDepth industry-specific AI consulting for oil and gas and manufacturing businesses across Canada.',
    images: ['/images/Social Media Profile Card.webp']
  }
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <section className="section-navy-soft section-space">
        <div className="container-shell">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Industries"
              title="AI strategy shaped by industrial operating conditions."
              description="BitDepth focuses on sectors where uptime, safety, asset performance, quality, and workflow complexity demand practical implementation decisions."
              theme="dark"
            />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.href} index={index}>
                <Link href={industry.href} className="surface-card-dark block p-8">
                  <span className="industry-pill">{industry.title}</span>
                  <h2 className="mt-5 text-3xl font-bold text-white">{industry.title}</h2>
                  <p className="mt-4 text-white/75">{industry.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                    View industry page <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner
        title="Looking for industry-specific guidance?"
        description="We help leadership teams evaluate AI opportunities within the constraints of their actual operating environment, systems, and risk profile."
      />
    </PageShell>
  );
}
