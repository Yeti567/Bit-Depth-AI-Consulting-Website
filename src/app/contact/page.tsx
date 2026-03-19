import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { contactDetails } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'Contact BitDepth AI Consulting | Book Your AI Audit',
  description: 'Contact BitDepth AI Consulting to book your AI Opportunity Audit, request a discovery call, or discuss vendor-neutral AI advisory for your business.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact BitDepth AI Consulting | Book Your AI Audit',
    description: 'Contact BitDepth AI Consulting to book your AI Opportunity Audit or request a discovery call.',
    url: '/contact',
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
    title: 'Contact BitDepth AI Consulting | Book Your AI Audit',
    description: 'Contact BitDepth AI Consulting to book your AI Opportunity Audit or request a discovery call.',
    images: ['/images/Social Media Profile Card.webp']
  }
};

export default function ContactPage() {
  return (
    <PageShell simplifiedHeader>
      <section className="section-navy-soft section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Contact"
              title="Book Your AI Opportunity Audit"
              description="Use this placeholder contact page to route booking requests until the final dedicated booking experience is implemented."
              theme="dark"
            />
            <div className="mt-8 space-y-3 text-white/70">
              <p>{contactDetails.location}</p>
              <p>
                <Link href={`mailto:${contactDetails.email}`} className="transition hover:text-cyan">
                  {contactDetails.email}
                </Link>
              </p>
              <p>
                <Link href={`tel:${contactDetails.phone.replace(/[^\d+]/g, '')}`} className="transition hover:text-cyan">
                  {contactDetails.phone}
                </Link>
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="surface-card-dark p-6 sm:p-8" index={1}>
            <form className="grid gap-5">
              <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" type="text" placeholder="Your name" />
              <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" type="email" placeholder="Email address" />
              <input className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" type="text" placeholder="Company" />
              <textarea className="min-h-32 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-white outline-none focus:border-cyan" placeholder="Tell us a bit about what you want to evaluate." />
              <button type="submit" className="btn-primary w-full sm:w-fit">Submit Request</button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
