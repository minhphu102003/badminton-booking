import '@styles/global.scss';
import { siteMetadata } from '@interface-adapters/metadata/siteMetadata';
import ReduxProvider from '@interface-adapters/providers/ReduxProvider';
import { Footer } from './presentation/components/Footer';
import { Header } from './presentation/components/Header';

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
