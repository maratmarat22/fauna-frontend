'use client';

import { useState } from 'react';
import { LuMenu, LuX } from 'react-icons/lu';
import Link from 'next/link';

const links = [
  { name: 'Главная', href: '/' },
  { name: 'Услуги', href: '/service' },
  { name: 'Автопарк', href: '/#cars' },
];

const HamburgerNav = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Кнопка */}
      <button
        onClick={() => setNavOpen(prev => !prev)}
        className="text-main-color transform transition-transform duration-300 md:hidden"
        aria-label={navOpen ? 'Закрыть меню' : 'Открыть меню'}
      >
        {navOpen ? <LuX className="h-7 w-7" /> : <LuMenu className="h-7 w-7" />}
      </button>

      {/* Меню */}
      {navOpen && (
        <div className="fixed top-[var(--header-height,64px)] left-0 z-40 w-screen bg-white px-4 py-6 shadow-md md:hidden">
          <nav className="flex flex-col gap-6">
            {links.map((l, i) => (
              <Link
                key={i}
                href={l.href}
                onClick={() => setNavOpen(false)}
                className="hover:text-main-color text-lg transition"
              >
                {l.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default HamburgerNav;
