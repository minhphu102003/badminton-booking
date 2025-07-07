import type { Metadata } from 'next';
import '@styles/globals.scss';
import ReduxProvider from '@interface-adapters/providers/ReduxProvider';

export const metadata: Metadata = {
  title: 'Badminton Booking | Book Badminton Courts Online Quickly',
  description:
    'A modern platform to search, book, and pay for badminton courts near you. Save time, easy to use, supports MoMo, VNPAY, and other online payments.',
  keywords: [
    'badminton court booking',
    'sports court reservation',
    'book badminton online',
    'badminton near me',
  ],
  authors: [{ name: 'BadmintonHub', url: 'https://badmintonhub.vn' }],
  creator: 'BadmintonHub Team',
  applicationName: 'Badminton Booking App',
  metadataBase: new URL('https://badmintonhub.vn'),
  openGraph: {
    title: 'Badminton Booking | Book Your Badminton Court Easily',
    description:
      'Find and reserve badminton courts near you with just a few clicks. Fast confirmation and online payment supported.',
    url: 'https://badmintonhub.vn',
    siteName: 'BadmintonHub',
    images: [
      {
        url: 'https://badmintonhub.vn/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Badminton Booking - Online court reservation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body>{children}</body>
      </ReduxProvider>
    </html>
  );
}
