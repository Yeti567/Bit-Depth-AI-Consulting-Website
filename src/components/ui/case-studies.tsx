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
    industry: 'TRADES & CONSTRUCTION',
    headline: 'A 14-person electrical contractor was losing $40K+ per year to invisible job cost overruns.',
    body: 'The owner had a strong estimating process but no way to track actuals against estimates in real time. Labour hours were tracked on paper timesheets that weren\'t reconciled until month-end by which point, over-budget jobs were already finished. After an AI Opportunity Audit, we mapped 8 core workflows and identified job costing visibility as the highest-value opportunity. We connected their field time tracking, materials purchasing, and accounting systems into a unified dashboard. Crew leads now get a daily budget snapshot on their phones. The owner sees a live view of every active job against its estimated margin.',
    results: [
      { metric: '$43,200', label: 'Recovered annual margin in year one' },
      { metric: '3 hrs/week', label: 'Saved on month-end reconciliation' },
      { metric: '11 days', label: 'From audit delivery to first dashboard live' }
    ]
  },
  {
    industry: 'FIELD SERVICES hVAC',
    headline: 'A two-technician HVAC company was losing an estimated 6–8 jobs per month to unanswered calls.',
    body: 'The owner operated in the field full-time. Calls that went to voicemail during working hours rarely converted competitors picked them up first. A quick-scan audit (completed in 3 days) confirmed that missed inbound leads were the single largest revenue leak in the business. We implemented an AI-powered booking chatbot on their website and Google Business Profile, connected to their scheduling calendar. The bot answers inquiries, presents available time slots, collects job details, and either books the appointment or sends an immediate callback notification. It runs 24 hours a day.',
    results: [
      { metric: '+22%', label: 'Increase in booked jobs within 60 days' },
      { metric: '$1,500', label: 'Quick-scan audit investment' },
      { metric: '6 days', label: 'From audit to chatbot live' }
    ]
  },
  {
    industry: 'TRANSPORTATION & LOGISTICS',
    headline: 'A 22-truck regional carrier had no real-time visibility into whether individual loads were profitable.',
    body: 'Revenue looked fine at the top line. The problem was that fuel costs, driver overtime, and route inefficiencies were quietly eroding margins on specific lanes. and nobody knew until the accountant ran the quarterly numbers. The AI Opportunity Audit mapped their dispatch, payroll, fuel card, and invoicing systems. We built an automated cost-per-load tracking layer that pulls fuel charges, driver wages, and route data against each invoice in real time. Dispatchers now see a margin estimate per load before it\'s confirmed. Loss-making lanes have been repriced or eliminated.',
    results: [
      { metric: '$67,000', label: 'Annualized margin recovered on repriced lanes' },
      { metric: '4.2 hrs/day', label: 'Saved across dispatch and admin' },
      { metric: '$7,500', label: 'Standard audit investment' }
    ]
  }
];

export function CaseStudies() {
  return (
    <div className="w-full">
      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold md:text-5xl text-[var(--color-navy)]">Results From the Field</h2>
        <p className="mt-4 text-[var(--color-slate)]">
          Real operational outcomes from businesses like yours. Client details anonymized.
        </p>
      </ScrollReveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {caseStudies.map((study, index) => (
          <ScrollReveal key={study.headline} index={index}>
            <div className="h-full rounded-xl border border-[var(--color-border)] bg-white p-6 shadow-[0_10px_28px_rgba(11,31,59,0.08)]">
              <span className="inline-flex rounded-full bg-[rgba(107,114,128,0.15)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]">
                {study.industry}
              </span>

              <h3 className="mt-4 text-lg font-bold text-[var(--color-navy)]">{study.headline}</h3>

              <p className="mt-3 text-sm leading-relaxed text-[var(--color-slate)]">{study.body}</p>

              <div className="mt-5 space-y-3 border-t border-[var(--color-border)] pt-5">
                {study.results.map((result) => (
                  <div key={result.label} className="flex items-baseline gap-2">
                    <span className="text-lg font-extrabold text-cyan">{result.metric}</span>
                    <span className="text-sm text-[var(--color-slate)]">{result.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
