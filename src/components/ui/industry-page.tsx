import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { buildFaqSchema, type FAQItem } from '@/lib/schema';

export interface IndustrySolution {
  title: string;
  description: string;
}

export interface IndustryToolGroup {
  label: string;
  items: string;
}

export interface IndustryRelatedLink {
  label: string;
  href: string;
}

export interface IndustryPageData {
  // Slug for schema ids
  slug: string;

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
  problemImageSrc?: string;
  problemImageAlt?: string;

  // Loss list
  lossEyebrow: string;
  lossTitle: string;
  losses: string[];

  // Solutions
  solutionsTitle: string;
  solutions: IndustrySolution[];

  // Tools and integrations
  toolsTitle: string;
  toolsLead: string;
  toolGroups: IndustryToolGroup[];

  // Local context
  localContextTitle: string;
  localContextParagraphs: string[];

  // Typical engagement
  typicalEngagementTitle: string;
  typicalEngagement: string;

  // Featured services
  featuredServicesTitle: string;
  featuredServices: IndustryRelatedLink[];

  // FAQ
  faqTitle: string;
  faq: FAQItem[];

  // Related industries
  relatedIndustriesTitle: string;
  relatedIndustries: IndustryRelatedLink[];

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
      <Script id={`industry-${data.slug}-faq-schema`} type="application/ld+json">
        {JSON.stringify(buildFaqSchema(data.faq))}
      </Script>

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
                <Link href="/contact?topic=audit" className="btn-primary">
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
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          {data.problemImageSrc ? (
            <div className="grid gap-12 lg:grid-cols-[1.3fr,0.7fr] lg:items-start">
              <ScrollReveal>
                <p className="eyebrow">The problem</p>
                <h2 className="mt-6">{data.problemTitle}</h2>
                <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
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
                  alt={data.problemImageAlt ?? ''}
                  fill
                  className="object-cover"
                />
              </ScrollReveal>
            </div>
          ) : (
            <ScrollReveal className="max-w-3xl">
              <p className="eyebrow">The problem</p>
              <h2 className="mt-6">{data.problemTitle}</h2>
              <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
                {data.problemParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
          )}
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
                  <p className="mt-3 text-[var(--color-charcoal)]">{solution.description}</p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Tools and integrations */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Tools and integrations</p>
            <h2 className="mt-6">{data.toolsTitle}</h2>
            <p className="mt-5 text-[var(--color-charcoal)]">{data.toolsLead}</p>
          </ScrollReveal>
          <ul className="mt-8 space-y-5">
            {data.toolGroups.map((group, i) => (
              <ScrollReveal key={group.label} index={i} as="li">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                  {group.label}
                </p>
                <p className="mt-2 text-[var(--color-charcoal)]">{group.items}</p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Local context */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Local context</p>
            <h2 className="mt-6">{data.localContextTitle}</h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              {data.localContextParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. A typical engagement */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Engagement</p>
            <h2 className="mt-6">{data.typicalEngagementTitle}</h2>
            <p className="mt-6 text-[var(--color-charcoal)]">{data.typicalEngagement}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Featured services */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Featured services</p>
            <h2 className="mt-6">{data.featuredServicesTitle}</h2>
          </ScrollReveal>
          <ul className="mt-10 grid gap-x-10 gap-y-4 md:grid-cols-3">
            {data.featuredServices.map((service, i) => (
              <ScrollReveal key={service.href} index={i} as="li">
                <Link
                  href={service.href}
                  className="group flex items-start gap-3 rounded-md border border-[var(--color-border)] bg-white p-5 transition hover:border-[var(--color-terracotta)]"
                >
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-terracotta)]">
                    {service.label}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-6">{data.faqTitle}</h2>
          </ScrollReveal>
          <div className="mt-10">
            <ScrollReveal index={1}>
              <FAQAccordion items={data.faq} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 10. Related industries */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Related industries</p>
            <h2 className="mt-6">{data.relatedIndustriesTitle}</h2>
          </ScrollReveal>
          <ul className="mt-8 space-y-3">
            {data.relatedIndustries.map((industry) => (
              <li key={industry.href}>
                <Link
                  href={industry.href}
                  className="text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
                >
                  {industry.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Find out</span>
            <h2 className="mt-6 text-white">{data.ctaTitle}</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">{data.ctaBody}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact?topic=audit" className="btn-primary">
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
