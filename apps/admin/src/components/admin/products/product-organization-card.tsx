import { Search } from "lucide-react";
import { AdminCard } from "../card";
import { AdminButton } from "../button";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { ComboboxField } from "./combobox-field";

interface ProductOrganizationCardProps {
  readonly onFieldChange: () => void;
}

export function ProductOrganizationCard({ onFieldChange }: ProductOrganizationCardProps) {
  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading
          action={<AdminButton variant="ghost">Learn more</AdminButton>}
        >
          Product organization
        </CardSectionHeading>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div>
          <FieldLabel>Type</FieldLabel>
          <ComboboxField placeholder="Search or add type" onChange={onFieldChange} />
        </div>
        <div>
          <FieldLabel>Vendor</FieldLabel>
          <ComboboxField placeholder="Search or add vendor" onChange={onFieldChange} />
        </div>
        <div>
          <FieldLabel>Collections</FieldLabel>
          <ComboboxField
            placeholder="Search collections"
            icon={<Search className="size-3.5" />}
            onChange={onFieldChange}
          />
        </div>
        <div>
          <FieldLabel>Tags</FieldLabel>
          <ComboboxField placeholder="Search or add tags" onChange={onFieldChange} />
        </div>
      </div>
    </AdminCard>
  );
}
