import { AdminCard } from "@/components/admin/card";
import { AdminInput } from "@/components/admin/input";
import { AdminSelect } from "@/components/admin/products/admin-select";
import { CardSectionHeading } from "@/components/admin/products/card-section-heading";
import { FieldLabel } from "@/components/admin/products/field-label";

interface BusinessAddressCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    street?: string;
    street2?: string;
    city?: string;
    province?: string;
    postalCode?: string;
    country?: string;
  };
}

const countryOptions = [
  { value: "South Africa", label: "South Africa" },
  { value: "Japan", label: "Japan" },
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Australia", label: "Australia" },
  { value: "Netherlands", label: "Netherlands" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
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
          <div>
            <FieldLabel>Apartment, suite, etc.</FieldLabel>
            <AdminInput defaultValue={defaultValues?.street2} onChange={onFieldChange} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel>City</FieldLabel>
              <AdminInput defaultValue={defaultValues?.city} onChange={onFieldChange} />
            </div>
            <div>
              <FieldLabel>Province</FieldLabel>
              <AdminInput defaultValue={defaultValues?.province} onChange={onFieldChange} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <FieldLabel>Postal code</FieldLabel>
              <AdminInput defaultValue={defaultValues?.postalCode} onChange={onFieldChange} />
            </div>
            <div>
              <FieldLabel>Country</FieldLabel>
              <AdminSelect
                options={countryOptions}
                defaultValue={defaultValues?.country ?? "South Africa"}
                onChange={onFieldChange}
              />
            </div>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
