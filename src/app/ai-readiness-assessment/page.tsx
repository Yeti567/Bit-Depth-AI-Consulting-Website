import type { Metadata } from 'next';
import { AssessmentApp } from '@/components/assessment/AssessmentApp';

export const metadata: Metadata = {
  title: 'Free AI Readiness Assessment | BitDepth AI Consulting',
  description: 'Find out if your business is ready for AI. Take our free 8-minute assessment and get a personalized action plan with scores across 5 key business areas: Data Quality, Process Clarity, Technology Stack, Team Readiness, and Strategic Alignment.',
  keywords: 'AI readiness assessment, business AI readiness, AI adoption, AI strategy, digital transformation, AI consulting, Canadian business AI, SMB AI assessment',
  authors: [{ name: 'BitDepth AI Consulting' }],
  creator: 'BitDepth AI Consulting',
  publisher: 'BitDepth AI Consulting',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/ai-readiness-assessment'
  },
  openGraph: {
    title: 'AI Readiness Assessment | BitDepth AI Consulting',
    description: '25 questions. 8 minutes. Find out where your business stands on AI readiness and get a custom action plan.',
    url: '/ai-readiness-assessment',
    siteName: 'BitDepth AI Consulting',
    type: 'website',
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
    title: 'AI Readiness Assessment | BitDepth AI Consulting',
    description: '25 questions. 8 minutes. Find out where your business stands on AI readiness and get a custom action plan.',
    images: ['/images/Social Media Profile Card.webp'],
    creator: '@BitDepthAI',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function AIReadinessAssessmentPage() {
  return (
    <>
      <AssessmentApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'AI Readiness Assessment',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'CAD',
            },
            description: 'Free AI readiness assessment for businesses. Evaluate your organization across 5 key areas: Data Quality, Process Clarity, Technology Stack, Team Readiness, and Strategic Alignment.',
            author: {
              '@type': 'Organization',
              name: 'BitDepth AI Consulting',
              url: 'https://bitdepthaiconsulting.com',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              ratingCount: '1',
            },
          }),
        }}
      />
    </>
  );
}
