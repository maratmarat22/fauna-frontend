import type { TermsAgreement } from './data/types';

export default function savePrivacyAgreementData(privacyAgreementData: TermsAgreement) {
  console.log(privacyAgreementData.ip + '\n' + privacyAgreementData.dateTime);
}
