import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'About BitDepth AI Consulting | Vendor-Neutral AI for Canadian SMBs',
  description:
    'BitDepth AI Consulting Ltd. is a vendor-neutral AI advisory firm based in British Columbia, Canada. We audit first, recommend what fits, and deliver real operational outcomes.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/about'
  },
  openGraph: {
    title: 'About BitDepth AI Consulting',
    description:
      'Built for Canadian SMBs that were being underserved by enterprise consultancies and under-qualified freelancers. BitDepth delivers enterprise-quality AI thinking at mid-market prices.',
    url: 'https://bitdepthaiconsulting.com/about',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting about social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'About BitDepth AI Consulting',
    description:
      'Built for Canadian SMBs that were being underserved by enterprise consultancies and under-qualified freelancers. BitDepth delivers enterprise-quality AI thinking at mid-market prices.',
    images: ['/images/og-about.jpg']
  }
};

const howBlakeWorks = [
  {
    title: 'You Get Blake',
    description:
      "This isn't a firm with a sales team and a delivery team. When you work with BitDepth, you work directly with Blake from the first call to the final deliverable. No handoffs. No junior staff on your file. The person you talk to is the person doing the work."
  },
  {
    title: 'Straight Talk, Always',
    description:
      "Blake comes from industries where bad advice costs people real money — sometimes their safety. That background shaped how he consults. If AI isn't right for your business yet, he'll tell you. If the numbers don't justify a build, he'll tell you that too. You'll always know where you stand."
  },
  {
    title: 'Built for the Long Run',
    description:
      "BitDepth isn't looking for quick engagements. The goal is to be your AI consultant for years — helping you move forward as your business grows and as the technology keeps evolving. The audit is the starting point. Where it goes from there is up to you."
  }
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold text-white md:text-6xl">
              There's a Real Person Behind This Business. Here's Who He Is.
            </h1>
            <p className="mt-5 text-lg text-white/74">
              BitDepth AI Consulting is Blake Cowan — one consultant, one standard of work, and no interest in wasting your time or your money.
            </p>
          </ScrollReveal>
          <ScrollReveal
            index={1}
            className="relative min-h-[300px] overflow-hidden rounded-2xl border border-[var(--color-border)] sm:min-h-[360px] lg:min-h-[520px]"
          >
            <Image src="/images/about-hero.webp" alt="Industrial about hero" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[var(--color-navy)] md:text-5xl">Blake's Story</h2>
            <div className="mt-6 space-y-4 text-lg text-[var(--color-slate)]">
              <p>
                I didn't start my career in technology. I spent years working in construction and building, then in trucking, then as a safety consultant. In every one of those industries, I learned the same lesson: the details matter, corners cut early cost you more later, and if your foundation isn't solid, everything built on top of it is at risk.
              </p>
              <p>
                That thinking followed me into AI. For the last five years, I've worked behind the scenes doing AI consulting and implementation for companies — mostly in the United States — building the same systems, automations, and strategies I now offer through BitDepth. I wasn't selling. I was doing the work.
              </p>
              <p>
                I started BitDepth because I kept seeing the same gap: Canadian businesses were either being ignored by the big consulting firms, overcharged for work that didn't deliver, or sold software by people who called themselves AI consultants. Canada deserves better than that. That's why BitDepth exists.
              </p>
              <p>
                I work remotely and serve clients across Canada, the United States, and internationally. Where you're located doesn't matter. What matters is whether we're the right fit for your business.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-[var(--color-navy)]/10 flex items-center justify-center text-[var(--color-navy)] font-bold text-xl">
                BC
              </div>
              <div>
                <p className="font-bold text-[var(--color-navy)]">Blake Cowan</p>
                <p className="text-[var(--color-slate)]">Founder, BitDepth AI Consulting</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Proudly Canadian</h2>
            <p className="mt-6 text-lg text-white/74">
              BitDepth is a Canadian-owned and operated business. If you're a Canadian company, know that you're working with someone who understands this market, believes in it, and wants to see Canadian businesses succeed. We'll work with anyone, anywhere — but there's something personal about helping businesses in our own backyard.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-[var(--color-navy)] md:text-5xl text-center mb-12">How Blake Works</h2>
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {howBlakeWorks.map((card, index) => (
              <ScrollReveal key={card.title} index={index} className="card-dark p-6">
                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 text-white/72">{card.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-extrabold text-white md:text-5xl">Credentials and Compliance</h2>
            <ul className="mt-6 space-y-3 text-lg text-white/74">
              <li>Vendor-neutral — no software commissions, ever</li>
              <li>Canadian-owned and operated</li>
              <li>PIPEDA and BC PIPA compliant</li>
              <li>Five years of hands-on AI implementation experience</li>
              <li>Background in construction, trucking, and safety consulting</li>
              <li>Serving clients across Canada, the United States, and internationally</li>
              <li>All engagements conducted remotely via Zoom and digital collaboration tools</li>
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-[var(--color-navy)] md:text-5xl">
              If You're Serious About AI, Let's Have a Real Conversation.
            </h2>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              Not a sales call. A straight conversation about where your business is, what you're trying to solve, and whether BitDepth is the right fit. If we're not, Blake will tell you that too.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Free Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
