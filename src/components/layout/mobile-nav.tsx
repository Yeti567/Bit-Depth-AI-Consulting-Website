'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/site-data';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label="Toggle navigation"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-[rgba(11,31,59,0.98)] px-8 pb-8 pt-28"
        >
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute right-7 top-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
          <nav className="flex flex-1 flex-col justify-center gap-7">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-2xl font-semibold text-white/85 transition hover:text-cyan"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/ai-audit" className="btn-primary mt-3 w-full max-w-xs text-center" onClick={() => setOpen(false)}>
              Book Your AI Audit
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
