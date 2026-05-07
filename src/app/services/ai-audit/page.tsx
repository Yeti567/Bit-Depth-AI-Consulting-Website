import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildServiceSchema } from '@/lib/schema';
import { OFFERS } from '@/lib/offers';
import {
  BreadcrumbSchema,
  buildServiceBreadcrumbs
} from '@/components/ui/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'AI Opportunity Audit for Contractors and Field Services | BitDepth AI',
  description:
    'A 14-day, $5,000 fixed-price AI Opportunity Audit for Canadian trades and field-service businesses. The full fee is credited toward implementation within 90 days.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/ai-audit' }
};

const included = [
  'Owner interview, 90 minutes.',
  'Up to four operational interviews with key staff (dispatcher, lead estimator, office manager).',
  'Process mapping across Acquisition, Delivery, and Support.',
  'Tech stack inventory and integration audit.',
  'Five-pillar AI Readiness Scorecard: Data Quality, Process Clarity, Technology Stack, Team Readiness, Strategic Alignment.',
  'Opportunity Matrix: Quick Wins, Big Swings, Nice to Haves, Deprioritize.',
  'Money Slide: estimated annual ROI by opportunity.',
  'Implementation roadmap with phased pricing.'
];

const fitsFor = [
  'Owners of Canadian trades and field service companies, 10 to 75 employees.',
  'Operations leaders at ICI contractors, professional services firms, and accounting practices, 15 to 100 employees.',
  'Anyone who has been told to look at AI by their board, their banker, or their gut.'
];

const notFor = [
  'Solo operators and businesses under 10 staff. The economics do not support a $5,000 audit at that scale yet.',
  'Pre-revenue startups and AI-first companies.',
  'Anyone looking for a recommendation to buy a specific software product. We do not sell software.'
];

export default function ServiceAiAuditPage() {
  return (
    <PageShell>
      <Script id="service-ai-audit-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            OFFERS.aiAudit.name,
            'A structured 14 day diagnostic of your trades or contractor business. $5,000 flat. 100 percent credited toward implementation within 90 days.',
            'https://bitdepthaiconsulting.com/services/ai-audit',
            'AI Consulting',
            { price: OFFERS.aiAudit.priceNumeric }
          )
        )}
      </Script>
      <BreadcrumbSchema
        id="service-ai-audit-breadcrumbs"
        items={buildServiceBreadcrumbs(OFFERS.aiAudit.name, 'ai-audit')}
      />
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">The flagship offer</p>
            <h1 className="mt-6 max-w-2xl">The AI Opportunity Audit. A $5,000 diagnostic that pays for itself, or you do not pay.</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              The AI Opportunity Audit is a structured 14 day diagnostic of your business. We
              interview the owner and the people doing the work, map the processes, look at the
              data, evaluate the tech stack, and deliver a prioritized roadmap with ROI estimates.
              The full $5,000 is credited toward any implementation we recommend, within 90 days.
              No conditions.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?topic=audit#contact-form" className="btn-primary">
                Book an AI Audit
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              14 day delivery. <span className="tabular">$5,000</span> flat.{' '}
              <span className="tabular">100%</span> credited toward implementation.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/hero-services-audit-kitchen-table.webp"
              alt="Tablet and notebook on a kitchen table beside a coffee mug"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Audit Credit Guarantee */}
      <section className="section-offwhite section-rule" aria-labelledby="audit-credit-guarantee">
        <div className="container-shell max-w-3xl py-12 md:py-16">
          <ScrollReveal>
            <p className="eyebrow">Risk reversal</p>
            <h2
              id="audit-credit-guarantee"
              className="mt-4 font-serif text-2xl leading-snug text-[var(--color-navy)] sm:text-3xl"
            >
              The Audit Credit Guarantee.
            </h2>
            <p className="mt-5 text-[var(--color-charcoal)]">
              The AI Opportunity Audit is $5,000 CAD. If you move into implementation with us
              within 90 days, the full $5,000 is credited against the implementation fee. You
              either get a roadmap you can hand to any vendor, or you get the audit free as part
              of building it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What is included */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">What is included</p>
            <h2 className="mt-6">Eight deliverables, one document.</h2>
          </ScrollReveal>
          <ul className="mt-10 space-y-4">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-[var(--color-charcoal)]">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-cyan)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who this is for / not for */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="eyebrow">Who this is for</p>
            <h2 className="mt-6">Trades, field services, ICI, professional services.</h2>
            <ul className="mt-8 space-y-4">
              {fitsFor.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--color-charcoal)]">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-cyan)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal index={1}>
            <p className="eyebrow">Who this is not for</p>
            <h2 className="mt-6">Be honest with yourself first.</h2>
            <ul className="mt-8 space-y-4">
              {notFor.map((item) => (
                <li key={item} className="flex gap-3 text-[var(--color-slate)]">
                  <span aria-hidden className="mt-3 h-px w-3 shrink-0 bg-[var(--color-slate)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Audit credit guarantee */}
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
            <Link href="/contact?topic=audit#contact-form" className="btn-primary mt-10">
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
              <Link href="/contact?topic=audit#contact-form" className="btn-primary">
                Book an Audit
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
