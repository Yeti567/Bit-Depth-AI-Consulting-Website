import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';
import { BreadcrumbSchema, buildIndustryBreadcrumbs } from '@/components/ui/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'AI Automation for Ontario Electrical Contractors | BitDepth AI',
  description:
    'Practical AI and automation for Ontario electrical contractors, including ESA notification automation, job costing, and quote follow-up.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/electrical' }
};

const data: IndustryPageData = {
  slug: 'electrical',
  breadcrumbLabel: 'Electrical Contractors',
  eyebrow: 'Secondary vertical',
  heroTitle: 'ESA notifications, permits, and apprentice hours should not live in three spreadsheets.',
  heroLead:
    'Most Ontario electrical contractors run on a mix of accounting software, dispatch software, and a stack of spreadsheets the office manager rebuilds every Monday. We connect the systems and replace the spreadsheets with automated workflows.',
  heroImageSrc: '/images/hero-industry-electrical.webp',
  heroImageAlt: 'Electrician in a hi-vis vest holding a clipboard at a residential job site',

  problemTitle: 'The office manager is doing the integration work by hand.',
  problemParagraphs: [
    'When ESA notifications get re-keyed from dispatch into the ESA portal, when permit submissions are tracked in a spreadsheet that nobody trusts, when apprentice hours are logged on paper and entered into payroll twice a month, the bottleneck is not the systems. The bottleneck is the manual handoff between them.',
    'Job-cost tracking is reactive. Overruns are discovered weeks after the fact, when the data finally makes it from the field into the books. By then the project is closed and the lesson is too late.',
    'Quote follow-up is also a leak. Electrical quotes sit longer than HVAC or plumbing because the work is more often planned and the customer is comparing two or three contractors. Without follow-up, half of those quotes go cold.'
  ],

  lossEyebrow: 'What we usually find',
  lossTitle: 'Where the spreadsheets pile up.',
  losses: [
    'ESA notifications get re-keyed by hand from the dispatch tool into the ESA portal.',
    'Permit submissions are tracked in a shared spreadsheet that nobody trusts.',
    'Apprentice hours are logged on paper and entered into payroll twice a month.',
    'Job-cost tracking is reactive, with overruns discovered weeks after the fact.',
    'Quotes go out and then sit. No structured follow-up.',
    'Safety triage on inbound calls happens by ear, not by script.'
  ],

  solutionsTitle: 'What we typically build for electrical contractors.',
  solutions: [
    {
      title: 'ESA notification automation',
      description:
        'Pulls from your dispatch tool and submits to the ESA portal without re-keying. The notification record is filed against the job for audit-ready documentation.'
    },
    {
      title: 'Permit tracking dashboard',
      description:
        'Real-time status across every active job. Replaces the Monday spreadsheet rebuild with a live view your project managers can trust.'
    },
    {
      title: 'Apprentice hour capture from the field',
      description:
        'Hours flow directly to payroll with no double-entry and no paper timesheets. Apprentice supervision rules and ratio tracking are documented automatically.'
    },
    {
      title: 'Real-time job-cost dashboard',
      description:
        'Live view of every active job against its estimated margin, with budget alerts before overruns happen. The owner sees margin issues the same week, not the next month.'
    },
    {
      title: 'Safety-triage intake script',
      description:
        'Inbound calls get triaged: live exposed wire, sparks, burning smell, panel down, and partial outage all get routed differently. Quote-only calls (panel upgrades, EV charger installs, generator hookups) get a different script and end with a different handoff.'
    },
    {
      title: 'Quote follow-up automation',
      description:
        'Outstanding quotes get a polite, scheduled nudge on the day each quote is most likely to convert based on your historical close rate. Stops sending after the customer signs or declines.'
    }
  ],

  toolsTitle: 'It connects the stack Ontario electrical contractors actually run.',
  toolsLead:
    'Most Ontario electrical contractors are on a mix of dispatch software, accounting, and the ESA portal. We connect them.',
  toolGroups: [
    {
      label: 'Dispatch and field service',
      items: 'Jobber, ServiceTitan, FieldEdge, Housecall Pro, Method:CRM, Workiz.'
    },
    {
      label: 'Accounting and payroll',
      items: 'QuickBooks Online, QuickBooks Desktop, Sage 50, Xero. Payroll integrations through your existing provider.'
    },
    {
      label: 'Compliance and regulatory',
      items:
        'ESA notification portal (automated submission), Ontario MOL safety documentation, AuditSoft for COR-stream contractors.'
    },
    {
      label: 'Quoting and estimating',
      items: 'McCormick Estimating, Accubid, ConEst, Excel-based quoting templates connected via structured intake.'
    }
  ],

  localContextTitle: 'Built for Ontario electrical reality.',
  localContextParagraphs: [
    'Electrical work in Ontario is regulated by the Electrical Safety Authority. Every job that requires a permit also requires a notification, and the ESA portal is the choke point. Most contractors handle the notification by hand because the legacy submission process was never built for automation. We connect dispatch tools to the portal so the notification is filed automatically against the right job, with audit-ready documentation.',
    'On the apprentice side, Ontario\'s journeyperson-to-apprentice ratio rules require careful supervision tracking. Most shops handle this on paper or in a spreadsheet that nobody updates in real time. The system we build captures hours from the field, applies the ratio rules automatically, and flags when a crew is out of compliance before the inspector finds it.',
    'Quote follow-up matters more in electrical than in HVAC because the cycles are longer and the comparison shopping is more thorough. Permits, EV charger installs, panel upgrades, and basement renovations all sit in quote queues for weeks. A structured follow-up cadence on those quotes is one of the highest-ROI automations we build for the industry.'
  ],

  typicalEngagementTitle: 'A typical Ontario electrical engagement.',
  typicalEngagement:
    'Two-week diagnostic. We sit with the office manager, the project manager, and the owner. We pull two months of dispatch data with permission, look at how ESA notifications and permits are handled, and review the quoting queue. The diagnostic prioritizes by ROI: ESA automation, job-cost visibility, and quote follow-up are the three that pay back fastest. Most clients build them in that order over a ninety-day window. The audit fee is credited toward implementation.',

  featuredServicesTitle: 'Services Ontario electrical contractors most often build.',
  featuredServices: [
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
    { label: 'Custom AI Workers', href: '/services/custom-ai-workers' },
    { label: 'AI Implementation', href: '/services/ai-implementation' }
  ],

  faqTitle: 'Electrical contractor questions.',
  faq: [
    {
      question: 'Can you actually automate ESA notifications?',
      answer:
        'Yes. The ESA portal accepts structured submissions with the right authentication. We build a connector that pulls the relevant data from your dispatch tool, formats the submission per ESA requirements, files it, and stores the confirmation against the job record. Your office manager stops doing it by hand.'
    },
    {
      question: 'What about apprentice hour tracking and the journeyperson ratio?',
      answer:
        'Built into the field-time-capture workflow. Hours flow from the apprentice\'s phone or tablet to your payroll system, with the journeyperson ratio applied automatically. The system flags ratio violations before they happen, not after the inspector shows up.'
    },
    {
      question: 'Will it work with our existing accounting setup?',
      answer:
        'In almost every case, yes. We support QuickBooks Online, QuickBooks Desktop, Xero, and Sage 50. We confirm the specific connection during the fit check before you sign. If we cannot connect cleanly, we say so.'
    },
    {
      question: 'How long until the job-cost dashboard is live?',
      answer:
        'Four to six weeks from contract signature, depending on the cleanliness of your existing data. The biggest variable is whether your job records have consistent budget and category fields. If they do, four weeks. If they need cleanup first, six.'
    },
    {
      question: 'Do you handle the safety documentation side?',
      answer:
        'Yes. Hazard assessments, toolbox talks, and incident reports can be generated against your existing OHSMS template and filed against the right job. For COR-stream contractors, we connect to AuditSoft. The safety manager still reviews everything before it goes anywhere.'
    },
    {
      question: 'Is this only for residential or also commercial and ICI?',
      answer:
        'Both. Residential electrical follows a faster cycle, more inbound-driven. Commercial and ICI work is longer cycle, project-driven, and the bid response and progress billing flows are different. We build the right shape for your mix.'
    }
  ],

  relatedIndustriesTitle: 'Other Ontario contractor verticals.',
  relatedIndustries: [
    { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
    { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
    { label: 'Field Services', href: '/industries/field-services' },
    { label: 'COR Pathway (sister property)', href: '/industries/cor-pathway' }
  ],

  ctaTitle: 'Stop rebuilding the spreadsheet every Monday.',
  ctaBody:
    'The audit identifies the highest-ROI integration for your specific business. For most Ontario electrical contractors, that is ESA notifications or job-cost visibility.'
};

export default function ElectricalPage() {
  return (
    <>
      <BreadcrumbSchema
        id="industry-electrical-breadcrumbs"
        items={buildIndustryBreadcrumbs('Electrical Contractors', 'electrical')}
      />
      <IndustryPage data={data} />
    </>
  );
}
