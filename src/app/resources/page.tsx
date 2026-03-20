import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Insights & Resources | BitDepth AI Consulting Blog',
  description:
    'BitDepth AI Consulting shares practical insights on AI consulting, predictive maintenance, industrial automation, and machine learning for oil & gas and manufacturing teams.',
  keywords: [
    'AI consulting resources',
    'AI blog for industry',
    'predictive maintenance insights',
    'industrial AI articles',
    'machine learning blog',
    'AI automation workflows'
  ],
  alternates: {
    canonical: '/resources'
  },
  openGraph: {
    title: 'AI Insights & Resources | BitDepth AI Consulting Blog',
    description:
      'Practical AI strategies for industrial operators covering AI audits, predictive maintenance, Industry 4.0, agentic workflows, and clean data foundations.',
    url: '/resources',
    type: 'website',
    images: [
      {
        url: '/images/blog-hero.webp',
        width: 1200,
        height: 630,
        alt: 'Industrial blog hero for BitDepth AI Consulting resources'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Insights & Resources | BitDepth AI Consulting Blog',
    description: 'Explore BitDepth AI’s resource hub for AI audits, predictive maintenance, Industry 4.0, and automation.',
    images: ['/images/blog-hero.webp']
  }
};

const articles = [
  {
    title: 'AI in Oil & Gas: Real Use Cases and Applications',
    description: 'Explore how AI is improving pipeline monitoring, predictive maintenance, and production optimization in oil & gas.',
    image: '/images/blog-card.webp'
  },
  {
    title: 'Predictive Maintenance: Reducing Downtime with AI',
    description: 'Learn how machine learning models predict equipment failures before they happen.',
    image: '/images/blog-card.webp'
  },
  {
    title: 'Manufacturing AI & Industry 4.0 Explained',
    description: 'A practical look at smart factories, automation, and computer vision systems.',
    image: '/images/blog-card.webp'
  },
  {
    title: 'Why Most AI Projects Fail (And How to Fix It)',
    description: 'Understand the biggest mistakes companies make when adopting AI.',
    image: '/images/blog-card.webp'
  },
  {
    title: 'Data First: Why Clean Data Is Critical for AI',
    description: 'Without structured, reliable data, AI systems fail. Here’s how to fix it.',
    image: '/images/blog-card.webp'
  },
  {
    title: 'AI Automation & Agentic Workflows',
    description: 'How businesses are using AI agents to automate operations and decision-making.',
    image: '/images/blog-card.webp'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is an AI audit and why is it important?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI audit evaluates your operations, data readiness, and automation opportunities so you know where AI will create measurable value before building anything.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does BitDepth AI Consulting help oil and gas companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We support oil and gas operators with predictive maintenance models, pipeline monitoring, production optimization, and AI-enabled decision support across field operations.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does Industry 4.0 mean for manufacturers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Industry 4.0 combines IoT data, computer vision, AI, and automation to create smart factories with real-time visibility and closed-loop optimization.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do most AI projects fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most AI initiatives fail because data is unstructured, success metrics are unclear, or the solution is chosen before the problem is defined. Our audit-first process prevents those issues.'
      }
    },
    {
      '@type': 'Question',
      name: 'What does “data-first” AI implementation look like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Data-first AI means collecting, cleaning, and structuring operational data, establishing governance, and building reliable pipelines before deploying machine learning or automation.'
      }
    }
  ]
};

export default function ResourcesPage() {
  return (
    <PageShell>
      <Script id="resources-faq-schema" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      <section className="section-navy relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,180,216,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.08),transparent_30%)]" />
        <div className="container-shell grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr,1fr] lg:items-center lg:gap-12 lg:py-28">
          <ScrollReveal>
            <p className="industry-pill inline-flex">Resources</p>
            <h1 className="mt-5 max-w-3xl text-[2.4rem] font-extrabold leading-[1.05] text-white sm:mt-6 sm:text-5xl md:text-[62px]">
              AI Insights & Resources
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/72 sm:mt-5 sm:text-lg sm:leading-8">
              Practical insights on AI consulting, predictive maintenance, machine learning, and industrial automation.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Learn how AI is transforming oil &amp; gas, manufacturing, and industrial operations — with real-world strategies and use cases.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[260px] overflow-hidden rounded-[1.6rem] border border-cyan/20 bg-[#061323] shadow-[0_24px_70px_rgba(0,0,0,0.45)] sm:min-h-[360px] sm:rounded-[2rem] lg:min-h-[560px]">
            <Image src="/images/blog-hero.webp" alt="Industrial blog hero visuals" fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/70 via-navy/10 to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-offwhite py-12 md:py-20">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center lg:gap-12">
          <ScrollReveal className="order-2 lg:order-1">
            <p className="eyebrow text-charcoal/60">Featured article</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
              How AI Audits Identify High-Impact Opportunities in Your Business
            </h2>
            <p className="mt-4 text-base leading-7 text-charcoal/80 sm:mt-5 sm:text-lg sm:leading-8">
              Before implementing AI, businesses need to understand where it actually creates value. This guide breaks down how AI audits uncover automation opportunities, data gaps, and ROI-driven use cases.
            </p>
            <div className="mt-7">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.3)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Read Article
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="order-1 relative min-h-[240px] overflow-hidden rounded-[1.6rem] border border-black/5 bg-white shadow-[0_24px_70px_rgba(0,0,0,0.15)] sm:min-h-[320px] sm:rounded-[2rem] lg:order-2 lg:min-h-[520px]">
            <Image src="/images/blog-featured.webp" alt="Featured AI audit article" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/70 via-transparent to-transparent" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-dark py-12 md:py-24">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <p className="eyebrow">Latest insights</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Practical AI Articles for Industrial Leaders
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70 sm:mt-5 sm:text-lg sm:leading-8">
              Curated playbooks on AI strategy, clean data, predictive maintenance, and automation.
            </p>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article) => (
              <ScrollReveal
                key={article.title}
                className="flex flex-col overflow-hidden rounded-[1.5rem] border border-white/12 bg-white/5 shadow-[0_24px_70px_rgba(0,0,0,0.25)]"
              >
                <div className="relative h-52 w-full">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06152B] via-transparent to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-white/72">{article.description}</p>
                  <Link href="/contact" className="mt-6 inline-flex items-center text-sm font-semibold text-cyan hover:text-amber">
                    Read More
                    <span className="ml-2 text-lg">→</span>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 md:py-24">
        <div className="absolute inset-0">
          <Image src="/images/blog-cta.webp" alt="Industrial CTA background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(11,23,43,0.94),rgba(8,18,33,0.78))]" />
        </div>
        <div className="container-shell">
          <ScrollReveal className="relative rounded-[1.5rem] border border-amber/25 bg-[linear-gradient(135deg,rgba(245,158,11,0.15),rgba(255,255,255,0.03))] px-5 py-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:px-8 sm:py-10 md:rounded-[2rem] md:px-12 md:py-14">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber">Start with an audit</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">Start With an AI Audit</h2>
            <p className="mt-4 max-w-3xl text-base text-white/80 sm:mt-5 sm:text-lg">
              Before applying AI, understand where it will deliver real value in your business.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-amber px-6 py-3 text-sm font-semibold text-navy shadow-[0_12px_36px_rgba(245,158,11,0.32)] hover:-translate-y-0.5 hover:bg-amber-400 sm:px-8 sm:py-4 sm:text-base">
                Book Your AI Assessment
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
