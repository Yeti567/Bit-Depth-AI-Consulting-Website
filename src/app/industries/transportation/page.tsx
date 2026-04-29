import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI Consulting for Transportation & Logistics Companies | Bit Depth AI',
  description:
    'Dispatch optimization, real-time cost tracking, automated client communication, and compliance documentation for Canadian trucking and logistics operators.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/transportation' },
  openGraph: {
    title: 'AI Consulting for Transportation & Logistics Companies | Bit Depth AI',
    description:
      'Dispatch optimization, real-time cost tracking, automated client communication, and compliance documentation for Canadian trucking and logistics operators.',
    url: 'https://bitdepthaiconsulting.com/industries/transportation',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian transportation and logistics companies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Transportation & Logistics Companies | Bit Depth AI',
    description:
      'Dispatch optimization, real-time cost tracking, automated client communication, and compliance documentation for trucking and logistics.',
    images: ['/images/og-industries.jpg']
  }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'Transportation & Logistics',
  eyebrow: 'Transportation & Logistics',
  heroTitle:
    "Driver shortages, dispatch errors, fuel costs. AI won't solve all of it. It will make all of it more manageable.",
  heroLead:
    'Trucking is one of the most operationally complex businesses there is. The margins are tight and the pressure never stops.',
  heroImageSrc: '/images/Industry Trucking Hero Image.webp',
  heroImageAlt:
    'Fleet of semi-trucks parked at a Canadian logistics yard at dusk with mountains in the background',

  problemTitle:
    "The problem isn't that trucking is hard. It's that too much of the hard part is manual.",
  problemParagraphs: [
    "Finding qualified drivers is a constant battle. Dispatchers are managing too many moving pieces and making mistakes under pressure. Clients want real-time updates and get frustrated when they don't get them.",
    "Fuel costs and route inefficiencies don't show up until the accountant runs the numbers months later, and by then there's nothing you can do about it.",
    "The businesses that are pulling ahead in this industry are not doing it by working harder. They are doing it by automating the parts that don't need a human and freeing up their people to focus on the parts that do."
  ],
  problemImageSrc: '/images/Logistics dispatcher at a busy desk.webp',
  problemImageAlt:
    'Logistics dispatcher with a headset reviewing route maps and driver schedules across multiple screens',

  lossEyebrow: 'Where the money goes',
  lossTitle: 'Where transportation companies lose money they never see.',
  losses: [
    'Dispatch errors that cost time, fuel, and client relationships',
    "Fuel and route costs that aren't tracked against revenue until it's too late",
    'Driver scheduling gaps that lead to missed loads or overtime',
    'Client communication handled manually by staff who have other jobs to do',
    'Compliance paperwork done by hand and filed inconsistently',
    'No system for drivers to find scheduling or policy information without calling the office'
  ],

  solutionsTitle: 'What AI actually fixes in a transportation business.',
  solutions: [
    {
      title: 'Dispatch support and optimization',
      description:
        'AI-assisted dispatching that reduces errors, flags scheduling conflicts, and helps your dispatcher make better decisions faster, without replacing the human judgment that still matters.'
    },
    {
      title: 'Real-time cost tracking against revenue',
      description:
        "Connect fuel charges, driver wages, and route costs to your invoices in real time. Know whether a load made money before the accountant tells you three months later that it didn't."
    },
    {
      title: 'Client communication automation',
      description:
        'Automated status updates, delivery confirmations, and exception alerts, so your clients feel taken care of without your staff spending half their day on the phone.'
    },
    {
      title: 'Driver and employee self-service',
      description:
        'An internal chatbot where drivers and staff can check their schedule, find company policies, and get answers to common questions without calling the office. Fewer interruptions. Faster answers.'
    },
    {
      title: 'Compliance document automation',
      description:
        "Trip logs, inspection records, and regulatory paperwork processed and filed consistently so compliance doesn't depend on someone remembering to do it."
    }
  ],

  ctaTitle: 'If your margins are tight, profit leaks are expensive.',
  ctaBody:
    'A discovery audit will show you exactly where time and money are leaving your business quietly. Book a call and we will tell you honestly what we think we can find.'
};

export default function TransportationPage() {
  return <IndustryPage data={data} />;
}
