import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';
import { BreadcrumbSchema, buildIndustryBreadcrumbs } from '@/components/ui/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'AI Automation for Roofing and ICI Contractors in Ontario | BitDepth AI',
  description:
    'Practical AI and automation for roofing and ICI construction firms, including COR documentation, safety paperwork, and field-to-office workflows.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/roofing-ici-construction' }
};

const data: IndustryPageData = {
  slug: 'roofing-ici-construction',
  breadcrumbLabel: 'Roofing and ICI Construction',
  eyebrow: 'Compliance-heavy verticals',
  heroTitle: 'AI for roofing and ICI. Stop doing the compliance binder by hand on weekends.',
  heroLead:
    'Roofing and ICI construction firms in Ontario operate under more compliance overhead than any other trade. COR audits, JHSC documentation, AuditSoft questionnaires, sub-contractor pre-qualification, and bid responses all compete for the same office hours. Automating the documentation work is where the highest ROI lives.',
  heroImageSrc: '/images/hero-industry-roofing-construction.webp',
  heroImageAlt: 'Roofing crew working on a commercial flat roof in Ontario',

  problemTitle: 'The owner is the compliance officer, the estimator, and the dispatcher.',
  problemParagraphs: [
    'Most Ontario roofing and ICI firms under fifty staff run on the owner doing three jobs at once. The estimator side gets the daylight hours. The compliance side gets weekends and evenings. The dispatcher side gets whatever time is left between calls.',
    'COR documentation, JHSC minutes, training records, incident reports, and AuditSoft questionnaires all need to be in order, accurate, and current. They usually are not. They are usually almost-current, mostly accurate, and partially organized, which is exactly the position that fails at the worst possible moment when the audit shows up.',
    'Sub-contractor pre-qualification is the same shape. Every quarter the office chases the same fifty subs for the same five documents. Insurance certificates, WSIB clearance, training records, equipment certificates. Half come back late. The other half come back wrong. The office manager files them anyway because the alternative is rejecting a sub mid-project.'
  ],

  lossEyebrow: 'What we usually find',
  lossTitle: 'Where the compliance hours go.',
  losses: [
    'Owner is doing safety paperwork on weekends to stay compliant.',
    'JHSC minutes, training records, and incident reports live in three different binders and one shared folder.',
    'Sub-contractor pre-qualification is a manual email chase every quarter.',
    'AuditSoft questionnaires take three days to complete every time.',
    'Bid responses come together in the last 48 hours before the deadline.',
    'Storm-mode dispatch on residential roofing is run by ear, not by script.'
  ],

  solutionsTitle: 'What we typically build for roofing and ICI contractors.',
  solutions: [
    {
      title: 'Compliance documentation hub',
      description:
        'A single pane of glass for JHSC minutes, training records, incident reports, and certificates. Pulls from the systems you already use so the binder rebuilding stops. Audit-ready when the auditor shows up.'
    },
    {
      title: 'Sub-contractor pre-qualification automation',
      description:
        'Quarterly pre-qual chases handled automatically. Sub-contractors submit through a portal, documents are validated, expirations are tracked, and the office stops sending the same email every quarter.'
    },
    {
      title: 'AuditSoft pre-population from existing data',
      description:
        'Three-day questionnaires turn into a few hours of review. Answers come from your operational data instead of being typed in from scratch every time.'
    },
    {
      title: 'Bid response automation triggered by procurement portal events',
      description:
        'Procurement portal posts a tender that fits your scope and certification, and the system kicks off the response workflow before a human has logged in. The office wakes up to a draft response, not a deadline.'
    },
    {
      title: 'Storm-mode dispatch script for residential roofing',
      description:
        'When inbound calls spike during a weather event, the system switches to a containment-first script that prioritizes tarps and water-stop work, with insurance-claim flagging built in.'
    },
    {
      title: 'Insurance work tagging and estimator routing',
      description:
        'When the customer mentions an insurance claim, the lead is tagged for the estimator queue, not the dispatcher queue. Different documentation, different handoff, different cycle time.'
    }
  ],

  toolsTitle: 'It connects the roofing and ICI stack.',
  toolsLead:
    'Roofing and ICI runs on a wider tool spread than residential trades. We connect the operational stack to the compliance stack.',
  toolGroups: [
    {
      label: 'Operational and CRM',
      items:
        'Jobber, ServiceTitan, JobNimbus, AccuLynx, Buildertrend, Procore, Method:CRM, HubSpot.'
    },
    {
      label: 'Compliance and safety',
      items:
        'AuditSoft, COR-stream documentation systems, your existing OHSMS templates, internal SOP libraries, and Ontario MOL compliance tracking.'
    },
    {
      label: 'Procurement and bidding',
      items:
        'MERX, Biddingo, Bonfire, Ontario Tenders Portal, and any portal you already monitor for tender opportunities.'
    },
    {
      label: 'Accounting',
      items: 'QuickBooks Online, QuickBooks Desktop, Sage 50, Sage 300 Construction, Xero.'
    }
  ],

  localContextTitle: 'Built for Ontario compliance reality.',
  localContextParagraphs: [
    'Ontario roofing and ICI work sits inside a stack of overlapping regulators: the Ministry of Labour, the WSIB, the Infrastructure Health and Safety Association, COR-stream certification bodies, and any GC or owner with their own pre-qual requirements. The documentation overhead is non-negotiable. The audits are not optional. The cost of falling behind is rejection from the contractor list, lost tenders, and in the worst cases, work stoppages.',
    'The COR pathway specifically requires demonstrable safety management system performance. Most contractors going through COR for the first time discover that the documentation work is more substantial than the operational changes. The internal audit alone can take a small contractor two to four weeks of office time per cycle.',
    'BitDepth has a sister property focused on COR certification specifically. If COR-stream certification is the immediate need, the COR Pathway page handles that handoff. If the operational systems around the certification are the bottleneck, this is the right page.'
  ],

  typicalEngagementTitle: 'A typical roofing and ICI engagement.',
  typicalEngagement:
    'Two-week diagnostic. We look at the compliance documentation cycle, the sub-contractor pre-qualification cadence, and the bid response timeline. We sit with the owner, the safety lead, and the project administrator. The diagnostic prioritizes by ROI: usually compliance documentation first because the time savings are immediate, then sub-contractor pre-qualification, then bid response. Most clients build them in that order over a ninety-day window. The audit fee is credited toward implementation.',

  featuredServicesTitle: 'Services roofing and ICI contractors most often build.',
  featuredServices: [
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
    { label: 'Custom AI Workers', href: '/services/custom-ai-workers' },
    { label: 'AI Implementation', href: '/services/ai-implementation' }
  ],

  faqTitle: 'Roofing and ICI questions.',
  faq: [
    {
      question: 'Does this replace my safety officer?',
      answer:
        'No. The safety officer still owns the system. We replace the manual documentation work that consumes their week, not the judgment work that requires their license and experience. The safety officer reviews and signs off; the system handles the file management, the expiration tracking, and the audit-ready packaging.'
    },
    {
      question: 'Can you actually pre-populate AuditSoft?',
      answer:
        'Yes, with caveats. AuditSoft questionnaires draw from your operational data: training records, incident logs, JHSC minutes, equipment certificates. We connect to where that data already lives and pre-populate the answers that can be sourced. The questions that require judgment go to the safety officer for review. The result is usually a three-day questionnaire turning into a few hours of review.'
    },
    {
      question: 'What about COR certification specifically?',
      answer:
        'COR is its own pathway. BitDepth has a sister property, COR Pathway, focused on getting Ontario contractors COR-certified. If you are pre-COR or in active certification, that is the right entry point. If you are already COR-certified and the operational systems around the certification are the bottleneck, this page is where you start.'
    },
    {
      question: 'Will it work with Procore or Buildertrend?',
      answer:
        'Yes. Both have stable APIs and we have built against them. Specific connections depend on your license tier; we confirm during the fit check. For Procore especially, we have built compliance-document-flow automations and sub-contractor pre-qualification connectors.'
    },
    {
      question: 'How does the bid-response automation know which tenders to flag?',
      answer:
        'Configured to your scope, your certifications, your service area, and your typical project size range. We start with rules you specify, then learn from your win-loss data over time. The system flags fits, drafts the response framework using prior winning bids, and routes to your estimator for review.'
    },
    {
      question: 'What about residential roofing storm response?',
      answer:
        'Storm response is its own configuration. When inbound calls spike during a weather event, the system switches to a containment-first script and routes by your dispatch logic. Insurance-claim work gets flagged separately because the documentation cycle is different. We build the storm-mode toggle as part of the missed-call recovery layer.'
    }
  ],

  relatedIndustriesTitle: 'Other Ontario contractor verticals.',
  relatedIndustries: [
    { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
    { label: 'Electrical Contractors', href: '/industries/electrical' },
    { label: 'Field Services', href: '/industries/field-services' },
    { label: 'COR Pathway (sister property)', href: '/industries/cor-pathway' }
  ],

  ctaTitle: 'Get the compliance hours back.',
  ctaBody:
    'The audit identifies the highest-ROI fix for your specific business. For most roofing and ICI contractors, that is the compliance documentation hub.'
};

export default function RoofingIciConstructionPage() {
  return (
    <>
      <BreadcrumbSchema
        id="industry-roofing-ici-breadcrumbs"
        items={buildIndustryBreadcrumbs('Roofing and ICI Construction', 'roofing-ici-construction')}
      />
      <IndustryPage data={data} />
    </>
  );
}
