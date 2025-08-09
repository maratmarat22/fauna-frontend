import services from '@/shared/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Contacts from '@/components/contact/Contacts/Contacts';
import RequestForm from '@/components/contact/client/RequestForm/RequestForm';
import Header from '@/components/layout/Header/Header';
import Footer from '@/components/layout/Footer';

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.href.split('/').at(-1) === slug);

  if (!service) return notFound();
  return (
    <div className="flex min-h-screen flex-col">
      <Header pathname={service.href} />
      <main className="mx-auto max-w-screen-xl flex-1">
        <div className="container mx-auto mt-8 mb-16 px-4">
          {/* Заголовок */}
          <h1 className="mb-6 text-3xl font-bold">{service.name}</h1>

          {/* Иконка */}
          <div className="mb-6">
            <Image src={service.icon?.src ?? ''} alt={service.name} width={120} height={120} />
          </div>

          {/* Описание */}
          {service.desc ? (
            <p className="text-lg leading-relaxed">{service.desc}</p>
          ) : (
            <p className="text-gray-600 italic">Описание услуги пока отсутствует.</p>
          )}
          <h2 className="section-header mx-auto mt-16 w-fit text-center">
            Свяжитесь с нами прямо сейчас...
          </h2>
          <Contacts className="mx-auto mt-8 w-fit" />
          <h2 className="section-header mx-auto mt-16 w-fit text-center">...или оставьте заявку</h2>
          <RequestForm
            className="bg-bg-contrast mx-auto mt-8 w-fit rounded-2xl p-5"
            serviceOption={service.id}
          />
        </div>
      </main>
      <Footer pathname={service.href} />
    </div>
  );
}

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.href.split('/').at(-1) }));
}
