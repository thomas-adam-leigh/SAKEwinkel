import { useState } from "react";
import { AdminCard } from "../card";
import { CardSectionHeading } from "./card-section-heading";
import { ComboboxField } from "./combobox-field";
import { FieldLabel } from "./field-label";
import { ExpandableOptionButton } from "./expandable-option-button";

interface VariantsCardProps {
  readonly onFieldChange: () => void;
}

export function VariantsCard({ onFieldChange }: VariantsCardProps) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Variants</CardSectionHeading>
      </div>
      <div className="p-4">
        {showOptions ? (
          <div>
            <FieldLabel>Option name</FieldLabel>
            <ComboboxField placeholder="Size, Color, Material..." onChange={onFieldChange} />
          </div>
        ) : (
          <ExpandableOptionButton
            label="Add options like size or color"
            onClick={() => setShowOptions(true)}
          />
        )}
      </div>
    </AdminCard>
  );
}
