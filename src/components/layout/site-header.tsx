import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/lib/site-data';
import { MobileNav } from '@/components/layout/mobile-nav';

export function SiteHeader({ simplified = false }: { simplified?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
      <div className="container-shell relative flex min-h-20 items-center justify-between gap-6">
        <Link href="/" className="relative block h-10 w-[180px] shrink-0" aria-label="BitDepth AI Consulting home">
          <Image
            src="/images/logo svg transparent.svg"
            alt="BitDepth AI Consulting logo"
            fill
            priority
            sizes="180px"
            className="object-contain object-left"
          />
        </Link>
        {!simplified ? (
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-white transition hover:text-cyan">
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
        <div className="hidden md:flex">
          <Link href={simplified ? '/ai-audit#book-now' : '/contact'} className="btn-primary">
            {simplified ? 'Book Now' : 'Book Your AI Audit'}
          </Link>
        </div>
        {!simplified ? <MobileNav /> : null}
      </div>
    </header>
  );
}
