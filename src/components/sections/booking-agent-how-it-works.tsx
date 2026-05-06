import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const steps = [
  {
    title: 'Forward your missed and after-hours calls.',
    body: 'You forward calls to a dedicated number when your team is busy or unavailable. Your existing business number stays the same.'
  },
  {
    title: 'The AI agent answers using your approved knowledge.',
    body: 'It uses only the information you have authorized: your services, pricing rules, hours, warranties, and policies. It does not invent answers.'
  },
  {
    title: 'It handles common questions.',
    body: 'Service offerings, availability, pricing ranges, warranties, and frequently asked questions. The questions your team answers fifty times a week.'
  },
  {
    title: 'It books the appointment.',
    body: 'Phone callback, service appointment, or estimate, written to your calendar or your dispatch system. The customer leaves the call with a confirmed time.'
  },
  {
    title: 'It escalates to a human when needed.',
    body: 'Phone, SMS, email, or calendar handoff, by your rules. Emergencies, unusual requests, and anything you flag for human review go to a person on your team.'
  },
  {
    title: 'You get a weekly report.',
    body: 'Calls received, calls handled, appointments booked, escalations, missed opportunities, and recovered revenue. You can see exactly what it caught and what it cost.'
  }
];

interface BookingAgentHowItWorksProps {
  headingLevel?: 'h2' | 'h3';
  showCta?: boolean;
  background?: 'offwhite' | 'stone';
  withTopRule?: boolean;
}

export function BookingAgentHowItWorks({
  headingLevel = 'h2',
  showCta = true,
  background = 'offwhite',
  withTopRule = true
}: BookingAgentHowItWorksProps) {
  const Heading = headingLevel;
  const sectionClass = [
    background === 'stone' ? 'section-stone' : 'section-offwhite',
    'section-space',
    withTopRule ? 'section-rule' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={sectionClass}>
      <div className="container-shell">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow">How it works</p>
          <Heading className="mt-6">How the AI booking agent works.</Heading>
          <p className="mt-5 text-[var(--color-slate)]">
            This is not a website widget. It is a working part of your phone and lead-handling
            system, built to recover the calls and inquiries you would otherwise lose.
          </p>
        </ScrollReveal>
        <ol className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2">
          {steps.map((step, index) => (
            <ScrollReveal key={step.title} index={index} as="li" className="flex gap-5">
              <span className="font-serif text-2xl text-[var(--color-terracotta)] tabular leading-none pt-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-semibold text-[var(--color-navy)]">{step.title}</p>
                <p className="mt-2 text-[var(--color-slate)]">{step.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </ol>
        {showCta ? (
          <ScrollReveal index={6} className="mt-12">
            <Link href="/services/ai-booking-agent" className="btn-primary">
              See pricing and setup
            </Link>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
