'use client';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';

export type SliderItem = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

const Slider = ({ items }: { items: SliderItem[] }) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: { perView: 2, spacing: 10 },
  });

  return (
    <div className="relative">
      <div ref={sliderRef} className="bg-main-color keen-slider rounded-xl p-2">
        {items.map((item, i) => (
          <div className="keen-slider__slide" key={i}>
            <div className="overflow-hidden rounded-lg">
              {/*<h3 className="text-foreground text-lg font-semibold">{item.title ?? 'PLACEHOLDER'}</h3>
            <p className="text-background text-md">{item.description ?? 'PLACEHOLDER'}</p>*/}
              <div className="relative aspect-square bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
