import Footer from '@/app/presentation/layout/Footer';
import Landing from '@components/home/Landing';
import { Header } from '@presentation/components/Header';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Landing />
      <Footer />
    </main>
  );
}
