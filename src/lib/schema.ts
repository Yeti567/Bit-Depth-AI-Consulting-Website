export type FAQItem = {
  question: string;
  answer: string;
};

const SITE_URL = 'https://bitdepthaiconsulting.com';
const BRAND_NAME = 'Bit Depth AI Consulting';
const LOGO_URL = `${SITE_URL}/images/logo%20svg%20transparent.svg`;

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
          text: 'We start with a short intake call to understand your business and get access to the information we need. From there we run structured interviews with you and your key staff typically 4 to 12 people depending on the audit tier. We map your workflows, review your technology stack, and assess your data environment. Most of the work happens on our end. Your team\'s time commitment is focused and manageable. At the end you get a readout call where we walk you through everything we found.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does the AI audit take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most standard audits take 5 to 8 business days. Quick scans can be done in 2 to 3 days. Deep-dive roadmaps for larger or more complex businesses take 10 to 15 days.'
        }
      },
      {
        '@type': 'Question',
        name: 'What if the audit finds that we are not ready for AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'That is still a successful outcome. If your data is not clean or your systems are not integrated enough to support AI yet, we will tell you exactly what needs to be in place and give you a prioritized plan to get there. That foundation work has real value. and it means when you do invest in AI it will actually work.'
        }
      },
      {
        '@type': 'Question',
        name: 'What if the numbers do not justify building anything?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We will tell you. Honestly. We are not in the business of selling implementations that do not make financial sense. If the ROI is not there we will say so. and you will still walk away with a clear picture of your operations and a roadmap for the future.'
        }
      },
      {
        '@type': 'Question',
        name: 'What exactly are the terms of the audit credit guarantee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'When you complete any tier of the Bit Depth AI Opportunity Audit, the full fee you paid is credited against your first implementation engagement provided you sign your implementation agreement within 90 days of receiving your audit deliverables. The credit applies to any Bit Depth implementation service: workflow automation, custom AI workers, AI strategy and roadmapping, or training and enablement. There is no minimum project size. The credit has no cash value, is non-transferable, and applies to your first implementation engagement only.'
        }
      }
    ]
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND_NAME,
    alternateName: 'Bit Depth',
    url: SITE_URL,
    logo: LOGO_URL,
    description: 'Vendor-neutral AI consulting for Canadian small and mid-sized businesses',
    founder: {
      '@type': 'Person',
      name: 'Blake Cowan'
    },
    foundingLocation: {
      '@type': 'Place',
      name: 'Barriere, British Columbia, Canada'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '02 Birch Lane',
      addressLocality: 'Barriere',
      addressRegion: 'BC',
      postalCode: 'V0E 1E0',
      addressCountry: 'CA'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-780-832-5158',
      email: 'blake@bitdepthaiconsulting.com',
      contactType: 'sales',
      availableLanguage: 'English'
    },
    sameAs: [
      'https://www.linkedin.com/company/bitdepth-ai-consulting-ltd',
      'https://www.youtube.com/channel/UCz6b7iSR3mik1lzlxoAsZMA'
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    },
    serviceType: ['AI Consulting', 'Workflow Automation', 'AI Strategy', 'Digital Transformation']
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
    name: 'Bit Depth AI Consulting Ltd.',
    description: 'Vendor-neutral AI consulting for Canadian small and mid-sized businesses. We identify where time and money are being lost, then implement the right AI solution.',
    url: SITE_URL,
    logo: LOGO_URL,
    founder: {
      '@type': 'Person',
      name: 'Blake Cowan'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Barriere',
      addressRegion: 'BC',
      addressCountry: 'CA'
    },
    areaServed: [
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'United States' }
    ],
    serviceType: [
      'AI Opportunity Audit',
      'Workflow Automation',
      'Custom AI Workers',
      'AI Strategy and Roadmapping',
      'AI Training and Enablement'
    ],
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
      name: BRAND_NAME,
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
