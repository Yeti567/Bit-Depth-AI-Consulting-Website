'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/site-data';

export function MobileNav() {
  const [open, setOpen] = useState(false);

  const overlay = open ? (
    <div
      id="mobile-menu"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0B1F3B',
        display: 'flex',
        flexDirection: 'column',
        padding: '112px 32px 32px',
      }}
    >
      <button
        type="button"
        aria-label="Close navigation"
        style={{
          position: 'absolute',
          right: '28px',
          top: '28px',
          display: 'inline-flex',
          height: '44px',
          width: '44px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '9999px',
          border: '1px solid rgba(255,255,255,0.2)',
          background: 'rgba(255,255,255,0.1)',
          color: '#F5F7FA',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(false)}
      >
        <X size={20} />
      </button>
      <nav style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              display: 'block',
              width: '100%',
              borderBottom: '1px solid rgba(0,180,216,0.15)',
              padding: '16px 0',
              fontSize: '20px',
              fontWeight: 600,
              color: '#F5F7FA',
              textDecoration: 'none',
            }}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          style={{
            display: 'block',
            width: '100%',
            marginTop: '24px',
            borderRadius: '8px',
            backgroundColor: '#00B4D8',
            padding: '14px 28px',
            textAlign: 'center',
            fontWeight: 600,
            color: '#0B1F3B',
            textDecoration: 'none',
          }}
          onClick={() => setOpen(false)}
        >
          Book Your AI Audit
        </Link>
      </nav>
    </div>
  ) : null;

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
      {typeof document !== 'undefined' && createPortal(overlay, document.body)}
    </div>
  );
}
