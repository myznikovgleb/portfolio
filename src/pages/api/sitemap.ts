export default function handler(req: any, res: any) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/xml')

  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
      <loc>https://portfolio-myznikovgleb.vercel.app/</loc>
      <loc>https://portfolio-myznikovgleb.vercel.app/about/</loc>
      <loc>https://portfolio-myznikovgleb.vercel.app/settings/</loc>
    </url>
    </urlset>`

  res.end(xml)
}
