import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Home, ChevronRight, CheckCircle } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Consulting for Trades & Construction Companies | BitDepth AI',
  description:
    'Stop finding out which crews lost money at year end. Real-time job costing, automated documents, and safety compliance built for Canadian construction companies.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/industries/construction'
  },
  openGraph: {
    title: 'AI Consulting for Trades & Construction Companies | BitDepth AI',
    description:
      'Stop finding out which crews lost money at year end. Real-time job costing, automated documents, and safety compliance built for Canadian construction companies.',
    url: 'https://bitdepthaiconsulting.com/industries/construction',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-construction.webp',
        width: 1200,
        height: 630,
        alt: 'AI consulting for Canadian construction and trades companies'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Trades & Construction Companies | BitDepth AI',
    description:
      'Stop finding out which crews lost money at year end. Real-time job costing, automated documents, and safety compliance built for Canadian construction companies.',
    images: ['/images/og-construction.webp']
  }
};

const profitLeaks = [
  'Crews running over budget with no early warning system',
  'Manual timesheets that don\'t connect to job costing',
  'Material orders that don\'t reconcile against project budgets until it\'s too late',
  'Subcontractor invoices approved without checking against scope',
  'Estimating that doesn\'t feed back from actual job performance',
  'Safety and compliance documentation done manually and inconsistently'
];

const solutions = [
  {
    title: 'Real-Time Job Costing Visibility',
    description: 'Connect your field data to your estimated budgets so you can see which projects and crews are on track and which ones need attention while there\'s still time to act.'
  },
  {
    title: 'Automated Document Processing',
    description: 'Subcontractor invoices, field reports, purchase orders, and safety documents processed, categorized, and routed automatically instead of sitting in someone\'s inbox.'
  },
  {
    title: 'Safety and Compliance Automation',
    description: 'Safety documentation, incident reports, toolbox talks, and COR preparation built into your workflow so compliance isn\'t a separate job someone has to remember to do.'
  },
  {
    title: 'Estimating Feedback Loops',
    description: 'Feed actual job performance data back into your estimating process so your next bid is built on what jobs actually cost, not what you hoped they would cost.'
  }
];

export default function ConstructionPage() {
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
            <span className="text-white">Trades & Construction</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--color-navy)]">
        <div className="absolute inset-0">
          <Image
            src="/images/1775381591191_Industry_s_Construction_Hero_Image.webp"
            alt="Aerial view of active commercial construction site at sunrise"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-navy)]/70" />
        </div>
        <div className="container-shell relative py-16 sm:py-20 md:py-28">
          <div className="max-w-4xl">
            <ScrollReveal>
              <span className="eyebrow-pill">Industries / Construction</span>
              <h1 className="mt-5 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
                You Won&apos;t Know Which Crews Are Losing Money Until It&apos;s Too Late unless You Fix That Now
              </h1>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Construction companies run multiple crews, multiple projects, and multiple budgets simultaneously. Without real-time visibility, profit leaks go undetected for months.
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
                The Job Looked Fine on Paper. Then the Year Ended.
              </h2>
              <div className="mt-6 space-y-4 text-[var(--color-charcoal)] leading-relaxed">
                <p>
                  Most construction companies do a solid job estimating. The problem isn&apos;t the estimate it&apos;s what happens between the estimate and the final accounting. Labour overruns, material waste, subcontractor delays, equipment downtime. these things add up quietly across multiple crews and multiple sites.
                </p>
                <p>
                  By the time your accountant tells you a project lost money, it&apos;s ancient history. You can&apos;t fix what already happened. AI changes that by connecting your estimated budgets to your actual field costs in real time.
                </p>
                <p>
                  When a crew starts trending over budget, you know about it while you can still do something. You stop finding out at year end. You start managing as you go. This is not complicated technology it is the difference between running your business on information and running it on hope.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[300px] sm:min-h-[400px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/1775381591189_Industries_Construction_Supporting_Image.webp"
                alt="Construction site supervisor reviewing budget dashboard on tablet at active job site"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 - Where the Profit Leaks */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">
              Where Construction Companies Throw Money Off a Cliff
            </h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {profitLeaks.map((item, index) => (
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
              What AI Actually Fixes in a Construction Business
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
              Find Out Where Your Business Is Leaking Profit
            </h2>
            <p className="mt-5 text-lg text-white/70">
              The audit starts at $5,000. If it finds one crew that was trending $30,000 over budget and you catch it three months early, the math is obvious. Book a discovery call and we&apos;ll tell you honestly what we think we can find.
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
