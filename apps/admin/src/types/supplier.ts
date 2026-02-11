export interface Supplier {
  readonly id: string;
  readonly companyName: string;
  readonly tradingName: string;
  readonly status: "Active" | "Inactive" | "Pending";
  readonly contact: {
    readonly firstName: string;
    readonly lastName: string;
    readonly role: string;
    readonly email: string;
    readonly phone: string;
  };
  readonly address: {
    readonly street: string;
    readonly street2?: string;
    readonly city: string;
    readonly province: string;
    readonly postalCode: string;
    readonly country: string;
  };
  readonly legal: {
    readonly registrationNumber: string;
    readonly vatNumber: string;
    readonly licenseNumber?: string;
  };
  readonly communication: {
    readonly orderNotificationEmail: string;
    readonly notifyOnNewOrder: boolean;
    readonly notifyOnPaymentReceived: boolean;
    readonly notifyOnShipmentRequired: boolean;
  };
  readonly productsCount: number;
  readonly createdAt: string;
}
