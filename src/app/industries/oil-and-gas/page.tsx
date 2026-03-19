import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { IndustrySegmentTabs } from '@/components/ui/industry-segment-tabs';

export const metadata: Metadata = {
  title: 'AI Consulting for Oil and Gas Digital Transformation | BitDepth AI',
  description:
    'BitDepth delivers vendor-neutral AI consulting for oil and gas companies. Predictive maintenance, reservoir modeling, pipeline integrity, and oilfield automation for upstream, midstream, and downstream operations.',
  keywords: [
    'AI consulting for oil and gas digital transformation',
    'predictive maintenance oil and gas',
    'oilfield automation',
    'digital twin oil and gas',
    'pipeline integrity management',
    'AI reservoir modeling',
    'machine learning in oil and gas exploration',
    'generative AI for oil and gas'
  ],
  alternates: {
    canonical: '/industries/oil-and-gas'
  },
  openGraph: {
    title: 'AI Consulting for Oil and Gas Digital Transformation | BitDepth AI',
    description:
      'BitDepth delivers vendor-neutral AI consulting for oil and gas companies across upstream, midstream, and downstream operations.',
    url: '/industries/oil-and-gas',
    type: 'website',
    images: [
      {
        url: '/images/Oil and gas page hero.webp',
        width: 1200,
        height: 630,
        alt: 'Dramatic oil and gas processing plant at twilight with flame stacks and industrial towers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Consulting for Oil and Gas Digital Transformation | BitDepth AI',
    description:
      'Vendor-neutral AI consulting for oil and gas operators focused on maintenance, reservoir modeling, pipeline integrity, and automation.',
    images: ['/images/Oil and gas page hero.webp']
  }
};

const segmentLinks = [
  { id: 'upstream', label: 'Upstream' },
  { id: 'midstream', label: 'Midstream' },
  { id: 'downstream', label: 'Downstream' }
];

const segments = [
  {
    id: 'upstream',
    label: 'Upstream',
    title: 'Upstream AI Solutions: Exploration and Production',
    body:
      'Machine learning in oil and gas exploration and production has moved from pilot to production at major operators. For mid-market companies, the same techniques are now accessible at a fraction of the enterprise cost.',
    bullets: [
      'Predictive maintenance AI for pumps, compressors, and wellsite equipment',
      'AI well log analysis and subsurface modeling with machine learning',
      'Production optimization using real-time sensor data and forecasting models',
      'AI reservoir modeling to improve volumetric estimates from existing log data',
      'Oilfield automation for field reporting, dispatch scheduling, and ticketing workflows',
      'Generative AI for oilfield data management and operational documentation'
    ],
    tech:
      'Python-based ML pipelines, LangChain agent frameworks, time-series forecasting models, LLM document processors, IIoT sensor integration, digital oilfield dashboards.'
  },
  {
    id: 'midstream',
    label: 'Midstream',
    title: 'Midstream AI Solutions: Transportation and Storage',
    body:
      'AI pipeline monitoring and pipeline integrity management represent two of the highest-value applications in the midstream sector. Both are areas where machine learning consulting can produce measurable results within a single engagement cycle.',
    bullets: [
      'Pipeline corrosion monitoring AI using sensor data and anomaly detection models',
      'AI pipeline monitoring dashboards with automated alerting',
      'Pipeline leak detection using pressure differential and flow rate analysis',
      'Predictive maintenance for compressor stations and pump facilities',
      'Midstream digital transformation for operational reporting and compliance workflows',
      'Natural gas pipeline AI consulting for flow optimization and scheduling'
    ]
  },
  {
    id: 'downstream',
    label: 'Downstream',
    title: 'Downstream AI Solutions: Refining and Distribution',
    body:
      'Downstream operations generate enormous volumes of operational and maintenance data. AI consulting for the downstream sector focuses on turning that data into predictive capability and process efficiency.',
    bullets: [
      'Refinery predictive maintenance using historical failure and sensor data',
      'Refinery optimization AI for energy consumption and throughput efficiency',
      'Petrochemical process optimization using machine learning models',
      'Downstream oil gas consulting for ERP and CMMS data integration',
      'AI document processing for turnaround planning, permit management, and compliance'
    ]
  }
];

export default function OilAndGasPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/Oil and gas page hero.webp"
            alt="Dramatic oil and gas processing plant at twilight with flame stacks and industrial towers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="container-shell relative py-16 sm:py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">AI Consulting for Oil and Gas Digital Transformation</h1>
            <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              AI consulting for oil and gas companies requires more than a technology strategy. It requires deep operational understanding across upstream exploration and production, midstream transportation and storage, and downstream refining and distribution. BitDepth brings both.
            </p>
            <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              We work with Canadian oil and gas companies to identify where AI creates genuine operational value, then build the systems that deliver it. From predictive maintenance models that reduce unplanned downtime to generative AI systems that process regulatory and well documentation, our engagements are scoped to your segment, your data, and your team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[260px,1fr] lg:items-start">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[2rem] border border-coolgray/60 bg-offwhite p-6 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Oil &amp; Gas Segments</h2>
              <nav className="mt-5 flex flex-col gap-3">
                {segmentLinks.map((segment) => (
                  <a key={segment.id} href={`#${segment.id}`} className="text-sm font-semibold text-navy transition hover:text-cyan">
                    {segment.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="space-y-8">
            <IndustrySegmentTabs segments={segments} />

            <section className="grid gap-8 lg:grid-cols-[1fr,0.9fr] lg:items-center">
              <div className="surface-card p-6 sm:p-8 md:p-10">
                <h2 className="text-3xl font-bold text-navy">Digital Twin and IoT Solutions for Oil and Gas</h2>
                <p className="mt-6 text-lg leading-8 text-charcoal/82">
                  Digital twin technology for oil and gas operations gives your team a live, model-based view of asset performance. Combined with industrial IoT sensors and AI analytics, digital twins shift your maintenance program from reactive to predictive.
                </p>
                <p className="mt-6 text-lg leading-8 text-charcoal/82">
                  We help oil and gas companies design and implement digital twin frameworks at the asset level, the facility level, and the field level. We do not sell proprietary digital twin platforms. We recommend the right approach for your existing infrastructure and budget.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-navy">RELATED CAPABILITIES:</h3>
                <ul className="mt-4 space-y-3 text-charcoal/82">
                  <li>Industrial IoT oil and gas connectivity and sensor data pipelines</li>
                  <li>IIoT oilfield monitoring dashboards</li>
                  <li>Remote monitoring of oil and gas assets with automated exception reporting</li>
                  <li>Asset lifecycle management consulting for long-term operational planning</li>
                </ul>
              </div>
              <div className="relative min-h-[240px] overflow-hidden rounded-[2rem] sm:min-h-[360px]">
                <Image
                  src="/images/Digital Twin Blog.webp"
                  alt="Digital twin monitoring visualization for oil and gas assets"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
              <div className="relative min-h-[240px] overflow-hidden rounded-[2rem] sm:min-h-[360px]">
                <Image
                  src="/images/Upstream section.webp"
                  alt="Workover rig on a prairie oil field at sunrise"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="surface-card p-6 sm:p-8 md:p-10">
                <h2 className="text-3xl font-bold text-navy">Why Oil and Gas Companies Choose BitDepth</h2>
                <p className="mt-6 text-lg leading-8 text-charcoal/82">
                  We do not enter engagements to sell software or justify a vendor relationship. We audit your operations, understand your actual data environment, and recommend the path that produces the most operational value for your specific situation.
                </p>
                <p className="mt-6 text-lg leading-8 text-charcoal/82">
                  Our experience spans upstream, midstream, and downstream operations. We understand the terminology, the safety culture, the regulatory environment, and the data realities of Canadian oil and gas. That context allows us to move faster and make better recommendations than generalist AI firms.
                </p>
                <Link href="/ai-audit" className="btn-primary mt-8 inline-flex">
                  Book an Oil and Gas AI Audit - Starting at $5,000
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
