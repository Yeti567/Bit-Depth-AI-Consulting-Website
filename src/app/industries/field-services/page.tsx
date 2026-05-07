import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';
import { BreadcrumbSchema, buildIndustryBreadcrumbs } from '@/components/ui/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'AI for Field Service Businesses in Canada | BitDepth AI',
  description:
    'Renewal automation, route optimization, AI-handled customer comms, and review request automation for pest control, restoration, and commercial cleaning operators.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/field-services' }
};

const data: IndustryPageData = {
  slug: 'field-services',
  breadcrumbLabel: 'Field Services',
  eyebrow: 'Recurring revenue businesses',
  heroTitle: 'AI for field services. Protect renewals without adding admin headcount.',
  heroLead:
    'Pest control, restoration, commercial cleaning, snow removal, lawn care, and other recurring-revenue field service businesses live and die by renewal rates and route density. We automate the renewals, optimize the routes, and let AI handle the customer comms that used to take a full-time office staffer.',
  heroImageSrc: '/images/hero-industry-field-services.webp',
  heroImageAlt: 'Field service technician beside a pickup truck on a rural Ontario road',

  problemTitle: 'The renewal slips because nobody had time to chase it.',
  problemParagraphs: [
    'In recurring-revenue field service businesses, the math is brutal. A renewal you forgot to send is a contract you lost. A route built once and never re-optimized is a margin you stopped earning. A review you never asked for is a referral you never got.',
    'None of this is a strategy problem. It is an admin-capacity problem. The owner is in the field, the dispatcher is dispatching, and the office manager is handling whatever comes in the door first. The renewal sequence, the route review, and the review request all sit in the queue behind whatever is on fire.',
    'We replace the admin capacity with automations that run on their own. The renewals go out. The routes optimize. The customer gets a confirmation, an on-the-way text, and a review request at the right moment, every time.'
  ],

  lossEyebrow: 'What we usually find',
  lossTitle: 'Where recurring revenue leaks.',
  losses: [
    'Renewal reminders go out late, or not at all.',
    'Routes are built once and never re-optimized.',
    'Customer comms are inconsistent across techs.',
    'Reviews and referrals are not actively requested.',
    'Seasonal scheduling spikes catch the office unprepared every year.',
    'Service notes from the field never make it back into the customer record.'
  ],

  solutionsTitle: 'What we typically build for field-service operators.',
  solutions: [
    {
      title: 'Renewal automation with proactive customer outreach',
      description:
        'Renewals go out on time, every time, with personalized customer-specific messaging and a frictionless re-sign flow. The office stops chasing renewals manually and starts seeing them close themselves.'
    },
    {
      title: 'Route optimization tied to dispatch',
      description:
        'Routes re-optimize as new jobs come in. Drivers see the right sequence, and you stop paying for windshield time. Multi-stop pest control or commercial cleaning routes are the highest-ROI use case.'
    },
    {
      title: 'AI-handled customer comms with human review on exceptions',
      description:
        'Booking confirmations, on-the-way SMS, and post-job follow-ups handled automatically. A human reviews anything outside the normal flow, like a frustrated customer or an unusual request.'
    },
    {
      title: 'Review and referral request automation',
      description:
        'Every completed job triggers a review or referral ask, timed to the moment customers are most likely to say yes (usually 24 to 48 hours after the visit, before the memory fades).'
    },
    {
      title: 'Seasonal scheduling intelligence',
      description:
        'For seasonal trades like snow removal, lawn care, and seasonal pest control, the system uses your historical data to forecast demand and prepares the schedule, the routes, and the customer comms ahead of the spike.'
    },
    {
      title: 'Field-to-office capture',
      description:
        'Tech writes a few lines and snaps a photo on the phone. The notes, photos, and any chemical or product usage land on the customer record automatically. No more reconstructing the visit at the end of the week.'
    }
  ],

  toolsTitle: 'It connects the stack field-service operators run.',
  toolsLead:
    'Field service is fragmented across more verticals than HVAC or plumbing, but the tooling is consistent enough that we can connect to most stacks.',
  toolGroups: [
    {
      label: 'Field service software',
      items:
        'Jobber, ServiceTitan, Housecall Pro, FieldEdge, Kickserv, Workiz, GorillaDesk, Real Green, Service Autopilot.'
    },
    {
      label: 'Routing and scheduling',
      items: 'Route4Me, RoadWarrior, OptimoRoute, your existing field service software route engine.'
    },
    {
      label: 'Customer comms',
      items:
        'Twilio-based SMS (Canadian carrier registered, A2P 10DLC), transactional email through SendGrid or Postmark, your existing customer portal.'
    },
    {
      label: 'Accounting',
      items: 'QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Sage 50.'
    }
  ],

  localContextTitle: 'Built for Canadian field-service realities.',
  localContextParagraphs: [
    'Canadian field service has rhythms US-built tools tend to miss. Pest control is heavy in spring and fall and dead in winter (in most provinces). Lawn care is a tight five-month season. Snow removal is the inverse. Restoration is event-driven by weather and water-damage incidents. Commercial cleaning is steadier but contract-cycle dependent. Whatever the vertical, the seasonal pattern shapes the cash flow, the scheduling, and the renewal cycle.',
    'On the compliance side, Canadian SMS infrastructure requires A2P 10DLC carrier registration for any business-to-customer messaging at scale. CASL governs the consent and unsubscribe model. PIPEDA controls how customer data is stored. Quebec\'s Law 25 adds stronger requirements for any work in that province. We handle the registration paperwork and the consent-aware messaging by default.',
    'Operationally, the highest-margin work in most field-service verticals is the recurring contract. Renewals are the lifeline. Most operators we audit are losing five to fifteen percent of their renewable revenue every year because the office could not keep up with the renewal cadence. Closing that gap is usually the highest-ROI automation we build.'
  ],

  typicalEngagementTitle: 'A typical field-services engagement.',
  typicalEngagement:
    'Two-week diagnostic. We look at your renewal cadence, your route data, and your customer comms cycle. We sit with the office manager and the dispatcher. The diagnostic prioritizes by ROI: usually renewal automation first because the math is the most defensible, then route optimization once the customer base is stable, then customer comms once the recurring side is humming. Most clients build them in that order over a ninety-day window. The audit fee is credited toward implementation.',

  featuredServicesTitle: 'Services field-service operators most often build.',
  featuredServices: [
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
    { label: 'AI Booking Agent', href: '/services/ai-booking-agent' },
    { label: 'Custom AI Workers', href: '/services/custom-ai-workers' }
  ],

  faqTitle: 'Field-services questions.',
  faq: [
    {
      question: 'Does this work for pest control specifically?',
      answer:
        'Yes. Pest control is one of our most common field-service builds. Renewal cadences, seasonal scheduling, route density, and customer comms are all areas where automation pays back fast. We have built against GorillaDesk, ServiceTitan, and Jobber for pest control specifically.'
    },
    {
      question: 'What about restoration?',
      answer:
        'Restoration is event-driven, which makes it different. The renewal cycle is shorter and the lead source is mostly insurance referral or emergency inbound. We focus on inbound qualification, dispatch routing, and the document automation around insurance claims and IICRC documentation.'
    },
    {
      question: 'Can you do route optimization for commercial cleaning?',
      answer:
        'Yes. Commercial cleaning routes are typically more stable than pest control or lawn care, but the optimization opportunity is in seasonal staff scheduling and absence coverage. We build the optimization plus the absence-coverage automation.'
    },
    {
      question: 'How does the renewal automation know when to send?',
      answer:
        'It uses your historical data. We look at the renewal cycle for each customer cohort and the conversion rate by send timing. Most clients have data on this they have never analyzed. The automation then sends at the optimal moment for each cohort, with personalized messaging.'
    },
    {
      question: 'What if a customer responds to an automated message?',
      answer:
        'It routes to a human. The system sends, but any reply that needs judgment goes to your team with the original message and the customer history attached. Nothing gets dropped, nothing gets answered with confidence the system does not have.'
    },
    {
      question: 'How do you handle the seasonal pattern in our business?',
      answer:
        'The system reads your historical data to learn the pattern, then prepares the schedule, the routes, and the customer comms ahead of the spike. For snow removal, that means October prep work. For lawn care, it means February. For pest control, the prep starts in late winter for the spring renewal cycle.'
    }
  ],

  relatedIndustriesTitle: 'Other Canadian service verticals.',
  relatedIndustries: [
    { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
    { label: 'Electrical Contractors', href: '/industries/electrical' },
    { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
    { label: 'Professional Services', href: '/industries/professional-services' }
  ],

  ctaTitle: 'Stop trading renewals for admin overload.',
  ctaBody:
    'The audit identifies the highest-ROI fix for your specific business. For most recurring-revenue field service operators, renewals or routes pay back the audit inside a quarter.'
};

export default function FieldServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        id="industry-field-services-breadcrumbs"
        items={buildIndustryBreadcrumbs('Field Services', 'field-services')}
      />
      <IndustryPage data={data} />
    </>
  );
}
