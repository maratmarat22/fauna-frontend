import Image from 'next/image';

type ClientInfo = {
  src: string;
  alt: string;
};

const clientsInfo: ClientInfo[] = [
  { src: '/clients/jamies-italian.png', alt: "Jamie's Italian" },
  { src: '/clients/hyatt-regency.png', alt: 'Hyatt Regency' },
  { src: '/clients/krokus-ekspo.png', alt: 'Крокус Экспо' },
  { src: '/clients/goodman.png', alt: 'Goodman steakhouse' },
  { src: '/clients/perekryostok.png', alt: 'Перекрёсток' },
  { src: '/clients/verniy.png', alt: 'Верный' },
  { src: '/clients/1.288b9d3f96fcd70af92cde9588cb7f96298.png', alt: '?' },
  { src: '/clients/dominos-pizza.png', alt: "Domino's Pizza" },
  { src: '/clients/kfc.png', alt: 'KFC' },
  { src: '/clients/dodo.png', alt: 'Додо Пицца' },
  { src: '/clients/rzhd.png', alt: 'РЖД' },
  { src: '/clients/etalon.png', alt: 'Эталон' },
];

const Clients = () => {
  return (
    <section className="w-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-main-color mb-8 text-center text-3xl font-bold">
          Наши клиенты
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {clientsInfo.map((ci, i) => (
            <div
              key={i}
              className="shadow-main-color/70 rounded-xl bg-white p-5 shadow-xl"
            >
              <Image
                src={ci.src}
                alt={ci.alt}
                className="mx-auto select-none"
                width={180}
                height={180}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
