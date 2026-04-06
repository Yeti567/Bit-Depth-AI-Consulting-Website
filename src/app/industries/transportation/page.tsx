import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ChevronRight, CheckCircle } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting for Transportation & Logistics Companies | BitDepth AI',
  description:
    'Dispatch support, real-time cost tracking, driver self-service, and compliance automation for Canadian trucking and logistics companies. Starting with an AI audit.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/industries/transportation'
  },
  openGraph: {
    title: 'AI Consulting for Transportation & Logistics Companies | BitDepth AI',
    description:
      'Dispatch support, real-time cost tracking, driver self-service, and compliance automation for Canadian trucking and logistics companies. Starting with an AI audit.',
    url: 'https://bitdepthaiconsulting.com/industries/transportation',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-transportation.webp',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian transportation and logistics companies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Transportation & Logistics Companies | BitDepth AI',
    description:
      'Dispatch support, real-time cost tracking, driver self-service, and compliance automation for Canadian trucking and logistics companies. Starting with an AI audit.',
    images: ['/images/og-transportation.webp']
  }
};

const moneyLosses = [
  'Dispatch errors that cost time, fuel, and client relationships',
  'Fuel and route costs that aren\'t tracked against revenue until it\'s too late',
  'Driver scheduling gaps that lead to missed loads or overtime',
  'Client communication handled manually by staff who have other jobs to do',
  'Compliance paperwork done by hand and filed inconsistently',
  'No system for drivers to find scheduling or policy information without calling the office'
];

const solutions = [
  {
    title: 'Dispatch Support and Optimization',
    description: 'AI-assisted dispatching that reduces errors, flags scheduling conflicts, and helps your dispatcher make better decisions faster. without replacing the human judgment that still matters.'
  },
  {
    title: 'Real-Time Cost Tracking Against Revenue',
    description: 'Connect fuel charges, driver wages, and route costs to your invoices in real time. Know whether a production run made money before the accountant tells you three months later that it didn\'t.'
  },
  {
    title: 'Client Communication Automation',
    description: 'Automated status updates, delivery confirmations, and exception alerts. so your clients feel taken care of without your staff spending half their day on the phone.'
  },
  {
    title: 'Driver and Employee Self-Service',
    description: 'An internal chatbot where drivers and staff can check their schedule, find company policies, and get answers to common questions without calling the office. Fewer interruptions. Faster answers.'
  },
  {
    title: 'Compliance Document Automation',
    description: 'Trip logs, inspection records, and regulatory paperwork processed and filed consistently so compliance doesn\'t depend on someone remembering to do it.'
  }
];

export default function TransportationPage() {
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
            <span className="text-white">Transportation & Logistics</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0">
          <Image
            src="/images/Industry Trucking Hero Image.webp"
            alt="Fleet of semi-trucks parked at Canadian logistics yard at dusk with mountains in background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/70" />
        </div>
        <div className="container-shell relative py-16 sm:py-20 md:py-28">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow-pill">Industries / Transportation</span>
              <h1 className="mt-5 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
                Driver Shortages, Dispatch Errors, Fuel Costs, and Demanding Clients. AI Won&apos;t Solve All of It. But It Will Make All of It More Manageable.
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Trucking is one of the most operationally complex businesses there is. The margins are tight and the pressure never stops.
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
                The Problem Isn&apos;t That Trucking Is Hard. It&apos;s That Too Much of the Hard Part Is Manual.
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Finding qualified drivers is a constant battle. Dispatchers are managing too many moving pieces and making mistakes under pressure. Clients want real-time updates and get frustrated when they don&apos;t get them.
                </p>
                <p>
                  Fuel costs and route inefficiencies don&apos;t show up until the accountant runs the numbers months later. and by then there&apos;s nothing you can do about it.
                </p>
                <p>
                  The businesses that are pulling ahead in this industry are not doing it by working harder. They are doing it by automating the parts that don&apos;t need a human and freeing up their people to focus on the parts that do.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[300px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/Logistics dispatcher at a busy desk.webp"
                alt="Logistics dispatcher with headset reviewing route maps and driver schedules across multiple screens"
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
              Where Transportation Companies Lose Money They Never See
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
              What AI Actually Fixes in a Transportation Business
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
              If Your Margins Are Tight, Profit Leaks Are Expensive
            </h2>
            <p className="mt-5 text-lg text-white/70">
              A discovery audit will show you exactly where time and money are leaving your business quietly. Book a call and we&apos;ll tell you honestly what we think we can find.
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
