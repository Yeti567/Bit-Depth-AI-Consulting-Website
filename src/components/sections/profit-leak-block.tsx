import Link from 'next/link';
import { Check } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const points = [
  'Written report delivered within five business days.',
  'Specific, dollar-figure estimates of where revenue is leaking.',
  'Credited 100 percent toward implementation if you move forward.'
];

export function ProfitLeakBlock() {
  return (
    <section className="section-offwhite section-space section-rule">
      <div className="container-shell max-w-3xl">
        <ScrollReveal>
          <p className="eyebrow">Soft entry</p>
          <h2 className="mt-6">
            Not ready for a full AI audit? Start with a Profit Leak Detection Review.
          </h2>
          <p className="mt-5 text-[var(--color-slate)]">
            For $250 CAD, we review where your business may be losing revenue through missed
            calls, slow quote follow-up, and broken booking workflows. You get a written report
            showing where revenue is leaking, what it may be costing you, and what can be done to
            fix it. If you move forward with an automation, the $250 is credited toward the
            project.
          </p>
        </ScrollReveal>
        <ScrollReveal index={1} className="mt-8">
          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-[var(--color-charcoal)]">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                  aria-hidden="true"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal index={2} className="mt-9">
          <Link href="/profit-leak-review" className="btn-primary">
            Book a Profit Leak Review
          </Link>
          <p className="mt-4 text-sm text-[var(--color-slate)]">
            Or{' '}
            <Link
              href="/ai-audit"
              className="font-semibold text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)]"
            >
              learn about the full AI Opportunity Audit
            </Link>
            .
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
