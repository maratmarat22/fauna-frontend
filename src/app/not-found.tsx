import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className="text-fg-main flex h-screen items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <h1 className="text-main text-5xl font-bold">404</h1>
          <p className="mt-2 text-xl font-semibold">Страница не найдена</p>
          <p className="mt-4 text-lg opacity-80">
            Возможно, вы ошиблись в адресе или страница была удалена.
          </p>
          <Link
            href="/"
            className="bg-main hover:bg-main-hover mt-6 inline-block rounded-lg px-6 py-3 text-lg font-medium text-white transition"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
      <Footer pathname="" />
    </>
  );
}
