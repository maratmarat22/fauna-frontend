import contacts from './data/contacts';

const Contacts = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className ?? ''} flex flex-col gap-3 sm:gap-5 md:flex-row`}
    >
      {contacts.map((c, i) => (
        <a
          href={c.href}
          key={i}
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:border-main border-bg-main bg-bg-main flex items-center gap-3 rounded-xl border px-4 py-2 transition-all duration-200"
        >
          <c.icon className="text-main group-hover:text-main-dark h-5 w-5 transition-colors duration-200" />
          <span className="group-hover:text-main-dark transition-colors duration-200">
            {c.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Contacts;
