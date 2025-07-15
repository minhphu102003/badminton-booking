import '@styles/global.scss';
import { siteMetadata } from '@interface-adapters/metadata/siteMetadata';
import ReduxProvider from '@interface-adapters/providers/ReduxProvider';

export const metadata = siteMetadata;

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
