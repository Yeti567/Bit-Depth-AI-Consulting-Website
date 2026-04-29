import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI Consulting for Oil & Gas Services Companies | Bit Depth AI',
  description:
    'Connect siloed field data, get real-time crew profitability, automate field tickets and compliance documentation. Built for Canadian oil and gas services operators.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/oil-and-gas' },
  openGraph: {
    title: 'AI Consulting for Oil & Gas Services Companies | Bit Depth AI',
    description:
      'Connect siloed field data, get real-time crew profitability, and automate field tickets and compliance documentation.',
    url: 'https://bitdepthaiconsulting.com/industries/oil-and-gas',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian oil and gas services companies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Oil & Gas Services Companies | Bit Depth AI',
    description:
      'Connect siloed field data, get real-time crew profitability, and automate field tickets and compliance documentation.',
    images: ['/images/og-industries.jpg']
  }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'Oil & Gas Services',
  eyebrow: 'Oil & Gas Services',
  heroTitle:
    "Your systems don't talk to each other. Your data sits in silos. Head office is always last to know.",
  heroLead:
    'Oil and gas services companies are running some of the most complex operations in the country on systems that were never designed to work together.',
  heroImageSrc: "/images/Industry's oil and gas hero image.webp",
  heroImageAlt:
    'Wide shot of an oil field services operation at golden hour with pump jacks and service trucks',

  problemTitle: 'Every field runs its own system. None of them talk to each other.',
  problemParagraphs: [
    'This is the single biggest operational problem in oil and gas services. Each field has its own data, its own system, and its own people who understand it. That knowledge stays local. Head office gets reports when someone has time to write them, which means decisions get made on information that is days or weeks old.',
    "Meanwhile, crews are running over budget, equipment is failing without warning, subcontractors are invoicing for work that hasn't been verified, and compliance documentation is being done by hand.",
    'The first job in an oil and gas services engagement is almost always the same: figure out how to get the data talking to each other. Once you have a single source of truth, everything else becomes possible.'
  ],
  problemImageSrc: '/images/Field operations in action.webp',
  problemImageAlt:
    'Oil field operations manager reviewing a field operations dashboard on a laptop in a site trailer',

  lossEyebrow: 'Where the money goes',
  lossTitle: 'Where oil and gas services companies lose money and time.',
  losses: [
    'Field data that never reaches head office in time to act on',
    'Multiple crews with no real-time visibility into budget versus actual costs',
    'Subcontractor invoices approved without verification against field records',
    'Equipment failures that could have been predicted with basic monitoring',
    'Compliance and safety documentation done manually across multiple sites',
    'Field ticket processing that takes days instead of hours'
  ],

  solutionsTitle: 'What AI actually fixes in an oil and gas services business.',
  solutions: [
    {
      title: 'Data integration and centralization',
      description:
        'Connect your field systems so data flows to where it needs to go automatically. Head office gets real-time visibility. Field managers keep their autonomy. Everyone works from the same information.'
    },
    {
      title: 'Crew-level profit visibility',
      description:
        'Compare estimated budgets against actual field costs at the crew level in real time. Know which operations are profitable and which are trending the wrong direction while you can still do something about it.'
    },
    {
      title: 'Field ticket and invoice automation',
      description:
        'Field tickets processed, verified against scope, and routed for approval automatically, so invoicing happens in hours instead of days and discrepancies get flagged before they become disputes.'
    },
    {
      title: 'Predictive maintenance planning',
      description:
        'For newer equipment and additions, build in condition monitoring and failure prediction where it makes economic sense. For older equipment where sensors are not practical, develop a replacement roadmap that brings more assets online over time.'
    },
    {
      title: 'Safety and compliance documentation',
      description:
        'Automated safety documentation, incident reporting, and regulatory compliance across multiple sites. Consistent, auditable, and not dependent on someone remembering to fill out a form.'
    }
  ],

  ctaTitle: "If your fields aren't talking to each other, you're flying blind.",
  ctaBody:
    'A discovery audit will map your current systems, identify where the data gaps are, and give you a prioritized plan for connecting them. Book a call and we will tell you honestly what we think we can find.'
};

export default function OilAndGasPage() {
  return <IndustryPage data={data} />;
}
