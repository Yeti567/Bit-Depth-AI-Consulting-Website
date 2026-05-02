import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'COR Certification for Ontario Contractors | BitDepth AI',
  description:
    'COR Pathway, BitDepth sister company, delivers full COR certification for Ontario contractors. BitDepth automates the operational systems around it. Decide which entry point fits.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/cor-pathway' }
};

export default function CorPathwayPage() {
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
              <li className="text-[var(--color-navy)]">COR Pathway</li>
            </ol>
          </nav>
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <p className="eyebrow">Sister company crossover</p>
              <h1 className="mt-6 max-w-2xl">
                COR certification for Ontario contractors. Pick the right entry point.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
                COR Pathway is our sister company. They deliver COR certification and work
                alongside BitDepth on every COR engagement. If COR is the only thing you need to
                solve, COR Pathway is the right place to start. If COR is one piece of a bigger
                operations and automation problem, the BitDepth audit is the right first step and
                we will route the COR work through Pathway as part of the implementation.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact?topic=audit" className="btn-primary">
                  Book an AI Audit
                </Link>
                <Link href="/contact" className="btn-outline">
                  Book a discovery call
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
              <Image
                src="/images/hero-cor-pathway-construction.webp"
                alt="Construction project manager on an Ontario ICI commercial site"
                fill
                priority
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ontario COR clarification */}
      <section className="section-stone section-rule">
        <div className="container-shell py-10">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Ontario specific</p>
            <p className="mt-4 text-[var(--color-charcoal)]">
              <span className="font-semibold text-[var(--color-navy)]">Ontario only offers full COR.</span>{' '}
              There is no SECOR (Small Employer COR) option in Ontario the way there is in Alberta
              or British Columbia. If you operate in Ontario and need COR, full COR is the path.
              COR Pathway runs that delivery; BitDepth automates the operational systems around it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Decision tree */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Where to start</p>
            <h2 className="mt-6">Two doors. Pick the one that fits.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ScrollReveal>
              <article className="flex h-full flex-col rounded-md border border-[var(--color-border)] bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                  Door one
                </p>
                <h3 className="mt-3 text-[var(--color-navy)]">If you mostly need COR.</h3>
                <p className="mt-4 flex-1 text-[var(--color-slate)]">
                  COR Pathway delivers full COR certification for Ontario contractors and works
                  alongside BitDepth where automation supports the program. CRSP and IHSA-credentialed
                  delivery comes through partner consultants.
                </p>
                <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                  <p className="text-sm text-[var(--color-slate)]">
                    Plans from <span className="tabular font-semibold text-[var(--color-navy)]">$249</span> per month, with a 30-day trial.
                  </p>
                  <p className="mt-3 text-xs text-[var(--color-slate)]">
                    COR Pathway website launching soon. In the meantime, contact BitDepth and we
                    will route you to the COR Pathway team directly.
                  </p>
                </div>
                <Link href="/contact" className="btn-outline mt-6 self-start">
                  Talk to the COR Pathway team <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <article className="flex h-full flex-col rounded-md border border-[var(--color-terracotta)] bg-white p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                  Door two
                </p>
                <h3 className="mt-3 text-[var(--color-navy)]">If COR is one of several problems.</h3>
                <p className="mt-4 flex-1 text-[var(--color-slate)]">
                  Book an AI Opportunity Audit with BitDepth. We will diagnose the full picture,
                  identify where the highest-ROI fixes are, and bring COR Pathway into the
                  implementation when COR is part of the answer.
                </p>
                <div className="mt-6 border-t border-[var(--color-border)] pt-4">
                  <p className="text-sm text-[var(--color-slate)]">
                    <span className="tabular font-semibold text-[var(--color-navy)]">$5,000</span> flat audit, 14 day delivery,{' '}
                    <span className="tabular font-semibold text-[var(--color-navy)]">100%</span> credited toward implementation.
                  </p>
                </div>
                <Link href="/contact?topic=audit" className="btn-primary mt-6 self-start">
                  Book an AI Audit
                </Link>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How the sister-company partnership works */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">How the partnership works</p>
            <h2 className="mt-6">Two companies, one engagement.</h2>
            <div className="mt-6 space-y-5 text-[var(--color-slate)]">
              <p>
                BitDepth and COR Pathway are sister companies. We share clients, share data when
                you authorize it, and operate as one delivery team for engagements that span both
                COR certification and back-office automation.
              </p>
              <p>
                On the COR side, COR Pathway handles certification delivery: documentation, audits,
                training, and the path to and through your IHSA external audit. CRSP and
                IHSA-credentialed delivery comes through partner consultants we work with regularly.
              </p>
              <p>
                On the BitDepth side, we automate the operational systems that the certification
                touches: compliance documentation hubs, sub-contractor pre-qualification, AuditSoft
                pre-population, and the bid-response workflows that make the certification pay off.
              </p>
              <p>
                Pricing and contracting stay separate. COR Pathway bills for COR delivery. BitDepth
                bills for the audit and the automation work. Most clients use both.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Not sure which door</span>
            <h2 className="mt-6 text-white">Tell us what you are trying to solve.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              A short discovery call is the fastest way to figure out whether COR Pathway,
              BitDepth, or both is the right starting point for your specific situation.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a discovery call
              </Link>
              <Link href="/contact?topic=audit" className="btn-outline">
                Book an AI Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
