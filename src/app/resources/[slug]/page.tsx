import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import Script from 'next/script';
import { ArticleHeader, ArticleBody, ArticleCTA } from '@/components/ui/article-layout';
import { buildArticleSchema } from '@/lib/schema';
import { BreadcrumbSchema, buildResourceBreadcrumbs } from '@/components/ui/breadcrumb-schema';

 type ResourceContentBlock =
  | {
      type: 'heading';
      value: string;
    }
  | {
      type: 'heading3';
      value: string;
    }
  | {
      type: 'heading4';
      value: string;
    }
  | {
      type: 'paragraph';
      value: string;
    };

type ResourceArticle = {
  title: string;
  seoTitle?: string;
  keywords?: string[];
  category: string;
  description: string;
  image: string;
  imageAlt: string;
  body: ResourceContentBlock[];
};

const resourceArticles: Record<string, ResourceArticle> = {
  'is-your-data-ready-for-ai': {
    title: "Is Your Data Ready for AI? Here's How to Fix It",
    seoTitle: "Is Your Data Ready for AI? Here's How to Fix It",
    category: 'Data Strategy',
    description:
      'Is your data ready for AI? Learn why data integrity matters and follow our step-by-step roadmap to build a reliable AI-ready data foundation.',
    image: '/images/Data Integrity Blog post_2.webp',
    imageAlt: 'Data integrity dashboard and connected systems for AI-ready data foundations',
    body: [
      {
        type: 'paragraph',
        value:
          'Data integrity is the foundation of every successful AI strategy, yet it is often the most overlooked part of implementation. Most businesses rush to deploy AI tools without first asking a critical question: is our data actually ready?'
      },
      {
        type: 'paragraph',
        value:
          'If your data is incomplete, inconsistent, or trapped in disconnected systems, AI produces unreliable outputs no matter how advanced the model is. This guide explains what data integrity means, why it matters, and how to build a reliable AI-ready data foundation step by step.'
      },
      { type: 'heading', value: 'Why Data Integrity Is the Starting Point for Any AI Initiative' },
      {
        type: 'paragraph',
        value:
          'There is a well-known principle in technology: garbage in, garbage out. For AI systems, this principle is non-negotiable. When data quality is poor, model quality drops with it.'
      },
      {
        type: 'paragraph',
        value:
          'When an AI system is fed fragmented or outdated data, it does not just return weaker answers. It can return confidently wrong answers. In many cases, this is a data integrity problem, not a model problem.'
      },
      {
        type: 'paragraph',
        value:
          'In mid-market businesses, the pattern is familiar: production data in one system, maintenance records in another, financial data in a third, and critical business data in spreadsheets. This creates data silos and blocks enterprise-wide visibility.'
      },
      {
        type: 'paragraph',
        value:
          'The fix is not a full technology reset. It is a structured data integrity roadmap executed in the right sequence.'
      },
      { type: 'heading', value: 'The Step-by-Step Data Integrity Roadmap' },
      {
        type: 'paragraph',
        value:
          'Building AI-ready data is an operational process, not a one-time cleanup. This is the framework we use with clients at BitDepth AI Consulting.'
      },
      { type: 'heading', value: 'Step 1: Audit Your Existing Data' },
      {
        type: 'paragraph',
        value:
          'Start with a data audit that maps every source of business data across CRMs, ERPs, cloud tools, spreadsheets, and manual records. Identify where data lives, who owns it, how current it is, and how it is structured.'
      },
      { type: 'heading3', value: 'What to check during a data audit' },
      { type: 'paragraph', value: '• Duplicate records across systems' },
      { type: 'paragraph', value: '• Missing or incomplete fields' },
      { type: 'paragraph', value: '• Inconsistent formats for dates, names, and units' },
      { type: 'paragraph', value: '• Outdated records that no longer reflect current operations' },
      { type: 'paragraph', value: '• Systems that cannot exchange data cleanly' },
      { type: 'heading', value: 'Step 2: Standardize and Clean Your Data' },
      {
        type: 'paragraph',
        value:
          'After the audit, standardize and clean the data. Remove duplicates, resolve formatting conflicts, correct obvious errors, and complete high-priority missing fields.'
      },
      {
        type: 'paragraph',
        value:
          'Not all missing values carry the same risk. Some can be tolerated, but gaps in high-impact operational data must be fixed before AI models can be trusted.'
      },
      { type: 'heading', value: 'Step 3: Break Down Data Silos' },
      {
        type: 'paragraph',
        value:
          'Data silos are isolated data sets that teams cannot easily access outside their own department. They are one of the biggest blockers to AI-ready data.'
      },
      {
        type: 'paragraph',
        value:
          'Modern lakehouse and integration approaches allow businesses to unify sources without forcing rigid, high-friction migrations. This gives AI systems a full operational view instead of fragmented inputs.'
      },
      { type: 'heading', value: 'Step 4: Validate and Test Data Continuously' },
      {
        type: 'paragraph',
        value:
          'Data integrity is ongoing. After cleanup and integration, implement recurring validation checks to detect drift, new duplicates, broken pipeline inputs, and unusual values before they impact decisions.'
      },
      { type: 'heading4', value: 'Core validation checks' },
      { type: 'paragraph', value: '• Freshness checks on critical tables and feeds' },
      { type: 'paragraph', value: '• Integrity checks for nulls, ranges, and schema changes' },
      { type: 'paragraph', value: '• Reconciliation checks between source systems and reporting layers' },
      { type: 'heading', value: 'Step 5: Govern Data with Clear Ownership' },
      {
        type: 'paragraph',
        value:
          'Governance means assigning clear ownership for data quality, completeness, and timeliness. When nobody owns a dataset, quality degrades quickly.'
      },
      {
        type: 'paragraph',
        value:
          'Strong data governance also supports compliance. If your business handles customer or operationally sensitive data, governance reduces legal and operational risk while improving trust in AI outputs.'
      },
      { type: 'heading', value: 'What Strong Data Integrity Makes Possible' },
      {
        type: 'paragraph',
        value:
          'When data integrity is in place, AI moves from experimentation to reliable execution. Predictive tools become accurate, automation runs with less manual correction, and reporting reflects current operational reality.'
      },
      {
        type: 'paragraph',
        value:
          'Clean, connected data also creates alignment. Leadership, operations, and finance make decisions from the same source of truth, which improves speed and confidence.'
      },
      { type: 'heading', value: 'Frequently Asked Questions About Data Integrity' },
      { type: 'heading3', value: 'What is data integrity in simple terms?' },
      {
        type: 'paragraph',
        value:
          'Data integrity means your business data is accurate, complete, consistent, and up to date across systems, so teams and AI tools can trust it.'
      },
      { type: 'heading3', value: 'How do I know if my business has a data integrity problem?' },
      {
        type: 'paragraph',
        value:
          'Common warning signs include conflicting reports, duplicate customer or vendor records, constant manual fixes, and inconsistent AI outputs.'
      },
      { type: 'heading3', value: 'How long does it take to fix data integrity issues?' },
      {
        type: 'paragraph',
        value:
          'For many mid-market teams, a focused data audit and first cleanup phase takes about two to six weeks. Governance and monitoring continue long term.'
      },
      { type: 'heading3', value: 'Do I need new software to improve data integrity?' },
      {
        type: 'paragraph',
        value:
          'Not always. Many gains come from better processes, better standards, and stronger integration between tools you already use.'
      },
      { type: 'heading3', value: 'Is data integrity only important for large enterprises?' },
      {
        type: 'paragraph',
        value:
          'No. Data integrity is critical at every size, and mid-market businesses often feel the pain fastest because teams have less margin for reporting errors and process rework.'
      },
      { type: 'heading', value: 'Start Your Data Integrity Journey Today' },
      {
        type: 'paragraph',
        value:
          'The businesses that get the most from AI are not always the ones with the biggest budgets. They are the ones that build the right foundation first. Data integrity is that foundation.'
      },
      {
        type: 'paragraph',
        value:
          'At BitDepth AI Consulting, we help Canadian businesses build AI-ready data foundations through practical data audits, data governance, and integration planning. If you want to understand how ready your data is, contact us and let us start the conversation.'
      }
    ]
  },
  'what-is-an-ai-discovery-audit': {
    title: 'What Is an AI Discovery Audit?',
    seoTitle: 'What Is an AI Discovery Audit? A Complete Guide | BitDepth AI Consulting',
    keywords: [
      'AI discovery audit',
      'AI audit',
      'AI consulting',
      'AI readiness assessment',
      'AI implementation',
      'AI strategy',
      'AI for oil and gas',
      'AI for manufacturing'
    ],
    category: 'AI Audit Guide',
    description:
      'Discover exactly what happens during an AI discovery audit, from stakeholder interviews to your AI roadmap. Learn the process, timeline, cost, and what you get at the end.',
    image: '/images/What is a discovery audit.webp',
    imageAlt: 'AI discovery audit planning session with data and workflow analysis',
    body: [
      { type: 'heading', value: 'A Complete Guide to What Is Involved, What You Get, and Why It Matters' },
      {
        type: 'paragraph',
        value:
          'Most business owners know they should be using AI, but they do not know where to start. Which processes should be automated? Is their data good enough? What will it cost? How long before results show up?'
      },
      {
        type: 'paragraph',
        value:
          'That is exactly what an AI discovery audit answers. It gives you a clear picture of where you are today and a practical roadmap for where AI can create value.'
      },
      {
        type: 'paragraph',
        value:
          'In this guide, we break down what happens during the audit, what you receive at the end, how long it takes, and what it costs.'
      },
      { type: 'heading', value: 'What Is an AI Discovery Audit?' },
      {
        type: 'paragraph',
        value:
          'An AI discovery audit is a short consulting engagement, usually 5 to 15 business days, where an AI consultant studies your business in detail to find where AI can save time, reduce costs, or improve decisions.'
      },
      {
        type: 'paragraph',
        value:
          'Think of it as a health check for your operations. Just like a doctor checks your vitals before treatment, an AI consultant reviews your processes before recommending technology.'
      },
      {
        type: 'paragraph',
        value:
          'At BitDepth, we use an audit-first approach. We do not push software first. We study your business and explain what will help, what will not, and what return you can expect.'
      },
      { type: 'heading', value: 'Who Is an AI Audit For?' },
      {
        type: 'paragraph',
        value:
          'An AI discovery audit is a strong fit for small and mid-sized businesses that want to use AI but need a clear starting point.'
      },
      { type: 'heading3', value: 'Ideal business profiles' },
      { type: 'paragraph', value: '• Businesses with 15 to 200 employees that need practical AI direction' },
      { type: 'paragraph', value: '• Oil and gas teams focused on downtime reduction, reporting automation, and field data management' },
      { type: 'paragraph', value: '• Manufacturing teams focused on defect reduction, maintenance improvement, and supply chain speed' },
      { type: 'paragraph', value: '• Owners who want an unbiased recommendation before buying tools' },
      {
        type: 'paragraph',
        value:
          'You do not need to be a tech company. You do not need a data science team. The audit is built for real operational businesses.'
      },
      { type: 'heading', value: 'What Happens During an AI Discovery Audit?' },
      {
        type: 'paragraph',
        value:
          'The process follows four structured phases: stakeholder interviews, technology stack review, process mapping, and AI readiness scoring.'
      },
      { type: 'heading', value: 'Phase 1: Stakeholder Interviews' },
      {
        type: 'paragraph',
        value:
          'We start by interviewing leaders, managers, and frontline staff to understand how work really happens, not just how it appears on a chart.'
      },
      { type: 'paragraph', value: 'A standard audit includes 4 to 6 interviews. A deep-dive audit includes 8 to 12 interviews. Each session usually runs 30 to 45 minutes.' },
      { type: 'heading3', value: 'Common interview questions' },
      { type: 'paragraph', value: '• Where is your team spending the most time on repetitive tasks?' },
      { type: 'paragraph', value: '• Which processes break down most often?' },
      { type: 'paragraph', value: '• What tools does your team rely on daily?' },
      { type: 'paragraph', value: '• Where does information get duplicated or lost?' },
      { type: 'paragraph', value: '• If you could automate one thing in 90 days, what would it be?' },
      {
        type: 'paragraph',
        value:
          'This dual perspective matters. Leadership sees strategy, while frontline teams see friction. A good audit captures both.'
      },
      { type: 'heading', value: 'Phase 2: Technology Stack Review' },
      {
        type: 'paragraph',
        value:
          'Next, we review your software tools, data systems, and integrations to see what you have, what connects, and where the gaps are.'
      },
      { type: 'heading3', value: 'What this review includes' },
      { type: 'paragraph', value: '• Core systems like ERP, CRM, SCADA, and field tools' },
      { type: 'paragraph', value: '• Data storage and data quality, including access and consistency' },
      { type: 'paragraph', value: '• Manual work outside systems, such as spreadsheets and email chains' },
      { type: 'paragraph', value: '• Shadow AI tools already in use without formal process' },
      {
        type: 'paragraph',
        value:
          'Data readiness is one of the biggest cost drivers in AI implementation. Finding issues early prevents expensive mistakes later.'
      },
      { type: 'heading', value: 'Phase 3: Process Mapping' },
      {
        type: 'paragraph',
        value:
          'We map your high-value workflows in detail. Standard audits usually map 6 to 10 processes. Deep-dive audits map 10 to 20.'
      },
      { type: 'heading3', value: 'For each process, we capture' },
      { type: 'paragraph', value: '• Every step and who performs it' },
      { type: 'paragraph', value: '• How long each step takes' },
      { type: 'paragraph', value: '• Where delays, errors, and bottlenecks appear' },
      { type: 'paragraph', value: '• Where AI can automate, assist, or improve outcomes' },
      {
        type: 'paragraph',
        value:
          'This is where the opportunity becomes clear. A three-hour daily manual process may be reduced to minutes with the right automation or AI workflow.'
      },
      { type: 'heading', value: 'Phase 4: AI Readiness Scorecard and Opportunity Analysis' },
      {
        type: 'paragraph',
        value:
          'After discovery, we score your organization across five readiness pillars and identify priority use cases with ROI estimates.'
      },
      { type: 'heading3', value: 'AI readiness pillars' },
      { type: 'paragraph', value: '• Data quality' },
      { type: 'paragraph', value: '• Technology infrastructure' },
      { type: 'paragraph', value: '• Process maturity' },
      { type: 'paragraph', value: '• Team readiness' },
      { type: 'paragraph', value: '• Leadership alignment' },
      {
        type: 'paragraph',
        value:
          'The scorecard removes guesswork. It shows where you are strong, where you need work, and what to do first.'
      },
      { type: 'heading', value: 'What Do You Get at the End?' },
      {
        type: 'paragraph',
        value:
          'At the end of the audit, you receive a full report and presentation with clear findings, opportunities, and execution steps.'
      },
      { type: 'heading3', value: 'Your deliverables include' },
      { type: 'paragraph', value: '• Technology stack inventory and integration map' },
      { type: 'paragraph', value: '• Data readiness assessment across key business areas' },
      { type: 'paragraph', value: '• Documented workflows with baseline effort and time' },
      { type: 'paragraph', value: '• AI readiness scorecard across all five pillars' },
      { type: 'paragraph', value: '• Prioritized AI opportunities, from quick wins to larger initiatives' },
      { type: 'paragraph', value: '• ROI estimates for top use cases' },
      { type: 'paragraph', value: '• Multi-phase roadmap for 0 to 3, 3 to 12, and 12 to 24 months' },
      { type: 'paragraph', value: '• Vendor and technology guidance if you decide to implement' },
      {
        type: 'paragraph',
        value:
          'The roadmap is the core asset. It gives you a practical sequence of actions, with costs and expected outcomes tied to each phase.'
      },
      {
        type: 'paragraph',
        value:
          'At BitDepth, part of the audit cost is credited toward implementation when you move forward with us, so you do not pay twice for discovery.'
      },
      { type: 'heading', value: 'How Long Does an AI Discovery Audit Take?' },
      {
        type: 'paragraph',
        value:
          'Timeline depends on business complexity. We typically offer three tiers.'
      },
      { type: 'heading3', value: 'Quick Scan (2 to 3 Business Days), $1,500 to $3,000' },
      {
        type: 'paragraph',
        value:
          'Best for small teams with 1 to 2 core systems. Covers key processes and delivers a basic readiness score plus recommendations.'
      },
      { type: 'heading3', value: 'Standard Audit (5 to 8 Business Days), $5,000 to $7,500' },
      {
        type: 'paragraph',
        value:
          'Our most common option. Includes 4 to 6 interviews, full stack review, 6 to 10 mapped processes, ROI analysis, and a complete roadmap.'
      },
      { type: 'heading3', value: 'Deep-Dive Roadmap (10 to 15 Business Days), $8,000 to $15,000+' },
      {
        type: 'paragraph',
        value:
          'Designed for larger or multi-department operations. Includes 8 to 12 interviews, deeper data analysis, 10 to 20 mapped processes, and a detailed multi-phase roadmap.'
      },
      { type: 'heading', value: 'Frequently Asked Questions About AI Discovery Audits' },
      { type: 'heading3', value: 'Do I need to be a tech company to benefit from an AI audit?' },
      {
        type: 'paragraph',
        value:
          'No. Most of our clients are in oil and gas, manufacturing, and operational businesses. You do not need a software team to benefit.'
      },
      { type: 'heading3', value: 'What if my data is a mess?' },
      {
        type: 'paragraph',
        value:
          'That is one of the most important reasons to do the audit. We identify data gaps, data silos, and cleanup priorities before costly implementation starts.'
      },
      { type: 'heading3', value: 'Will the audit force me to buy specific software?' },
      {
        type: 'paragraph',
        value:
          'No. We are vendor-neutral. Recommendations are based on your needs, not commissions or platform quotas.'
      },
      { type: 'heading3', value: 'How disruptive is the audit process?' },
      {
        type: 'paragraph',
        value:
          'Minimal disruption. Most analysis happens on our side. Your team mainly joins short, focused interviews.'
      },
      { type: 'heading3', value: 'What happens after the audit?' },
      {
        type: 'paragraph',
        value:
          'You get a clear roadmap. You can execute internally, work with BitDepth, or take the roadmap to another delivery team.'
      },
      { type: 'heading3', value: 'How do you keep ROI estimates realistic?' },
      {
        type: 'paragraph',
        value:
          'We build ROI estimates from your actual process times, error rates, and operating costs, not generic benchmarks.'
      },
      { type: 'heading3', value: 'Is an AI audit worth it for smaller businesses?' },
      {
        type: 'paragraph',
        value:
          'Yes. Small teams often see quick payback from targeted automation opportunities that return hours each week.'
      },
      { type: 'heading3', value: 'Can the audit be done remotely?' },
      {
        type: 'paragraph',
        value:
          'Yes. Interviews and system reviews can be completed remotely. We support companies across Canada through virtual delivery.'
      },
      { type: 'heading', value: 'Ready to Find Out Where AI Can Help Your Business?' },
      {
        type: 'paragraph',
        value:
          'An AI discovery audit is the smartest place to start. You get a clear view of operations, a realistic readiness score, and a roadmap backed by numbers.'
      },
      {
        type: 'paragraph',
        value:
          'At BitDepth, we audit first, recommend what fits, and deliver outcomes. If you are in oil and gas or manufacturing and want to see what AI can do for your business, book a free discovery call.'
      },
      { type: 'heading4', value: 'Book a Free Discovery Call' },
      { type: 'paragraph', value: 'Serving Canadian oil and gas and manufacturing companies.' }
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(resourceArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = resourceArticles[slug];

  if (!article) {
    return {
      title: 'Resource Not Found | BitDepth AI',
      robots: {
        index: false,
        follow: true
      }
    };
  }

  const path = `/resources/${slug}`;

  return {
    title: article.seoTitle ?? `${article.title} | BitDepth AI`,
    description: article.description,
    keywords: article.keywords,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: article.seoTitle ?? `${article.title} | BitDepth AI`,
      description: article.description,
      url: path,
      type: 'article',
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle ?? `${article.title} | BitDepth AI`,
      description: article.description,
      images: [article.image]
    }
  };
}

export default async function ResourceArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = resourceArticles[slug];

  if (!article) {
    notFound();
  }

  const articleUrl = `https://bitdepthaiconsulting.com/resources/${slug}`;
  const articleImage = `https://bitdepthaiconsulting.com${article.image.startsWith('/') ? article.image : `/${article.image}`}`;

  return (
    <PageShell>
      <BreadcrumbSchema
        id={`resource-${slug}-breadcrumbs`}
        items={buildResourceBreadcrumbs(article.title, slug)}
      />
      <Script id={`resource-${slug}-article-schema`} type="application/ld+json">
        {JSON.stringify(buildArticleSchema(article.title, articleUrl, articleImage, '2026-04-05'))}
      </Script>
      <ArticleHeader
        category={article.category}
        title={article.title}
        breadcrumbLabel={article.title}
        imageSrc={article.image}
        imageAlt={article.imageAlt}
        lead={article.description}
      />

      <ArticleBody>
        <ScrollReveal>
          <article className="space-y-6">
            {article.body.map((block, i) => {
              const key = `${block.type}-${i}`;

              if (block.type === 'heading') {
                return (
                  <h2 key={key} className="pt-6 text-[var(--color-navy)]">
                    {block.value}
                  </h2>
                );
              }

              if (block.type === 'heading3') {
                return (
                  <h3 key={key} className="pt-4 text-[var(--color-navy)]">
                    {block.value}
                  </h3>
                );
              }

              if (block.type === 'heading4') {
                return (
                  <h4 key={key} className="pt-2 text-[var(--color-navy)]">
                    {block.value}
                  </h4>
                );
              }

              return (
                <p key={key} className="text-[var(--color-charcoal)]">
                  {block.value}
                </p>
              );
            })}
          </article>
        </ScrollReveal>
      </ArticleBody>

      <ArticleCTA
        eyebrow="Where to start"
        title="A discovery call is the next step."
        body="Tell us where AI could help your business. We will tell you honestly whether it makes sense to start with the audit, or whether something else needs to come first."
      />
    </PageShell>
  );
}
