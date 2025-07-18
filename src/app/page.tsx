import Footer from '@/app/presentation/layout/Footer';
import Landing from '@components/home/Landing';
import { Banner } from '@presentation/components/Banner';
import { Header } from '@presentation/components/Header';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Banner />
      <Landing />
      <Footer />
    </main>
  );
}
