import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildArticleSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'The 5 Signs Your Business Is Ready for AI Automation | BitDepth AI',
  description:
    'A practical checklist for Canadian business owners evaluating whether their business is ready for AI automation and where to start.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/resources/five-signs-your-business-is-ready-for-ai'
  },
  openGraph: {
    title: 'The 5 Signs Your Business Is Ready for AI Automation | BitDepth AI',
    description:
      'A practical checklist for Canadian business owners evaluating whether their business is ready for AI automation and where to start.',
    url: 'https://bitdepthaiconsulting.com/resources/five-signs-your-business-is-ready-for-ai',
    type: 'article',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/resources-article-2.webp',
        width: 1200,
        height: 630,
        alt: 'Business owner evaluating AI readiness checklist'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'The 5 Signs Your Business Is Ready for AI Automation | BitDepth AI',
    description:
      'A practical checklist for Canadian business owners evaluating whether their business is ready for AI automation and where to start.',
    images: ['/images/resources-article-2.webp']
  }
};

const readinessSigns = [
  {
    title: 'You have at least one process that happens the same way every time',
    description: 'AI and automation work best on repetitive, consistent processes. If you can describe a task as a series of steps that always happen in the same order, that task is automatable. If every instance of the task is completely different, it probably is not. at least not yet. The question to ask is: could you write down the steps for this process and have someone else follow them reliably? If yes, a system can probably do it too.'
  },
  {
    title: 'You have data and you mostly trust it',
    description: 'You do not need perfect data to start with AI. But you need data that is reasonably complete and consistent. If your records are full of gaps, duplicates, or information that nobody updates, the AI will reflect that back at you in its outputs. A rough test: if you pulled a report from your system right now, would you trust the numbers enough to make a business decision based on them? If yes, you are probably in good shape. If you would want to verify it manually first, you have some data cleanup to do.'
  },
  {
    title: 'You know where you are losing time or money',
    description: 'The best AI implementations target a specific, known problem. Not a vague sense that things could be more efficient. a specific process that takes too long, a specific cost that is higher than it should be, a specific function that is consuming more staff time than it deserves. If you can name the problem, we can find a solution. If the problem is just a general feeling that the business should run better, the audit will help you identify the specific targets.'
  },
  {
    title: 'Your team is open to changing how they work',
    description: 'Technology is the easy part. Adoption is where implementations fail. If your team is resistant to new tools or if the culture is heavily built around doing things the way they have always been done, even a well-built AI solution will collect dust. This does not mean your team needs to be enthusiastic about AI. It means there needs to be enough openness to try something new and enough leadership support to make the change stick.'
  },
  {
    title: 'You have someone who owns the outcome',
    description: 'Every successful AI implementation has a person inside the business who owns it who cares whether it works, follows up when something goes wrong, and champions adoption with the rest of the team. This does not have to be a technical person. It just has to be someone with enough authority and interest to keep the project moving after the consultant leaves. If nobody in your business owns the outcome, the implementation will drift.'
  }
];

export default function FiveSignsReadyForAIPage() {
  return (
    <PageShell>
      <Script id="article-schema" type="application/ld+json">
        {JSON.stringify(buildArticleSchema(
          'The 5 Signs Your Business Is Ready for AI Automation',
          'https://bitdepthaiconsulting.com/resources/five-signs-your-business-is-ready-for-ai',
          'https://bitdepthaiconsulting.com/images/resources-article-2.webp'
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
              <span className="text-white">The 5 Signs Your Business Is Ready for AI Automation</span>
            </nav>
            <div className="mt-6 flex items-center gap-4">
              <span className="inline-flex rounded-lg border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-semibold text-cyan">Checklist</span>
              <span className="text-sm text-white/60">5 min read</span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold text-white md:text-5xl">
              The 5 Signs Your Business Is Ready for AI Automation
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-offwhite section-space">
        <div className="container-shell max-w-4xl">
          <ScrollReveal>
            <div className="relative mb-10 overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/resources-article-2.webp.webp"
                alt="Business owner holding checklist clipboard in modern office setting"
                width={1200}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            <p className="text-lg leading-relaxed text-[var(--color-slate)]">
              A lot of businesses want to implement AI. Fewer are actually ready for it. That gap. between wanting AI and being ready for it is where most first attempts fail. This checklist is not about whether AI is right for your industry. It is about whether your business specifically is in a position to get real value from it right now. Work through these five signs honestly. If you check all five, you are ready to move. If you are missing one or two, you will know exactly what to fix first.
            </p>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <div className="space-y-6">
              {readinessSigns.map((sign, index) => (
                <div key={sign.title} className="card-light p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan text-base font-bold text-[var(--color-navy)]">
                      {index + 1}
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-[var(--color-navy)]">{sign.title}</h2>
                      <p className="mt-3 text-[var(--color-slate)] leading-relaxed">{sign.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl">Not Sure How You Score?</h2>
            <p className="mt-5 text-white/74">
              That is what the audit is for. We assess your readiness across five operational pillars and tell you honestly where you stand. and what to address before you invest in building anything.
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
