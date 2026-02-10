import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // No queremos que Google indexe tu API de correos
    },
    sitemap: 'https://mgdbitforge.cloud/sitemap.xml',
  };
}