import type { Metadata } from 'next';
import Image from 'next/image';
import { PageShell } from '@/components/layout/page-shell';
import { FAQAccordion } from '@/components/ui/faq-accordion';
import { faqs } from '@/lib/site-data';

export const metadata: Metadata = {
  title: 'AI Audit Services for Canadian Businesses | BitDepth AI Consulting',
  description:
    "BitDepth's AI Opportunity Discovery Audit is a $5,000 fixed-price engagement that maps your operations, scores your AI readiness, and delivers a prioritized implementation roadmap.",
  keywords: [
    'AI audit services for Canadian businesses',
    'AI readiness assessment',
    'AI implementation consulting',
    'machine learning consulting',
    'AI strategy consulting',
    'digital transformation consultant',
    'data analytics consultant'
  ],
  alternates: {
    canonical: '/ai-audit'
  },
  openGraph: {
    title: 'AI Audit Services for Canadian Businesses | BitDepth AI Consulting',
    description:
      "BitDepth's AI Opportunity Discovery Audit is a fixed-price engagement that maps operations, scores AI readiness, and delivers a prioritized roadmap.",
    url: '/ai-audit',
    type: 'website',
    images: [
      {
        url: '/images/AI Audit Page.webp',
        width: 1200,
        height: 630,
        alt: 'Business professionals reviewing operational charts and workflow diagrams in a boardroom'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Audit Services for Canadian Businesses | BitDepth AI Consulting',
    description:
      'Book BitDepth’s AI Opportunity Discovery Audit to assess readiness, rank opportunities, and define a practical roadmap.',
    images: ['/images/AI Audit Page.webp']
  }
};

const auditFaqs = [
  {
    question: 'Is this just a sales process to push us into a bigger engagement?',
    answer:
      'No. The audit is a complete, standalone deliverable. Many clients complete the audit and then implement the roadmap themselves or with their internal team. We designed it this way intentionally. Clients who get genuine value from the audit choose to continue with BitDepth. Clients who do not need us for implementation still leave with a plan that works.'
  },
  {
    question: 'Will you recommend specific AI tools or vendors during the audit?',
    answer:
      'Yes, but conditionally. We recommend tools only within the context of your specific situation, your existing stack, and your budget. We have no vendor affiliations and receive no referral fees from any platform.'
  },
  {
    question: 'How long does the audit take and how much of my team\'s time is required?',
    answer:
      "The full engagement takes two to four weeks from kickoff to final report delivery. We typically need four to six hours of your team's time across two to three structured interview sessions."
  },
  {
    question: 'Do you work with businesses outside of oil and gas and manufacturing?',
    answer:
      'Yes. While oil and gas and manufacturing are our primary practice areas, we work with any Canadian business in the $2M to $50M range that is considering AI adoption. The audit methodology applies across industries.'
  }
];

export default function AIAuditPage() {
  return (
    <PageShell simplifiedHeader>
      <section className="bg-white">
        <div className="container-shell py-16 md:py-24">
          <div className="mx-auto max-w-[800px]">
            <p className="eyebrow">AI Opportunity Discovery Audit</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">AI Audit Services for Canadian Businesses</h1>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              Most AI projects fail before they start. Not because the technology does not work, but because no one asked the right questions first. BitDepth&apos;s AI audit services exist to change that. We start every engagement by understanding your operations, your data, and your real-world constraints before a single tool is selected or a single dollar is committed to implementation.
            </p>
            <div className="mt-10 relative min-h-[360px] overflow-hidden rounded-[2rem] md:min-h-[420px]">
              <Image src="/images/AI Audit Page.webp" alt="Business professionals reviewing operational charts and workflow diagrams in a boardroom" fill priority className="object-cover" />
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {['Fixed-price engagement from $5,000', 'Structured two to four week delivery window', 'Four concrete deliverables you keep', 'Prioritized roadmap built around operational reality'].map((item) => (
                <div key={item} className="surface-card p-5 text-sm font-semibold text-navy">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-offwhite">
        <div className="container-shell">
          <div className="mx-auto max-w-[800px] space-y-8">
            <div className="surface-card p-8 md:p-10">
              <p className="eyebrow">What Is Included</p>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">What Is Included in a BitDepth AI Audit</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                The AI Opportunity Discovery Audit is a structured four-week engagement. It covers your full operational environment and produces four concrete deliverables.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy">Deliverable 1: Operations Map</h3>
                  <p className="mt-3 text-charcoal/82">A documented map of your core operational workflows, data systems, and technology stack. This is the foundation everything else is built on.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Deliverable 2: AI Readiness Score</h3>
                  <p className="mt-3 text-charcoal/82">A scored assessment across five pillars: data quality (0 to 20), process clarity (0 to 20), technology maturity (0 to 20), organizational readiness (0 to 20), and strategic alignment (0 to 20). Total score out of 100 with interpretation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Deliverable 3: Opportunity Register</h3>
                  <p className="mt-3 text-charcoal/82">A ranked list of AI automation and implementation opportunities, each with estimated effort, estimated ROI range, and data readiness assessment.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy">Deliverable 4: Prioritized Roadmap</h3>
                  <p className="mt-3 text-charcoal/82">A phased implementation plan starting with the highest-value, lowest-risk opportunity. Includes technology recommendations, estimated timelines, and budget ranges.</p>
                </div>
              </div>
            </div>

            <div className="surface-card p-8 md:p-10">
              <p className="eyebrow">Readiness Framework</p>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">The Five AI Readiness Pillars We Assess</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                This framework ensures the AI audit covers every critical dimension of your organization&apos;s readiness, not just the technology.
              </p>
              <ul className="mt-8 space-y-4 text-charcoal/82">
                <li><strong>Data Quality:</strong> Is your data current, structured, deduplicated, and accessible?</li>
                <li><strong>Process Clarity:</strong> Are your core processes documented and consistent enough to be automated?</li>
                <li><strong>Technology Stack:</strong> What systems are in use? Do they have APIs? Are they cloud-based?</li>
                <li><strong>Organizational Readiness:</strong> Is leadership committed? Has the team worked with AI tools before?</li>
                <li><strong>Strategic Alignment:</strong> Can your team articulate what operational success looks like in 12 months?</li>
              </ul>
              <p className="mt-8 text-charcoal/82">
                Score interpretation: 80 to 100 means AI-ready and ready to build. 60 to 79 means AI-capable with minor preparation needed. 40 to 59 means developing, with data and process work recommended first. 0 to 39 means foundation work is needed before AI implementation.
              </p>
            </div>

            <div className="surface-card p-8 md:p-10">
              <p className="eyebrow">Pricing</p>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">AI Audit Pricing and Engagement Structure</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                The AI audit is priced at $5,000 to $7,500 fixed price depending on the size and complexity of your operations. There are no hourly overruns and no surprises.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                The engagement typically runs two to four weeks and requires approximately four to six hours of your team&apos;s time across structured interview sessions. We do the analysis, documentation, and synthesis.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                At the conclusion of the audit, you own the deliverables regardless of whether you continue with BitDepth for implementation.
              </p>
            </div>

            <div className="surface-card p-8 md:p-10">
              <p className="eyebrow">FAQ</p>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Frequently Asked Questions About AI Audit Services</h2>
              <div className="mt-8">
                <FAQAccordion items={auditFaqs.length ? auditFaqs : faqs} />
              </div>
            </div>

            <div className="surface-card scroll-mt-28 p-8 md:p-10" id="book-now">
              <p className="eyebrow">Book Your AI Audit</p>
              <h2 className="mt-4 text-3xl font-bold text-navy md:text-4xl">Book Your AI Audit</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                Use the intake form below to start the conversation. We&apos;ll review your request, confirm fit, and follow up with next steps for scheduling your audit.
              </p>
              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-navy">First Name</span>
                    <input className="rounded-2xl border border-coolgray bg-offwhite px-4 py-3 outline-none focus:border-cyan" type="text" name="firstName" placeholder="First name" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-navy">Last Name</span>
                    <input className="rounded-2xl border border-coolgray bg-offwhite px-4 py-3 outline-none focus:border-cyan" type="text" name="lastName" placeholder="Last name" />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-navy">Company Name</span>
                    <input className="rounded-2xl border border-coolgray bg-offwhite px-4 py-3 outline-none focus:border-cyan" type="text" name="companyName" placeholder="Company name" />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-navy">Job Title</span>
                    <input className="rounded-2xl border border-coolgray bg-offwhite px-4 py-3 outline-none focus:border-cyan" type="text" name="jobTitle" placeholder="Job title" />
                  </label>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-navy">Industry</span>
                    <select className="rounded-2xl border border-coolgray bg-offwhite px-4 py-3 outline-none focus:border-cyan" name="industry" defaultValue="">
                      <option value="" disabled>
                        Select industry
                      </option>
                      <option value="oil-and-gas">Oil and Gas</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-semibold text-navy">Approximate Annual Revenue</span>
                    <select className="rounded-2xl border border-coolgray bg-offwhite px-4 py-3 outline-none focus:border-cyan" name="annualRevenue" defaultValue="">
                      <option value="" disabled>
                        Select revenue range
                      </option>
                      <option value="$2m-$10m">$2M to $10M</option>
                      <option value="$10m-$25m">$10M to $25M</option>
                      <option value="$25m-$50m">$25M to $50M</option>
                      <option value="over-$50m">Over $50M</option>
                    </select>
                  </label>
                </div>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-navy">Biggest Operational Challenge</span>
                  <textarea className="min-h-36 rounded-2xl border border-coolgray bg-offwhite px-4 py-3 outline-none focus:border-cyan" name="biggestChallenge" placeholder="Describe the operational bottleneck, workflow issue, or growth constraint you want the audit to help clarify." />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-navy">How did you hear about us?</span>
                  <input className="rounded-2xl border border-coolgray bg-offwhite px-4 py-3 outline-none focus:border-cyan" type="text" name="referralSource" placeholder="Referral source" />
                </label>
                <button type="submit" className="btn-primary w-full sm:w-fit">Request My AI Audit</button>
                <p className="text-sm text-charcoal/70">
                  Typical response time is one business day. Your information is treated as confidential and is never shared with third parties.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
