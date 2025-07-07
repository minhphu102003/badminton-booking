import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
    additionalData: `$var: red;`,
    experimental: {
      allowedDevOrigins: ['http://192.168.1.3:3000'],
    },
  },
};

export default nextConfig;
