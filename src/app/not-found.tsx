export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-white text-center">
      <div>
        <h1 className="text-4xl font-bold text-red-500">
          404 — Страница не найдена
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Проверьте адрес или вернитесь на{' '}
          {/*<a href="/" className="text-blue-500 underline">
            главную
          </a>*/}
          .
        </p>
      </div>
    </div>
  );
}
