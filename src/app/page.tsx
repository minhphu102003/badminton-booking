import Footer from '@/app/presentation/layout/Footer';
import { Banner } from '@presentation/components/Banner';
import { Header } from '@presentation/components/Header';
import { Landing } from '@presentation/components/Landing';

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
