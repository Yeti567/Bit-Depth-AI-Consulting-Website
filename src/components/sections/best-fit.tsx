import { ScrollReveal } from '@/components/ui/scroll-reveal';

export function BestFit() {
  return (
    <section className="section-offwhite section-space section-rule">
      <div className="container-shell max-w-3xl">
        <ScrollReveal>
          <p className="eyebrow">Who this is for</p>
          <h2 className="mt-6">Best fit.</h2>
          <p className="mt-6 text-[var(--color-slate)]">
            BitDepth is usually the best fit for trades and service companies with ten or more
            employees. At that size, missed calls, slow follow-up, scattered systems, and manual
            admin work usually cost more than automation does. We work with HVAC, plumbing,
            electrical, roofing, and field-service businesses across Canada, with most of our
            active client work in Ontario.
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
            HVAC. Plumbing. Electrical. Roofing. Field service.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
