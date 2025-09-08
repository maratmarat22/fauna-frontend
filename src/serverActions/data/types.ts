export type Request = {
  name: string | undefined;
  contactType: string;
  contact: string;
  service: string;
  volume: string;
  district: string;
  extra: string | undefined;
};

export type TermsAgreement = {
  ip: string;
  dateTime: string;
};
