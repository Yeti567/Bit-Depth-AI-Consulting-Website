import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Terms of Use | Bit Depth AI Consulting',
  description:
    'Review the standard terms that govern use of the Bit Depth AI Consulting website and content.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/terms-of-use' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Terms of Use | Bit Depth AI Consulting',
    description: 'Review the terms and conditions for using the Bit Depth AI Consulting website.',
    url: 'https://bitdepthaiconsulting.com/terms-of-use',
    type: 'article',
    images: [
      {
        url: '/images/Social Media Profile Card.webp',
        width: 1200,
        height: 630,
        alt: 'Bit Depth AI Consulting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Use | Bit Depth AI Consulting',
    description: 'Review the terms and conditions for using the Bit Depth AI Consulting website.',
    images: ['/images/Social Media Profile Card.webp']
  }
};

const sections = [
  {
    title: 'Acceptance of terms.',
    body: (
      <p>
        By accessing or using this website, you agree to be bound by these Terms of Use. If you do
        not agree, please do not use this website.
      </p>
    )
  },
  {
    title: 'Website purpose.',
    body: (
      <p>
        This website is provided for informational and business development purposes, including
        describing services and enabling contact or scheduling.
      </p>
    )
  },
  {
    title: 'No professional reliance.',
    body: (
      <p>
        Content on this website is general information and does not constitute legal, financial,
        or professional advice. You should seek independent advice for decisions specific to your
        circumstances.
      </p>
    )
  },
  {
    title: 'Intellectual property.',
    body: (
      <p>
        All website content, including text, graphics, branding, and design elements, is owned by
        or licensed to Bit Depth AI Consulting Ltd. and protected by applicable intellectual
        property laws.
      </p>
    )
  },
  {
    title: 'Permitted use.',
    body: (
      <>
        <p>You may use this website for lawful personal or business purposes. You agree not to:</p>
        <ul className="mt-4 space-y-2 pl-5 [list-style:disc] marker:text-[var(--color-slate)]">
          <li>Use the website in violation of any law or regulation.</li>
          <li>Attempt to disrupt, damage, or gain unauthorized access to systems or data.</li>
          <li>Copy, scrape, or republish substantial website content without written permission.</li>
        </ul>
      </>
    )
  },
  {
    title: 'Third-party links.',
    body: (
      <p>
        This website may contain links to third-party websites or tools. We are not responsible
        for third-party content, practices, or availability.
      </p>
    )
  },
  {
    title: 'Disclaimer of warranties.',
    body: (
      <p>
        This website is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis
        without warranties of any kind, express or implied, to the fullest extent permitted by
        law.
      </p>
    )
  },
  {
    title: 'Limitation of liability.',
    body: (
      <p>
        To the fullest extent permitted by law, Bit Depth AI Consulting Ltd. is not liable for
        indirect, incidental, consequential, or special damages arising from use of this website.
      </p>
    )
  },
  {
    title: 'Indemnification.',
    body: (
      <p>
        You agree to indemnify and hold harmless Bit Depth AI Consulting Ltd. from claims arising
        from your misuse of the website or violation of these Terms of Use.
      </p>
    )
  },
  {
    title: 'Governing law.',
    body: (
      <p>
        These Terms of Use are governed by the laws of British Columbia and the applicable laws of
        Canada, without regard to conflict of law principles.
      </p>
    )
  },
  {
    title: 'Changes to terms.',
    body: (
      <p>
        We may update these Terms of Use from time to time. Updates are effective when posted on
        this page with a revised effective date.
      </p>
    )
  },
  {
    title: 'Contact.',
    body: (
      <p>
        Bit Depth AI Consulting Ltd. &nbsp;·&nbsp; Email:{' '}
        <a
          href="mailto:blake@bitdepthaiconsulting.com"
          className="text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
        >
          blake@bitdepthaiconsulting.com
        </a>
      </p>
    )
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function TermsOfUsePage() {
  return (
    <PageShell>
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Legal</p>
            <h1 className="mt-6">Terms of use.</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              These terms govern your access to and use of the Bit Depth AI Consulting Ltd.
              website.
            </p>
            <p className="mt-4 text-sm text-[var(--color-slate)]">Effective date: March 23, 2026.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-tight section-rule">
        <div className="container-shell max-w-3xl">
          <ol className="space-y-12">
            {sections.map((section, index) => (
              <ScrollReveal key={section.title} index={index}>
                <li className="flex gap-5">
                  <span className="font-mono text-sm tabular text-[var(--color-cyan)] pt-1">
                    {pad2(index + 1)}
                  </span>
                  <div className="space-y-3 text-[var(--color-charcoal)]">
                    <h2 className="text-[var(--color-navy)]">{section.title}</h2>
                    {section.body}
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>
    </PageShell>
  );
}
