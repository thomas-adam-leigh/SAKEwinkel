import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { AdminSelect } from "@/components/admin/products/admin-select";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface BankingDetailsCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    bankName?: string;
    accountType?: string;
    accountNumber?: string;
    branchCode?: string;
  };
}

const accountTypeOptions = [
  { value: "Cheque", label: "Cheque" },
  { value: "Savings", label: "Savings" },
];

export function BankingDetailsCard({
  onFieldChange,
  defaultValues,
}: BankingDetailsCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Banking details
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Bank name</FieldLabel>
            <AdminInput defaultValue={defaultValues?.bankName} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Account type</FieldLabel>
            <AdminSelect
              options={accountTypeOptions}
              defaultValue={defaultValues?.accountType ?? "Cheque"}
              onChange={onFieldChange}
            />
          </div>
          <div>
            <FieldLabel>Account number</FieldLabel>
            <AdminInput defaultValue={defaultValues?.accountNumber} onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>Branch code</FieldLabel>
            <AdminInput defaultValue={defaultValues?.branchCode} onChange={onFieldChange} />
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
