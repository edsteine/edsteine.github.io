import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio/', // Add this line
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
