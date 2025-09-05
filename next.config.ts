import type { NextConfig } from "next";

// Bundle analyzer configuration
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env['ANALYZE'] === 'true',
});

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env['NEXT_PUBLIC_BASE_PATH'] || '',
  
  // Image optimization configuration
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  // Note: optimizeCss experimental feature disabled due to critters dependency issues

  // Note: Security headers are handled by deployment platform for static exports

  // Webpack configuration
  webpack: (config, { dev }) => {
    // Analyze bundle size
    if (process.env['ANALYZE'] === 'true') {
      console.log('📊 Bundle analysis enabled');
    }

    // Optimize for production
    if (!dev) {
      config.optimization = {
        ...config.optimization,
        sideEffects: false,
      };
    }

    return config;
  },
};

export default withBundleAnalyzer(nextConfig);
 