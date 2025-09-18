import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import News from '@/components/News';
import Services from '@/components/Service';
import PublicInfo from '@/components/PublicInfo';
import WhatsAppBot from '@/components/WhatsAppBot';
import Footer from '@/components/Footer';
import StatistikSection from '@/components/Petugas';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <News />
      <Services />
      <PublicInfo />
      <StatistikSection />
      <WhatsAppBot />
      <Footer />
    </main>
  );
}