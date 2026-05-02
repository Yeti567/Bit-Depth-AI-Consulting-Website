'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { navigation, type NavItem } from '@/lib/site-data';
import { MobileNav } from '@/components/layout/mobile-nav';

function NavDropdown({ item }: { item: Extract<NavItem, { children: NonNullable<unknown> }> }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => cancelClose(), []);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
    >
      <Link
        href={item.href}
        className="group inline-flex items-center gap-1 text-sm font-medium text-white/75 hover:text-white"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform" aria-hidden />
        <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-cyan)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
      </Link>
      {open ? (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-md border border-white/10 bg-[var(--color-navy)] p-2 shadow-lg"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              className="block rounded px-3 py-2 text-sm text-white/75 transition hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {child.label}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

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
      className={`sticky top-0 z-50 bg-[var(--color-navy)] text-white transition-shadow duration-200 ${
        scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,0.06)]' : ''
      }`}
    >
      <div className="container-shell relative flex min-h-[72px] items-center justify-between gap-4">
        <Link
          href="/"
          className="relative block h-8 w-[140px] shrink-0 sm:h-10 sm:w-[180px]"
          aria-label="BitDepth AI Consulting home"
        >
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
          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) =>
              item.children ? (
                <NavDropdown key={item.href} item={item} />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative text-sm font-medium text-white/75 hover:text-white"
                >
                  {item.label}
                  <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-cyan)] transition-transform duration-200 ease-out group-hover:scale-x-100" />
                </Link>
              )
            )}
          </nav>
        ) : null}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/contact?topic=audit" className="btn-primary text-sm">
            Book an AI Audit
          </Link>
        </div>
        {!simplified ? <MobileNav /> : null}
      </div>
    </header>
  );
}
