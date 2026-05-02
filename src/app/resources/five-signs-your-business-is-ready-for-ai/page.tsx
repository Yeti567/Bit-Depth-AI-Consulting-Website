import type { Metadata } from 'next';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ArticleHeader, ArticleBody, ArticleCTA } from '@/components/ui/article-layout';
import { buildArticleSchema } from '@/lib/schema';

const TITLE = 'The 5 signs your business is ready for AI automation.';

export const metadata: Metadata = {
  title: `${TITLE} | BitDepth AI`,
  description:
    'A practical checklist for Canadian business owners evaluating whether their business is ready for AI automation and where to start.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/resources/five-signs-your-business-is-ready-for-ai'
  },
  openGraph: {
    title: `${TITLE} | BitDepth AI`,
    description:
      'A practical checklist for Canadian business owners evaluating whether their business is ready for AI automation.',
    url:
      'https://bitdepthaiconsulting.com/resources/five-signs-your-business-is-ready-for-ai',
    type: 'article',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/resources-article-2.webp.webp',
        width: 1200,
        height: 630,
        alt: 'Business owner evaluating an AI readiness checklist'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: `${TITLE} | BitDepth AI`,
    description:
      'A practical checklist for Canadian business owners evaluating whether their business is ready for AI automation.',
    images: ['/images/resources-article-2.webp.webp']
  }
};

const readinessSigns = [
  {
    title: 'You have at least one process that happens the same way every time.',
    description:
      'AI and automation work best on repetitive, consistent processes. If you can describe a task as a series of steps that always happen in the same order, that task is automatable. If every instance of the task is completely different, it probably is not, at least not yet. The question to ask is: could you write down the steps for this process and have someone else follow them reliably? If yes, a system can probably do it too.'
  },
  {
    title: 'You have data and you mostly trust it.',
    description:
      'You do not need perfect data to start with AI. But you need data that is reasonably complete and consistent. If your records are full of gaps, duplicates, or information that nobody updates, the AI will reflect that back at you in its outputs. A rough test: if you pulled a report from your system right now, would you trust the numbers enough to make a business decision based on them? If yes, you are probably in good shape. If you would want to verify it manually first, you have some data cleanup to do.'
  },
  {
    title: 'You know where you are losing time or money.',
    description:
      'The best AI implementations target a specific, known problem. Not a vague sense that things could be more efficient: a specific process that takes too long, a specific cost that is higher than it should be, a specific function that is consuming more staff time than it deserves. If you can name the problem, we can find a solution. If the problem is just a general feeling that the business should run better, the audit will help you identify the specific targets.'
  },
  {
    title: 'Your team is open to changing how they work.',
    description:
      'Technology is the easy part. Adoption is where implementations fail. If your team is resistant to new tools or if the culture is heavily built around doing things the way they have always been done, even a well-built AI solution will collect dust. This does not mean your team needs to be enthusiastic about AI. It means there needs to be enough openness to try something new and enough leadership support to make the change stick.'
  },
  {
    title: 'You have someone who owns the outcome.',
    description:
      'Every successful AI implementation has a person inside the business who owns it: who cares whether it works, follows up when something goes wrong, and champions adoption with the rest of the team. This does not have to be a technical person. It just has to be someone with enough authority and interest to keep the project moving after the consultant leaves. If nobody in your business owns the outcome, the implementation will drift.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function FiveSignsReadyForAIPage() {
  return (
    <PageShell>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(
          buildArticleSchema(
            TITLE,
            'https://bitdepthaiconsulting.com/resources/five-signs-your-business-is-ready-for-ai',
            'https://bitdepthaiconsulting.com/images/resources-article-2.webp.webp',
            '2026-04-05'
          )
        )}
      </Script>

      <ArticleHeader
        category="Checklist"
        readTime="5 min read"
        title={TITLE}
        breadcrumbLabel="5 signs your business is ready"
        imageSrc="/images/resources-article-2.webp.webp"
        imageAlt="Business owner holding a checklist clipboard in a modern office"
        lead="A lot of businesses want to implement AI. Fewer are actually ready for it. That gap, between wanting AI and being ready for it, is where most first attempts fail. Work through these five signs honestly. If you check all five, you are ready to move. If you are missing one or two, you will know exactly what to fix first."
      />

      <ArticleBody>
        <ScrollReveal>
          <ol className="space-y-10">
            {readinessSigns.map((sign, index) => (
              <li key={sign.title} className="flex gap-5">
                <span className="font-mono text-sm tabular text-[var(--color-cyan)] pt-1">
                  {pad2(index + 1)}
                </span>
                <div>
                  <h2 className="text-[var(--color-navy)]">{sign.title}</h2>
                  <p className="mt-3 text-[var(--color-slate)]">{sign.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>
      </ArticleBody>

      <ArticleCTA
        eyebrow="Not sure how you score"
        title="That is what the audit is for."
        body="We assess your readiness across five operational pillars and tell you honestly where you stand, and what to address before you invest in building anything."
      />
    </PageShell>
  );
}
