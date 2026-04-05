import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { buildServiceSchema } from '@/lib/schema';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'AI Training & Enablement for Business Teams | BitDepth AI',
  description:
    'Workshops, playbooks, and hands-on training to make sure your team actually uses the AI you have invested in. Delivered remotely or on-site across Canada.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/services/ai-training'
  },
  openGraph: {
    title: 'AI Training & Enablement for Business Teams | BitDepth AI',
    description:
      'Workshops, playbooks, and hands-on training to make sure your team actually uses the AI you have invested in. Delivered remotely or on-site across Canada.',
    url: 'https://bitdepthaiconsulting.com/services/ai-training',
    type: 'website',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-ai-training.webp',
        width: 1200,
        height: 630,
        alt: 'AI training and enablement for business teams'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Training & Enablement for Business Teams | BitDepth AI',
    description:
      'Workshops, playbooks, and hands-on training to make sure your team actually uses the AI you have invested in. Delivered remotely or on-site across Canada.',
    images: ['/images/og-ai-training.webp']
  }
};

const trainingOptions = [
  {
    title: 'AI Foundations Workshop',
    price: '$2,500–$4,500',
    whatItCovers:
      'What AI actually is, what it can and cannot reliably do, how to think about it as a business tool rather than a magic solution, and how to evaluate AI claims from vendors and the media. Designed for leadership teams and operations managers who need to make informed decisions about AI without becoming technical experts.',
    format: 'Half-day or full-day workshop, delivered remotely or on-site.'
  },
  {
    title: 'Role-Specific AI Playbooks',
    price: '$1,500–$3,000 per playbook',
    whatItCovers:
      'A step-by-step guide for how a specific role in your business should use AI day to day — which tools to use, how to use them, what to watch for, and what to escalate to a human. Written for the person doing the job, not for a technical audience.',
    format: 'Written playbook delivered as a PDF and editable document, with a one-hour walkthrough session included.'
  },
  {
    title: 'Prompt Engineering Workshop',
    price: '$3,500–$6,000',
    whatItCovers:
      'How to get reliable, consistent, useful output from AI tools your team is already using — including ChatGPT, Claude, Copilot, and industry-specific AI tools. The difference between a prompt that produces garbage and one that produces something you can actually use is learnable. This workshop teaches it.',
    format: 'Half-day hands-on workshop with real examples from your industry. Delivered remotely or on-site.'
  },
  {
    title: 'Tool Adoption Bootcamp',
    price: '$4,000–$7,500',
    whatItCovers:
      'Intensive hands-on training to drive consistent adoption of a specific AI tool or system after it goes live. Covers how the tool works, how it applies to each role, common mistakes and how to avoid them, and what good usage looks like versus poor usage.',
    format: 'Full-day or two-day bootcamp, designed around the specific tool being adopted. Delivered remotely or on-site.'
  }
];

const scenarios = [
  {
    title: 'You just implemented something and adoption is slower than expected',
    description:
      'Your team went through the vendor training but usage is inconsistent. Some people have embraced it, others are avoiding it. The investment is not delivering what it should because the tool is not being used correctly or consistently. A targeted adoption bootcamp gets everyone on the same page.'
  },
  {
    title: 'You are about to implement something and want to do it right',
    description:
      'You have selected a tool or just completed an implementation project and you want to make sure training happens properly before bad habits form. Role-specific playbooks and a pre-launch workshop give your team the confidence to start strong.'
  },
  {
    title: 'Your leadership team needs to understand AI before making decisions about it',
    description:
      'You are being pitched AI solutions and you are not sure how to evaluate them. Your team is asking about AI and you are not sure how to answer. An AI Foundations Workshop gives your leadership team the understanding they need to make smart decisions without having to become technical experts.'
  }
];

export default function AITrainingPage() {
  return (
    <PageShell>
      <Script id="service-schema" type="application/ld+json">
        {JSON.stringify(buildServiceSchema(
          'AI Training & Enablement for Business Teams',
          'Workshops, playbooks, and hands-on training to make sure your team actually uses the AI you have invested in. Delivered remotely or on-site across Canada.',
          'https://bitdepthaiconsulting.com/services/ai-training',
          'AI Training'
        ))}
      </Script>
      {/* Hero Section */}
      <section className="section-navy dot-grid section-space">
        <div className="container-shell">
          {/* Breadcrumb */}
          <ScrollReveal>
            <nav className="mb-8 text-sm text-white/60">
              <Link href="/" className="hover:text-cyan transition-colors">
                Home
              </Link>
              <span className="mx-2">{'>'}</span>
              <Link href="/services" className="hover:text-cyan transition-colors">
                Services
              </Link>
              <span className="mx-2">{'>'}</span>
              <span className="text-white/80">AI Training & Enablement</span>
            </nav>
          </ScrollReveal>

          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <ScrollReveal>
              <h1 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
                The Best AI Implementation in the World Fails If Your Team Does Not Use It
              </h1>
              <p className="mt-5 text-lg text-white/74">
                Deployment is only half the job. The other half is making sure your team understands, trusts, and actually uses what you have invested in. That is what AI Training and Enablement delivers.
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Book a Discovery Call
              </Link>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[320px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-training-hero.webp.webp"
                alt="Small group of employees attending hands-on AI training workshop around large screen in modern meeting room"
                fill
                priority
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 1 — The Real Problem */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
                Technology Does Not Fail Because It Does Not Work. It Fails Because People Go Back to What They Know.
              </h2>
              <p className="mt-5 text-[var(--color-slate)] leading-7">
                Every industry has seen it. A new system gets implemented. The vendor trains the team. Everyone nods along. And six weeks later half the team is doing things the old way because the new way felt unfamiliar or nobody was sure they were using it correctly.
              </p>
              <p className="mt-4 text-[var(--color-slate)] leading-7">
                This is not a people problem. It is a change management problem. People are not resistant to better tools — they are resistant to uncertainty. When they do not understand how a tool works, when they are not confident it will give them reliable results, and when nobody has shown them specifically how it applies to their job, they default to what they already know.
              </p>
              <p className="mt-4 text-[var(--color-slate)] leading-7">
                AI is particularly vulnerable to this because it is still new enough that most people have a mixture of skepticism and anxiety about it. Training that addresses both — that builds genuine understanding and genuine confidence — is what makes the difference between an implementation that delivers ROI and one that collects dust.
              </p>
            </ScrollReveal>
            <ScrollReveal index={1} className="relative min-h-[280px] overflow-hidden rounded-2xl border border-[var(--color-border)]">
              <Image
                src="/images/ai-training-supporting.webp.webp"
                alt="Employee confidently using AI tool on laptop with printed playbook open beside them at modern office desk"
                fill
                className="object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 2 — Training Options */}
      <section className="section-navy section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">What We Offer</h2>
            <p className="mt-4 text-white/74">
              Each training option is designed for a different stage of AI adoption. Most clients combine two or more.
            </p>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-2">
            {trainingOptions.map((option, index) => (
              <ScrollReveal key={option.title} index={index} className="rounded-xl border border-[var(--color-border)] bg-white/5 p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold text-white">{option.title}</h3>
                  <span className="rounded-full bg-cyan/20 px-3 py-1 text-xs font-semibold text-cyan">
                    {option.price}
                  </span>
                </div>
                <p className="mt-4 text-sm text-white/74 leading-6">
                  <strong className="text-white">What it covers:</strong> {option.whatItCovers}
                </p>
                <p className="mt-3 text-sm text-white/60 leading-6">
                  <strong>Format:</strong> {option.format}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Who This Is For */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mb-10 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">Who Needs AI Training</h2>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {scenarios.map((scenario, index) => (
              <ScrollReveal key={scenario.title} index={index} className="card-light p-6">
                <h3 className="text-lg font-bold text-[var(--color-navy)]">{scenario.title}</h3>
                <p className="mt-3 text-[var(--color-slate)] text-sm leading-6">{scenario.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Pricing */}
      <section className="section-navy section-space">
        <div className="container-shell max-w-3xl">
          <ScrollReveal className="text-center">
            <h2 className="text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">Pricing</h2>
          </ScrollReveal>

          <ScrollReveal className="mt-8 rounded-xl border border-[var(--color-border)] bg-white/5 p-8">
            <div className="space-y-4 text-white/80">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium text-white">AI Foundations Workshop</span>
                <span className="font-semibold text-cyan">$2,500–$4,500</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium text-white">Role-Specific AI Playbooks</span>
                <span className="font-semibold text-cyan">$1,500–$3,000 per playbook</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium text-white">Prompt Engineering Workshop</span>
                <span className="font-semibold text-cyan">$3,500–$6,000</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <span className="font-medium text-white">Tool Adoption Bootcamp</span>
                <span className="font-semibold text-cyan">$4,000–$7,500</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-6 text-center text-white/74">
            <p className="leading-7">
              All training is delivered remotely via Zoom or on-site depending on your preference and location. Custom training packages combining multiple options are available — contact us to discuss what makes sense for your team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-offwhite section-space">
        <div className="container-shell">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl lg:text-5xl">
              The Investment You Made in AI Is Only Worth What Your Team Actually Uses
            </h2>
            <p className="mt-5 text-[var(--color-slate)] leading-7">
              Book a discovery call and we will tell you honestly which training option makes the most sense for where your business is right now.
            </p>
            <Link href="/contact" className="btn-primary mt-8">
              Book a Free Discovery Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
