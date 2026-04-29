import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'About Bit Depth AI Consulting | Blake Cowan | Barriere BC Canada',
  description:
    'Bit Depth AI Consulting is founder-led by Blake Cowan. Five years of hands-on AI experience, with backgrounds in construction, trucking, and safety. Canadian-owned and operated.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/about' },
  openGraph: {
    title: 'About Bit Depth AI Consulting | Blake Cowan | Barriere BC Canada',
    description:
      'Bit Depth AI Consulting is founder-led by Blake Cowan. Five years of hands-on AI experience, with backgrounds in construction, trucking, and safety.',
    url: 'https://bitdepthaiconsulting.com/about',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Bit Depth AI Consulting and founder Blake Cowan'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'About Bit Depth AI Consulting | Blake Cowan | Barriere BC Canada',
    description:
      'Bit Depth AI Consulting is founder-led by Blake Cowan. Five years of hands-on AI experience.',
    images: ['/images/og-about.jpg']
  }
};

const principles = [
  {
    title: 'You get Blake.',
    description:
      "This isn't a firm with a sales team and a delivery team. When you work with Bit Depth, you work directly with Blake from the first call to the final deliverable. No handoffs. No junior staff on your file. The person you talk to is the person doing the work."
  },
  {
    title: 'Straight talk, always.',
    description:
      "Blake comes from industries where bad advice costs people real money, sometimes their safety. That background shaped how he consults. If AI isn't right for your business yet, he'll tell you. If the numbers don't justify a build, he'll tell you that too. You'll always know where you stand."
  },
  {
    title: 'Built for the long run.',
    description:
      "Bit Depth isn't looking for quick engagements. The goal is to be your AI consultant for years, helping you move forward as your business grows and as the technology keeps evolving. The audit is the starting point. Where it goes from there is up to you."
  }
];

const credentials = [
  'Vendor-neutral. No software commissions, ever.',
  'Canadian-owned and operated.',
  'PIPEDA and BC PIPA compliant.',
  'Five years of hands-on AI implementation experience.',
  'Background in construction, trucking, and safety consulting.',
  'Serving clients across Canada, the United States, and internationally.',
  'All engagements conducted remotely via Zoom and digital collaboration tools.'
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function AboutPage() {
  return (
    <PageShell>
      {/* 1. Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">About</p>
            <h1 className="mt-6 max-w-2xl">There&apos;s a real person behind this business.</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Bit Depth AI Consulting is Blake Cowan. One consultant, one standard of work, and no
              interest in wasting your time or your money.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a discovery call
              </Link>
              <Link href="/ai-audit" className="btn-outline">
                Book an AI Audit
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal
            index={1}
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]"
          >
            <Image
              src="/images/about-hero.webp"
              alt="Blake Cowan, founder of Bit Depth AI Consulting"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Blake's Story */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Blake&apos;s story</p>
            <h2 className="mt-6">In his own words.</h2>
          </ScrollReveal>
          <div className="mt-10 space-y-5 text-[var(--color-charcoal)]">
            <ScrollReveal>
              <p>
                I didn&apos;t start my career in technology. I spent years working in construction
                and building, then in trucking, then as a safety consultant. In every one of those
                industries, I learned the same lesson: the details matter, corners cut early cost
                you more later, and if your foundation isn&apos;t solid, everything built on top of
                it is at risk.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p>
                That thinking followed me into AI. For the last five years, I&apos;ve worked behind
                the scenes doing AI consulting and implementation for companies, mostly in the
                United States, building the same systems, automations, and strategies I now offer
                through Bit Depth. I wasn&apos;t selling. I was doing the work.
              </p>
            </ScrollReveal>
            <ScrollReveal index={2}>
              <p>
                I started Bit Depth because I kept seeing the same gap. Canadian businesses were
                either being ignored by the big consulting firms, overcharged for work that
                didn&apos;t deliver, or sold software by people who called themselves AI consultants.
                Canada deserves better than that. That&apos;s why Bit Depth exists, and that&apos;s
                why it&apos;s Canadian-owned and operated.
              </p>
            </ScrollReveal>
            <ScrollReveal index={3}>
              <p>
                I work remotely and serve clients across Canada, the United States, and
                internationally. Where you&apos;re located doesn&apos;t matter. What matters is
                whether we&apos;re the right fit for your business.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal index={4} className="mt-10 border-t border-[var(--color-border)] pt-6">
            <p className="text-sm text-[var(--color-slate)]">
              <span className="font-semibold text-[var(--color-navy)]">Blake Cowan</span> &nbsp;·&nbsp;
              Founder, Bit Depth AI Consulting &nbsp;·&nbsp; Barriere, British Columbia
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. How Blake Works */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">How Blake works</p>
            <h2 className="mt-6">Three principles. No exceptions.</h2>
          </ScrollReveal>
          <ol className="mt-12 grid gap-12 md:grid-cols-3">
            {principles.map((principle, index) => (
              <ScrollReveal key={principle.title} index={index}>
                <li>
                  <p className="font-mono text-sm text-[var(--color-cyan)] tabular">{pad2(index + 1)}</p>
                  <h3 className="mt-3 text-[var(--color-navy)]">{principle.title}</h3>
                  <p className="mt-3 text-[var(--color-slate)]">{principle.description}</p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. Credentials */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Credentials and compliance</p>
            <h2 className="mt-6">For the record.</h2>
          </ScrollReveal>
          <ul className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {credentials.map((item, index) => (
              <ScrollReveal key={item} index={index}>
                <li className="py-4 text-[var(--color-charcoal)]">{item}</li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Real conversation</span>
            <h2 className="mt-6 text-white">
              If you&apos;re serious about AI, let&apos;s talk.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Not a sales call. A straight conversation about where your business is, what
              you&apos;re trying to solve, and whether Bit Depth is the right fit. If we&apos;re
              not, Blake will tell you that too.
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
