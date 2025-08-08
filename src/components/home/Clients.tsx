import Image, { StaticImageData } from 'next/image';

import jamies from '@/public/clients/jamies-italian.png';
import hyatt from '@/public/clients/hyatt-regency.png';
import krokus from '@/public/clients/krokus-ekspo.png';
import goodman from '@/public/clients/goodman.png';
import perek from '@/public/clients/perekryostok.png';
import verniy from '@/public/clients/verniy.png';
// Замените «1.288...png» на нормальное имя файла и импорт:
import dominos from '@/public/clients/dominos-pizza.png';
import kfc from '@/public/clients/kfc.png';
import dodo from '@/public/clients/dodo.png';
import rzhd from '@/public/clients/rzhd.png';
import etalon from '@/public/clients/etalon.png';

type ClientInfo = {
  img: StaticImageData;
  name: string;
};

const clientsInfo: ClientInfo[] = [
  { img: jamies, name: "Jamie's Italian" },
  { img: hyatt, name: 'Hyatt Regency' },
  { img: krokus, name: 'Крокус Экспо' },
  { img: goodman, name: 'Goodman steakhouse' },
  { img: perek, name: 'Перекрёсток' },
  { img: verniy, name: 'Верный' },
  // уберите «?» — дайте реальное имя и файл
  { img: dominos, name: "Domino's Pizza" },
  { img: kfc, name: 'KFC' },
  { img: dodo, name: 'Додо Пицца' },
  { img: rzhd, name: 'РЖД' },
  { img: etalon, name: 'Эталон' },
];

const Clients = ({ className }: { className?: string }) => {
  return (
    <section
      className={`${className ?? ''} w-full text-center sm:px-6 lg:px-8`}
    >
      <h2 className="section-header mx-auto mb-8 w-fit">Наши клиенты</h2>

      <div className="grid grid-cols-2 justify-items-center gap-4 sm:grid-cols-3 md:grid-cols-4">
        {clientsInfo.map((c, i) => (
          <div
            key={c.name}
            className="relative aspect-square w-full max-w-[180px] overflow-hidden rounded-2xl"
          >
            <Image
              src={c.img}
              alt={c.name}
              fill
              className="object-contain select-none"
              placeholder="blur"
              sizes="(min-width:1024px) 180px, (min-width:640px) 33vw, 50vw"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
