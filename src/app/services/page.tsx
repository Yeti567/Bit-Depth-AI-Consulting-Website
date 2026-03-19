import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';

export const metadata: Metadata = {
  title: 'AI Implementation Services for Industrial Operations | BitDepth AI',
  description:
    "Explore BitDepth's AI implementation services including discovery audits, workflow automation, custom AI workers, strategy roadmaps, and training for industrial operations.",
  keywords: [
    'AI implementation services for industrial operations',
    'AI strategy consulting',
    'machine learning consulting',
    'predictive maintenance consulting',
    'AI process automation consulting',
    'generative AI consulting',
    'enterprise AI solutions'
  ],
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'AI Implementation Services for Industrial Operations | BitDepth AI',
    description:
      "Explore BitDepth's AI implementation services including discovery audits, workflow automation, custom AI workers, strategy roadmaps, and training for industrial operations.",
    url: '/services',
    type: 'website',
    images: [
      {
        url: '/images/Services page header.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial services planning desk used in the BitDepth services page hero'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Implementation Services for Industrial Operations | BitDepth AI',
    description:
      'Explore BitDepth AI services for audits, workflow automation, custom AI workers, strategy roadmaps, and training.',
    images: ['/images/Services page header.webp']
  }
};

const toc = [
  { id: 'ai-opportunity-discovery-audit', label: 'AI Opportunity Discovery Audit' },
  { id: 'ai-workflow-automation', label: 'AI Workflow Automation' },
  { id: 'custom-ai-workers', label: 'Custom AI Workers' },
  { id: 'ai-strategy-and-roadmapping', label: 'AI Strategy and Roadmapping' },
  { id: 'ai-training-and-enablement', label: 'AI Training and Enablement' }
];

const comparisonRows = [
  ['AI Strategy and Roadmap', '$50K to $500K', '$15K to $50K', '$12K to $30K', '$5K to $15K inconsistent'],
  ['AI Readiness Audit', '$15K to $35K', '$8K to $20K', '$5K to $15K', '$2K to $8K no methodology'],
  ['Custom AI System Build', '$100K to $1M+', '$50K to $200K', '$10K to $100K', '$10K to $50K high risk'],
  ['AI Training Workshop', '$10K to $30K', '$5K to $15K', '$2.5K to $7.5K', '$1K to $5K'],
  ['Managed AI Retainer', '$10K to $50K per month', '$5K to $20K per month', '$1.5K to $5K per month', 'Rarely offered']
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-white">
        <div className="container-shell grid gap-12 py-20 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div>
            <h1 className="text-4xl font-bold text-navy md:text-6xl">AI Implementation Services for Industrial Operations</h1>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              BitDepth delivers AI implementation services built for Canadian businesses in oil and gas and manufacturing. Every engagement begins with a structured discovery audit. We do not build before we understand.
            </p>
            <p className="mt-6 text-lg leading-8 text-charcoal/82">
              Our services are designed to move in sequence: audit to identify the best opportunities, strategy to prioritize them, implementation to build them, and training to embed them. Each service can also be engaged independently depending on where you are in your AI journey.
            </p>
          </div>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/Services page header.webp"
              alt="Top-down flat lay of a modern industrial desk with dashboards, a hardhat, engineering blueprints, and a tablet"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[280px,1fr] lg:items-start">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[2rem] border border-coolgray/60 bg-white p-6 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Services</h2>
              <nav className="mt-5 flex flex-col gap-3">
                {toc.map((item) => (
                  <Link key={item.id} href={`#${item.id}`} className="text-sm font-semibold text-navy transition hover:text-cyan">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8">
            <article id="ai-opportunity-discovery-audit" className="surface-card scroll-mt-28 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy">Service 1: AI Opportunity Discovery Audit</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                The AI audit is the foundation of everything we do. Before any technology is selected or any workflow is changed, we need to understand how your business actually runs.
              </p>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                The AI audit services engagement takes two to four weeks and produces four deliverables: a current-state operations map, an AI Readiness Score across five pillars, a prioritized automation opportunity list, and a phased implementation roadmap.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-navy">WHAT IS INCLUDED:</h3>
              <ul className="mt-4 space-y-3 text-charcoal/82">
                <li>Two to three structured interview sessions with leadership, department managers, and frontline staff</li>
                <li>Review and assessment of your existing technology stack</li>
                <li>AI readiness scoring across: data quality, process clarity, technology maturity, organizational readiness, strategic alignment</li>
                <li>Written findings report with plain-language explanations</li>
                <li>Prioritized roadmap with estimated ROI ranges for the top three opportunities</li>
              </ul>
              <h3 className="mt-8 text-xl font-semibold text-navy">PRICING:</h3>
              <p className="mt-4 text-charcoal/82">$5,000 to $7,500 fixed price. No surprises. No hourly billing.</p>
              <h3 className="mt-8 text-xl font-semibold text-navy">WHO THIS IS FOR:</h3>
              <p className="mt-4 text-charcoal/82">
                Business owners and operations leaders who want to understand where AI can help before committing to implementation. Also ideal for companies that have been pitched AI tools and want an independent second opinion.
              </p>
              <Link href="/ai-audit" className="btn-primary mt-8 inline-flex">Book Your AI Audit - Starting at $5,000</Link>
            </article>

            <article id="ai-workflow-automation" className="surface-card scroll-mt-28 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy">Service 2: AI Workflow Automation</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                AI process automation consulting translates the highest-priority opportunities from your audit into working automated systems. We design, build, test, and hand off automation workflows that reduce manual work, eliminate bottlenecks, and improve operational consistency.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-navy">COMMON AUTOMATION APPLICATIONS:</h3>
              <ul className="mt-4 space-y-3 text-charcoal/82">
                <li>Invoice and document processing automation</li>
                <li>Scheduling and dispatch optimization</li>
                <li>Field report generation and data entry elimination</li>
                <li>Compliance document tracking and alerting</li>
                <li>Customer and vendor communication workflows</li>
                <li>Predictive maintenance alert pipelines</li>
              </ul>
              <h3 className="mt-8 text-xl font-semibold text-navy">TECHNOLOGY APPROACH:</h3>
              <p className="mt-4 text-charcoal/82">
                We use the right tool for your situation. For straightforward workflows, we build with no-code automation platforms including Make.com and similar tools connected to your existing systems. For complex, data-intensive workflows, we use Python-based pipelines with LLM integration. We do not push a preferred stack.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-navy">PRICING:</h3>
              <p className="mt-4 text-charcoal/82">$15,000 to $75,000 depending on scope. Fixed-price engagements where possible.</p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">Book a Discovery Call</Link>
            </article>

            <article id="custom-ai-workers" className="surface-card scroll-mt-28 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy">Service 3: Custom AI Workers</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                A custom AI worker is an AI system that performs a defined job function autonomously. Unlike a general chatbot, it is trained on your internal data, follows your specific processes, and produces outputs that integrate into your existing workflows.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-navy">EXAMPLES OF CUSTOM AI WORKERS WE BUILD:</h3>
              <ul className="mt-4 space-y-3 text-charcoal/82">
                <li>Internal operations assistant trained on your SOPs, safety procedures, and HR documents</li>
                <li>Technical documentation processor that extracts structured data from engineering reports</li>
                <li>Proposal and quote generator using your historical pricing and project data</li>
                <li>Customer-facing support agent trained on your product and service documentation</li>
                <li>Regulatory compliance monitor that flags changes relevant to your operations</li>
              </ul>
              <h3 className="mt-8 text-xl font-semibold text-navy">TECHNOLOGY:</h3>
              <p className="mt-4 text-charcoal/82">
                Built on retrieval-augmented generation (RAG) architecture using your selected LLM provider, your internal data, and a custom agent framework. Delivered as a web widget, API endpoint, or embedded tool depending on your workflow.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-navy">PRICING:</h3>
              <p className="mt-4 text-charcoal/82">Project-based. Scoped after the discovery audit or a paid discovery session.</p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">Book a Discovery Call</Link>
            </article>

            <article id="ai-strategy-and-roadmapping" className="surface-card scroll-mt-28 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy">Service 4: AI Strategy and Roadmapping</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                AI strategy consulting for companies that need a structured plan before committing to implementation. This service is for leadership teams that want to understand the full landscape of AI opportunity, build internal alignment, and produce a multi-phase roadmap that governance and finance can approve.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-navy">DELIVERABLES:</h3>
              <ul className="mt-4 space-y-3 text-charcoal/82">
                <li>Competitive AI landscape review for your industry segment</li>
                <li>Internal capability assessment and gap analysis</li>
                <li>Prioritized AI investment roadmap with three-horizon planning</li>
                <li>Board or leadership-ready presentation deck</li>
                <li>Risk and compliance assessment including Canadian data privacy considerations</li>
              </ul>
              <h3 className="mt-8 text-xl font-semibold text-navy">PRICING:</h3>
              <p className="mt-4 text-charcoal/82">
                $12,000 to $30,000 depending on scope and number of stakeholder sessions required.
              </p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">Book a Discovery Call</Link>
            </article>

            <article id="ai-training-and-enablement" className="surface-card scroll-mt-28 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy">Service 5: AI Training and Enablement</h2>
              <p className="mt-6 text-lg leading-8 text-charcoal/82">
                AI training and workshops designed for Canadian business teams who want to understand AI tools, build internal confidence, and reduce dependence on external vendors over time.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-navy">TRAINING FORMATS:</h3>
              <ul className="mt-4 space-y-3 text-charcoal/82">
                <li>Half-day executive briefing: AI landscape, strategic implications, and what questions to ask vendors</li>
                <li>Full-day operations workshop: Hands-on training with AI tools relevant to your team&apos;s actual workflows</li>
                <li>Ongoing enablement retainer: Monthly sessions to support your team as your AI tools evolve</li>
              </ul>
              <h3 className="mt-8 text-xl font-semibold text-navy">WHO THIS IS FOR:</h3>
              <p className="mt-4 text-charcoal/82">
                Ideal as a standalone engagement for companies early in their AI journey, or as a follow-on to an implementation to ensure adoption and reduce long-term support costs.
              </p>
              <h3 className="mt-8 text-xl font-semibold text-navy">PRICING:</h3>
              <p className="mt-4 text-charcoal/82">$2,500 to $7,500 for workshops. Retainers from $1,500 per month.</p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">Book a Discovery Call</Link>
            </article>

            <section className="surface-card overflow-hidden p-8 md:p-10">
              <h2 className="text-3xl font-bold text-navy">How Our AI Consulting Fees Compare</h2>
              <div className="mt-8 overflow-x-auto">
                <table className="min-w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-coolgray bg-offwhite text-navy">
                      <th className="px-4 py-4 font-semibold">Service Type</th>
                      <th className="px-4 py-4 font-semibold">Enterprise Firms</th>
                      <th className="px-4 py-4 font-semibold">National Mid-Tier</th>
                      <th className="px-4 py-4 font-semibold">BitDepth Target</th>
                      <th className="px-4 py-4 font-semibold">Freelance Consultants</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row[0]} className="border-b border-coolgray/60 text-charcoal/82">
                        {row.map((cell) => (
                          <td key={cell} className="px-4 py-4 align-top">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="rounded-[2rem] bg-navy px-8 py-10 text-white md:px-10 md:py-12">
              <h2 className="text-3xl font-bold">Ready to identify the right AI service for your operations?</h2>
              <p className="mt-4 max-w-3xl text-lg text-white/80">
                Start with the audit if you need clarity first, or book a discovery call if you already know which service best fits your current stage.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/ai-audit" className="btn-primary">Book Your AI Audit</Link>
                <Link href="/contact" className="btn-secondary border-white/20 bg-transparent text-white hover:border-cyan hover:text-cyan">
                  Book a Discovery Call
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
