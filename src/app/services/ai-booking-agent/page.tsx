import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { BookingAgentHowItWorks } from '@/components/sections/booking-agent-how-it-works';
import { buildServiceSchema } from '@/lib/schema';

const PAGE_URL = 'https://bitdepthaiconsulting.com/services/ai-booking-agent';
const CALENDLY_URL = 'https://calendly.com/blake-bitdepthaiconsulting/30min';

export const metadata: Metadata = {
  title: 'AI Booking Agent for Trades and Service Businesses | BitDepth AI Consulting',
  description:
    'Stop losing jobs when you miss a call. Our AI booking agent answers calls, responds to leads, and books appointments when your team is busy or after-hours. Built for HVAC, plumbing, electrical, roofing, and field service.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AI Booking Agent for Trades and Service Businesses | BitDepth AI Consulting',
    description:
      'AI booking agent that answers calls, responds to leads, and books appointments when your team is busy. For trades and field-service businesses with ten or more employees.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA'
  }
};

const compatibilityGroups = [
  {
    label: 'Calendars',
    body: 'Google Calendar, Outlook, iCal, dispatch software calendars'
  },
  {
    label: 'CRMs and field service',
    body:
      'Jobber, Housecall Pro, ServiceTitan, FieldEdge, HubSpot, and most QuickBooks-connected stacks'
  },
  {
    label: 'Phone systems',
    body: 'RingCentral, OpenPhone, GoTo Connect, traditional landlines via call forwarding'
  }
];

const limits = [
  'It will not invent prices, warranties, policies, or availability.',
  'It will not recommend competitors or suggest a customer call someone else.',
  'It will not handle topics you have flagged for human review.',
  'It will not run unsupervised forever. Every system has an owner on your team.',
  'It will not lock you in. Your data, your phone number, your customer records stay yours.'
];

const bookingAgentIncludes = [
  'Connects to your existing phone number through call forwarding',
  'Voice answering for missed and after-hours calls',
  'Trained on approved company knowledge: services, pricing rules, hours, and policies',
  'Appointment booking written to your calendar or dispatch system',
  'Lead capture and qualification handed to your team with the full conversation attached',
  'Weekly reporting and ongoing tuning included'
];

export default function AiBookingAgentPage() {
  return (
    <PageShell>
      <Script id="service-booking-agent-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'AI Booking Agent',
            'AI booking agent for trades and service businesses. Answers calls, responds to website leads, and books appointments when your team is busy or after-hours. Canadian-built and vendor-neutral.',
            PAGE_URL,
            'AI Booking Agent'
          )
        )}
      </Script>

      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">AI booking agent</p>
            <h1 className="mt-6">The booked job goes to the company that answers.</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              BitDepth builds AI booking agents that answer calls, respond to website leads, and
              book appointments when your team is busy, after-hours, or out on the job. Built for
              trades and field-service businesses with ten or more employees.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a setup call
              </Link>
              <Link href="/services/profit-leak-review" className="btn-outline">
                Or start with a Profit Leak Review
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The problem */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">The problem</p>
            <h2 className="mt-6">A missed call is not just a missed call.</h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              <p>
                When a customer has no heat, a leaking pipe, an electrical issue, or a roof
                problem, they are not waiting around. They call. If no one answers, they move
                down the list. Three missed emergency calls a week is tens of thousands of
                dollars a year, walking straight to a competitor.
              </p>
              <p>
                The problem is rarely marketing. The problem is operations. The leads you already
                paid to attract are slipping through the system before you ever see them.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works (shared) */}
      <BookingAgentHowItWorks showCta={false} />

      {/* What it connects to */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Compatibility</p>
            <h2 className="mt-6">It works with what you already use.</h2>
            <p className="mt-5 text-[var(--color-charcoal)]">
              The booking agent can work with your existing business number through call
              forwarding. When you are busy, after-hours, or unable to answer, calls can be
              routed to the AI booking agent instead of going unanswered. Appointments are
              written to your calendar, your dispatch system, or your CRM, depending on what you
              already use.
            </p>
          </ScrollReveal>
          <ul className="mt-8 space-y-5">
            {compatibilityGroups.map((group, index) => (
              <ScrollReveal key={group.label} index={index} as="li">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                  {group.label}
                </p>
                <p className="mt-2 text-[var(--color-charcoal)]">{group.body}</p>
              </ScrollReveal>
            ))}
          </ul>
          <ScrollReveal index={3} className="mt-8">
            <p className="text-sm text-[var(--color-slate)]">
              If your stack is not listed, ask. We have probably connected to it before.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What it does not do */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Limits, by design</p>
            <h2 className="mt-6">What it does not do.</h2>
            <p className="mt-5 text-[var(--color-charcoal)]">
              We are not in the business of turning AI loose on your customers. Here is what the
              booking agent will not do, by design.
            </p>
          </ScrollReveal>
          <ul className="mt-8 space-y-3">
            {limits.map((line) => (
              <li key={line} className="flex gap-3 text-[var(--color-charcoal)]">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                  aria-hidden="true"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-6">Pricing.</h2>
            <p className="mt-5 font-serif text-3xl text-[var(--color-navy)] tabular">
              From $299 per month
            </p>
            <p className="mt-3 text-[var(--color-charcoal)]">
              Flat monthly. No call-volume surprises. Setup, training, and the first thirty days
              of post-launch monitoring are included.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="mt-8">
            <ul className="space-y-3">
              {bookingAgentIncludes.map((line) => (
                <li key={line} className="flex gap-3 text-[var(--color-charcoal)]">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal index={2} className="mt-8">
            <p className="text-sm text-[var(--color-slate)]">
              Every build includes a thirty-day post-launch monitoring period. We do not ship
              and disappear.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* The math */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Run the math</p>
            <h2 className="mt-6">The math.</h2>
            <p className="mt-6 text-[var(--color-charcoal)]">
              Three missed emergency calls a week, at an average ticket of $450 to $3,725 in HVAC
              and plumbing, is somewhere between $70,000 and $580,000 a year of leaked revenue.
              You do not need the AI to recover all of them. You need it to recover enough to pay
              for itself in the first month, which it usually does inside the first week.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust link */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Trust and control</p>
            <h3 className="mt-4 font-serif text-xl text-[var(--color-navy)]">
              What about safety, data, and control?
            </h3>
            <p className="mt-4 text-[var(--color-charcoal)]">
              Every BitDepth automation is grounded in approved company knowledge, tested before
              launch, and monitored after launch. Your data is not used to train public AI
              models. You can pause or shut the system off in minutes. The full explanation,
              plain English, lives on our Security and Data Handling page.
            </p>
            <Link
              href="/security-and-data"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)]"
            >
              Read about security and data handling
              <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow justify-center">Recover the calls you are paying for</span>
            <h2 className="mt-6 text-white">Recover the calls you are already paying for.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              The fastest way to find out if a booking agent makes sense for your business is a
              thirty-minute setup call. We will walk through your current call flow, missed-call
              volume, and what a working setup would look like for your specific stack. No slide
              deck.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a setup call
              </Link>
              <Link href="/services/profit-leak-review" className="btn-outline">
                Start with a Profit Leak Review for $250
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
