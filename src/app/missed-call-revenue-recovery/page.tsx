import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  PhoneOff,
  MessageSquareText,
  ClipboardList,
  BellRing,
  CalendarCheck,
  Clock,
  Voicemail,
  PhoneMissed,
  Hourglass,
  UserMinus,
  Users,
  Building2,
  Zap,
  GitBranch,
  ShieldAlert,
  CalendarDays,
  TrendingDown,
  Check,
  X,
  ChevronRight
} from 'lucide-react';

import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { FAQSchemaScript } from '@/components/ui/faq-schema-script';
import { MissedRevenueCalculator } from './calculator';

const PAGE_URL = 'https://bitdepthaiconsulting.com/missed-call-revenue-recovery';
const CALENDLY_URL = 'https://calendly.com/blake-bitdepthaiconsulting/30min';
const HERO_IMAGE = '/images/hero-missed-call-trades-owner.webp';
const DISPATCH_IMAGE = '/images/section-trades-dispatch-office.webp';
const JOBSITE_IMAGE = '/images/section-trades-jobsite-canadian.webp';

export const metadata: Metadata = {
  title: 'Missed Call Revenue Recovery for Canadian Trades | BitDepth AI',
  description:
    'Calculate how much revenue your HVAC, plumbing, electrical, roofing, or field-service business may be losing from missed calls. BitDepth helps Canadian trades recover missed opportunities with practical automation.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Missed Call Revenue Recovery for Canadian Trades | BitDepth AI',
    description:
      'Calculate how much revenue your HVAC, plumbing, electrical, roofing, or field-service business may be losing from missed calls.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: HERO_IMAGE,
        width: 1600,
        height: 900,
        alt: 'Canadian tradesman in a service van checking a missed call on his phone'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Missed Call Revenue Recovery for Canadian Trades | BitDepth AI',
    description:
      'Calculate how much revenue your business may be losing from missed calls.',
    images: [HERO_IMAGE]
  }
};

const faqs = [
  {
    question: 'What happens when a call is missed?',
    answer:
      'The system detects the missed call and sends an automatic text to the caller within seconds. The text acknowledges the call, asks for the basic details we need to help, and keeps the customer engaged until your office can follow up.'
  },
  {
    question: 'Does this replace my office staff?',
    answer:
      'No. It supports them. The system handles the first response so your team is not stuck choosing between answering the phone and finishing the job in front of them. Your staff still handles bookings, dispatch, and customer relationships.'
  },
  {
    question: 'Can this work with Jobber, ServiceTitan, QuickBooks, or my calendar?',
    answer:
      'Yes. The system is designed to fit around the tools you already use. We confirm the integrations during the snapshot call so you know exactly how it will work in your environment before anything is set up.'
  },
  {
    question: 'Is this only for HVAC and plumbing?',
    answer:
      'No. It works for HVAC, plumbing, electrical, roofing, and most field-service businesses. The common factor is inbound calls from customers who need work done. If your business depends on the phone ringing, this applies.'
  },
  {
    question: 'How fast can this be set up?',
    answer:
      'For most businesses, the core missed call response is live within one to two weeks. Workflow integrations and routing logic take longer depending on the tools in use. The snapshot call gives you a real timeline based on your situation.'
  },
  {
    question: 'What if we do not know how many calls we miss?',
    answer:
      'That is normal. Most trades businesses do not have a clear number. The snapshot call includes a quick way to estimate it from your phone records and current bookings, so you can see the size of the leak before you decide what to do about it.'
  }
];

const heroFlow = [
  { icon: PhoneOff, label: 'Missed Call' },
  { icon: MessageSquareText, label: 'Instant Text Back' },
  { icon: ClipboardList, label: 'Job Details Captured' },
  { icon: BellRing, label: 'Office Notified' },
  { icon: CalendarCheck, label: 'Booking Opportunity Saved' }
];

const problems = [
  { icon: Clock, label: 'Calls come in while your team is busy' },
  { icon: Voicemail, label: 'After-hours calls go unanswered' },
  { icon: PhoneMissed, label: 'Customers leave no voicemail' },
  { icon: Hourglass, label: 'Follow-up happens too late' },
  { icon: UserMinus, label: 'The customer calls a competitor' }
];

const solutions = [
  {
    icon: Zap,
    title: 'Sends a text response within seconds',
    body:
      'Every missed call triggers an automatic text that reaches the caller before they dial the next contractor.'
  },
  {
    icon: ClipboardList,
    title: 'Collects customer and job details',
    body:
      'A short, friendly back and forth captures the name, address, and the type of work the customer needs.'
  },
  {
    icon: BellRing,
    title: 'Notifies your office or dispatcher',
    body:
      'New leads land in the channel your team already watches, with the details ready to act on.'
  },
  {
    icon: GitBranch,
    title: 'Routes urgent inquiries',
    body:
      'Emergency calls and after-hours requests follow a different path so they get the right level of attention.'
  },
  {
    icon: CalendarDays,
    title: 'Supports booking workflows',
    body:
      'Customers can self-book or get a callback link that fits how your office actually schedules work.'
  },
  {
    icon: ShieldAlert,
    title: 'Reduces lost opportunities',
    body:
      'Fewer calls fall through the cracks, so more of the demand you already pay to generate turns into booked jobs.'
  }
];

const bestFit = [
  'HVAC companies',
  'Plumbing companies',
  'Electrical contractors',
  'Roofing companies',
  'Field-service businesses',
  '10 to 50 employees',
  'Owner-led or operations-managed',
  'Already receiving inbound calls'
];

const notFit = [
  'Solo operators',
  'Businesses under 5 employees',
  'Companies looking for free tools only',
  'Businesses with no inbound call volume'
];

const auditPoints = [
  'Flat $5,000 audit',
  'Credited toward implementation within 90 days',
  'Clear ROI-focused roadmap',
  'Identifies what to fix, what to automate, and what not to waste money on'
];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Missed Call Revenue Recovery',
  provider: {
    '@type': 'ProfessionalService',
    name: 'BitDepth AI Consulting Ltd.',
    url: 'https://bitdepthaiconsulting.com'
  },
  areaServed: 'CA',
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Canadian trades and field-service businesses'
  }
};

export default function MissedCallRevenueRecoveryPage() {
  return (
    <PageShell simplifiedHeader>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </Script>
      <FAQSchemaScript faqs={faqs} id="missed-call-faq-schema" />

      {/* 1. Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <p className="eyebrow">Missed Call Revenue Recovery</p>
              <h1 className="mt-6 max-w-2xl">
                How Much Revenue Are You Losing From Missed Calls?
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
                If your HVAC, plumbing, electrical, roofing, or field-service business misses calls, you are not just missing conversations. You are losing booked jobs.
              </p>
              <p className="mt-4 max-w-xl text-[var(--color-slate)]">
                When a customer calls and no one answers, they usually do not wait. They call the next company. BitDepth helps Canadian trades businesses capture missed calls automatically, respond instantly, and turn lost opportunities into booked work.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#calculator" className="btn-primary">
                  Calculate Your Missed Revenue
                </a>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  Book a 30-Minute Revenue Leak Snapshot
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal index={1} className="space-y-6">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
                <Image
                  src={HERO_IMAGE}
                  alt="Canadian tradesman in his service van checking a missed call on his phone"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="rounded-md border border-[var(--color-border)] bg-white p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                  How recovery happens
                </p>
                <ol className="mt-4 space-y-3">
                  {heroFlow.map((step, index) => {
                    const Icon = step.icon;
                    return (
                      <li key={step.label} className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-cyan)]/10 text-[var(--color-cyan)]">
                          <Icon className="h-4 w-4" aria-hidden />
                        </span>
                        <span className="text-sm font-medium text-[var(--color-navy)]">
                          {step.label}
                        </span>
                        {index < heroFlow.length - 1 ? (
                          <ChevronRight
                            className="ml-auto h-4 w-4 text-[var(--color-cyan)]"
                            aria-hidden
                          />
                        ) : null}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">The leak</p>
            <h2 className="mt-6">This Is Where Most Trades Businesses Lose Money</h2>
            <p className="mt-5 text-lg text-[var(--color-slate)]">
              It is not always your marketing. It is what happens after the phone rings.
            </p>
          </ScrollReveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.label} as="li" index={index} className="card-light p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-cyan)]/10 text-[var(--color-cyan)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <p className="mt-4 text-base text-[var(--color-charcoal)]">{item.label}</p>
                </ScrollReveal>
              );
            })}
          </ul>

          <ScrollReveal className="mt-10">
            <p className="border-l-2 border-[var(--color-cyan)] pl-5 text-lg font-medium text-[var(--color-navy)]">
              This is not a lead problem. It is a revenue leak inside your operations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Calculator */}
      <section id="calculator" className="section-offwhite section-space section-rule scroll-mt-24">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Estimate the leak</p>
            <h2 className="mt-6">Interactive Missed Revenue Calculator</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Plug in your numbers. The calculator estimates the monthly and annual revenue at risk based on your missed calls, average job value, and close rate.
            </p>
          </ScrollReveal>

          <div className="mt-10">
            <MissedRevenueCalculator />
          </div>
        </div>
      </section>

      {/* 4. Solution */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">The fix</p>
            <h2 className="mt-6">Turn Missed Calls Into Booked Jobs Automatically</h2>
            <p className="mt-5 text-lg text-[var(--color-slate)]">
              When a call is missed, the system responds instantly and keeps the customer engaged before they move on.
            </p>
          </ScrollReveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <ScrollReveal key={solution.title} as="li" index={index} className="card-light p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--color-cyan)]/10 text-[var(--color-cyan)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-[var(--color-navy)]">{solution.title}</h3>
                  <p className="mt-3 text-[var(--color-slate)]">{solution.body}</p>
                </ScrollReveal>
              );
            })}
          </ul>

          <ScrollReveal className="mt-10">
            <p className="border-l-2 border-[var(--color-cyan)] pl-5 text-lg font-medium text-[var(--color-navy)]">
              This is not complicated AI. It is practical revenue recovery.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-6">Three steps from leak to recovery</h2>
          </ScrollReveal>

          <ol className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: 'Identify the Leak',
                body: 'We estimate how much revenue is being lost and where it is happening.'
              },
              {
                title: 'Implement the System',
                body: 'We set up missed call response and workflow automation around the tools your business already uses.'
              },
              {
                title: 'Capture More Jobs',
                body: 'Your business responds faster, follows up better, and reduces missed opportunities.'
              }
            ].map((step, index) => (
              <ScrollReveal key={step.title} as="li" index={index} className="card-light p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-cyan)] text-lg font-bold text-[var(--color-cyan)] tabular">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-[var(--color-navy)]">{step.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{step.body}</p>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. Who this is for */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)] lg:sticky lg:top-24">
              <Image
                src={DISPATCH_IMAGE}
                alt="Dispatcher in a small Canadian trades back office on the phone, schedule and clipboard on the desk"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </ScrollReveal>

            <ScrollReveal index={1}>
              <p className="eyebrow">Who this is for</p>
              <h2 className="mt-6">Built for Canadian Trades and Field-Service Businesses</h2>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="card-light p-6">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-[var(--color-cyan)]" aria-hidden />
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                      Best fit
                    </p>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {bestFit.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-charcoal)]">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-cyan)]"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-md border border-[var(--color-border)] bg-[var(--color-offwhite)] p-6">
                  <div className="flex items-center gap-2">
                    <X className="h-5 w-5 text-[var(--color-slate)]" aria-hidden />
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                      Not a fit
                    </p>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {notFit.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-charcoal)]">
                        <X
                          className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-slate)]"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[var(--color-slate)]">
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4" aria-hidden />
                  Owner-led teams
                </span>
                <span className="inline-flex items-center gap-2">
                  <Building2 className="h-4 w-4" aria-hidden />
                  Canadian operators
                </span>
                <span className="inline-flex items-center gap-2">
                  <TrendingDown className="h-4 w-4" aria-hidden />
                  Inbound call dependent
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. Snapshot offer */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <p className="eyebrow justify-center">The first step</p>
            <h2 className="mt-6">Start With a 30-Minute Revenue Leak Snapshot</h2>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              In 30 minutes, we will estimate missed revenue, identify where the leak is happening, and show you the fastest way to fix it.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Your Free 30-Minute Snapshot
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Audit upsell */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <p className="eyebrow">Go deeper</p>
              <h2 className="mt-6">Want a Full Breakdown and Action Plan?</h2>
              <p className="mt-6 text-lg text-[var(--color-slate)]">
                For businesses ready to go deeper, BitDepth offers a structured AI Opportunity Discovery Audit.
              </p>
              <ul className="mt-8 space-y-3">
                {auditPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-[var(--color-charcoal)]">
                    <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-cyan)]" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <Link href="/services/ai-audit" className="btn-outline">
                  Book an AI Opportunity Audit
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal index={1} className="card-dark p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                What you walk away with
              </p>
              <ul className="mt-5 space-y-4 text-white/85">
                <li>A prioritized roadmap of where AI and automation will pay back the fastest.</li>
                <li>Clear ROI estimates tied to your actual numbers, not industry averages.</li>
                <li>An implementation plan you can hand to any vendor, including us.</li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Common questions</p>
            <h2 className="mt-6">Frequently asked questions</h2>
          </ScrollReveal>
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="relative overflow-hidden">
        <Image
          src={JOBSITE_IMAGE}
          alt="Foreman with a clipboard at a Canadian residential job site, two tradespeople working on the house behind him"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[var(--color-navy)]/85" aria-hidden />
        <div className="container-shell relative section-space max-w-3xl text-center text-white">
          <ScrollReveal>
            <span className="eyebrow justify-center">Last step</span>
            <h2 className="mt-6 text-white">Find the Biggest Revenue Leak in Your Business</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/80">
              Most trades businesses do not realize how much revenue is slipping away until they see the numbers.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="#calculator" className="btn-primary">
                Calculate Your Missed Revenue
              </a>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-white !text-white hover:!bg-white hover:!text-[var(--color-navy)]"
              >
                Book a Revenue Leak Snapshot
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
