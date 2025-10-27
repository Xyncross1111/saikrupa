/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    // Add strong browser caching for static assets and sensible caching for public files
    return [
      // Next.js build output (fingerprinted) – safe to cache for 1 year and mark immutable
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Next.js image optimizer assets (kept for completeness even if images.unoptimized is true)
      {
        source: '/_next/image/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Fonts and other long-lived static assets you might place in public/ with hashes in filenames
      {
        source: '/:all*.(woff|woff2|ttf|otf|eot)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Images/media from public/ (no guaranteed hash) – cache for a week and allow SWR
      {
        source: '/:all*.(png|jpg|jpeg|gif|svg|webp|avif|ico|mp4|mp3|pdf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      // XML/TXT like sitemap or robots – cache for a day
      {
        source: '/:all*.(xml|txt)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ]
  },
}

export default nextConfig
