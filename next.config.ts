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
    domains: [
      'png.pngtree.com',
      'encrypted-tbn0.gstatic.com',
      'media.istockphoto.com',
      't4.ftcdn.net',
      'plus.unsplash.com',
      'images.unsplash.com',
      'static.nike.com',
      'gophersport.com',
      'highachievers.com.sg',
      'ichef.bbci.co.uk',
      'www.misshsaa.com',
      'resources.worldrugby-rims.pulselive.com',
      'i.natgeofe.com',
      'www.mikesdivestore.com',
      'upload.wikimedia.org',
      'blog.myswimpro.com',
      'res.klook.com',
      'fitgymsoftware.com',
      'outdoorswire.usatoday.com',
      'img.tripi.vn',
      'hdfitness.vn',
      'cdn.britannica.com',
      'hips.hearstapps.com',
      'awesomewalls.ie',
      'colony.work',
      'meetings.skift.com',
      'images.everydayhealth.com',
      'cdn.onefc.com',
      'cdnphoto.dantri.com.vn',
      'cdn.nhathuoclongchau.com.vn',
    ],
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  },
};

export default nextConfig;
