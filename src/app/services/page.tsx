import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Services | Bit Depth AI Consulting',
  description:
    'Five offers, one methodology. Audit, Missed Call Text Back, AI Implementation, Workflow Automation, and Custom AI Workers for Canadian trades and contractors.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services' },
  openGraph: {
    title: 'Services | Bit Depth AI Consulting',
    description:
      'Five offers, one methodology. Audit, Missed Call Text Back, AI Implementation, Workflow Automation, and Custom AI Workers for Canadian trades and contractors.',
    url: 'https://bitdepthaiconsulting.com/services',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      { url: '/images/og-services.jpg', width: 1200, height: 630, alt: 'Bit Depth AI Consulting services' }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'Services | Bit Depth AI Consulting',
    description:
      'Five offers, one methodology. Trades-led admin automation for Canadian contractors.',
    images: ['/images/og-services.jpg']
  }
};

const services = [
  {
    title: 'AI Opportunity Audit',
    href: '/services/ai-audit',
    description:
      'Structured discovery of where AI will save you the most time and money. Includes roadmap and ROI estimates.',
    price: 'From $5,000'
  },
  {
    title: 'Missed Call Text Back',
    href: '/services/missed-call-text-back',
    description:
      'AI receptionist plus auto-text recovery for every missed call. Canadian compliance built in.',
    price: 'From $497/mo'
  },
  {
    title: 'Workflow Automation',
    href: '/services/workflow-automation',
    description:
      'Automate repetitive processes across invoicing, scheduling, onboarding, and more.',
    price: 'From $5,000'
  },
  {
    title: 'Custom AI Workers',
    href: '/services/custom-ai-workers',
    description:
      'Purpose-built AI agents that perform defined job functions inside your business.',
    price: 'From $10,000'
  },
  {
    title: 'AI Implementation',
    href: '/services/ai-implementation',
    description:
      'Multi-phase AI implementation strategy aligned to your business goals and budget.',
    price: 'From $12,000'
  }
];

const methodology = [
  {
    title: 'Diagnose',
    description:
      'A structured AI Opportunity Audit across operations, data, and tech stack. We map your processes and identify where AI will deliver the highest ROI for your specific business.'
  },
  {
    title: 'Design',
    description:
      'A prioritized roadmap. Short-term quick wins and longer-term strategic initiatives, with realistic ROI estimates for each.'
  },
  {
    title: 'Implement',
    description:
      'We build and deploy the right solution. Automations, AI workers, dashboards, or integrations. No theatre, no wasted budget.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-6 max-w-2xl">Five offers, one methodology.</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              We start with an audit. Everything else either comes out of the audit or feeds back
              into it. Pick where you are and we will tell you the right next step.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a discovery call
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/hero-services-audit-kitchen-table.webp"
              alt="Tablet and notebook on a wooden kitchen table beside a coffee mug"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Services table */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">The line up</p>
            <h2 className="mt-6">Pick where you are.</h2>
          </ScrollReveal>
          <div className="mt-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                index={index}
                className="grid gap-4 py-7 md:grid-cols-[1fr,2fr,auto] md:items-baseline md:gap-10"
              >
                <Link href={service.href} className="text-[var(--color-navy)] hover:text-[var(--color-cyan)]">
                  <h3>{service.title}</h3>
                </Link>
                <p className="text-[var(--color-slate)]">{service.description}</p>
                <div className="flex items-baseline justify-between gap-6 md:justify-end">
                  <p className="tabular text-sm font-semibold text-[var(--color-navy)]">
                    {service.price}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
                  >
                    Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Methodology</p>
            <h2 className="mt-6">Diagnose. Design. Implement.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {methodology.map((step, index) => (
              <ScrollReveal key={step.title} index={index}>
                <p className="font-mono text-sm text-[var(--color-cyan)] tabular">{pad2(index + 1)}</p>
                <h3 className="mt-3 text-[var(--color-navy)]">{step.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Credit Guarantee */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">The audit credit guarantee</p>
            <h2 className="mt-6">Your audit pays for itself. Guaranteed.</h2>
            <p className="mt-6 text-[var(--color-slate)]">
              When you complete an AI Opportunity Audit and move forward with any recommended
              implementation, we credit the full cost of your audit, dollar for dollar, against your
              project invoice. No conditions. No minimums. No fine print.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-[var(--color-border)] pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">Credit</p>
                <p className="mt-2 text-[var(--color-navy)]"><span className="tabular font-bold">100%</span> of audit fee</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">Window</p>
                <p className="mt-2 text-[var(--color-navy)]"><span className="tabular font-bold">90</span> days from delivery</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">Applies to</p>
                <p className="mt-2 text-[var(--color-navy)]">Any implementation</p>
              </div>
            </div>
            <Link href="/ai-audit" className="btn-primary mt-10">
              Book an AI Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Start here</span>
            <h2 className="mt-6 text-white">Start with a diagnostic, not a guess.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Before building anything, we identify where the money is leaking and where AI will
              actually make an impact.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a discovery call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
