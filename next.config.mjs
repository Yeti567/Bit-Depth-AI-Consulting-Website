/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  allowedDevOrigins: ['127.0.0.1'],
  async redirects() {
    return [
      // Retired AI Assessment — folded into the audit
      { source: '/ai-readiness-assessment', destination: '/ai-audit', permanent: true },
      { source: '/ai-assessment', destination: '/ai-audit', permanent: true },

      // Old strategy/training surface → AI Implementation
      { source: '/ai-strategy', destination: '/services/ai-implementation', permanent: true },
      { source: '/services/ai-strategy', destination: '/services/ai-implementation', permanent: true },
      { source: '/services/ai-training', destination: '/services', permanent: true },

      // Old service slug rename
      { source: '/services/ai-workers', destination: '/services/custom-ai-workers', permanent: true },

      // Retired industry verticals
      { source: '/industries/oil-and-gas', destination: '/industries', permanent: true },
      { source: '/industries/manufacturing', destination: '/industries', permanent: true },
      { source: '/industries/transportation', destination: '/industries', permanent: true },
      { source: '/industries/construction', destination: '/industries/roofing-ici-construction', permanent: true },

      // Retired resource articles (oil & gas / manufacturing / predictive maintenance era)
      { source: '/resources/dead-in-the-field-why-predictive-maintenance-cant-wait', destination: '/resources', permanent: true },
      { source: '/resources/digital-twin-technology-how-smart-manufacturers-are-pulling-ahead', destination: '/resources', permanent: true },
      { source: '/resources/see-every-defect-ai-computer-vision-quality-control', destination: '/resources', permanent: true },
      { source: '/resources/how-to-evaluate-ai-use-cases-in-industrial-operations', destination: '/resources', permanent: true },
      { source: '/resources/what-vendor-neutral-ai-consulting-actually-means', destination: '/resources', permanent: true },
      { source: '/resources/building-an-ai-roadmap-for-canadian-mid-market-companies', destination: '/resources', permanent: true }
    ];
  }
};

export default nextConfig;
