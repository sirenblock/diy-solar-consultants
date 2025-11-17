// Dynamic sitemap generator for DIY Solar Consultants

function generateSiteMap() {
  const baseUrl = 'https://diysolar.com';
  const currentDate = new Date().toISOString();

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: '1.0',
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: '0.9',
    },
    {
      url: `${baseUrl}/process`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/equipment`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/design-request`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: '0.8',
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: '0.6',
    },
    {
      url: `${baseUrl}/calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: '0.7',
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: '0.6',
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: '0.6',
    },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    return `  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function SiteMap() {
  // getServerSideProps will handle the response
  return null;
}
