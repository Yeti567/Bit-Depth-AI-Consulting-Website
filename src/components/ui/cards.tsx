import Link from 'next/link';

type BaseCardProps = {
  title: string;
  description: string;
};

export function ServiceCard({ title, description, href }: BaseCardProps & { href?: string }) {
  const content = (
    <div className="surface-card h-full p-8">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="mt-4 text-charcoal/80">{description}</p>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}

export function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <article className="surface-card h-full p-8">
      <p className="text-lg text-charcoal/85">“{quote}”</p>
      <div className="mt-6 border-t border-coolgray pt-6">
        <p className="font-semibold text-navy">{name}</p>
        <p className="text-sm text-charcoal/70">{role}</p>
      </div>
    </article>
  );
}

export function ProcessCard({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <article className="surface-card p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">{step}</p>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <p className="mt-4 text-charcoal/80">{description}</p>
    </article>
  );
}
