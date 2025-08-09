import Image from 'next/image';

const Logo = () => {
  return (
    <div className="group flex items-center gap-5">
      {/* Логотип-иконка */}
      <div className="before:from-main/20 before:to-main/20 before:animate-logoGradient shadow-separator relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl shadow-md before:absolute before:inset-0 before:bg-gradient-to-br before:via-transparent before:opacity-60">
        <Image
          src="/logo.webp"
          alt="Фауна — вывоз мусора и доставка нерудных материалов"
          fill
          sizes="80px"
          priority
          itemProp="logo"
          className="object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Текстовая часть */}
      <div className="leading-tight">
        <p className="group-hover:text-main animate-textShine from-main via-main-hover to-bg-main relative inline-block bg-gradient-to-r bg-[length:200%_auto] bg-clip-text text-3xl font-bold text-transparent duration-200">
          ФАУНА
        </p>
        <p className="text-fg-main/50 group-hover:text-fg-main text-sm transition-colors duration-500">
          Делаем мир чище
        </p>
      </div>
    </div>
  );
};

export default Logo;
