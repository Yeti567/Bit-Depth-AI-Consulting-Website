import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI Consulting for Field Services Companies | Bit Depth AI',
  description:
    'Stop losing jobs to voicemail. Automated booking, follow-up, invoicing, and client communication for HVAC, plumbing, electrical, and field service businesses.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/field-services' },
  openGraph: {
    title: 'AI Consulting for Field Services Companies | Bit Depth AI',
    description:
      'Stop losing jobs to voicemail. Automated booking, follow-up, invoicing, and client communication for HVAC, plumbing, electrical, and field service businesses.',
    url: 'https://bitdepthaiconsulting.com/industries/field-services',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian field services businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Field Services Companies | Bit Depth AI',
    description:
      'Stop losing jobs to voicemail. Automated booking, follow-up, invoicing, and client communication for field service businesses.',
    images: ['/images/og-industries.jpg']
  }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'Field Services',
  eyebrow: 'Field Services',
  heroTitle: "If the phone isn't getting answered, you're losing jobs to someone who is.",
  heroLead:
    'HVAC, plumbing, electrical, and equipment repair businesses lose more revenue to missed calls and slow follow-up than almost any other operational problem.',
  heroImageSrc: '/images/Industrial Field Services Hero Image.webp',
  heroImageAlt: 'HVAC technician servicing a rooftop unit with a city skyline in the background',

  problemTitle: 'The owner is in the field. The phone is ringing. Nobody is answering.',
  problemParagraphs: [
    "Most field service businesses are run by the owner. The owner is on a job. A potential client calls, gets voicemail, and calls the next company on Google. That job, and every future job from that client, is gone.",
    "This is not a staffing problem. It is a systems problem. An AI-powered chatbot or automated booking system can answer that call, collect the client's information, offer available time slots, and either book the appointment or ensure a callback happens the same day.",
    'The technology exists, it is not expensive, and it works around the clock without taking a lunch break. The businesses that implement this are not just capturing more leads. They are building a reputation for being responsive while their competitors go to voicemail.'
  ],
  problemImageSrc: '/images/Industry Field Services Booking Appointment Online.webp',
  problemImageAlt:
    'Tradesperson in work gloves holding a smartphone showing an automated appointment booking app',

  lossEyebrow: 'Lost work',
  lossTitle: 'Where field service companies lose work they never know they lost.',
  losses: [
    'Missed calls during job hours with no follow-up system',
    'Appointment scheduling done manually by whoever picks up the phone',
    'No-shows and last-minute cancellations with no deposit or confirmation system',
    'Invoicing delays because the owner is still in the field at end of day',
    'No system to follow up with past clients for seasonal maintenance or repeat work',
    'Scheduling conflicts and double-bookings from manual calendar management'
  ],

  solutionsTitle: 'What AI actually fixes in a field services business.',
  solutions: [
    {
      title: 'Automated appointment booking',
      description:
        'A chatbot or booking system that answers inquiries, presents available time slots, and confirms appointments, without the owner or office staff having to be available in real time.'
    },
    {
      title: 'Callback and follow-up automation',
      description:
        "When a live booking isn't possible, automated systems capture the lead and trigger a callback reminder so no inquiry falls through the cracks."
    },
    {
      title: 'Invoice and payment automation',
      description:
        'Invoices generated and sent automatically when a job is marked complete, so the owner gets paid faster without doing paperwork at 9pm.'
    },
    {
      title: 'Client follow-up sequences',
      description:
        'Automated reminders for annual maintenance, seasonal tune-ups, or service renewals, so past clients come back without you having to remember to call them.'
    }
  ],

  ctaTitle: "Find out how many jobs you're losing to voicemail.",
  ctaBody:
    'A discovery audit will show you exactly where your business is losing revenue it should be capturing. Book a call and we will give you an honest assessment.'
};

export default function FieldServicesPage() {
  return <IndustryPage data={data} />;
}
