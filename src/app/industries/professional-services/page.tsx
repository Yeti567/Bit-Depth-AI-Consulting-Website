import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI for Law Firms, Accountants, and Brokerages | BitDepth AI',
  description:
    'Private intake automation, document drafting from precedents, trust-aware billing, and Clio, PCLaw, Karbon, and Dext integrations. Referral and inbound only.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/professional-services' }
};

const builds = [
  {
    title: 'Private client intake automation with conflict-checking',
    description:
      'Intake runs on Canadian-resident infrastructure. Conflict checks happen automatically against your matter database before the file is opened.'
  },
  {
    title: 'Document drafting from precedents, with full audit trails',
    description:
      'Drafts pulled from your firm’s own precedent library, with a full record of which clauses were sourced where.'
  },
  {
    title: 'Trust-accounting-aware billing workflows',
    description:
      'Trust-aware integrations that respect Law Society and provincial trust accounting rules. No more retainer reconciliation by hand.'
  },
  {
    title: 'Practice management tool integrations',
    description: 'Connectors for Clio, PCLaw, Karbon, Dext, and the rest of your existing stack.'
  }
];

export default function ProfessionalServicesPage() {
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
              <li className="text-[var(--color-navy)]">Professional Services</li>
            </ol>
          </nav>
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <p className="eyebrow">Referral and inbound only</p>
              <h1 className="mt-6 max-w-2xl">
                AI for law firms, accounting practices, and brokerages that respects confidentiality.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
                Professional services firms have a different problem set: client confidentiality,
                regulatory restrictions, and trust accounting rules that most AI vendors do not
                understand. We build private intake automation, document drafting workflows, and
                trust-aware integrations on Canadian-resident infrastructure.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Book a discovery call
                </Link>
                <Link href="/ai-audit" className="btn-outline">
                  Book an AI Audit
                </Link>
              </div>
              <p className="mt-6 text-sm text-[var(--color-slate)]">
                We currently take professional services engagements on referral and inbound only.
                Trades and contractors remain our primary focus.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
              <Image
                src="/images/hero-industry-professional-services.webp"
                alt="Empty professional desk with closed laptop, leather notebook, and coffee mug"
                fill
                priority
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What we typically build */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">What we typically build</p>
            <h2 className="mt-6">Four workflows tuned for confidentiality.</h2>
          </ScrollReveal>
          <ul className="mt-10 space-y-6">
            {builds.map((item) => (
              <li key={item.title} className="flex gap-3 text-[var(--color-charcoal)]">
                <Check className="mt-1 h-5 w-5 shrink-0 text-[var(--color-cyan)]" />
                <div>
                  <h3 className="text-[var(--color-navy)]">{item.title}</h3>
                  <p className="mt-2 text-[var(--color-slate)]">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Referrals welcome</span>
            <h2 className="mt-6 text-white">Tell us what is breaking.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              The fastest way to start is a discovery call. We will tell you honestly whether the
              fit is right and whether the work belongs with us or elsewhere.
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
