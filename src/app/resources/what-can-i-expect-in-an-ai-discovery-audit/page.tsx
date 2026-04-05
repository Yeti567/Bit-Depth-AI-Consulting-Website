import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildArticleSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'What Can I Expect in an AI Discovery Audit? | BitDepth AI',
  description:
    'Wondering what an AI discovery audit involves? Learn the step-by-step process, who gets interviewed, and how ROI is calculated for your business.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/resources/what-can-i-expect-in-an-ai-discovery-audit'
  },
  openGraph: {
    title: 'What Can I Expect in an AI Discovery Audit? | BitDepth AI',
    description:
      'Wondering what an AI discovery audit involves? Learn the step-by-step process, who gets interviewed, and how ROI is calculated for your business.',
    url: 'https://bitdepthaiconsulting.com/resources/what-can-i-expect-in-an-ai-discovery-audit',
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
    title: 'What Can I Expect in an AI Discovery Audit? | BitDepth AI',
    description:
      'Wondering what an AI discovery audit involves? Learn the step-by-step process, who gets interviewed, and how ROI is calculated for your business.',
    images: ['/images/ai-discovery-audit-featured.webp.webp']
  }
};

const faqs = [
  {
    question: 'How long does an AI discovery audit take?',
    answer: 'Most AI discovery audits are completed in two weeks. Smaller businesses with fewer than 50 employees can often wrap up in as little as 10 business days.'
  },
  {
    question: 'How much does an AI discovery audit cost?',
    answer: 'Pricing varies by firm and business size, but the audit is typically structured as a standalone engagement. It almost always pays for itself many times over once the identified savings are implemented.'
  },
  {
    question: 'Do I need to have good data or existing systems?',
    answer: 'Not necessarily, but data quality matters. A good consultant will flag any gaps early because poor data is one of the most common reasons AI projects fail to deliver ROI. If your data needs cleanup, that becomes part of the roadmap.'
  },
  {
    question: 'Will the audit recommend specific software tools?',
    answer: 'Yes, but only after the problems are clearly defined. The audit identifies what needs to be solved first, then matches the right tools to those specific needs. This prevents the common mistake of buying software before understanding the actual problem.'
  },
  {
    question: 'What if we are already using some AI tools?',
    answer: 'Even better. The audit will assess whether the tools you have are being used effectively, whether they are the right fit for your actual workflows, and where additional opportunities exist that your current setup is not covering.'
  }
];

export default function AIDiscoveryAuditArticlePage() {
  return (
    <PageShell>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(buildArticleSchema(
          'What Can I Expect in an AI Discovery Audit?',
          'https://bitdepthaiconsulting.com/resources/what-can-i-expect-in-an-ai-discovery-audit',
          'https://bitdepthaiconsulting.com/images/ai-discovery-audit-featured.webp.webp'
        ))}
      </Script>

      <section className="section-navy dot-grid section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-4xl">
            <nav className="text-sm text-white/60">
              <Link href="/" className="hover:text-cyan">Home</Link>
              <span className="mx-2">{'>'}</span>
              <Link href="/resources" className="hover:text-cyan">Resources</Link>
              <span className="mx-2">{'>'}</span>
              <span className="text-white">What Can I Expect in an AI Discovery Audit</span>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <span className="inline-flex rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">Guide</span>
              <span className="text-sm text-white/60">8 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              What Can I Expect in an AI Discovery Audit?
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <div className="relative mb-10 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-discovery-audit-featured.webp.webp"
                alt="A consultant presenting AI workflow data to a business team in a modern boardroom"
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="text-lg leading-relaxed text-[var(--color-slate)]">
              An AI discovery audit is one of the smartest first steps a business can take before spending a single dollar on AI tools. If you have been curious about AI but are not sure where to start, or you have tried a few tools and are not seeing results, an AI discovery audit gives you a clear and honest picture of where your business stands and exactly where AI can make a real difference. This article walks you through what to expect, who gets involved, and what you will walk away with at the end.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">What Is an AI Discovery Audit?</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              An AI discovery audit is a structured assessment of your business operations designed to find where AI can save you time, reduce errors, and generate more revenue. It is not a sales pitch for a specific software tool. It is a diagnostic process, similar to what a doctor does before writing a prescription.
            </p>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              The goal is simple: identify the manual, repetitive, and costly tasks inside your business, determine which ones AI can realistically handle, and attach a dollar value to what that improvement means for your bottom line.
            </p>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              According to McKinsey, 78% of organizations are now using AI in at least one business function, up from 55% just two years ago. But many small and mid-sized businesses are still unsure how to start. An AI discovery audit removes that guesswork entirely.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">Who Gets Interviewed During an AI Discovery Audit?</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:items-start">
              <div>
                <p className="text-[var(--color-slate)] leading-relaxed">
                  One of the most valuable parts of any AI discovery audit is the interview process. Your consultant will schedule conversations across three levels of your organization:
                </p>
                <ul className="mt-5 space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-cyan" />
                    <div>
                      <span className="font-semibold text-[var(--color-navy)]">Leadership (CEO, owner, or department heads):</span>
                      <span className="text-[var(--color-slate)]"> To understand your big-picture goals, budget priorities, and where the business feels the most pain.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-cyan" />
                    <div>
                      <span className="font-semibold text-[var(--color-navy)]">Managers and team leads:</span>
                      <span className="text-[var(--color-slate)]"> To understand how work actually flows through your departments and where the real bottlenecks live.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-cyan" />
                    <div>
                      <span className="font-semibold text-[var(--color-navy)]">Frontline workers:</span>
                      <span className="text-[var(--color-slate)]"> To find out what people are doing manually every single day that nobody has ever thought to fix.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 overflow-hidden rounded-xl border border-[var(--color-border)] lg:h-80">
                <Image
                  src="/images/ai-discovery-audit-interviews.webp.webp"
                  alt="A consultant conducting a one-on-one stakeholder interview in a modern office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              Research consistently shows that employees are using AI informally at a much higher rate than their leaders realize. Frontline interviews often surface the most valuable opportunities because these are the people doing repetitive work day in and day out.
            </p>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              The interviews are not performance reviews. They are about understanding the real workflow, not the idealized version written in the employee handbook.
            </p>
            <blockquote className="mt-6 border-l-4 border-cyan bg-cyan/5 p-6">
              <p className="italic text-[var(--color-navy)]">
                &ldquo;A good auditor does not ask what your job is. They ask what you did yesterday morning from 9 to 11 AM, what tabs you had open, and what you copy-pasted. That is where the real opportunities hide.&rdquo;
              </p>
            </blockquote>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">What Does the AI Discovery Audit Actually Analyze?</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              Once interviews are complete, your consultant maps your entire business into three core areas:
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="card-light p-5">
                <h3 className="font-bold text-[var(--color-navy)]">Acquisition</h3>
                <p className="mt-2 text-sm text-[var(--color-slate)]">How you attract and convert new customers, including marketing, lead follow-up, quoting, and sales.</p>
              </div>
              <div className="card-light p-5">
                <h3 className="font-bold text-[var(--color-navy)]">Delivery</h3>
                <p className="mt-2 text-sm text-[var(--color-slate)]">How you fulfill your product or service, including scheduling, production, project management, and client communication.</p>
              </div>
              <div className="card-light p-5">
                <h3 className="font-bold text-[var(--color-navy)]">Support</h3>
                <p className="mt-2 text-sm text-[var(--color-slate)]">How you handle questions, billing, complaints, and customer retention after the sale.</p>
              </div>
            </div>
            <p className="mt-6 text-[var(--color-slate)] leading-relaxed">
              Inside each area, every task is broken down into individual steps. Each step is evaluated against four questions: Is the input structured? Is the output predictable? Is it rule-based? Does it happen frequently? Tasks that score well on all four are strong candidates for AI automation. Tasks that require human judgment or relationship skills stay with your team.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">How Does an AI Discovery Audit Calculate ROI?</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-[400px_1fr] lg:items-start">
              <div className="relative h-64 overflow-hidden rounded-xl border border-[var(--color-border)] lg:h-80">
                <Image
                  src="/images/ai-discovery-audit-roi.webp.webp"
                  alt="A laptop screen displaying ROI charts and financial dashboards with glowing data visualizations"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-[var(--color-slate)] leading-relaxed">
                  This is where the audit becomes genuinely valuable. Every opportunity identified gets tied to a real dollar amount, not a vague promise of efficiency. The formula is straightforward:
                </p>
                <div className="mt-5 rounded-lg bg-charcoal/5 p-5">
                  <p className="font-mono text-sm text-[var(--color-navy)]">
                    Hours wasted per day × Number of staff × 260 working days × Loaded hourly rate = Annual cost of doing nothing
                  </p>
                </div>
                <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
                  For example, if two employees each spend two hours a day on manual data entry at a loaded rate of $35 per hour, that is $54,600 per year being spent on a task AI can handle in seconds.
                </p>
              </div>
            </div>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              The audit also looks beyond cost savings. Faster lead response times, fewer missed follow-ups, and reduced customer churn all add real dollars to the ROI calculation. Reducing lead response time from hours to seconds alone can increase conversion rates by 20% or more. Every recommendation in a well-run AI discovery audit ends with a specific dollar amount attached.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <div className="relative mb-6 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-discovery-audit-workflow.webp.webp"
                alt="Overhead view of a business strategy session with workflow diagrams and sticky notes on a white desk"
                width={800}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">What Does the AI Discovery Audit Process Look Like?</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              A typical AI discovery audit runs over two weeks and follows a clear structure:
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="card-light p-6">
                <h3 className="font-bold text-[var(--color-navy)]">Week 1 — Discovery</h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-slate)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    Kickoff call with leadership
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    Stakeholder interviews across all three levels
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    Workflow mapping into the three core pillars
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    Task-level analysis using the AI viability test
                  </li>
                </ul>
              </div>
              <div className="card-light p-6">
                <h3 className="font-bold text-[var(--color-navy)]">Week 2 — Solutions</h3>
                <ul className="mt-4 space-y-2 text-sm text-[var(--color-slate)]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    ROI calculations on every viable opportunity
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    Building the opportunity matrix
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    Validating findings with your team
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    Delivering the final report
                  </li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-[var(--color-slate)] leading-relaxed">
              At the end of the two weeks you receive a complete deliverable that includes:
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-xs font-bold text-cyan">1</span>
                <span className="text-[var(--color-slate)]">An executive summary with the top three problems found and the total annual cost of leaving them unsolved</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-xs font-bold text-cyan">2</span>
                <span className="text-[var(--color-slate)]">An opportunity matrix showing which AI projects to tackle first based on ease and impact</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-xs font-bold text-cyan">3</span>
                <span className="text-[var(--color-slate)]">Specific recommendations with current state, target state, ROI projection, and implementation timeline</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-xs font-bold text-cyan">4</span>
                <span className="text-[var(--color-slate)]">A 90-day implementation roadmap showing exactly when you will start seeing results</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-xs font-bold text-cyan">5</span>
                <span className="text-[var(--color-slate)]">A change management plan so your team understands what is changing and why</span>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">What Happens to Your Team During an AI Discovery Audit?</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              One of the most common concerns business owners have is how their employees will react. Nobody wants their team to feel threatened or blindsided.
            </p>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              A good AI discovery audit addresses this head-on. The framing that works best is simple: AI is here to take over the boring, repetitive work so your team can focus on the higher-value work they were actually hired to do.
            </p>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              The audit process itself builds buy-in naturally. When employees are asked what tasks they find most tedious and then see a real plan to fix those things, the reaction is usually relief rather than resistance. The consultant will also identify one or two natural champions inside your team, people who are already curious about technology. They become your internal advocates as implementation begins.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">Frequently Asked Questions About AI Discovery Audits</h2>
            <div className="mt-6 space-y-4">
              {faqs.map((faq) => (
                <div key={faq.question} className="card-light p-6">
                  <h3 className="font-bold text-[var(--color-navy)]">{faq.question}</h3>
                  <p className="mt-3 text-[var(--color-slate)] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Ready to Find Out What AI Can Do for Your Business?</h2>
            <p className="mt-5 text-white/74">
              An AI discovery audit is not about technology for its own sake. It is about finding out exactly where your business is losing time and money and putting a clear, prioritized plan in place to fix it.
            </p>
            <p className="mt-4 text-white/74">
              You will walk away with a ranked list of opportunities, a dollar figure attached to every recommendation, and a 90-day roadmap you can act on immediately. No guesswork. No vague promises. Just a clear path forward.
            </p>
            <Link href="/ai-audit" className="btn-primary mt-8">
              Book Your AI Discovery Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
