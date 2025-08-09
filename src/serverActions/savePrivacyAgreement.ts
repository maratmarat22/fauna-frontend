import type { PrivacyAgreementData } from './data/types';

export default function savePrivacyAgreementData(
  privacyAgreementData: PrivacyAgreementData,
) {
  console.log(privacyAgreementData.ip + '\n' + privacyAgreementData.dateTime);
}
