export type ProductType = "Physical" | "Voucher" | "Clickthrough";

export type ProductStatus = "Draft" | "Unlisted" | "Active";

export interface ProductVariant {
  readonly id: string;
  readonly name: string;
  readonly variation: string;
  readonly originalPrice: number;
  readonly salePrice?: number;
  readonly qtyInStock: number;
  readonly maxPerOrder?: number;
  readonly commissionValue?: number;
  readonly mainImageUrl?: string;
  readonly slug: string;
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly productType: ProductType;
  readonly status: ProductStatus;
  readonly supplierId: string;
  readonly originalPrice: number;
  readonly salePrice?: number;
  readonly commissionValue?: number;
  readonly shortOverview?: string;
  readonly description?: string;
  readonly color?: string;
  readonly mainImageUrl?: string;
  readonly galleryImages?: readonly string[];
  readonly maxPerOrder?: number;
  readonly onHomepage?: boolean;
  readonly hidePrice?: boolean;
  readonly galleryHeadline?: string;
  readonly optionalHeadline?: string;
  readonly productStart?: string;
  readonly productEnd?: string;
  readonly variants?: readonly ProductVariant[];
  // Physical-specific
  readonly deliveryCost?: number;
  readonly weight?: number;
  readonly packageType?: string;
  readonly countryOfOrigin?: string;
  // Voucher-specific
  readonly voucherCodePrefix?: string;
  readonly voucherExpiry?: string;
  readonly voucherOffer?: string;
  // Clickthrough-specific
  readonly clickThroughUrl?: string;
  readonly ctaButtonText?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
}
