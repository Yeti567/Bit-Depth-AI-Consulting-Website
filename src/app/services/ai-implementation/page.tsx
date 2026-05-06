import type { Metadata } from 'next';
import { ServicePage, type ServicePageData } from '@/components/ui/service-page';
import { OFFERS } from '@/lib/offers';

export const metadata: Metadata = {
  title: 'AI Implementation for Canadian Trades | BitDepth AI',
  description:
    'Phased AI implementation for Canadian contractors and field-service businesses. Sprint-based delivery, clear acceptance criteria, ongoing support.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/ai-implementation' }
};

const data: ServicePageData = {
  slug: 'ai-implementation',
  offer: OFFERS.aiImplementation,
  serviceType: 'AI Consulting',
  schemaDescription:
    'Phased AI implementation for Canadian contractors and field-service businesses. Sprint-based delivery, clear acceptance criteria, ongoing support.',
  hero: {
    eyebrow: 'AI implementation',
    title: 'The audit told you what to build. This is how we build it.',
    subhead:
      'AI implementation is what happens after the audit. Sprint-based delivery, weekly cadence, clear acceptance criteria for every milestone. Pilot before launch. Ongoing support after. We do not ship and disappear.',
    priceAnchor: 'Phased pricing from $12,000. Audit fee credited toward implementation within 90 days.'
  },
  fitFor: [
    'Companies that have completed an AI Opportunity Audit (with us or a credible third party).',
    'Operations leaders who can dedicate two to four hours a week to working sessions.',
    'Trades and field-service firms with at least one full-time admin or supervisor who will own the system after launch.',
    'Owners willing to run a real pilot before full roll-out.'
  ],
  notFor: [
    'Anyone who has not done the diagnostic work first. Implementation without a roadmap is how the 70 percent of digital transformations fail.',
    'Companies looking for a managed service. We build, transfer, and support. Your team owns the operation.',
    'Anyone hoping to build everything in the audit at once. Sprint sequencing exists for a reason.'
  ],
  problemTitle: 'Most AI implementations fail because nobody runs them like a real project.',
  problemParagraphs: [
    'McKinsey puts the failure rate of digital transformations in Canada around 70 percent. The pattern is consistent. The audit produces a roadmap. The roadmap gets handed to a vendor or a consultant. The vendor builds something. It does not quite fit. It launches anyway because the budget is committed. Three months later it is half-used and nobody trusts the data.',
    'The failure is rarely about technology. The model works, the integration works in the demo, the dashboard renders. The failure is project management: scope that drifted because nobody held the line, acceptance criteria that were never written down, a pilot that ran for a week instead of a month, support that ended on go-live day.',
    'BitDepth runs AI implementation the way we would run a critical infrastructure project. Sprint cadence, weekly check-ins, written acceptance criteria for every milestone, pilot before launch, ongoing service after. Audit first. Recommend what fits. Deliver outcomes. Not a slogan, the operating standard.'
  ],
  whatItDoesTitle: 'What sprint-based implementation actually means in practice.',
  whatItDoes: [
    {
      title: 'Phased delivery, in priority order.',
      body:
        'We do not build everything in the audit at once. We sequence the work by ROI and by dependency. Phase 1 is usually quick wins (missed-call recovery, quote follow-up, invoice automation). Phase 2 is integration (CRM to accounting, dispatch to office, field to invoice). Phase 3 is custom AI workers handling defined job functions. Each phase is its own engagement with its own scope, contract, and acceptance.'
    },
    {
      title: 'Two-week sprints, every time.',
      body:
        'Each piece of work is built in a one to two week sprint. You see the actual flow at the end of every sprint, not at the end of the project. Scope changes happen at sprint boundaries, not in the middle, which is what keeps the budget honest.'
    },
    {
      title: 'Written acceptance criteria.',
      body:
        'Before any sprint starts, we write the acceptance criteria. What does done look like? What inputs is the system going to handle? What inputs is it going to escalate? What is the failure mode? You sign off on the criteria before we start, and we test against them before you sign off on the build.'
    },
    {
      title: 'Pilot before launch.',
      body:
        'Every customer-facing automation runs on a small slice of real work for two to four weeks before full roll-out. The pilot ends only when the data shows the system is doing the job at or above the standard a good human would meet. The pilot has an off-ramp built in. If the data does not work, we adjust or we cut.'
    },
    {
      title: 'Documentation your team can actually read.',
      body:
        'Every system goes live with a one-page operating procedure, the troubleshooting steps, and the contact path when something looks off. No 47-page knowledge base nobody reads. The owner of each system on your team has a written job description for the system, the same way they would for a new hire.'
    },
    {
      title: 'Post-launch monitoring and support.',
      body:
        'Every BitDepth implementation includes a thirty-day post-launch monitoring period at minimum, and most engagements include ongoing support after that. We watch the early conversations, review error logs, tune prompts as your business changes, and update the knowledge base when you add a service or change a price.'
    }
  ],
  toolsTitle: 'It works with your stack, not around it.',
  toolsLead:
    'We are vendor-neutral on the underlying tooling. We pick the right combination of language model, voice model, automation platform, and integration tools for the job and your budget. The list below covers the categories we work in. The specific vendors are picked per engagement and documented in the contract.',
  toolGroups: [
    {
      label: 'CRMs and field service',
      items:
        'Jobber, ServiceTitan, Housecall Pro, FieldEdge, Kickserv, Workiz, Method:CRM, HubSpot, Salesforce.'
    },
    {
      label: 'Accounting and bookkeeping',
      items: 'QuickBooks Online, QuickBooks Desktop, Xero, FreshBooks, Sage 50.'
    },
    {
      label: 'AI and automation infrastructure',
      items:
        'Enterprise-grade language models with contractual data protections, voice AI providers, Canadian-compliant SMS infrastructure, Twilio, n8n, Make, Zapier where appropriate.'
    },
    {
      label: 'Storage and documentation',
      items: 'Google Drive, OneDrive, SharePoint, Dropbox, AuditSoft, Procore.'
    }
  ],
  toolsFootnote:
    'We are not a reseller. We do not get paid by any vendor for recommending their tools. Our recommendations are based on what fits your business, your existing systems, and your budget.',
  processTitle: 'How we deliver an AI implementation engagement.',
  processSteps: [
    {
      n: 'Phase 1',
      title: 'Quick Wins (two to four week sprints)',
      body:
        'The first phase is the highest-ROI, lowest-risk automations from your audit. Typical scope: missed-call recovery, auto-quote drafting, invoice follow-up, review request automation. Range: $12,000 to $25,000 depending on integration depth. Timeline: four to eight weeks total.'
    },
    {
      n: 'Phase 2',
      title: 'Integration (connecting the systems you already use)',
      body:
        'The second phase is the connective tissue between the tools you already pay for. Quote-to-job, dispatch-to-accounting, field notes to invoice, customer photos to job record. Range: $15,000 to $40,000 depending on the number of handoffs. Timeline: six to twelve weeks total.'
    },
    {
      n: 'Phase 3',
      title: 'Custom AI Workers (purpose-built agents)',
      body:
        'The third phase is custom AI workers handling defined job functions: quote follow-up, after-hours dispatch, job-cost reconciliation, safety document generation. Each worker is its own scoped engagement. Range: $20,000 to $60,000 per worker. Timeline: six to twelve weeks per worker. See the Custom AI Workers service for the full delivery model.'
    },
    {
      n: 'Across all phases',
      title: 'Weekly cadence and post-launch support',
      body:
        'Every phase runs the same way: weekly working session, written sprint summary, demo at the end of each sprint, formal acceptance before sign-off. After launch, every system gets a minimum thirty-day monitoring period. Most engagements include ongoing support after that, scoped in the engagement contract.'
    }
  ],
  timelineTitle: 'Phased pricing.',
  timelineParagraphs: [
    'Implementation pricing is phased and ROI-tied. The audit gives you the prioritized list. We start with the highest-ROI phase, prove it, and then take on the next. Most clients see the time savings inside the first month and the dollar value inside the first quarter.',
    'Quick Wins phase: $12,000 to $25,000. Integration phase: $15,000 to $40,000. Custom AI Workers: $20,000 to $60,000 per worker. Ongoing support is quoted in the engagement contract based on transaction volume and complexity.',
    'The full $5,000 audit fee is credited against the first implementation phase when you proceed within 90 days. You get a roadmap you can hand to any vendor, or you get the audit free as part of building it with us.'
  ],
  willNotDoTitle: 'What we will not do.',
  willNotDo: [
    'We will not build everything in the audit at once. Sequencing exists for a reason and ignoring it is how implementations fail.',
    'We will not skip the pilot. Every customer-facing automation runs on real work in a small cohort before full roll-out.',
    'We will not lock you in. Your data, your accounts, your phone numbers, your customer records stay yours.',
    'We will not promise outcomes we cannot defend with numbers from your business.',
    'We will not run your operations for you. We build, document, transfer, and support. Your team owns it.',
    'We will not push tools we are paid to recommend. We do not sell software.'
  ],
  faq: [
    {
      question: 'Do we need to do an audit first?',
      answer:
        'Yes, in almost every case. The audit gives us the diagnostic, the prioritized roadmap, and the ROI estimates that drive the implementation phases. If you have already done a credible audit with another firm, we will review it and tell you whether we can build from it. If we can, the audit-credit guarantee does not apply (it would have applied to your audit, with whoever did it). If we cannot, we will say so.'
    },
    {
      question: 'How long until I see ROI?',
      answer:
        'Phase 1 quick wins typically pay for themselves inside the first quarter. Specific timelines depend on the workflow and your call volume, job value, and team structure. The audit estimates the ROI for each opportunity before we build, so you know whether the math works for your business.'
    },
    {
      question: 'What if a sprint runs over?',
      answer:
        'It happens. The sprint summary documents what shipped and what slipped. We re-baseline the next sprint at the working session and adjust scope rather than letting the budget drift silently. You get a written explanation of any overrun and the path forward.'
    },
    {
      question: 'Who owns the system after launch?',
      answer:
        'Someone on your team, named at the start of the engagement. Usually the operations manager or the person who would have managed the work if it were a human role. We support the owner with reports, tuning, and on-call response. We do not run your operations for you.'
    },
    {
      question: 'What does ongoing support actually look like?',
      answer:
        'Conversation review and quality monitoring, error monitoring and alerting, prompt updates as your business evolves, knowledge base updates when you add a service or change a price, performance reporting, a scheduled monthly performance check-in, and reasonable support requests. Quoted in your engagement contract.'
    },
    {
      question: 'Can we just hire you to do the whole thing?',
      answer:
        'We do not run AI as a managed service. The reason is honest: a system you do not own and cannot operate becomes a dependency and eventually a liability. We build it, transfer it, document it, and support it. Your team operates it.'
    },
    {
      question: 'What about training my team?',
      answer:
        'Training is built into every implementation. Each system goes live with a one-page operating procedure, the troubleshooting path, and a working session with the human owner. Most engagements include a follow-up training cycle thirty days after launch when your team has had time to use the system and surface real questions.'
    },
    {
      question: 'What if we want to add scope mid-engagement?',
      answer:
        'Scope changes happen at sprint boundaries. The new scope gets written, priced, and added to the next sprint or the next phase. Mid-sprint scope changes are how budgets blow up, so we do not do them.'
    }
  ],
  relatedServices: [
    { label: 'AI Opportunity Audit', href: '/services/ai-audit' },
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
    { label: 'Custom AI Workers', href: '/services/custom-ai-workers' },
    { label: 'AI Booking Agent', href: '/services/ai-booking-agent' }
  ],
  relatedIndustries: [
    { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
    { label: 'Electrical Contractors', href: '/industries/electrical' },
    { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
    { label: 'Field Services', href: '/industries/field-services' }
  ],
  finalCta: {
    eyebrow: 'After the audit',
    title: 'The roadmap, built right.',
    body:
      'Sprint cadence, written acceptance, pilot before launch, ongoing support after. Audit first. Recommend what fits. Deliver outcomes.',
    primaryHref: '/contact?topic=audit',
    primaryLabel: 'Book an AI Audit',
    secondaryHref: '/services/profit-leak-review',
    secondaryLabel: 'Start with a Profit Leak Review for $250'
  }
};

export default function AiImplementationPage() {
  return <ServicePage data={data} />;
}
