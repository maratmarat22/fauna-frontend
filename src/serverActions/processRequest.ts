'use server';

import { headers } from 'next/headers';

import type { PrivacyAgreementData } from './data/types';
import savePrivacyAgreementData from '@/serverActions/savePrivacyAgreement';

import type { Request } from './data/types';
import sendRequestViaWA from '@/serverActions/sendRequestViaWA';
import { checkHoneypot, checkBadOrigin } from '@/serverActions/checkSpam';

import services from '@/shared/services';

export default async function processOrder(form: FormData) {
  if (checkHoneypot(form) || (await checkBadOrigin())) return;

  const privacyAgreementData: PrivacyAgreementData = {
    ip: (await headers()).get('x-forwarded-for') ?? 'undefined',
    dateTime: new Date().toISOString(),
  };
  savePrivacyAgreementData(privacyAgreementData);

  const serviceId = form.get('service-id')?.toString();

  const request: Request = {
    contactType: form.get('contact-type')?.toString(),
    contact: form.get('contact')?.toString(),
    service: services.find(s => s.id === serviceId)?.name ?? 'undefined',
    volume: form.get('volume')?.toString(),
    district: form.get('district')?.toString(),
    extra: form.get('extra')?.toString() ?? 'none',
  };

  sendRequestViaWA(request);
}
