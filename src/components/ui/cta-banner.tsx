import Link from 'next/link';

export function CtaBanner({
  title,
  description,
  primaryHref = '/ai-audit',
  primaryLabel = 'Book Your AI Audit',
  secondaryHref,
  secondaryLabel
}: {
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-[2rem] bg-navy px-8 py-12 text-white md:px-12 md:py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Next Step</p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">{title}</h2>
            <p className="mt-5 text-lg text-white/80">{description}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="btn-secondary border-white/20 bg-transparent text-white hover:border-cyan hover:text-cyan">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
