export type FAQItem = {
  question: string;
  answer: string;
};

const SITE_URL = 'https://bitdepthaiconsulting.com';
const BRAND_NAME = 'BitDepth AI Consulting';
const LEGAL_NAME = 'BitDepth AI Consulting Ltd.';
const LOGO_URL = `${SITE_URL}/images/logo%20svg%20transparent.svg`;

const SERVICE_TYPES = [
  'AI Opportunity Audit',
  'Missed Call Text Back',
  'AI Implementation',
  'Workflow Automation',
  'Custom AI Workers'
];

export function buildFaqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
}

export function buildAIAuditFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What does an AI audit actually look like day to day?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We start with a 90 minute owner interview to understand the business and get access to the information we need. From there we run up to four operational interviews with key staff, typically the dispatcher, lead estimator, and office manager. We map your workflows across acquisition, delivery, and support, review your technology stack, and assess your data environment. At the end you get a readout call where we walk you through the prioritized roadmap, ROI estimates, and the implementation plan.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does the AI audit take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The AI Opportunity Audit is a structured 14 day diagnostic at a flat fee of $5,000.'
        }
      },
      {
        '@type': 'Question',
        name: 'What if the audit finds that we are not ready for AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'That is still a successful outcome. If your data is not clean or your systems are not integrated enough to support AI yet, we will tell you exactly what needs to be in place and give you a prioritized plan to get there. That foundation work has real value, and it means when you do invest in AI it will actually work.'
        }
      },
      {
        '@type': 'Question',
        name: 'What if the numbers do not justify building anything?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We will tell you. We are not in the business of selling implementations that do not make financial sense. If the ROI is not there we will say so, and you will still walk away with a clear picture of your operations and a roadmap for the future.'
        }
      },
      {
        '@type': 'Question',
        name: 'What exactly are the terms of the audit credit guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When you complete the BitDepth AI Opportunity Audit, the full $5,000 fee is credited against your first implementation engagement provided you sign your implementation agreement within 90 days of receiving your audit deliverables. The credit applies to any BitDepth implementation service: Missed Call Text Back, workflow automation, custom AI workers, or a multi-phase AI implementation. There is no minimum project size. The credit has no cash value, is non-transferable, and applies to your first implementation engagement only.'
        }
      }
    ]
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: LEGAL_NAME,
    alternateName: BRAND_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description:
      'Vendor-neutral AI consulting for Canadian trades and contractors. We audit first, then build the AI and automation that plugs the leak.',
    founder: {
      '@type': 'Person',
      name: 'Blake Cowan'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'blake@bitdepthaiconsulting.com',
      contactType: 'sales',
      availableLanguage: 'English',
      areaServed: 'CA'
    },
    sameAs: [
      'https://www.linkedin.com/company/bitdepth-ai-consulting-ltd',
      'https://www.youtube.com/channel/UCz6b7iSR3mik1lzlxoAsZMA'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    },
    serviceType: SERVICE_TYPES
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/resources?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: LEGAL_NAME,
    description:
      'Vendor-neutral AI consulting for Canadian trades and contractors. We diagnose where the money is leaking, then build the AI and automation that plugs the leak.',
    url: SITE_URL,
    logo: LOGO_URL,
    founder: {
      '@type': 'Person',
      name: 'Blake Cowan'
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
      { '@type': 'AdministrativeArea', name: 'Golden Horseshoe' },
      { '@type': 'AdministrativeArea', name: 'Ontario' },
      { '@type': 'Country', name: 'Canada' }
    ],
    serviceType: SERVICE_TYPES,
    priceRange: '$$',
    sameAs: [
      'https://www.linkedin.com/company/bitdepth-ai-consulting-ltd',
      'https://www.youtube.com/channel/UCz6b7iSR3mik1lzlxoAsZMA'
    ]
  };
}

export function buildServiceSchema(
  name: string,
  description: string,
  url: string,
  serviceType: string = 'AI Consulting'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'Organization',
      name: LEGAL_NAME,
      url: SITE_URL
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    },
    url,
    name,
    description
  };
}

export function buildArticleSchema(
  headline: string,
  url: string,
  imageUrl: string,
  datePublished: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    author: {
      '@type': 'Person',
      name: 'Blake Cowan'
    },
    publisher: {
      '@type': 'Organization',
      name: BRAND_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL
      }
    },
    datePublished,
    url,
    image: {
      '@type': 'ImageObject',
      url: imageUrl
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}
