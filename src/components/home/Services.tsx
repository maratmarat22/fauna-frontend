import Image from 'next/image';
import Link from 'next/link';
import services from '@/data/services';

const Services = ({ id }: { id: string }) => {
  return (
    <section id={id} className="scroll-mt-40 px-4 py-16 sm:px-6 lg:px-12">
      <h2 className="section-header mx-auto mb-6 w-fit">Популярные услуги</h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Utilization */}
        <div className="services-card">
          <h3>Вывоз и утилизация отходов</h3>
          <ul className="space-y-4">
            {services
              .filter(s => s.rootPageSide == 'l')
              .map((s, i) => (
                <li
                  key={i}
                  className="group flex items-center justify-between rounded-xl border border-transparent pl-3 transition-all duration-300 hover:border-[#59b5a3]/50 hover:bg-[rgba(89,181,163,0.05)] hover:shadow-lg"
                >
                  <Link
                    href={s.href}
                    className="flex w-full items-center justify-between gap-4"
                  >
                    {/* Текст */}
                    <span className="text-foreground text-lg font-semibold transition-colors duration-300 group-hover:text-[#59b5a3]">
                      {s.name}
                    </span>

                    {/* Фиксированная обёртка */}
                    <div className="min-w-32 overflow-hidden select-none">
                      <Image
                        src={s.iconSrc}
                        alt={s.iconAlt}
                        width={1024}
                        height={1024}
                        className={`transition-transform delay-100 duration-500 ${s.isAnimatable ? 'group-hover:translate-x-50' : ''}`}
                        style={{ maxWidth: 128, maxHeight: 128 }}
                      />
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        {/* Delivery */}

        <div className="services-card">
          <h3>Доставка нерудных материалов</h3>
          <ul className="space-y-4">
            {services
              .filter(s => s.rootPageSide == 'r')
              .map((s, i) => (
                <li
                  key={i}
                  className="group flex items-center justify-between rounded-xl border border-transparent pr-3 transition-all duration-300 hover:border-[#59b5a3]/50 hover:bg-[rgba(89,181,163,0.05)] hover:shadow-lg"
                >
                  <Link
                    href={s.href}
                    className="flex w-full items-center justify-between gap-4"
                  >
                    {/* Фиксированная обёртка */}
                    <div className="min-w-32 overflow-hidden select-none">
                      <Image
                        src={s.iconSrc}
                        alt={s.iconAlt}
                        width={1024}
                        height={1024}
                        className={`transition-transform delay-50 duration-500 ${s.isAnimatable ? 'group-hover:-translate-x-50' : ''}`}
                        style={{ maxWidth: 128, maxHeight: 128 }}
                      />
                    </div>

                    {/* Текст */}
                    <span className="text-foreground text-end text-lg font-semibold transition-colors duration-300 group-hover:text-[#59b5a3]">
                      {s.name}
                    </span>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
