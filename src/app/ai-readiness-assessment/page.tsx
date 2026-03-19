import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'AI Readiness Assessment | BitDepth AI Consulting',
  description: 'Explore the BitDepth AI Readiness Assessment framework for scoring operational, data, and implementation readiness before committing to AI projects.',
  alternates: {
    canonical: '/ai-readiness-assessment'
  },
  openGraph: {
    title: 'AI Readiness Assessment | BitDepth AI Consulting',
    description: 'Explore the BitDepth AI Readiness Assessment framework for evaluating operational and implementation readiness.',
    url: '/ai-readiness-assessment',
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
    title: 'AI Readiness Assessment | BitDepth AI Consulting',
    description: 'Explore the BitDepth AI Readiness Assessment framework for evaluating operational and implementation readiness.',
    images: ['/images/Social Media Profile Card.webp']
  }
};

export default function AIReadinessAssessmentPage() {
  return (
    <PageShell simplifiedHeader>
      <section className="section-navy-soft section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Assessment"
              title="AI Readiness Assessment"
              description="This placeholder page is ready for the free assessment experience referenced on the homepage CTA."
              theme="dark"
            />
          </ScrollReveal>
          <ScrollReveal className="mt-10" index={1}>
            <div className="surface-card-dark p-6 sm:p-8 md:p-10">
              <p className="text-white/75">
                Add the final assessment flow here to score businesses across five operational pillars without requiring an email to begin.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
