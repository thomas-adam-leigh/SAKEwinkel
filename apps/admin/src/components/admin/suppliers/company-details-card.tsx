import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { AdminSelect } from "@/components/admin/products/admin-select";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface CompanyDetailsCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    legalName?: string;
    tradingName?: string;
    businessType?: string;
    shortDescription?: string;
    websiteUrl?: string;
  };
}

const businessTypeOptions = [
  { value: "Sole Proprietor", label: "Sole Proprietor" },
  { value: "Partnership", label: "Partnership" },
  { value: "Private Company", label: "Private Company" },
  { value: "Public Company", label: "Public Company" },
  { value: "Close Corporation", label: "Close Corporation" },
  { value: "Trust", label: "Trust" },
  { value: "Non-Profit", label: "Non-Profit" },
];

export function CompanyDetailsCard({ onFieldChange, defaultValues }: CompanyDetailsCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Company details
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Legal name</FieldLabel>
            <AdminInput defaultValue={defaultValues?.legalName} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Trading name</FieldLabel>
            <AdminInput defaultValue={defaultValues?.tradingName} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Business type</FieldLabel>
            <AdminSelect
              options={businessTypeOptions}
              defaultValue={defaultValues?.businessType ?? "Private Company"}
              onChange={onFieldChange}
            />
          </div>
          <div>
            <FieldLabel>Short description</FieldLabel>
            <textarea
              defaultValue={defaultValues?.shortDescription}
              onChange={onFieldChange}
              rows={3}
              className="w-full rounded-[8px] border border-border-input bg-bg-input px-3 py-2 text-[13px] text-text-primary placeholder:text-text-subdued outline-none focus:border-border-input-focus focus:ring-2 focus:ring-border-focus-ring resize-y"
              style={{ fontWeight: 450 }}
              placeholder="Brief description of the business"
            />
          </div>
          <div>
            <FieldLabel>Website URL</FieldLabel>
            <AdminInput type="url" defaultValue={defaultValues?.websiteUrl} placeholder="https://" onChange={onFieldChange} />
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
