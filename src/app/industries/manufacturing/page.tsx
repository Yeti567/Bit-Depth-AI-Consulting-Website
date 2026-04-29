import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI Consulting for Manufacturing Companies | Bit Depth AI',
  description:
    'Phased predictive maintenance, smarter scheduling, and quality control automation for Canadian manufacturers. Built around what you actually have, not what is ideal.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/manufacturing' },
  openGraph: {
    title: 'AI Consulting for Manufacturing Companies | Bit Depth AI',
    description:
      'Phased predictive maintenance, smarter scheduling, and quality control automation for Canadian manufacturers.',
    url: 'https://bitdepthaiconsulting.com/industries/manufacturing',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian manufacturers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Manufacturing Companies | Bit Depth AI',
    description:
      'Phased predictive maintenance, smarter scheduling, and quality control automation for Canadian manufacturers.',
    images: ['/images/og-industries.jpg']
  }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'Manufacturing',
  eyebrow: 'Manufacturing',
  heroTitle: "You can't put sensors on everything. But you can build a smarter plan around what you have.",
  heroLead:
    "Manufacturing AI doesn't have to be an all-or-nothing transformation. The smartest companies start where the data already exists and build from there.",
  heroImageSrc: '/images/Modern CNC manufacturing facility in action.webp',
  heroImageAlt:
    'Worker in safety gear operating a CNC machine in a modern Canadian manufacturing facility',

  problemTitle: 'Predictive maintenance sounds great. Not every machine is worth instrumenting.',
  problemParagraphs: [
    'There is a version of manufacturing AI that consultants love to sell: sensors on everything, real-time dashboards, fully automated production lines. That version costs a fortune and is irrelevant to most manufacturers outside the largest enterprises.',
    'The practical version looks different. You identify which equipment is new enough or critical enough to justify monitoring. You build predictive maintenance into those assets first. As older equipment gets replaced, you bring each new addition online with the right infrastructure from day one. Over time, your operation modernizes without a single massive disruption.',
    "In the meantime, there are almost always scheduling, inventory, and quality control opportunities that don't require any new hardware at all, just better use of the data you already have."
  ],
  problemImageSrc: '/images/Technician installing sensor in industrial facility.webp',
  problemImageAlt:
    'Maintenance technician attaching a sensor to industrial equipment while reviewing a maintenance dashboard on a tablet',

  lossEyebrow: 'Output leaks',
  lossTitle: 'Where manufacturing companies lose time and output.',
  losses: [
    'Unplanned equipment downtime on assets with no condition monitoring',
    'Production scheduling done manually without visibility into downstream bottlenecks',
    'Inventory levels managed by intuition rather than data',
    'Quality control checks that catch problems after production instead of during',
    'Maintenance scheduled by calendar instead of by actual equipment condition',
    'Reporting that depends on someone compiling data from multiple systems by hand'
  ],

  solutionsTitle: 'What AI actually fixes in a manufacturing business.',
  solutions: [
    {
      title: 'Phased predictive maintenance',
      description:
        'Start with your newest and most critical equipment. Build in condition monitoring and failure prediction where it makes economic sense. Create a roadmap for expanding coverage as equipment is replaced over time.'
    },
    {
      title: 'Production scheduling optimization',
      description:
        'AI-assisted scheduling that accounts for equipment availability, material supply, order deadlines, and labour, reducing bottlenecks and improving throughput without adding headcount.'
    },
    {
      title: 'Inventory and supply chain visibility',
      description:
        'Connect purchasing, inventory, and production data so you are not over-ordering, under-ordering, or discovering shortages when the line is already running.'
    },
    {
      title: 'Quality control automation',
      description:
        'Automated inspection and defect detection at key production stages, catching problems earlier and reducing the cost of rework and waste.'
    }
  ],

  ctaTitle: "You don't have to modernize everything at once.",
  ctaBody:
    'A discovery audit will show you where AI creates real value in your operation, given what you actually have, not what a textbook says you should have. Book a call and we will give you an honest assessment.'
};

export default function ManufacturingPage() {
  return <IndustryPage data={data} />;
}
