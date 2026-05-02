import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ArticleHeader, ArticleBody, ArticleCTA } from '@/components/ui/article-layout';
import { buildArticleSchema } from '@/lib/schema';

const TITLE = 'What can I expect in an AI discovery audit?';

export const metadata: Metadata = {
  title: `${TITLE} | BitDepth AI`,
  description:
    'Wondering what an AI discovery audit involves? Learn the step-by-step process, who gets interviewed, and how ROI is calculated for your business.',
  alternates: {
    canonical:
      'https://bitdepthaiconsulting.com/resources/what-can-i-expect-in-an-ai-discovery-audit'
  },
  openGraph: {
    title: `${TITLE} | BitDepth AI`,
    description:
      'Wondering what an AI discovery audit involves? Learn the step-by-step process, who gets interviewed, and how ROI is calculated.',
    url:
      'https://bitdepthaiconsulting.com/resources/what-can-i-expect-in-an-ai-discovery-audit',
    type: 'article',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/ai-discovery-audit-featured.webp.webp',
        width: 1200,
        height: 630,
        alt: 'A consultant presenting AI workflow data to a business team in a modern boardroom'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: `${TITLE} | BitDepth AI`,
    description:
      'Wondering what an AI discovery audit involves? Learn the step-by-step process, who gets interviewed, and how ROI is calculated.',
    images: ['/images/ai-discovery-audit-featured.webp.webp']
  }
};

const interviews = [
  {
    role: 'Leadership',
    description:
      'CEO, owner, or department heads. To understand your big-picture goals, budget priorities, and where the business feels the most pain.'
  },
  {
    role: 'Managers and team leads',
    description:
      'To understand how work actually flows through your departments and where the real bottlenecks live.'
  },
  {
    role: 'Frontline workers',
    description:
      'To find out what people are doing manually every single day that nobody has ever thought to fix.'
  }
];

const pillars = [
  {
    title: 'Acquisition',
    description:
      'How you attract and convert new customers, including marketing, lead follow-up, quoting, and sales.'
  },
  {
    title: 'Delivery',
    description:
      'How you fulfill your product or service, including scheduling, production, project management, and client communication.'
  },
  {
    title: 'Support',
    description:
      'How you handle questions, billing, complaints, and customer retention after the sale.'
  }
];

const week1 = [
  'Kickoff call with leadership',
  'Stakeholder interviews across all three levels',
  'Workflow mapping into the three core pillars',
  'Task-level analysis using the AI viability test'
];

const week2 = [
  'ROI calculations on every viable opportunity',
  'Building the opportunity matrix',
  'Validating findings with your team',
  'Delivering the final report'
];

const deliverables = [
  'An executive summary with the top three problems found and the total annual cost of leaving them unsolved',
  'An opportunity matrix showing which AI projects to tackle first based on ease and impact',
  'Specific recommendations with current state, target state, ROI projection, and implementation timeline',
  'A 90-day implementation roadmap showing exactly when you will start seeing results',
  'A change management plan so your team understands what is changing and why'
];

const faqs = [
  {
    question: 'How long does an AI discovery audit take?',
    answer:
      'Most AI discovery audits are completed in two weeks. Smaller businesses with fewer than 50 employees can often wrap up in as little as 10 business days.'
  },
  {
    question: 'How much does an AI discovery audit cost?',
    answer:
      'Pricing varies by firm and business size, but the audit is typically structured as a standalone engagement. It almost always pays for itself many times over once the identified savings are implemented.'
  },
  {
    question: 'Do I need to have good data or existing systems?',
    answer:
      'Not necessarily, but data quality matters. A good consultant will flag any gaps early because poor data is one of the most common reasons AI projects fail to deliver ROI. If your data needs cleanup, that becomes part of the roadmap.'
  },
  {
    question: 'Will the audit recommend specific software tools?',
    answer:
      'Yes, but only after the problems are clearly defined. The audit identifies what needs to be solved first, then matches the right tools to those specific needs. This prevents the common mistake of buying software before understanding the actual problem.'
  },
  {
    question: 'What if we are already using some AI tools?',
    answer:
      'Even better. The audit will assess whether the tools you have are being used effectively, whether they are the right fit for your actual workflows, and where additional opportunities exist that your current setup is not covering.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function AIDiscoveryAuditArticlePage() {
  return (
    <PageShell>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(
          buildArticleSchema(
            TITLE,
            'https://bitdepthaiconsulting.com/resources/what-can-i-expect-in-an-ai-discovery-audit',
            'https://bitdepthaiconsulting.com/images/ai-discovery-audit-featured.webp.webp',
            '2026-04-05'
          )
        )}
      </Script>

      <ArticleHeader
        category="Guide"
        readTime="8 min read"
        title={TITLE}
        breadcrumbLabel="AI discovery audit walkthrough"
        imageSrc="/images/ai-discovery-audit-featured.webp.webp"
        imageAlt="A consultant presenting AI workflow data to a business team in a modern boardroom"
        lead="An AI discovery audit is one of the smartest first steps a business can take before spending a single dollar on AI tools. This article walks you through what to expect, who gets involved, and what you will walk away with."
      />

      <ArticleBody>
        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">What is an AI discovery audit?</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            An AI discovery audit is a structured assessment of your business operations designed
            to find where AI can save you time, reduce errors, and generate more revenue. It is
            not a sales pitch for a specific software tool. It is a diagnostic process, similar to
            what a doctor does before writing a prescription.
          </p>
          <p className="mt-5 text-[var(--color-slate)]">
            The goal is simple: identify the manual, repetitive, and costly tasks inside your
            business, determine which ones AI can realistically handle, and attach a dollar value
            to what that improvement means for your bottom line.
          </p>
          <p className="mt-5 text-[var(--color-slate)]">
            According to McKinsey, 78% of organizations are now using AI in at least one business
            function, up from 55% just two years ago. Many small and mid-sized businesses are still
            unsure how to start. An AI discovery audit removes that guesswork.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">Who gets interviewed during the audit?</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            One of the most valuable parts of any AI discovery audit is the interview process.
            Your consultant will schedule conversations across three levels of your organization.
          </p>
          <ol className="mt-8 space-y-6">
            {interviews.map((interview, index) => (
              <li key={interview.role} className="flex gap-5">
                <span className="font-mono text-sm tabular text-[var(--color-cyan)] pt-1">
                  {pad2(index + 1)}
                </span>
                <div>
                  <h3 className="text-[var(--color-navy)]">{interview.role}</h3>
                  <p className="mt-2 text-[var(--color-slate)]">{interview.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <ScrollReveal index={1} className="relative mt-10 aspect-[16/9] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/ai-discovery-audit-interviews.webp.webp"
              alt="A consultant conducting a one-on-one stakeholder interview in a modern office"
              fill
              className="object-cover"
            />
          </ScrollReveal>

          <p className="mt-8 text-[var(--color-slate)]">
            Research consistently shows that employees are using AI informally at a much higher
            rate than their leaders realize. Frontline interviews often surface the most valuable
            opportunities because these are the people doing repetitive work day in and day out.
            The interviews are not performance reviews. They are about understanding the real
            workflow, not the idealized version written in the employee handbook.
          </p>

          <p className="mt-6 border-l border-[var(--color-cyan)] pl-5 text-lg italic text-[var(--color-navy)]">
            A good auditor does not ask what your job is. They ask what you did yesterday morning
            from 9 to 11, what tabs you had open, and what you copy-pasted. That is where the real
            opportunities hide.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">What does the audit actually analyze?</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            Once interviews are complete, your consultant maps your entire business into three
            core areas.
          </p>
          <ul className="mt-8 space-y-7">
            {pillars.map((pillar) => (
              <li key={pillar.title}>
                <h3 className="text-[var(--color-navy)]">{pillar.title}</h3>
                <p className="mt-2 text-[var(--color-slate)]">{pillar.description}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[var(--color-slate)]">
            Inside each area, every task is broken down into individual steps. Each step is
            evaluated against four questions: Is the input structured? Is the output predictable?
            Is it rule-based? Does it happen frequently? Tasks that score well on all four are
            strong candidates for AI automation. Tasks that require human judgment or relationship
            skills stay with your team.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">How does the audit calculate ROI?</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            This is where the audit becomes genuinely valuable. Every opportunity identified gets
            tied to a real dollar amount, not a vague promise of efficiency. The formula is
            straightforward.
          </p>

          <pre className="mt-6 overflow-x-auto rounded-md border border-[var(--color-border)] bg-white p-6 font-mono text-sm leading-relaxed tabular-nums text-[var(--color-charcoal)]">
{`Hours wasted/day  ×  Staff  ×  260 working days  ×  Loaded hourly rate
=  Annual cost of doing nothing`}
          </pre>

          <p className="mt-6 text-[var(--color-slate)]">
            For example, if two employees each spend two hours a day on manual data entry at a
            loaded rate of <span className="tabular">$35</span> per hour, that is{' '}
            <span className="tabular">$54,600</span> per year being spent on a task AI can handle
            in seconds.
          </p>
          <p className="mt-5 text-[var(--color-slate)]">
            The audit also looks beyond cost savings. Faster lead response times, fewer missed
            follow-ups, and reduced customer churn all add real dollars to the ROI calculation.
            Reducing lead response time from hours to seconds alone can increase conversion rates
            by 20% or more. Every recommendation in a well-run AI discovery audit ends with a
            specific dollar amount attached.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">What does the process look like?</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            A typical AI discovery audit runs over two weeks and follows a clear structure.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Week 1 · Discovery
              </p>
              <ul className="mt-4 space-y-3 text-[var(--color-charcoal)]">
                {week1.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-[var(--color-slate)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Week 2 · Solutions
              </p>
              <ul className="mt-4 space-y-3 text-[var(--color-charcoal)]">
                {week2.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-[var(--color-slate)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-[var(--color-slate)]">
            At the end of the two weeks you receive a complete deliverable.
          </p>
          <ol className="mt-6 space-y-5">
            {deliverables.map((item, index) => (
              <li key={item} className="flex gap-5">
                <span className="font-mono text-sm tabular text-[var(--color-cyan)] pt-1">
                  {pad2(index + 1)}
                </span>
                <span className="text-[var(--color-charcoal)]">{item}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">What happens to your team during the audit?</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            One of the most common concerns business owners have is how their employees will
            react. Nobody wants their team to feel threatened or blindsided.
          </p>
          <p className="mt-5 text-[var(--color-slate)]">
            A good AI discovery audit addresses this head-on. The framing that works best is
            simple: AI is here to take over the boring, repetitive work so your team can focus on
            the higher-value work they were actually hired to do.
          </p>
          <p className="mt-5 text-[var(--color-slate)]">
            The audit process itself builds buy-in naturally. When employees are asked what tasks
            they find most tedious and then see a real plan to fix those things, the reaction is
            usually relief rather than resistance. The consultant will also identify one or two
            natural champions inside your team, people who are already curious about technology.
            They become your internal advocates as implementation begins.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">Frequently asked questions.</h2>
          <div className="mt-8 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} index={index}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[var(--color-navy)]">
                    <span className="font-semibold">{faq.question}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-[var(--color-cyan)] transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-[var(--color-slate)]">{faq.answer}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </ArticleBody>

      <ArticleCTA
        eyebrow="Ready to find out"
        title="What AI can actually do for your business."
        body="An AI discovery audit is not about technology for its own sake. It is about finding out exactly where your business is losing time and money, and putting a clear, prioritized plan in place to fix it."
        primaryHref="/ai-audit"
        primaryLabel="Book an AI Audit"
      />
    </PageShell>
  );
}
