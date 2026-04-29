import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI Consulting for Trades & Construction Companies | Bit Depth AI',
  description:
    'Stop finding out which crews lost money at year end. Real-time job costing, automated documents, and safety compliance built for Canadian construction companies.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/construction' },
  openGraph: {
    title: 'AI Consulting for Trades & Construction Companies | Bit Depth AI',
    description:
      'Stop finding out which crews lost money at year end. Real-time job costing, automated documents, and safety compliance built for Canadian construction companies.',
    url: 'https://bitdepthaiconsulting.com/industries/construction',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian construction and trades companies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Trades & Construction Companies | Bit Depth AI',
    description:
      'Stop finding out which crews lost money at year end. Real-time job costing, automated documents, and safety compliance for Canadian construction companies.',
    images: ['/images/og-industries.jpg']
  }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'Trades & Construction',
  eyebrow: 'Trades & Construction',
  heroTitle: "You won't know which crews are losing money until it's too late.",
  heroLead:
    'Construction companies run multiple crews, multiple projects, and multiple budgets at once. Without real-time visibility, profit leaks go undetected for months.',
  heroImageSrc: "/images/Industry's Construction Hero Image.webp",
  heroImageAlt: 'Aerial view of an active commercial construction site at sunrise',

  problemTitle: 'The job looked fine on paper. Then the year ended.',
  problemParagraphs: [
    "Most construction companies do a solid job estimating. The problem isn't the estimate, it's what happens between the estimate and the final accounting. Labour overruns, material waste, subcontractor delays, equipment downtime: these things add up quietly across multiple crews and multiple sites.",
    "By the time your accountant tells you a project lost money, it's ancient history. You can't fix what already happened. AI changes that by connecting your estimated budgets to your actual field costs in real time.",
    'When a crew starts trending over budget, you know about it while you can still do something. You stop finding out at year end. You start managing as you go. This is not complicated technology. It is the difference between running your business on information and running it on hope.'
  ],
  problemImageSrc: '/images/Industries Construction Supporting Image.webp',
  problemImageAlt:
    'Construction site supervisor reviewing budget dashboard on a tablet at an active job site',

  lossEyebrow: 'Profit leaks',
  lossTitle: 'Where construction companies throw money off a cliff.',
  losses: [
    'Crews running over budget with no early warning system',
    "Manual timesheets that don't connect to job costing",
    "Material orders that don't reconcile against project budgets until it's too late",
    'Subcontractor invoices approved without checking against scope',
    "Estimating that doesn't feed back from actual job performance",
    'Safety and compliance documentation done manually and inconsistently'
  ],

  solutionsTitle: 'What AI actually fixes in a construction business.',
  solutions: [
    {
      title: 'Real-time job costing visibility',
      description:
        "Connect your field data to your estimated budgets so you can see which projects and crews are on track and which need attention while there's still time to act."
    },
    {
      title: 'Automated document processing',
      description:
        "Subcontractor invoices, field reports, purchase orders, and safety documents processed, categorized, and routed automatically instead of sitting in someone's inbox."
    },
    {
      title: 'Safety and compliance automation',
      description:
        "Safety documentation, incident reports, toolbox talks, and COR preparation built into your workflow so compliance isn't a separate job someone has to remember to do."
    },
    {
      title: 'Estimating feedback loops',
      description:
        'Feed actual job performance data back into your estimating process so your next bid is built on what jobs actually cost, not what you hoped they would cost.'
    }
  ],

  ctaTitle: 'Find out where your business is leaking profit.',
  ctaBody:
    'The audit starts at $5,000. If it finds one crew that was trending $30,000 over budget and you catch it three months early, the math is obvious. Book a discovery call and we will tell you honestly what we think we can find.'
};

export default function ConstructionPage() {
  return <IndustryPage data={data} />;
}
