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
          className="fixed inset-0 z-50 flex flex-col bg-[#0B1F3B] px-8 pb-8 pt-28"
        >
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute right-7 top-8 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[#F5F7FA]"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
          <nav className="flex flex-1 flex-col justify-center">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block w-full border-b border-[rgba(0,180,216,0.15)] py-4 text-xl font-semibold text-[#F5F7FA] transition hover:text-[#00B4D8]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/ai-audit" 
              className="mt-6 block w-full rounded-lg bg-[#00B4D8] px-7 py-3.5 text-center font-semibold text-[#0B1F3B]" 
              onClick={() => setOpen(false)}
            >
              Book Your AI Audit
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
