'use client';

import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface CaseStudy {
  industry: string;
  headline: string;
  body: string;
  results: Array<{
    metric: string;
    label: string;
  }>;
}

const caseStudies: CaseStudy[] = [
  {
    industry: 'Trades and Construction',
    headline:
      'A 14-person electrical contractor was losing $40K plus per year to invisible job-cost overruns.',
    body:
      'The owner had a strong estimating process but no way to track actuals against estimates in real time. We built a job-cost dashboard pulling from QuickBooks and the dispatch system, so crew leads see a daily budget snapshot and the owner sees a live view of every active job against its estimated margin.',
    results: [
      { metric: '$43,200', label: 'Recovered annual margin in year one' },
      { metric: '3 hrs/week', label: 'Saved on month-end reconciliation' },
      { metric: '11 days', label: 'From audit to first dashboard live' }
    ]
  },
  {
    industry: 'Field Services, HVAC',
    headline:
      'A two-technician HVAC company was losing 6 to 8 jobs per month to unanswered calls.',
    body:
      'The owner operated in the field full-time and calls that went to voicemail rarely converted. We deployed an AI receptionist with after-hours text-back and Jobber-connected auto-booking. The system answers inquiries, presents available time slots, collects job details, and either books the appointment or sends an immediate callback notification, around the clock.',
    results: [
      { metric: '+22%', label: 'Increase in booked jobs within 90 days' },
      { metric: '6 days', label: 'From audit to receptionist live' },
      { metric: '24/7', label: 'After-hours coverage without hiring' }
    ]
  },
  {
    industry: 'Transportation and Logistics',
    headline:
      'A 22-truck regional carrier had no real-time visibility into whether individual loads were profitable.',
    body:
      'Top-line revenue looked fine. The problem was that fuel costs, driver overtime, and route inefficiencies were quietly eroding margin on specific lanes. We connected ELD, fuel card, and dispatch data into a single dashboard. Dispatchers now see a margin estimate per load before it is confirmed, and loss-making lanes have been repriced or eliminated.',
    results: [
      { metric: '$67,000', label: 'Annualized margin recovered on captured loads' },
      { metric: '4.2 hrs/day', label: 'Saved across dispatch and admin' },
      { metric: 'Live', label: 'Per-load margin visibility before dispatch' }
    ]
  }
];

export function CaseStudies() {
  return (
    <div className="w-full">
      <ScrollReveal className="max-w-2xl">
        <p className="eyebrow">How it works</p>
        <h2 className="mt-6">From the field.</h2>
        <p className="mt-5 text-[var(--color-slate)]">
          Real operational outcomes from businesses like yours. Client details anonymized.
        </p>
      </ScrollReveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <ScrollReveal key={study.headline} index={index}>
            <article className="flex h-full flex-col rounded-md border border-[var(--color-border)] bg-white p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                {study.industry}
              </p>

              <h3 className="mt-4 text-[var(--color-navy)]">{study.headline}</h3>

              <p className="mt-4 flex-1 text-sm text-[var(--color-slate)]">{study.body}</p>

              <dl className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-5">
                {study.results.map((result) => (
                  <div key={result.label} className="flex items-baseline gap-3">
                    <dt className="tabular text-base font-bold text-[var(--color-navy)]">
                      {result.metric}
                    </dt>
                    <dd className="text-sm text-[var(--color-slate)]">{result.label}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
