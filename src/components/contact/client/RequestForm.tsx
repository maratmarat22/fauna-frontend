'use client';

import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import processRequest from '@/serverActions/processRequest';
import labels from '@/components/contact/data/labels';
import { useRef, useState } from 'react';

type Contact = 'email' | 'wa';

const RequestForm = ({ className }: { className?: string }) => {
  // === TOAST STATE ===
  const [postSucceed, setPostSucceed] = useState(false);
  const [postStatusVisible, setPostStatusVisible] = useState(false);
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubmit = (form: FormData) => {
    // сбрасываем текущий тост и таймер (если был)
    if (toastTimerRef.current) {
      clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
    setPostSucceed(false);
    setPostStatusVisible(false);

    processRequest(form)
      .then(() => {
        setPostSucceed(true);
        setPostStatusVisible(true);
        toastTimerRef.current = setTimeout(() => {
          setPostStatusVisible(false);
          toastTimerRef.current = null;
        }, 2500);
      })
      .catch(() => {
        setPostSucceed(false);
        setPostStatusVisible(true);
        toastTimerRef.current = setTimeout(() => {
          setPostStatusVisible(false);
          toastTimerRef.current = null;
        }, 3000);
      });
  };

  const [contactType, setContactType] = useState<Contact>();
  const [extraOpen, setExtraOpen] = useState(false);

  return (
    <div className={className ?? ''}>
      {/* === TOAST === */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed top-32 left-1/2 z-50 flex max-w-[90%] -translate-x-1/2 items-center gap-3 rounded-full px-6 py-3 text-lg font-medium shadow-lg backdrop-blur-md transition-all duration-300 ease-out will-change-transform md:max-w-xl ${postSucceed ? 'bg-main/90 text-white' : 'bg-red-800/90 text-white'} ${postStatusVisible ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'} `}
      >
        {postSucceed ? (
          <FiCheckCircle className="h-6 w-6 flex-shrink-0" />
        ) : (
          <FiXCircle className="h-6 w-6 flex-shrink-0" />
        )}
        <span>
          {postSucceed
            ? 'Мы получили вашу заявку'
            : 'Нам не удалось связаться с сервером, позвоните нам'}
        </span>
      </div>

      {/* === ФОРМА (без изменений) === */}
      <form action={handleSubmit} className="flex flex-col gap-5">
        <label className="flex flex-col gap-1 text-sm font-medium">
          Связаться с Вами через
          <select
            name="contact-type"
            className="form-input mt-1 p-2"
            onChange={e => setContactType(e.target.value as Contact)}
          >
            <option value="">-</option>
            <option value="email">Эл. почту</option>
            <option value="wa">WhatsApp</option>
          </select>
        </label>

        {contactType && (
          <label className="flex flex-col gap-1 text-sm font-medium">
            {`Контакт (${contactType})`}
            <input
              name="contact"
              type={contactType === 'email' ? 'email' : 'tel'}
              className="form-input mt-1 px-3 py-2"
            />
          </label>
        )}

        {labels.map((l, i) => (
          <label key={i} className="flex flex-col gap-1 text-sm font-medium">
            {l.text}
            <select name={l.select.name} className="form-input mt-1 p-2">
              {l.select.options.map((o, i) => (
                <option key={i} value={o.value}>
                  {o.text}
                </option>
              ))}
            </select>
          </label>
        ))}

        <button
          type="button"
          onClick={() => setExtraOpen(prev => !prev)}
          className={`${extraOpen ? 'bg-red-800 hover:bg-red-950' : 'bg-main hover:bg-main-hover'} w-fit rounded-full px-3 py-1 font-medium transition-colors`}
        >
          {extraOpen ? 'Закрыть' : 'Особые пожелания?'}
        </button>

        {extraOpen && (
          <label className="flex flex-col gap-1 text-sm font-medium">
            Что нам следует знать
            <textarea
              name="extra"
              rows={4}
              placeholder="Например, вывезти нужно будет слона"
              className="form-input mt-1 px-3 py-2 font-light"
            />
          </label>
        )}

        {/* Чекбоксы */}
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" />
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
            <input type="checkbox" className="mt-1" />
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

export default RequestForm;
