'use server';

export default async function sendOrder(form: FormData) {
  const formData = {
    contactType: form.get('contact-type'),
    service: form.get('service'),
    volume: form.get('volume'),
    district: form.get('district'),
  };
  for (const [k, v] of Object.entries(formData)) {
    console.log(`${k}: ${v}`);
  }
}
