type Label = {
  text: string;
  select: { name: string; options: { value: string; text: string }[] };
};

const labels: Label[] = [
  {
    text: 'Услуга',
    select: {
      name: 'service',
      options: [
        { value: '', text: '-' },
        { value: 'construction', text: 'Вывоз строительного мусора' },
        { value: 'large', text: 'Вывоз крупногабаритного мусора' },
        { value: 'snow', text: 'Вывоз снега' },
        { value: 'apartment', text: 'Вывоз мусора из квартир' },
        { value: 'delivery', text: 'Доставка нерудных материалов' },
      ],
    },
  },
  {
    text: 'Объём',
    select: {
      name: 'volume',
      options: [
        { value: '', text: '-' },
        { value: '1', text: 'до 1 м³' },
        { value: '3', text: '1–3 м³' },
        { value: '5', text: '3–5 м³' },
        { value: '10', text: '5–10 м³' },
        { value: '20', text: 'свыше 10 м³' },
      ],
    },
  },
  {
    text: 'Район / Округ Москвы',
    select: {
      name: 'district',
      options: [
        { value: '', text: '-' },
        { value: 'center', text: 'Центральный' },
        { value: 'north', text: 'Северный' },
        { value: 'north-east', text: 'Северо-Восточный' },
        { value: 'east', text: 'Восточный' },
        { value: 'south-east', text: 'Юго-Восточный' },
        { value: 'south', text: 'Южный' },
        { value: 'south-west', text: 'Юго-Западный' },
        { value: 'west', text: 'Западный' },
        { value: 'north-west', text: 'Северо-Западный' },
        { value: 'zelenograd', text: 'Зеленоградский' },
        { value: 'mo', text: 'Московская область' },
      ],
    },
  },
];

export default labels;
