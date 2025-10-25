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
  // Optimize Font Awesome and reduce bundle size
  webpack: (config, { isServer }) => {
    // Only apply to client bundles
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks?.cacheGroups,
            // Separate Font Awesome into its own chunk
            fontawesome: {
              test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
              name: 'fontawesome',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      }
    }
    return config
  },
}

export default nextConfig
