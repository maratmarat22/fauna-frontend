type ServiceType = 'waste' | 'inert' | 'demolition' | 'other';
type Icon = { side: 'l' | 'r'; src: string };

type Service = {
  id: string;
  name: string;
  type: ServiceType;
  href: string;
  onRoot: boolean;
  icon?: Icon;
  desc?: string;
};

const services: Service[] = [
  {
    id: '0',
    name: 'Вывоз строительных отходов',
    type: 'waste',
    href: '/vyvoz-stroitelnyh-othodov',
    icon: { side: 'l', src: '/services/icons/blank-truck-teal.png' },
    onRoot: true,
  },
  {
    id: '1',
    name: 'Вывоз производственных отходов',
    type: 'waste',
    href: '/vyvoz-proizvodstvennyh-othodov',
    icon: { side: 'l', src: '/services/icons/blank-truck-teal.png' },
    onRoot: true,
  },
  {
    id: '2',
    name: 'Вывоз крупногабаритных отходов',
    type: 'waste',
    href: '/vyvoz-krupnogabaritnyh-othodov',
    icon: { side: 'l', src: '/services/icons/blank-truck-teal.png' },
    onRoot: true,
  },
  {
    id: '3',
    name: 'Вывоз отходов, образованных при сносе и разборе зданий',
    type: 'waste',
    href: '/vyvoz-posle-snosa',
    icon: { side: 'l', src: '/services/icons/blank-truck-teal.png' },
    onRoot: true,
  },
  {
    id: '4',
    name: 'Вывоз грунта',
    type: 'waste',
    href: '/vyvoz-grunta',
    icon: { side: 'l', src: '/services/icons/blank-truck-teal.png' },
    onRoot: true,
  },
  {
    id: '5',
    name: 'Вывоз и утилизация снега',
    type: 'waste',
    href: '/vyvoz-snega',
    icon: { side: 'l', src: '/services/icons/blank-truck-teal.png' },
    onRoot: true,
  },
  {
    id: '6',
    name: 'Демонтаж зданий и сооружений',
    type: 'demolition',
    href: '/demontazh-zdaniy',
    icon: { side: 'l', src: '/services/icons/blank-truck-teal.png' },
    onRoot: true,
  },
  {
    id: '7',
    name: 'Юридическое сопровождение и оформление паспортов отходов',
    type: 'other',
    href: '/yuridicheskoe-soprovozhdenie',
    onRoot: true,
  },
  {
    id: '8',
    name: 'Доставка пескогрунта',
    type: 'inert',
    href: '/dostavka-peskogrunta',
    icon: { side: 'r', src: '/services/icons/blank-truck-teal-rev.png' },
    onRoot: true,
  },
  {
    id: '9',
    name: 'Доставка асфальтной крошки',
    type: 'inert',
    href: '/dostavka-kroshki',
    icon: { side: 'r', src: '/services/icons/blank-truck-teal-rev.png' },
    onRoot: true,
  },
  {
    id: '10',
    name: 'Доставка кирпичного боя',
    type: 'inert',
    href: '/dostavka-kirpicha',
    icon: { side: 'r', src: '/services/icons/blank-truck-teal-rev.png' },
    onRoot: true,
  },
  {
    id: '11',
    name: 'Доставка нерудных материалов',
    type: 'inert',
    href: '/dostavka-nerud',
    icon: { side: 'r', src: '/services/icons/blank-truck-teal-rev.png' },
    onRoot: true,
  },
  {
    id: '12',
    name: 'Доставка плодородной земли',
    type: 'inert',
    href: '/dostavka-zemli',
    icon: { side: 'r', src: '/services/icons/blank-truck-teal-rev.png' },
    onRoot: true,
  },
];

export default services;
