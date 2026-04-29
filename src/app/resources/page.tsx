import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { LeadMagnet } from '@/components/ui/lead-magnet';
import { ArticleCard, type ArticleCardData } from '@/components/ui/article-layout';

export const metadata: Metadata = {
  title: 'AI Resources for Canadian Business Owners | Bit Depth AI',
  description:
    'Practical guides and articles to help Canadian business owners understand AI before they invest in it. No hype, no jargon, just straight answers.',
  alternates: { canonical: 'https://bitdepthaiconsulting.com/resources' },
  openGraph: {
    title: 'AI Resources for Canadian Business Owners | Bit Depth AI',
    description:
      'Practical guides and articles to help Canadian business owners understand AI before they invest in it. No hype, no jargon, just straight answers.',
    url: 'https://bitdepthaiconsulting.com/resources',
    type: 'website',
    siteName: 'Bit Depth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'AI resources for Canadian business owners'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Resources for Canadian Business Owners | Bit Depth AI',
    description:
      'Practical guides and articles to help Canadian business owners understand AI before they invest in it.',
    images: ['/images/og-resources.jpg']
  }
};

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
    title: "You don't have an AI problem. You have a systems problem.",
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
              Practical guides for owners who want to understand AI before they invest.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-slate)]">
              No hype. No jargon. Straight answers to the questions Canadian business owners are
              actually asking about AI.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/ai-audit" className="btn-primary">
                Book an AI Audit
              </Link>
              <Link href="#articles" className="btn-outline">
                Browse articles
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal
            index={1}
            className="relative aspect-[4/5] overflow-hidden rounded-md border border-[var(--color-border)]"
          >
            <Image
              src="/images/resources-hero.webp.webp"
              alt="Canadian business owner reading AI consulting articles on a laptop"
              fill
              priority
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Article grid */}
      <section id="articles" className="section-stone section-space section-rule">
        <div className="container-shell">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Featured articles</p>
            <h2 className="mt-6">Start with these.</h2>
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <ScrollReveal key={article.href} index={index}>
                <ArticleCard article={article} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead magnet */}
      <section className="section-offwhite section-space section-rule">
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
