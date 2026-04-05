'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navigation } from '@/lib/site-data';
import { MobileNav } from '@/components/layout/mobile-nav';

export function SiteHeader({ simplified = false }: { simplified?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 text-white backdrop-blur-xl transition-all duration-200 ${
        scrolled ? 'border-b border-[var(--color-border)] bg-[rgba(11,31,59,0.98)]' : 'bg-[rgba(11,31,59,0.95)]'
      }`}
    >
      <div className="container-shell relative flex min-h-[76px] items-center justify-between gap-4">
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
                className="group relative text-sm font-medium text-white/78 transition hover:text-cyan"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-cyan transition-transform duration-200 ease-out group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>
        ) : null}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="mailto:blake@bitdepthaiconsulting.com"
            className="text-sm text-white/60 transition hover:text-cyan"
          >
            blake@bitdepthaiconsulting.com
          </Link>
          <Link href="/ai-audit" className="btn-primary text-sm">
            Book Your AI Audit
          </Link>
        </div>
        {!simplified ? <MobileNav /> : null}
      </div>
    </header>
  );
}
