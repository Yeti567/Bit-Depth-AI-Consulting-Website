import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const pad2 = (n: number) => String(n).padStart(2, '0');

export function Breadcrumb({ label }: { label: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--color-slate)]">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="hover:text-[var(--color-navy)]">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-[var(--color-slate)]/60">
          /
        </li>
        <li>
          <Link href="/services" className="hover:text-[var(--color-navy)]">
            Services
          </Link>
        </li>
        <li aria-hidden="true" className="text-[var(--color-slate)]/60">
          /
        </li>
        <li className="text-[var(--color-navy)]">{label}</li>
      </ol>
    </nav>
  );
}

interface ServiceHeroProps {
  eyebrow: string;
  breadcrumb: string;
  title: string;
  lead: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSrc: string;
  imageAlt: string;
  reassurance?: string;
}

export function ServiceHero({
  eyebrow,
  breadcrumb,
  title,
  lead,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageSrc,
  imageAlt,
  reassurance
}: ServiceHeroProps) {
  return (
    <section className="section-offwhite section-space">
      <div className="container-shell">
        <Breadcrumb label={breadcrumb} />
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="mt-6 max-w-2xl">{title}</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">{lead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel}
              </Link>
              {secondaryHref && secondaryLabel ? (
                <Link href={secondaryHref} className="btn-outline">
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
            {reassurance ? (
              <p className="mt-6 text-sm text-[var(--color-slate)]">{reassurance}</p>
            ) : null}
          </ScrollReveal>
          <ScrollReveal
            index={1}
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]"
          >
            <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

interface ProblemBlockProps {
  surface: 'cream' | 'stone';
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  pullQuote?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function ProblemBlock({
  surface,
  eyebrow,
  title,
  paragraphs,
  pullQuote,
  imageSrc,
  imageAlt
}: ProblemBlockProps) {
  const sectionClass = surface === 'cream' ? 'section-offwhite' : 'section-stone';
  const hasImage = Boolean(imageSrc && imageAlt);
  return (
    <section className={`${sectionClass} section-space section-rule`}>
      <div className="container-shell">
        <div
          className={
            hasImage
              ? 'grid gap-12 lg:grid-cols-[1.3fr,0.7fr] lg:items-start'
              : 'max-w-3xl'
          }
        >
          <ScrollReveal>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 className={eyebrow ? 'mt-6' : ''}>{title}</h2>
            <div className="mt-6 space-y-5 text-[var(--color-slate)]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {pullQuote ? (
              <p className="mt-6 border-l border-[var(--color-cyan)] pl-5 text-lg italic text-[var(--color-navy)]">
                {pullQuote}
              </p>
            ) : null}
          </ScrollReveal>
          {hasImage ? (
            <ScrollReveal
              index={1}
              className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)] lg:sticky lg:top-24"
            >
              <Image src={imageSrc!} alt={imageAlt!} fill className="object-cover" />
            </ScrollReveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export interface ListItem {
  title: string;
  description: string;
  meta?: string;
}

interface ListBlockProps {
  surface: 'cream' | 'stone';
  eyebrow: string;
  title: string;
  lead?: string;
  items: ListItem[];
  columns?: 2 | 3;
}

export function ListBlock({
  surface,
  eyebrow,
  title,
  lead,
  items,
  columns = 2
}: ListBlockProps) {
  const sectionClass = surface === 'cream' ? 'section-offwhite' : 'section-stone';
  const gridClass = columns === 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2';
  return (
    <section className={`${sectionClass} section-space section-rule`}>
      <div className="container-shell">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6">{title}</h2>
          {lead ? <p className="mt-5 text-[var(--color-slate)]">{lead}</p> : null}
        </ScrollReveal>
        <ul className={`mt-12 grid gap-x-10 gap-y-10 ${gridClass}`}>
          {items.map((item, index) => (
            <ScrollReveal key={item.title} index={index}>
              <li>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[var(--color-navy)]">{item.title}</h3>
                  {item.meta ? (
                    <span className="tabular shrink-0 text-sm font-semibold text-[var(--color-navy)]">
                      {item.meta}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 text-[var(--color-slate)]">{item.description}</p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessBlockProps {
  surface: 'cream' | 'stone';
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}

export function ProcessBlock({ surface, eyebrow, title, steps }: ProcessBlockProps) {
  const sectionClass = surface === 'cream' ? 'section-offwhite' : 'section-stone';
  const cols = steps.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';
  return (
    <section className={`${sectionClass} section-space section-rule`}>
      <div className="container-shell">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6">{title}</h2>
        </ScrollReveal>
        <ol className={`mt-12 grid gap-12 ${cols}`}>
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} index={index}>
              <li>
                <p className="font-mono text-sm text-[var(--color-cyan)] tabular">
                  {pad2(index + 1)}
                </p>
                <h3 className="mt-3 text-[var(--color-navy)]">{step.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{step.description}</p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export interface PricingRow {
  label: string;
  value: string;
  description?: string;
}

interface PricingBlockProps {
  surface: 'cream' | 'stone';
  eyebrow: string;
  title: string;
  lead?: string;
  rows: PricingRow[];
  note?: string;
  ctaHref: string;
  ctaLabel: string;
}

export function PricingBlock({
  surface,
  eyebrow,
  title,
  lead,
  rows,
  note,
  ctaHref,
  ctaLabel
}: PricingBlockProps) {
  const sectionClass = surface === 'cream' ? 'section-offwhite' : 'section-stone';
  return (
    <section className={`${sectionClass} section-space section-rule`}>
      <div className="container-shell max-w-3xl">
        <ScrollReveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-6">{title}</h2>
          {lead ? <p className="mt-5 text-[var(--color-slate)]">{lead}</p> : null}
        </ScrollReveal>
        <ScrollReveal index={1} className="mt-10">
          <dl className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-2 py-5 sm:grid-cols-[1fr,auto] sm:items-baseline sm:gap-8"
              >
                <div>
                  <dt className="font-semibold text-[var(--color-navy)]">{row.label}</dt>
                  {row.description ? (
                    <p className="mt-1 text-sm text-[var(--color-slate)]">{row.description}</p>
                  ) : null}
                </div>
                <dd className="tabular text-sm font-semibold text-[var(--color-navy)] sm:text-right">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          {note ? <p className="mt-6 text-sm text-[var(--color-slate)]">{note}</p> : null}
          <div className="mt-8">
            <Link href={ctaHref} className="btn-primary">
              {ctaLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

interface FinalCTAProps {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function FinalCTA({
  eyebrow,
  title,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: FinalCTAProps) {
  return (
    <section className="section-navy section-space">
      <div className="container-shell max-w-3xl text-center">
        <ScrollReveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-6 text-white">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-white/75">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className="btn-outline">
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
