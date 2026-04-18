import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Privacy Policy | BitDepth AI Consulting',
  description: 'Review the BitDepth AI Consulting privacy policy and our approach to collecting, using, and protecting personal information.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/privacy-policy'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: 'Privacy Policy | BitDepth AI Consulting',
    description: 'Review the BitDepth AI Consulting privacy policy and our approach to handling personal information.',
    url: 'https://bitdepthaiconsulting.com/privacy-policy',
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
              description="This Privacy Policy describes how BitDepth AI Consulting Ltd. collects, uses, and protects personal information when you use this website."
            />
          </ScrollReveal>
          <ScrollReveal className="mt-10" index={1}>
            <div className="surface-card p-6 sm:p-8 md:p-10">
              <div className="space-y-8 text-charcoal/80">
                <p>
                  Effective Date: March 23, 2026
                </p>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">1. Who We Are</h2>
                  <p>
                    BitDepth AI Consulting Ltd. (“BitDepth,” “we,” “our,” or “us”) provides consulting services and educational content through this website.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">2. Information We Collect</h2>
                  <p>We may collect the following categories of information:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Contact details you submit (such as name, email, phone number, and company name).</li>
                    <li>Inquiry details you provide through forms, bookings, or direct messages.</li>
                    <li>Technical usage information (such as IP address, browser type, device data, pages visited, and referral source).</li>
                    <li>Scheduling information submitted through third-party booking platforms (for example, Calendly).</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">3. How We Use Information</h2>
                  <p>We use collected information to:</p>
                  <ul className="list-disc space-y-2 pl-5">
                    <li>Respond to inquiries and provide requested services.</li>
                    <li>Schedule and manage discovery calls and consultations.</li>
                    <li>Improve website performance, usability, and content quality.</li>
                    <li>Maintain website security and prevent misuse.</li>
                    <li>Comply with legal obligations.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">4. Legal Basis and Consent</h2>
                  <p>
                    Where required, we process personal information based on your consent, our legitimate business interests, contractual necessity, or legal obligations.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">5. Cookies and Analytics</h2>
                  <p>
                    This website may use cookies and similar technologies to understand usage patterns, improve functionality, and measure campaign performance. You can control cookies through your browser settings.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">6. Third-Party Services</h2>
                  <p>
                    We may use trusted third-party services (such as website hosting, analytics tools, and scheduling platforms). These providers process information on our behalf or as independent controllers under their own policies.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">7. Data Sharing</h2>
                  <p>
                    We do not sell personal information. We may share information with service providers that help operate our business, or when required by law.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">8. Data Retention</h2>
                  <p>
                    We retain personal information only as long as needed for the purposes described in this policy, including legal, operational, and record-keeping requirements.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">9. Security</h2>
                  <p>
                    We use reasonable administrative, technical, and organizational safeguards to protect personal information. No method of transmission or storage is fully guaranteed to be secure.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">10. Your Rights</h2>
                  <p>
                    Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the processing of your personal information. To submit a request, contact us using the details below.
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">11. Contact</h2>
                  <p>
                    If you have questions about this Privacy Policy or your personal information, contact:
                  </p>
                  <p>
                    BitDepth AI Consulting Ltd.<br />
                    Email: blake@bitdepthaiconsulting.com
                  </p>
                </div>

                <div className="space-y-3">
                  <h2 className="text-2xl font-bold text-navy">12. Changes to This Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. Any updates will be posted on this page with an updated effective date.
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
