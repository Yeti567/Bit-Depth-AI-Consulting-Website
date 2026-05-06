'use client';

import { useMemo, useState } from 'react';

const currencyFormatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0
});

const PLANS = [
  { name: 'Starter', price: 497 },
  { name: 'Standard', price: 697 },
  { name: 'Pro', price: 897 }
] as const;

type PlanName = (typeof PLANS)[number]['name'];

const WEEKS_PER_MONTH = 4.33;

export function MissedCallRoiCalculator() {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState(15);
  const [averageJobValue, setAverageJobValue] = useState(450);
  const [opportunityRate, setOpportunityRate] = useState(60);
  const [bookingRate, setBookingRate] = useState(40);
  const [planName, setPlanName] = useState<PlanName>('Standard');

  const planPrice = useMemo(
    () => PLANS.find((plan) => plan.name === planName)?.price ?? 497,
    [planName]
  );

  const monthlyRevenueAtRisk = useMemo(() => {
    const calls = missedCallsPerWeek * WEEKS_PER_MONTH;
    const opportunities = calls * (opportunityRate / 100);
    return Math.round(opportunities * averageJobValue);
  }, [missedCallsPerWeek, opportunityRate, averageJobValue]);

  const monthlyRevenueRecovered = useMemo(
    () => Math.round(monthlyRevenueAtRisk * (bookingRate / 100)),
    [monthlyRevenueAtRisk, bookingRate]
  );

  const breakEvenJobs = useMemo(() => {
    if (averageJobValue <= 0) return 0;
    return Math.max(1, Math.ceil(planPrice / averageJobValue));
  }, [planPrice, averageJobValue]);

  const jobWord = breakEvenJobs === 1 ? 'job' : 'jobs';

  return (
    <div className="rounded-md border border-[var(--color-border)] bg-white p-6 shadow-[0_1px_2px_rgba(28,31,38,0.04),0_8px_24px_rgba(28,31,38,0.06)] sm:p-9 md:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.05fr,1fr]">
        <div>
          <h3 className="sr-only">Missed call revenue calculator inputs</h3>
          <div className="grid gap-6">
            <FieldNumber
              label="Missed calls per week"
              min={0}
              max={100}
              step={1}
              value={missedCallsPerWeek}
              onChange={setMissedCallsPerWeek}
            />
            <FieldNumber
              label="Average job value (CAD)"
              min={100}
              max={10000}
              step={50}
              value={averageJobValue}
              onChange={setAverageJobValue}
              prefix="$"
            />
            <FieldNumber
              label="Real opportunities (% of missed calls)"
              min={0}
              max={100}
              step={1}
              value={opportunityRate}
              onChange={setOpportunityRate}
              suffix="%"
            />
            <FieldNumber
              label="Booking rate after recovery"
              min={0}
              max={100}
              step={1}
              value={bookingRate}
              onChange={setBookingRate}
              suffix="%"
            />
            <fieldset className="flex flex-col gap-2">
              <legend className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Plan
              </legend>
              <div
                role="radiogroup"
                aria-label="Plan"
                className="mt-1 grid grid-cols-3 gap-2"
              >
                {PLANS.map((plan) => {
                  const active = plan.name === planName;
                  return (
                    <button
                      key={plan.name}
                      type="button"
                      role="radio"
                      aria-checked={active}
                      onClick={() => setPlanName(plan.name)}
                      className={[
                        'flex cursor-pointer flex-col items-start gap-1 rounded border px-3 py-3 text-left transition',
                        active
                          ? 'border-[var(--color-terracotta)] bg-[var(--color-offwhite)]'
                          : 'border-[var(--color-border)] bg-white hover:border-[var(--color-border-strong)]'
                      ].join(' ')}
                    >
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                        {plan.name}
                      </span>
                      <span className="font-serif text-lg text-[var(--color-navy)] tabular">
                        {currencyFormatter.format(plan.price)}
                        <span className="text-xs font-sans text-[var(--color-slate)]">/mo</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-7 rounded-md bg-[var(--color-offwhite)] p-6 sm:p-8">
          <Stat
            label="Monthly revenue at risk"
            value={currencyFormatter.format(monthlyRevenueAtRisk)}
          />
          <Stat
            label="Estimated monthly revenue recovered"
            value={currencyFormatter.format(monthlyRevenueRecovered)}
          />
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">
              Break-even
            </p>
            <p className="mt-2 font-serif text-xl text-[var(--color-navy)] tabular sm:text-2xl">
              {breakEvenJobs} {jobWord} per month
            </p>
          </div>
          <p className="border-t border-[var(--color-border)] pt-6 font-serif text-2xl leading-snug text-[var(--color-terracotta)] sm:text-3xl">
            At {currencyFormatter.format(planPrice)}, this pays for itself if it recovers{' '}
            <span className="tabular">{breakEvenJobs}</span> {jobWord} per month.
          </p>
        </div>
      </div>

      <p className="mt-8 text-xs text-[var(--color-slate)]">
        Estimate only. Actual recovery depends on your script, response time, and booking flow.
        Defaults are based on industry data; change them to match your business.
      </p>
    </div>
  );
}

interface FieldNumberProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
}

function FieldNumber({ label, value, min, max, step, onChange, prefix, suffix }: FieldNumberProps) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
        {label}
      </span>
      <div className="flex items-baseline gap-1 rounded border border-[var(--color-border)] bg-[var(--color-offwhite)] px-3 py-2">
        {prefix ? <span className="text-sm text-[var(--color-slate)]">{prefix}</span> : null}
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (Number.isFinite(next)) {
              onChange(Math.max(min, Math.min(max, next)));
            }
          }}
          className="w-full bg-transparent text-base font-semibold text-[var(--color-navy)] tabular focus:outline-none"
        />
        {suffix ? <span className="text-sm text-[var(--color-slate)]">{suffix}</span> : null}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="accent-[var(--color-terracotta)]"
        aria-label={label}
      />
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">{label}</p>
      <p className="mt-2 font-serif text-3xl text-[var(--color-navy)] tabular sm:text-4xl">
        {value}
      </p>
    </div>
  );
}
