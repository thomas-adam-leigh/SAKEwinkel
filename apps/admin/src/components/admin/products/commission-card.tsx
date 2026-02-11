import { AdminCard } from "../card";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { PriceInput } from "./price-input";

interface CommissionCardProps {
  readonly onFieldChange: () => void;
}

export function CommissionCard({ onFieldChange }: CommissionCardProps) {
  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Commission</CardSectionHeading>
      </div>
      <div className="p-4">
        <FieldLabel>Commission value</FieldLabel>
        <PriceInput placeholder="0.00" onChange={onFieldChange} />
      </div>
    </AdminCard>
  );
}
