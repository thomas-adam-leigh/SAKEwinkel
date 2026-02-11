import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { HelperText } from "./helper-text";

interface VoucherDetailsCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    voucherCodePrefix?: string;
    voucherExpiry?: string;
    voucherOffer?: string;
    optionalHeadline?: string;
  };
}

export function VoucherDetailsCard({ onFieldChange, defaultValues }: VoucherDetailsCardProps) {
  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Voucher details</CardSectionHeading>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Voucher code prefix</FieldLabel>
            <AdminInput placeholder="SAKE-" defaultValue={defaultValues?.voucherCodePrefix} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Expiry</FieldLabel>
            <AdminInput placeholder="Valid until 31 December 2026" defaultValue={defaultValues?.voucherExpiry} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Offer description</FieldLabel>
            <AdminInput placeholder="50% Afslag" defaultValue={defaultValues?.voucherOffer} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Optional headline</FieldLabel>
            <AdminInput placeholder="50% Afslagsbewys" defaultValue={defaultValues?.optionalHeadline} onChange={onFieldChange} />
            <HelperText>Shown above the product title on the storefront</HelperText>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
