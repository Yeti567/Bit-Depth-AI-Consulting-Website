import type { Metadata } from 'next';
import Script from 'next/script';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ArticleHeader, ArticleBody, ArticleCTA } from '@/components/ui/article-layout';
import { buildArticleSchema } from '@/lib/schema';

const TITLE = "You don't have an AI problem. You have a systems problem.";

export const metadata: Metadata = {
  title: `${TITLE} | BitDepth AI`,
  description:
    'Disconnected systems are the real reason AI fails in most businesses. Here is what to fix before you invest in any AI tool or automation.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/resources/you-dont-have-an-ai-problem'
  },
  openGraph: {
    title: `${TITLE} | BitDepth AI`,
    description:
      'Disconnected systems are the real reason AI fails in most businesses. Here is what to fix before you invest in any AI tool or automation.',
    url: 'https://bitdepthaiconsulting.com/resources/you-dont-have-an-ai-problem',
    type: 'article',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/resources-article-1.webp.webp',
        width: 1200,
        height: 630,
        alt: 'Disconnected systems create operational drag that prevents AI success'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: `${TITLE} | BitDepth AI`,
    description:
      'Disconnected systems are the real reason AI fails in most businesses.',
    images: ['/images/resources-article-1.webp.webp']
  }
};

const systemsProblems = [
  {
    title: 'Data spread across disconnected systems',
    description:
      'Your team cannot get a clear picture because information lives in four different places and nobody has the full view. Decisions get made on partial information and nobody realizes it.'
  },
  {
    title: 'Manual processes that create data gaps',
    description:
      'When people re-enter data by hand between systems, errors creep in. Fields get left blank. Formats are inconsistent. Over time the data becomes unreliable and nobody trusts it enough to act on it.'
  },
  {
    title: 'Institutional knowledge that lives in people, not systems',
    description:
      'When the person who knows how something works leaves, the knowledge leaves with them. AI cannot learn from what was never recorded.'
  },
  {
    title: 'Systems that were never designed to work together',
    description:
      'Your quoting tool does not talk to your scheduling tool. Your scheduling tool does not talk to your invoicing tool. Every handoff between systems is a manual step and a potential error.'
  }
];

const pad2 = (n: number) => String(n).padStart(2, '0');

export default function YouDontHaveAnAIProblemPage() {
  return (
    <PageShell>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(
          buildArticleSchema(
            TITLE,
            'https://bitdepthaiconsulting.com/resources/you-dont-have-an-ai-problem',
            'https://bitdepthaiconsulting.com/images/resources-article-1.webp.webp',
            '2026-04-05'
          )
        )}
      </Script>

      <ArticleHeader
        category="Operations"
        readTime="6 min read"
        title={TITLE}
        breadcrumbLabel="You don't have an AI problem"
        imageSrc="/images/resources-article-1.webp.webp"
        imageAlt="Tangled cables connecting multiple disconnected devices, representing fragmented business systems"
      />

      <ArticleBody>
        <ScrollReveal>
          <p className="text-lg text-[var(--color-charcoal)]">
            Every week another business owner tells us they want to implement AI. And every week
            we ask the same question: what does your data look like right now? The answer is almost
            always the same. It lives in four different places. Some of it is in spreadsheets. Some
            of it is in a system nobody fully understands. Some of it exists only in the head of
            the person who has been doing the job for fifteen years. That is not an AI problem.
            That is a systems problem. And until it gets fixed, AI is going to make things worse,
            not better.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">Why AI fails when systems are broken.</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            AI is not magic. It is pattern recognition applied to data. If the data is incomplete,
            inconsistent, or siloed across systems that do not talk to each other, the AI has
            nothing reliable to work with. It will give you confident-sounding answers based on bad
            information. In construction, that means job costing that misses half the costs. In
            trucking, that means dispatch recommendations based on schedules that are already out
            of date. In professional services, that means client insights drawn from records that
            have not been updated in months. Garbage in, garbage out. That rule has not changed
            just because the technology got more sophisticated.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">The four most common systems problems we find.</h2>
          <ol className="mt-8 space-y-7">
            {systemsProblems.map((problem, index) => (
              <li key={problem.title} className="flex gap-5">
                <span className="font-mono text-sm tabular text-[var(--color-cyan)] pt-1">
                  {pad2(index + 1)}
                </span>
                <div>
                  <h3 className="text-[var(--color-navy)]">{problem.title}</h3>
                  <p className="mt-2 text-[var(--color-slate)]">{problem.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">What to fix before you invest in AI.</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            The good news is that fixing your systems foundation does not require a massive
            technology overhaul. In most businesses we audit, the highest-value fixes are simpler
            than the owner expects. Connect the two or three systems that matter most. Standardize
            the data fields that feed your most important decisions. Document the processes that
            currently live only in people&apos;s heads. Build one reliable source of truth for the
            numbers that drive your business. Once that foundation is in place, AI has something to
            work with. The results are dramatically better than anything you would have gotten by
            skipping straight to implementation.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <h2 className="text-[var(--color-navy)]">How to know if you have a systems problem.</h2>
          <p className="mt-5 text-[var(--color-slate)]">
            Ask yourself these questions. Can you pull a report right now that shows you exactly
            how each project or crew performed last month, revenue, costs, and margin, without
            manually compiling it from multiple sources? Can a new employee find the information
            they need to do their job without asking a colleague? If your most experienced person
            left tomorrow, would their knowledge still exist somewhere in your business? If the
            answer to any of these is no, you have a systems problem. And that is the right thing
            to fix first.
          </p>
        </ScrollReveal>
      </ArticleBody>

      <ArticleCTA
        title="The audit starts here."
        body="The first thing we do in every BitDepth engagement is assess the systems and data foundation. We tell you what is solid, what is fragile, and what needs to be addressed before AI will deliver any real value."
      />
    </PageShell>
  );
}
