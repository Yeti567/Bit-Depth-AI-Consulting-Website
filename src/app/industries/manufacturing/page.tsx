import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { IndustrySegmentTabs } from '@/components/ui/industry-segment-tabs';
import { CtaBanner } from '@/components/ui/cta-banner';

export const metadata: Metadata = {
  title: 'Manufacturing AI Consulting and Industry 4.0 Solutions | BitDepth AI',
  description:
    'BitDepth delivers manufacturing AI consulting for smart factory implementation, computer vision quality control, predictive maintenance, and supply chain optimization in Western Canada.',
  keywords: [
    'manufacturing AI consulting and Industry 4.0 solutions',
    'smart manufacturing AI',
    'predictive maintenance manufacturing',
    'computer vision quality control',
    'industrial IoT consulting',
    'smart factory consulting',
    'machine learning predictive maintenance',
    'AI process automation consulting'
  ],
  alternates: {
    canonical: '/industries/manufacturing'
  },
  openGraph: {
    title: 'Manufacturing AI Consulting and Industry 4.0 Solutions | BitDepth AI',
    description:
      'BitDepth delivers manufacturing AI consulting for smart factory implementation, quality control, predictive maintenance, and supply chain optimization in Western Canada.',
    url: '/industries/manufacturing',
    type: 'website',
    images: [
      {
        url: '/images/Manufacturing page hero.webp',
        width: 1200,
        height: 630,
        alt: 'Wide-angle manufacturing floor with automated machinery, robotic arms, and conveyor systems'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing AI Consulting and Industry 4.0 Solutions | BitDepth AI',
    description:
      'Practical manufacturing AI consulting for smart factory implementation, computer vision quality control, predictive maintenance, and logistics optimization.',
    images: ['/images/Manufacturing page hero.webp']
  }
};

const segmentLinks = [
  { id: 'smart-factory', label: 'Smart Factory and Industry 4.0' },
  { id: 'quality-control', label: 'Quality Control and Computer Vision' },
  { id: 'supply-chain', label: 'Supply Chain and Logistics' }
];

const segments = [
  {
    id: 'smart-factory',
    label: 'Smart Factory and Industry 4.0',
    title: 'Smart Factory and Industry 4.0 Consulting',
    body:
      'Industry 4.0 consulting is not about ripping out your existing systems and starting over. For most mid-market manufacturers, the most effective path is selective digitization of the processes that produce the greatest operational ROI first.',
    bullets: [
      'Manufacturing digital transformation roadmapping for selective system modernization',
      'Industrial IoT consulting for connecting existing equipment to data collection infrastructure',
      'IIoT solutions for manufacturing with edge computing for real-time data processing',
      'Smart factory solutions for OEE monitoring, downtime tracking, and production scheduling',
      'Digital factory transformation using existing PLC and SCADA data sources',
      'Connected factory solutions that integrate ERP, MES, and production floor data'
    ]
  },
  {
    id: 'quality-control',
    label: 'Quality Control and Computer Vision',
    title: 'Computer Vision Quality Control for Manufacturing',
    body:
      'Computer vision quality control is one of the most direct-ROI applications in manufacturing AI. Automated visual inspection systems can outperform human inspection for consistency, work at production line speed, and generate structured defect data that informs upstream process improvement.',
    bullets: [
      'AI quality control systems for surface defect detection, dimensional inspection, and assembly verification',
      'Machine vision inspection using cameras and deep learning models trained on your product specifications',
      'Automated optical inspection integration with existing production line infrastructure',
      'Computer vision for weld inspection in structural and pressure vessel manufacturing',
      'Defect detection machine learning models trained on your historical defect image libraries',
      'AI defect detection dashboards with rejection rate analytics and root cause flagging'
    ],
    tech:
      'Edge-deployed inference on your production line hardware for zero-latency inspection. Cloud-connected for centralized dashboard and model retraining. Both options available depending on your connectivity and data governance requirements.'
  },
  {
    id: 'supply-chain',
    label: 'Supply Chain and Logistics',
    title: 'Supply Chain and Logistics AI',
    body:
      'AI supply chain optimization for manufacturers reduces inventory carrying costs, improves on-time delivery performance, and reduces the manual data work that ties up your procurement and logistics teams.',
    bullets: [
      'AI demand forecasting integrated with your ERP and sales history',
      'Inventory management AI to reduce stockouts and overstock simultaneously',
      'Supply chain optimization AI for lead time reduction and supplier performance scoring',
      'AI for supply chain optimization in manufacturing with multi-location inventory balancing',
      'Procurement automation for purchase order processing and supplier invoice matching',
      'Logistics AI consulting for route optimization and delivery scheduling'
    ]
  }
];

export default function ManufacturingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/Manufacturing page hero.webp"
            alt="Wide-angle manufacturing floor with automated machinery, robotic arms, and conveyor systems"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
        <div className="container-shell relative py-16 sm:py-20 md:py-32">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">Manufacturing AI Consulting and Industry 4.0 Solutions</h1>
            <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              Manufacturing AI consulting is most effective when it starts with the shop floor, not a technology roadmap. BitDepth works with Canadian manufacturers to understand how your production environment actually runs, where the data is, and where AI can reduce cost, improve quality, or increase throughput without requiring a full Industry 4.0 overhaul.
            </p>
            <p className="mt-6 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
              We deliver practical AI consulting for manufacturing companies at every stage of digital maturity. Whether you are running paper-based maintenance logs or a partially connected smart factory, we find the highest-value starting point and build from there.
            </p>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[260px,1fr] lg:items-start">
          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-[2rem] border border-coolgray/60 bg-offwhite p-6 shadow-soft">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Manufacturing Topics</h2>
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
                <h2 className="text-3xl font-bold text-navy">Smart Factory Delivery Built Around Existing Operations</h2>
                <p className="mt-6 text-lg leading-8 text-charcoal/82">
                  Smart manufacturing AI works best when it respects how your plant already runs. We help manufacturers connect machine data, production systems, and operational reporting without forcing a costly rip-and-replace program.
                </p>
                <p className="mt-6 text-lg leading-8 text-charcoal/82">
                  The result is a realistic smart factory consulting roadmap that improves visibility, supports better scheduling decisions, and creates the data foundation needed for downstream AI use cases such as quality, maintenance, and process automation.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-navy">WHERE WE TYPICALLY START:</h3>
                <ul className="mt-4 space-y-3 text-charcoal/82">
                  <li>OEE monitoring and downtime classification</li>
                  <li>PLC, SCADA, MES, and ERP data integration</li>
                  <li>Selective industrial IoT instrumentation for constrained assets</li>
                  <li>Production dashboards that support line-level decision-making</li>
                </ul>
              </div>
              <div className="relative min-h-[240px] overflow-hidden rounded-[2rem] sm:min-h-[360px]">
                <Image
                  src="/images/Smart Factory Section.webp"
                  alt="Smart factory floor with connected machinery and digital overlays"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            <section className="grid gap-8 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
              <div className="relative min-h-[240px] overflow-hidden rounded-[2rem] sm:min-h-[360px]">
                <Image
                  src="/images/Computer Vision Quality Control Blog.webp"
                  alt="Computer vision quality inspection on a manufacturing line"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="surface-card p-6 sm:p-8 md:p-10">
                <h2 className="text-3xl font-bold text-navy">Predictive Maintenance for Manufacturing</h2>
                <p className="mt-6 text-lg leading-8 text-charcoal/82">
                  Predictive maintenance AI is the most frequently requested manufacturing AI application we work on. Machine learning predictive maintenance models use your existing sensor data to forecast equipment failures before they occur, reducing unplanned downtime and extending asset life.
                </p>
                <h3 className="mt-8 text-xl font-semibold text-navy">PREDICTIVE MAINTENANCE APPLICATIONS:</h3>
                <ul className="mt-4 space-y-3 text-charcoal/82">
                  <li>AI predictive maintenance for CNC machines, presses, conveyors, compressors, and HVAC</li>
                  <li>Condition monitoring AI using vibration, temperature, current draw, and pressure data</li>
                  <li>Equipment failure prediction models built on your historical maintenance and sensor records</li>
                  <li>IoT predictive maintenance pipelines connecting existing sensors to ML inference models</li>
                  <li>Asset health monitoring dashboards with severity scoring and work order integration</li>
                  <li>Predictive maintenance consulting to select and implement the right sensor and analytics stack</li>
                </ul>
                <h3 className="mt-8 text-xl font-semibold text-navy">HOW LONG DOES IMPLEMENTATION TAKE?</h3>
                <p className="mt-4 text-charcoal/82">
                  Most predictive maintenance AI implementations are completed in eight to sixteen weeks from discovery audit to live production. Timelines depend on data availability and integration complexity with your CMMS or ERP.
                </p>
                <Link href="/ai-audit" className="btn-primary mt-8 inline-flex">
                  Book a Manufacturing AI Audit - Starting at $5,000
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Book a Manufacturing AI Audit"
        description="Start with a focused audit to identify the highest-value AI use cases for your plant, data environment, and operational constraints before you commit to platforms, vendors, or pilots."
        primaryHref="/ai-audit"
        primaryLabel="Book a Manufacturing AI Audit - Starting at $5,000"
      />
    </PageShell>
  );
}
