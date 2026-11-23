/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://theibresources.com',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  outDir: './out',
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/_next/', '/slides/', '/*.json$'] },
    ],
    additionalSitemaps: ['https://theibresources.com/sitemap.xml'],
  },
  transform: async (config, path) => {
    // Set priority and changefreq based on path
    if (path === '/') {
      return { loc: path, changefreq: 'weekly', priority: 1.0 };
    }
    if (path.startsWith('/courses/')) {
      return { loc: path, changefreq: 'monthly', priority: 0.8 };
    }
    if (path.startsWith('/ia-guide') || path.startsWith('/ee-guide')) {
      return { loc: path, changefreq: 'monthly', priority: 0.9 };
    }
    if (path === '/about' || path === '/contact' || path === '/resources') {
      return { loc: path, changefreq: 'monthly', priority: 0.7 };
    }
    if (path === '/privacy' || path === '/terms') {
      return { loc: path, changefreq: 'yearly', priority: 0.3 };
    }
    return { loc: path, changefreq: 'weekly', priority: 0.5 };
  },
};