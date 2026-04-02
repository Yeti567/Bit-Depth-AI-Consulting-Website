import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://bitdepthaiconsulting.com'),
  title: {
    default: 'BitDepth AI Consulting Ltd.',
    template: '%s'
  },
  description:
    'BitDepth helps Canadian SMBs eliminate manual work, connect their systems, and make better decisions with AI. We audit first, then build what fits.',
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
    canonical: '/'
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
    title: 'BitDepth AI Consulting Ltd.',
    description: 'Vendor-neutral AI consulting for Canadian SMBs focused on measurable operational outcomes.',
    type: 'website',
    url: 'https://bitdepthaiconsulting.com',
    siteName: 'BitDepth AI Consulting Ltd.',
    locale: 'en_CA',
    images: [
      {
        url: '/images/Social Media Profile Card.webp',
        width: 1200,
        height: 630,
        alt: 'BitDepth AI Consulting social sharing card'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BitDepth AI Consulting Ltd.',
    description: 'Vendor-neutral AI consulting for Canadian SMBs focused on measurable operational outcomes.',
    images: ['/images/Social Media Profile Card.webp']
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
