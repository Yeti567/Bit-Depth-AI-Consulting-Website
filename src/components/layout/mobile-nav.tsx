'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { navigation } from '@/lib/site-data';

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setExpanded(null);
  };

  const overlay = open ? (
    <div
      id="mobile-menu"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#1C1F26',
        display: 'flex',
        flexDirection: 'column',
        padding: '112px 32px 32px',
        overflowY: 'auto'
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
          background: 'rgba(255,255,255,0.08)',
          color: '#FAF7F2',
          cursor: 'pointer'
        }}
        onClick={close}
      >
        <X size={20} />
      </button>
      <nav style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        {navigation.map((item) => {
          const isExpanded = expanded === item.href;
          return (
            <div
              key={item.href}
              style={{ borderBottom: '1px solid rgba(255,255,255,0.10)' }}
            >
              {item.children ? (
                <>
                  <button
                    type="button"
                    onClick={() => setExpanded(isExpanded ? null : item.href)}
                    aria-expanded={isExpanded}
                    style={{
                      display: 'flex',
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '16px 0',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: '#FAF7F2',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 200ms'
                      }}
                    />
                  </button>
                  {isExpanded ? (
                    <div style={{ paddingBottom: '12px', display: 'flex', flexDirection: 'column' }}>
                      <Link
                        href={item.href}
                        onClick={close}
                        style={{
                          padding: '10px 12px',
                          fontSize: '15px',
                          color: 'rgba(250,247,242,0.7)',
                          textDecoration: 'none'
                        }}
                      >
                        Overview
                      </Link>
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={close}
                          style={{
                            padding: '10px 12px',
                            fontSize: '15px',
                            color: 'rgba(250,247,242,0.85)',
                            textDecoration: 'none'
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '16px 0',
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#FAF7F2',
                    textDecoration: 'none'
                  }}
                  onClick={close}
                >
                  {item.label}
                </Link>
              )}
            </div>
          );
        })}
        <Link
          href="/ai-audit"
          style={{
            display: 'block',
            width: '100%',
            marginTop: '24px',
            borderRadius: '6px',
            backgroundColor: '#B85A32',
            padding: '14px 28px',
            textAlign: 'center',
            fontWeight: 500,
            color: '#FFFFFF',
            textDecoration: 'none'
          }}
          onClick={close}
        >
          Book an AI Audit
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
