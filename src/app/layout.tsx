import type { Metadata, Viewport } from 'next';
import { Barlow } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-barlow'
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
    default: 'AI and Automation for Canadian Trades and Contractors | BitDepth AI',
    template: '%s'
  },
  description:
    'Vendor-neutral AI consulting for Canadian trades and contractors. We diagnose where the money is leaking, then build the AI and automation that plugs the leak. Audits from $5,000.',
  keywords: [
    'AI consulting for Canadian trades',
    'vendor-neutral AI consulting',
    'AI opportunity audit',
    'missed call text back',
    'workflow automation for contractors',
    'custom AI workers',
    'AI for HVAC and plumbing',
    'AI for electrical contractors',
    'AI for ICI construction'
  ],
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/'
  },
  authors: [{ name: 'BitDepth AI Consulting Ltd.' }],
  other: {
    'geo.region': 'CA-ON',
    'geo.placename': 'Greater Toronto Area, Ontario, Canada'
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
    title: 'AI and Automation for Canadian Trades and Contractors | BitDepth AI',
    description:
      'Vendor-neutral AI consulting for Canadian trades and contractors. Audit first. Recommend what fits. Deliver outcomes.',
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
    title: 'AI and Automation for Canadian Trades and Contractors | BitDepth AI',
    description:
      'Vendor-neutral AI consulting for Canadian trades and contractors. Audits from $5,000.',
    images: ['/images/og-home.jpg']
  },
  category: 'technology'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1KBYH51CSC" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1KBYH51CSC');
            `,
          }}
        />
      </head>
      <body className={`${barlow.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
