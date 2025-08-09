import services from '@/shared/services';
import type { Option } from './types';

const blank: Option = { value: '', label: '-' };

export const contactOptions: Option[] = [
  blank,
  { value: 'email', label: 'Эл. почту' },
  { value: 'WhatsApp', label: 'WhatsApp' },
];

export const serviceOptions: Option[] = [
  blank,
  ...services.map(s => ({ value: s.slug, label: s.name })),
];

export const volumeOptions: Option[] = [
  blank,
  { value: '1', label: 'до 1 м³' },
  { value: '3', label: '1–3 м³' },
  { value: '5', label: '3–5 м³' },
  { value: '10', label: '5–10 м³' },
  { value: '20', label: 'свыше 10 м³' },
];

export const districtOptions: Option[] = [
  blank,
  { value: 'center', label: 'Центральный' },
  { value: 'north', label: 'Северный' },
  { value: 'north-east', label: 'Северо-Восточный' },
  { value: 'east', label: 'Восточный' },
  { value: 'south-east', label: 'Юго-Восточный' },
  { value: 'south', label: 'Южный' },
  { value: 'south-west', label: 'Юго-Западный' },
  { value: 'west', label: 'Западный' },
  { value: 'north-west', label: 'Северо-Западный' },
  { value: 'zelenograd', label: 'Зеленоградский' },
  { value: 'mo', label: 'Московская область' },
];
