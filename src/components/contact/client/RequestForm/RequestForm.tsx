'use client';

import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import processRequest from '@/serverActions/processRequest';
import type { Contact } from './data/types';
import { placeholders, COOLDOWN_MS } from './data/misc';
import {
  contactOptions,
  serviceOptions,
  volumeOptions,
  districtOptions,
} from './data/options';
import { Submit, Select, RequiredCircle } from './subcomponents';
import { useEffect, useState } from 'react';

const RequestForm = ({
  className,
  serviceOption,
}: {
  className?: string;
  serviceOption?: string;
}) => {
  const [placeholder, setPlaceholder] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * placeholders.length);
    setPlaceholder(placeholders[randomIndex]);
  }, []);

  const [toast, setToast] = useState<{
    open: boolean;
    ok: boolean;
    text?: string | null;
    ms: number;
  }>({ open: false, ok: true, text: null, ms: 2500 });

  // Автозакрытие тоста
  useEffect(() => {
    if (!toast.open) return;
    const id = setTimeout(
      () => setToast(t => ({ ...t, open: false, text: null })),
      toast.ms,
    );
    return () => clearTimeout(id);
  }, [toast.open, toast.ms]);

  const openToast = (ok: boolean, text?: string, ms = 2500) =>
    setToast({ open: true, ok, text: text ?? null, ms });

  // Кулдаун (персист через localStorage)
  const [cooldownLeft, setCooldownLeft] = useState(0);

  // Инициализация по last_submit
  useEffect(() => {
    const last = Number(localStorage.getItem('request_last_submit') || '0');
    setCooldownLeft(Math.max(0, last + COOLDOWN_MS - Date.now()));
  }, []);

  // Тик раз в секунду, пока есть оставшееся время
  useEffect(() => {
    if (cooldownLeft <= 0) return;
    const id = setInterval(
      () => setCooldownLeft(prev => Math.max(0, prev - 1000)),
      1000,
    );
    return () => clearInterval(id);
  }, [cooldownLeft]);

  // Сабмит с проверкой кулдауна
  const actionWithCooldown = async (form: FormData) => {
    const now = Date.now();
    const last = Number(localStorage.getItem('request_last_submit') || '0');

    if (last && now - last < COOLDOWN_MS) {
      const left = Math.ceil((COOLDOWN_MS - (now - last)) / 1000);
      openToast(false, `Слишком часто. Повторите через ${left} с.`, 3000);
      return; // не отправляем
    }

    try {
      await processRequest(form);
      localStorage.setItem('request_last_submit', now.toString());
      setCooldownLeft(COOLDOWN_MS);
      openToast(true, 'Мы получили вашу заявку', 2500);
    } catch {
      openToast(
        false,
        'Не удалось связаться с сервером, попробуйте позже или позвоните нам',
        3000,
      );
    }
  };

  const [contactType, setContactType] = useState<Contact>();
  const [extraOpen, setExtraOpen] = useState(false);

  return (
    <div className={className ?? ''}>
      {/* //! submit status toast */}
      <div
        role="status"
        aria-live="polite"
        className={`fixed top-[calc(var(--header-height)+10px)] left-1/2 z-50 flex w-fit -translate-x-1/2 items-center gap-3 rounded-full px-6 py-3 text-lg font-medium shadow-lg backdrop-blur-md transition-all duration-300 ease-out md:max-w-xl ${
          toast.ok ? 'bg-main/80 text-white' : 'bg-yellow-500/80 text-white'
        } ${toast.open ? 'pointer-events-auto translate-y-0 scale-100 opacity-100' : 'pointer-events-none -translate-y-2 scale-95 opacity-0'}`}
      >
        {toast.ok ? (
          <FiCheckCircle className="h-6 w-6 flex-shrink-0" />
        ) : (
          <FiAlertCircle className="h-6 w-6 flex-shrink-0" />
        )}
        <span>
          {toast.text ??
            (toast.ok
              ? 'Мы получили Вашу заявку'
              : 'Нам не удалось связаться с сервером, попробуйте позже или позвоните нам')}
        </span>
      </div>

      {/* //! form */}
      <form action={actionWithCooldown} className="flex flex-col gap-5">
        {/* //! first name */}
        <label className="flex flex-col gap-1 text-sm font-medium">
          Ваше имя
          <input
            name="first-name"
            type="text"
            className="form-input mt-1 px-3 py-2"
          />
        </label>

        {/* //! second name (honeypot) */}
        <input
          type="text"
          name="second-name"
          tabIndex={-1}
          autoComplete="off"
          className="sr-only !hidden"
          aria-hidden="true"
        />

        {/* //! contact type */}
        <Select
          name="contact-type"
          label="Связаться с вами через"
          required
          handleChange={e => setContactType(e.target.value as Contact)}
          options={contactOptions}
        />

        {/* //! contact */}
        {contactType && (
          <label className="flex flex-col gap-1 text-sm font-medium">
            <div className="flex items-center gap-2">
              {`Контакт (${contactType})`}
              <RequiredCircle />
            </div>
            <input
              name="contact"
              type={contactType === 'email' ? 'email' : 'tel'}
              className="form-input mt-1 px-3 py-2"
              required
            />
          </label>
        )}

        {/* //! service */}
        <Select
          name="service"
          label="Услуга"
          required
          defaultValue={serviceOption}
          options={serviceOptions}
        />

        {/* //! volume */}
        <Select name="volume" label="Объём" required options={volumeOptions} />

        {/* //! district */}
        <Select
          name="district"
          label="Округ"
          required
          options={districtOptions}
        />

        {/* //! open extra button */}
        <button
          type="button"
          onClick={() => setExtraOpen(prev => !prev)}
          className={`${extraOpen ? 'bg-red-800 hover:bg-red-950' : 'bg-main hover:bg-main-hover'} w-fit rounded-full px-3 py-1 text-base font-medium text-white transition-colors`}
        >
          {extraOpen ? 'Закрыть' : 'Особые пожелания?'}
        </button>

        {/* //! extra */}
        {extraOpen && (
          <label className="flex flex-col gap-1 text-sm font-medium">
            Что нам следует знать
            <textarea
              name="extra"
              rows={4}
              placeholder={placeholder}
              className="form-input mt-1 px-3 py-2 font-light"
            />
          </label>
        )}

        {/* //! privacy checkboxes */}
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-start gap-2">
            <input type="checkbox" className="mt-1" required />
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
            <input type="checkbox" className="mt-1" required />
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

        {/* //! submit button */}
        <Submit cooldownLeft={cooldownLeft} />
      </form>
    </div>
  );
};

export default RequestForm;
