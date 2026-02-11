import { AdminCard } from "../card";
import { CardSectionHeading } from "./card-section-heading";
import { AdminSelect } from "./admin-select";

interface StatusCardProps {
  readonly onFieldChange: () => void;
}

export function StatusCard({ onFieldChange }: StatusCardProps) {
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
          defaultValue="draft"
          onChange={onFieldChange}
        />
      </div>
    </AdminCard>
  );
}
