'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { navigation } from '@/lib/site-data';
import { MobileNav } from '@/components/layout/mobile-nav';

export function SiteHeader({ simplified = false }: { simplified?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
          <nav ref={navRef} className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              item.children ? (
                <div key={item.href} className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                    className="flex items-center gap-1 text-sm font-medium text-white/78 transition hover:text-cyan"
                  >
                    {item.label}
                    <ChevronDown 
                      className={`h-4 w-4 transition-transform ${openDropdown === item.href ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  {openDropdown === item.href && (
                    <div className="absolute left-0 top-full mt-2 w-56 rounded-lg bg-[rgba(11,31,59,0.98)] border border-white/10 shadow-xl backdrop-blur-xl py-2 z-50">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-cyan transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-medium text-white/78 transition hover:text-cyan"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-cyan transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </Link>
              )
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
          <Link href="/contact" className="btn-primary text-sm">
            Book Your AI Audit
          </Link>
        </div>
        {!simplified ? <MobileNav /> : null}
      </div>
    </header>
  );
}
