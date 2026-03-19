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
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {open ? (
        <div
          id="mobile-menu"
          className="absolute inset-x-6 top-[calc(100%+0.75rem)] rounded-3xl border border-coolgray bg-white p-6 shadow-soft"
        >
          <nav className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-semibold text-navy transition hover:text-cyan"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Book Your AI Audit
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
