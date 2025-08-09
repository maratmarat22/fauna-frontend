import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features/Features';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';
import Clients from '@/components/home/Clients';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer';

const pathname = '/';

export const metadata: Metadata = {
  title: 'Фауна — вывоз мусора и доставка нерудных материалов',
  description: 'Вывоз мусора, доставка нерудных материалов и демонтаж строений в Москве и МО',
};

export default function Home() {
  return (
    <>
      <Header pathname={pathname} />
      <main>
        <Hero id="hero" />
        <Features className="mx-auto mt-16 max-w-screen-2xl" />
        <Services id="services" className="mx-auto mt-16 max-w-screen-xl" />
        <Contact id="contact" className="mx-auto mt-16 max-w-screen-xl" />
        <Clients className="mx-auto my-16 max-w-screen-xl" />
      </main>
      <Footer pathname={pathname} />
    </>
  );
}
