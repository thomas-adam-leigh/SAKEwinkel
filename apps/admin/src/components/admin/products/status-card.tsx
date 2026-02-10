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
            { value: "active", label: "Active" },
            { value: "draft", label: "Draft" },
          ]}
          defaultValue="active"
          onChange={onFieldChange}
        />
      </div>
    </AdminCard>
  );
}
