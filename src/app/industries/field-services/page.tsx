import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI for Field Service Businesses in Canada | Bit Depth AI',
  description:
    'Renewal automation, route optimization, AI-handled customer comms, and review request automation for pest control, restoration, and commercial cleaning operators.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/field-services' }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'General Field Services',
  eyebrow: 'Recurring revenue businesses',
  heroTitle: 'Protect the recurring revenue without adding admin headcount.',
  heroLead:
    'Pest control, restoration, commercial cleaning, and other recurring-revenue field service businesses live and die by renewal rates and route density. We automate the renewals, optimize the routes, and let AI handle the customer comms that used to take a full-time office staffer.',
  heroImageSrc: '/images/hero-industry-field-services.webp',
  heroImageAlt: 'Field service technician beside a pickup truck on a rural Ontario road',

  problemTitle: 'The renewal slips because nobody had time to chase it.',
  problemParagraphs: [
    'In recurring-revenue field service businesses, the math is brutal. A renewal you forgot to send is a contract you lost. A route built once and never re-optimized is a margin you stopped earning. A review you never asked for is a referral you never got.',
    'None of this is a strategy problem. It is an admin-capacity problem. We replace the admin capacity with automations that run on their own.'
  ],

  lossEyebrow: 'What we usually find',
  lossTitle: 'Where recurring revenue leaks.',
  losses: [
    'Renewal reminders go out late, or not at all.',
    'Routes are built once and never re-optimized.',
    'Customer comms are inconsistent across techs.',
    'Reviews and referrals are not actively requested.'
  ],

  solutionsTitle: 'What we typically build.',
  solutions: [
    {
      title: 'Renewal automation with proactive customer outreach',
      description:
        'Renewals go out on time, every time, with personalized customer-specific messaging and a frictionless re-sign flow.'
    },
    {
      title: 'Route optimization tied to dispatch',
      description:
        'Routes re-optimize as new jobs come in. Drivers see the right sequence, and you stop paying for windshield time.'
    },
    {
      title: 'AI-handled customer comms with human review on exceptions',
      description:
        'Booking confirmations, on-the-way SMS, and post-job follow-ups handled automatically. A human reviews anything outside the normal flow.'
    },
    {
      title: 'Review and referral request automation',
      description:
        'Every completed job triggers a review or referral ask, timed to the moment customers are most likely to say yes.'
    }
  ],

  ctaTitle: 'Stop trading renewals for admin overload.',
  ctaBody:
    'The audit identifies the highest-ROI fix for your specific business. For most recurring-revenue field service operators, renewals or routes pay back the audit inside a quarter.'
};

export default function FieldServicesPage() {
  return <IndustryPage data={data} />;
}
