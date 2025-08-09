export type Request = {
  contactType: string | undefined;
  contact: string | undefined;
  service: string | undefined;
  volume: string | undefined;
  district: string | undefined;
  extra: string | undefined;
};

export type PrivacyAgreementData = {
  ip: string;
  dateTime: string;
};
