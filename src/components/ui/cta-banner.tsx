import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

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
        <ScrollReveal className="cta-shell px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-16">
          <div className="max-w-3xl">
            <p className="eyebrow">Next Step</p>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h2>
            <p className="mt-5 text-base text-white/65 sm:text-lg">{description}</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="btn-secondary border-white/20 bg-transparent text-white hover:border-cyan hover:text-cyan">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
