import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';
import { BreadcrumbSchema, buildIndustryBreadcrumbs } from '@/components/ui/breadcrumb-schema';

export const metadata: Metadata = {
  title: 'AI for Law Firms, Accountants, and Brokerages | BitDepth AI',
  description:
    'Private intake automation, document drafting from precedents, trust-aware billing, and Clio, PCLaw, Karbon, and Dext integrations. Referral and inbound only.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/professional-services' }
};

const data: IndustryPageData = {
  slug: 'professional-services',
  breadcrumbLabel: 'Professional Services',
  eyebrow: 'Professional services',
  heroTitle: 'AI for Canadian law firms, accounting practices, and brokerages.',
  heroLead:
    'Private intake, document drafting, trust-aware billing, and the rest of the operational tooling that small and mid-sized professional services firms in Canada actually use. Referral and inbound only. We do not pitch this work.',
  heroImageSrc: '/images/hero-industry-professional-services.webp',
  heroImageAlt: 'Lawyer at a wooden desk with a laptop and document folder',

  problemTitle: 'You are paying associate hours for paralegal work.',
  problemParagraphs: [
    'Most small and mid-sized professional services firms in Canada are paying senior staff to do work that is structured, repeatable, and not the highest use of their licensed time. Associate-rate hours go into intake forms, conflict checks, document assembly from precedents, and the same trust-account reconciliation steps every month.',
    'The work is not getting done badly. The senior staff are competent. But the highest-margin work in any professional services firm is judgment work, and every hour spent on structured assembly is an hour not spent on judgment.',
    'The tooling problem is also real. Most firms have a practice management system that does some of this. Some firms have document automation tools. A few have started experimenting with AI drafting. The integration between them is the gap. The intake tool does not talk to the practice management tool, which does not talk to the trust accounting, which does not talk to the document automation. Your team becomes the integration.'
  ],

  lossEyebrow: 'What we usually find',
  lossTitle: 'Where senior hours leak.',
  losses: [
    'Intake forms processed manually instead of running structured conflict checks automatically.',
    'Documents drafted from scratch instead of pulled from your existing precedent library.',
    'Retainer reconciliation done by hand at month-end.',
    'Client communications inconsistent across files and matters.',
    'Practice management, trust accounting, and document automation all run separately.',
    'Referral handoff between practice areas is lost in email.'
  ],

  solutionsTitle: 'What we typically build for professional services firms.',
  solutions: [
    {
      title: 'Private client intake automation with conflict-checking',
      description:
        "Intake runs on Canadian-resident infrastructure. Conflict checks happen automatically against your matter database before the file is opened. Privilege boundaries respected throughout."
    },
    {
      title: 'Document drafting from precedents, with full audit trails',
      description:
        "Drafts pulled from your firm's own precedent library, with a full record of which clauses were sourced where. The associate reviews, edits, and signs off rather than drafting from scratch."
    },
    {
      title: 'Trust-accounting-aware billing workflows',
      description:
        'Trust-aware integrations that respect Law Society and provincial trust accounting rules. No more retainer reconciliation by hand. Full audit trail for the bookkeeper.'
    },
    {
      title: 'Practice management tool integrations',
      description:
        'Connectors for Clio, PCLaw, Karbon, Dext, and the rest of your existing stack. The systems start talking to each other so your staff stops being the integration.'
    },
    {
      title: 'Engagement letter and retainer workflow',
      description:
        'Engagement letters generated from a structured intake, retainers tracked from execution through trust deposit, and the file opened in the practice management system without human hand-keying.'
    },
    {
      title: 'Cross-practice referral routing',
      description:
        'When a tax matter surfaces inside an estate file, or a corporate matter surfaces inside a transactional file, the system flags it and routes to the right partner. Referrals stop disappearing in email.'
    }
  ],

  toolsTitle: 'It works with the tools small and mid-sized firms actually use.',
  toolsLead:
    'Professional services firms run on a tighter, more specialized stack than trades. We connect to the ones we have built against and tell you in the fit check whether your specific stack is a clean connection.',
  toolGroups: [
    {
      label: 'Practice management',
      items: 'Clio, PCLaw, Karbon, ProSuite, MyCase, CosmoLex, ConveyancingDocs.'
    },
    {
      label: 'Accounting and bookkeeping',
      items: 'QuickBooks Online, Xero, Dext, Sage 50, Sage Intacct.'
    },
    {
      label: 'Document automation and assembly',
      items:
        'Your existing precedent library, Word templates, Clio document automation, Mitratech, Lawcus, custom assembly through structured intake.'
    },
    {
      label: 'Communication and workflow',
      items:
        'Microsoft 365, Google Workspace, Outlook, Slack or Teams for internal handoff, client portal integrations.'
    }
  ],

  localContextTitle: 'Built for Canadian practice realities.',
  localContextParagraphs: [
    'Canadian professional services firms operate under specific regulatory requirements that US-built tools rarely handle correctly. Law Society trust accounting rules vary by province. The Federation of Law Societies has its own anti-money-laundering requirements that affect intake and verification. Quebec\'s Civil Code and Law 25 add data-handling requirements that Anglo provinces do not have. Federal money laundering reporting (FINTRAC) affects accounting practices in specific ways.',
    'BitDepth does not pitch professional services firms. The work we do here is referral-only and inbound-only because the trust calibration that makes a firm comfortable bringing AI into client-facing workflows is built person-to-person, not through a sales funnel. Most of our professional-services work comes through existing client referrals or relationships built before BitDepth existed.',
    'Practically: we build only on the parts of the practice you have already decided are appropriate for AI. The intake side and the document assembly side are where most firms start. Trust accounting integration follows once the privacy and audit-trail requirements have been worked out. We do not build anything that touches privileged communication without explicit firm-level approval and a documented data-handling agreement.'
  ],

  typicalEngagementTitle: 'A typical professional-services engagement.',
  typicalEngagement:
    'Engagement starts with a working session that includes the managing partner, the IT lead (if you have one), and the practice administrator. We review the existing tooling, identify the data-handling boundaries, and produce a written scope that respects those boundaries. The diagnostic typically prioritizes intake automation first because the ROI is the most defensible and the data-handling story is the easiest to validate. Document drafting follows once the precedent library is structured. Trust-accounting workflow comes last because the audit-trail requirements are the most stringent. The audit fee is credited toward implementation.',

  featuredServicesTitle: 'Services professional services firms most often build.',
  featuredServices: [
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
    { label: 'Custom AI Workers', href: '/services/custom-ai-workers' },
    { label: 'AI Implementation', href: '/services/ai-implementation' }
  ],

  faqTitle: 'Professional services questions.',
  faq: [
    {
      question: 'Are you a fit for a small law firm?',
      answer:
        'Sometimes. We do referral and inbound work for professional services firms in Canada and we do not pitch this market. If you are a small firm and you have already started thinking carefully about where AI fits and where it does not, we are probably a fit. If you are looking for a vendor to come in and tell you what AI to use, we are not.'
    },
    {
      question: 'How do you handle privilege and confidentiality?',
      answer:
        'We do not touch privileged communication without firm-level approval and a documented data-handling agreement that names the boundaries. The systems we build run on Canadian-hosted infrastructure with role-based access. We use enterprise-grade AI vendors with contractual terms that your data is not used to train public models. The full explanation lives on our Security and Data Handling page.'
    },
    {
      question: 'Will this work with Clio?',
      answer:
        'Yes. Clio has a stable API and we have built against it for intake, matter management, and time entry. Specific connections depend on your Clio license tier. We confirm during the fit check.'
    },
    {
      question: 'What about PCLaw or other legacy systems?',
      answer:
        'PCLaw is harder than Clio because the API surface is more limited. We have built workarounds with structured CSV exports and middleware. The fit check tells you whether the math works for your specific PCLaw setup or whether moving to a more modern system makes sense first.'
    },
    {
      question: 'Can you handle accounting practice work too?',
      answer:
        'Yes. Karbon, Dext, and QuickBooks-based accounting practices are a clean fit. Workflow automation around client onboarding, document collection, and engagement letter generation is the most common build.'
    },
    {
      question: 'How does this connect to the AI Opportunity Audit?',
      answer:
        'The audit is the entry point. For professional services, the audit emphasizes the privacy and data-handling boundaries first, then identifies which parts of the practice are appropriate for automation, then prioritizes by ROI. Most firms start with intake or document assembly because both have clear ROI and clean data-handling stories.'
    }
  ],

  relatedIndustriesTitle: 'Other Canadian verticals.',
  relatedIndustries: [
    { label: 'HVAC and Plumbing', href: '/industries/hvac-plumbing' },
    { label: 'Electrical Contractors', href: '/industries/electrical' },
    { label: 'Roofing and ICI Construction', href: '/industries/roofing-ici-construction' },
    { label: 'Field Services', href: '/industries/field-services' }
  ],

  ctaTitle: 'Senior staff doing work below their license.',
  ctaBody:
    'The audit identifies which structured work in your practice is a fit for automation and which is not. The fit check is referral-only.'
};

export default function ProfessionalServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        id="industry-professional-services-breadcrumbs"
        items={buildIndustryBreadcrumbs('Professional Services', 'professional-services')}
      />
      <IndustryPage data={data} />
    </>
  );
}
