import type { Metadata } from 'next';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const PAGE_URL = 'https://bitdepthaiconsulting.com/security-and-data';
const CALENDLY_URL = 'https://calendly.com/blake-bitdepthaiconsulting/30min';
const CONTACT_EMAIL = 'blake@bitdepthaiconsulting.com';

export const metadata: Metadata = {
  title: 'Security and Data Handling | BitDepth AI Consulting',
  description:
    'Plain-English answers on how we handle your data, train our automations, test before launch, and provide ongoing oversight. No legal language, no buzzwords.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Security and Data Handling | BitDepth AI Consulting',
    description:
      'Plain-English answers on how we handle your data, train our automations, test before launch, and keep watching after launch.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA'
  }
};

const safetyBullets = [
  'Your data stays in your systems whenever the workflow allows it.',
  'Third-party AI platforms used only when contractually protected.',
  'Your data is not used to train public AI models.',
  'Role-based access. The AI sees only what it needs.',
  'You decide what the AI is allowed to access. Not us. Not the vendor.',
  'NDAs available on request, signed before any review or audit work begins.'
];

const chatbotSources = [
  'Website pages',
  'Service and product manuals',
  'Internal SOPs you choose to include',
  'Pricing sheets and policy documents',
  'FAQ libraries',
  'Anything else you approve in writing'
];

const chatbotRules = [
  'If it does not know, it says so and collects contact info.',
  'It does not recommend competitors.',
  'It does not invent prices, warranties, policies, or availability.',
  'It hands off to a real person on the topics you decide.'
];

const testingSteps = [
  'Common customer questions',
  'Edge cases and unusual requests',
  'Pricing questions, including the ones where the answer should be "I will have someone call you"',
  'Scheduling scenarios across business hours, weekends, and holidays',
  'After-hours behaviour, including the handoff path',
  'Angry, confused, or vague customer messages',
  'Hand-off triggers: when the AI should stop and bring in a person',
  'Failure modes: what happens when the integration is down or the data is wrong'
];

const includedMonthly = [
  'Conversation review and quality monitoring',
  'Error monitoring and alerting',
  'Prompt updates as your business evolves',
  'Knowledge base updates (new services, new prices, new policies)',
  'Performance reporting',
  'A scheduled performance check-in',
  'Reasonable support requests'
];

export default function SecurityAndDataPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Security and data handling</p>
            <h1 className="mt-6">
              We do not turn AI loose on your customers and hope for the best.
            </h1>
            <p className="mt-6 text-lg text-[var(--color-slate)]">
              Plain-English answers on how we handle your data, train our automations, test
              before launch, and keep watching after launch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="text-[var(--color-charcoal)]">
              The fear is reasonable. AI gets tones wrong, makes things up, quotes prices it
              should not quote, and leaks information it should not see. The first ninety
              percent works. It is the last ten percent that will embarrass you. Our job is to
              take that ten percent off the table before anything goes live, and to keep
              watching after it does.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* AI safety and control */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <ScrollReveal className="max-w-xl space-y-5 text-[var(--color-charcoal)]">
              <p className="eyebrow">Where your data lives</p>
              <h2 className="mt-4">AI safety and control.</h2>
              <p>
                Client information generally does not leave the systems where it already lives.
                Whenever possible, we connect AI tools to your existing systems rather than
                copying your data into separate platforms. Your customer records stay in your
                CRM. Your job records stay in your dispatch system. The AI reads what it needs
                through approved connections.
              </p>
              <p>
                When a workflow does need a third-party AI platform, we use enterprise-grade
                providers with contractual data protections. Your data is not used to train
                public AI models. We use role-based access and restricted data scopes so an AI
                assistant only sees the information it needs to do its specific job.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                What this means in practice
              </p>
              <ul className="mt-5 space-y-3">
                {safetyBullets.map((line) => (
                  <li key={line} className="flex gap-3 text-[var(--color-charcoal)]">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Chatbot knowledge */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Approved knowledge</p>
            <h2 className="mt-6">What your booking agent or chatbot is allowed to know.</h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              <p>
                A booking agent is only as trustworthy as the information it has been trained
                on. We build agents that answer from a knowledge base you approve before launch.
                That base can include your website pages, service manuals, policies, pricing
                rules, and FAQ documents. Nothing else. The agent is restricted to what you have
                authorized.
              </p>
              <p>
                When the agent does not know an answer, it does not guess. It tells the customer
                it is not sure, collects the contact information, and hands the conversation to
                a person on your team. It cannot recommend competitors, invent prices, or
                promise warranties and availability that do not exist.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            <ScrollReveal index={1}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Sources we can train on
              </p>
              <ul className="mt-5 space-y-2 text-[var(--color-charcoal)]">
                {chatbotSources.map((line) => (
                  <li key={line} className="flex gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal index={2}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                Hard rules every agent follows
              </p>
              <ul className="mt-5 space-y-2 text-[var(--color-charcoal)]">
                {chatbotRules.map((line) => (
                  <li key={line} className="flex gap-3">
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                      aria-hidden="true"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Testing</p>
            <h2 className="mt-6">Testing before launch.</h2>
            <p className="mt-5 text-[var(--color-charcoal)]">
              A working AI is not the same as a launched AI. Before any automation goes live, we
              run it through a structured testing phase that simulates the messy reality of how
              customers actually behave. The client gets to test it before customers do. The
              client signs off before launch.
            </p>
          </ScrollReveal>
          <ol className="mt-10 space-y-4 text-[var(--color-charcoal)]">
            {testingSteps.map((step, index) => (
              <ScrollReveal key={step} index={index} as="li" className="flex gap-4">
                <span className="font-serif text-xl text-[var(--color-terracotta)] tabular leading-none pt-0.5">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{step}</span>
              </ScrollReveal>
            ))}
          </ol>
          <ScrollReveal index={9} className="mt-10">
            <p className="text-[var(--color-slate)]">
              Testing typically runs one to three weeks depending on scope. The client gets a
              written testing report and approves go-live in writing. Final approval is yours,
              not ours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Human oversight */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Oversight</p>
            <h2 className="mt-6">Human oversight, always.</h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              <p>
                We do not build automations that run forever without human review. Every system
                has a person on your team who owns it. Every system has clear rules for when it
                should escalate. Every system has an off switch.
              </p>
              <p>
                You define the topics the AI is not allowed to answer. You define the topics it
                must escalate. We monitor early conversations after launch, usually for the
                first thirty days, and tune the system based on real customer interactions. If
                the AI gives a bad answer, we can review the log, identify the cause, and adjust
                within hours.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <ScrollReveal index={1} className="border-t border-[var(--color-border)] pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                If something goes wrong
              </p>
              <p className="mt-3 text-[var(--color-charcoal)]">
                We can pause or shut down the system in minutes. You will not be waiting on a
                vendor support ticket while a customer is on the line.
              </p>
            </ScrollReveal>
            <ScrollReveal index={2} className="border-t border-[var(--color-border)] pt-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                If you want to expand
              </p>
              <p className="mt-3 text-[var(--color-charcoal)]">
                The same monitoring process becomes the foundation for adding new capabilities.
                You will know what works before you scale it.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ongoing service */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Ongoing service</p>
            <h2 className="mt-6">What ongoing service includes.</h2>
            <p className="mt-5 text-[var(--color-charcoal)]">
              Every BitDepth automation includes an ongoing service package. AI systems drift.
              Your business changes. Knowledge bases go stale. The work after launch is the
              difference between an automation that compounds value and one that quietly
              degrades into a liability.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
              Included every month
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {includedMonthly.map((line) => (
                <li key={line} className="flex gap-3 text-[var(--color-charcoal)]">
                  <Check
                    className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal index={2} className="mt-10">
            <p className="text-[var(--color-slate)]">
              Pricing depends on scope and is included in your engagement quote. Ongoing service
              is not optional on automations that interact with your customers. We do not ship
              and disappear.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Vendor neutrality */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">Vendor neutrality</p>
            <h2 className="mt-6">Vendor neutrality.</h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              <p>
                We do not sell software. We are not a reseller. We do not get paid by any
                platform vendor for recommending their tools. Our recommendations are based on
                what fits your business, your existing systems, and your budget.
              </p>
              <p>
                If a tool you already own is the right answer, that is the answer. If the right
                answer is a tool we have never used, we will tell you and help you find the
                right partner. The work is the recommendation, not the sale.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow justify-center">Ask</span>
            <h2 className="mt-6 text-white">Have a specific question we did not answer?</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Ask. Most of the questions buyers raise about safety and data we have heard
              before, and the answer is usually shorter and simpler than the question.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a thirty-minute call
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-sm font-semibold text-white/80 hover:text-white"
              >
                Or email {CONTACT_EMAIL}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
