import Link from 'next/link';

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

interface ArticleBylineProps {
  publishedAt: string;
  updatedAt?: string;
}

export function ArticleByline({ publishedAt, updatedAt }: ArticleBylineProps) {
  const showUpdated = updatedAt && updatedAt !== publishedAt;
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--color-slate)]">
      <span>
        By{' '}
        <Link
          href="/about"
          className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-terracotta)]"
        >
          Blake Cowan
        </Link>
        , Founder, BitDepth AI Consulting
      </span>
      <span aria-hidden="true">&middot;</span>
      <span>Published {formatDate(publishedAt)}</span>
      {showUpdated ? (
        <>
          <span aria-hidden="true">&middot;</span>
          <span>Last updated {formatDate(updatedAt!)}</span>
        </>
      ) : null}
    </div>
  );
}

export function AuthorBox() {
  return (
    <aside className="mt-12 rounded-md border border-[var(--color-border)] bg-white p-6 sm:p-8">
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-slate)]">
        About the author
      </p>
      <h3 className="mt-3 font-serif text-xl text-[var(--color-navy)]">Blake Cowan</h3>
      <p className="mt-3 text-[var(--color-charcoal)]">
        Blake is the founder of BitDepth AI Consulting, where he helps Canadian trades,
        contractors, and field-service businesses identify and implement practical AI and
        automation systems. Five years working hands-on inside trade and field-service
        operations across Western Canada and Ontario, first as a salesperson, then as the
        consultant building these systems.
      </p>
      <Link
        href="/about"
        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-terracotta)] hover:text-[var(--color-terracotta-dark)]"
      >
        Read the full founder story
        <span aria-hidden="true">→</span>
      </Link>
    </aside>
  );
}
