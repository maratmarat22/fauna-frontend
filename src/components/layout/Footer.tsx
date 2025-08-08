import { FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { GrGithub } from 'react-icons/gr';

const Footer = ({ pathname }: { pathname: string }) => {
  return (
    <footer className="bg-footer px-4 py-5 text-white">
      <h1 className="hidden">{pathname}</h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {/*services*/}
        <div>
          <h3 className="border-footer-separator mb-2 border-b pb-2 font-semibold">
            Услуги
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Вывоз мусора</li>
            <li>Доставка нерудных материалов</li>
          </ul>
        </div>

        {/*contacts*/}
        <div>
          <h3 className="border-footer-separator mb-2 border-b pb-2 font-semibold">
            Контакты
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-3">
              <span>+7 (969) 149-81-28</span>
              <FaWhatsapp className="h-5 w-5" />
              <span>/</span>
              <FiPhone className="h-4 w-4" />
            </li>
            <li className="flex items-center gap-3">
              <span>+7 (495) 888-45-00</span>
              <FiPhone className="h-4 w-4" />
            </li>
            <li className="flex items-center gap-3">
              <span>info@fauna-moscow.ru</span>
              <FiMail className="h-4 w-4" />
            </li>
            <li>111555, г. Москва, ул. Молостовых, д. 10Г, пом. 2/1, ком. 5</li>
          </ul>
        </div>

        {/*info*/}
        <div>
          <h3 className="border-footer-separator mb-2 border-b pb-2 font-semibold">
            Информация
          </h3>
          <ul className="space-y-2 text-sm">
            <li>О компании</li>
            <li>Политика конфиденциальности</li>
          </ul>
        </div>
      </div>

      <div className="border-footer-separator mt-10 border-t pt-4 text-center text-sm">
        <span>
          © {new Date().getFullYear()} fauna-moscow.ru. Все права защищены.
          <a
            href="https://github.com/maratmarat22/fauna-moscow-site"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 text-gray-500 transition hover:text-black"
            aria-label="GitHub"
          >
            <GrGithub className="inline-block align-text-bottom text-lg" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
