import features from './data/features';

type Props = { className: string };

const Features = ({ className }: Props) => {
  return (
    <section className={className}>
      <header className="mx-auto mb-6 max-w-3xl text-center">
        <h2 className="section-header mx-auto w-fit">Почему выбирают нас</h2>
        <p className="text-fg-main/80 mt-2 text-balance">
          Работаем быстро, официально и прозрачно — закрываем задачи «под ключ».
        </p>
      </header>

      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <li key={i} className="group relative">
            {/* Градиентная рамка при ховере */}
            <div className="before:[background:conic-gradient(from_180deg,theme(colors.main)_0%,transparent_30%,transparent_70%,theme(colors.main)_100%)] pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 before:absolute before:inset-0 before:rounded-2xl before:p-[1px]" />
            {/* Карточка */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition focus-within:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:bg-white/[0.07] hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
              {/* Иконка */}
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),rgba(255,255,255,0)_60%)] ring-1 ring-white/15">
                <f.icon className="text-main h-6 w-6" aria-hidden="true" />
                <span className="sr-only">{f.label}</span>
              </div>

              {/* Заголовок фичи */}
              <h3 className="text-center text-base font-semibold text-white">{f.label}</h3>

              {/* Описание */}
              <p className="text-fg-main/90 mt-2 text-center text-sm leading-relaxed">{f.desc}</p>

              {/* Декоративный «блик» */}
              <div className="bg-[radial-gradient(circle,theme(colors.main)/.6_0%,transparent_60%)] pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Features;
