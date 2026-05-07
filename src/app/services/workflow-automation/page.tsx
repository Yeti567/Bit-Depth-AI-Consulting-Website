import type { Metadata } from 'next';
import { ServicePage, type ServicePageData } from '@/components/ui/service-page';
import { OFFERS } from '@/lib/offers';

export const metadata: Metadata = {
  title: 'Workflow Automation for Canadian Contractors | BitDepth AI',
  description:
    'Automation for Jobber, ServiceTitan, QuickBooks, and Housecall Pro. Quote to job, field notes to invoice, follow-ups, and customer updates without the admin burden.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/workflow-automation' }
};

const data: ServicePageData = {
  slug: 'workflow-automation',
  offer: OFFERS.workflowAutomation,
  serviceType: 'Business Process Automation',
  schemaDescription:
    'Automation for Jobber, ServiceTitan, QuickBooks, and Housecall Pro. Quote to job, field notes to invoice, follow-ups, and customer updates without the admin burden. From $5,000 per workflow.',
  hero: {
    eyebrow: 'Workflow automation',
    title: 'Stop your office from being the integration.',
    subhead:
      'Most Canadian contractors are running their business on three or four good tools that do not talk to each other. The office staff become the integration: rekeying jobs into the CRM, copy-pasting from quotes to invoices, chasing photos out of the field, and sending the same six follow-up emails every week. We connect the systems you already pay for, so the work stops getting done twice.',
    priceAnchor: 'From $5,000 per workflow. Audit fee credited toward implementation within 90 days.'
  },
  fitFor: [
    'Trades and field-service businesses with at least one full-time admin or dispatcher.',
    'Companies running Jobber, ServiceTitan, Housecall Pro, FieldEdge, Kickserv, or Workiz, plus QuickBooks or Xero.',
    'Owners who can name two or three places work is being done twice every week.',
    'Operations leaders who want documented, supported automation, not a one-off Zapier hack.'
  ],
  notFor: [
    'Sole operators with no admin team. The economics rarely justify automation at that scale.',
    'Companies that have not picked their core CRM or accounting tool yet. Pick the tools first.',
    'Anyone hoping for a wholesale platform replacement. We connect what you have, we do not rip and replace.'
  ],
  problemTitle: 'You do not have a software problem. You have a handoff problem.',
  problemParagraphs: [
    'The same job gets entered into three places. The dispatcher writes it in the CRM. The accountant rekeys it into QuickBooks. The owner pastes the address into the calendar. Each entry is a chance to lose a digit, miss a unit number, or send the tech to last week\'s job.',
    'Every contractor we audit has a version of the same week. Quotes go out, then sit. Customers wait two days for a confirmation that should have gone out in twenty minutes. Photos pile up on phones that never get attached to the right job. Invoices ship a week after the work is done because the field notes still need to be deciphered. None of it is anyone\'s fault. It is the seam between systems.',
    'Workflow automation is the work of closing those seams. It is not glamorous. It does not require a model that costs ten million dollars to train. It requires patience, an honest map of how the work actually moves through your business, and the willingness to stop accepting that the office team should be the integration.'
  ],
  whatItDoesTitle: 'The handoffs we automate every week.',
  whatItDoes: [
    {
      title: 'Quote to job.',
      body:
        'When a quote is approved, the job is created in your CRM with the right service category, address, customer record, and pricing pulled across automatically. No retyping, no missed fields, no guessing about what the customer agreed to.'
    },
    {
      title: 'Jobber or ServiceTitan to QuickBooks.',
      body:
        'Completed jobs flow into QuickBooks as invoices with the right line items, taxes, and customer record matched. The bookkeeper stops being a data entry clerk and starts being a controller.'
    },
    {
      title: 'Field notes to invoice.',
      body:
        'Tech writes a few lines on the phone, snaps a photo, and the invoice draft is built before the truck pulls out of the driveway. The customer gets billed the same day, not the same week.'
    },
    {
      title: 'Technician photos to customer update.',
      body:
        'Photos from the field land on the job record automatically. The customer gets a clean before-and-after summary by text or email when the job closes, without anyone in the office composing it.'
    },
    {
      title: 'Quote follow-up reminders.',
      body:
        'Outstanding quotes get a polite, scheduled nudge on the day they are most likely to convert. The cadence comes from your data, not a generic three-touch sequence.'
    },
    {
      title: 'Review request automation.',
      body:
        'A request for a Google review goes out at the right moment after a job. Not a week later when the customer has forgotten you, not the same hour when they have not paid yet.'
    },
    {
      title: 'Safety and compliance documentation.',
      body:
        'Toolbox talks, hazard assessments, and incident reports get filed against the right job and the right project. When COR or pre-qualification audits come around, the documentation is already in order.'
    },
    {
      title: 'Internal reporting dashboards.',
      body:
        'The numbers your operations manager spends two hours pulling every Monday: jobs booked, average ticket, response time, AR aging, technician utilization. Pulled automatically, delivered to the right inbox at the right time.'
    }
  ],
  toolsTitle: 'It works with the tools you already pay for.',
  toolsLead:
    'We do not sell software. We connect what you already use. The list below covers the stacks we have actually built against. If your tool is not listed, ask. The fit check tells you whether we can connect to it before you spend anything.',
  toolGroups: [
    {
      label: 'CRMs and field service',
      items:
        'Jobber, ServiceTitan, Housecall Pro, FieldEdge, Kickserv, Workiz, Method:CRM, HubSpot, and most modern CRMs with a webhook or API.'
    },
    {
      label: 'Accounting and bookkeeping',
      items: 'QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Sage 50.'
    },
    {
      label: 'Calendars and scheduling',
      items: 'Google Calendar, Outlook, iCal, Calendly, dispatch software calendars.'
    },
    {
      label: 'Communication',
      items: 'Twilio-based SMS, Canadian SMS infrastructure with A2P 10DLC registration, transactional email through SendGrid or Postmark.'
    },
    {
      label: 'Storage and documentation',
      items: 'Google Drive, OneDrive, SharePoint, Dropbox, AuditSoft, Procore.'
    }
  ],
  toolsFootnote:
    'If your office runs on a custom database or a thirty-year-old desktop tool, we will tell you on the fit check whether we can connect to it before you spend any money.',
  processTitle: 'How we deliver a workflow automation engagement.',
  processSteps: [
    {
      n: 'Step 1',
      title: 'Discovery, in your office, on your numbers',
      body:
        'We start with the audit-first approach BitDepth applies to every engagement. Two to three working sessions with you, your dispatcher, your bookkeeper, and the tech who actually closes the work. We map the handoffs. We watch a typical day. We find the seams. The deliverable is a written diagnostic of where the work is doubled, slowed, or dropped, with rough ROI estimates for each handoff.'
    },
    {
      n: 'Step 2',
      title: 'Build, in sprints, with you in the loop',
      body:
        'Each automation is built and reviewed in a one to two week sprint. You see the actual flow before it goes anywhere near a real customer. We test against your real data with synthetic transactions, then with a small live cohort, then full launch. You sign off in writing before each step.'
    },
    {
      n: 'Step 3',
      title: 'Pilot, on real work, with a clear off-ramp',
      body:
        'Every automation runs on a small slice of real jobs first, usually two to four weeks. We monitor every transaction. If something looks wrong, we pause it within minutes. The pilot ends only when the data shows the automation is doing the work better than the manual process.'
    },
    {
      n: 'Step 4',
      title: 'Roll-out, with documentation your team can read',
      body:
        'Once the automation passes the pilot, we roll it out to the rest of the work. Your team gets a one-page operating procedure for the new flow, the troubleshooting steps, and the contact path when something looks off. No 47-page knowledge base nobody reads.'
    },
    {
      n: 'Step 5',
      title: 'Support, ongoing, with a real human',
      body:
        'Every BitDepth automation includes ongoing support. We monitor early conversations, review error logs, tune prompts and integrations as your business changes, and update the knowledge base when you add a service or change a price. Pricing depends on scope and is included in your engagement quote.'
    }
  ],
  timelineTitle: 'Pricing and timeline.',
  timelineParagraphs: [
    'Most workflow automation engagements run from $5,000 for a single sharp workflow (quote to job, for example) up to $25,000 for a full operations build covering five to seven connected handoffs. Timeline runs four to ten weeks depending on scope, the cleanliness of your existing data, and how fast your team can get us access to the systems we need.',
    'Every BitDepth engagement starts with the AI Opportunity Audit unless you have already done one with us. The full $5,000 audit fee is credited against the workflow automation invoice when you proceed within 90 days. You get a roadmap you can hand to any vendor, or you get the audit free as part of building it with us.'
  ],
  willNotDoTitle: 'What we will not do.',
  willNotDo: [
    'We will not rip out the tools you already use. If Jobber works for your dispatch, Jobber stays.',
    'We will not build automations on dirty data. If your customer records are full of duplicates and the addresses are inconsistent, the data work happens first.',
    'We will not hand you a Zapier flow and call it done. Every BitDepth automation includes monitoring, error handling, and ongoing support.',
    'We will not promise outcomes we cannot defend with numbers from your business.',
    'We will not lock you in. Your data, your accounts, your phone numbers, and your customer records stay yours.'
  ],
  faq: [
    {
      question: 'How much of my team will need to change how they work?',
      answer:
        'As little as possible. The whole point of workflow automation is that the work moves automatically between systems your team already uses. Your dispatcher still uses Jobber. Your bookkeeper still uses QuickBooks. They just stop typing the same job into both. The biggest behavior change is usually that your team starts trusting the data because it is now consistent.'
    },
    {
      question: 'What happens when the automation breaks?',
      answer:
        'It will, sometimes. Vendors push updates, integrations time out, an unusual job format breaks a parser. Every BitDepth automation logs every transaction and every error. You get a notification when something fails. We can review the log, identify the cause, and adjust within hours. Nothing gets dropped silently.'
    },
    {
      question: 'How long until we see ROI?',
      answer:
        'Most clients see the time savings inside the first month. The dollar value of those savings depends on how much admin time you were spending on the handoff before. Our diagnostic estimates the ROI before we build, so you know whether the math works for your business. If it does not, we say so and recommend not moving forward.'
    },
    {
      question: 'Can you build everything in the audit at once?',
      answer:
        'Almost never the right move. We build in priority order, starting with the highest ROI workflow, run it through pilot, prove it, and then take on the next one. That sequence keeps the failure modes contained and lets you adjust as your business learns what working automation actually feels like.'
    },
    {
      question: 'What about Zapier or Make?',
      answer:
        'Zapier and Make are great for simple connections. We use them when they are the right tool. They struggle with complex logic, error recovery, and any flow that depends on specific business rules around pricing, scheduling, or compliance. We pick the right tool for each job, and we tell you why on the spec.'
    },
    {
      question: 'Will my customer data leave Canada?',
      answer:
        'We default to Canadian-hosted infrastructure for any flow that handles customer data. When a workflow has to use a US-based AI vendor, we use providers with contractual data protections, role-based access, and explicit terms that your data is not used to train public models. The full explanation lives on the Security and Data Handling page.'
    },
    {
      question: 'Do you support QuickBooks Desktop?',
      answer:
        'Yes, with caveats. QuickBooks Desktop is harder to automate against than QuickBooks Online and the cleanest setups usually involve a small middleware layer or a scheduled sync. We will tell you in the diagnostic whether the math works for your specific Desktop setup or whether moving to Online makes more sense.'
    }
  ],
  relatedServices: [
    { label: 'AI Opportunity Audit', href: '/services/ai-audit' },
    { label: 'Profit Leak Detection Review', href: '/services/profit-leak-review' },
    { label: 'Custom AI Workers', href: '/services/custom-ai-workers' },
    { label: 'AI Implementation', href: '/services/ai-implementation' }
  ],
  relatedIndustries: [
    { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
    { label: 'Electrical Contractors', href: '/industries/electrical' },
    { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
    { label: 'Field Services', href: '/industries/field-services' }
  ],
  finalCta: {
    eyebrow: 'Stop the double-entry',
    title: 'Connect the tools you already pay for.',
    body:
      'Two to three working sessions, one written diagnostic, real numbers on where the work is being done twice. The audit fee is credited toward the build. Audit first. Recommend what fits. Deliver outcomes.',
    primaryHref: '/contact?topic=audit#contact-form',
    primaryLabel: 'Book an AI Audit',
    secondaryHref: '/services/profit-leak-review',
    secondaryLabel: 'Start with a Profit Leak Review for $250'
  }
};

export default function WorkflowAutomationPage() {
  return <ServicePage data={data} />;
}
