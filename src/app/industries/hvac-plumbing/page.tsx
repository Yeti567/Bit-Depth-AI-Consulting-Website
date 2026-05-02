import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI for HVAC and Plumbing Contractors | BitDepth AI',
  description:
    'Stop losing 30 to 50 percent of your inbound calls. AI receptionist, auto-quote drafting, and ServiceTitan or Jobber connectors for residential HVAC and plumbing.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/hvac-plumbing' }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'HVAC and Plumbing',
  eyebrow: 'Primary vertical',
  heroTitle: 'AI for HVAC and plumbing. Stop the inbound call leak.',
  heroLead:
    'Residential HVAC and plumbing is where missed calls hurt the most. Average tickets sit between $450 and $3,725 according to industry benchmarks, and SearchLight Digital pegs the average HVAC cost-per-lead at $104. One recovered emergency job pays for our service for the year.',
  heroImageSrc: '/images/hero-industry-hvac-plumbing.webp',
  heroImageAlt: 'Residential HVAC technician kneeling beside an outdoor air conditioner unit',

  problemTitle: 'The phone is the bottleneck.',
  problemParagraphs: [
    'Most residential HVAC and plumbing operators are running an undersized front desk against an oversized inbound queue. Calls cluster between 8 and 10 AM and again between 3 and 5 PM, and most after-hours calls go to voicemail and never come back.',
    'On the back end, a CRM like Jobber or ServiceTitan is in use, but only at 30 to 50 percent of capability. The data sits there but nobody trusts it enough to make decisions on it.'
  ],

  lossEyebrow: 'What we usually find',
  lossTitle: 'Where the leak shows up.',
  losses: [
    'After-hours calls go to voicemail and never get returned.',
    'Dispatcher is overloaded between 8 and 10 AM and again between 3 and 5 PM.',
    'Quotes take 24 to 48 hours, and homeowners book the first contractor who responds.',
    'Jobber or ServiceTitan is in use, but only at 30 to 50 percent of capability.'
  ],

  solutionsTitle: 'What we typically build.',
  solutions: [
    {
      title: 'Missed Call Text Back with after-hours auto-booking',
      description:
        'Every missed call gets a personalized text inside five seconds with a callback link to your booking calendar. After-hours flow uses a different script and book-direct path.'
    },
    {
      title: 'AI receptionist for overflow during peak hours',
      description:
        'Answers the calls your dispatcher cannot pick up between 8 and 10 AM and 3 and 5 PM, qualifies the lead, books the appointment.'
    },
    {
      title: 'Auto-quote drafting from photos and voice notes',
      description:
        'Technicians snap a photo or send a voice note from the field. The system drafts a quote using your pricing rules, ready for review.'
    },
    {
      title: 'ServiceTitan or Jobber connectors',
      description:
        'Push job data into accounting without re-keying. Customer file, dispatch record, and invoice all stay in sync.'
    }
  ],

  ctaTitle: 'See what one recovered emergency job is worth.',
  ctaBody:
    'The audit identifies the highest-ROI fix for your specific business. For most HVAC and plumbing operators, that is the inbound call leak.'
};

export default function HvacPlumbingPage() {
  return <IndustryPage data={data} />;
}
