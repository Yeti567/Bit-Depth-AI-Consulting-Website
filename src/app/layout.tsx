import type { Metadata } from 'next';
import { Inter, Source_Sans_3 } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bitdepth.ai'),
  title: {
    default: 'BitDepth AI Consulting Ltd.',
    template: '%s'
  },
  description:
    'Vendor-neutral AI consulting for oil & gas, manufacturing, and Canadian mid-market businesses. Audit-first strategy, practical implementation, and measurable ROI.',
  keywords: [
    'AI consulting',
    'vendor-neutral AI consulting',
    'AI audit',
    'manufacturing AI',
    'oil and gas AI',
    'Kamloops BC AI consulting',
    'Canadian mid-market AI'
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
    description:
      'Practical, vendor-neutral AI consulting for industrial and mid-market businesses across Canada.',
    type: 'website',
    url: 'https://www.bitdepth.ai',
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
    description:
      'Practical, vendor-neutral AI consulting for industrial and mid-market businesses across Canada.',
    images: ['/images/Social Media Profile Card.webp']
  },
  category: 'technology'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
