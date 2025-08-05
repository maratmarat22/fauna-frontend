import About from '@/components/home/About';
import Services from '@/components/home/Services';
import ContactUs from '@/components/home/ContactUs';
import Clients from '@/components/home/Clients';

export default function Home() {
  return (
    <>
      <About className="mt-8" />
      <Services id="services" className="mt-16" />
      <ContactUs id="contact" className="mt-16" />
      <Clients className="my-16" />
    </>
  );
}
