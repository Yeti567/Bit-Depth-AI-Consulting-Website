import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Check, X } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MissedCallRoiCalculator } from '@/components/ui/missed-call-roi-calculator';
import { MissedCallSmsFlow } from '@/components/ui/missed-call-sms-flow';
import {
  MissedCallFitCheckCta,
  FIT_CHECK_CALENDLY_URL
} from '@/components/ui/missed-call-fit-check-cta';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Missed Call Text Back for Canadian Trades | BitDepth AI',
  description:
    'Recover the missed calls you already paid to attract. BitDepth installs a done-for-you missed-call text-back system for Canadian trades. PIPEDA-aware, CRTC-compliant, no long-term contract.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/missed-call-text-back' }
};

const processSteps = [
  { n: '01', text: 'Customer calls. Nobody picks up.' },
  {
    n: '02',
    text: 'Within five seconds, the customer gets a personalized text from your business number.'
  },
  { n: '03', text: 'The customer replies with what they need.' },
  { n: '04', text: 'The system captures name, service type, location, and urgency.' },
  { n: '05', text: 'Your team gets a clean handoff with the context already collected.' },
  {
    n: '06',
    text: 'Every month, you get a report showing calls captured, jobs booked, and revenue saved.'
  }
];

const bestFit = [
  'You get at least 10 inbound calls per week.',
  'You miss calls on job sites, after hours, or during busy periods.',
  'A booked job is usually worth $300 or more.',
  'You use Jobber, Housecall Pro, ServiceTitan, Google Calendar, or any modern CRM.',
  'You want overflow recovery, not a full call center replacement.'
];

const notFit = [
  'You barely get inbound calls yet.',
  'You need a human dispatcher on every call.',
  'You do not have permission to text your customers and leads.',
  'You are looking for the cheapest software you can find.'
];

const offerStack = [
  {
    name: 'Missed-call text-back flow',
    body:
      'A personalized auto-text fires within five seconds of any missed call, with a callback link to your booking calendar.'
  },
  {
    name: 'AI receptionist script, written for your business',
    body:
      'Your team stays in control. The script handles the calls you cannot, books the easy ones, and routes everything else to a human.'
  },
  {
    name: 'Business-hours and after-hours routing',
    body: 'Different scripts and SMS flows for working hours, evenings, and weekends.'
  },
  {
    name: 'CRM or calendar connection',
    body:
      'Connectors for Jobber, ServiceTitan, Housecall Pro, Google Calendar, and most modern CRMs.'
  },
  {
    name: 'Canadian carrier registration',
    body:
      'We handle A2P 10DLC registration, sender ID, and CRTC-compliant opt-out language for you.'
  },
  {
    name: 'Booking and callback handoff',
    body:
      'Captured leads land in your CRM with name, service type, location, and urgency already filled in.'
  },
  {
    name: 'Monthly recovery report',
    body: 'Calls captured, jobs booked, and estimated revenue saved, in one page.'
  },
  {
    name: '90-day optimization window',
    body:
      'We tune the scripts and routing for the first 90 days based on real call data, no extra charge.'
  }
];

interface PricingTier {
  name: string;
  bestFor: string;
  price: string;
  setup: string;
  highlight?: boolean;
  badge?: string;
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
    highlight: true,
    badge: 'Most common'
  },
  {
    name: 'Pro',
    bestFor: '16+ staff. Unlimited calls. Custom auto-quote triggers and reporting.',
    price: '$897/mo',
    setup: '$1,500 setup'
  }
];

const faqItems = [
  {
    question: 'How fast does the text actually go out?',
    answer:
      'Within five seconds of the call ending in voicemail. The customer is still holding their phone when it arrives.'
  },
  {
    question: 'Will it sound like a robot?',
    answer:
      'No. The script is written specifically for your business in your tone, and it is short. Two sentences, then your customer replies and a human or the AI handles the rest.'
  },
  {
    question: 'What if my customer texts back something weird?',
    answer:
      'The system routes anything outside the script to your team with the original message and the call context attached. Nothing gets dropped.'
  },
  {
    question: 'Does this replace my office staff?',
    answer:
      'No. It catches the calls your office staff cannot get to. Most clients use it to recover after-hours calls, lunch-rush calls, and on-site calls.'
  },
  {
    question: 'What CRMs and calendars does it connect to?',
    answer:
      'Jobber, Housecall Pro, ServiceTitan, Google Calendar, Calendly, and any CRM with a webhook or Zapier connection. If you are running something custom, we will tell you on the fit check whether we can connect it.'
  },
  {
    question: 'How long does setup take?',
    answer:
      'About one week from contract signature to live. Most clients see captured calls inside the first 48 hours after go-live.'
  },
  {
    question: 'What is the contract length?',
    answer: 'None. Cancel anytime after the first 90 days, no fee, no fight.'
  },
  {
    question: 'What if it does not work?',
    answer:
      'If the fit check shows your call volume cannot justify the system, we tell you upfront and recommend against signing. If you sign and we fail to capture qualified missed-call opportunities in your first 30 days, talk to us. We will either fix it or part as friends.'
  }
];

export default function MissedCallTextBackPage() {
  return (
    <PageShell>
      <Script id="service-mctb-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'Missed Call Text Back for Canadian Trades',
            'Done-for-you missed-call revenue recovery for Canadian trades. Personalized text-back within five seconds, AI receptionist, and Canadian carrier compliance. From $497 per month.',
            'https://bitdepthaiconsulting.com/services/missed-call-text-back',
            'Missed Call Recovery'
          )
        )}
      </Script>

      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Missed call revenue recovery for Canadian trades</p>
            <h1 className="mt-6 max-w-2xl">
              Turn missed calls into booked jobs before they call your competitor.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              BitDepth installs a done-for-you missed-call recovery system for Canadian trades and
              contractors. When a call goes unanswered, the customer gets a personalized text within
              seconds, your team gets the context, and every recovered opportunity is tracked. Built
              on Canadian carrier infrastructure with full PIPEDA and CRTC compliance handled for
              you.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#calculator" className="btn-primary">
                Check my missed-call revenue
              </Link>
              <MissedCallFitCheckCta variant="outline" />
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              From <span className="tabular">$497</span> per month.{' '}
              <span className="tabular">$750</span> setup. Cancel anytime after 90 days.
            </p>
          </ScrollReveal>
          <ScrollReveal
            index={1}
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]"
          >
            <Image
              src="/images/hero-mctb-phone-recovery.webp"
              alt="Smartphone on a contractor workbench showing a clean text-message interface"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Calculator (centerpiece) */}
      <section
        id="calculator"
        className="section-stone section-space section-rule scroll-mt-24"
      >
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Run the math</p>
            <h2 className="mt-6">How much revenue is going to voicemail?</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Most Canadian trades miss between three and ten calls a day. This calculator estimates
              what those calls are actually worth, and how many recovered jobs it takes to break
              even on the system.
            </p>
          </ScrollReveal>
          <div className="mt-12">
            <ScrollReveal index={1}>
              <MissedCallRoiCalculator />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What happens after a missed call */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Process proof</p>
            <h2 className="mt-6">What happens after a missed call.</h2>
            <p className="mt-5 max-w-xl text-[var(--color-slate)]">
              There is no client photo wall on this page yet, because BitDepth tells the truth: this
              offer is new. What we can show you is exactly how the system works, in the order it
              happens.
            </p>
            <ol className="mt-9 space-y-5">
              {processSteps.map((step) => (
                <li key={step.n} className="flex gap-5">
                  <span className="font-serif text-2xl text-[var(--color-terracotta)] tabular leading-none pt-1">
                    {step.n}
                  </span>
                  <span className="text-[var(--color-charcoal)]">{step.text}</span>
                </li>
              ))}
            </ol>
          </ScrollReveal>
          <ScrollReveal index={1}>
            <MissedCallSmsFlow />
          </ScrollReveal>
        </div>
      </section>

      {/* Honest fit */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Honest fit</p>
            <h2 className="mt-6">This is built for some businesses, not all of them.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-0">
            <ScrollReveal className="md:pr-10 md:border-r md:border-[var(--color-border)]">
              <h3 className="font-serif text-xl text-[var(--color-navy)]">Best fit if:</h3>
              <ul className="mt-5 space-y-3">
                {bestFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--color-charcoal)]">
                    <Check
                      className="mt-1 h-5 w-5 shrink-0 text-[var(--color-terracotta)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal index={1} className="md:pl-10">
              <h3 className="font-serif text-xl text-[var(--color-navy)]">Not a fit if:</h3>
              <ul className="mt-5 space-y-3">
                {notFit.map((item) => (
                  <li key={item} className="flex gap-3 text-[var(--color-charcoal)]">
                    <X
                      className="mt-1 h-5 w-5 shrink-0 text-[var(--color-slate)]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Offer stack */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Your setup includes</p>
            <h2 className="mt-6">Everything you need to stop the leak.</h2>
          </ScrollReveal>
          <ul className="mt-12 divide-y divide-[var(--color-border)]">
            {offerStack.map((item, index) => (
              <ScrollReveal key={item.name} index={index} as="li" className="py-6 first:pt-0">
                <p className="font-semibold text-[var(--color-navy)]">{item.name}</p>
                <p className="mt-2 text-[var(--color-slate)]">{item.body}</p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-6">
              Three tiers. No long-term contract. Cancel anytime after 90 days.
            </h2>
            <p className="mt-5 text-[var(--color-slate)]">
              All tiers include Canadian carrier registration and monthly performance reporting.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <ScrollReveal key={tier.name} index={index}>
                <article
                  className={`relative flex h-full flex-col rounded-md border bg-white p-7 ${
                    tier.highlight
                      ? 'border-[var(--color-terracotta)]'
                      : 'border-[var(--color-border)]'
                  }`}
                >
                  {tier.badge ? (
                    <span className="absolute -top-3 left-7 rounded bg-[var(--color-terracotta)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      {tier.badge}
                    </span>
                  ) : null}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                    {tier.name}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-slate)]">{tier.bestFor}</p>
                  <p className="mt-6 font-serif text-3xl text-[var(--color-navy)] tabular">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-slate)] tabular">{tier.setup}</p>
                  <MissedCallFitCheckCta
                    label="Talk to us"
                    variant={tier.highlight ? 'primary' : 'outline'}
                    className="mt-8"
                  />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <p className="eyebrow justify-center">Diagnosis first</p>
            <h2 className="mt-8 font-serif text-2xl leading-snug sm:text-3xl">
              If we cannot find enough missed-call volume to make the math work, we will tell you
              before setup.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[var(--color-slate)]">
              Every engagement starts with a 15-minute fit check. We look at your call volume, your
              average job value, and your existing booking flow. If the numbers do not justify the
              system, we say so, and we recommend against moving forward. We would rather have a
              customer who knows the system pays for itself than a refund request in month two.
            </p>
            <div className="mt-9 flex justify-center">
              <MissedCallFitCheckCta label="Book the fit check" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">The legal stuff, translated</p>
            <h2 className="mt-6">PIPEDA, CRTC, and A2P 10DLC, handled.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              If those acronyms mean nothing to you, you are not alone. Most contractors do not need
              to learn them. We handle the parts that matter to your business.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'We register your business number with the major Canadian carriers so your texts actually arrive, instead of being filtered as spam.',
                'Every text we send on your behalf includes consent-aware messaging and a clean opt-out, so you stay on the right side of CRTC rules.',
                'Your customer data is stored on Canadian infrastructure and handled in line with PIPEDA. We do not share, sell, or train models on your customer messages.'
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[var(--color-charcoal)]">
                  <Check
                    className="mt-1 h-5 w-5 shrink-0 text-[var(--color-terracotta)]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-slate)]">
              Built by BitDepth AI Consulting Ltd., a Canadian, vendor-neutral AI consulting firm
              focused on trades and field-service businesses.{' '}
              <Link
                href="/about"
                className="font-semibold text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)]"
              >
                Read the full founder story →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-6">Questions worth answering before the fit check.</h2>
          </ScrollReveal>
          <div className="mt-10">
            <ScrollReveal index={1}>
              <FAQAccordion items={faqItems} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow justify-center">Stop the leak this month</span>
            <h2 className="mt-6 text-white">
              One missed call covers the system. The rest is profit.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Setup takes a week. Most clients see captured calls inside the first 48 hours after
              go-live. The fit check is free, and it takes 15 minutes.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={FIT_CHECK_CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a 15-minute fit check
              </Link>
              <Link href="/contact?topic=audit" className="btn-outline">
                Book an AI Audit instead
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
