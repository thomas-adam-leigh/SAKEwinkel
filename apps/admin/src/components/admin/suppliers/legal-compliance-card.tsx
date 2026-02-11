import { useState } from "react";
import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { AdminSelect } from "@/components/admin/products/admin-select";
import { AdminToggle } from "@/components/admin/products/admin-toggle";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface LegalComplianceCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    identificationType?: string;
    identificationNumber?: string;
    isVatRegistered?: boolean;
    vatNumber?: string;
  };
}

const idTypeOptions = [
  { value: "SA ID", label: "SA ID" },
  { value: "Passport", label: "Passport" },
  { value: "Company Registration", label: "Company Registration" },
];

export function LegalComplianceCard({
  onFieldChange,
  defaultValues,
}: LegalComplianceCardProps) {
  const [vatRegistered, setVatRegistered] = useState(defaultValues?.isVatRegistered ?? false);

  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Legal & compliance
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Identification type</FieldLabel>
            <AdminSelect
              options={idTypeOptions}
              defaultValue={defaultValues?.identificationType ?? "Company Registration"}
              onChange={onFieldChange}
            />
          </div>
          <div>
            <FieldLabel>Identification number</FieldLabel>
            <AdminInput defaultValue={defaultValues?.identificationNumber} onChange={onFieldChange} />
          </div>
          <div>
            <AdminToggle
              checked={vatRegistered}
              onChange={(v) => { setVatRegistered(v); onFieldChange(); }}
              label="VAT registered"
              id="vat-registered"
            />
          </div>
          {vatRegistered && (
            <div>
              <FieldLabel>VAT number</FieldLabel>
              <AdminInput defaultValue={defaultValues?.vatNumber} onChange={onFieldChange} />
            </div>
          )}
        </div>
      </div>
    </AdminCard>
  );
}
