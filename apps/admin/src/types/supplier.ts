export type BusinessType =
  | "Sole Proprietor"
  | "Partnership"
  | "Private Company"
  | "Public Company"
  | "Close Corporation"
  | "Trust"
  | "Non-Profit";

export type IdentificationType =
  | "SA ID"
  | "Passport"
  | "Company Registration";

export type AccountType = "Cheque" | "Savings";

export interface Contact {
  readonly firstName: string;
  readonly surname: string;
  readonly phone: string;
  readonly email: string;
  readonly role: string;
}

export interface Supplier {
  readonly id: string;
  readonly legalName: string;
  readonly tradingName: string;
  readonly businessType: BusinessType;
  readonly identificationType: IdentificationType;
  readonly identificationNumber: string;
  readonly vatRegistration: {
    readonly isRegistered: boolean;
    readonly vatNumber?: string;
  };
  readonly primaryContact: Contact;
  readonly additionalContacts?: readonly Contact[];
  readonly address: {
    readonly street: string;
    readonly town: string;
    readonly province: string;
    readonly magisterialDistrict?: string;
  };
  readonly banking: {
    readonly bankName: string;
    readonly accountType: AccountType;
    readonly accountNumber: string;
    readonly branchCode: string;
  };
  readonly shortDescription?: string;
  readonly websiteUrl?: string;
  readonly logoPath?: string;
  readonly isActive: boolean;
  readonly productsCount: number;
  readonly createdAt: string;
}
