import type { Metadata } from 'next';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { buildServiceSchema } from '@/lib/schema';
import {
  ServiceHero,
  ProblemBlock,
  ListBlock,
  ProcessBlock,
  PricingBlock,
  FinalCTA,
  type ListItem,
  type ProcessStep
} from '@/components/ui/service-page-blocks';

export const metadata: Metadata = {
  title: 'Custom AI Workers for Canadian SMBs | Bit Depth AI',
  description:
    'Purpose-built AI agents that perform defined job functions inside your business: customer service, document processing, sales qualification, and finance reconciliation.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/ai-workers' },
  openGraph: {
    title: 'Custom AI Workers for Canadian SMBs | Bit Depth AI',
    description:
      'Purpose-built AI agents that perform defined job functions inside your business: customer service, document processing, sales qualification, and finance reconciliation.',
    url: 'https://bitdepthaiconsulting.com/services/ai-workers',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom AI workers for Canadian SMBs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'Custom AI Workers for Canadian SMBs | Bit Depth AI',
    description:
      'Purpose-built AI agents that perform defined job functions inside your business.',
    images: ['/images/og-services.jpg']
  }
};

const aiWorkerExamples: ListItem[] = [
  {
    title: 'Operations Assistant',
    description:
      'Answers internal questions from staff, searches your SOPs and policy documents, surfaces relevant procedures, and helps field teams find the information they need without calling the office. Best for businesses with large field teams, multiple locations, or complex internal procedures.'
  },
  {
    title: 'Customer Service Agent',
    description:
      'Handles incoming customer inquiries around the clock, answers common questions, books appointments, collects information, and escalates to a human only when genuinely needed. Best for field service businesses, professional services firms, and any business where the phone not being answered means a lost job.'
  },
  {
    title: 'Sales Intelligence Agent',
    description:
      'Qualifies incoming leads, enriches CRM records with relevant information, drafts personalized follow-up emails, and ensures no lead falls through the cracks. Best for businesses with high lead volume where sales staff spend too much time on qualification and data entry.'
  },
  {
    title: 'Document Processing Agent',
    description:
      'Receives incoming documents, extracts the relevant information, classifies them by type, and routes them to the right person or system automatically. Best for businesses that process high volumes of invoices, field tickets, contracts, or compliance documents.'
  },
  {
    title: 'Finance Reconciliation Agent',
    description:
      'Matches invoices to purchase orders, flags discrepancies and exceptions, routes items for approval, and maintains a clean audit trail without manual review of every transaction. Best for construction, oil and gas services, transportation, and any business managing high volumes of subcontractor invoices.'
  }
];

const processSteps: ProcessStep[] = [
  {
    title: 'Define the role',
    description:
      'We start by understanding exactly what job function the AI Worker needs to perform: what inputs it receives, what decisions it needs to make, what outputs it produces, and what edge cases require human escalation.'
  },
  {
    title: 'Audit first',
    description:
      'If you have not completed an AI Opportunity Audit, we recommend starting there. The audit ensures we are building the right AI Worker for the right problem, and that your data and systems are ready to support it.'
  },
  {
    title: 'Build and test',
    description:
      'We build the AI Worker around your actual business data, your actual processes, and your actual systems. We test extensively before deployment to make sure it performs reliably in real conditions.'
  },
  {
    title: 'Deploy and improve',
    description:
      'Once deployed, we monitor performance and refine the AI Worker over time. As your business evolves and the technology improves, we update the worker to keep it performing at its best.'
  }
];

export default function AIWorkersPage() {
  return (
    <PageShell>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'Custom AI Workers for Canadian SMBs',
            'Purpose-built AI agents that perform defined job functions inside your business: customer service, document processing, sales qualification, and finance reconciliation.',
            'https://bitdepthaiconsulting.com/services/ai-workers',
            'Custom AI Workers'
          )
        )}
      </Script>

      <ServiceHero
        eyebrow="Custom AI Workers"
        breadcrumb="Custom AI Workers"
        title="AI that does a job, not just a task."
        lead="Custom AI Workers are purpose-built AI agents that perform a defined job function inside your business on an ongoing basis. Not a chatbot. Not a generic tool. A digital worker built specifically for how your business operates."
        primaryHref="/ai-audit"
        primaryLabel="Book an AI Audit"
        secondaryHref="#pricing"
        secondaryLabel="See pricing"
        imageSrc="/images/ai-workers-hero.webp.webp"
        imageAlt="Professional working alongside an AI assistant interface processing business tasks on a second monitor"
        reassurance="Build from $10,000. Audit fee credited dollar-for-dollar against your build."
      />

      <ProblemBlock
        surface="stone"
        eyebrow="The difference"
        title="Some functions need more than a one-time automation. They need someone to own them."
        paragraphs={[
          'Workflow automation handles a process. An AI Worker handles a role. The difference matters. An automation fires when triggered and completes a defined task. An AI Worker operates continuously: monitoring, responding, processing, and acting within its defined function without needing to be triggered every time.',
          'Think about the functions in your business that currently require a person to be available, attentive, and consistent. Answering customer inquiries. Qualifying incoming leads. Processing documents as they arrive. Reconciling invoices against purchase orders. These are not one-time tasks. They are ongoing job functions.',
          'They do not always need a human to do them. They need something reliable that shows up every day and does the work correctly. Businesses that are waiting for the technology to prove itself are already falling behind the ones that are quietly using it to get more done with the same team.'
        ]}
        imageSrc="/images/ai-workers-supporting.webp.webp"
        imageAlt="Dashboard showing multiple AI agent status panels for different business functions running simultaneously"
      />

      <ListBlock
        surface="cream"
        eyebrow="Examples"
        title="Five workers we commonly build."
        lead="Each AI Worker is built around a specific job function. These are the most common ones."
        items={aiWorkerExamples}
        columns={2}
      />

      <ProcessBlock
        surface="stone"
        eyebrow="How it works"
        title="A four-step build."
        steps={processSteps}
      />

      <div id="pricing">
        <PricingBlock
          surface="cream"
          eyebrow="Pricing"
          title="Build, then maintain."
          lead="AI Workers are custom built for each client. Pricing depends on the complexity of the role, the number of systems it connects to, and the volume of work it handles."
          rows={[
            {
              label: 'Build',
              value: 'From $10,000',
              description: 'One-time fee for design, development, testing, and deployment.'
            },
            {
              label: 'Monthly retainer',
              value: '$1,500 – $3,000 / mo',
              description:
                'Ongoing monitoring, maintenance, performance tuning, and updates as your needs evolve.'
            }
          ]}
          note="If you complete an AI Opportunity Audit first, the full audit fee is credited against your build, dollar for dollar."
          ctaHref="/ai-audit"
          ctaLabel="Book an AI Audit"
        />
      </div>

      <FinalCTA
        eyebrow="Where to start"
        title="Not sure which AI Worker your business needs?"
        body="Start with the audit. We will identify exactly which job functions in your business are the best candidates for an AI Worker, and give you honest ROI estimates before you commit to building anything."
        primaryHref="/ai-audit"
        primaryLabel="Book an AI Audit"
        secondaryHref="/contact"
        secondaryLabel="Book a discovery call"
      />
    </PageShell>
  );
}
