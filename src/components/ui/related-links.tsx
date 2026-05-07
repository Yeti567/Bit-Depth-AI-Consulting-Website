import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

export interface RelatedLink {
  label: string;
  href: string;
}

interface RelatedLinksProps {
  title: string;
  eyebrow?: string;
  links: RelatedLink[];
  index?: number;
  className?: string;
}

export function RelatedLinks({
  title,
  eyebrow,
  links,
  index = 0,
  className = ''
}: RelatedLinksProps) {
  return (
    <ScrollReveal index={index} className={className}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-3 font-serif text-xl text-[var(--color-navy)]">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </ScrollReveal>
  );
}
