import { IconType } from 'react-icons';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';

type Contact = {
  label: string;
  href: string;
  className?: string;
  icon: IconType;
};

const contacts: Contact[] = [
  {
    label: '+7 (969) 149-81-28',
    href: 'https://wa.me/79691498128',
    icon: FaWhatsapp,
  },
  { label: '+7 (495) 888-45-00', href: 'tel:74958884500', icon: FiPhone },
  {
    label: 'fauna.info@mail.ru',
    href: 'mailto:fauna.info@mail.ru',
    icon: FiMail,
  },
];

export default contacts;
