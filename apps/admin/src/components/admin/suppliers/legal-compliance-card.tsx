import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface LegalComplianceCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    registrationNumber?: string;
    vatNumber?: string;
    licenseNumber?: string;
  };
}

export function LegalComplianceCard({
  onFieldChange,
  defaultValues,
}: LegalComplianceCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Legal & compliance
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Company registration number</FieldLabel>
            <AdminInput defaultValue={defaultValues?.registrationNumber} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>VAT number</FieldLabel>
            <AdminInput defaultValue={defaultValues?.vatNumber} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>License number</FieldLabel>
            <AdminInput defaultValue={defaultValues?.licenseNumber} onChange={onFieldChange} />
            <p className="mt-1 text-[12px] font-[400] text-text-subdued">
              Required for alcohol distribution
            </p>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
