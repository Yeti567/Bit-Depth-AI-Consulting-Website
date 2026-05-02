import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'About BitDepth AI Consulting | Blake Cowan',
  description:
    'BitDepth exists because Canadian trades and small contractors are one of the most underserved markets in professional services. Founder-led by Blake Cowan.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/about' },
  openGraph: {
    title: 'About BitDepth AI Consulting | Blake Cowan',
    description:
      'BitDepth exists because Canadian trades and small contractors are one of the most underserved markets in professional services.',
    url: 'https://bitdepthaiconsulting.com/about',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About BitDepth AI Consulting and founder Blake Cowan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'About BitDepth AI Consulting | Blake Cowan',
    description:
      'BitDepth exists because Canadian trades and small contractors are one of the most underserved markets in professional services.',
    images: ['/images/og-about.jpg']
  }
};

const methodology = [
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

const principles = [
  {
    title: 'We do not sell software.',
    description:
      'We recommend the right solution, even when that means the cheaper one. Vendor-neutral. No reseller agreements, no kickbacks, no preferred-partner commissions.'
  },
  {
    title: 'Diagnosis before prescription.',
    description:
      'Every engagement begins with the audit. If we cannot tell you where the leak is, we have no business telling you what to build.'
  },
  {
    title: 'Plain language.',
    description:
      'If we cannot explain it to the owner without jargon, we have not understood it well enough yet.'
  },
  {
    title: 'Canadian by default.',
    description:
      'PIPEDA-aware data handling. Canadian carrier compliance. Canadian-resident infrastructure where it matters.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function AboutPage() {
  return (
    <PageShell>
      {/* 1. Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Why BitDepth</p>
            <h1 className="mt-6 max-w-2xl">
              Built for the businesses nobody else was showing up for.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              BitDepth exists because the Canadian SMB market is the most underserved segment in
              professional services. Large firms have minimum engagement sizes that price out
              anyone under $500M revenue. Freelancers do not have a methodology. Nobody was
              showing up for the trades owner, the residential plumbing company, or the Ontario
              electrical contractor and giving them honest, practical advice about what AI could
              actually do for their business.
            </p>
            <p className="mt-4 max-w-xl text-[var(--color-slate)]">
              That is the gap we exist to fill.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="/contact" className="btn-outline">
                Book a discovery call
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/about-blake-landscape.webp"
              alt="Thompson River valley in interior British Columbia at golden hour"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Methodology */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Our methodology</p>
            <h2 className="mt-6">Diagnose. Design. Implement.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {methodology.map((step, index) => (
              <ScrollReveal key={step.title} index={index}>
                <p className="font-mono text-sm text-[var(--color-cyan)] tabular">{pad2(index + 1)}</p>
                <h3 className="mt-3 text-[var(--color-navy)]">{step.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Principles */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Our principles</p>
            <h2 className="mt-6">Four rules. No exceptions.</h2>
          </ScrollReveal>
          <ul className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} index={index}>
                <li className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-cyan)]" />
                  <div>
                    <h3 className="text-[var(--color-navy)]">{principle.title}</h3>
                    <p className="mt-2 text-[var(--color-slate)]">{principle.description}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Founder section */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">The founder</p>
            <h2 className="mt-6">Blake Cowan.</h2>
            <p className="mt-1 text-[var(--color-slate)]">Founder, BitDepth AI Consulting</p>
          </ScrollReveal>
          <div className="mt-10 space-y-5 text-[var(--color-charcoal)]">
            <ScrollReveal>
              <p>
                Blake has spent the last five years working in AI, first as a salesperson, then
                hands-on inside the trade and field services industries. That experience has been
                the foundation for everything BitDepth does.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p>
                He started BitDepth because Canadian trades and small contractors are one of the
                most underserved markets in professional services. Large consultancies do not show
                up. Freelancers do not have a methodology. Nobody is building AI for the way
                Canadian field service businesses actually run, with one truck, one dispatcher,
                and an owner who answers their own phone.
              </p>
            </ScrollReveal>
            <ScrollReveal index={2}>
              <p>
                One thing Blake learned early. Data and systems have to be solid before AI does
                anything useful. Build on a shaky foundation and everything you build with AI
                becomes a house of cards. That belief shapes how BitDepth runs every engagement.
              </p>
            </ScrollReveal>
            <ScrollReveal index={3}>
              <p className="border-l border-[var(--color-cyan)] pl-5 text-lg italic text-[var(--color-navy)]">
                Most businesses are not ready for AI yet. That is not a criticism. It is the
                reality. A lot of companies are going to be disappointed because they jumped in
                before their data and processes were ready to support it.
              </p>
            </ScrollReveal>
            <ScrollReveal index={4}>
              <p>
                Before we recommend anything, we run a discovery audit. We tell you exactly where
                you stand. What is working, what is not, and what needs fixing before AI will do
                you any good. That honesty is the most valuable thing we offer.
              </p>
            </ScrollReveal>
            <ScrollReveal index={5}>
              <p>
                BitDepth is lean by design. Blake works with a small group of trusted consultants,
                which keeps costs reasonable and means you are always dealing with someone who
                actually knows your file.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Real conversation</span>
            <h2 className="mt-6 text-white">If you are serious about AI, let us talk.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Not a sales call. A straight conversation about where your business is, what you
              are trying to solve, and whether BitDepth is the right fit. If we are not, Blake
              will tell you that too.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a discovery call
              </Link>
              <Link href="/ai-audit" className="btn-outline">
                Book an AI Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
