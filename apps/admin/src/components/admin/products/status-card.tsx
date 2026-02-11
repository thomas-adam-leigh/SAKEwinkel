import { AdminCard } from "../card";
import { CardSectionHeading } from "./card-section-heading";
import { AdminSelect } from "./admin-select";
import type { ProductStatus } from "@/types/product";

interface StatusCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValue?: ProductStatus;
}

export function StatusCard({ onFieldChange, defaultValue }: StatusCardProps) {
  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Status</CardSectionHeading>
      </div>
      <div className="p-4">
        <AdminSelect
          options={[
            { value: "draft", label: "Draft" },
            { value: "unlisted", label: "Unlisted" },
            { value: "active", label: "Active" },
          ]}
          defaultValue={defaultValue?.toLowerCase() ?? "draft"}
          onChange={onFieldChange}
        />
      </div>
    </AdminCard>
  );
}
