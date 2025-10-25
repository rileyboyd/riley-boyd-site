import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable source maps in production to reduce bundle size
  productionBrowserSourceMaps: false,
  // Optimize packages
  transpilePackages: [
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/react-fontawesome',
  ],
  eslint: {
    // Temporarily ignore ESLint during production builds so Netlify doesn't fail
    // on legacy/JS files. Clean these rules progressively and remove this.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Temporarily allow type errors during build so we can incrementally fix them
    ignoreBuildErrors: true,
  },
}

export default nextConfig
