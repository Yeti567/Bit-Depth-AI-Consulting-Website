import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/page-shell';
import { SectionHeading } from '@/components/ui/section-heading';

type ResourceArticle = {
  title: string;
  category: string;
  description: string;
  body: string[];
};

const resourceArticles: Record<string, ResourceArticle> = {
  'how-to-evaluate-ai-use-cases-in-industrial-operations': {
    title: 'How to Evaluate AI Use Cases in Industrial Operations',
    category: 'Guide',
    description: 'A practical framework for identifying AI opportunities with measurable operational value.',
    body: [
      'Most AI projects fail at the use-case selection stage. Teams choose ideas based on novelty instead of operational impact, implementation feasibility, and available data quality.',
      'A practical evaluation process starts by mapping where delay, rework, downtime, or manual reporting currently consume team capacity. These are often the highest-leverage starting points for AI adoption.',
      'BitDepth recommends scoring candidate use cases across business impact, data readiness, implementation effort, and organizational readiness before committing budget.'
    ]
  },
  'what-vendor-neutral-ai-consulting-actually-means': {
    title: 'What Vendor-Neutral AI Consulting Actually Means',
    category: 'Perspective',
    description: 'Why independent advice matters when comparing platforms, pilots, and long-term architecture choices.',
    body: [
      'Vendor-neutral consulting means recommendations are based on fit and outcomes, not software partnerships, referral fees, or platform quotas.',
      'For industrial and mid-market businesses, this matters because platform lock-in can increase cost and reduce flexibility as operations evolve.',
      'An independent advisory model helps leadership evaluate architecture trade-offs, total cost of ownership, and implementation sequencing with clearer decision criteria.'
    ]
  },
  'building-an-ai-roadmap-for-canadian-mid-market-companies': {
    title: 'Building an AI Roadmap for Canadian Mid-Market Companies',
    category: 'Roadmap',
    description: 'How leadership teams can move from curiosity to a disciplined implementation plan.',
    body: [
      'A useful roadmap aligns AI opportunities to business priorities, available operating budget, and internal delivery capacity over time.',
      'Rather than launching multiple pilots at once, most teams get better results by sequencing one to two high-value initiatives with clear success metrics.',
      'Roadmaps should also include governance checkpoints, change-management planning, and post-launch measurement so outcomes remain visible to leadership.'
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(resourceArticles).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = resourceArticles[params.slug];

  if (!article) {
    return {
      title: 'Resource Not Found | BitDepth AI',
      robots: {
        index: false,
        follow: true
      }
    };
  }

  const path = `/resources/${params.slug}`;

  return {
    title: `${article.title} | BitDepth AI`,
    description: article.description,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: `${article.title} | BitDepth AI`,
      description: article.description,
      url: path,
      type: 'article',
      images: [
        {
          url: '/images/Blog Resources Header.webp',
          width: 1200,
          height: 630,
          alt: 'BitDepth AI resources article header image'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | BitDepth AI`,
      description: article.description,
      images: ['/images/Blog Resources Header.webp']
    }
  };
}

export default function ResourceArticlePage({ params }: { params: { slug: string } }) {
  const article = resourceArticles[params.slug];

  if (!article) {
    notFound();
  }

  return (
    <PageShell>
      <section className="section-space bg-white">
        <div className="container-shell max-w-4xl">
          <SectionHeading
            eyebrow={article.category}
            title={article.title}
            description={article.description}
          />

          <article className="mt-10 surface-card space-y-6 p-8 md:p-10">
            {article.body.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-charcoal/82">
                {paragraph}
              </p>
            ))}
          </article>

          <div className="mt-8">
            <Link href="/resources" className="btn-secondary">
              Back to Resources
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
