import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ChevronRight, CheckCircle } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting for Field Services Companies | BitDepth AI',
  description:
    "Stop losing jobs to voicemail. Automated booking, follow-up, invoicing, and client communication for HVAC, plumbing, electrical, and field service businesses.",
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/industries/field-services'
  },
  openGraph: {
    title: 'AI Consulting for Field Services Companies | BitDepth AI',
    description:
      "Stop losing jobs to voicemail. Automated booking, follow-up, invoicing, and client communication for HVAC, plumbing, electrical, and field service businesses.",
    url: 'https://bitdepthaiconsulting.com/industries/field-services',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-field-services.webp',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian field services businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Field Services Companies | BitDepth AI',
    description:
      "Stop losing jobs to voicemail. Automated booking, follow-up, invoicing, and client communication for HVAC, plumbing, electrical, and field service businesses.",
    images: ['/images/og-field-services.webp']
  }
};

const revenueLosses = [
  'Missed calls during job hours with no follow-up system',
  'Appointment scheduling done manually by whoever picks up the phone',
  'No-shows and last-minute cancellations with no deposit or confirmation system',
  'Invoicing delays because the owner is still in the field at end of day',
  'No system to follow up with past clients for seasonal maintenance or repeat work',
  'Scheduling conflicts and double-bookings from manual calendar management'
];

const solutions = [
  {
    title: 'Automated Appointment Booking',
    description: 'A chatbot or booking system that answers inquiries, presents available time slots, and confirms appointments — without the owner or office staff having to be available in real time.'
  },
  {
    title: 'Callback and Follow-Up Automation',
    description: 'When a live booking isn\'t possible, automated systems capture the lead and trigger a callback reminder so no inquiry falls through the cracks.'
  },
  {
    title: 'Invoice and Payment Automation',
    description: 'Invoices generated and sent automatically when a job is marked complete — so the owner gets paid faster without doing paperwork at 9pm.'
  },
  {
    title: 'Client Follow-Up Sequences',
    description: 'Automated reminders for annual maintenance, seasonal tune-ups, or service renewals — so past clients come back without you having to remember to call them.'
  }
];

export default function FieldServicesPage() {
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
            <span className="text-white">Field Services</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0">
          <Image
            src="/images/1775381591189_Industrial_Field_Services_Hero_Image.webp"
            alt="HVAC technician servicing rooftop unit with Toronto skyline in background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/70" />
        </div>
        <div className="container-shell relative py-16 sm:py-20 md:py-28">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow-pill">Industries / Field Services</span>
              <h1 className="mt-5 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
                If the Phone Isn&apos;t Getting Answered, You&apos;re Losing Jobs to Someone Who Is
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                HVAC, plumbing, electrical, and equipment repair businesses lose more revenue to missed calls and slow follow-up than almost any other operational problem.
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
                The Owner Is in the Field. The Phone Is Ringing. Nobody Is Answering.
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Most field service businesses are run by the owner. The owner is on a job. A potential client calls, gets voicemail, and calls the next company on Google. That job — and every future job from that client — is gone.
                </p>
                <p>
                  This is not a staffing problem. It is a systems problem. An AI-powered chatbot or automated booking system can answer that call, collect the client&apos;s information, offer available time slots, and either book the appointment or ensure a callback happens the same day.
                </p>
                <p>
                  The technology exists, it is not expensive, and it works around the clock without taking a lunch break. The businesses that implement this are not just capturing more leads — they are building a reputation for being responsive while their competitors go to voicemail.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[300px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/1775381591190_Industry_Field_Services_Booking_Appointment_Online.webp"
                alt="Tradesperson in work gloves holding smartphone showing automated appointment booking app"
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
              Where Field Service Companies Lose Work They Never Know They Lost
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
              What AI Actually Fixes in a Field Services Business
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
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
              Find Out How Many Jobs You&apos;re Losing to Voicemail
            </h2>
            <p className="mt-5 text-lg text-white/70">
              A discovery audit will show you exactly where your business is losing revenue it should be capturing. Book a call and we&apos;ll give you an honest assessment.
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
