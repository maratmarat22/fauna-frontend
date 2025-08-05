'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import services from '@/data/services';
import { HiX } from 'react-icons/hi';
import { FiSidebar } from 'react-icons/fi';

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {/* Кнопка открытия */}
      <button
        onClick={() => setOpen(true)}
        className="bg-main-color/30 hover:bg-main-color fixed left-4 z-30 mt-4 rounded-full p-5 text-white/60 transition hover:text-white md:hidden"
        aria-label="Открыть меню"
      >
        <FiSidebar className="h-6 w-6" />
      </button>

      {/* Сайдбар */}
      <aside
        className={`fixed left-0 z-30 h-[100dvh] w-[100%] transform bg-gray-50 p-4 shadow-lg transition-transform duration-300 ease-in-out md:static md:h-auto md:w-72 md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-main-color flex items-center justify-between border-b px-4 py-5">
          <h2 className="text-xl font-semibold">Услуги</h2>

          {/* Кнопка закрытия */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden"
            aria-label="Закрыть меню"
          >
            <HiX className="bg-main-color/30 hover:bg-main-color h-10 w-10 rounded-full p-2 text-white/60 hover:text-white" />
          </button>
        </div>

        <nav className="h-[calc(100%-72px)] overflow-y-auto px-4 py-6">
          <ul className="space-y-3">
            {services.map((s, i) => (
              <li key={i}>
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="hover:bg-main-color block rounded-lg px-3 py-2 transition duration-100 hover:text-white"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
