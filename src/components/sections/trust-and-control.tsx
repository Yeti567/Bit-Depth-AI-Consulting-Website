import Link from 'next/link';
import { BookOpen, Beaker, Eye } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

const points = [
  {
    icon: BookOpen,
    title: 'Grounded in your information, not the open internet.',
    body: 'Chatbots and assistants pull answers only from sources you approve. Your website, your service manuals, your pricing rules, your FAQ. When the system does not know an answer, it says so and hands the conversation to a person. It does not invent prices, warranties, or availability.'
  },
  {
    icon: Beaker,
    title: 'Tested before it ever talks to a customer.',
    body: 'Before launch, we run common questions, edge cases, scheduling scenarios, pricing boundaries, and after-hours behaviour through the system. We test the angry customer, the confused customer, and the customer who types in fragments. You get a testing report and a final approval before anything goes live.'
  },
  {
    icon: Eye,
    title: 'Watched after launch, not abandoned.',
    body: 'Every build includes an ongoing service package. We monitor early conversations, review logs, tune prompts, and update the knowledge base as your business changes. If something goes wrong, we can pause or shut the system off in minutes, not days.'
  }
];

export function TrustAndControl() {
  return (
    <section className="section-offwhite section-space section-rule">
      <div className="container-shell">
        <ScrollReveal className="max-w-2xl">
          <p className="eyebrow">Trust and control</p>
          <h2 className="mt-6">
            We do not turn AI loose on your customers and hope for the best.
          </h2>
          <p className="mt-5 text-[var(--color-slate)]">
            Every automation we build is grounded in approved company knowledge: your website,
            your service documents, your policies, your pricing rules, and the data you choose to
            provide. The goal is not to make AI creative. The goal is to make it useful,
            controlled, and boringly reliable.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <ScrollReveal key={point.title} index={index} className="max-w-xl">
                <Icon
                  className="h-6 w-6 text-[var(--color-terracotta)]"
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-[var(--color-navy)]">{point.title}</h3>
                <p className="mt-3 text-[var(--color-slate)]">{point.body}</p>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal index={3} className="mt-12">
          <Link href="/how-we-build" className="btn-primary">
            See how we build it
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
