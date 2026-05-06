import type { Metadata } from 'next';
import { ServicePage, type ServicePageData } from '@/components/ui/service-page';
import { OFFERS } from '@/lib/offers';

export const metadata: Metadata = {
  title: 'Custom AI Workers for Trades and Contractors | BitDepth AI',
  description:
    'Custom AI workers that take repeatable roles off your team. Defined scope, defined guardrails, defined cost.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/custom-ai-workers' }
};

const data: ServicePageData = {
  slug: 'custom-ai-workers',
  offer: OFFERS.customAiWorkers,
  serviceType: 'AI Consulting',
  schemaDescription:
    'Custom AI workers that take a defined repeatable role off your team. Scoped, tested, and monitored. From $10,000.',
  hero: {
    eyebrow: 'Custom AI workers',
    title: 'A specific job, done by a specific AI worker, with a specific human owner.',
    subhead:
      'A custom AI worker is not a chatbot. It is a scoped, tested, and monitored agent that handles one repeatable role inside your business. Quote follow-up. After-hours dispatch. Job-cost reconciliation. Safety document generation. Each worker has a job description, guardrails, an off switch, and a person on your team who owns it.',
    priceAnchor: 'From $10,000 per worker. Audit fee credited toward implementation within 90 days.'
  },
  fitFor: [
    'Operations leaders with a repeatable role that runs more than ten times a week.',
    'Owners who can describe the job in plain language and the guardrails for what the worker should not do.',
    'Companies with at least one full-time admin or supervisor who can own the worker after launch.',
    'Trades, field-service, ICI, and professional-services firms that have already invested in clean data.'
  ],
  notFor: [
    'Anyone looking for a creative AI to brainstorm strategy. AI workers do scoped jobs, not strategy work.',
    'Roles that require physical presence, judgment under risk, or a regulated license to perform.',
    'Workflows where the inputs are inconsistent and unreliable. Garbage in still produces garbage out, faster.',
    'Companies that are not ready to take ownership of the system after launch. Every worker needs a human owner.'
  ],
  problemTitle: 'You do not need more software. You need someone to do the job.',
  problemParagraphs: [
    'Most contractors we meet do not have a tooling problem. They have a capacity problem. The owner is running estimates twelve hours a day. The dispatcher is fielding calls and trying to update Jobber at the same time. The bookkeeper is reconciling job costs at month end because nobody had time during the month. There is a job to be done, and there is nobody available to do it.',
    'Hiring is the obvious answer. It is also slow, expensive, and hard to do well in trades. A junior estimator takes nine months to break even. An after-hours dispatcher costs $60,000 a year for coverage you only need eighteen hours a week. A bookkeeper is hard to find and harder to keep.',
    'A custom AI worker is the third option. Not a generic chatbot. Not a SaaS product you have to bend your business around. A scoped, tested agent built to handle one job in your business, with the same hard rules a good employee would follow.'
  ],
  whatItDoesTitle: 'Four AI workers we build most often.',
  whatItDoes: [
    {
      title: 'Quote follow-up worker.',
      body:
        'Watches your CRM for outstanding quotes, sends a polite, scheduled nudge on the day each quote is most likely to convert based on your historical data, escalates to the estimator when the customer engages, and stops sending after the customer signs or declines. It will not invent prices or promise availability. It will hand the warm conversation back to a human.'
    },
    {
      title: 'After-hours dispatcher.',
      body:
        'Answers inbound calls between 5pm and 7am, qualifies the call by service category and urgency, books non-emergency jobs into the next available morning slot, and notifies the on-call tech for true emergencies according to your dispatch rules. It does not pretend to be a human and it does not improvise on price. The escalation path is yours, not ours.'
    },
    {
      title: 'Job-cost reconciliation worker.',
      body:
        'Reads completed jobs in your CRM, pulls labor hours, materials, and subcontractor invoices, and produces a daily reconciliation with flagged variances. The bookkeeper stops chasing missing receipts. The owner sees margin issues the same week, not the next month.'
    },
    {
      title: 'Safety document generator.',
      body:
        'Drafts toolbox talks, hazard assessments, and incident reports from a structured intake. Pulls the right SDS sheets, applies your OHSMS template, and files the document against the right job. Reviewed by your safety manager before anything leaves the company. Built for COR-stream contractors.'
    }
  ],
  toolsTitle: 'It runs on the systems you already use.',
  toolsLead:
    'Custom AI workers connect to the tools your team already uses. We do not require you to move your data into a new platform. The worker reads what it needs through approved connections, with role-based access, and only sees the records relevant to its specific job.',
  toolGroups: [
    {
      label: 'Where workers read from',
      items:
        'Jobber, ServiceTitan, Housecall Pro, FieldEdge, Kickserv, Workiz, HubSpot, QuickBooks, Xero, Google Calendar, Outlook, Twilio, your safety document library.'
    },
    {
      label: 'Where workers write to',
      items:
        'CRM job records, calendar appointments, accounting transactions, customer SMS, internal Slack or Teams channels, dashboards, and your existing document storage.'
    },
    {
      label: 'How workers escalate',
      items:
        'SMS or email to the human owner, ticket in your existing helpdesk, or a structured handoff in your CRM. The escalation path matches your existing dispatch logic, not ours.'
    },
    {
      label: 'AI infrastructure',
      items:
        'We are vendor-neutral on the underlying model. We pick the right combination of language model, voice model, and orchestration tooling for the worker\'s job and your budget. Your data is not used to train public models.'
    }
  ],
  toolsFootnote:
    'If your business runs on a custom system or a legacy database, we will tell you on the fit check whether we can build a worker against it before you spend any money.',
  processTitle: 'How we deliver a custom AI worker engagement.',
  processSteps: [
    {
      n: 'Step 1',
      title: 'Job description workshop',
      body:
        'We treat the worker the way you would treat a new hire. What is the job? What does success look like? What does the worker have to do, and what is it explicitly not allowed to do? What are the hard rules: the prices it cannot quote, the topics it must escalate, the situations where it stops and asks a human? The deliverable is a written job description and rules document, signed off by you, that drives everything else.'
    },
    {
      n: 'Step 2',
      title: 'Build, in a contained sandbox',
      body:
        'We build the worker against synthetic transactions that mirror your real data shape. You get to test it the way you would test a new hire on a slow Monday. Common questions, edge cases, the angry customer, the confused customer, the customer who types in fragments. You see every response before any of it goes live.'
    },
    {
      n: 'Step 3',
      title: 'Pilot, on a small slice of real work',
      body:
        'Once the worker passes the sandbox, we run it on a small slice of real work, usually two to four weeks. Every conversation, every transaction, every escalation is logged and reviewed. The pilot ends only when the data shows the worker is doing the job at or above the standard a good human would meet.'
    },
    {
      n: 'Step 4',
      title: 'Roll-out, with a human owner',
      body:
        'Every worker goes live with a named human owner on your team. That person reviews the daily activity report for the first thirty days, signs off on edge cases, and approves any expansion to the worker\'s scope. The worker has an off switch the owner can pull in seconds.'
    },
    {
      n: 'Step 5',
      title: 'Ongoing service, every month',
      body:
        'Every BitDepth worker includes ongoing service. We monitor early conversations, review logs, tune prompts as your business changes, and update the knowledge base when you add a service or change a price. We do not ship and disappear. The work after launch is the difference between a worker that compounds value and one that quietly degrades.'
    }
  ],
  timelineTitle: 'Pricing and timeline.',
  timelineParagraphs: [
    'Custom AI workers start at $10,000 for a focused single-job worker (quote follow-up, for example) and run up to $40,000 for a more complex worker handling multi-step decisions, voice plus text, or multi-system integration. Build timeline runs six to twelve weeks from contract signature to live, depending on scope, integration complexity, and how fast we can get the data we need from your team.',
    'Every worker engagement starts with the AI Opportunity Audit unless you have already done one. The full $5,000 audit fee is credited against the worker build when you proceed within 90 days. You either get a roadmap you can hand to any vendor, or you get the audit free as part of building the worker with us.',
    'After launch, every worker includes a monthly support package. The monthly cost depends on the worker\'s scope, transaction volume, and the AI infrastructure it runs on. Quoted in your engagement agreement.'
  ],
  willNotDoTitle: 'What our workers will not do.',
  willNotDo: [
    'They will not invent prices, warranties, policies, or availability that does not exist.',
    'They will not recommend competitors or suggest a customer call someone else.',
    'They will not handle topics you have flagged for human review.',
    'They will not pretend to be a human. They identify themselves as the office assistant.',
    'They will not run unsupervised forever. Every worker has a human owner and an off switch.',
    'They will not lock you in. Your data, your customer records, and your phone numbers stay yours.'
  ],
  faq: [
    {
      question: 'How is a custom AI worker different from a chatbot?',
      answer:
        'A chatbot is a generic conversational tool. A custom AI worker is a scoped agent built to do one job in your business with the same hard rules a good employee would follow. Chatbots tend to drift. Workers stay in their lane because the job description, the guardrails, and the escalation path are explicit and tested.'
    },
    {
      question: 'How do you stop the worker from making something up?',
      answer:
        'Three layers. The worker only answers from a knowledge base you approve. It is configured to say "I do not know" and escalate when the question is outside its scope. And every transaction is logged, so when something does go sideways we can trace the cause and adjust within hours.'
    },
    {
      question: 'Who owns the worker after launch?',
      answer:
        'Someone on your team, named on day one. Usually the operations manager or the person who would have managed the role if it were a human hire. We support the owner with reports, tuning, and on-call response. We do not run your operations for you.'
    },
    {
      question: 'What happens when the worker gets a question outside its scope?',
      answer:
        'It escalates. The escalation path is defined in the job description and matches your existing dispatch logic. Nothing gets dropped, nothing gets answered with confidence the worker does not have.'
    },
    {
      question: 'Can the worker make changes to my CRM or accounting system?',
      answer:
        'Yes, with role-based access scoped to what the worker actually needs. A quote-follow-up worker reads quotes and writes follow-up activity records. It does not have access to financial records or customer payment data. The access scope is documented in your engagement agreement.'
    },
    {
      question: 'What if I want to expand the worker\'s scope later?',
      answer:
        'Same process. Job description amendment, sandbox build, pilot, roll-out. The monitoring you already have makes scope expansion safer because you can see how the existing scope is performing before you add new work.'
    },
    {
      question: 'How does this connect to the AI Opportunity Audit?',
      answer:
        'The audit identifies which roles in your business are good candidates for an AI worker, ranks them by ROI, and produces a written job description for each. The custom AI worker engagement starts from that job description rather than a blank page. Most clients build the highest-ROI worker first, prove it, and then take on the next.'
    },
    {
      question: 'What about voice agents?',
      answer:
        'Voice workers are real. The AI Booking Agent product is one. We can build custom voice workers as part of the Custom AI Workers service when the role makes sense for voice rather than text. The fit check tells you which makes sense for your specific use case.'
    }
  ],
  relatedServices: [
    { label: 'AI Opportunity Audit', href: '/services/ai-audit' },
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
    { label: 'AI Booking Agent', href: '/services/ai-booking-agent' },
    { label: 'AI Implementation', href: '/services/ai-implementation' }
  ],
  relatedIndustries: [
    { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
    { label: 'Electrical Contractors', href: '/industries/electrical' },
    { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
    { label: 'Field Services', href: '/industries/field-services' },
    { label: 'Professional Services', href: '/industries/professional-services' }
  ],
  finalCta: {
    eyebrow: 'A specific job, done',
    title: 'Hire a worker that does one thing well.',
    body:
      'Job description, sandbox build, pilot, roll-out. A named human owner on your team. Ongoing service every month. Audit first. Recommend what fits. Deliver outcomes.',
    primaryHref: '/contact?topic=audit',
    primaryLabel: 'Book an AI Audit',
    secondaryHref: '/services/profit-leak-review',
    secondaryLabel: 'Start with a Profit Leak Review for $250'
  }
};

export default function CustomAiWorkersPage() {
  return <ServicePage data={data} />;
}
