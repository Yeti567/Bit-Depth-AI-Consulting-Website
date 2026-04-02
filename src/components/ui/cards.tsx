import Link from 'next/link';
import { ArrowRight, MessageSquareQuote, Network, ShieldCheck } from 'lucide-react';

type BaseCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description, href }: BaseCardProps & { href?: string }) {
  const content = (
    <div className="surface-card h-full p-6 sm:p-8">
      <div className="icon-chip">
        <ShieldCheck className="h-5 w-5" />
      </div>
      <h3 className="text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-4 text-charcoal/80">{description}</p>
      {href ? (
        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">
          Learn More <ArrowRight className="h-4 w-4" />
        </div>
      ) : null}
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <article className="testimonial-card h-full">
      <div className="icon-chip">
        <MessageSquareQuote className="h-5 w-5" />
      </div>
      <blockquote>&ldquo;{quote}&rdquo;</blockquote>
      <div className="attribution">
        <p>{name}</p>
        <p className="mt-1 text-white/55">{role}</p>
      </div>
    </article>
  );
}

export function ProcessCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <article className="surface-card p-6 sm:p-8">
      <div className="icon-chip">
        <Network className="h-5 w-5" />
      </div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{step}</p>
      <h3 className="mt-4 text-2xl font-semibold text-navy">{title}</h3>
      <p className="mt-4 text-charcoal/80">{description}</p>
    </article>
  );
}
