import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Privacy Policy | BitDepth AI Consulting',
  description: 'Review the BitDepth AI Consulting privacy policy and our approach to collecting, using, and protecting personal information.',
  alternates: {
    canonical: '/privacy-policy'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Privacy Policy | BitDepth AI Consulting',
    description: 'Review the BitDepth AI Consulting privacy policy and our approach to handling personal information.',
    url: '/privacy-policy',
    type: 'article',
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
    title: 'Privacy Policy | BitDepth AI Consulting',
    description: 'Review the BitDepth AI Consulting privacy policy and our approach to handling personal information.',
    images: ['/images/Social Media Profile Card.webp']
  }
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="section-light-grid section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Privacy"
              title="Privacy Policy"
              description="This placeholder privacy policy page is ready to be replaced with your finalized legal copy."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-10" index={1}>
            <div className="surface-card p-6 sm:p-8 md:p-10">
              <p className="text-charcoal/80">
                BitDepth AI Consulting Ltd. respects your privacy and is committed to protecting personal information collected through this website. Replace this section with your approved privacy policy covering collection, use, storage, and contact procedures.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
