export interface Enquiry {
  readonly fullName: string;
  readonly corporateEmail: string;
  readonly phone: string;
  readonly companyName: string;
  readonly destinationCountry: string;
  readonly portOfDischarge: string;
  readonly commodities: readonly string[];
  readonly requiredTonnage: readonly string[];
  readonly message: string;
}
