import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    additionalData: `@use 'index' as *;`,
    experimental: {
      allowedDevOrigins: ['http://192.168.1.3:3000'],
    },
  },
  images: {
    domains: ['png.pngtree.com'],
  },
};

export default nextConfig;
