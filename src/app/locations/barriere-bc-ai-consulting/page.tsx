import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { buildFaqSchema } from '@/lib/schema';
import {
  BreadcrumbSchema,
  buildSimpleBreadcrumbs
} from '@/components/ui/breadcrumb-schema';

const PAGE_URL = 'https://bitdepthaiconsulting.com/locations/barriere-bc-ai-consulting';
const ORG_ID = 'https://bitdepthaiconsulting.com/#organization';

export const metadata: Metadata = {
  title: 'AI Consulting Based in Barriere, BC | BitDepth AI Consulting',
  description:
    'BitDepth AI Consulting is based in Barriere, British Columbia. Vendor-neutral AI consulting and automation for Canadian trades, contractors, and field-service businesses, delivered remotely from BC and on-site across Ontario.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'AI Consulting Based in Barriere, BC | BitDepth AI Consulting',
    description:
      'Based in Barriere, British Columbia. Vendor-neutral AI consulting for Canadian trades, contractors, and field-service businesses.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA'
  }
};

const localFaq = [
  {
    question: 'Where exactly is BitDepth based?',
    answer:
      'Barriere, British Columbia. About 65 kilometres north of Kamloops on Highway 5, in the Thompson-Nicola region of the BC interior. Most client engagements run remotely from there, with quarterly in-person visits across the Golden Horseshoe and southern Ontario for client work that needs an on-site presence.'
  },
  {
    question: 'Do you only work with BC clients?',
    answer:
      'No. The work splits across British Columbia, Alberta, and Ontario, with most active client work currently in Ontario. The Barriere base is where the firm is registered, where Blake works from, and where remote engagement delivery is run.'
  },
  {
    question: 'How does remote engagement delivery work?',
    answer:
      'The same way most professional services work in 2026. Discovery calls happen on video. Working sessions are screen-sharing through your CRM and dispatch tools. Documentation is shared in real time. We have built workflow automations and AI workers for clients we have never met in person, and the work delivers cleanly. For COR-stream contractors and on-site implementations, in-person visits are scheduled when they make sense.'
  },
  {
    question: 'Can we meet in person if we are in BC or Alberta?',
    answer:
      'Yes. Kamloops, Kelowna, and Calgary are all reasonable drives from Barriere. We schedule on-site time when the project benefits from it.'
  },
  {
    question: 'Why Barriere?',
    answer:
      'It is where the founder lives and where the work gets done. The firm runs lean by design. Operating costs stay low, which means the audit fee and the implementation pricing stay accessible for small and mid-sized contractors. Most of our trade and field-service clients run on similar economics.'
  }
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${PAGE_URL}#localbusiness`,
  parentOrganization: { '@id': ORG_ID },
  name: 'BitDepth AI Consulting Ltd. (Barriere, BC)',
  url: PAGE_URL,
  description:
    'BitDepth AI Consulting Ltd. is based in Barriere, British Columbia. Vendor-neutral AI consulting and automation for Canadian trades, contractors, and field-service businesses.',
  telephone: '+1-780-832-5158',
  email: 'blake@bitdepthaiconsulting.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Barriere',
    addressRegion: 'BC',
    addressCountry: 'CA'
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Barriere, British Columbia' },
    { '@type': 'AdministrativeArea', name: 'Kamloops, British Columbia' },
    { '@type': 'AdministrativeArea', name: 'British Columbia' },
    { '@type': 'AdministrativeArea', name: 'Alberta' },
    { '@type': 'AdministrativeArea', name: 'Ontario' },
    { '@type': 'Country', name: 'Canada' }
  ],
  priceRange: '$$',
  founder: { '@type': 'Person', name: 'Blake Cowan' }
};

export default function BarriereBcLocationPage() {
  return (
    <PageShell>
      <Script id="barriere-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <Script id="barriere-faq-schema" type="application/ld+json">
        {JSON.stringify(buildFaqSchema(localFaq))}
      </Script>
      <BreadcrumbSchema
        id="barriere-breadcrumbs"
        items={buildSimpleBreadcrumbs(
          'Barriere, BC',
          'locations/barriere-bc-ai-consulting'
        )}
      />

      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Based in BC, serving Canada</p>
            <h1 className="mt-6">
              AI consulting and automation, based in Barriere, British Columbia.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              BitDepth AI Consulting Ltd. is registered and run out of Barriere, BC. We deliver
              vendor-neutral AI consulting and automation to Canadian trades, contractors, and
              field-service businesses across British Columbia, Alberta, and Ontario.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?topic=audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/services/profit-leak-review" className="btn-outline">
                Start with a Profit Leak Review
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Local context */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Local context</p>
            <h2 className="mt-6">Where Barriere fits.</h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              <p>
                Barriere is in the Thompson-Nicola region of the BC interior, about 65
                kilometres north of Kamloops on Highway 5. The economy here runs on forestry,
                agriculture, ranching, and the trades that support those industries. It is a small
                place. The closest mid-size markets are Kamloops to the south, Kelowna over the
                hills to the southeast, and the Cariboo to the north.
              </p>
              <p>
                BitDepth was founded here for a practical reason. The firm runs lean by design.
                Operating costs in Barriere are a fraction of what they would be in Vancouver or
                Calgary, which means the audit fee and the implementation pricing stay accessible
                for the small and mid-sized contractors we work with. Most of our clients run on
                similar economics: tight margins, hands-on owners, and limited tolerance for
                consulting overhead that does not directly turn into operational improvement.
              </p>
              <p>
                Operationally, the BC interior trades market shares more with Alberta and rural
                Ontario than with Metro Vancouver. Calls cluster around emergency work, the
                seasonal patterns are real (forestry has a fire season, agriculture has harvest,
                everyone has freeze-up and breakup), and the inbound channel mix is more phone
                and word-of-mouth than search and form-fill. The automations that work for our
                clients are built around that operational reality.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Industries served from Barriere */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Industries we serve</p>
            <h2 className="mt-6">Trades and field services across BC, AB, and ON.</h2>
            <p className="mt-5 text-[var(--color-charcoal)]">
              The vertical mix is the same regardless of where the client sits. Most active
              engagements are with one of the following:
            </p>
            <ul className="mt-8 space-y-3 text-[var(--color-charcoal)]">
              <li>
                <Link
                  href="/industries/hvac-plumbing"
                  className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
                >
                  HVAC and plumbing contractors
                </Link>
                . Inbound-call recovery, dispatch automation, ServiceTitan and Jobber
                connectors. Common in BC, Alberta, and southern Ontario.
              </li>
              <li>
                <Link
                  href="/industries/electrical"
                  className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
                >
                  Electrical contractors
                </Link>
                . ESA notification automation in Ontario, journeyperson ratio tracking, job-cost
                visibility.
              </li>
              <li>
                <Link
                  href="/industries/roofing-ici-construction"
                  className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
                >
                  Roofing and ICI construction
                </Link>
                . Compliance documentation, sub-contractor pre-qualification, AuditSoft
                pre-population, bid-response automation.
              </li>
              <li>
                <Link
                  href="/industries/field-services"
                  className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
                >
                  Field-service operators
                </Link>
                . Pest control, restoration, commercial cleaning, snow removal, lawn care.
                Renewal automation, route optimization, customer comms.
              </li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Common projects from this base */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Common projects</p>
            <h2 className="mt-6">What we typically build from this base.</h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              <p>
                Most engagements that originate from the Barriere base fall into two patterns.
                The first is the diagnostic-first audit: a small-to-mid contractor calls because
                they suspect missed-call leakage or admin overload, we run a Profit Leak Review
                or a full AI Opportunity Audit, and from there we build the highest-ROI workflow
                first.
              </p>
              <p>
                The second pattern is the existing-relationship build. A previous client returns
                with a new piece of operational pain, we scope a focused workflow automation or
                a custom AI worker, and the work runs straight through without a fresh audit because
                the operational picture is already documented.
              </p>
              <p>
                Either way, the output looks the same. Sprint cadence, written acceptance
                criteria, pilot before launch, ongoing service after. The geographic distance
                between Barriere and the client matters less than the operational discipline of
                how the work is run.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured services */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-6">All six services available from this base.</h2>
            <p className="mt-5 text-[var(--color-charcoal)]">
              Engagement model is the same regardless of where the client sits. Discovery on
              video, working sessions through your existing tools, in-person visits scheduled
              when the project needs them.
            </p>
          </ScrollReveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              { label: 'AI Booking Agent', href: '/services/ai-booking-agent' },
              { label: 'Profit Leak Detection Review', href: '/services/profit-leak-review' },
              { label: 'AI Opportunity Audit', href: '/services/ai-audit' },
              { label: 'Missed Call Text Back', href: '/services/missed-call-text-back' },
              { label: 'Workflow Automation', href: '/services/workflow-automation' },
              { label: 'Custom AI Workers', href: '/services/custom-ai-workers' }
            ].map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="block rounded-md border border-[var(--color-border)] bg-white p-4 font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta)]"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Local FAQ</p>
            <h2 className="mt-6">Questions about working with a BC-based firm.</h2>
          </ScrollReveal>
          <div className="mt-10">
            <ScrollReveal index={1}>
              <FAQAccordion items={localFaq} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow justify-center">Audit first</span>
            <h2 className="mt-6 text-white">
              Audit first. Recommend what fits. Deliver outcomes.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Two-week diagnostic. Written deliverable. Audit fee credited toward implementation
              within 90 days.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact?topic=audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/services/profit-leak-review" className="btn-outline">
                Start with a Profit Leak Review for $250
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
