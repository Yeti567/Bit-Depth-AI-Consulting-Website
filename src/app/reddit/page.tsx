import type { Metadata } from 'next';
import { RedditLandingClient } from './reddit-landing-client';

export const metadata: Metadata = {
  title: 'Book Your Free Discovery Call | Bit Depth AI Consulting',
  description:
    'Vendor-neutral AI consulting for Canadian SMBs. Diagnose what is actually slowing your operations, then build AI systems that deliver measurable ROI.',
  alternates: {
    canonical: 'https://bitdepthaiconsulting.com/reddit'
  },
  openGraph: {
    title: 'Your business does not need more AI tools. It needs a system that works.',
    description:
      'Book a free 30-minute discovery call. No cost, no commitment, no vendor lock-in.',
    url: 'https://bitdepthaiconsulting.com/reddit',
    type: 'website',
    images: [
      {
        url: '/images/Industrial energy with digital precision landing.png',
        width: 1200,
        height: 630,
        alt: 'Business professional reviewing operations with digital system overlays'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI That Works. For How You Actually Work.',
    description: 'Free 30-minute discovery call for Canadian small and mid-market operational businesses.',
    images: ['/images/Industrial energy with digital precision landing.png']
  }
};

export default function RedditLandingPage() {
  return <RedditLandingClient />;
}

