import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryPageData {
  // Breadcrumb + hero
  breadcrumbLabel: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  heroImageSrc: string;
  heroImageAlt: string;

  // Problem section
  problemTitle: string;
  problemParagraphs: string[];
  problemImageSrc: string;
  problemImageAlt: string;

  // Loss list
  lossEyebrow: string;
  lossTitle: string;
  losses: string[];

  // Solutions
  solutionsTitle: string;
  solutions: IndustrySolution[];

  // Final CTA
  ctaTitle: string;
  ctaBody: string;
}

function Breadcrumb({ label }: { label: string }) {
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
          <Link href="/industries" className="hover:text-[var(--color-navy)]">
            Industries
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

const pad2 = (n: number) => String(n).padStart(2, '0');

export function IndustryPage({ data }: { data: IndustryPageData }) {
  return (
    <PageShell>
      {/* 1. Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <Breadcrumb label={data.breadcrumbLabel} />
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <p className="eyebrow">{data.eyebrow}</p>
              <h1 className="mt-6 max-w-2xl">{data.heroTitle}</h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">{data.heroLead}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/ai-audit" className="btn-primary">
                  Book an AI Audit
                </Link>
                <Link href="/contact" className="btn-outline">
                  Book a discovery call
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal
              index={1}
              className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]"
            >
              <Image
                src={data.heroImageSrc}
                alt={data.heroImageAlt}
                fill
                priority
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. The problem */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1.3fr,0.7fr] lg:items-start">
            <ScrollReveal>
              <p className="eyebrow">The problem</p>
              <h2 className="mt-6">{data.problemTitle}</h2>
              <div className="mt-6 space-y-5 text-[var(--color-slate)]">
                {data.problemParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal
              index={1}
              className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)] lg:sticky lg:top-24"
            >
              <Image
                src={data.problemImageSrc}
                alt={data.problemImageAlt}
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Where they lose */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">{data.lossEyebrow}</p>
            <h2 className="mt-6">{data.lossTitle}</h2>
          </ScrollReveal>
          <ul className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {data.losses.map((item, index) => (
              <ScrollReveal key={item} index={index}>
                <li className="flex items-start gap-4">
                  <span className="font-mono text-sm tabular text-[var(--color-cyan)] pt-1">
                    {pad2(index + 1)}
                  </span>
                  <span className="text-[var(--color-charcoal)]">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. What AI fixes */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">What we fix</p>
            <h2 className="mt-6">{data.solutionsTitle}</h2>
          </ScrollReveal>
          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {data.solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} index={index}>
                <li>
                  <h3 className="text-[var(--color-navy)]">{solution.title}</h3>
                  <p className="mt-3 text-[var(--color-slate)]">{solution.description}</p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Find out</span>
            <h2 className="mt-6 text-white">{data.ctaTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">{data.ctaBody}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a discovery call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
