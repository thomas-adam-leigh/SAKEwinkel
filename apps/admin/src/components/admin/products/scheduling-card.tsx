import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";

interface SchedulingCardProps {
  readonly onFieldChange: () => void;
}

export function SchedulingCard({ onFieldChange }: SchedulingCardProps) {
  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Scheduling</CardSectionHeading>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Start date</FieldLabel>
            <AdminInput type="date" onChange={onFieldChange} />
          </div>
          <div>
            <FieldLabel>End date</FieldLabel>
            <AdminInput type="date" onChange={onFieldChange} />
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
