type Service = {
  name: string;
  desc?: string;
  href: string;
  slug: string;
  iconSrc: string;
  iconAlt: string;
  rootPageSide: 'l' | 'r';
  isAnimatable: boolean;
};

const services: Service[] = [
  {
    name: 'Вывоз строительных отходов',
    href: '/vyvoz-stroitelnyh-othodov',
    slug: 'vyvoz-stroitelnyh-othodov',
    iconSrc: '/services/icons/blank-truck-teal.png',
    iconAlt: 'Вывоз строительных отходов',
    rootPageSide: 'l',
    isAnimatable: true,
  },
  {
    name: 'Вывоз производственных отходов',
    href: '/vyvoz-proizvodstvennyh-othodov',
    slug: 'vyvoz-proizvodstvennyh-othodov',
    iconSrc: '/services/icons/blank-truck-teal.png',
    iconAlt: 'Вывоз производственных отходов',
    rootPageSide: 'l',
    isAnimatable: true,
  },
  {
    name: 'Вывоз отходов, образованных при сносе и разборе зданий',
    href: '/vyvoz-posle-snosa',
    slug: 'vyvoz-posle-snosa',
    iconSrc: '/services/icons/blank-truck-teal.png',
    iconAlt: 'Вывоз отходов, образованных при сносе и разборе зданий',
    rootPageSide: 'l',
    isAnimatable: true,
  },
  {
    name: 'Вывоз грунта',
    href: '/vyvoz-grunta',
    slug: 'vyvoz-grunta',
    iconSrc: '/services/icons/blank-truck-teal.png',
    iconAlt: 'Вывоз грунта',
    rootPageSide: 'l',
    isAnimatable: true,
  },
  {
    name: 'Вывоз и утилизация снега',
    href: '/vyvoz-snega',
    slug: 'vyvoz-snega',
    iconSrc: '/services/icons/blank-truck-teal.png',
    iconAlt: 'Вывоз и утилизация снега',
    rootPageSide: 'l',
    isAnimatable: true,
  },
  {
    name: 'Демонтаж зданий и сооружений',
    href: '/demontazh-zdaniy',
    slug: 'demontazh-zdaniy',
    iconSrc: '/services/icons/snos.png',
    iconAlt: 'Демонтаж зданий и сооружений',
    rootPageSide: 'l',
    isAnimatable: true,
  },
  {
    name: 'Полное юридическое сопровождение и предоставление всех закрывающих документов, оформление паспортов отходов',
    href: '/yuridicheskoe-soprovozhdenie',
    slug: 'yuridicheskoe-soprovozhdenie',
    iconSrc: '/services/icons/docs.png',
    iconAlt:
      'Полное юридическое сопровождение и предоставление всех закрывающих документов, оформление паспортов отходов',
    rootPageSide: 'l',
    isAnimatable: false,
  },
  {
    name: 'Доставка пескогрунта',
    href: '/dostavka-peskogrunta',
    slug: 'dostavka-peskogrunta',
    iconSrc: '/services/icons/blank-truck-teal-rev.png',
    iconAlt: 'Доставка пескогрунта',
    rootPageSide: 'r',
    isAnimatable: true,
  },
  {
    name: 'Доставка асфальтной крошки',
    href: '/dostavka-kroshki',
    slug: 'dostavka-kroshki',
    iconSrc: '/services/icons/blank-truck-teal-rev.png',
    iconAlt: 'Доставка асфальтной крошки',
    rootPageSide: 'r',
    isAnimatable: true,
  },
  {
    name: 'Доставка кирпичного боя',
    href: '/dostavka-kirpicha',
    slug: 'dostavka-kirpicha',
    iconSrc: '/services/icons/blank-truck-teal-rev.png',
    iconAlt: 'Доставка кирпичного боя',
    rootPageSide: 'r',
    isAnimatable: true,
  },
  {
    name: 'Доставка нерудных материалов',
    href: '/dostavka-nerud',
    slug: 'dostavka-nerud',
    iconSrc: '/services/icons/blank-truck-teal-rev.png',
    iconAlt: 'Доставка нерудных материалов',
    rootPageSide: 'r',
    isAnimatable: true,
  },
  {
    name: 'Доставка плодородной земли',
    href: '/dostavka-zemli',
    slug: 'dostavka-zemli',
    iconSrc: '/services/icons/blank-truck-teal-rev.png',
    iconAlt: 'Доставка плодородной земли',
    rootPageSide: 'r',
    isAnimatable: true,
  },
];

export default services;
