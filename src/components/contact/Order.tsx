const Order = ({ className }: { className?: string }) => {
  return (
    <div className={className ?? ''}>
      <form className="flex flex-col gap-3">
        <label className="font-medium">Свяжитесь со мной через:</label>
        <select
          className="border-main bg-bg-main rounded-md border px-1 py-1"
          required
        >
          <option value="">Выберите способ</option>
          <option value="email">Эл. почту</option>
          <option value="tel">Телефон</option>
          <option value="wa">WhatsApp</option>
        </select>
        <label className="font-medium">Услуга:</label>
        <select className="border-main bg-bg-main rounded-md border px-1 py-1">
          <option value="">Выберите услугу</option>
          <option value="construction">Вывоз строительного мусора</option>
          <option value="large">Вывоз крупногабаритного мусора</option>
          <option value="snow">Вывоз снега</option>
          <option value="apartment">Вывоз мусора из квартир</option>
          <option value="delivery">Доставка нерудных материалов</option>
        </select>
        <label className="font-medium">Объём:</label>
        <select
          className="border-main bg-bg-main rounded-md border px-1 py-1"
          required
        >
          <option value="">Выберите объём</option>
          <option value="1">до 1 м³</option>
          <option value="3">1–3 м³</option>
          <option value="5">3–5 м³</option>
          <option value="10">5–10 м³</option>
          <option value="20">свыше 10 м³</option>
        </select>
        <label className="font-medium">Район / Округ Москвы:</label>
        <select
          className="border-main bg-bg-main rounded-md border px-1 py-1"
          required
        >
          <option value="">Выберите район</option>
          <option value="center">Центральный</option>
          <option value="north">Северный</option>
          <option value="north-east">Северо-Восточный</option>
          <option value="east">Восточный</option>
          <option value="south-east">Юго-Восточный</option>
          <option value="south">Южный</option>
          <option value="south-west">Юго-Западный</option>
          <option value="west">Западный</option>
          <option value="north-west">Северо-Западный</option>
          <option value="zelenograd">Зеленоградский</option>
          <option value="mo">Московская область</option>
        </select>
        <button
          type="submit"
          className="bg-main hover:bg-main/90 mt-2 rounded-md px-4 py-2 text-white transition-colors"
        >
          Отправить
        </button>

        <p className="text-s mt-1 text-center text-gray-500">
          Отправляя форму, вы даёте согласие на{' '}
          <a
            href="/privacy-policy"
            className="hover:text-main underline transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            обработку персональных данных
          </a>
          .
        </p>
      </form>
    </div>
  );
};

export default Order;
