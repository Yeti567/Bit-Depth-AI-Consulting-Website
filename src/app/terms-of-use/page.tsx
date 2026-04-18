import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Terms of Use | BitDepth AI Consulting',
  description: 'Review the standard terms that govern use of the BitDepth AI Consulting website and content.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/terms-of-use'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Terms of Use | BitDepth AI Consulting',
    description: 'Review the terms and conditions for using the BitDepth AI Consulting website.',
    url: 'https://bitdepthaiconsulting.com/terms-of-use',
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
    title: 'Terms of Use | BitDepth AI Consulting',
    description: 'Review the terms and conditions for using the BitDepth AI Consulting website.',
    images: ['/images/Social Media Profile Card.webp']
  }
};

export default function TermsOfUsePage() {
  return (
    <PageShell>
      <section className="section-light-grid section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Legal"
              title="Terms of Use"
              description="These Terms of Use govern your access to and use of the BitDepth AI Consulting Ltd. website."
            />
          </ScrollReveal>

          <ScrollReveal className="mt-10" index={1}>
            <div className="surface-card p-6 sm:p-8 md:p-10">
              <div className="space-y-8 text-charcoal/80">
                <p>Effective Date: March 23, 2026</p>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">1. Acceptance of Terms</h2>
                  <p>
                    By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this website.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">2. Website Purpose</h2>
                  <p>
                    This website is provided for informational and business development purposes, including describing services and enabling contact or scheduling.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">3. No Professional Reliance</h2>
                  <p>
                    Content on this website is general information and does not constitute legal, financial, or professional advice. You should seek independent advice for decisions specific to your circumstances.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">4. Intellectual Property</h2>
                  <p>
                    All website content, including text, graphics, branding, and design elements, is owned by or licensed to BitDepth AI Consulting Ltd. and protected by applicable intellectual property laws.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">5. Permitted Use</h2>
                  <p>You may use this website for lawful personal or business purposes. You agree not to:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Use the website in violation of any law or regulation.</li>
                    <li>Attempt to disrupt, damage, or gain unauthorized access to systems or data.</li>
                    <li>Copy, scrape, or republish substantial website content without written permission.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">6. Third-Party Links</h2>
                  <p>
                    This website may contain links to third-party websites or tools. We are not responsible for third-party content, practices, or availability.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">7. Disclaimer of Warranties</h2>
                  <p>
                    This website is provided on an “as is” and “as available” basis without warranties of any kind, express or implied, to the fullest extent permitted by law.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">8. Limitation of Liability</h2>
                  <p>
                    To the fullest extent permitted by law, BitDepth AI Consulting Ltd. is not liable for indirect, incidental, consequential, or special damages arising from use of this website.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">9. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless BitDepth AI Consulting Ltd. from claims arising from your misuse of the website or violation of these Terms of Use.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">10. Governing Law</h2>
                  <p>
                    These Terms of Use are governed by the laws of British Columbia and the applicable laws of Canada, without regard to conflict of law principles.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">11. Changes to Terms</h2>
                  <p>
                    We may update these Terms of Use from time to time. Updates are effective when posted on this page with a revised effective date.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">12. Contact</h2>
                  <p>
                    For questions about these Terms of Use, contact:
                  </p>
                  <p>
                    BitDepth AI Consulting Ltd.<br />
                    Email: blake@bitdepthaiconsulting.com
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
