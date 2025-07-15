import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/infrastructure/styles')],
    experimental: {
      allowedDevOrigins: ['http://192.168.1.3:3000'],
    },
  },
  images: {
    domains: ['png.pngtree.com'],
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
