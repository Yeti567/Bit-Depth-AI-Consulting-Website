import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download } from 'lucide-react';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { LeadMagnet } from '@/components/ui/lead-magnet';
import { ArticleCard, type ArticleCardData } from '@/components/ui/article-layout';
import { CaseStudies } from '@/components/ui/case-studies';

export const metadata: Metadata = {
  title: 'AI Resources for Canadian Trades and Contractors | BitDepth AI',
  description:
    'Plain-language guides, downloads, and case studies on AI for Canadian trades and contractors. No hype. No vendor pitches. Practical thinking on what AI can actually do.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/resources' },
  openGraph: {
    title: 'AI Resources for Canadian Trades and Contractors | BitDepth AI',
    description:
      'Plain-language guides, downloads, and case studies on AI for Canadian trades and contractors.',
    url: 'https://bitdepthaiconsulting.com/resources',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'AI resources for Canadian trades and contractors'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Resources for Canadian Trades and Contractors | BitDepth AI',
    description:
      'Plain-language guides, downloads, and case studies on AI for Canadian trades and contractors.',
    images: ['/images/og-resources.jpg']
  }
};

interface FeaturedDownload {
  title: string;
  description: string;
  format: string;
  href: string;
  cta: string;
  external?: boolean;
}

const featuredDownloads: FeaturedDownload[] = [
  {
    title: 'The AI Readiness Checklist',
    description:
      'A practical 30 point checklist for Canadian business owners evaluating whether AI will actually save them time and money. No fluff, no sales pitch.',
    format: 'PDF · Free',
    href: '#lead-magnet',
    cta: 'Download checklist'
  },
  {
    title: 'Missed Call ROI Calculator',
    description:
      'See how much revenue is going to voicemail right now. Three inputs, one number. Most contractors are surprised by what the math says.',
    format: 'Interactive tool',
    href: '/services/missed-call-text-back#roi-calculator',
    cta: 'Open the calculator'
  },
  {
    title: 'COR Readiness Scorecard',
    description:
      'A short scorecard that tells Ontario contractors how close they are to COR-ready. Operated by COR Pathway, our sister company.',
    format: 'PDF · Free',
    href: '/industries/cor-pathway',
    cta: 'See the scorecard'
  }
];

const articles: ArticleCardData[] = [
  {
    title: 'What can I expect in an AI discovery audit?',
    description:
      'A complete walkthrough of the audit process, from stakeholder interviews to ROI calculations and the 90-day implementation roadmap.',
    image: '/images/ai-discovery-audit-featured.webp.webp',
    href: '/resources/what-can-i-expect-in-an-ai-discovery-audit',
    category: 'Guide',
    readTime: '8 min read'
  },
  {
    title: 'You do not have an AI problem. You have a systems problem.',
    description:
      'How disconnected systems create hidden operational drag, and what to fix before investing in AI tools.',
    image: '/images/resources-article-1.webp.webp',
    href: '/resources/you-dont-have-an-ai-problem',
    category: 'Operations',
    readTime: '6 min read'
  },
  {
    title: 'The 5 signs your business is ready for AI automation',
    description:
      'A practical checklist for owners and operations leaders evaluating where automation will deliver measurable ROI.',
    image: '/images/resources-article-2.webp.webp',
    href: '/resources/five-signs-your-business-is-ready-for-ai',
    category: 'Checklist',
    readTime: '5 min read'
  },
  {
    title: 'What to expect from your first AI consulting engagement',
    description:
      'A step-by-step look at the discovery, roadmap, and implementation process for first-time AI consulting clients.',
    image: '/images/resources-article-3.webp.webp',
    href: '/resources/what-to-expect-from-your-first-ai-consulting-engagement',
    category: 'Playbook',
    readTime: '7 min read'
  }
];

export default function ResourcesPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <ScrollReveal>
            <p className="eyebrow">Resources</p>
            <h1 className="mt-6 max-w-2xl">
              AI resources for Canadian trades and contractors.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              Plain-language guides, downloads, and case studies on AI for Canadian field service
              businesses. No hype. No vendor pitches. Just clear, practical thinking on what AI
              can actually do for a contractor.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#downloads" className="btn-primary">
                See the downloads
              </Link>
              <Link href="#articles" className="btn-outline">
                Browse articles
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]">
            <Image
              src="/images/hero-resources-reading.webp"
              alt="Top-down flat-lay of a wooden desk with notebook, pen, printed report, coffee, and phone"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Featured downloads */}
      <section id="downloads" className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Featured downloads</p>
            <h2 className="mt-6">Three tools to start with.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredDownloads.map((item, index) => (
              <ScrollReveal key={item.title} index={index}>
                <article className="flex h-full flex-col rounded-md border border-[var(--color-border)] bg-white p-7">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4 text-[var(--color-cyan)]" />
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
                      {item.format}
                    </p>
                  </div>
                  <h3 className="mt-4 text-[var(--color-navy)]">{item.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-[var(--color-slate)]">{item.description}</p>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-cyan)] hover:text-[var(--color-cyan-dark)]"
                  >
                    {item.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Articles</p>
            <h2 className="mt-6">Recent reading.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {articles.map((article, index) => (
              <ScrollReveal key={article.href} index={index}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-stone section-space section-rule">
        <div className="container-shell">
          <CaseStudies />
        </div>
      </section>

      {/* Lead magnet */}
      <section id="lead-magnet" className="section-offwhite section-space section-rule">
        <div className="container-shell">
          <LeadMagnet source="resources" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl text-center">
          <ScrollReveal>
            <span className="eyebrow">Not sure where to start</span>
            <h2 className="mt-6 text-white">A discovery call is free and honest.</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/75">
              Book a call and we will tell you honestly whether AI makes sense for your business
              right now.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Book a discovery call
              </Link>
              <Link href="/ai-audit" className="btn-outline">
                Book an AI Audit
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
