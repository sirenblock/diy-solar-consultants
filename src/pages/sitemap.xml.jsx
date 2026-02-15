// sitemap.xml.jsx - Generates XML sitemap for SEO
import { getStatesList } from '@/data/stateInfo';

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const baseUrl = 'https://diysolarconsultants.com';
  const currentDate = new Date().toISOString();

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/equipment', priority: '0.8', changefreq: 'weekly' },
    { url: '/portfolio', priority: '0.8', changefreq: 'weekly' },
    { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
    { url: '/calculator', priority: '0.8', changefreq: 'monthly' },
    { url: '/calculators', priority: '0.7', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/design-request', priority: '1.0', changefreq: 'monthly' },
    { url: '/reviews', priority: '0.8', changefreq: 'weekly' },
    { url: '/faq', priority: '0.8', changefreq: 'monthly' },
    { url: '/process', priority: '0.8', changefreq: 'monthly' },
    { url: '/resources', priority: '0.7', changefreq: 'weekly' },
  ];

  // Include all 50 state-specific pages for local SEO
  const states = getStatesList();
  const statePages = states.map((state) => ({
    url: `/solar-design/${state.slug}`,
    priority: '0.7',
    changefreq: 'monthly',
  }));

  const allPages = [...staticPages, ...statePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      return `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return { props: {} };
}
