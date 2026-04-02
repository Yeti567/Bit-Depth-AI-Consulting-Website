import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'AI Resources for Canadian Business Leaders | BitDepth AI',
  description:
    'Practical guides, articles, and tools to help Canadian SMB owners understand AI, identify opportunities, and make better technology decisions.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/resources'
  },
  openGraph: {
    title: 'AI Resources for Canadian Businesses | BitDepth AI Consulting',
    description:
      'Free guides and articles from BitDepth on practical AI for Canadian SMBs — including what to expect from an AI audit, signs your business is ready for automation, and more.',
    url: 'https://bitdepthaiconsulting.com/resources',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    images: [
      {
        url: '/images/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting resources social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Resources for Canadian Businesses | BitDepth AI Consulting',
    description:
      'Free guides and articles from BitDepth on practical AI for Canadian SMBs — including what to expect from an AI audit, signs your business is ready for automation, and more.',
    images: ['/images/og-resources.jpg']
  }
};

const articles = [
  {
    title: 'What Is an AI Discovery Audit?',
    description:
      'Learn what an AI discovery audit includes, how long it takes, and what roadmap you should expect at the end.',
    image: '/images/What is a discovery audit.webp',
    href: '/resources/what-is-an-ai-discovery-audit',
    category: 'Guide',
    readTime: '8 min read'
  },
  {
    title: "You Don\'t Have an AI Problem — You Have a Systems Problem",
    description:
      'How disconnected systems create hidden operational drag and what to fix before investing in AI tools.',
    image: '/images/Data Integrity Blog post_2.webp',
    href: '/resources',
    category: 'Operations',
    readTime: '6 min read'
  },
  {
    title: 'The 5 Signs Your Business Is Ready for AI Automation',
    description: 'A practical checklist for owners and operations leaders evaluating where automation will deliver measurable ROI.',
    image: '/images/blog-card.webp',
    href: '/resources',
    category: 'Checklist',
    readTime: '5 min read'
  },
  {
    title: 'What to Expect From Your First AI Consulting Engagement',
    description: 'A step-by-step look at the discovery, roadmap, and implementation process for first-time AI consulting clients.',
    image: '/images/blog-featured.webp',
    href: '/resources',
    category: 'Playbook',
    readTime: '7 min read'
  }
];

export default function ResourcesPage() {
  return (
    <PageShell>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-center lg:gap-12">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold text-white md:text-6xl">
              Resources for Canadian Business Leaders
            </h1>
            <p className="mt-5 text-lg text-white/74">
              Practical guides, articles, and tools to help you understand AI and make better decisions for your business.
            </p>
          </ScrollReveal>
          <ScrollReveal index={1} className="relative min-h-[300px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
            <Image src="/images/resources-hero.png" alt="Business professional reviewing practical AI guide" fill priority className="object-cover" />
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="card-light grid gap-8 overflow-hidden p-0 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <div className="p-6 sm:p-8">
              <p className="eyebrow">Featured Resource</p>
              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">What Is an AI Discovery Audit?</h2>
              <p className="mt-4 text-[var(--color-slate)]">
                A complete guide to what happens in a discovery audit, what you receive, and how it helps you avoid wasting your first AI budget.
              </p>
              <Link href="/resources/what-is-an-ai-discovery-audit" className="btn-primary mt-7">
                Read More
              </Link>
            </div>
            <div className="relative min-h-[260px] w-full lg:min-h-[360px]">
              <Image src="/images/What is a discovery audit.webp" alt="Featured AI discovery audit article" fill className="object-cover" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space pt-0">
        <div className="container-shell">
          <ScrollReveal className="max-w-3xl">
            <h2 className="text-3xl font-extrabold md:text-5xl">Resource Library</h2>
          </ScrollReveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {articles.slice(1).map((article, index) => (
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
                    <Link href={article.href} className="text-sm font-semibold text-cyan">
                      Read →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
