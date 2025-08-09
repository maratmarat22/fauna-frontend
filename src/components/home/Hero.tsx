const Hero = ({ id, className }: { id: string; className?: string }) => {
  return (
    <section
      id={id}
      className={`${className ?? ''} bg-bg-contrast relative isolate`}
      aria-label="Вывоз мусора, доставка материалов и демонтаж строений в Москве и МО"
    >
      <div className="hero relative mx-auto h-250 w-full scroll-mt-52 px-4 py-16 shadow-[inset_0_-60px_120px_-60px_rgba(0,0,0,0.6)] sm:py-24">
        <h1 className="mx-auto mb-6 max-w-4xl bg-[linear-gradient(90deg,#d6fff7_0%,#59b5a3_35%,#3d8f80_65%,#d6fff7_100%)] bg-clip-text text-center text-4xl leading-tight font-extrabold tracking-tight [text-wrap:balance] text-transparent drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)] sm:text-5xl">
          Вывоз мусора, доставка материалов и демонтаж строений в Москве и МО
        </h1>

        {/* Вводный текст */}
        <div className="mx-auto mb-0 max-w-3xl text-center text-2xl leading-relaxed font-semibold [text-wrap:pretty] text-white/90">
          <p className="inline-block rounded-xl bg-black/25 px-4 py-3 backdrop-blur-[2px]">
            Работаем быстро, прозрачно и в удобное для вас время — без срывов и лишней бюрократии.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
