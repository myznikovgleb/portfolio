/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap'
      }
    ]
  },
  async headers() {
    const headers = []
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') {
      headers.push({
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all'
          }
        ],
        source: '/*'
      })
    }
    return headers
  }
}

module.exports = nextConfig
