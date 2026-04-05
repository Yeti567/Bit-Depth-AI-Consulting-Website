import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ChevronRight, CheckCircle } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting for Oil & Gas Services Companies | BitDepth AI',
  description:
    'Connect your field systems, get real-time crew cost visibility, and automate field tickets and compliance documentation. Built for Canadian oil and gas services companies.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/industries/oil-and-gas'
  },
  openGraph: {
    title: 'AI Consulting for Oil & Gas Services Companies | BitDepth AI',
    description:
      'Connect your field systems, get real-time crew cost visibility, and automate field tickets and compliance documentation. Built for Canadian oil and gas services companies.',
    url: 'https://bitdepthaiconsulting.com/industries/oil-and-gas',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-oil-gas.webp',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian oil and gas services companies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Oil & Gas Services Companies | BitDepth AI',
    description:
      'Connect your field systems, get real-time crew cost visibility, and automate field tickets and compliance documentation. Built for Canadian oil and gas services companies.',
    images: ['/images/og-oil-gas.webp']
  }
};

const moneyLosses = [
  'Field data that never reaches head office in time to act on',
  'Multiple crews with no real-time visibility into budget versus actual costs',
  'Subcontractor invoices approved without verification against field records',
  'Equipment failures that could have been predicted with basic monitoring',
  'Compliance and safety documentation done manually across multiple sites',
  'Field ticket processing that takes days instead of hours'
];

const solutions = [
  {
    title: 'Data Integration and Centralization',
    description: 'Connect your field systems so data flows to where it needs to go automatically. Head office gets real-time visibility. Field managers keep their autonomy. Everyone works from the same information.'
  },
  {
    title: 'Crew-Level Profit Visibility',
    description: 'Compare estimated budgets against actual field costs at the crew level in real time. Know which operations are profitable and which ones are trending the wrong direction while you can still do something about it.'
  },
  {
    title: 'Field Ticket and Invoice Automation',
    description: 'Field tickets processed, verified against scope, and routed for approval automatically. so invoicing happens in hours instead of days and discrepancies get flagged before they become disputes.'
  },
  {
    title: 'Predictive Maintenance Planning',
    description: 'For newer equipment and additions, build in condition monitoring and failure prediction where it makes economic sense. For older equipment where sensors are not practical, develop a replacement roadmap that brings more assets online over time.'
  },
  {
    title: 'Safety and Compliance Documentation',
    description: 'Automated safety documentation, incident reporting, and regulatory compliance across multiple sites consistent, auditable, and not dependent on someone remembering to fill out a form.'
  }
];

export default function OilAndGasPage() {
  return (
    <PageShell>
      {/* Breadcrumb */}
      <div className="bg-[var(--color-navy)] border-b border-[var(--color-border)]">
        <div className="container-shell py-4">
          <nav className="flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="flex items-center gap-1 hover:text-cyan transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/industries" className="hover:text-cyan transition-colors">Industries</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Oil & Gas Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0">
          <Image
            src="/images/1775381591191_Industry_s_oil_and_gas_hero_image.webp"
            alt="Wide shot of oil field services operation at golden hour with pump jacks and service trucks"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/70" />
        </div>
        <div className="container-shell relative py-16 sm:py-20 md:py-28">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow-pill">Industries / Oil & Gas</span>
              <h1 className="mt-5 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
                Your Systems Don&apos;t Talk to Each Other. Your Data Sits in Silos. And Head Office Is Always the Last to Know.
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Oil and gas services companies are running some of the most complex operations in the country on systems that were never designed to work together.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 1 - The Real Problem */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold text-[var(--color-navy)] md:text-4xl">
                Every Field Runs Its Own System. None of Them Talk to Each Other.
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  This is the single biggest operational problem in oil and gas services. Each field has its own data, its own system, and its own people who understand it. That knowledge stays local. Head office gets reports when someone has time to write them, which means decisions get made on information that is days or weeks old.
                </p>
                <p>
                  Meanwhile, crews are running over budget, equipment is failing without warning, subcontractors are invoicing for work that hasn&apos;t been verified, and compliance documentation is being done by hand.
                </p>
                <p>
                  The first job in an oil and gas services engagement is almost always the same: figure out how to get the data talking to each other. Once you have a single source of truth, everything else becomes possible.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[300px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/1775381591189_Field_operations_in_action.webp"
                alt="Oil field operations manager reviewing field operations dashboard on laptop in site trailer"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 - Where the Money Goes */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Where Oil & Gas Services Companies Lose Money and Time
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {moneyLosses.map((item, index) => (
              <ScrollReveal key={index} index={index} className="card-dark p-5 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                <span className="text-white/90">{item}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - What We Do */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-[var(--color-navy)] md:text-4xl">
              What AI Actually Fixes in an Oil & Gas Services Business
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} index={index} className="card-light p-6">
                <h3 className="text-xl font-bold text-[var(--color-navy)]">{solution.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{solution.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-charcoal section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              If Your Fields Aren&apos;t Talking to Each Other, You&apos;re Flying Blind
            </h2>
            <p className="mt-5 text-lg text-white/70">
              A discovery audit will map your current systems, identify where the data gaps are, and give you a prioritized plan for connecting them. Book a call and we&apos;ll tell you honestly what we think we can find.
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
