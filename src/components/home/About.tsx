const About = ({ className }: { className?: string }) => {
  const features = [
    {
      title: 'Быстро',
      desc: 'Оперативно реагируем на заявки и выезжаем в кратчайшие сроки.',
    },
    {
      title: 'Надёжно',
      desc: 'Используем проверенную технику и соблюдаем все обязательства.',
    },
    {
      title: 'Честно',
      desc: 'Фиксированные цены без скрытых доплат и сюрпризов.',
    },
    {
      title: 'Удобно',
      desc: 'Работаем по всей Москве и области в любое удобное для вас время.',
    },
    {
      title: 'Опытно',
      desc: 'Команда с большим опытом работы в сфере вывоза и логистики.',
    },
    {
      title: 'Современно',
      desc: 'Применяем современные подходы и оптимизируем каждый процесс.',
    },
  ];

  return (
    <section className={`${className ?? ''} bg-bg-main w-full px-4`}>
      <h2 className="section-header mx-auto mb-6 w-fit text-center">О нас</h2>

      {/* Вводный текст */}
      <div className="text-fg-main mx-auto mb-6 max-w-3xl text-center text-lg">
        <p>
          Мы — команда профессионалов, которая быстро, надёжно и честно решает
          задачи по вывозу мусора и доставке нерудных материалов. Работаем на
          результат, ценим время клиента и всегда находим оптимальное решение.
        </p>
      </div>

      {/* Фишки компании */}
      <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-bg-contrast rounded-2xl p-6 text-center transition"
          >
            <h3 className="text-main mb-2 text-xl font-semibold">{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
