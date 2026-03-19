import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { CtaBanner } from '@/components/ui/cta-banner';
import { resources } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'AI Resources and Insights for Canadian Industry | BitDepth AI',
  description: 'Explore BitDepth resources on AI strategy, vendor-neutral software selection, implementation planning, and operational AI use cases for Canadian industrial businesses.',
  alternates: {
    canonical: '/resources'
  },
  openGraph: {
    title: 'AI Resources and Insights for Canadian Industry | BitDepth AI',
    description: 'Explore BitDepth resources on AI strategy, vendor-neutral selection, implementation planning, and industrial AI use cases.',
    url: '/resources',
    type: 'website',
    images: [
      {
        url: '/images/Blog Resources Header.webp',
        width: 1200,
        height: 630,
        alt: 'Dark editorial-style AI resources header with industrial technology visuals'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Resources and Insights for Canadian Industry | BitDepth AI',
    description: 'Explore BitDepth resources on AI strategy, vendor-neutral selection, implementation planning, and industrial AI use cases.',
    images: ['/images/Blog Resources Header.webp']
  }
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <section className="section-navy-soft section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-center">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Resources"
              title="A clean content hub prepared for future SEO growth."
              description="This resources section is structured to support future articles, guides, case studies, and industry-specific thought leadership content."
              theme="dark"
            />
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[240px] overflow-hidden rounded-[2rem] border border-cyan/20 shadow-dark sm:min-h-[320px]">
            <Image src="/images/Blog Resources Header.webp" alt="Editorial-style resources banner representing AI strategy guides and industry insights" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
          </ScrollReveal>
        </div>
      </section>
      <section className="section-dark section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <ScrollReveal key={resource.title} index={index}>
              <article className="surface-card-dark p-6 sm:p-8">
                <p className="eyebrow">{resource.category}</p>
                <h2 className="mt-4 text-2xl font-bold text-white">{resource.title}</h2>
                <p className="mt-4 text-white/75">{resource.description}</p>
                <Link href={resource.href} className="mt-6 inline-flex text-sm font-semibold text-cyan">
                  Coming soon
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <CtaBanner
        title="Need guidance before you build an internal AI content strategy?"
        description="BitDepth can help you clarify your AI positioning, roadmap, and messaging while prioritizing the operational decisions that matter most."
      />
    </PageShell>
  );
}
