import type PrivacyAgreementData from '@/serverActions/privacyAgreementData';

export default function savePrivacyAgreementData(
  privacyAgreementData: PrivacyAgreementData,
) {
  console.log(privacyAgreementData.ip + '\n' + privacyAgreementData.dateTime);
}
