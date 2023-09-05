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
    headers.push(
      {
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all'
          }
        ],
        source: '/'
      },
      {
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all'
          }
        ],
        source: '/:slug'
      }
    )
    return headers
  }
}

module.exports = nextConfig
