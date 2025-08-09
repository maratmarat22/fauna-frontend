import type { IconType } from 'react-icons';
import { FiZap, FiShield, FiDollarSign, FiClock, FiMapPin, FiCpu } from 'react-icons/fi';

type Feature = {
  icon: IconType;
  label: string; // для a11y
  desc: string;
};

const features: Feature[] = [
  {
    icon: FiZap,
    label: 'Быстро',
    desc: 'Принимаем заявку за 2–3 минуты, согласуем время и оперативно выезжаем на адрес.',
  },
  {
    icon: FiShield,
    label: 'Надёжно',
    desc: 'Собственная техника и отлаженные маршруты — соблюдаем сроки и договорённости.',
  },
  {
    icon: FiDollarSign,
    label: 'Прозрачно',
    desc: 'Фиксируем стоимость до выезда — без скрытых доплат и навязанных услуг.',
  },
  {
    icon: FiClock,
    label: 'Удобный график',
    desc: 'Работаем в будни и выходные, подстроимся под ваш тайминг и доступ на площадку.',
  },
  {
    icon: FiMapPin,
    label: 'Москва и область',
    desc: 'Быстрая подача по Москве и МО: знаем особенности въезда и режимы пропусков.',
  },
  {
    icon: FiCpu,
    label: 'Современный подход',
    desc: 'Оптимизируем логистику и загрузку контейнеров — меньше рейсов, ниже расходы.',
  },
];

export default features;
