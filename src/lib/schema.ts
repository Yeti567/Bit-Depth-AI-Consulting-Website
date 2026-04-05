export type FAQItem = {
  question: string;
  answer: string;
};

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

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BitDepth AI Consulting',
    alternateName: 'BitDepth',
    url: 'https://bitdepthaiconsulting.com',
    logo: 'https://bitdepthaiconsulting.com/images/logo svg transparent.svg',
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
      'https://www.facebook.com/bitpathconsultingltd',
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
    name: 'BitDepth AI Consulting',
    url: 'https://bitdepthaiconsulting.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://bitdepthaiconsulting.com/resources?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'BitDepth AI Consulting',
    description: 'Vendor-neutral AI consulting for Canadian small and mid-sized businesses',
    url: 'https://bitdepthaiconsulting.com',
    telephone: 'PHONE NUMBER NEEDED',
    email: 'blake@bitdepthaiconsulting.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '02 Birch Lane',
      addressLocality: 'Barriere',
      addressRegion: 'BC',
      postalCode: 'V0E 1E0',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.1833,
      longitude: -120.1333
    },
    priceRange: '$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Canada'
    }
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
      name: 'BitDepth AI Consulting',
      url: 'https://bitdepthaiconsulting.com'
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
  datePublished: string = new Date().toISOString().split('T')[0]
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
      name: 'BitDepth AI Consulting',
      url: 'https://bitdepthaiconsulting.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bitdepthaiconsulting.com/images/logo svg transparent.svg'
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
