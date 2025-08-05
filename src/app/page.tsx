import About from '@/components/home/About';
import Services from '@/components/home/Services';
import ContactUs from '@/components/home/ContactUs';
import Cars from '@/components/home/Cars';
import Clients from '@/components/home/Clients';

export default function Home() {
  return (
    <div>
      <About />
      <Services id="services" />
      <ContactUs id="contact" />
      <Cars id="cars" />
      <Clients />
    </div>
  );
}
