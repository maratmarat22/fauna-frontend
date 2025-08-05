import services from '@/data/services';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  return services.map(s => ({
    slug: s.href.split('/').at(-1)!,
  }));
}

export default async function ServicePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const service = services.find(s => s.href.split('/').at(-1) === slug);
  if (!service) return notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-6 p-6">
      <div className="flex flex-col items-center gap-6 md:flex-row">
        <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={service.iconSrc}
            alt={service.iconAlt}
            width={128}
            height={128}
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{service.name}</h1>
          {service.desc && <p className="mt-2 text-gray-700">{service.desc}</p>}
        </div>
      </div>

      <div className="prose prose-lg">
        <p>
          Здесь можно добавить подробное описание услуги, преимущества, кейсы и
          т.п. Пример текста описания…
        </p>
      </div>

      <Link
        href="/contact"
        className="bg-main-color hover:bg-main-color-dark mt-4 inline-block rounded-lg px-6 py-3 text-white transition"
      >
        Заказать услугу
      </Link>
    </div>
  );
}
