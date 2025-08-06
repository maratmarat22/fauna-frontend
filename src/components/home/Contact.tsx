import Contacts from '@/components/contact/Contacts';
import Order from '@/components/contact/Order';

const Contact = ({ id, className }: { id: string; className?: string }) => {
  return (
    <section id={id} className={`${className ?? ''} scroll-mt-36`}>
      <div className="mx-auto w-fit lg:ml-50">
        <h2 className="section-header mb-6 text-center">
          Свяжитесь с нами прямо сейчас...
        </h2>
        <Contacts className="bg-bg-contrast mx-auto w-fit rounded-2xl p-5" />
      </div>
      <div className="mx-auto mt-16 w-fit lg:mr-50">
        <h2 className="section-header text-center">...или оставьте заявку</h2>
        <Order className="bg-bg-contrast mx-auto mt-6 max-w-xl rounded-2xl p-5" />
      </div>
    </section>
  );
};

export default Contact;
