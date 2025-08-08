import sendOrder from '@/serverActions/sendOrder';
import labels from '@/components/contact/data/labels';

const Order = ({ className }: { className?: string }) => {
  return (
    <div className={className ?? ''}>
      <form
        action={sendOrder}
        className="flex flex-col gap-5 rounded-xl p-4 shadow-md"
      >
        {labels.map((l, i) => (
          <label key={i} className="flex flex-col gap-1 text-sm font-medium">
            {l.text}
            <select
              name={l.select.name}
              className="border-main bg-bg-main rounded-md border px-3 py-2"
              required
            >
              {l.select.options.map((o, i) => (
                <option key={i} value={o.value}>
                  {o.text}
                </option>
              ))}
            </select>
          </label>
        ))}

        {/* Чекбоксы */}
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />
            <span>
              Я ознакомлен с{' '}
              <a
                href="/privacy-policy"
                className="hover:text-main underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                политикой конфиденциальности
              </a>
            </span>
          </label>
          <label className="flex items-start gap-2">
            <input type="checkbox" required className="mt-1" />
            <span>
              Я даю согласие на{' '}
              <a
                href="/privacy-policy"
                className="hover:text-main underline transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                обработку персональных данных
              </a>
            </span>
          </label>
        </div>

        {/* Кнопка */}
        <button
          type="submit"
          className="bg-main hover:bg-main/90 rounded-md px-6 py-3 text-base font-semibold text-white transition-colors"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Order;
