import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { FAQSchemaScript } from '@/components/ui/faq-schema-script';
import { CaseStudies } from '@/components/ui/case-studies';
import { LeadMagnet } from '@/components/ui/lead-magnet';
import { buildOrganizationSchema, buildWebSiteSchema, buildLocalBusinessSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI and Automation for Canadian Trades and Contractors | BitDepth AI',
  description:
    'Vendor-neutral AI consulting for Canadian trades and contractors. We diagnose where the money is leaking, then build the AI and automation that plugs the leak. Audits from $5,000.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/' },
  openGraph: {
    title: 'AI and Automation for Canadian Trades and Contractors | BitDepth AI',
    description:
      'Vendor-neutral AI consulting for Canadian trades and contractors. Audit first. Recommend what fits. Deliver outcomes.',
    url: 'https://bitdepthaiconsulting.com/',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'BitDepth AI Consulting' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI and Automation for Canadian Trades and Contractors | BitDepth AI',
    description:
      'Vendor-neutral AI consulting for Canadian trades and contractors. Audits from $5,000.',
    images: ['/images/og-home.jpg']
  }
};

const painPoints = [
  {
    title: 'Calls go to voicemail and never come back.',
    description:
      'Industry data puts missed-call rates at 30 to 50 percent in residential trades. Every missed call is a competitor’s win.'
  },
  {
    title: 'Estimates take days.',
    description:
      'By the time the quote goes out, the homeowner has already booked someone else.'
  },
  {
    title: 'Jobs get re-keyed into three systems.',
    description:
      'Dispatch, accounting, and invoicing all live in different places, and your office staff is the integration.'
  },
  {
    title: 'Owner is the bottleneck.',
    description:
      'Quoting, scheduling, follow-ups, and collections all stop when the owner is on a tool.'
  }
];

const processSteps = [
  {
    title: 'Diagnose',
    description:
      'A structured AI Opportunity Audit across operations, data, and tech stack. We map your processes and identify where AI will deliver the highest ROI for your specific business.'
  },
  {
    title: 'Design',
    description:
      'A prioritized roadmap. Short-term quick wins and longer-term strategic initiatives, with realistic ROI estimates for each.'
  },
  {
    title: 'Implement',
    description:
      'We build and deploy the right solution. Automations, AI workers, dashboards, or integrations. No theatre, no wasted budget.'
  }
];

const services = [
  {
    title: 'AI Opportunity Audit',
    href: '/services/ai-audit',
    description:
      'Structured discovery of where AI will save you the most time and money. Includes roadmap and ROI estimates.',
    price: 'From $5,000'
  },
  {
    title: 'Missed Call Text Back',
    href: '/services/missed-call-text-back',
    description:
      'AI receptionist plus auto-text recovery for every missed call. Canadian compliance built in.',
    price: 'From $497/mo'
  },
  {
    title: 'Workflow Automation',
    href: '/services/workflow-automation',
    description:
      'Automate repetitive processes across invoicing, scheduling, onboarding, and more.',
    price: 'From $5,000'
  },
  {
    title: 'Custom AI Workers',
    href: '/services/custom-ai-workers',
    description:
      'Purpose-built AI agents that perform defined job functions inside your business.',
    price: 'From $10,000'
  },
  {
    title: 'AI Implementation',
    href: '/services/ai-implementation',
    description:
      'Multi-phase AI implementation strategy aligned to your business goals and budget.',
    price: 'From $12,000'
  }
];

const homepageFaq = [
  {
    question: 'What makes you qualified to do this?',
    answer:
      'Blake has spent the last five years working in AI, first as a salesperson, then hands-on inside the trade and field services industries. When you hire BitDepth, you are getting that experience applied directly to your business, not handed off to a junior.'
  },
  {
    question: 'What if the audit does not find anything useful?',
    answer:
      'That is a real outcome and we will tell you if it applies to you. If your business is not ready for AI yet, you leave with a clear picture of what needs to be in place before it makes sense, plus a prioritized plan to get there. That roadmap has value on its own.'
  },
  {
    question: 'How much of my time will this take?',
    answer:
      'We keep the owner involvement to about 90 minutes of structured interview, plus access to the people doing the work (dispatcher, lead estimator, office manager). Most clients find the audit takes less time than they expected.'
  },
  {
    question: 'Is the outcome guaranteed?',
    answer:
      'We guarantee the audit credit. 100 percent of what you pay for the audit is credited against any implementation you move forward with inside 90 days. What we cannot guarantee is a specific ROI, because that depends on your business, your data, and how you execute. What we can guarantee is honesty about what we find, including if the numbers do not justify building anything yet.'
  },
  {
    question: 'How does the audit credit actually work?',
    answer:
      'Simple. You pay for the audit. We deliver it. If you decide to move forward with any implementation (Missed Call Text Back, workflow automation, AI workers, or a multi-phase build), the full audit fee comes off your project invoice. No minimums, no conditions beyond the 90-day window.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function HomePage() {
  return (
    <PageShell>
      <Script id="organization-schema" type="application/ld+json">
        {JSON.stringify(buildOrganizationSchema())}
      </Script>
      <Script id="localbusiness-schema" type="application/ld+json">
        {JSON.stringify(buildLocalBusinessSchema())}
      </Script>
      <Script id="website-schema" type="application/ld+json">
        {JSON.stringify(buildWebSiteSchema())}
      </Script>
      <FAQSchemaScript faqs={homepageFaq} id="homepage-faq-schema" />

      {/* 1. Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Vendor-neutral AI consulting for Canadian trades</p>
            <h1 className="mt-6 max-w-2xl text-[var(--color-navy)]">
              Stop bleeding revenue from missed calls and broken admin.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Most Canadian trades and contractors are losing 30 to 50 percent of their inbound
              calls and re-keying every job into three different systems. We diagnose where the
              money is leaking, then build the AI and automation that plugs the leak. Audit first.
              Recommend what fits. Deliver outcomes.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/services" className="btn-outline">
                See how we work
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              No software sales. Canadian-owned. Starting at <span className="tabular">$5,000</span>.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/hero-home-trades-ontario.webp"
              alt="Suburban Ontario residential driveway at golden hour with a service van"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 2. The Real Problem */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">The real problem</p>
            <h2 className="mt-6">You do not need more software. You need to stop the leak.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Most contractors we meet have already bought a CRM, a field service tool, and a
              quoting platform. The problem is not tools. The problem is the gap between them.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {painPoints.map((point, index) => (
              <ScrollReveal key={point.title} index={index}>
                <p className="font-mono text-sm text-[var(--color-cyan)] tabular">{pad2(index + 1)}</p>
                <h3 className="mt-3 text-[var(--color-navy)]">{point.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{point.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section id="how-it-works" className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-6">A three-step process. No theatre.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} index={index}>
                <p className="font-mono text-sm text-[var(--color-cyan)] tabular">{pad2(index + 1)}</p>
                <h3 className="mt-3 text-[var(--color-navy)]">{step.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12">
            <Link href="/ai-audit" className="btn-primary">
              Book an AI Audit
            </Link>
            <Link
              href="/resources/what-can-i-expect-in-an-ai-discovery-audit"
              className="ml-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
            >
              Read the audit walkthrough <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. Audit Credit Guarantee */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">The audit credit guarantee</p>
            <h2 className="mt-6">Your audit pays for itself. Guaranteed.</h2>
            <p className="mt-6 text-[var(--color-slate)]">
              When you complete an AI Opportunity Audit and move forward with any recommended
              implementation, we credit the full cost of your audit, dollar for dollar, against your
              project invoice. No conditions. No minimums. No fine print.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3 border-t border-[var(--color-border)] pt-8">
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">Credit</p>
                <p className="mt-2 text-[var(--color-navy)]"><span className="tabular font-bold">100%</span> of audit fee</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">Window</p>
                <p className="mt-2 text-[var(--color-navy)]"><span className="tabular font-bold">90</span> days from delivery</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-slate)]">Applies to</p>
                <p className="mt-2 text-[var(--color-navy)]">Any implementation</p>
              </div>
            </div>
            <Link href="/ai-audit" className="btn-primary mt-10">
              Book an AI Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. Services */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Services</p>
            <h2 className="mt-6">Five ways we work with you.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Each service meets your business at its current stage. Most clients start with the
              audit.
            </p>
          </ScrollReveal>
          <div className="mt-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {services.map((service, index) => (
              <ScrollReveal
                key={service.title}
                index={index}
                className="grid gap-4 py-7 md:grid-cols-[1fr,2fr,auto] md:items-baseline md:gap-10"
              >
                <div>
                  <Link href={service.href} className="text-[var(--color-navy)] hover:text-[var(--color-cyan)]">
                    <h3>{service.title}</h3>
                  </Link>
                </div>
                <p className="text-[var(--color-slate)]">{service.description}</p>
                <p className="tabular text-sm font-semibold text-[var(--color-navy)] md:text-right">
                  {service.price}
                </p>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/services" className="btn-outline">
              View service details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Case Studies */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <CaseStudies />
        </div>
      </section>

      {/* 7. Founder + Philosophy */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell grid gap-12 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <ScrollReveal className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)] lg:sticky lg:top-24">
            <Image
              src="/images/about-blake-landscape.webp"
              alt="Thompson River valley in interior British Columbia at golden hour"
              fill
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal index={1}>
            <p className="eyebrow">The founder</p>
            <h2 className="mt-6">Blake Cowan</h2>
            <p className="mt-1 text-[var(--color-slate)]">Founder, BitDepth AI Consulting</p>
            <div className="mt-8 space-y-5 text-[var(--color-charcoal)]">
              <p>
                Blake has spent the last five years working in AI, first as a salesperson, then
                hands-on inside the trade and field services industries. That experience has been
                the foundation for everything BitDepth does.
              </p>
              <p>
                He started BitDepth because Canadian trades and small contractors are one of the
                most underserved markets in professional services. Large consultancies do not show
                up. Freelancers do not have a methodology. Nobody is building AI for the way
                Canadian field service businesses actually run, with one truck, one dispatcher, and
                an owner who answers their own phone.
              </p>
              <p>
                One thing Blake learned early. Data and systems have to be solid before AI does
                anything useful. Build on a shaky foundation and everything you build with AI
                becomes a house of cards. That belief shapes how BitDepth runs every engagement.
              </p>
              <p className="border-l border-[var(--color-cyan)] pl-5 text-lg italic text-[var(--color-navy)]">
                Most businesses are not ready for AI yet. That is not a criticism. It is the
                reality. A lot of companies are going to be disappointed because they jumped in
                before their data and processes were ready to support it.
              </p>
              <p>
                Before we recommend anything, we run a discovery audit. We tell you exactly where
                you stand. What is working, what is not, and what needs fixing before AI will do
                you any good. That honesty is the most valuable thing we offer.
              </p>
              <p>
                BitDepth is lean by design. Blake works with a small group of trusted consultants,
                which keeps costs reasonable and means you are always dealing with someone who
                actually knows your file.
              </p>
            </div>
            <div className="mt-10 grid gap-4 border-t border-[var(--color-border)] pt-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                <p className="text-sm text-[var(--color-slate)]">
                  <strong className="text-[var(--color-navy)]">We do not sell software.</strong>{' '}
                  We recommend the right solution, not the one we are paid to push.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                <p className="text-sm text-[var(--color-slate)]">
                  <strong className="text-[var(--color-navy)]">Built for Canadian SMBs.</strong>{' '}
                  Enterprise thinking at SMB scale, with PIPEDA-aware data handling.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                <p className="text-sm text-[var(--color-slate)]">
                  <strong className="text-[var(--color-navy)]">Diagnosis, not prescription.</strong>{' '}
                  Every engagement begins with a structured audit.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                <p className="text-sm text-[var(--color-slate)]">
                  <strong className="text-[var(--color-navy)]">Measurable ROI.</strong> We estimate
                  ROI before we build. If the numbers do not work, we tell you.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-6">Frequently asked.</h2>
          </ScrollReveal>
          <div className="mt-12 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {homepageFaq.map((item, index) => (
              <ScrollReveal key={item.question} index={index} className="py-7">
                <h3 className="text-[var(--color-navy)]">{item.question}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{item.answer}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Lead Magnet */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <LeadMagnet source="homepage" />
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Start here</span>
            <h2 className="mt-6 text-white">Start with a diagnostic, not a guess.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Before building anything, we identify where the money is leaking and where AI will
              actually make an impact.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an Audit
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
