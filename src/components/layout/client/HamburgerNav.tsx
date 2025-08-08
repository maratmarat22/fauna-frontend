'use client';

import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import Link from 'next/link';

const links = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/service' },
  { name: 'Автопарк', href: '/#cars' },
];

const HamburgerNav = ({ pathname }: { pathname: string }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Кнопка */}
      <button
        onClick={() => setNavOpen(prev => !prev)}
        className="bg-main rounded-full p-3 text-white md:hidden"
        aria-label={navOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        {navOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
      </button>

      {/* Меню */}
      <div
        className={`bg-bg-contrast border-separator fixed top-[var(--header-height)] left-0 z-50 w-full transform border-b px-4 py-6 transition-all duration-200 ease-in-out md:hidden ${navOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-5 opacity-0'} `}
      >
        <nav className="flex flex-col gap-6">
          {links.map((l, i) => (
            <Link
              key={i}
              href={pathname !== l.href ? l.href : '#about'}
              onClick={() => setNavOpen(false)}
              className="hover:text-main text-lg transition-colors"
            >
              {l.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default HamburgerNav;
