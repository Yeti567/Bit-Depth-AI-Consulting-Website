'use client';

import { useMemo, useState } from 'react';

const currencyFormatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0
});

const CALENDLY_URL = 'https://calendly.com/blake-bitdepthaiconsulting/30min';

function clamp(value: number, min: number, max: number) {
  if (!Number.isFinite(value)) return min;
  return Math.max(min, Math.min(max, value));
}

export function MissedRevenueCalculator() {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number | ''>(10);
  const [averageJobValue, setAverageJobValue] = useState<number | ''>(850);
  const [closeRate, setCloseRate] = useState<number | ''>(30);

  const { monthlyAtRisk, annualAtRisk } = useMemo(() => {
    const calls = typeof missedCallsPerWeek === 'number' ? Math.max(0, missedCallsPerWeek) : 0;
    const value = typeof averageJobValue === 'number' ? Math.max(0, averageJobValue) : 0;
    const rate = typeof closeRate === 'number' ? clamp(closeRate, 0, 100) : 0;
    const monthly = calls * 4.33 * value * (rate / 100);
    return { monthlyAtRisk: monthly, annualAtRisk: monthly * 12 };
  }, [missedCallsPerWeek, averageJobValue, closeRate]);

  return (
    <div className="rounded-md border border-[var(--color-border)] bg-white p-7 md:p-9">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
        Missed Revenue Calculator
      </p>
      <h3 className="mt-3 text-[var(--color-navy)]">See what every missed call is costing you.</h3>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <NumberField
          id="calc-missed-calls"
          label="Missed calls per week"
          value={missedCallsPerWeek}
          onChange={setMissedCallsPerWeek}
          min={0}
          step={1}
        />
        <NumberField
          id="calc-job-value"
          label="Average job value (CAD)"
          value={averageJobValue}
          onChange={setAverageJobValue}
          min={0}
          step={50}
          prefix="$"
        />
        <NumberField
          id="calc-close-rate"
          label="Estimated close rate (%)"
          value={closeRate}
          onChange={setCloseRate}
          min={0}
          max={100}
          step={1}
          suffix="%"
        />
      </div>

      <div className="mt-9 grid gap-6 border-t border-[var(--color-border)] pt-7 md:grid-cols-2">
        <div className="rounded-md bg-[var(--color-offwhite)] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">
            Estimated monthly revenue at risk
          </p>
          <p className="tabular mt-2 text-4xl font-bold text-[var(--color-navy)] md:text-5xl">
            {currencyFormatter.format(Math.round(monthlyAtRisk))}
          </p>
        </div>
        <div className="rounded-md bg-[var(--color-navy)] p-6 text-white">
          <p className="text-xs uppercase tracking-[0.14em] text-white/70">
            Estimated annual revenue at risk
          </p>
          <p className="tabular mt-2 text-4xl font-bold md:text-5xl">
            {currencyFormatter.format(Math.round(annualAtRisk))}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm text-[var(--color-slate)]">
        Estimate only. Actual recovery depends on response time, script quality, and your booking flow.
      </p>

      <div className="mt-7">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Get a Breakdown of Where This Is Happening
        </a>
      </div>
    </div>
  );
}

interface NumberFieldProps {
  id: string;
  label: string;
  value: number | '';
  onChange: (value: number | '') => void;
  min?: number;
  max?: number;
  step?: number;
  prefix?: string;
  suffix?: string;
}

function NumberField({ id, label, value, onChange, min, max, step, prefix, suffix }: NumberFieldProps) {
  const helpId = `${id}-help`;
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
        {label}
      </span>
      <div className="flex items-baseline gap-1 rounded border border-[var(--color-border-strong)] bg-[var(--color-offwhite)] px-3 py-2 focus-within:border-[var(--color-cyan)] focus-within:ring-2 focus-within:ring-[var(--color-cyan)]/20">
        {prefix ? <span className="text-sm text-[var(--color-slate)]">{prefix}</span> : null}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          aria-describedby={helpId}
          onChange={(event) => {
            const raw = event.target.value;
            if (raw === '') {
              onChange('');
              return;
            }
            const next = Number(raw);
            if (!Number.isFinite(next)) return;
            const lower = typeof min === 'number' ? Math.max(min, next) : next;
            const clamped = typeof max === 'number' ? Math.min(max, lower) : lower;
            onChange(clamped);
          }}
          className="w-full bg-transparent p-0 text-base font-semibold text-[var(--color-navy)] tabular focus:outline-none"
          style={{ border: 'none', boxShadow: 'none' }}
        />
        {suffix ? <span className="text-sm text-[var(--color-slate)]">{suffix}</span> : null}
      </div>
      <span id={helpId} className="sr-only">
        Enter a numeric value{typeof min === 'number' ? `, minimum ${min}` : ''}
        {typeof max === 'number' ? `, maximum ${max}` : ''}.
      </span>
    </label>
  );
}
