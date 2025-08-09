import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header/Header';
import services from '@/shared/services';
import { Metadata } from 'next';
import Link from 'next/link';

const pathname = '/uslugi';

export const metadata: Metadata = {
  title: 'Фауна — услуги',
};

export default function ServicesPage() {
  return (
    <>
      <Header pathname={pathname} />
      <main className="mx-auto max-w-screen-xl">
        <h1 className="section-header mx-auto mt-8 w-fit">Услуги</h1>

        {services.map((s, i) => (
          <div key={i}>
            <Link href={s.href}>
              <h2 className="">{s.name}</h2>
            </Link>
          </div>
        ))}
      </main>
      <Footer pathname={pathname} />
    </>
  );
}
