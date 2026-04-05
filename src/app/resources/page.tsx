import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { LeadMagnet } from '@/components/ui/lead-magnet';

export const metadata: Metadata = {
  title: 'AI Resources for Canadian Business Owners | BitDepth AI',
  description:
    'Practical guides and articles to help Canadian business owners understand AI before they invest in it. No hype, no jargon just straight answers.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/resources'
  },
  openGraph: {
    title: 'AI Resources for Canadian Business Owners | BitDepth AI',
    description:
      'Practical guides and articles to help Canadian business owners understand AI before they invest in it. No hype, no jargon just straight answers.',
    url: 'https://bitdepthaiconsulting.com/resources',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-resources.webp',
        width: 1200,
        height: 630,
        alt: 'AI resources for Canadian business owners'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Resources for Canadian Business Owners | BitDepth AI',
    description:
      'Practical guides and articles to help Canadian business owners understand AI before they invest in it. No hype, no jargon just straight answers.',
    images: ['/images/og-resources.webp']
  }
};

const articles = [
  {
    title: "You Don't Have an AI Problem you Have a Systems Problem",
    description: 'How disconnected systems create hidden operational drag and what to fix before investing in AI tools.',
    image: '/images/resources-article-1.webp',
    href: '/resources/you-dont-have-an-ai-problem',
    category: 'Operations',
    readTime: '6 min read'
  },
  {
    title: 'The 5 Signs Your Business Is Ready for AI Automation',
    description: 'A practical checklist for owners and operations leaders evaluating where automation will deliver measurable ROI.',
    image: '/images/resources-article-2.webp',
    href: '/resources/five-signs-your-business-is-ready-for-ai',
    category: 'Checklist',
    readTime: '5 min read'
  },
  {
    title: 'What to Expect From Your First AI Consulting Engagement',
    description: 'A step-by-step look at the discovery, roadmap, and implementation process for first-time AI consulting clients.',
    image: '/images/resources-article-3.webp',
    href: '/resources/what-to-expect-from-your-first-ai-consulting-engagement',
    category: 'Playbook',
    readTime: '7 min read'
  }
];

export default function ResourcesPage() {
  return (
    <PageShell>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">
              Practical Resources for Business Owners Who Want to Understand AI Before They Invest in It
            </h1>
            <p className="mt-5 text-lg text-white/74">
              No hype. No jargon. Just straight answers to the questions Canadian business owners are actually asking about AI.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[340px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/resources-hero.webp" alt="Canadian business owner reading AI consulting articles on laptop with coffee and notepad" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">Featured Articles</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.map((article, index) => (
              <ScrollReveal key={article.title} index={index} className="card-light overflow-hidden p-0">
                <div className="relative h-48 w-full">
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="inline-flex rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">{article.category}</span>
                  <h3 className="mt-4 text-xl font-bold text-[var(--color-navy)]">{article.title}</h3>
                  <p className="mt-3 text-sm text-[var(--color-slate)]">{article.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-[var(--color-slate)]">{article.readTime}</span>
                    <Link href={article.href} className="btn-primary text-sm px-4 py-2">
                      Read Article
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal className="mt-12">
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/resources-supporting.webp"
                alt="Clean modern desk with laptop showing article page, coffee mug, and notepad"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-charcoal section-space">
        <div className="container-shell">
          <LeadMagnet source="resources" />
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Not Sure Where to Start?</h2>
            <p className="mt-5 text-white/74">
              Book a free discovery call and we will tell you honestly whether AI makes sense for your business right now.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
