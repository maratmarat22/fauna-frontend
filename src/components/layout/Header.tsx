import Link from 'next/link';
import Logo from '@/components/layout/Logo';
import HamburgerNav from '@/components/layout/client/HamburgerNav';
import { FiMessageSquare } from 'react-icons/fi';

const links = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/service' },
  { name: 'Автопарк', href: '/#cars' },
];

const Header = ({ pathname }: { pathname: string }) => {
  return (
    <header className="font-header bg-bg-contrast border-separator sticky top-0 z-50 h-[var(--header-height)] w-full border-b px-4">
      <div className="container mx-auto flex h-full items-center justify-between lg:justify-around">
        {/*logo*/}
        <Link href={pathname !== '/' ? '/' : '#about'}>
          <Logo />
        </Link>

        {/*nav-full*/}
        <nav className="hidden gap-5 md:flex lg:gap-10">
          {links.map((l, i) => (
            <Link
              key={i}
              scroll={true}
              href={l.href !== pathname ? l.href : '#about'}
              className="text-fg-main hover:text-main text-xl transition"
            >
              {l.name}
            </Link>
          ))}
        </nav>

        {/*contact*/}
        <Link
          href="/#contact"
          className="bg-main hover:bg-main-hover hidden max-w-40 rounded-4xl px-6 py-3 text-center text-xl font-medium text-white transition-all duration-300 ease-out select-none hover:-translate-y-0.5 hover:shadow-md sm:block md:max-w-100 md:rounded-full"
        >
          Связаться с нами
        </Link>

        <Link
          href="#contact"
          className="bg-main/30 hover:bg-main fixed right-5 bottom-5 rounded-full p-5 text-white/70 transition-colors hover:text-white sm:hidden"
        >
          <FiMessageSquare className="h-7 w-7" />
        </Link>

        <HamburgerNav pathname={pathname} />
      </div>
    </header>
  );
};

export default Header;
