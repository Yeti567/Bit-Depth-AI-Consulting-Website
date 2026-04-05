import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildArticleSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "You Don't Have an AI Problem — You Have a Systems Problem | BitDepth AI",
  description:
    'Disconnected systems are the real reason AI fails in most businesses. Here is what to fix before you invest in any AI tool or automation.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/resources/you-dont-have-an-ai-problem'
  },
  openGraph: {
    title: "You Don't Have an AI Problem — You Have a Systems Problem | BitDepth AI",
    description:
      'Disconnected systems are the real reason AI fails in most businesses. Here is what to fix before you invest in any AI tool or automation.',
    url: 'https://bitdepthaiconsulting.com/resources/you-dont-have-an-ai-problem',
    type: 'article',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/resources-article-1.webp',
        width: 1200,
        height: 630,
        alt: 'Disconnected systems create operational drag that prevents AI success'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: "You Don't Have an AI Problem — You Have a Systems Problem | BitDepth AI",
    description:
      'Disconnected systems are the real reason AI fails in most businesses. Here is what to fix before you invest in any AI tool or automation.',
    images: ['/images/resources-article-1.webp']
  }
};

const systemsProblems = [
  {
    title: 'Data spread across disconnected systems',
    description: 'Your team cannot get a clear picture because information lives in four different places and nobody has the full view. Decisions get made on partial information and nobody realizes it.'
  },
  {
    title: 'Manual processes that create data gaps',
    description: 'When people re-enter data by hand between systems, errors creep in. Fields get left blank. Formats are inconsistent. Over time the data becomes unreliable and nobody trusts it enough to act on it.'
  },
  {
    title: 'Institutional knowledge that lives in people not systems',
    description: 'When the person who knows how something works leaves, the knowledge leaves with them. AI cannot learn from what was never recorded.'
  },
  {
    title: 'Systems that were never designed to work together',
    description: 'Your quoting tool does not talk to your scheduling tool. Your scheduling tool does not talk to your invoicing tool. Every handoff between systems is a manual step and a potential error.'
  }
];

export default function YouDontHaveAnAIProblemPage() {
  return (
    <PageShell>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(buildArticleSchema(
          "You Don't Have an AI Problem — You Have a Systems Problem",
          'https://bitdepthaiconsulting.com/resources/you-dont-have-an-ai-problem',
          'https://bitdepthaiconsulting.com/images/resources-article-1.webp'
        ))}
      </Script>
      <section className="section-navy dot-grid section-space">
        <div className="container-shell">
          <ScrollReveal className="max-w-4xl">
            <nav className="text-sm text-white/60">
              <Link href="/" className="hover:text-cyan">Home</Link>
              <span className="mx-2">{'>'}</span>
              <Link href="/resources" className="hover:text-cyan">Resources</Link>
              <span className="mx-2">{'>'}</span>
              <span className="text-white">You Don&apos;t Have an AI Problem</span>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <span className="inline-flex rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">Operations</span>
              <span className="text-sm text-white/60">6 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              You Don&apos;t Have an AI Problem — You Have a Systems Problem
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <div className="relative mb-10 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/resources-article-1.webp"
                alt="Tangled cables connecting multiple disconnected devices representing fragmented business systems"
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="text-lg leading-relaxed text-[var(--color-slate)]">
              Every week another business owner tells us they want to implement AI. And every week we ask the same question: what does your data look like right now? The answer is almost always the same. It lives in four different places. Some of it is in spreadsheets. Some of it is in a system nobody fully understands. Some of it exists only in the head of the person who has been doing the job for fifteen years. That is not an AI problem. That is a systems problem. And until it gets fixed, AI is going to make things worse, not better.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">Why AI Fails When Systems Are Broken</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              AI is not magic. It is pattern recognition applied to data. If the data is incomplete, inconsistent, or siloed across systems that do not talk to each other, the AI has nothing reliable to work with. It will give you confident-sounding answers based on bad information. In construction, that means job costing that misses half the costs. In trucking, that means dispatch recommendations based on schedules that are already out of date. In professional services, that means client insights drawn from records that have not been updated in months. Garbage in, garbage out. That rule has not changed just because the technology got more sophisticated.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">The Four Most Common Systems Problems We Find</h2>
            <div className="mt-6 space-y-6">
              {systemsProblems.map((problem, index) => (
                <div key={problem.title} className="card-light p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan/10 text-sm font-bold text-cyan">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-[var(--color-navy)]">{problem.title}</h3>
                      <p className="mt-2 text-[var(--color-slate)]">{problem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">What to Fix Before You Invest in AI</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              The good news is that fixing your systems foundation does not require a massive technology overhaul. In most businesses we audit, the highest-value fixes are simpler than the owner expects. Connect the two or three systems that matter most. Standardize the data fields that feed your most important decisions. Document the processes that currently live only in people&apos;s heads. Build one reliable source of truth for the numbers that drive your business. Once that foundation is in place, AI has something to work with. And the results are dramatically better than anything you would have gotten by skipping straight to implementation.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <h2 className="text-2xl font-extrabold text-[var(--color-navy)] md:text-3xl">How to Know If You Have a Systems Problem</h2>
            <p className="mt-5 text-[var(--color-slate)] leading-relaxed">
              Ask yourself these questions. Can you pull a report right now that shows you exactly how each project or crew performed last month — revenue, costs, and margin — without manually compiling it from multiple sources? Can a new employee find the information they need to do their job without asking a colleague? If your most experienced person left tomorrow, would their knowledge still exist somewhere in your business? If the answer to any of these is no, you have a systems problem. And that is the right thing to fix first.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">The Audit Starts Here</h2>
            <p className="mt-5 text-white/74">
              The first thing we do in every BitDepth engagement is assess the systems and data foundation. We tell you what is solid, what is fragile, and what needs to be addressed before AI will deliver any real value. If you are not sure where your business stands, that is exactly what the audit is for.
            </p>
            <Link href="/ai-audit" className="btn-primary mt-8">
              Book Your AI Audit
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
