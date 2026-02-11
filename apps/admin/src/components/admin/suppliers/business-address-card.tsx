import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { AdminSelect } from "@/components/admin/products/admin-select";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface BusinessAddressCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    street?: string;
    town?: string;
    province?: string;
    magisterialDistrict?: string;
  };
}

const provinceOptions = [
  { value: "Eastern Cape", label: "Eastern Cape" },
  { value: "Free State", label: "Free State" },
  { value: "Gauteng", label: "Gauteng" },
  { value: "KwaZulu-Natal", label: "KwaZulu-Natal" },
  { value: "Limpopo", label: "Limpopo" },
  { value: "Mpumalanga", label: "Mpumalanga" },
  { value: "North West", label: "North West" },
  { value: "Northern Cape", label: "Northern Cape" },
  { value: "Western Cape", label: "Western Cape" },
];

export function BusinessAddressCard({
  onFieldChange,
  defaultValues,
}: BusinessAddressCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <CardSectionHeading className="mb-3">
          Business address
        </CardSectionHeading>
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Street address</FieldLabel>
            <AdminInput defaultValue={defaultValues?.street} onChange={onFieldChange} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel>Town / City</FieldLabel>
              <AdminInput defaultValue={defaultValues?.town} onChange={onFieldChange} />
            </div>
            <div>
              <FieldLabel>Province</FieldLabel>
              <AdminSelect
                options={provinceOptions}
                defaultValue={defaultValues?.province ?? "Western Cape"}
                onChange={onFieldChange}
              />
            </div>
          </div>
          <div>
            <FieldLabel>Magisterial district</FieldLabel>
            <AdminInput defaultValue={defaultValues?.magisterialDistrict} onChange={onFieldChange} />
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
