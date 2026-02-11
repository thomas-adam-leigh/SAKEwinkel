import { AdminCard } from "@/components/admin/card";
import { AdminSelect } from "@/components/admin/products/admin-select";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface SupplierStatusCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValue?: string;
}

const statusOptions = [
  { value: "Active", label: "Active" },
  { value: "Inactive", label: "Inactive" },
];

export function SupplierStatusCard({
  onFieldChange,
  defaultValue = "Active",
}: SupplierStatusCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">Status</CardSectionHeading>
        <div>
          <FieldLabel>Supplier status</FieldLabel>
          <AdminSelect
            options={statusOptions}
            defaultValue={defaultValue}
            onChange={onFieldChange}
          />
        </div>
      </div>
    </AdminCard>
  );
}
