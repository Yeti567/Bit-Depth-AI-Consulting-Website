import type { Metadata } from 'next';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { buildServiceSchema } from '@/lib/schema';
import {
  ServiceHero,
  ProblemBlock,
  ListBlock,
  PricingBlock,
  FinalCTA,
  type ListItem,
  type PricingRow
} from '@/components/ui/service-page-blocks';

export const metadata: Metadata = {
  title: 'AI Training & Enablement for Business Teams | Bit Depth AI',
  description:
    'Workshops, playbooks, and hands-on training to make sure your team actually uses the AI you have invested in. Delivered remotely or on-site across Canada.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/services/ai-training' },
  openGraph: {
    title: 'AI Training & Enablement for Business Teams | Bit Depth AI',
    description:
      'Workshops, playbooks, and hands-on training to make sure your team actually uses the AI you have invested in.',
    url: 'https://bitdepthaiconsulting.com/services/ai-training',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'AI training and enablement for business teams'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Training & Enablement for Business Teams | Bit Depth AI',
    description:
      'Workshops, playbooks, and hands-on training to make sure your team actually uses the AI you have invested in.',
    images: ['/images/og-services.jpg']
  }
};

const trainingOptions: ListItem[] = [
  {
    title: 'AI Foundations Workshop',
    meta: '$2,500 – $4,500',
    description:
      'What AI actually is, what it can and cannot reliably do, how to think about it as a business tool rather than a magic solution, and how to evaluate AI claims from vendors. Half-day or full-day workshop, delivered remotely or on-site. Designed for leadership teams and operations managers who need to make informed decisions about AI without becoming technical experts.'
  },
  {
    title: 'Role-Specific AI Playbooks',
    meta: '$1,500 – $3,000',
    description:
      'A step-by-step guide for how a specific role in your business should use AI day to day: which tools to use, how to use them, what to watch for, and what to escalate to a human. Written for the person doing the job, not for a technical audience. Delivered as a PDF and editable document, with a one-hour walkthrough session included.'
  },
  {
    title: 'Prompt Engineering Workshop',
    meta: '$3,500 – $6,000',
    description:
      'How to get reliable, consistent, useful output from AI tools your team is already using, including ChatGPT, Claude, Copilot, and industry-specific AI tools. The difference between a prompt that produces garbage and one that produces something you can actually use is learnable. This workshop teaches it. Half-day hands-on workshop with real examples from your industry.'
  },
  {
    title: 'Tool Adoption Bootcamp',
    meta: '$4,000 – $7,500',
    description:
      'Intensive hands-on training to drive consistent adoption of a specific AI tool or system after it goes live. Covers how the tool works, how it applies to each role, common mistakes and how to avoid them, and what good usage looks like versus poor usage. Full-day or two-day bootcamp, designed around the specific tool being adopted.'
  }
];

const scenarios: ListItem[] = [
  {
    title: 'You just implemented something and adoption is slower than expected',
    description:
      'Your team went through the vendor training but usage is inconsistent. Some people have embraced it, others are avoiding it. The investment is not delivering what it should because the tool is not being used correctly or consistently. A targeted adoption bootcamp gets everyone on the same page.'
  },
  {
    title: 'You are about to implement something and want to do it right',
    description:
      'You have selected a tool or just completed an implementation project, and you want to make sure training happens properly before bad habits form. Role-specific playbooks and a pre-launch workshop give your team the confidence to start strong.'
  },
  {
    title: 'Your leadership team needs to understand AI before deciding about it',
    description:
      'You are being pitched AI solutions and you are not sure how to evaluate them. Your team is asking about AI and you are not sure how to answer. An AI Foundations Workshop gives leadership the understanding they need without becoming technical experts.'
  }
];

const pricingRows: PricingRow[] = [
  { label: 'AI Foundations Workshop', value: '$2,500 – $4,500' },
  { label: 'Role-Specific AI Playbooks', value: '$1,500 – $3,000 each' },
  { label: 'Prompt Engineering Workshop', value: '$3,500 – $6,000' },
  { label: 'Tool Adoption Bootcamp', value: '$4,000 – $7,500' }
];

export default function AITrainingPage() {
  return (
    <PageShell>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'AI Training & Enablement for Business Teams',
            'Workshops, playbooks, and hands-on training to make sure your team actually uses the AI you have invested in. Delivered remotely or on-site across Canada.',
            'https://bitdepthaiconsulting.com/services/ai-training',
            'AI Training'
          )
        )}
      </Script>

      <ServiceHero
        eyebrow="AI Training & Enablement"
        breadcrumb="AI Training & Enablement"
        title="The best AI implementation fails if your team doesn't use it."
        lead="Deployment is only half the job. The other half is making sure your team understands, trusts, and actually uses what you have invested in. That is what AI Training and Enablement delivers."
        primaryHref="/contact"
        primaryLabel="Book a discovery call"
        secondaryHref="#pricing"
        secondaryLabel="See pricing"
        imageSrc="/images/ai-training-hero.webp.webp"
        imageAlt="Small group of employees attending hands-on AI training around a screen in a modern meeting room"
        reassurance="Workshops from $2,500. Delivered remotely or on-site across Canada."
      />

      <ProblemBlock
        surface="stone"
        eyebrow="The problem"
        title="Technology does not fail because it does not work. It fails because people go back to what they know."
        paragraphs={[
          'Every industry has seen it. A new system gets implemented. The vendor trains the team. Everyone nods along. Six weeks later half the team is doing things the old way because the new way felt unfamiliar or nobody was sure they were using it correctly.',
          'This is not a people problem. It is a change management problem. People are not resistant to better tools, they are resistant to uncertainty. When they do not understand how a tool works, when they are not confident it will give them reliable results, and when nobody has shown them specifically how it applies to their job, they default to what they already know.',
          'AI is particularly vulnerable to this because it is still new enough that most people have a mixture of skepticism and anxiety about it. Training that addresses both, that builds genuine understanding and genuine confidence, is what makes the difference between an implementation that delivers ROI and one that collects dust.'
        ]}
        imageSrc="/images/ai-training-supporting.webp.webp"
        imageAlt="Employee using AI tool on a laptop with a printed playbook open beside them"
      />

      <ListBlock
        surface="cream"
        eyebrow="What we offer"
        title="Four programs. Combine as needed."
        lead="Each option is designed for a different stage of AI adoption. Most clients combine two or more."
        items={trainingOptions}
        columns={2}
      />

      <ListBlock
        surface="stone"
        eyebrow="Who needs this"
        title="Three common scenarios."
        items={scenarios}
        columns={3}
      />

      <div id="pricing">
        <PricingBlock
          surface="cream"
          eyebrow="Pricing"
          title="Per program. Bundle as you need."
          lead="All training is delivered remotely or on-site, depending on your preference and location. Custom packages combining multiple programs are available."
          rows={pricingRows}
          ctaHref="/contact"
          ctaLabel="Book a discovery call"
        />
      </div>

      <FinalCTA
        eyebrow="The investment"
        title="The AI you bought is only worth what your team actually uses."
        body="Book a discovery call and we will tell you honestly which training option makes the most sense for where your business is right now."
        primaryHref="/contact"
        primaryLabel="Book a discovery call"
      />
    </PageShell>
  );
}
