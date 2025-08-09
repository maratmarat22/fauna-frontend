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
  ...services.map(s => ({ value: s.id, label: s.name })),
];

export const volumeOptions: Option[] = [
  blank,
  { value: '8', label: '8 м³' },
  { value: '20', label: '20 м³' },
  { value: '27', label: '27 м³' },
  { value: '30', label: '30 м³' },
  { value: '32', label: '32 м³' },
  { value: '34', label: '34 м³' },
  { value: '36', label: '36 м³' },
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
