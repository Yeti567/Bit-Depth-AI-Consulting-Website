import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Privacy Policy | BitDepth AI Consulting',
  description:
    'Review the BitDepth AI Consulting privacy policy and our approach to collecting, using, and protecting personal information.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/privacy-policy' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Privacy Policy | BitDepth AI Consulting',
    description:
      'Review the BitDepth AI Consulting privacy policy and our approach to handling personal information.',
    url: 'https://bitdepthaiconsulting.com/privacy-policy',
    type: 'article',
    images: [
      {
        url: '/images/Social Media Profile Card.webp',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | BitDepth AI Consulting',
    description:
      'Review the BitDepth AI Consulting privacy policy and our approach to handling personal information.',
    images: ['/images/Social Media Profile Card.webp']
  }
};

const sections = [
  {
    title: 'Who we are.',
    body: (
      <p>
        BitDepth AI Consulting Ltd. (&ldquo;BitDepth,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo;
        or &ldquo;us&rdquo;) provides consulting services and educational content through this
        website.
      </p>
    )
  },
  {
    title: 'Information we collect.',
    body: (
      <>
        <p>We may collect the following categories of information:</p>
        <ul className="mt-4 space-y-2 pl-5 [list-style:disc] marker:text-[var(--color-slate)]">
          <li>Contact details you submit (name, email, phone number, and company name).</li>
          <li>Inquiry details you provide through forms, bookings, or direct messages.</li>
          <li>
            Technical usage information (IP address, browser type, device data, pages visited, and
            referral source).
          </li>
          <li>
            Scheduling information submitted through third-party booking platforms (for example,
            Calendly).
          </li>
        </ul>
      </>
    )
  },
  {
    title: 'How we use information.',
    body: (
      <>
        <p>We use collected information to:</p>
        <ul className="mt-4 space-y-2 pl-5 [list-style:disc] marker:text-[var(--color-slate)]">
          <li>Respond to inquiries and provide requested services.</li>
          <li>Schedule and manage discovery calls and consultations.</li>
          <li>Improve website performance, usability, and content quality.</li>
          <li>Maintain website security and prevent misuse.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </>
    )
  },
  {
    title: 'Legal basis and consent.',
    body: (
      <p>
        Where required, we process personal information based on your consent, our legitimate
        business interests, contractual necessity, or legal obligations.
      </p>
    )
  },
  {
    title: 'Cookies and analytics.',
    body: (
      <p>
        This website may use cookies and similar technologies to understand usage patterns,
        improve functionality, and measure campaign performance. You can control cookies through
        your browser settings.
      </p>
    )
  },
  {
    title: 'Third-party services.',
    body: (
      <p>
        We may use trusted third-party services such as website hosting, analytics tools, and
        scheduling platforms. These providers process information on our behalf or as independent
        controllers under their own policies.
      </p>
    )
  },
  {
    title: 'Data sharing.',
    body: (
      <p>
        We do not sell personal information. We may share information with service providers that
        help operate our business, or when required by law.
      </p>
    )
  },
  {
    title: 'Data retention.',
    body: (
      <p>
        We retain personal information only as long as needed for the purposes described in this
        policy, including legal, operational, and record-keeping requirements.
      </p>
    )
  },
  {
    title: 'Security.',
    body: (
      <p>
        We use reasonable administrative, technical, and organizational safeguards to protect
        personal information. No method of transmission or storage is fully guaranteed to be
        secure.
      </p>
    )
  },
  {
    title: 'Your rights.',
    body: (
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, delete, or
        restrict the processing of your personal information. To submit a request, contact us
        using the details below.
      </p>
    )
  },
  {
    title: 'Contact.',
    body: (
      <p>
        BitDepth AI Consulting Ltd. &nbsp;·&nbsp; Email:{' '}
        <a
          href="mailto:blake@bitdepthaiconsulting.com"
          className="text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
        >
          blake@bitdepthaiconsulting.com
        </a>
      </p>
    )
  },
  {
    title: 'Changes to this policy.',
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any updates will be posted on this
        page with an updated effective date.
      </p>
    )
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Legal</p>
            <h1 className="mt-6">Privacy policy.</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              How BitDepth AI Consulting Ltd. collects, uses, and protects personal information
              when you use this website.
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
