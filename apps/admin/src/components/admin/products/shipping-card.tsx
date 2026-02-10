import { useState } from "react";
import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { AdminToggle } from "./admin-toggle";
import { AdminSelect } from "./admin-select";
import { ComboboxField } from "./combobox-field";
import { ExpandableOptionButton } from "./expandable-option-button";

interface ShippingCardProps {
  readonly onFieldChange: () => void;
}

export function ShippingCard({ onFieldChange }: ShippingCardProps) {
  const [isPhysical, setIsPhysical] = useState(true);
  const [showCountryOfOrigin, setShowCountryOfOrigin] = useState(false);
  const [showHsCode, setShowHsCode] = useState(false);

  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Shipping</CardSectionHeading>
      </div>
      <div className="p-4">
        <AdminToggle
          checked={isPhysical}
          onChange={(v) => { setIsPhysical(v); onFieldChange(); }}
          label="Physical product"
          id="physical-product"
        />

        {isPhysical && (
          <>
            {/* Package */}
            <div className="mt-4">
              <FieldLabel>Package</FieldLabel>
              <ComboboxField
                placeholder="Store default - Sample box..."
                onChange={onFieldChange}
              />
            </div>

            {/* Weight */}
            <div className="mt-3">
              <FieldLabel>Weight</FieldLabel>
              <div className="flex gap-2">
                <div className="flex-1">
                  <AdminInput
                    type="number"
                    placeholder="0.0"
                    onChange={onFieldChange}
                  />
                </div>
                <div className="w-[80px]">
                  <AdminSelect
                    options={[
                      { value: "kg", label: "kg" },
                      { value: "g", label: "g" },
                      { value: "lb", label: "lb" },
                      { value: "oz", label: "oz" },
                    ]}
                    defaultValue="kg"
                    onChange={onFieldChange}
                  />
                </div>
              </div>
            </div>

            {/* Expanded fields */}
            {showCountryOfOrigin && (
              <div className="mt-3">
                <FieldLabel>Country/Region of origin</FieldLabel>
                <ComboboxField placeholder="Select country" onChange={onFieldChange} />
              </div>
            )}
            {showHsCode && (
              <div className="mt-3">
                <FieldLabel>HS (Harmonized System) code</FieldLabel>
                <AdminInput placeholder="Search or enter HS code" onChange={onFieldChange} />
              </div>
            )}

            {/* Expandable options */}
            <div className="flex flex-wrap gap-1 mt-3">
              {!showCountryOfOrigin && (
                <ExpandableOptionButton label="Country of origin" onClick={() => setShowCountryOfOrigin(true)} />
              )}
              {!showHsCode && (
                <ExpandableOptionButton label="HS Code" onClick={() => setShowHsCode(true)} />
              )}
            </div>
          </>
        )}
      </div>
    </AdminCard>
  );
}
