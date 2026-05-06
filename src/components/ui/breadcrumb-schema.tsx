import Script from 'next/script';
import { buildBreadcrumbSchema, type BreadcrumbItem } from '@/lib/schema';

interface BreadcrumbSchemaProps {
  id: string;
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ id, items }: BreadcrumbSchemaProps) {
  return (
    <Script id={id} type="application/ld+json">
      {JSON.stringify(buildBreadcrumbSchema(items))}
    </Script>
  );
}

const BASE = 'https://bitdepthaiconsulting.com';

export function buildServiceBreadcrumbs(serviceName: string, slug: string): BreadcrumbItem[] {
  return [
    { name: 'Home', url: `${BASE}/` },
    { name: 'Services', url: `${BASE}/services` },
    { name: serviceName, url: `${BASE}/services/${slug}` }
  ];
}

export function buildIndustryBreadcrumbs(industryName: string, slug: string): BreadcrumbItem[] {
  return [
    { name: 'Home', url: `${BASE}/` },
    { name: 'Industries', url: `${BASE}/industries` },
    { name: industryName, url: `${BASE}/industries/${slug}` }
  ];
}

export function buildResourceBreadcrumbs(title: string, slug: string): BreadcrumbItem[] {
  return [
    { name: 'Home', url: `${BASE}/` },
    { name: 'Resources', url: `${BASE}/resources` },
    { name: title, url: `${BASE}/resources/${slug}` }
  ];
}

export function buildSimpleBreadcrumbs(label: string, slug: string): BreadcrumbItem[] {
  return [
    { name: 'Home', url: `${BASE}/` },
    { name: label, url: `${BASE}/${slug}` }
  ];
}
