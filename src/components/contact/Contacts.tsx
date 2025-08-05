import contacts from '@/data/contacts';

const Contacts = ({ className }: { className?: string }) => {
  return (
    <div className={className ?? ''}>
      {contacts.map((c, i) => (
        <a href={c.href} key={i}>
          <span>
            <c.icon className="h-5 w-5" />
            {c.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Contacts;
