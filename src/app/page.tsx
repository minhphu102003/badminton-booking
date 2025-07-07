import ClientWrapper from '@components/common/ClientWrapper';
import Landing from '@components/home/Landing';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Landing />
      <ClientWrapper />
      <Footer />
    </main>
  );
}
