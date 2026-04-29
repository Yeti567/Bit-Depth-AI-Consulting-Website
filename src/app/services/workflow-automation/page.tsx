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
  type ProcessStep,
  type PricingRow
} from '@/components/ui/service-page-blocks';

export const metadata: Metadata = {
  title: 'AI Workflow Automation for Canadian Businesses | Bit Depth AI',
  description:
    'Replace repetitive manual processes with reliable automated systems. Invoice processing, scheduling, reporting, customer service, and more. Starting at $5,000.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/workflow-automation' },
  openGraph: {
    title: 'AI Workflow Automation for Canadian Businesses | Bit Depth AI',
    description:
      'Replace repetitive manual processes with reliable automated systems. Invoice processing, scheduling, reporting, customer service, and more.',
    url: 'https://bitdepthaiconsulting.com/services/workflow-automation',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'AI workflow automation for Canadian businesses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Workflow Automation for Canadian Businesses | Bit Depth AI',
    description:
      'Replace repetitive manual processes with reliable automated systems.',
    images: ['/images/og-services.jpg']
  }
};

const automations: ListItem[] = [
  {
    title: 'Invoice processing and accounts payable',
    description:
      'Invoices received, matched to purchase orders, flagged for exceptions, and routed for approval automatically. No manual data entry, no missed payments, no approval bottlenecks sitting in an inbox.'
  },
  {
    title: 'Scheduling and dispatch',
    description:
      'Jobs assigned, crews scheduled, and dispatch notifications sent based on availability, location, and priority, without a dispatcher manually managing every change.'
  },
  {
    title: 'Customer service and inquiry response',
    description:
      'Common customer questions answered automatically around the clock. Inquiries triaged and routed to the right person. Appointment requests handled without staff involvement. Clients feel taken care of even when nobody is available.'
  },
  {
    title: 'Report generation',
    description:
      'Weekly and monthly reports built and delivered automatically from your live business data. No more pulling numbers from three different systems and formatting them by hand every time.'
  },
  {
    title: 'HR and onboarding documents',
    description:
      'New hire paperwork prepared, distributed, and tracked automatically. Onboarding checklists triggered the moment someone is added to the system. Nothing falls through the cracks.'
  },
  {
    title: 'Sales lead qualification and CRM updates',
    description:
      'New leads assessed, scored, and entered into your CRM automatically. Follow-up tasks created. Sales staff notified with the context they need to act, without anyone doing data entry.'
  },
  {
    title: 'Document routing and approvals',
    description:
      'Documents classified, routed to the right person, and tracked through the approval process automatically, with escalation triggers when something is overdue.'
  },
  {
    title: 'Client communication and follow-up',
    description:
      'Appointment reminders, status updates, follow-up sequences, and satisfaction check-ins sent automatically at the right time, without staff having to remember to do it.'
  }
];

const processSteps: ProcessStep[] = [
  {
    title: 'Audit first',
    description:
      'We never build automation without understanding your business first. The AI Opportunity Audit maps your processes, identifies the highest-value automation opportunities, and estimates the ROI of each one before we write a single line of code.'
  },
  {
    title: 'Build around what you have',
    description:
      'We do not ask you to replace your existing systems. We build automation that connects to the tools you already use, bridging the gaps and eliminating the manual steps between them.'
  },
  {
    title: 'Make sure it sticks',
    description:
      'Every automation comes with documentation and training so your team knows how it works and what to do if something goes wrong. We stay involved after deployment to make sure everything is running as expected.'
  }
];

const pricingRows: PricingRow[] = [
  {
    label: 'Starter',
    value: '$5,000 – $12,000',
    description:
      'Single automation or small suite. Ideal for businesses automating a first process or solving one specific operational bottleneck.'
  },
  {
    label: 'Standard suite',
    value: '$15,000 – $35,000',
    description:
      'Multiple connected automations across one or more departments. Ideal for businesses ready to systematically eliminate manual work.'
  },
  {
    label: 'Enterprise program',
    value: '$40,000 – $100,000+',
    description:
      'Comprehensive automation program across the full business. Ideal for larger SMBs with complex operations and multiple departments.'
  },
  {
    label: 'Ongoing support',
    value: '$1,500 – $4,000 / mo',
    description: 'Monitoring, maintenance, and continuous improvement of your automation suite.'
  }
];

export default function WorkflowAutomationPage() {
  return (
    <PageShell>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'AI Workflow Automation for Canadian Businesses',
            'Replace repetitive manual processes with reliable automated systems. Invoice processing, scheduling, reporting, customer service, and more. Starting at $5,000.',
            'https://bitdepthaiconsulting.com/services/workflow-automation',
            'Workflow Automation'
          )
        )}
      </Script>

      <ServiceHero
        eyebrow="Workflow Automation"
        breadcrumb="Workflow Automation"
        title="Stop paying people to do what a system should handle."
        lead="Workflow automation replaces repetitive manual processes with reliable systems that run without supervision, across every industry, every department, and every size of business."
        primaryHref="/ai-audit"
        primaryLabel="Book an AI Audit"
        secondaryHref="#pricing"
        secondaryLabel="See pricing"
        imageSrc="/images/workflow-automation-hero.webp.webp"
        imageAlt="Split view contrasting a manual paper-based process with a clean automated digital dashboard"
        reassurance="Starter projects from $5,000. Audit fee credited dollar-for-dollar against your project."
      />

      <ProblemBlock
        surface="stone"
        eyebrow="The problem"
        title="The problem is not your people. It is the process."
        paragraphs={[
          "Every business has them: tasks that happen the same way every single day, handled manually by someone who has better things to do. Data re-entered from one system into another. Invoices processed by hand. Reports built from scratch every week by pulling numbers from three different places. Approval requests that sit in someone's inbox until they remember to look.",
          'These are not signs of a bad team. They are signs of a business that has outgrown its manual processes but has not yet replaced them with something better.',
          'The cost is not just time. Every manual step is a place where errors creep in, things fall through the cracks, and your best people spend their energy on work that adds no real value. AI changes that. Not by replacing your team, but by handling the work that should never have required a human in the first place.'
        ]}
        imageSrc="/images/workflow-automation-supporting.webp.webp"
        imageAlt="Laptop screen showing a connected workflow automation diagram with automated process steps"
      />

      <ProblemBlock
        surface="cream"
        eyebrow="The barrier"
        title="The biggest barrier is not technology. It is old systems nobody wants to let go of."
        paragraphs={[
          'There is a CRM that has been in place for ten years. Or an accounting package that the bookkeeper knows inside and out. Or a scheduling tool that the operations manager built in Excel and has been maintaining ever since.',
          'These tools work. People are comfortable with them. Nobody wants to replace them.',
          'The good news is they do not have to. Modern automation tools can connect to almost any existing system: pulling data out, pushing data in, and creating workflows that bridge the gaps between tools that were never designed to talk to each other.'
        ]}
        pullQuote="You do not have to rip out what works. You just have to connect it. That is what we do."
      />

      <ListBlock
        surface="stone"
        eyebrow="What we automate"
        title="Eight common starting points."
        lead="Every engagement is different, but these are the most common automation opportunities we find across industries."
        items={automations}
        columns={2}
      />

      <ProcessBlock
        surface="cream"
        eyebrow="How it works"
        title="Audit, build, embed."
        steps={processSteps}
      />

      <div id="pricing">
        <PricingBlock
          surface="stone"
          eyebrow="Pricing"
          title="Sized to your scope."
          lead="Final pricing depends on the number of automations, the systems involved, and the complexity of your existing environment. Every project is scoped after the audit."
          rows={pricingRows}
          note="If you complete an AI Opportunity Audit first, the full audit fee is credited against your automation project, dollar for dollar."
          ctaHref="/ai-audit"
          ctaLabel="Book an AI Audit"
        />
      </div>

      <FinalCTA
        eyebrow="Where to start"
        title="Not sure which processes to automate first?"
        body="That is exactly what the audit is for. We map your operations, identify the highest-value automation opportunities, and give you a prioritized list with ROI estimates before you commit to building anything."
        primaryHref="/ai-audit"
        primaryLabel="Book an AI Audit"
        secondaryHref="/contact"
        secondaryLabel="Book a discovery call"
      />
    </PageShell>
  );
}
