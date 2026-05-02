import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MissedCallRoiCalculator } from '@/components/ui/missed-call-roi-calculator';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Missed Call Text Back and AI Receptionist | BitDepth AI',
  description:
    'Stop losing 30 to 50 percent of your inbound calls. AI receptionist, sub-five-second text-back, and Canadian carrier compliance. From $497 per month.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/missed-call-text-back' }
};

const included = [
  'AI receptionist that answers calls 24/7 with a script written for your business.',
  'Missed call auto-text within 5 seconds, with a callback link to your booking calendar.',
  'After-hours routing to a different script and SMS flow.',
  'Auto-quote triggers for the most common service requests.',
  'Connector to Jobber, ServiceTitan, Housecall Pro, or your existing CRM.',
  'Canadian A2P 10DLC carrier registration and CRTC-compliant sender ID.',
  'Monthly performance report: calls captured, jobs booked, revenue saved.'
];

interface PricingTier {
  name: string;
  bestFor: string;
  price: string;
  setup: string;
  highlight?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    bestFor: '1 to 5 staff. Up to 200 calls per month.',
    price: '$497/mo',
    setup: '$750 setup'
  },
  {
    name: 'Standard',
    bestFor: '6 to 15 staff. Up to 600 calls per month. CRM connector included.',
    price: '$697/mo',
    setup: '$1,200 setup',
    highlight: true
  },
  {
    name: 'Pro',
    bestFor: '16+ staff. Unlimited calls. Custom auto-quote triggers and reporting.',
    price: '$897/mo',
    setup: '$1,500 setup'
  }
];

export default function MissedCallTextBackPage() {
  return (
    <PageShell>
      <Script id="service-mctb-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'Missed Call Text Back and AI Receptionist',
            'AI receptionist plus auto-text recovery for every missed call. Canadian carrier compliance built in. From $497 per month.',
            'https://bitdepthaiconsulting.com/services/missed-call-text-back',
            'AI Receptionist'
          )
        )}
      </Script>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">The inbound wedge</p>
            <h1 className="mt-6 max-w-2xl">
              Missed Call Text Back. Stop losing 30 to 50 percent of your inbound calls.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Most Canadian trades miss between three and ten calls a day. Every missed call goes
              to a competitor inside ten minutes. Our AI receptionist answers the calls you cannot,
              books the ones it can, and sends a personalized text inside five seconds to every
              missed call. Built on Canadian carrier infrastructure with full A2P 10DLC and PIPEDA
              compliance.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                See if it fits your business
              </Link>
              <Link href="/contact?topic=audit" className="btn-outline">
                Book an AI Audit
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              From <span className="tabular">$497</span>/month.{' '}
              <span className="tabular">$750</span> setup. Cancel anytime after 90 days.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/hero-mctb-phone-recovery.webp"
              alt="Smartphone on a contractor workbench showing a clean text-message interface"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* What is included */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">What is included</p>
            <h2 className="mt-6">Everything you need to stop the leak.</h2>
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

      {/* ROI calculator */}
      <section id="roi-calculator" className="section-offwhite section-space section-rule scroll-mt-24">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <MissedCallRoiCalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-6">Three tiers. No long-term contract.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Cancel anytime after 90 days. All tiers include Canadian carrier registration and
              monthly performance reporting.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <ScrollReveal key={tier.name} index={index}>
                <article
                  className={`flex h-full flex-col rounded-md border bg-white p-7 ${
                    tier.highlight
                      ? 'border-[var(--color-terracotta)] shadow-[0_1px_0_rgba(0,0,0,0.04)]'
                      : 'border-[var(--color-border)]'
                  }`}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                    {tier.name}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-slate)]">{tier.bestFor}</p>
                  <p className="mt-6 font-serif text-3xl text-[var(--color-navy)] tabular">{tier.price}</p>
                  <p className="mt-1 text-sm text-[var(--color-slate)] tabular">{tier.setup}</p>
                  <Link
                    href="/contact"
                    className={`mt-8 ${tier.highlight ? 'btn-primary' : 'btn-outline'}`}
                  >
                    Talk to us
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Start with one call you would have missed</span>
            <h2 className="mt-6 text-white">Stop the leak this month.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Setup takes a week. Most clients see captured calls inside the first 48 hours after
              go-live.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                See if it fits your business
              </Link>
              <Link href="/contact?topic=audit" className="btn-outline">
                Book an AI Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
