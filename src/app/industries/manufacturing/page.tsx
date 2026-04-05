import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ChevronRight, CheckCircle } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting for Manufacturing Companies | BitDepth AI',
  description:
    'Phased predictive maintenance, production scheduling, and inventory optimization — built around what your manufacturing business actually has, not what is ideal.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/industries/manufacturing'
  },
  openGraph: {
    title: 'AI Consulting for Manufacturing Companies | BitDepth AI',
    description:
      'Phased predictive maintenance, production scheduling, and inventory optimization — built around what your manufacturing business actually has, not what is ideal.',
    url: 'https://bitdepthaiconsulting.com/industries/manufacturing',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-manufacturing.webp',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian manufacturing companies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Manufacturing Companies | BitDepth AI',
    description:
      'Phased predictive maintenance, production scheduling, and inventory optimization — built around what your manufacturing business actually has, not what is ideal.',
    images: ['/images/og-manufacturing.webp']
  }
};

const moneyLosses = [
  'Unplanned equipment downtime on assets with no condition monitoring',
  'Production scheduling done manually without visibility into downstream bottlenecks',
  'Inventory levels managed by intuition rather than data',
  'Quality control checks that catch problems after production instead of during',
  'Maintenance scheduled by calendar instead of by actual equipment condition',
  'Reporting that depends on someone compiling data from multiple systems by hand'
];

const solutions = [
  {
    title: 'Phased Predictive Maintenance',
    description: 'Start with your newest and most critical equipment. Build in condition monitoring and failure prediction where it makes economic sense. Create a roadmap for expanding coverage as equipment is replaced over time.'
  },
  {
    title: 'Production Scheduling Optimization',
    description: 'AI-assisted scheduling that accounts for equipment availability, material supply, order deadlines, and labour — reducing bottlenecks and improving throughput without adding headcount.'
  },
  {
    title: 'Inventory and Supply Chain Visibility',
    description: 'Connect purchasing, inventory, and production data so you are not over-ordering, under-ordering, or discovering shortages when the line is already running.'
  },
  {
    title: 'Quality Control Automation',
    description: 'Automated inspection and defect detection at key production stages — catching problems earlier and reducing the cost of rework and waste.'
  }
];

export default function ManufacturingPage() {
  return (
    <PageShell>
      {/* Breadcrumb */}
      <div className="bg-[var(--color-navy)] border-b border-[var(--color-border)]">
        <div className="container-shell py-4">
          <nav className="flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="flex items-center gap-1 hover:text-cyan transition-colors">
              <Home className="h-4 w-4" />
              <span className="sr-only">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/industries" className="hover:text-cyan transition-colors">Industries</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Manufacturing</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0">
          <Image
            src="/images/1775381591186_Modern_CNC_manufacturing_facility_in_action.webp"
            alt="Worker in safety gear operating CNC machine in modern Canadian manufacturing facility"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/70" />
        </div>
        <div className="container-shell relative py-16 sm:py-20 md:py-28">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow-pill">Industries / Manufacturing</span>
              <h1 className="mt-5 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
                You Can&apos;t Put Sensors on Everything. But You Can Build a Smarter Plan Starting With What You Have.
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Manufacturing AI doesn&apos;t have to be an all-or-nothing transformation. The smartest companies start where the data already exists and build from there.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 1 - The Real Problem */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold text-[var(--color-navy)] md:text-4xl">
                Predictive Maintenance Sounds Great. But Not Every Machine Is Worth Instrumenting.
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  There is a version of manufacturing AI that consultants love to sell — sensors on everything, real-time dashboards, fully automated production lines. That version costs a fortune and is irrelevant to most manufacturers outside of the largest enterprises.
                </p>
                <p>
                  The practical version looks different. You identify which equipment is new enough or critical enough to justify monitoring. You build predictive maintenance into those assets first. As older equipment gets replaced, you bring each new addition online with the right infrastructure from day one. Over time, your operation modernizes without a single massive disruption or investment.
                </p>
                <p>
                  In the meantime, there are almost always scheduling, inventory, and quality control opportunities that don&apos;t require any new hardware at all — just better use of the data you already have.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[300px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/1775381591188_Technician_installing_sensor_in_industrial_facility.webp"
                alt="Maintenance technician attaching sensor to industrial equipment while reviewing maintenance dashboard on tablet"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 - Where the Money Goes */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Where Manufacturing Companies Lose Time and Output
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {moneyLosses.map((item, index) => (
              <ScrollReveal key={index} index={index} className="card-dark p-5 flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyan shrink-0 mt-0.5" />
                <span className="text-white/90">{item}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - What We Do */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-[var(--color-navy)] md:text-4xl">
              What AI Actually Fixes in a Manufacturing Business
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} index={index} className="card-light p-6">
                <h3 className="text-xl font-bold text-[var(--color-navy)]">{solution.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{solution.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-charcoal section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              You Don&apos;t Have to Modernize Everything at Once
            </h2>
            <p className="mt-5 text-lg text-white/70">
              A discovery audit will show you where AI creates real value in your operation given what you actually have — not what a textbook says you should have. Book a call and we&apos;ll give you an honest assessment.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Free Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
