'use server';

import { headers } from 'next/headers';
import type { TermsAgreement, Request } from './data/types';
import { checkHoneypot, checkBadOrigin } from '@/serverActions/checkSpam';
import services from '@/shared/services';

type RequestTermsAgreementDto = Request & TermsAgreement;

export default async function processOrder(form: FormData) {
  if (checkHoneypot(form) || (await checkBadOrigin())) return;

  const termsAgreement: TermsAgreement = {
    ip: (await headers()).get('x-forwarded-for') ?? 'undefined',
    dateTime: new Date().toISOString(),
  };

  const serviceId = form.get('service-id')?.toString();

  const payload: RequestTermsAgreementDto = {
    name: form.get('first-name')?.toString(),
    contactType: form.get('contact-type')?.toString() ?? '',
    contact: form.get('contact')?.toString() ?? '',
    service: services.find(s => s.id === serviceId)?.name ?? '',
    volume: form.get('volume')?.toString() ?? '',
    district: form.get('district')?.toString() ?? '',
    extra: form.get('extra')?.toString(),
    ip: termsAgreement.ip,
    dateTime: termsAgreement.dateTime,
  };

  const response = await fetch('http://localhost:8080/api/requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw Error();
  }
}
