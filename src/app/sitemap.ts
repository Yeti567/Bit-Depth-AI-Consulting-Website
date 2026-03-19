import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.bitdepth.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/industries',
    '/industries/oil-and-gas',
    '/industries/manufacturing',
    '/ai-audit',
    '/ai-readiness-assessment',
    '/about',
    '/resources',
    '/contact',
    '/privacy-policy'
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route === '/ai-audit' || route === '/services'
          ? 0.9
          : route === '/industries' || route === '/about' || route === '/contact'
            ? 0.8
            : 0.7
  }));
}
