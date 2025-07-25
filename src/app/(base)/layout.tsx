import '@styles/global.scss';
import { siteMetadata } from '@interface-adapters/metadata/siteMetadata';
import ReduxProvider from '@interface-adapters/providers/ReduxProvider';
import { ToastProvider } from '@interface-adapters/providers/ToastProvider';
import { Footer } from '@presentation/components/Footer';
import { Header } from '@presentation/components/Header';
import { PageTransition } from '@presentation/components/ui/Loading';

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <ToastProvider />
          <PageTransition>
            <Header />
            <main>{children}</main>
            <Footer />
          </PageTransition>
        </ReduxProvider>
      </body>
    </html>
  );
}
