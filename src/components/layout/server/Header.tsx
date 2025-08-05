import Link from 'next/link';
import Image from 'next/image';
import HamburgerNav from '@/components/layout/client/HamburgerNav';

const links = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/service' },
  { name: 'Автопарк', href: '/#cars' },
];

const Header = () => {
  return (
    <header className="font-header bg-bg-contrast border-separator sticky top-0 z-50 h-[var(--header-height)] w-full border-b px-4 py-2">
      <div className="container mx-auto flex items-center justify-around">
        {/*logo*/}
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="Фауна — вывоз мусора и доставка нерудных материалов"
            width={140}
            height={140}
            priority
            itemProp="logo"
          />
        </Link>

        {/*nav-full*/}
        <nav className="hidden gap-10 md:flex">
          {links.map((l, i) => (
            <Link
              key={i}
              href={l.href}
              className="text-fg-main hover:text-main text-xl transition"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/*contact*/}
        <Link
          className="hover:bg-main-hover bg-main max-w-40 rounded-3xl px-5 py-3 text-center text-xl text-white transition ease-in-out select-none md:max-w-70 md:rounded-full"
          href="#contact"
        >
          Связаться с нами
        </Link>
        <HamburgerNav />
      </div>
    </header>
  );
};

export default Header;
