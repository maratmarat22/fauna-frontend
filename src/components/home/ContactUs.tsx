import Contacts from '@/components/contact/Contacts';
import Order from '@/components/contact/Order';

const ContactUs = ({ id }: { id: string }) => {
  return (
    <section id={id} className="scroll-mt-50">
      <h2 className="section-header ml-3">Свяжитесь с нами прямо сейчас...</h2>
      <Contacts className="bg-dialogue mt-5 ml-10 w-50 rounded-2xl p-5" />
      <h2 className="section-header ml-200">...или оставьте заявку</h2>
      <Order className="bg-dialogue mt-5 ml-180 w-100 rounded-2xl p-5" />
    </section>
  );
};

export default ContactUs;
