import services from '@/data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Contacts from '@/components/contact/Contacts';
import Order from '@/components/contact/Order';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);

  if (!service) return notFound();
  return (
    <div className="flex min-h-screen flex-col">
      <Header pathname={service.href} />
      <main className="mx-auto max-w-screen-xl flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Заголовок */}
          <h1 className="mb-6 text-3xl font-bold">{service.name}</h1>

          {/* Иконка */}
          <div className="mb-6">
            <Image
              src={service.iconSrc}
              alt={service.iconAlt}
              width={120}
              height={120}
            />
          </div>

          {/* Описание */}
          {service.desc ? (
            <p className="text-lg leading-relaxed">{service.desc}</p>
          ) : (
            <p className="text-gray-600 italic">
              Описание услуги пока отсутствует.
            </p>
          )}

          <Contacts className="mt-16" />
          <Order className="mt-16" />
        </div>
      </main>
      <Footer pathname={service.href} />
    </div>
  );
}

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}
