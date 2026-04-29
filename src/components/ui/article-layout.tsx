import Image from 'next/image';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/scroll-reveal';

interface ArticleHeaderProps {
  category: string;
  readTime?: string;
  title: string;
  breadcrumbLabel: string;
  imageSrc: string;
  imageAlt: string;
  lead?: string;
}

export function ArticleHeader({
  category,
  readTime,
  title,
  breadcrumbLabel,
  imageSrc,
  imageAlt,
  lead
}: ArticleHeaderProps) {
  return (
    <section className="section-offwhite section-space">
      <div className="container-shell max-w-3xl">
        <ScrollReveal>
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--color-slate)]">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-[var(--color-navy)]">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-[var(--color-slate)]/60">
                /
              </li>
              <li>
                <Link href="/resources" className="hover:text-[var(--color-navy)]">
                  Resources
                </Link>
              </li>
              <li aria-hidden="true" className="text-[var(--color-slate)]/60">
                /
              </li>
              <li className="text-[var(--color-navy)]">{breadcrumbLabel}</li>
            </ol>
          </nav>

          <p className="eyebrow mt-8">
            {category}
            {readTime ? (
              <span className="ml-3 normal-case tracking-normal text-[var(--color-slate)]">
                · {readTime}
              </span>
            ) : null}
          </p>

          <h1 className="mt-6">{title}</h1>

          {lead ? (
            <p className="mt-6 text-lg text-[var(--color-slate)]">{lead}</p>
          ) : null}
        </ScrollReveal>

        <ScrollReveal
          index={1}
          className="relative mt-10 aspect-[16/9] overflow-hidden rounded-md border border-[var(--color-border)]"
        >
          <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
        </ScrollReveal>
      </div>
    </section>
  );
}

interface ArticleBodyProps {
  children: React.ReactNode;
}

export function ArticleBody({ children }: ArticleBodyProps) {
  return (
    <section className="section-offwhite section-tight section-rule">
      <div className="container-shell max-w-3xl space-y-12">{children}</div>
    </section>
  );
}

interface ArticleCTAProps {
  eyebrow?: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}

export function ArticleCTA({
  eyebrow = 'Where to start',
  title,
  body,
  primaryHref = '/ai-audit',
  primaryLabel = 'Book an AI Audit',
  secondaryHref = '/contact',
  secondaryLabel = 'Book a discovery call'
}: ArticleCTAProps) {
  return (
    <section className="section-navy section-space">
      <div className="container-shell max-w-3xl text-center">
        <ScrollReveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-6 text-white">{title}</h2>
          <p className="mx-auto mt-6 max-w-xl text-white/75">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={primaryHref} className="btn-primary">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn-outline">
              {secondaryLabel}
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export interface ArticleCardData {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  href: string;
  category: string;
  readTime?: string;
}

export function ArticleCard({ article }: { article: ArticleCardData }) {
  return (
    <Link
      href={article.href}
      className="group flex flex-col overflow-hidden rounded-md border border-[var(--color-border)] bg-white"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={article.image}
          alt={article.imageAlt ?? article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
          {article.category}
          {article.readTime ? (
            <span className="ml-3 normal-case tracking-normal">· {article.readTime}</span>
          ) : null}
        </p>
        <h3 className="mt-4 text-[var(--color-navy)] group-hover:text-[var(--color-cyan)]">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm text-[var(--color-slate)]">{article.description}</p>
        <p className="mt-5 text-sm font-medium text-[var(--color-cyan)] group-hover:text-[var(--color-cyan-dark)]">
          Read article →
        </p>
      </div>
    </Link>
  );
}
