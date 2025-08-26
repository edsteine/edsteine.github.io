import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.IS_GH_PAGES_DEPLOY === 'true' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
 