import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ChevronRight, CheckCircle } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting for Professional Services Firms | Bit Depth AI',
  description:
    'Reduce no-shows, automate scheduling and intake, and reclaim billable hours. AI consulting for accountants, lawyers, engineers, and consultants across Canada.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/industries/professional-services'
  },
  openGraph: {
    title: 'AI Consulting for Professional Services Firms | Bit Depth AI',
    description:
      'Reduce no-shows, automate scheduling and intake, and reclaim billable hours. AI consulting for accountants, lawyers, engineers, and consultants across Canada.',
    url: 'https://bitdepthaiconsulting.com/industries/professional-services',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian professional services firms'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Professional Services Firms | Bit Depth AI',
    description:
      'Reduce no-shows, automate scheduling and intake, and reclaim billable hours. AI consulting for accountants, lawyers, engineers, and consultants across Canada.',
    images: ['/images/og-industries.jpg']
  }
};

const revenueLosses = [
  'No-shows and last-minute cancellations with no deposit or consequence system',
  'Scheduling done manually by staff who have other responsibilities',
  'Client intake and onboarding paperwork handled by hand every single time',
  'Follow-up emails and reminders written individually instead of automated',
  'Document review and preparation that takes hours of professional time',
  'Knowledge management gaps where staff cannot find what they need without asking someone'
];

const solutions = [
  {
    title: 'Automated Booking With Deposit Collection',
    description: 'An online booking system where clients select their own appointment time, provide relevant intake information, and put down a deposit. all before they ever speak to anyone in your office. Serious clients book. Time-wasters don\'t.'
  },
  {
    title: 'Appointment Reminders and No-Show Reduction',
    description: 'Automated text and email reminders at 48 hours, 24 hours, and the morning of the appointment. No-show rates drop significantly. Your staff stops spending time on confirmation calls.'
  },
  {
    title: 'Client Intake and Onboarding Automation',
    description: 'Intake forms, document collection, conflict checks, and onboarding sequences. automated and consistent every time, regardless of who is working that day.'
  },
  {
    title: 'Internal Knowledge Base',
    description: 'An AI-powered internal system where staff can find policies, procedures, templates, and client information instantly. without interrupting a colleague or digging through shared drives.'
  },
  {
    title: 'Document Preparation Assistance',
    description: 'AI-assisted drafting and document preparation that reduces the time professionals spend on routine correspondence, standard agreements, and repetitive client communications.'
  }
];

export default function ProfessionalServicesPage() {
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
            <span className="text-white">Professional Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0">
          <Image
            src="/images/Industry Professional Services Hero Image.webp"
            alt="Professional services consultant reviewing data and analytics at modern office desk"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/70" />
        </div>
        <div className="container-shell relative py-16 sm:py-20 md:py-28">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow-pill">Industries / Professional Services</span>
              <h1 className="mt-5 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
                Your Time Is Billable. Every Hour Spent on Admin, Scheduling, and Chasing Clients Is an Hour You&apos;re Not Getting Paid For.
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Accountants, lawyers, engineers, consultants, and healthcare providers all share the same problem: too much time on the business, not enough time in it.
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
                The No-Show Problem Is Costing You More Than You Think
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  A professional books a two-hour consultation. The client doesn&apos;t show. That slot is gone unbillable, unrecoverable, and it cost your staff time to set it up in the first place. Multiply that across a week, a month, a year, and the number gets uncomfortable quickly.
                </p>
                <p>
                  The fix is not complicated. Automated appointment booking with a required deposit filters out the time-wasters before they ever get on your calendar. Automated reminders reduce no-shows dramatically. And when a client does cancel, an automated waitlist fills the slot without anyone making a phone call.
                </p>
                <p>
                  Beyond scheduling, professional services firms are drowning in documents, client intake, and repetitive correspondence that AI handles faster and more consistently than any staff member.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[300px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/Appointment confirmation and desk setup.webp"
                alt="Smartphone and laptop showing automated appointment booking confirmation for a professional services firm"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 - Where the Revenue Goes */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Where Professional Services Firms Lose Billable Time
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {revenueLosses.map((item, index) => (
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
              What AI Actually Fixes in a Professional Services Business
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
              Find Out How Many Billable Hours You&apos;re Losing to Admin
            </h2>
            <p className="mt-5 text-lg text-white/70">
              A discovery audit will show you exactly where your firm is losing time it should be billing. Book a call and we&apos;ll give you an honest no-pressure assessment.
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
