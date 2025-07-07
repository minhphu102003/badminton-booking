'use client';

import dynamic from 'next/dynamic';

const Content = dynamic(() => import('@components/home/Content'), {
  ssr: false,
  loading: () => <p>Loading content...</p>,
});

export default function ClientWrapper() {
  return <Content />;
}
