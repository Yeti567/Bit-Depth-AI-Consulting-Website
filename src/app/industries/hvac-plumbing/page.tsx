import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';
import { BreadcrumbSchema, buildIndustryBreadcrumbs } from '@/components/ui/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'AI Automation for HVAC and Plumbing Contractors in Canada | BitDepth AI',
  description:
    'Practical AI and automation for Canadian HVAC and plumbing companies. Missed-call recovery, quote follow-up, dispatch, and Jobber and ServiceTitan integration.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/hvac-plumbing' }
};

const data: IndustryPageData = {
  slug: 'hvac-plumbing',
  breadcrumbLabel: 'HVAC and Plumbing',
  eyebrow: 'Primary vertical',
  heroTitle: 'AI for HVAC and plumbing. Stop the inbound call leak.',
  heroLead:
    'Residential HVAC and plumbing is where missed calls hurt the most. Average tickets sit between $450 and $3,725 according to industry benchmarks, and the cost-per-lead for HVAC search traffic is high enough that one recovered emergency job pays for the system for the year.',
  heroImageSrc: '/images/hero-industry-hvac-plumbing.webp',
  heroImageAlt: 'Residential HVAC technician kneeling beside an outdoor air conditioner unit',

  problemTitle: 'The phone is the bottleneck.',
  problemParagraphs: [
    'Most residential HVAC and plumbing operators are running an undersized front desk against an oversized inbound queue. Calls cluster between 8 and 10 AM and again between 3 and 5 PM. After-hours calls are the highest-margin work and the calls most likely to go unanswered. Your dispatcher cannot pick up four lines at once, and most callers will not leave a voicemail.',
    'On the back end, a CRM like Jobber or ServiceTitan is in use, but only at 30 to 50 percent of capability. The data sits there but nobody trusts it enough to make decisions on it. Quotes go out, then sit. Photos pile up on phones that never get attached to the right job. Invoices ship a week after the work is done because the field notes still need to be deciphered.',
    'None of this is a marketing problem. You are already paying to attract these calls. The leak is between the call hitting your number and your team having a name, an address, and a job.'
  ],

  lossEyebrow: 'What we usually find',
  lossTitle: 'Where the leak shows up.',
  losses: [
    'After-hours calls go to voicemail and never get returned.',
    'Dispatcher is overloaded between 8 and 10 AM and again between 3 and 5 PM.',
    'Quotes take 24 to 48 hours, and homeowners book the first contractor who responds.',
    'Jobber or ServiceTitan is in use, but only at 30 to 50 percent of capability.',
    'Field photos and notes do not make it back to the right job record.',
    'Invoices ship a week after the work is done.'
  ],

  solutionsTitle: 'What we typically build for HVAC and plumbing.',
  solutions: [
    {
      title: 'Missed Call Text Back with after-hours auto-booking',
      description:
        'Every missed call gets a personalized text inside five seconds with a callback link to your booking calendar. After-hours flow uses a different script and book-direct path so emergencies get triaged and non-emergencies get booked into the next morning.'
    },
    {
      title: 'AI receptionist for overflow during peak hours',
      description:
        'Answers the calls your dispatcher cannot pick up between 8 and 10 AM and 3 and 5 PM, qualifies the lead by service category and urgency, and books the appointment directly into your calendar with the address, equipment make, and the customer\'s actual words about the problem.'
    },
    {
      title: 'Auto-quote drafting from photos and voice notes',
      description:
        'Technicians snap a photo or send a voice note from the field. The system drafts a quote using your pricing rules, ready for review before it goes to the customer.'
    },
    {
      title: 'ServiceTitan or Jobber connectors',
      description:
        'Push job data into accounting without re-keying. Customer file, dispatch record, and invoice all stay in sync. The bookkeeper stops being a data entry clerk.'
    },
    {
      title: 'Equipment-aware intake',
      description:
        'The intake script asks the right questions for the trade: brand, age, error code, last service date for HVAC; flow direction, fixture type, water source for plumbing. The tech arrives with the right parts on the truck.'
    },
    {
      title: 'Review request automation',
      description:
        'A request for a Google review goes out at the right moment after a job, not a week later when the customer has forgotten you. Your review velocity goes up without anyone in the office composing requests.'
    }
  ],

  toolsTitle: 'It works with the tools your office already uses.',
  toolsLead:
    'We are vendor-neutral. We connect to whatever you already pay for, and we tell you on the fit check whether your specific stack is a fit before you spend anything.',
  toolGroups: [
    {
      label: 'CRMs and field service',
      items:
        'Jobber, ServiceTitan, Housecall Pro, FieldEdge, Kickserv, Workiz, and most modern HVAC and plumbing stacks.'
    },
    {
      label: 'Accounting',
      items: 'QuickBooks Online, QuickBooks Desktop, Xero, Sage 50.'
    },
    {
      label: 'Phone and SMS',
      items:
        'Your existing business number stays the same. Calls forward to a Canadian-registered number for the AI agent. SMS uses A2P 10DLC carrier registration so messages actually deliver instead of getting filtered.'
    },
    {
      label: 'Calendars',
      items: 'Google Calendar, Outlook, iCal, your dispatch software calendar.'
    }
  ],

  localContextTitle: 'Built for the Canadian residential market.',
  localContextParagraphs: [
    'Canadian HVAC and plumbing has a few distinguishing features the US-built tools tend to miss. PIPEDA controls how customer data is stored. The CRTC governs how SMS gets sent on your behalf, and CASL applies to every commercial message. Quebec\'s Law 25 adds stronger requirements for any work in that province. Most US-built missed-call tools either skip Canadian carrier registration entirely or run on a US number, which kills your delivery rate.',
    'We register your business number with the major Canadian carriers (Bell, Rogers, Telus, and the regionals) under A2P 10DLC, file the brand and use-case verification, and apply CASL-compliant opt-out language by default. Customer data lives on Canadian-hosted infrastructure under PIPEDA-aligned terms. If you take on commercial HVAC or plumbing work in Quebec, the system handles French-language responses for known service categories.',
    'Operationally, residential HVAC in Ontario is heating-led from October through April and cooling-led from May through September. Dispatch logic should change with the season. Plumbing emergencies follow weather: pipe-burst calls spike after the first hard freeze and after the spring thaw. The scripts and routing we build acknowledge that pattern.'
  ],

  typicalEngagementTitle: 'A typical HVAC or plumbing engagement.',
  typicalEngagement:
    'A two-week diagnostic. We listen to a sample of your inbound call recordings, pull a month of your CRM data with permission, sit with your dispatcher for half a day, and then write a prioritized list of operational fixes ranked by ROI. Most clients start with Missed Call Text Back, add the AI receptionist for overflow inside the first 90 days, and layer auto-quote drafting once the inbound flow is stable. The audit fee is credited toward implementation. You either get a roadmap you can hand to any vendor, or you get the audit free as part of building it with us.',

  featuredServicesTitle: 'Services HVAC and plumbing operators most often build.',
  featuredServices: [
    { label: 'Missed Call Text Back', href: '/services/missed-call-text-back' },
    { label: 'AI Booking Agent', href: '/services/ai-booking-agent' },
    { label: 'Workflow Automation', href: '/services/workflow-automation' }
  ],

  faqTitle: 'HVAC and plumbing questions.',
  faq: [
    {
      question: 'Will this work with ServiceTitan?',
      answer:
        'Yes. We have built against ServiceTitan, including dispatch records, customer files, and invoice push to QuickBooks. Specific integrations depend on your ServiceTitan license tier; we confirm during the fit check.'
    },
    {
      question: 'What about Jobber?',
      answer:
        'Yes. Jobber has a clean API for jobs, quotes, customers, and visits. Most HVAC and plumbing engagements include Jobber connectors as a default. Jobber to QuickBooks Online is one of the most common flows we build.'
    },
    {
      question: 'How fast does the missed-call text actually go out?',
      answer:
        'Within five seconds of the call ending in voicemail. The customer is still holding the phone when the text arrives. After ninety seconds, recovery rates drop sharply because the customer has already started dialing the next plumber.'
    },
    {
      question: 'What happens to after-hours emergency calls?',
      answer:
        'After-hours emergencies are the highest-margin work and the most likely to be lost. The system routes by your rules: an active gas smell or no-heat in winter goes straight to the on-call tech\'s phone, while a slow-drip plumbing call gets booked into the next morning. The on-call tech gets a clean handoff with the address, situation, and customer expectation already set.'
    },
    {
      question: 'Will it sound like a robot?',
      answer:
        'No, but it will not pretend to be a human either. The script is short, written in your business voice, and identifies itself as your office assistant. We have tested both directions in residential trades. Honesty about the system being automated has higher booking rates than pretending a person is on the other end.'
    },
    {
      question: 'How long until we see the recovered revenue?',
      answer:
        'Most clients see captured calls inside the first 48 hours after go-live. The dollar value depends on your call volume, average ticket, and after-hours mix. For most residential HVAC and plumbing operators, one recovered emergency job pays for the system for the year.'
    }
  ],

  relatedIndustriesTitle: 'Other Canadian trades we work with.',
  relatedIndustries: [
    { label: 'Electrical Contractors', href: '/industries/electrical' },
    { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
    { label: 'Field Services (pest control, restoration, cleaning)', href: '/industries/field-services' }
  ],

  ctaTitle: 'See what one recovered emergency job is worth.',
  ctaBody:
    'The audit identifies the highest-ROI fix for your specific business. For most HVAC and plumbing operators, that is the inbound call leak.'
};

export default function HvacPlumbingPage() {
  return (
    <>
      <BreadcrumbSchema
        id="industry-hvac-plumbing-breadcrumbs"
        items={buildIndustryBreadcrumbs('HVAC and Plumbing', 'hvac-plumbing')}
      />
      <IndustryPage data={data} />
    </>
  );
}
