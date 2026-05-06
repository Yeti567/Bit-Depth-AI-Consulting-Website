import type { Metadata } from 'next';

export const SITE = {
  name: 'BitDepth AI Consulting',
  legalName: 'BitDepth AI Consulting Ltd.',
  url: 'https://bitdepthaiconsulting.com',
  defaultDescription:
    'Vendor-neutral AI consulting and automation for Canadian HVAC, plumbing, electrical, roofing, ICI, and field-service businesses.',
  twitter: '@bitdepthai',
  phone: '+1-780-832-5158',
  email: 'blake@bitdepthaiconsulting.com',
  locality: 'Barriere',
  region: 'BC',
  country: 'CA'
} as const;

type SeoInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
  ogImageAlt,
  ogType = 'website',
  noindex
}: SeoInput): Metadata {
  const url = `${SITE.url}${path}`;
  const image = ogImage
    ? { url: ogImage, width: 1200, height: 630, alt: ogImageAlt ?? title }
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: ogType,
      locale: 'en_CA',
      images: image ? [image] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.twitter,
      title,
      description,
      images: ogImage ? [ogImage] : undefined
    },
    robots: noindex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          'max-image-preview': 'large'
        }
  };
}
