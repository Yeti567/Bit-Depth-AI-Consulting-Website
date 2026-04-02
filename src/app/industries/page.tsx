import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Industries We Serve | BitDepth AI Consulting',
  description:
    'BitDepth serves Canadian SMBs in trades, construction, field services, professional services, manufacturing, transportation, and oil & gas. Practical AI for operations-driven businesses.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/industries'
  },
  openGraph: {
    title: 'Industries We Serve | BitDepth AI Consulting',
    description:
      'We work with Canadian businesses where operations, people, and data drive results — trades, field services, manufacturing, professional services, logistics, and oil & gas.',
    url: 'https://bitdepthaiconsulting.com/industries',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/og-industries.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting industries social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'Industries We Serve | BitDepth AI Consulting',
    description:
      'We work with Canadian businesses where operations, people, and data drive results — trades, field services, manufacturing, professional services, logistics, and oil & gas.',
    images: ['/images/og-industries.jpg']
  }
};

const industries = [
  {
    title: 'Trades & Construction',
    pain: 'Job costing chaos, subcontractor coordination, and manual field reports slow everything down.',
    useCases: ['Automated job reporting', 'AI-assisted estimating', 'Document processing']
  },
  {
    title: 'Field Services',
    pain: 'Dispatch inefficiency, technician scheduling friction, and invoice delays impact cash flow.',
    useCases: ['Scheduling optimization', 'Automated invoicing', 'Service history AI']
  },
  {
    title: 'Manufacturing',
    pain: 'Quality control issues, production scheduling pressure, and supply chain blind spots reduce throughput.',
    useCases: ['Defect detection', 'AI scheduling', 'Inventory optimization']
  },
  {
    title: 'Professional Services',
    pain: 'Document-heavy workflows, knowledge management gaps, and slow client onboarding reduce billable time.',
    useCases: ['Document automation', 'AI knowledge base', 'Client intake workflows']
  },
  {
    title: 'Transportation & Logistics',
    pain: 'Route planning, compliance paperwork, and driver scheduling complexity create avoidable waste.',
    useCases: ['Route AI', 'Automated compliance docs', 'Dispatch optimization']
  },
  {
    title: 'Oil & Gas Services',
    pain: 'Subcontractor coordination, field ticket processing, and compliance reporting are often fragmented.',
    useCases: ['Invoice automation', 'Field data capture', 'Regulatory document AI']
  }
];

export default function IndustriesPage() {
  return (
    <PageShell>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold text-white md:text-6xl">
              We Work With Businesses Where Operations Drive Results
            </h1>
            <p className="mt-5 text-lg text-white/74">
              Our clients run field teams, manage subcontractors, process high volumes of documents, and make time-sensitive decisions. These are the businesses that benefit most from practical AI.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/industries-hero.png" alt="Diverse Canadian business landscape" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry, index) => (
              <ScrollReveal key={industry.title} index={index} className="card-light p-6">
                <h3 className="text-2xl font-bold">{industry.title}</h3>
                <p className="mt-4 text-[var(--color-slate)]">{industry.pain}</p>
                <ul className="list-check mt-5 space-y-2 text-[var(--color-slate)]">
                  {industry.useCases.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
                  Learn More →
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
