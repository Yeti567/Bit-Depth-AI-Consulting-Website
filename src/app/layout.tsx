import type { Metadata, Viewport } from 'next';
import { DM_Sans, Syne } from 'next/font/google';
import './globals.css';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['700', '800'],
  display: 'swap'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
  display: 'swap'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B1F3B'
};

export const metadata: Metadata = {
  metadataBase: new URL('https://bitdepthaiconsulting.com'),
  title: {
    default: 'AI Consulting for Canadian Businesses | BitDepth AI Consulting',
    template: '%s'
  },
  description:
    'BitDepth helps Canadian SMBs cut manual work, connect systems, and make better decisions with AI. We audit first, then build what fits. Starting at $5,000.',
  keywords: [
    'AI consulting for Canadian SMBs',
    'vendor-neutral AI consulting',
    'AI opportunity audit',
    'workflow automation',
    'custom AI workers',
    'Canadian AI consulting',
    'SMB operations consulting'
  ],
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/'
  },
  authors: [{ name: 'BitDepth AI Consulting Ltd.' }],
  other: {
    'geo.region': 'CA-BC',
    'geo.placename': 'Barriere, British Columbia, Canada'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  openGraph: {
    title: 'AI Consulting for Canadian Businesses | BitDepth AI Consulting',
    description:
      'Vendor-neutral AI consulting for Canadian businesses from $2M to $50M. We diagnose operations, identify high-ROI opportunities, and build the right solution.',
    type: 'website',
    url: 'https://bitdepthaiconsulting.com',
    siteName: 'BitDepth AI Consulting',
    locale: 'en_CA',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bitdepthai',
    title: 'AI Consulting for Canadian Businesses | BitDepth AI Consulting',
    description:
      'Vendor-neutral AI consulting for Canadian businesses from $2M to $50M. We diagnose operations, identify high-ROI opportunities, and build the right solution.',
    images: ['/images/og-home.jpg']
  },
  category: 'technology'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
