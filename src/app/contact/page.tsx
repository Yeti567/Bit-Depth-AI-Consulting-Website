import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ContactForm } from '@/components/ui/contact-form';

export const metadata: Metadata = {
  title: 'Contact | BitDepth AI Consulting',
  description:
    'Tell us what is breaking. The fastest way to get help is to book an audit. The second-fastest way is to send a short note. We respond inside one business day.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/contact' },
  openGraph: {
    title: 'Contact BitDepth AI Consulting',
    description:
      'Tell us what is breaking. We respond inside one business day. Serving the GTA, Golden Horseshoe, and across Canada.',
    url: 'https://bitdepthaiconsulting.com/contact',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting contact card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'Contact BitDepth AI Consulting',
    description:
      'Tell us what is breaking. We respond inside one business day.',
    images: ['/images/og-contact.jpg']
  }
};

const regions = [
  'Greater Toronto Area',
  'Golden Horseshoe',
  'BC Interior',
  'Alberta',
  'Remote across Canada'
];

export default function ContactPage() {
  return (
    <PageShell>
      {/* Hero with photo */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-6 max-w-2xl">Tell us what is breaking.</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              The fastest way to get help is to book an audit. The second-fastest way is to send a
              short note describing what is going on. We respond inside one business day.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?topic=audit" className="btn-primary">
                Book an AI Audit
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/hero-contact-audit.webp"
              alt="Two professionals talking at a kitchen table inside a small Canadian business office"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Form + direct contact */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-start">
          <ScrollReveal>
            <p className="eyebrow">Contact form</p>
            <h2 className="mt-6">Send us a short note.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              The more specific you are about what is breaking, the better the first reply will be.
            </p>
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal index={1} className="lg:sticky lg:top-24">
            <p className="eyebrow">Direct contact</p>
            <h2 className="mt-6">Skip the form if you want.</h2>
            <div className="mt-8 space-y-4 text-[var(--color-charcoal)]">
              <p className="text-sm">
                <span className="font-semibold text-[var(--color-navy)]">Email</span>
                <br />
                <Link
                  href="mailto:blake@bitdepthaiconsulting.com"
                  className="text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
                >
                  blake@bitdepthaiconsulting.com
                </Link>
              </p>
              <p className="text-sm">
                <span className="font-semibold text-[var(--color-navy)]">LinkedIn</span>
                <br />
                <Link
                  href="https://www.linkedin.com/company/bitdepth-ai-consulting-ltd"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
                >
                  BitDepth AI Consulting
                </Link>
              </p>
            </div>

            <div className="mt-10 border-t border-[var(--color-border)] pt-6">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Regions served
              </p>
              <ul className="mt-4 space-y-2 text-sm text-[var(--color-charcoal)]">
                {regions.map((region) => (
                  <li key={region}>{region}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 border-t border-[var(--color-border)] pt-6">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Ontario presence
              </p>
              <p className="mt-3 text-sm text-[var(--color-charcoal)]">
                Virtual office in the Greater Toronto Area, with quarterly in-person visits
                across the Golden Horseshoe and southern Ontario for client engagements.
              </p>
            </div>

            <p className="mt-8 text-sm text-[var(--color-slate)]">
              No sales pressure. If AI is not the right move for your business right now, we will
              tell you.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
