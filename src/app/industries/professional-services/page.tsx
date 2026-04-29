import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI Consulting for Professional Services Firms | Bit Depth AI',
  description:
    'Automated booking with deposits, no-show reduction, intake automation, and document preparation for accountants, lawyers, engineers, consultants, and healthcare providers.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/professional-services' },
  openGraph: {
    title: 'AI Consulting for Professional Services Firms | Bit Depth AI',
    description:
      'Automated booking with deposits, no-show reduction, intake automation, and document preparation for professional services firms.',
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
      'Automated booking, no-show reduction, intake automation, and document preparation for professional services firms.',
    images: ['/images/og-industries.jpg']
  }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'Professional Services',
  eyebrow: 'Professional Services',
  heroTitle:
    "Your time is billable. Every hour spent on admin is an hour you're not getting paid for.",
  heroLead:
    'Accountants, lawyers, engineers, consultants, and healthcare providers all share the same problem: too much time on the business, not enough time in it.',
  heroImageSrc: '/images/Industry Professional Services Hero Image.webp',
  heroImageAlt:
    'Professional services consultant reviewing data and analytics at a modern office desk',

  problemTitle: 'The no-show problem is costing you more than you think.',
  problemParagraphs: [
    "A professional books a two-hour consultation. The client doesn't show. That slot is gone, unbillable, unrecoverable, and it cost your staff time to set it up in the first place. Multiply that across a week, a month, a year, and the number gets uncomfortable quickly.",
    'The fix is not complicated. Automated appointment booking with a required deposit filters out the time-wasters before they ever get on your calendar. Automated reminders reduce no-shows dramatically. And when a client does cancel, an automated waitlist fills the slot without anyone making a phone call.',
    'Beyond scheduling, professional services firms are drowning in documents, client intake, and repetitive correspondence that AI handles faster and more consistently than any staff member.'
  ],
  problemImageSrc: '/images/Appointment confirmation and desk setup.webp',
  problemImageAlt:
    'Smartphone and laptop showing automated appointment booking confirmation for a professional services firm',

  lossEyebrow: 'Billable time lost',
  lossTitle: 'Where professional services firms lose billable time.',
  losses: [
    'No-shows and last-minute cancellations with no deposit or consequence system',
    'Scheduling done manually by staff who have other responsibilities',
    'Client intake and onboarding paperwork handled by hand every single time',
    'Follow-up emails and reminders written individually instead of automated',
    'Document review and preparation that takes hours of professional time',
    'Knowledge management gaps where staff cannot find what they need without asking someone'
  ],

  solutionsTitle: 'What AI actually fixes in a professional services business.',
  solutions: [
    {
      title: 'Automated booking with deposit collection',
      description:
        "An online booking system where clients select their own appointment time, provide intake information, and put down a deposit, all before they speak to anyone in your office. Serious clients book. Time-wasters don't."
    },
    {
      title: 'Appointment reminders and no-show reduction',
      description:
        'Automated text and email reminders at 48 hours, 24 hours, and the morning of the appointment. No-show rates drop significantly. Your staff stops spending time on confirmation calls.'
    },
    {
      title: 'Client intake and onboarding automation',
      description:
        'Intake forms, document collection, conflict checks, and onboarding sequences automated and consistent every time, regardless of who is working that day.'
    },
    {
      title: 'Internal knowledge base',
      description:
        'An AI-powered internal system where staff can find policies, procedures, templates, and client information instantly, without interrupting a colleague or digging through shared drives.'
    },
    {
      title: 'Document preparation assistance',
      description:
        'AI-assisted drafting and document preparation that reduces the time professionals spend on routine correspondence, standard agreements, and repetitive client communications.'
    }
  ],

  ctaTitle: "Find out how many billable hours you're losing to admin.",
  ctaBody:
    'A discovery audit will show you exactly where your firm is losing time it should be billing. Book a call and we will give you an honest, no-pressure assessment.'
};

export default function ProfessionalServicesPage() {
  return <IndustryPage data={data} />;
}
