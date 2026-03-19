import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import type { ReactNode } from 'react';

export function PageShell({
  children,
  simplifiedHeader = false
}: {
  children: ReactNode;
  simplifiedHeader?: boolean;
}) {
  return (
    <div className="min-h-screen bg-offwhite">
      <SiteHeader simplified={simplifiedHeader} />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
