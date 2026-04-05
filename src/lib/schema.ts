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
    description: 'Vendor-neutral AI consulting for Canadian SMBs. We audit first, then build what fits.',
    founder: {
      '@type': 'Person',
      name: 'Blake Cowan'
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
      'https://twitter.com/bitdepthai'
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
    description: 'AI consulting and implementation for Canadian small and mid-sized businesses.',
    url: 'https://bitdepthaiconsulting.com',
    telephone: '+1-780-832-5158',
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
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00'
      }
    ]
  };
}
