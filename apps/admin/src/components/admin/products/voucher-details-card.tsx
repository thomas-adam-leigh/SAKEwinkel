import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { HelperText } from "./helper-text";

interface VoucherDetailsCardProps {
  readonly onFieldChange: () => void;
}

export function VoucherDetailsCard({ onFieldChange }: VoucherDetailsCardProps) {
  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Voucher details</CardSectionHeading>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Voucher code prefix</FieldLabel>
            <AdminInput placeholder="SAKE-" onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Expiry</FieldLabel>
            <AdminInput placeholder="Valid until 31 December 2026" onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Offer description</FieldLabel>
            <AdminInput placeholder="50% Afslag" onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Optional headline</FieldLabel>
            <AdminInput placeholder="50% Afslagsbewys" onChange={onFieldChange} />
            <HelperText>Shown above the product title on the storefront</HelperText>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
