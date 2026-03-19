import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/lib/site-data';
import { MobileNav } from '@/components/layout/mobile-nav';

export function SiteHeader({ simplified = false }: { simplified?: boolean }) {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan/20 bg-[rgba(11,31,59,0.95)] text-white backdrop-blur-xl">
      <div className="container-shell relative flex min-h-16 items-center justify-between gap-4 sm:min-h-20 sm:gap-6">
        <Link href="/" className="relative block h-8 w-[140px] shrink-0 sm:h-10 sm:w-[180px]" aria-label="BitDepth AI Consulting home">
          <Image
            src="/images/logo svg transparent.svg"
            alt="BitDepth AI Consulting logo"
            fill
            priority
            sizes="(max-width: 640px) 140px, 180px"
            className="object-contain object-left"
          />
        </Link>
        {!simplified ? (
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-sm font-semibold text-white/75 transition hover:text-cyan"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-cyan transition-transform duration-200 ease-out group-hover:scale-x-100" />
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
