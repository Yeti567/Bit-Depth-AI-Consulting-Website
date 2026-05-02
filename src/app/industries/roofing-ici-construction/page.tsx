import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI for Roofing and ICI Construction in Ontario | Bit Depth AI',
  description:
    'Compliance documentation, sub-contractor pre-qualification, AuditSoft pre-population, and bid response automation for Ontario roofing and ICI contractors.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/roofing-ici-construction' }
};

const losses = [
  'Owner is doing safety paperwork on weekends to stay compliant.',
  'JHSC minutes, training records, and incident reports live in three different binders and one shared folder.',
  'Sub-contractor pre-qualification is a manual email chase every quarter.',
  'AuditSoft questionnaires take three days to complete every time.'
];

const builds = [
  {
    title: 'Compliance documentation hub',
    description:
      'A single pane of glass for JHSC minutes, training records, incident reports, and certificates. Pulls from the systems you already use so the binder rebuilding stops.'
  },
  {
    title: 'Sub-contractor pre-qualification automation',
    description:
      'Quarterly pre-qual chases handled automatically. Sub-contractors submit through a portal, documents are validated, expirations are tracked, and the office stops sending the same email every quarter.'
  },
  {
    title: 'AuditSoft pre-population from existing data',
    description:
      'Three-day questionnaires turn into a few hours of review. Answers come from your operational data instead of being typed in from scratch.'
  },
  {
    title: 'Bid response automation triggered by procurement portal events',
    description:
      'Procurement portal posts a tender that fits your scope and certification, and the system kicks off the response workflow before a human has logged in.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function RoofingIciConstructionPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--color-slate)]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--color-navy)]">
                  Home
                </Link>
              </li>
              <li aria-hidden className="text-[var(--color-slate)]/60">/</li>
              <li>
                <Link href="/industries" className="hover:text-[var(--color-navy)]">
                  Industries
                </Link>
              </li>
              <li aria-hidden className="text-[var(--color-slate)]/60">/</li>
              <li className="text-[var(--color-navy)]">Roofing and ICI Construction</li>
            </ol>
          </nav>
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <p className="eyebrow">Tertiary vertical, COR-tied</p>
              <h1 className="mt-6 max-w-2xl">
                Stop letting safety paperwork eat your weekends.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
                The City of Toronto OHSMS rule took effect March 31, 2025. Bill 30 (Working for
                Workers Seven Act) received Royal Assent on November 27, 2025. Public sector
                procurement in Ontario is moving toward COR equivalence as a baseline. If you bid
                public work, the certification is the cost of staying on the roster. The
                paperwork around it does not have to be.
              </p>
              <p className="mt-4 max-w-xl text-[var(--color-slate)]">
                We automate the back office so the certification does not become a paperwork tax.
                COR delivery itself runs through our sister company,{' '}
                <Link
                  href="/industries/cor-pathway"
                  className="text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
                >
                  COR Pathway
                </Link>
                , which works alongside BitDepth on every COR engagement.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/ai-audit" className="btn-primary">
                  Book an AI Audit
                </Link>
                <Link href="/industries/cor-pathway" className="btn-outline">
                  See COR Pathway
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
              <Image
                src="/images/hero-industry-roofing-construction.webp"
                alt="Flat commercial rooftop in Ontario at late afternoon"
                fill
                priority
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What we usually find */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">What we usually find</p>
            <h2 className="mt-6">Where the paperwork tax shows up.</h2>
          </ScrollReveal>
          <ul className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {losses.map((item, index) => (
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

      {/* What we typically build */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">What we typically build</p>
            <h2 className="mt-6">Automate the back office around your certification.</h2>
          </ScrollReveal>
          <ul className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
            {builds.map((item, index) => (
              <ScrollReveal key={item.title} index={index}>
                <li className="flex gap-3">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-cyan)]" />
                  <div>
                    <h3 className="text-[var(--color-navy)]">{item.title}</h3>
                    <p className="mt-3 text-[var(--color-slate)]">{item.description}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* COR sister-company strip */}
      <section className="section-stone section-rule">
        <div className="container-shell py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm text-[var(--color-charcoal)]">
              <span className="font-semibold text-[var(--color-navy)]">COR Pathway is our sister company.</span>{' '}
              They handle COR certification delivery and work alongside BitDepth on the back-office
              automation. Note: Ontario only offers full COR. There is no SECOR option in
              Ontario the way there is in Alberta or BC.
            </p>
            <Link href="/industries/cor-pathway" className="btn-outline whitespace-nowrap">
              See how the handoff works
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">If you bid public work</span>
            <h2 className="mt-6 text-white">Stop paying the paperwork tax.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              The audit identifies the highest-ROI fix for your specific business. For most Ontario
              ICI contractors, that is compliance documentation or sub-contractor pre-qualification.
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
