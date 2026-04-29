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
  title: 'AI Consulting for Canadian Businesses | Bit Depth AI',
  description:
    'Vendor-neutral AI consulting for Canadian small and mid-sized businesses. We audit first, then build what fits. Starting at $5,000. Book a free discovery call.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/' },
  openGraph: {
    title: 'AI Consulting for Canadian Businesses | Bit Depth AI',
    description:
      'Vendor-neutral AI consulting for Canadian small and mid-sized businesses. We audit first, then build what fits. Starting at $5,000. Book a free discovery call.',
    url: 'https://bitdepthaiconsulting.com/',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630, alt: 'Bit Depth AI Consulting' }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Canadian Businesses | Bit Depth AI',
    description:
      'Vendor-neutral AI consulting for Canadian small and mid-sized businesses. We audit first, then build what fits. Starting at $5,000.',
    images: ['/images/og-home.jpg']
  }
};

const painPoints = [
  {
    title: 'Data spread across disconnected systems',
    description: "Your team can't get a clear picture because information lives in four different places."
  },
  {
    title: 'Manual processes eating staff time',
    description: 'Repetitive admin work that should take minutes takes hours every single day.'
  },
  {
    title: 'Decisions made on incomplete information',
    description: "You're running the business on gut feel because the data isn't visible or usable."
  },
  {
    title: "Systems that don't talk to each other",
    description: 'Quoting, scheduling, invoicing, and reporting all require manual re-entry.'
  }
];

const processSteps = [
  {
    title: 'Diagnose',
    description:
      'A structured AI Opportunity Audit across your operations, data, and technology stack. We map your processes and identify where AI will deliver the highest ROI.'
  },
  {
    title: 'Design',
    description:
      'A prioritized roadmap: short-term quick wins and longer-term strategic initiatives, with realistic ROI estimates for each.'
  },
  {
    title: 'Implement',
    description:
      'We build and deploy the right solution, automations, AI workers, dashboards, or integrations. No unnecessary tech. No wasted budget.'
  }
];

const services = [
  {
    title: 'AI Opportunity Audit',
    summary: 'Your starting point.',
    description:
      'Structured discovery of where AI will save you the most time and money. Includes roadmap and ROI estimates.',
    price: 'From $5,000'
  },
  {
    title: 'Workflow Automation',
    summary: 'Eliminate the manual.',
    description:
      'Automate repetitive processes across invoicing, scheduling, reporting, onboarding, and more.',
    price: 'From $5,000'
  },
  {
    title: 'Custom AI Workers',
    summary: 'Your digital workforce.',
    description: 'Purpose-built AI agents that perform defined job functions inside your business.',
    price: 'From $10,000'
  },
  {
    title: 'AI Strategy & Roadmapping',
    summary: 'A clear plan forward.',
    description: 'Multi-phase AI implementation strategy aligned to your business goals and budget.',
    price: 'From $12,000'
  },
  {
    title: 'AI Training & Enablement',
    summary: 'Make it stick.',
    description: "Workshops and playbooks that ensure your team actually uses the AI you've invested in.",
    price: 'From $2,500'
  }
];

const homepageFaq = [
  {
    question: 'What makes you qualified to do this?',
    answer:
      "Blake has five years of hands-on AI implementation experience, working behind the scenes for companies across North America. He's done this work. He has not managed people who do it. When you hire Bit Depth, you're getting that experience applied directly to your business."
  },
  {
    question: "What if the audit doesn't find anything useful?",
    answer:
      "That's a real outcome and we'll tell you if it applies to you. If your business isn't ready for AI, you'll leave with a clear picture of what needs to be in place before it makes sense, plus a prioritized plan to get there. That roadmap has value on its own."
  },
  {
    question: 'How much of my time will this take?',
    answer:
      "We try to keep your team's involvement focused and efficient. The audit typically requires a few structured interviews and the ability to walk us through your key systems and workflows. Most clients find it takes less time than they expected."
  },
  {
    question: 'Is the outcome guaranteed?',
    answer:
      "We guarantee the audit credit: 100% of what you pay for the audit is credited against any implementation you choose to move forward with. What we can't guarantee is a specific ROI, because that depends on your business, your data, and how you execute. What we can guarantee is honesty about what we find, including if the numbers don't justify building anything yet."
  },
  {
    question: 'How does the audit credit actually work?',
    answer:
      'Simple. You pay for the audit. We deliver it. If you decide to move forward with any implementation (automation, AI workers, strategy, or training), the full audit fee comes off your project invoice. No minimums, no conditions beyond the 90-day window. You pay the difference.'
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
            <p className="eyebrow">Vendor-neutral AI consulting</p>
            <h1 className="mt-6 max-w-2xl text-[var(--color-navy)]">
              Fix the inefficiencies slowing down your business.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Most businesses don&apos;t have an AI problem. They have a systems and data problem. We
              identify where time and money are being lost, then implement the right solution.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="#how-it-works" className="btn-outline">
                See how it works
              </Link>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              No software sales. Canadian-owned. Starting at <span className="tabular">$5,000</span>.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/Homepage hero section.webp"
              alt="Business owner reviewing operational dashboard"
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
            <h2 className="mt-6">
              You don&apos;t need more technology. You need clarity on what&apos;s breaking down.
            </h2>
            <p className="mt-5 text-[var(--color-slate)]">
              We solve the operational blockers that prevent AI from making any impact. Before
              building anything, we diagnose where your business is losing time and money.
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
            <p className="mt-4 text-[var(--color-slate)]">
              That&apos;s how confident we are in what the audit finds. If the numbers don&apos;t
              justify building, we&apos;ll tell you. You&apos;ll still have an operational roadmap
              worth far more than you paid for it.
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
                  <h3 className="text-[var(--color-navy)]">{service.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-cyan)]">{service.summary}</p>
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
              src="/images/Home page BC Canada section.webp"
              alt="Blake Cowan, founder of Bit Depth AI Consulting"
              fill
              className="object-cover"
            />
          </ScrollReveal>
          <ScrollReveal index={1}>
            <p className="eyebrow">The founder</p>
            <h2 className="mt-6">Blake Cowan</h2>
            <p className="mt-1 text-[var(--color-slate)]">Founder, Bit Depth AI Consulting</p>
            <div className="mt-8 space-y-5 text-[var(--color-charcoal)]">
              <p>
                Blake has spent the last five years working in AI. Not as a salesperson, but
                hands-on behind the scenes, doing the same work he now does for Bit Depth clients.
                Most of that experience was built working with companies in the United States.
              </p>
              <p>
                He started Bit Depth because Canada was underserved. Businesses here deserve access
                to the same quality of AI consulting that larger US markets take for granted.
              </p>
              <p>
                One thing Blake learned early: data and systems have to be solid before AI can do
                anything useful. Build on a shaky foundation and everything you build with AI
                becomes a house of cards. That belief shapes everything Bit Depth does.
              </p>
              <p className="border-l border-[var(--color-cyan)] pl-5 text-lg italic text-[var(--color-navy)]">
                Most businesses aren&apos;t ready for AI yet. That&apos;s not a criticism. It&apos;s
                the reality. A lot of companies are going to be disappointed because they jumped in
                before their data and processes were ready to support it.
              </p>
              <p>
                Before we recommend anything, we run a discovery audit. We tell you exactly where
                you stand. What&apos;s working, what isn&apos;t, and what needs fixing before AI
                will do you any good. That honesty is the most valuable thing we offer.
              </p>
              <p>
                Bit Depth is lean by design. Blake works with a small group of trusted consultants,
                which keeps costs reasonable and means you&apos;re always dealing with someone who
                actually knows your file.
              </p>
            </div>
            <div className="mt-10 grid gap-4 border-t border-[var(--color-border)] pt-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                <p className="text-sm text-[var(--color-slate)]">
                  <strong className="text-[var(--color-navy)]">We don&apos;t sell software.</strong>{' '}
                  We recommend the right solution, not the one we&apos;re paid to push.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                <p className="text-sm text-[var(--color-slate)]">
                  <strong className="text-[var(--color-navy)]">Diagnosis, not pitch.</strong> Every
                  engagement begins with a structured audit.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                <p className="text-sm text-[var(--color-slate)]">
                  <strong className="text-[var(--color-navy)]">Built for Canadian SMBs.</strong>{' '}
                  Enterprise thinking at <span className="tabular">$5k</span>, not{' '}
                  <span className="tabular">$50k</span>.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[var(--color-cyan)]" />
                <p className="text-sm text-[var(--color-slate)]">
                  <strong className="text-[var(--color-navy)]">Measurable ROI.</strong> We estimate
                  ROI before we build. If the numbers don&apos;t work, we tell you.
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
              Before building anything, we identify where time is being lost, where money is
              leaking, and where AI will actually make an impact.
            </p>
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
