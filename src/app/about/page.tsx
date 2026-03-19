import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { contactDetails } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'About BitDepth AI Consulting | Vendor-Neutral AI Consulting in BC',
  description:
    'BitDepth AI Consulting is a Barriere, BC-based vendor-neutral AI advisory firm serving Canadian oil and gas and manufacturing companies. We audit first, then build what works.',
  keywords: [
    'vendor-neutral AI consulting British Columbia',
    'AI consultant Canada',
    'AI consulting firm Western Canada',
    'data analytics consultant BC',
    'technology consulting services',
    'digital transformation consultant Canada'
  ],
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About BitDepth AI Consulting | Vendor-Neutral AI Consulting in BC',
    description:
      'Learn how BitDepth AI Consulting delivers vendor-neutral, audit-first AI advisory services for Canadian industrial businesses.',
    url: '/about',
    type: 'article',
    images: [
      {
        url: '/images/Social Media Profile Card.webp',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting founder profile placeholder and brand card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About BitDepth AI Consulting | Vendor-Neutral AI Consulting in BC',
    description:
      'BitDepth AI Consulting is an independent, vendor-neutral AI advisory firm serving Canadian oil and gas and manufacturing companies.',
    images: ['/images/Social Media Profile Card.webp']
  }
};

const values = [
  {
    title: 'Clarity over complexity',
    description:
      'We translate AI into business outcomes. We avoid jargon when plain language works better. Every recommendation comes with a clear explanation of why.'
  },
  {
    title: 'Data integrity first',
    description:
      'Reliable AI starts with clean, well-structured data. We address data quality issues before implementation, not after.'
  },
  {
    title: 'Implementation over theory',
    description:
      'We build systems, not just reports. Every engagement produces working deliverables, not slide decks that collect dust.'
  },
  {
    title: 'Client ROI as the north star',
    description:
      'Every engagement ties back to measurable value. We define success metrics before we start and report against them when we finish.'
  },
  {
    title: 'Canadian-first perspective',
    description:
      'We understand the regulatory, cultural, and economic context of doing business in Canada. PIPEDA and PIPA compliance is built into every engagement, not treated as an afterthought.'
  }
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="section-navy section-angle relative overflow-hidden">
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/10 md:block" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/5 md:block" />
        <div className="container-shell relative py-16 sm:py-20 md:py-28">
          <ScrollReveal className="max-w-4xl">
            <p className="industry-pill inline-flex">About BitDepth</p>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">Vendor-Neutral AI Consulting for Canadian Industrial Businesses</h1>
            <p className="mt-6 text-lg leading-8 text-white/75">
              BitDepth AI Consulting Ltd. is an independent AI advisory firm based in Barriere, British Columbia. We serve Canadian small and mid-market businesses in oil and gas and manufacturing that are ready to adopt AI, but want to do it based on evidence and operational fit rather than a vendor&apos;s sales pitch.
            </p>
            <p className="mt-6 text-lg leading-8 text-white/75">
              We do not sell software. We do not have preferred platforms. We do not receive referral fees from technology vendors. Our business model is simple: we sell outcomes, not software. Our success is measured by the operational improvements our clients achieve.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-light-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[minmax(0,7fr),minmax(280px,3fr)] lg:items-start">
          <div className="space-y-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Story"
                title="Why BitDepth exists"
                description="The practice was built to bring enterprise-grade AI thinking to Canadian mid-market operators without vendor pressure or enterprise pricing."
              />
            </ScrollReveal>

            <ScrollReveal className="surface-card p-6 sm:p-8 md:p-10" index={0}>
              <h2 className="text-3xl font-bold text-navy">Why We Started BitDepth</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                The AI consulting market is heavily skewed toward large enterprise clients. Deloitte, Accenture, and their peers start engagements at $50,000 and scale into the hundreds of thousands. The Canadian mid-market sits outside that window entirely.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                At the same time, the SMB AI adoption segment is growing at 25.7 percent annually, faster than any other segment in the industry. There are thousands of Canadian businesses in oil and gas and manufacturing with the data, the operations, and the problems worth solving. They just have no trusted advisor to help them navigate the technology landscape without a sales agenda behind every recommendation.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                BitDepth was built to be that advisor. We brought together practical experience across AI architecture, data systems, enterprise automation, and SMB business operations to create a consulting practice that delivers enterprise-grade thinking at a price point that fits the mid-market.
              </p>
            </ScrollReveal>

            <ScrollReveal className="surface-card p-6 sm:p-8 md:p-10" index={1}>
              <h2 className="text-3xl font-bold text-navy">Our Methodology: Discovery-First AI Consulting</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                The methodology that drives every BitDepth engagement is built around one principle: understand before you build.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                Too many AI projects fail because implementation starts before the problem is properly defined. The audit-first approach forces a structured diagnosis. It surfaces the data realities, the process constraints, and the organizational factors that determine whether an AI system will actually be used and whether it will deliver measurable value.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                Every client engagement follows the same sequence: audit, prioritize, build, measure. The audit generates the evidence base. Prioritization selects the highest-value, lowest-risk starting point. Implementation builds the system with clear success metrics defined in advance. Measurement validates the outcome and informs the next phase.
              </p>
            </ScrollReveal>

            <ScrollReveal className="surface-card p-6 sm:p-8 md:p-10" index={2}>
              <h2 className="text-3xl font-bold text-navy">What Vendor-Neutral AI Consulting Actually Means</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                Vendor-neutral means we enter every engagement without a predetermined answer. We have no financial relationship with any AI platform, no referral agreements, and no software to sell.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                When we recommend a tool, it is because that tool fits your operations, your data environment, your budget, and your team&apos;s capacity to operate it. We present options. We explain the trade-offs. You make the decision.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                Where appropriate, we present multiple vendor or platform options and help the client choose the path that best fits their operations, budget, and long-term goals.
              </p>
            </ScrollReveal>
          </div>

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <ScrollReveal className="surface-card overflow-hidden p-0" index={1}>
                <div className="relative aspect-[4/5] w-full">
                  <Image src="/images/Social Media Profile Card.webp" alt="BitDepth founder profile placeholder" fill className="object-cover" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Founder Contact</p>
                  <h2 className="mt-4 text-2xl font-bold text-navy">BitDepth AI Consulting Ltd.</h2>
                  <p className="mt-4 text-charcoal/82">Independent AI advisory for Canadian industrial businesses that need operational clarity before implementation.</p>
                  <div className="mt-6 space-y-3 text-sm text-charcoal/80">
                    <p>{contactDetails.location}</p>
                    <p>{contactDetails.email}</p>
                    <p>{contactDetails.phone}</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal className="cta-shell p-6 sm:p-8" index={2}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Next Step</p>
                <h2 className="mt-4 text-2xl font-bold text-white">Book a Discovery Call</h2>
                <p className="mt-4 text-white/65">Talk through your operating environment, goals, and whether an audit-first engagement is the right fit.</p>
                <Link href="/contact" className="btn-primary mt-6 inline-flex">
                  Book a Discovery Call
                </Link>
              </ScrollReveal>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-dark section-space relative overflow-hidden">
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0, 180, 216, 0.08) 1px, transparent 0)', backgroundSize: '28px 28px' }} />
        <div className="container-shell relative">
          <ScrollReveal>
            <SectionHeading eyebrow="Core Values" title="Core Values That Drive Our AI Consulting Practice" theme="dark" />
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} index={index}>
                <div className="surface-card-dark h-full p-6 sm:p-8">
                  <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  <p className="mt-4 text-white/75">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space section-accent-left bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Mission & Geography</p>
            <h2 className="mt-4 text-3xl font-bold text-navy md:text-5xl">Based in Barriere, Serving Western Canada</h2>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              BitDepth is headquartered in Barriere, British Columbia. Our primary markets are the BC Interior, the Lower Mainland, and Alberta. We work remotely across Western Canada and accept select engagements across all Canadian provinces.
            </p>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              Being based in the BC Interior gives us direct access to the resource, energy, and manufacturing sectors that drive the regional economy. We understand the operational realities of businesses in communities that large consulting firms rarely visit.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary inline-flex">
                Book a Discovery Call
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal className="surface-card p-6 sm:p-8 md:p-10" index={1}>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Mission Statement</p>
            <h3 className="mt-4 text-2xl font-bold text-navy">We audit first, then build what works.</h3>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              BitDepth exists to give Canadian industrial and mid-market businesses access to practical, evidence-based AI consulting without vendor pressure, enterprise-level price tags, or vague strategy work that never reaches implementation.
            </p>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              We help leadership teams understand their current state, identify the right starting point, and move toward measurable operational outcomes with confidence.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
