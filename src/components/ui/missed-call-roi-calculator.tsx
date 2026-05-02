'use client';

import { useMemo, useState } from 'react';

const currencyFormatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0
});

export function MissedCallRoiCalculator() {
  const [missedCallsPerDay, setMissedCallsPerDay] = useState(5);
  const [averageTicket, setAverageTicket] = useState(750);
  const [closeRate, setCloseRate] = useState(35);

  const monthlyRevenueAtRisk = useMemo(() => {
    const workingDays = 22;
    const closedRecoveries = (closeRate / 100) * missedCallsPerDay * workingDays;
    return Math.round(closedRecoveries * averageTicket);
  }, [missedCallsPerDay, averageTicket, closeRate]);

  return (
    <div className="rounded-md border border-[var(--color-border)] bg-white p-7 md:p-9">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
        ROI calculator
      </p>
      <h3 className="mt-3 text-[var(--color-navy)]">How much revenue is going to voicemail?</h3>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <FieldNumber
          label="Missed calls per day"
          min={1}
          max={40}
          step={1}
          value={missedCallsPerDay}
          onChange={setMissedCallsPerDay}
        />
        <FieldNumber
          label="Average ticket ($CAD)"
          min={100}
          max={10000}
          step={50}
          value={averageTicket}
          onChange={setAverageTicket}
          prefix="$"
        />
        <FieldNumber
          label="Close rate on captured leads (%)"
          min={5}
          max={90}
          step={1}
          value={closeRate}
          onChange={setCloseRate}
          suffix="%"
        />
      </div>
      <div className="mt-9 border-t border-[var(--color-border)] pt-7">
        <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">
          Estimated monthly revenue at risk
        </p>
        <p className="mt-2 font-serif text-4xl text-[var(--color-navy)] md:text-5xl tabular">
          {currencyFormatter.format(monthlyRevenueAtRisk)}
        </p>
        <p className="mt-3 text-sm text-[var(--color-slate)]">
          Assumes 22 working days per month. Estimate only. Actual recovery depends on your script,
          response time, and booking flow.
        </p>
      </div>
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
