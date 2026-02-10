import { useState } from "react";
import { AdminCard } from "../card";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { PriceInput } from "./price-input";
import { AdminCheckbox } from "./admin-checkbox";
import { ExpandableOptionButton } from "./expandable-option-button";

interface PriceCardProps {
  readonly onFieldChange: () => void;
}

export function PriceCard({ onFieldChange }: PriceCardProps) {
  const [showCompareAt, setShowCompareAt] = useState(false);
  const [showUnitPrice, setShowUnitPrice] = useState(false);
  const [showChargeTax, setShowChargeTax] = useState(false);
  const [chargeTax, setChargeTax] = useState(true);
  const [showCostPerItem, setShowCostPerItem] = useState(false);

  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Price</CardSectionHeading>
      </div>
      <div className="p-4">
        <FieldLabel>Price</FieldLabel>
        <PriceInput placeholder="0.00" onChange={onFieldChange} />

        {/* Expanded fields */}
        {showCompareAt && (
          <div className="mt-3">
            <FieldLabel>Compare at price</FieldLabel>
            <PriceInput placeholder="0.00" onChange={onFieldChange} />
          </div>
        )}
        {showUnitPrice && (
          <div className="mt-3">
            <FieldLabel>Unit price</FieldLabel>
            <PriceInput placeholder="0.00" onChange={onFieldChange} />
          </div>
        )}
        {showChargeTax && (
          <div className="mt-3">
            <AdminCheckbox
              checked={chargeTax}
              onChange={(v) => { setChargeTax(v); onFieldChange(); }}
              label="Charge tax on this product"
            />
          </div>
        )}
        {showCostPerItem && (
          <div className="mt-3">
            <FieldLabel>Cost per item</FieldLabel>
            <PriceInput placeholder="0.00" onChange={onFieldChange} />
          </div>
        )}

        {/* Expandable options row */}
        <div className="flex flex-wrap gap-1 mt-3">
          {!showCompareAt && (
            <ExpandableOptionButton label="Compare at" onClick={() => setShowCompareAt(true)} />
          )}
          {!showUnitPrice && (
            <ExpandableOptionButton label="Unit price" onClick={() => setShowUnitPrice(true)} />
          )}
          {!showChargeTax && (
            <ExpandableOptionButton label="Charge tax Yes" onClick={() => setShowChargeTax(true)} />
          )}
          {!showCostPerItem && (
            <ExpandableOptionButton label="Cost per item" onClick={() => setShowCostPerItem(true)} />
          )}
        </div>
      </div>
    </AdminCard>
  );
}
