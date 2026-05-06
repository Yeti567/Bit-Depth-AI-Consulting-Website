import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { Check } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { MissedCallRoiCalculator } from '@/components/ui/missed-call-roi-calculator';
import { MissedCallConversationTabs } from '@/components/ui/missed-call-conversation-tabs';
import {
  MissedCallFitCheckCta,
  FIT_CHECK_CALENDLY_URL
} from '@/components/ui/missed-call-fit-check-cta';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { buildServiceSchema, buildFaqSchema } from '@/lib/schema';

const PAGE_URL = 'https://bitdepthaiconsulting.com/services/missed-call-text-back';

export const metadata: Metadata = {
  title: 'Missed Call Text Back for Canadian Trades | BitDepth AI Consulting',
  description:
    'Recover the calls you already paid to attract. BitDepth installs a Canadian-compliant missed-call recovery system for HVAC, plumbing, electrical, and roofing contractors. PIPEDA, CRTC, A2P 10DLC handled. From $497 per month.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Missed Call Text Back for Canadian Trades | BitDepth AI Consulting',
    description:
      'Recover the calls you already paid to attract. Canadian-compliant missed-call recovery for trades. From $497 per month.',
    url: PAGE_URL,
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA'
  }
};

const leakScenarios = [
  {
    n: '01',
    title: 'The 7am no-heat rush.',
    body: "It is minus twelve. The phone starts ringing at 6:30am. Your dispatcher cannot pick up four lines at once. Three of those callers will not leave a voicemail. By 7:30am, those three jobs are booked with whichever competitor's office staff started earlier than yours."
  },
  {
    n: '02',
    title: 'The on-the-roof black hole.',
    body: 'Your owner runs estimates. Your owner is on a roof from 9am to 3pm with no service. Every call that comes in during that window dies in voicemail. The customer never tries twice. The owner gets back to the truck, sees five missed calls, and does not have time to call any of them back before tomorrow morning.'
  },
  {
    n: '03',
    title: 'The Friday night burst pipe.',
    body: 'After-hours emergency calls are the highest-value calls a plumber gets. They are also the calls most likely to go unanswered. The customer is panicking, water is hitting the basement, and they will pay double to whoever answers the phone right now. If that is not you, the next plumber on the list takes a $1,200 job your business never even knew existed.'
  }
];

const stages = [
  {
    n: 'Stage 1',
    title: 'Detection (zero seconds)',
    body: "Your business number is registered through us with the Canadian carriers. Every inbound call is timestamped against your team's call activity. The system knows the difference between a call that was answered, a call that rolled to voicemail, and a call that hung up before voicemail. Voicemail is not the trigger. Unanswered is the trigger."
  },
  {
    n: 'Stage 2',
    title: 'Recovery text (five seconds)',
    body: 'Within five seconds of the call ending, the customer gets a text from your business number. The script is written for your business in your tone, not a generic template. The text acknowledges the missed call, names your business, asks one specific question, and offers a callback link to your calendar. Two sentences, no marketing fluff. Five seconds matters. The customer is still holding the phone when the text arrives. After ninety seconds, the recovery rate drops by more than half because the customer has already started dialing your competitor.'
  },
  {
    n: 'Stage 3',
    title: 'AI conversation (the next two to four minutes)',
    body: 'The customer replies. The voice and SMS AI handles the back-and-forth in plain language: what is broken, when did it start, what is the address, are you the homeowner or a tenant, do you need same-day service. It does not pretend to be a human. It says it is your office assistant, because honesty does better than illusion in trades. The script has hard guardrails. It will book a known service type into a known time slot. It will not quote prices. It will not promise availability outside your business hours. It will not try to upsell. Anything it cannot answer with confidence gets routed to a human with the context attached.'
  },
  {
    n: 'Stage 4',
    title: 'Capture and routing (immediately)',
    body: "The system extracts and structures: customer name, callback number, service address, job type, urgency, and the customer's actual words about the problem. That structured record lands in your CRM or calendar with one click. No retyping. No copy-paste. The dispatcher gets a notification with the entire conversation attached. If your office is on a Jobber, ServiceTitan, Housecall Pro, or similar workflow, the new lead lands as a job draft, not just a contact note, so the next person who touches it is one button away from booking it."
  },
  {
    n: 'Stage 5',
    title: 'Live handoff (within fifteen minutes during business hours)',
    body: 'During business hours, a human on your team confirms the booking, runs the standard intake script, and locks in the time. The AI did the part that goes wrong when nobody picks up. The human does the part that wins repeat customers. After hours, the system books the job into the next available emergency or morning slot, sets the customer expectation, and notifies the on-call tech via SMS. Nobody gets dragged out of bed for a job that can wait until 7am, and nothing real-emergency gets queued for tomorrow.'
  },
  {
    n: 'Stage 6',
    title: 'Reporting (every Monday)',
    body: 'You get one page in your inbox. Calls answered, calls captured, jobs booked, jobs lost, the average response time, and the dollar value of the recovered work. You do not get a 47-tab dashboard you will never log into. You get the only numbers that matter for deciding whether the system is paying for itself, which it usually is by the second week.'
  }
];

const layers = [
  {
    title: 'Layer 1: Telephony',
    body: "Your existing business number stays your business number. We register it as an A2P 10DLC sender with the Canadian carriers (Bell, Rogers, Telus, and the regionals). That registration is what gets your texts delivered to your customers' phones instead of filtered into the spam folder. Most US-built setups skip Canadian registration, which is why their delivery rates fall apart north of the border. Texts are sent and received through Canadian-routed infrastructure, not US numbers."
  },
  {
    title: 'Layer 2: Voice AI and SMS AI',
    body: 'The voice agent answers calls when your team cannot. It uses a script written specifically for your business, with your service categories, your hours, your service area, your booking rules, and your brand voice. The same brain runs the SMS conversation. It does not improvise on price. It does not pretend to be a human. It books what it can book, escalates what it cannot, and logs everything. We are vendor-neutral on the underlying model. Whichever combination of voice AI and conversation AI fits your call volume and budget, we configure, tune, and maintain. You do not get a bill from a US SaaS vendor. You get one bill from BitDepth.'
  },
  {
    title: 'Layer 3: Integrations',
    body: 'Captured leads flow into your CRM, scheduler, or both. We support direct connections to the most common Canadian trades stacks (Jobber, ServiceTitan, Housecall Pro, FieldEdge, Kickserv, Workiz) and webhook or Zapier connections to anything else with an API. If your office runs on a custom system or a thirty-year-old database, the fit check tells you whether we can connect to it before you spend any money.'
  },
  {
    title: 'Layer 4: Data residency and reporting',
    body: 'Customer messages and call recordings are stored on Canadian-hosted infrastructure under PIPEDA-compliant terms. We do not share your customer data, sell it, or use it to train models that go to anyone else. Your weekly report is generated from your data, on your account, for your eyes.'
  }
];

const complianceItems = [
  {
    name: 'A2P 10DLC carrier registration',
    body: 'The major Canadian carriers require business-to-consumer texts to be registered against a verified business identity, a verified brand, and a verified use case. Unregistered texts get flagged as spam and silently filtered. We handle the registration end to end so the texts your business sends actually arrive.'
  },
  {
    name: 'CRTC and CASL',
    body: 'Canadian anti-spam law (CASL) requires that business messages have a clear identification of the sender, a working unsubscribe option, and an implied or express consent basis. Every text the system sends on your behalf includes a clean opt-out, identifies your business, and is sent to people who already initiated contact by calling you. That is the strongest consent basis available.'
  },
  {
    name: 'PIPEDA and Quebec Law 25',
    body: "Federal privacy law (PIPEDA) and Quebec's stronger Law 25 control how Canadian customer data is stored, accessed, and shared. Customer data captured through the system is stored on Canadian infrastructure under the same terms BitDepth applies to its own data. We do not transfer customer records to US servers. We do not share, sell, or use them to train shared AI models. If you take on commercial work in Quebec, the system handles French-language responses for known service categories, and the Law 25 data-handling terms apply automatically."
  }
];

const playbooks = [
  {
    name: 'HVAC and plumbing',
    href: '/industries/hvac-plumbing',
    items: [
      'Service category routing: emergency (no heat, no water, gas smell), routine (maintenance, filter, drain), quote-only (replacement, new install).',
      'Equipment-aware questions: brand, age, error code, last service date.',
      'Two-tier dispatch logic: same-day for emergency, scheduled for everything else.',
      'After-hours premium fee disclosure: built into the script the same way your dispatcher would say it on the phone.'
    ]
  },
  {
    name: 'Electrical',
    href: '/industries/electrical',
    items: [
      'Safety triage first: live exposed wire, sparks, burning smell, panel down, partial outage.',
      'Permit-aware questions: is this for a kitchen reno, basement finish, EV charger, hot tub, generator hookup.',
      'Quote-versus-booking branching: a panel upgrade does not get auto-booked, it gets routed to the estimator. A breaker reset call does.'
    ]
  },
  {
    name: 'Roofing and ICI construction',
    href: '/industries/roofing-ici-construction',
    items: [
      'Residential vs commercial split at the first message.',
      'Storm-mode toggle: when the system detects a spike in inbound calls during a weather event, it switches to a storm script that prioritizes containment-first, repair-second.',
      'Building manager and tenant capture for commercial: the system asks for both contacts when relevant.',
      'Insurance work flagging: when the customer mentions an insurance claim, the lead is tagged for the estimator queue, not the dispatcher queue.'
    ]
  },
  {
    name: 'General contracting and field services',
    href: '/industries/field-services',
    items: [
      'Multi-trade routing: the system asks the project type and routes to the right division (framing, foundation, finishing, mechanical, etc.).',
      'Quote-pipeline integration: leads flagged as new construction or large renovation drop into your estimating queue with a tag, not your dispatch queue.',
      'Subcontractor-friendly handoff: if you sub out roofing or HVAC, the system can capture the lead and forward it to your sub-trade partner with the same context, in line with whatever referral arrangement you have set up.'
    ]
  }
];

const offerStack = [
  {
    name: 'Discovery and scripting',
    body: 'We start with a 60-minute working session. We learn your service categories, your dispatch logic, your pricing rules, your hours, your competitor talking points, your brand voice, and the things you do not want the system to say. The voice and SMS scripts are written from that session, then reviewed with you before anything goes live.'
  },
  {
    name: 'Voice agent and 5-second auto-text deployed and tested in your business',
    body: 'We stand up the voice and SMS agents on your business number, run live test calls together, and certify the after-hours script and storm-mode triggers before anything points at real customers.'
  },
  {
    name: 'Carrier registration paperwork submitted and approved on your behalf',
    body: 'A2P 10DLC application, brand and use-case verification, and CASL-compliant opt-out language filed with the major Canadian carriers. You sign one form. We handle the rest of the back-and-forth until the registration is approved.'
  },
  {
    name: 'CRM or scheduler integration built, tested, and documented',
    body: 'We connect the system to your existing scheduler or CRM, send live test leads through it, and hand you a one-page integration map showing exactly where each captured field lands.'
  },
  {
    name: 'Trade-specific configuration',
    body: 'HVAC, plumbing, electrical, roofing, or general contracting playbook applied. Service categories, dispatch logic, after-hours premium handling, and storm-mode triggers tuned for your trade.'
  },
  {
    name: 'Booking and callback handoff',
    body: "Captured leads land in your CRM as job drafts (not just notes), with the conversation attached, the address parsed, and the customer's words preserved. Your dispatcher gets a notification. The customer gets a confirmation."
  },
  {
    name: 'Weekly performance report',
    body: 'One page, every Monday morning. Calls answered, calls captured, jobs booked, response time, and dollar value of the recovered work.'
  },
  {
    name: '90-day optimization window',
    body: 'For the first 90 days, we tune the script, the routing, and the integrations based on real call data, no extra charge. After 90 days, ongoing optimization is included in your monthly fee.'
  }
];

interface PricingTier {
  name: string;
  price: string;
  setup: string;
  bestFor: string;
  unlocks: string[];
  highlight?: boolean;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$497/mo',
    setup: '$750 setup',
    bestFor: '1 to 5 staff, up to 200 calls per month.',
    unlocks: [
      'Voice AI plus SMS recovery on a single business number.',
      'One trade-specific script preset (HVAC, plumbing, electrical, roofing, or general contracting).',
      'Integration with Jobber, Housecall Pro, Google Calendar, or Calendly.',
      'Weekly performance report.'
    ]
  },
  {
    name: 'Standard',
    price: '$697/mo',
    setup: '$1,200 setup',
    bestFor: '6 to 15 staff, up to 600 calls per month.',
    highlight: true,
    badge: 'Most common',
    unlocks: [
      'Everything in Starter, plus:',
      'Multi-line support across multiple business numbers (separate brands or service areas).',
      'Custom scripting for two service categories (e.g., emergency vs scheduled).',
      'CRM connector to ServiceTitan, FieldEdge, Kickserv, Workiz, or HubSpot.',
      'After-hours and storm-mode automation.',
      'Monthly script and routing optimization session.'
    ]
  },
  {
    name: 'Pro',
    price: '$897/mo',
    setup: '$1,500 setup',
    bestFor: '16 plus staff, unlimited calls.',
    unlocks: [
      'Everything in Standard, plus:',
      'Custom auto-quote triggers for the most common service requests.',
      'Multi-trade or multi-division routing for general contractors and field services.',
      'Custom reporting (cohort-level recovery rate, lead-source attribution, dispatcher-level routing).',
      'Quarterly business review with Blake Cowan, founder.',
      'Priority support response (within four business hours).'
    ]
  }
];

const fieldStats = [
  { value: '+22%', label: 'Increase in booked jobs within 90 days.' },
  { value: '6 days', label: 'From fit check to receptionist live.' },
  { value: '24 / 7', label: 'After-hours coverage without hiring.' }
];

const faqItems = [
  {
    question: 'How fast does the text actually go out?',
    answer: 'Within five seconds of the call ending. The customer is still holding their phone when it arrives. After ninety seconds, recovery rates drop sharply because the customer has already started dialing your competitor.'
  },
  {
    question: 'Will it sound like a robot?',
    answer: 'No, but it will not pretend to be a human either. The script is short, written in your tone, and identifies itself as your office assistant. We have tested both directions. Honesty about the system being automated has higher booking rates than pretending a person is on the other end.'
  },
  {
    question: 'What if my customer texts back something the system cannot handle?',
    answer: 'The system has a hard rule: anything outside its script gets routed to your team with the original message and the call context attached. Nothing gets dropped, and nothing gets answered with confidence the system does not have.'
  },
  {
    question: 'Does this replace my office staff or my answering service?',
    answer: 'It replaces an answering service in most cases. It does not replace your office staff, because office staff do things the system cannot, like upsell, handle a difficult customer, or run a credit-card payment over the phone. We have clients who pair both. The system catches the calls staff cannot pick up. Staff handle the calls that need a human touch.'
  },
  {
    question: 'What CRMs and schedulers does it connect to?',
    answer: 'Direct connectors for Jobber, ServiceTitan, Housecall Pro, FieldEdge, Kickserv, Workiz, HubSpot, Google Calendar, and Calendly. Webhook or Zapier connections for anything else with an API. If you are running something custom, the fit check tells you whether we can connect to it before you sign.'
  },
  {
    question: 'How long does setup take?',
    answer: 'Most clients are live within one week of contract signature. The bottleneck is usually getting your call routing rules and CRM access sorted on your end, not the system itself. Most clients see captured calls within the first 48 hours after go-live.'
  },
  {
    question: 'What about French-language customers?',
    answer: 'The system handles French-language responses for known service categories at an additional configuration cost. If you take on Quebec commercial work, the Law 25 data-handling terms apply automatically. We will scope the bilingual setup during the fit check.'
  },
  {
    question: 'What is the contract length?',
    answer: 'None. Cancel anytime after the first 90 days. No fee, no fight, no awkward email chain. The reason for the 90-day floor is that the system needs roughly that long to fully tune to your call patterns. Anything shorter and you would be cancelling before it has hit its stride.'
  },
  {
    question: 'What happens to my customer data?',
    answer: 'Your customer data is your data. It is stored on Canadian-hosted infrastructure under PIPEDA-aligned terms. We do not share it, sell it, or use it to train any model that goes to anyone else. If you cancel, we export your data and delete our copy on request.'
  },
  {
    question: 'Why is BitDepth different from a US-based reseller?',
    answer: 'Three reasons. First, Canadian compliance is built in: A2P 10DLC, CASL, PIPEDA, and Quebec Law 25 are handled, not ignored. Second, we are vendor-neutral. We are not paid by any platform to sell their stack. Third, we run a diagnosis-first methodology. Before anything goes live, we walk through your call volume, your job value, and your booking flow, and tell you whether the system actually fits. If it does not, we say so. That posture comes from the same firm that runs the AI Opportunity Audit.'
  }
];

export default function MissedCallTextBackPage() {
  return (
    <PageShell>
      <Script id="service-mctb-schema" type="application/ld+json">
        {JSON.stringify(
          buildServiceSchema(
            'Missed Call Text Back',
            'Canadian-compliant missed-call recovery for trades and field-service businesses. Voice AI, SMS recovery within five seconds, CRM integration, and PIPEDA, CRTC, and A2P 10DLC compliance handled end to end. From $497 per month.',
            PAGE_URL,
            'Missed Call Recovery'
          )
        )}
      </Script>
      <Script id="service-mctb-faq-schema" type="application/ld+json">
        {JSON.stringify(buildFaqSchema(faqItems))}
      </Script>

      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Missed call revenue recovery for Canadian trades</p>
            <h1 className="mt-6 max-w-2xl">
              The call you missed today is already booked with someone else.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Most Canadian residential trades miss between three and ten calls a day. We install a
              Canadian-compliant missed-call recovery system that texts the customer within five
              seconds, captures the job details, and hands a clean booking to your team before the
              homeowner finishes calling the next number on Google.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#calculator" className="btn-primary">
                Run the math on my missed calls
              </Link>
              <MissedCallFitCheckCta variant="outline" />
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              From <span className="tabular">$497</span> per month.{' '}
              <span className="tabular">$750</span> setup. Cancel anytime after 90 days. Built on
              Canadian carrier infrastructure with PIPEDA, CRTC, and A2P 10DLC compliance handled
              for you.
            </p>
          </ScrollReveal>
          <ScrollReveal
            index={1}
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]"
          >
            <Image
              src="/images/hero-mctb-phone-recovery.webp"
              alt="Smartphone on a contractor workbench showing a clean text-message interface"
              fill
              priority
              sizes="(min-width: 1024px) 480px, 100vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* The leak */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">The problem nobody talks about</p>
            <h2 className="mt-6">It is not a marketing problem. It is an operational leak.</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <ScrollReveal className="max-w-xl space-y-5 text-[var(--color-charcoal)]">
              <p>
                Most trades businesses do not have a lead-generation problem. They have a
                lead-recovery problem. The customer already found you. They already dialed your
                number. They were ready to spend money before anyone in your office said a word.
              </p>
              <p>
                Then nobody picked up. The call went to voicemail. They hung up. They called the
                next HVAC, plumbing, electrical, or roofing company on Google. By the time you
                listen to the voicemail, they are already booked with someone else, and the
                cost-per-lead you paid to get that call shows up nowhere on your spreadsheet
                because the call did not become a job.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1}>
              <p className="text-[var(--color-slate)]">
                <span className="font-semibold text-[var(--color-navy)]">
                  Three places this happens every week:
                </span>
              </p>
              <ol className="mt-5 space-y-6">
                {leakScenarios.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-serif text-2xl text-[var(--color-terracotta)] tabular leading-none pt-1">
                      {s.n}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--color-navy)]">{s.title}</p>
                      <p className="mt-2 text-[var(--color-charcoal)]">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
          <ScrollReveal index={2} className="mt-10 max-w-3xl">
            <p className="text-[var(--color-slate)]">
              None of this is a marketing problem. You are already paying to attract these calls.
              The leak is between the call hitting your number and your team having a name, an
              address, and a job.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Process proof</p>
            <h2 className="mt-6">A six-stage system, built around the way trades actually work.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              There is no client photo wall on this page yet, because BitDepth tells the truth:
              this offer is new in Canada. What we can show you is the full architecture, in plain
              English, in the order it happens.
            </p>
          </ScrollReveal>
          <ol className="mt-12 space-y-10 lg:space-y-12">
            {stages.map((stage, index) => (
              <ScrollReveal
                key={stage.n}
                index={index}
                as="li"
                className="grid gap-4 lg:grid-cols-[180px,1fr] lg:gap-10"
              >
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                    {stage.n}
                  </p>
                  <p className="mt-2 font-serif text-xl text-[var(--color-navy)]">{stage.title}</p>
                </div>
                <p className="text-[var(--color-charcoal)]">{stage.body}</p>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Conversation tabs */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">A real exchange</p>
            <h2 className="mt-6">Three trades, three real conversations.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              These are the kinds of exchanges the system handles every day, in your business&apos;s
              voice, not a robot&apos;s. The numbers, names, and addresses are made up. The
              structure of the conversation is exactly how the system runs.
            </p>
          </ScrollReveal>
          <div className="mt-10">
            <ScrollReveal index={1}>
              <MissedCallConversationTabs />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section
        id="calculator"
        className="section-stone section-space section-rule scroll-mt-24"
      >
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Run the math</p>
            <h2 className="mt-6">How much revenue is going to voicemail?</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Most Canadian residential trades miss between three and ten calls a day. This
              calculator estimates what those calls are actually worth, and how many recovered
              jobs it takes to break even on the system.
            </p>
          </ScrollReveal>
          <div className="mt-12">
            <ScrollReveal index={1}>
              <MissedCallRoiCalculator />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Pricing</p>
            <h2 className="mt-6">Pick the tier that fits your call volume.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              Three tiers. No long-term contract. Cancel anytime after 90 days. Every tier
              includes Canadian carrier registration, the full compliance setup, the weekly
              report, and the 90-day optimization window. The difference is volume, integration
              depth, and the level of trade-specific customization.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <ScrollReveal key={tier.name} index={index}>
                <article
                  className={`relative flex h-full flex-col rounded-md border bg-white p-7 ${
                    tier.highlight
                      ? 'border-[var(--color-terracotta)]'
                      : 'border-[var(--color-border)]'
                  }`}
                >
                  {tier.badge ? (
                    <span className="absolute -top-3 left-7 rounded bg-[var(--color-terracotta)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                      {tier.badge}
                    </span>
                  ) : null}
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                    {tier.name}
                  </p>
                  <p className="mt-3 text-sm text-[var(--color-slate)]">{tier.bestFor}</p>
                  <p className="mt-6 font-serif text-3xl text-[var(--color-navy)] tabular">
                    {tier.price}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-slate)] tabular">{tier.setup}</p>
                  <ul className="mt-6 space-y-2 text-sm text-[var(--color-charcoal)]">
                    {tier.unlocks.map((line) => (
                      <li key={line} className="flex gap-2">
                        <Check
                          className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                          aria-hidden="true"
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <MissedCallFitCheckCta
                    label="Talk to us"
                    variant={tier.highlight ? 'primary' : 'outline'}
                    className="mt-8"
                  />
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Under the hood */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">The honest version, for people who want to know what they are buying</p>
            <h2 className="mt-6">The system is four layers, all of which we configure for your business.</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {layers.map((layer, index) => (
              <ScrollReveal key={layer.title} index={index} className="max-w-xl">
                <p className="font-serif text-xl text-[var(--color-navy)]">{layer.title}</p>
                <p className="mt-3 text-[var(--color-charcoal)]">{layer.body}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">The legal stuff, translated</p>
            <h2 className="mt-6">
              Most missed-call recovery products are built for the US market and break quietly at
              the Canadian border.
            </h2>
          </ScrollReveal>
          <ul className="mt-10 space-y-7">
            {complianceItems.map((item, index) => (
              <ScrollReveal key={item.name} index={index} as="li">
                <p className="font-semibold text-[var(--color-navy)]">{item.name}</p>
                <p className="mt-2 text-[var(--color-charcoal)]">{item.body}</p>
              </ScrollReveal>
            ))}
          </ul>
          <ScrollReveal index={3} className="mt-10 border-t border-[var(--color-border)] pt-6">
            <p className="font-semibold text-[var(--color-navy)]">Why this is not just a checkbox</p>
            <p className="mt-2 text-[var(--color-charcoal)]">
              Compliance built in from day one is the difference between a system that works for
              two months and gets shut down by carrier filtering, and a system that just works.
              Most US-trained automation agencies do not handle this layer because they do not
              have to. We do.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Trades playbooks */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">How the system gets configured for your trade</p>
            <h2 className="mt-6">A roofing call is not an HVAC call.</h2>
            <p className="mt-5 text-[var(--color-slate)]">
              A burst pipe is not a panel upgrade. Generic missed-call tools fire the same generic
              question for all of them, and the customer hangs up on the conversation in the first
              reply. Each trade gets a tuned configuration based on what you actually book, what
              you actually price, and how your dispatch actually works.
            </p>
          </ScrollReveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {playbooks.map((playbook, index) => (
              <ScrollReveal
                key={playbook.name}
                index={index}
                className="rounded-md border border-[var(--color-border)] bg-white p-6"
              >
                <p className="font-serif text-xl text-[var(--color-navy)]">{playbook.name}</p>
                <ul className="mt-4 space-y-3">
                  {playbook.items.map((line) => (
                    <li key={line} className="flex gap-3 text-[var(--color-charcoal)]">
                      <Check
                        className="mt-1 h-4 w-4 shrink-0 text-[var(--color-terracotta)]"
                        aria-hidden="true"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={playbook.href}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)]"
                >
                  See the {playbook.name.toLowerCase()} playbook
                  <span aria-hidden="true">→</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Offer stack */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">What we hand you when we leave</p>
            <h2 className="mt-6">Everything you need to stop the leak, delivered.</h2>
          </ScrollReveal>
          <ul className="mt-10 divide-y divide-[var(--color-border)]">
            {offerStack.map((item, index) => (
              <ScrollReveal key={item.name} index={index} as="li" className="py-6 first:pt-0">
                <p className="font-semibold text-[var(--color-navy)]">{item.name}</p>
                <p className="mt-2 text-[var(--color-slate)]">{item.body}</p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Fit check */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <p className="eyebrow justify-center">Diagnosis first</p>
            <h2 className="mt-8 font-serif text-2xl leading-snug sm:text-3xl">
              If the math does not work for your business, we will tell you before you sign
              anything.
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[var(--color-slate)]">
              Every engagement starts with a 15-minute fit check. We look at your inbound call
              volume, your average job value, your existing booking flow, and your CRM. If the
              numbers do not justify the system, we say so, and we recommend against moving
              forward. We would rather have a customer who knows the system pays for itself than
              a refund request in month two. That is the same diagnosis-first standard we apply to
              every other engagement at BitDepth.
            </p>
            <div className="mt-9 flex justify-center">
              <MissedCallFitCheckCta label="Book the fit check" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* From the field */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">A real outcome, anonymized</p>
            <h2 className="mt-6">
              A two-technician HVAC company, six to eight jobs per month, recovered.
            </h2>
            <div className="mt-6 space-y-5 text-[var(--color-charcoal)]">
              <p>
                A two-technician HVAC company in southern Ontario was losing six to eight jobs a
                month to unanswered calls. The owner ran service calls full-time, and any call
                that hit the office while he was on a job rolled to voicemail. Most never came
                back.
              </p>
              <p>
                We deployed the missed-call recovery system with after-hours text-back and a
                Jobber-connected booking flow. The system answers inquiries, presents available
                time slots based on his calendar, collects job details in plain language, and
                either books the appointment directly or sends a callback notification with the
                conversation attached.
              </p>
              <p>
                Within 90 days, booked jobs were up 22 percent. The owner stopped getting dragged
                out of bed for non-emergencies because the system books overnight calls into the
                next morning automatically. After-hours calls are now 24/7 covered without hiring
                a dispatcher. The company kept the same crew, the same number, and the same brand
                voice. They just stopped losing the calls they were already paying to attract.
              </p>
            </div>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {fieldStats.map((stat, index) => (
              <ScrollReveal
                key={stat.value}
                index={index}
                className="rounded-md border border-[var(--color-border)] bg-white p-6"
              >
                <p className="font-serif text-3xl text-[var(--color-terracotta)] tabular">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-[var(--color-slate)]">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-offwhite section-space section-rule">
        <div className="container-shell max-w-3xl">
          <ScrollReveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-6">Questions worth answering before the fit check.</h2>
          </ScrollReveal>
          <div className="mt-10">
            <ScrollReveal index={1}>
              <FAQAccordion items={faqItems} />
            </ScrollReveal>
          </div>
          <ScrollReveal index={2} className="mt-8 max-w-2xl">
            <p className="text-sm text-[var(--color-slate)]">
              Want a deeper look at how the audit-first approach plays out in practice?{' '}
              <Link
                href="/resources/what-can-i-expect-in-an-ai-discovery-audit"
                className="font-semibold text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)]"
              >
                Read what we cover in an AI discovery audit
              </Link>
              . If you also need help{' '}
              <Link
                href="/services/workflow-automation"
                className="font-semibold text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)]"
              >
                automating other admin work
              </Link>{' '}
              after this lands, we do that too.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow justify-center">Stop the leak this month</span>
            <h2 className="mt-6 text-white">
              One recovered call covers the system. The rest is profit.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Setup takes a week. Most clients see captured calls within 48 hours of go-live. The
              fit check is free, and it takes 15 minutes. Audit first. Recommend what fits.
              Deliver outcomes.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={FIT_CHECK_CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a 15-minute fit check
              </Link>
              <Link href="/contact?topic=audit" className="btn-outline">
                Book an AI Audit instead
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
