import type { Metadata } from 'next';
import Link from 'next/link';
import { PageShell } from '@/components/layout/page-shell';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export const metadata: Metadata = {
  title: 'Contact BitDepth AI Consulting | Start Your AI Audit',
  description:
    'Tell BitDepth about your business operations and we will recommend the best AI starting point for your team.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact BitDepth AI Consulting | Start Your AI Audit',
    description:
      'Tell BitDepth about your business operations and get a clear recommended starting point.',
    url: '/contact',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact BitDepth AI Consulting | Start Your AI Audit',
    description: 'Book a practical discovery call to identify your AI starting point.'
  }
};

const nextSteps = [
  {
    title: 'We review your inquiry',
    description: 'Within 1 business day.'
  },
  {
    title: 'We schedule a 30-minute discovery call',
    description: 'We align on goals, constraints, and current systems.'
  },
  {
    title: 'We recommend your best starting point',
    description: 'No sales pressure and no unnecessary scope.'
  }
];

export default function ContactPage() {
  return (
    <PageShell>
      <section className="section-offwhite section-space">
        <div className="container-shell grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <ScrollReveal>
            <h1 className="text-4xl font-extrabold md:text-6xl">Let&apos;s Talk About Your Business</h1>
            <p className="mt-4 text-[var(--color-slate)]">Tell us what you&apos;re trying to improve. We&apos;ll help you find the right AI starting point.</p>
            <form className="card-light mt-8 grid gap-4 p-6" action="mailto:blake@bitdepthaiconsulting.com" method="post" encType="text/plain">
              <input type="text" name="name" placeholder="Name" required />
              <input type="text" name="company" placeholder="Company Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone (optional)" />
              <select name="interest" defaultValue="" required>
                <option value="" disabled>
                  What are you most interested in?
                </option>
                <option value="ai-audit">AI Audit</option>
                <option value="workflow-automation">Workflow Automation</option>
                <option value="ai-workers">AI Workers</option>
                <option value="strategy">Strategy</option>
                <option value="training">Training</option>
                <option value="not-sure">Not sure yet</option>
              </select>
              <textarea name="message" placeholder="Message (optional)" className="min-h-32" />
              <button type="submit" className="btn-primary w-full sm:w-fit">
                Send My Inquiry
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal index={1} className="card-light p-6">
            <h3 className="text-2xl font-bold">What Happens Next</h3>
            <div className="mt-6 space-y-4">
              {nextSteps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-[var(--color-border)] bg-white p-4">
                  <p className="text-sm font-semibold text-cyan">{index + 1}. {step.title}</p>
                  <p className="mt-1 text-[var(--color-slate)]">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-[var(--color-slate)]">
              <p>Email: <Link href="mailto:blake@bitdepthaiconsulting.com" className="text-cyan">blake@bitdepthaiconsulting.com</Link></p>
              <p className="mt-2">LinkedIn: <Link href="https://www.linkedin.com/company/bitdepth-ai-consulting/" target="_blank" rel="noreferrer" className="text-cyan">BitDepth AI Consulting</Link></p>
            </div>
            <p className="mt-6 text-sm text-[var(--color-slate)]">
              No sales pressure. If AI isn&apos;t the right move for your business right now, we&apos;ll tell you.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </PageShell>
  );
}
