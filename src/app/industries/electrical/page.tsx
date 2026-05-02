import type { Metadata } from 'next';
import { IndustryPage, type IndustryPageData } from '@/components/ui/industry-page';

export const metadata: Metadata = {
  title: 'AI for Ontario Electrical Contractors | Bit Depth AI',
  description:
    'ESA notification automation, permit tracking, apprentice hour capture, and real-time job-cost dashboards for Ontario electrical contractors.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/industries/electrical' }
};

const data: IndustryPageData = {
  breadcrumbLabel: 'Electrical Contractors',
  eyebrow: 'Secondary vertical',
  heroTitle:
    'ESA notifications, permits, and apprentice hours should not live in three spreadsheets.',
  heroLead:
    'Most Ontario electrical contractors run on a mix of accounting software, dispatch software, and a stack of spreadsheets the office manager rebuilds every Monday. We connect the systems and replace the spreadsheets with automated workflows.',
  heroImageSrc: '/images/hero-industry-electrical.webp',
  heroImageAlt: 'Electrician in a hi-vis vest holding a clipboard at a residential job site',

  problemTitle: 'The office manager is doing the integration work by hand.',
  problemParagraphs: [
    'When ESA notifications get re-keyed from dispatch into the ESA portal, when permit submissions are tracked in a spreadsheet that nobody trusts, when apprentice hours are logged on paper and entered into payroll twice a month, the bottleneck is not the systems. The bottleneck is the manual handoff between them.',
    'Job-cost tracking is reactive. Overruns are discovered weeks after the fact, when the data finally makes it from the field into the books.'
  ],

  lossEyebrow: 'What we usually find',
  lossTitle: 'Where the spreadsheets pile up.',
  losses: [
    'ESA notifications get re-keyed by hand from the dispatch tool into the ESA portal.',
    'Permit submissions are tracked in a shared spreadsheet that nobody trusts.',
    'Apprentice hours are logged on paper and entered into payroll twice a month.',
    'Job-cost tracking is reactive, with overruns discovered weeks after the fact.'
  ],

  solutionsTitle: 'What we typically build.',
  solutions: [
    {
      title: 'ESA notification automation',
      description: 'Pulls from dispatch and submits to the ESA portal without re-keying.'
    },
    {
      title: 'Permit tracking dashboard',
      description: 'Real-time status across every active job, replacing the Monday spreadsheet rebuild.'
    },
    {
      title: 'Apprentice hour capture from the field',
      description: 'Hours flow directly to payroll with no double-entry and no paper timesheets.'
    },
    {
      title: 'Real-time job-cost dashboard',
      description:
        'Live view of every active job against its estimated margin, with budget alerts before overruns happen.'
    }
  ],

  ctaTitle: 'Stop rebuilding the spreadsheet every Monday.',
  ctaBody:
    'The audit identifies the highest-ROI integration for your specific business. For most Ontario electrical contractors, that is ESA notifications or job-cost visibility.'
};

export default function ElectricalPage() {
  return <IndustryPage data={data} />;
}
