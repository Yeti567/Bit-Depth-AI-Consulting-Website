export type FAQItem = {
  question: string;
  answer: string;
};

const SITE_URL = 'https://bitdepthaiconsulting.com';
const BRAND_NAME = 'BitDepth AI Consulting';
const LEGAL_NAME = 'BitDepth AI Consulting Ltd.';
const LOGO_URL = `${SITE_URL}/images/logo%20svg%20transparent.svg`;
const PHONE = '+1-780-832-5158';
const EMAIL = 'blake@bitdepthaiconsulting.com';
const LOCALITY = 'Barriere';
const REGION = 'BC';
const COUNTRY = 'CA';
const ORG_ID = `${SITE_URL}/#organization`;

const SERVICE_TYPES = [
  'AI Opportunity Audit',
  'AI Booking Agent',
  'Profit Leak Detection Review',
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
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: LEGAL_NAME,
    alternateName: BRAND_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    email: EMAIL,
    telephone: PHONE,
    description:
      'Vendor-neutral AI consulting and automation for Canadian trades, contractors, and field-service businesses.',
    founder: {
      '@type': 'Person',
      name: 'Blake Cowan'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: LOCALITY,
      addressRegion: REGION,
      addressCountry: COUNTRY
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: EMAIL,
      telephone: PHONE,
      contactType: 'sales',
      availableLanguage: 'English',
      areaServed: 'CA'
    },
    sameAs: [
      'https://www.linkedin.com/company/bitdepth-ai-consulting-ltd',
      'https://www.youtube.com/channel/UCz6b7iSR3mik1lzlxoAsZMA'
    ],
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'British Columbia' },
      { '@type': 'AdministrativeArea', name: 'Alberta' },
      { '@type': 'AdministrativeArea', name: 'Greater Toronto Area' },
      { '@type': 'AdministrativeArea', name: 'Golden Horseshoe' },
      { '@type': 'AdministrativeArea', name: 'Ontario' },
      { '@type': 'Country', name: 'Canada' }
    ],
    serviceType: SERVICE_TYPES,
    priceRange: '$$'
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
      'Vendor-neutral AI consulting and automation for Canadian trades, contractors, and field-service businesses.',
    url: SITE_URL,
    logo: LOGO_URL,
    email: EMAIL,
    telephone: PHONE,
    founder: {
      '@type': 'Person',
      name: 'Blake Cowan'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: LOCALITY,
      addressRegion: REGION,
      addressCountry: COUNTRY
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'British Columbia' },
      { '@type': 'AdministrativeArea', name: 'Alberta' },
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

interface ServiceOffer {
  price: number;
  priceCurrency?: string;
  description?: string;
}

export function buildServiceSchema(
  name: string,
  description: string,
  url: string,
  serviceType: string = 'AI Consulting',
  offer?: ServiceOffer
) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'ProfessionalService',
      '@id': ORG_ID,
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

  if (offer) {
    schema.offers = {
      '@type': 'Offer',
      price: offer.price,
      priceCurrency: offer.priceCurrency ?? 'CAD',
      description: offer.description ?? name,
      url
    };
  }

  return schema;
}

export function buildArticleSchema(
  headline: string,
  url: string,
  imageUrl: string,
  datePublished: string,
  dateModified?: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    author: {
      '@type': 'Person',
      name: 'Blake Cowan',
      url: `${SITE_URL}/about`
    },
    publisher: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: BRAND_NAME,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL
      }
    },
    datePublished,
    dateModified: dateModified ?? datePublished,
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
