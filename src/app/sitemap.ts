// SEO implemented for bitdepthaiconsulting.com
// Reminder: Submit sitemap at https://search.google.com/search-console after the redesign goes live

import { MetadataRoute } from 'next';
import { generateStaticParams } from '@/app/resources/[slug]/page';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bitdepthaiconsulting.com';
  const lastModified = '2026-05-01';

  const retiredResourceSlugs = new Set([
    'dead-in-the-field-why-predictive-maintenance-cant-wait',
    'digital-twin-technology-how-smart-manufacturers-are-pulling-ahead',
    'see-every-defect-ai-computer-vision-quality-control',
    'how-to-evaluate-ai-use-cases-in-industrial-operations',
    'what-vendor-neutral-ai-consulting-actually-means',
    'building-an-ai-roadmap-for-canadian-mid-market-companies'
  ]);

  const resourceEntries = generateStaticParams()
    .filter(({ slug }) => !retiredResourceSlugs.has(slug))
    .map(({ slug }) => ({
      url: `${baseUrl}/resources/${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7
    }));

  const staticEntries: MetadataRoute.Sitemap = (
    [
      { url: baseUrl, changeFrequency: 'weekly', priority: 1.0 },
      { url: `${baseUrl}/ai-audit`, changeFrequency: 'weekly', priority: 0.95 },
      { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9 },
      { url: `${baseUrl}/services/ai-audit`, changeFrequency: 'monthly', priority: 0.85 },
      { url: `${baseUrl}/services/missed-call-text-back`, changeFrequency: 'monthly', priority: 0.85 },
      { url: `${baseUrl}/services/ai-implementation`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/services/workflow-automation`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/services/custom-ai-workers`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/industries`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/industries/hvac-plumbing`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/industries/electrical`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/industries/roofing-ici-construction`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/industries/field-services`, changeFrequency: 'monthly', priority: 0.8 },
      { url: `${baseUrl}/industries/professional-services`, changeFrequency: 'monthly', priority: 0.7 },
      { url: `${baseUrl}/industries/cor-pathway`, changeFrequency: 'monthly', priority: 0.7 },
      { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.7 },
      { url: `${baseUrl}/resources`, changeFrequency: 'weekly', priority: 0.7 },
      { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.6 },
      { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
      { url: `${baseUrl}/terms-of-use`, changeFrequency: 'yearly', priority: 0.3 }
    ] as const
  ).map((entry) => ({ ...entry, lastModified }));

  return [...staticEntries, ...resourceEntries];
}
