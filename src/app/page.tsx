import About from '@/components/home/About';
import Services from '@/components/home/Services';
import Contact from '@/components/home/Contact';
import Clients from '@/components/home/Clients';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const pathname = '/';

export default function Home() {
  return (
    <>
      <Header pathname={pathname} />
      <main className="mx-auto max-w-screen-xl">
        <About id="about" className="mt-8" />
        <Services id="services" className="mt-16" />
        <Contact id="contact" className="mt-16" />
        <Clients className="my-16" />
      </main>
      <Footer pathname={pathname} />
    </>
  );
}
