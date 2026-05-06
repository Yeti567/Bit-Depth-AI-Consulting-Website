import type { Metadata } from 'next';
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

const PAGE_URL = 'https://bitdepthaiconsulting.com/services/profit-leak-review';
const BOOKING_URL = '/contact?topic=profit-leak-review';

export const metadata: Metadata = {
  title: 'Profit Leak Detection Review for Trades and Service Businesses | BitDepth AI',
  description:
    'A $250, two-week diagnostic that finds where missed calls, slow quotes, and broken admin are leaking revenue from your business.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Profit Leak Detection Review for Trades and Service Businesses | BitDepth AI',
    description:
      'A $250, two-week diagnostic that finds where missed calls, slow quotes, and broken admin are leaking revenue.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA'
  }
};

const reviewItems = [
  {
    n: '01',
    title: 'Missed call leakage.',
    body:
      'How many calls are coming in, how many are being missed, and what those missed calls are likely worth based on your average job value and conversion rate.'
  },
  {
    n: '02',
    title: 'Quote follow-up gaps.',
    body:
      'How long quotes sit before follow-up, how many are going cold, and what a tighter follow-up rhythm would recover.'
  },
  {
    n: '03',
    title: 'Booking workflow breaks.',
    body:
      'Where customers drop out between first contact and booked appointment. The handoffs that quietly cost you jobs.'
  }
];

const deliverables = [
  'A written report delivered within five business days.',
  'Dollar-figure estimates for each leak based on your numbers, not generic benchmarks.',
  'A short list of fixes ranked by effort versus impact.',
  'A clear, no-pressure recommendation on whether automation makes sense for you right now.',
  'The full $250 credited toward any implementation booked within ninety days.'
];

const howItWorks = [
  {
    n: '01',
    title: 'Book the review.',
    body: 'Pick a time. Pay the $250.'
  },
  {
    n: '02',
    title: 'Thirty-minute call.',
    body:
      'We walk through your current operations: phones, quoting, booking, and reporting. We ask the questions; you answer in plain language. No prep required.'
  },
  {
    n: '03',
    title: 'We do the work.',
    body: 'We pull the numbers, score the leaks, and write the report.'
  },
  {
    n: '04',
    title: 'You get the report.',
    body:
      'Delivered as a PDF within five business days. You decide what to do next, with no pressure to move forward.'
  }
];

const comparisonRows = [
  {
    label: 'Price',
    review: '$250 CAD',
    audit: '$5,000 CAD'
  },
  {
    label: 'Scope',
    review: 'Three specific revenue leaks',
    audit: 'Full operational scan across five pillars'
  },
  {
    label: 'Format',
    review: 'Thirty-minute call plus written report',
    audit: 'Multi-week structured engagement with interviews and deliverable package'
  },
  {
    label: 'Best for',
    review: 'Quick diagnosis, owners not yet ready to commit',
    audit: 'Operations leaders ready to plan a real implementation'
  },
  {
    label: 'Credit',
    review: '100 percent toward implementation within ninety days',
    audit: '100 percent toward implementation within ninety days'
  },
  {
    label: 'Deliverable',
    review: 'Five-page report',
    audit: 'Scorecard, opportunity matrix, ninety-day roadmap'
  }
];

export default function ProfitLeakReviewPage() {
  return (
    <PageShell>
      <Script id="service-profit-leak-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            OFFERS.profitLeakReview.name,
            'A $250, two-week diagnostic that finds where missed calls, slow quotes, and broken admin are leaking revenue. Written report. Credited toward implementation.',
            PAGE_URL,
            'Profit Leak Detection Review',
            { price: OFFERS.profitLeakReview.priceNumeric }
          )
        )}
      </Script>
      <BreadcrumbSchema
        id="service-profit-leak-review-breadcrumbs"
        items={buildServiceBreadcrumbs(OFFERS.profitLeakReview.name, 'profit-leak-review')}
      />

      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Profit Leak Detection Review</p>
            <h1 className="mt-6">Find out where your business is leaking revenue. For $250.</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              A focused review of the three places trades and service businesses lose the most
              money: missed calls, slow quote follow-up, and broken booking workflows. You get a
              written report. If you move forward, the $250 is credited toward the work.
            </p>
            <div className="mt-9">
              <Link href={BOOKING_URL} className="btn-primary">
                Book a Profit Leak Review
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we review */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Scope</p>
            <h2 className="mt-6">What we review.</h2>
          </ScrollReveal>
          <ol className="mt-10 space-y-8">
            {reviewItems.map((item, index) => (
              <ScrollReveal key={item.n} index={index} as="li" className="flex gap-5">
                <span className="font-serif text-2xl text-[var(--color-terracotta)] tabular leading-none pt-1">
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold text-[var(--color-navy)]">{item.title}</p>
                  <p className="mt-2 text-[var(--color-charcoal)]">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* What you get */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Deliverable</p>
            <h2 className="mt-6">What you get.</h2>
          </ScrollReveal>
          <ul className="mt-8 space-y-3">
            {deliverables.map((line) => (
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

      {/* How it works */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Process</p>
            <h2 className="mt-6">How it works.</h2>
          </ScrollReveal>
          <ol className="mt-10 space-y-8">
            {howItWorks.map((item, index) => (
              <ScrollReveal key={item.n} index={index} as="li" className="flex gap-5">
                <span className="font-serif text-2xl text-[var(--color-terracotta)] tabular leading-none pt-1">
                  {item.n}
                </span>
                <div>
                  <p className="font-semibold text-[var(--color-navy)]">{item.title}</p>
                  <p className="mt-2 text-[var(--color-charcoal)]">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Honest fit</p>
            <h2 className="mt-6">Who this is for.</h2>
            <p className="mt-6 text-[var(--color-charcoal)]">
              The Profit Leak Review is built for owners and operations leaders at trades and
              service businesses with ten or more employees who suspect they are losing revenue
              but have not put numbers on it yet. It is the right starting point if you are not
              ready for a full AI Opportunity Audit, or if you want a clear, low-cost diagnosis
              before deciding whether to invest in automation.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ScrollReveal index={1} className="border-t border-[var(--color-border)] pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Right fit
              </p>
              <p className="mt-3 text-[var(--color-charcoal)]">
                Trades and field-service businesses with ten or more employees, missing calls
                during busy periods, with quote follow-up that is inconsistent or
                owner-dependent.
              </p>
            </ScrollReveal>
            <ScrollReveal index={2} className="border-t border-[var(--color-border)] pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Wrong fit
              </p>
              <p className="mt-3 text-[var(--color-charcoal)]">
                Pre-revenue startups, sole operators, or businesses looking for free strategy.
                The review is paid because the work is real.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <p className="eyebrow">Compared</p>
            <h2 className="mt-6">Profit Leak Review vs. AI Opportunity Audit.</h2>
          </ScrollReveal>
          <ScrollReveal index={1} className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border-strong)]">
                  <th scope="col" className="py-4 pr-4 align-bottom font-semibold text-[var(--color-slate)]">
                    <span className="sr-only">Dimension</span>
                  </th>
                  <th
                    scope="col"
                    className="py-4 pr-4 align-bottom font-semibold text-[var(--color-navy)]"
                  >
                    Profit Leak Review
                  </th>
                  <th
                    scope="col"
                    className="py-4 align-bottom font-semibold text-[var(--color-navy)]"
                  >
                    AI Opportunity Audit
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-[var(--color-border)]">
                    <th
                      scope="row"
                      className="py-4 pr-4 align-top font-semibold text-[var(--color-navy)]"
                    >
                      {row.label}
                    </th>
                    <td className="py-4 pr-4 align-top text-[var(--color-charcoal)]">
                      {row.review}
                    </td>
                    <td className="py-4 align-top text-[var(--color-charcoal)]">{row.audit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </ScrollReveal>
          <ScrollReveal index={2} className="mt-8">
            <p className="text-[var(--color-slate)]">
              Most clients start with the Profit Leak Review. The ones who already know they are
              ready to invest typically go straight to the AI Opportunity Audit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow justify-center">Find the leak. Then decide.</span>
            <h2 className="mt-6 text-white">Find the leak. Then decide.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Two hundred and fifty dollars to know exactly where your money is going. Credited
              back if you move forward. No pressure, no slide deck, no upsell call until you ask
              for one.
            </p>
            <div className="mt-9 flex justify-center">
              <Link href={BOOKING_URL} className="btn-primary">
                Book a Profit Leak Review
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
