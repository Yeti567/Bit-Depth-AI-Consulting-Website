import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import {
  buildServiceSchema,
  buildFaqSchema,
  type FAQItem
} from '@/lib/schema';
import {
  BreadcrumbSchema,
  buildServiceBreadcrumbs
} from '@/components/ui/breadcrumb-schema';
import type { Offer } from '@/lib/offers';

export interface ServicePageOfferStack {
  title: string;
  body: string;
}

export interface ServicePageProcessStep {
  n: string;
  title: string;
  body: string;
}

export interface ServicePageRelatedLink {
  label: string;
  href: string;
}

export interface ServicePageData {
  slug: string;
  offer: Offer;
  serviceType: string;
  schemaDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    subhead: string;
    priceAnchor?: string;
  };
  fitFor: string[];
  notFor: string[];
  problemTitle: string;
  problemParagraphs: string[];
  whatItDoesTitle: string;
  whatItDoes: ServicePageOfferStack[];
  toolsTitle: string;
  toolsLead: string;
  toolGroups: { label: string; items: string }[];
  toolsFootnote?: string;
  processTitle: string;
  processSteps: ServicePageProcessStep[];
  timelineTitle: string;
  timelineParagraphs: string[];
  willNotDoTitle: string;
  willNotDo: string[];
  faq: FAQItem[];
  relatedServices: ServicePageRelatedLink[];
  relatedIndustries: ServicePageRelatedLink[];
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primaryHref: string;
    primaryLabel: string;
    secondaryHref?: string;
    secondaryLabel?: string;
  };
}

export function ServicePage({ data }: { data: ServicePageData }) {
  const offerHref = data.offer.href;
  const fullUrl = `https://bitdepthaiconsulting.com${offerHref}`;

  return (
    <PageShell>
      <Script id={`service-${data.slug}-schema`} type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            data.offer.name,
            data.schemaDescription,
            fullUrl,
            data.serviceType,
            { price: data.offer.priceNumeric }
          )
        )}
      </Script>
      <Script id={`service-${data.slug}-faq-schema`} type="application/ld+json">
        {JSON.stringify(buildFaqSchema(data.faq))}
      </Script>
      <BreadcrumbSchema
        id={`service-${data.slug}-breadcrumbs`}
        items={buildServiceBreadcrumbs(data.offer.name, data.slug)}
      />

      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">{data.hero.eyebrow}</p>
            <h1 className="mt-6">{data.hero.title}</h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">{data.hero.subhead}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?topic=audit" className="btn-primary">
                {data.offer.primaryCta}
              </Link>
              <Link href="/services/profit-leak-review" className="btn-outline">
                Or start with a Profit Leak Review
              </Link>
            </div>
            {data.hero.priceAnchor ? (
              <p className="mt-6 text-sm text-[var(--color-slate)]">{data.hero.priceAnchor}</p>
            ) : null}
          </ScrollReveal>
        </div>
      </section>

      {/* Who this is for / not for */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Honest fit</p>
            <h2 className="mt-6">Who this is built for, and who it is not.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <ScrollReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Right fit
              </p>
              <ul className="mt-5 space-y-3">
                {data.fitFor.map((line) => (
                  <li key={line} className="flex gap-3 text-[var(--color-charcoal)]">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Not a fit
              </p>
              <ul className="mt-5 space-y-3">
                {data.notFor.map((line) => (
                  <li key={line} className="flex gap-3 text-[var(--color-slate)]">
                    <span aria-hidden="true" className="mt-1 inline-block h-4 w-4 shrink-0 text-center font-semibold text-[var(--color-slate)]">
                      &middot;
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The problem we solve */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">The problem</p>
            <h2 className="mt-6">{data.problemTitle}</h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              {data.problemParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What the system does */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">What it does</p>
            <h2 className="mt-6">{data.whatItDoesTitle}</h2>
          </ScrollReveal>
          <ul className="mt-10 divide-y divide-[var(--color-border)]">
            {data.whatItDoes.map((item, i) => (
              <ScrollReveal key={item.title} index={i} as="li" className="py-6 first:pt-0">
                <p className="font-semibold text-[var(--color-navy)]">{item.title}</p>
                <p className="mt-2 text-[var(--color-slate)]">{item.body}</p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Tools and integrations */}
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
          {data.toolsFootnote ? (
            <ScrollReveal index={data.toolGroups.length} className="mt-8">
              <p className="text-sm text-[var(--color-slate)]">{data.toolsFootnote}</p>
            </ScrollReveal>
          ) : null}
        </div>
      </section>

      {/* How we deliver it */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Process</p>
            <h2 className="mt-6">{data.processTitle}</h2>
          </ScrollReveal>
          <ol className="mt-12 space-y-10 lg:space-y-12">
            {data.processSteps.map((step, index) => (
              <ScrollReveal
                key={step.n}
                index={index}
                as="li"
                className="grid gap-4 lg:grid-cols-[180px,1fr] lg:gap-10"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                    {step.n}
                  </p>
                  <p className="mt-2 font-serif text-xl text-[var(--color-navy)]">{step.title}</p>
                </div>
                <p className="text-[var(--color-charcoal)]">{step.body}</p>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Timeline and pricing */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-6">{data.timelineTitle}</h2>
            <p className="mt-5 font-serif text-3xl text-[var(--color-navy)] tabular">
              {data.offer.price}
            </p>
            <div className="mt-5 space-y-5 text-[var(--color-charcoal)]">
              {data.timelineParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What we will not do */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Limits, by design</p>
            <h2 className="mt-6">{data.willNotDoTitle}</h2>
          </ScrollReveal>
          <ul className="mt-8 space-y-3">
            {data.willNotDo.map((line) => (
              <li key={line} className="flex gap-3 text-[var(--color-charcoal)]">
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                  aria-hidden="true"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Security and data handling */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Trust and control</p>
            <h3 className="mt-4 font-serif text-xl text-[var(--color-navy)]">
              How we handle your data and watch the system after launch.
            </h3>
            <p className="mt-4 text-[var(--color-charcoal)]">
              Every BitDepth automation is grounded in approved company knowledge, tested before
              launch, and monitored after launch. Your data is not used to train public AI models.
              You can pause or shut the system off in minutes. The full explanation lives on our
              Security and Data Handling page.
            </p>
            <Link
              href="/security-and-data"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)]"
            >
              Read about security and data handling
              <span aria-hidden="true">→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-6">Questions worth answering before we start.</h2>
          </ScrollReveal>
          <div className="mt-10">
            <ScrollReveal index={1}>
              <FAQAccordion items={data.faq} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Internal-link block */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <div className="grid gap-10 md:grid-cols-2">
            <ScrollReveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Related services
              </p>
              <ul className="mt-5 space-y-3">
                {data.relatedServices.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Industries we serve
              </p>
              <ul className="mt-5 space-y-3">
                {data.relatedIndustries.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow justify-center">{data.finalCta.eyebrow}</span>
            <h2 className="mt-6 text-white">{data.finalCta.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">{data.finalCta.body}</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={data.finalCta.primaryHref} className="btn-primary">
                {data.finalCta.primaryLabel}
              </Link>
              {data.finalCta.secondaryHref && data.finalCta.secondaryLabel ? (
                <Link href={data.finalCta.secondaryHref} className="btn-outline">
                  {data.finalCta.secondaryLabel}
                </Link>
              ) : null}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
