import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface CompanyDetailsCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    companyName?: string;
    tradingName?: string;
  };
}

export function CompanyDetailsCard({ onFieldChange, defaultValues }: CompanyDetailsCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Company details
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Company name</FieldLabel>
            <AdminInput defaultValue={defaultValues?.companyName} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Trading name</FieldLabel>
            <AdminInput defaultValue={defaultValues?.tradingName} onChange={onFieldChange} />
            <p className="mt-1 text-[12px] font-[400] text-text-subdued">
              Leave blank if same as company name
            </p>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
