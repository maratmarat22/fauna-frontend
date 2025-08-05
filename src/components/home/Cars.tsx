import Slider, { SliderItem } from '../ui/Slider';

const cars: SliderItem[] = [
  { src: '/cars/maz-multilift.png', alt: 'Машина' },
  { src: '/cars/maz-samosval.png', alt: 'Машина' },
  { src: '/cars/maz-rogatka.png', alt: 'Машина' },
  { src: '/cars/gaz-rogatka.png', alt: 'Машина' },
  { src: '/cars/faw-samosval.png', alt: 'Машина' },
];

const Cars = ({ id }: { id: string }) => {
  return (
    <section id={id} className="w-full scroll-mt-40 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-main-color mb-8 text-center text-3xl font-bold">
          Автопарк
        </h2>
        <Slider items={cars} />
      </div>
    </section>
  );
};

export default Cars;
