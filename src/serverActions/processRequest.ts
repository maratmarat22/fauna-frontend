'use server';

import { headers } from 'next/headers';

import type PrivacyAgreementData from '@/serverActions/privacyAgreementData';
import savePrivacyAgreementData from '@/serverActions/savePrivacyAgreement';

import type Request from '@/serverActions/request';
import sendRequestViaWA from '@/serverActions/sendRequestViaWA';

export default async function processOrder(form: FormData) {
  const privacyAgreementData: PrivacyAgreementData = {
    ip: (await headers()).get('x-forwarded-for') ?? 'undefined',
    dateTime: new Date().toISOString(),
  };
  savePrivacyAgreementData(privacyAgreementData);

  const request: Request = {
    contactType: form.get('contact-type')?.toString(),
    contact: form.get('contact')?.toString(),
    service: form.get('service')?.toString(),
    volume: form.get('volume')?.toString(),
    district: form.get('district')?.toString(),
    extra: form.get('extra')?.toString() ?? 'none',
  };

  sendRequestViaWA(request);
}
