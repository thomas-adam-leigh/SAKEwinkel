import { useState } from "react";
import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { AdminToggle } from "./admin-toggle";
import { SpinButton } from "./spin-button";
import { ExpandableOptionButton } from "./expandable-option-button";
import { AdminCheckbox } from "./admin-checkbox";

interface InventoryCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    maxPerOrder?: number;
  };
}

export function InventoryCard({ onFieldChange, defaultValues }: InventoryCardProps) {
  const [tracked, setTracked] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [showSku, setShowSku] = useState(false);
  const [showBarcode, setShowBarcode] = useState(false);
  const [showSellOutOfStock, setShowSellOutOfStock] = useState(false);
  const [sellOutOfStock, setSellOutOfStock] = useState(false);

  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Inventory</CardSectionHeading>
      </div>
      <div className="p-4">
        <AdminToggle
          checked={tracked}
          onChange={(v) => { setTracked(v); onFieldChange(); }}
          label="Inventory tracked"
          id="inventory-tracked"
        />

        {tracked && (
          <>
            {/* Quantity table */}
            <div className="mt-4">
              <div
                className="flex justify-between items-center py-2 text-[12px] text-text-secondary"
                style={{ fontWeight: 550, borderBottom: "1px solid #e3e3e3" }}
              >
                <span>Location</span>
                <span>Quantity</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[13px] text-text-primary" style={{ fontWeight: 450 }}>
                  Shop location
                </span>
                <SpinButton
                  value={quantity}
                  onChange={(v) => { setQuantity(v); onFieldChange(); }}
                />
              </div>
            </div>

            {/* Max per order */}
            <div className="mt-3">
              <FieldLabel>Max per order</FieldLabel>
              <AdminInput type="number" placeholder="No limit" min="1" defaultValue={defaultValues?.maxPerOrder} onChange={onFieldChange} />
            </div>

            {/* Expanded fields */}
            {showSku && (
              <div className="mt-3">
                <FieldLabel>SKU (Stock Keeping Unit)</FieldLabel>
                <AdminInput onChange={onFieldChange} />
              </div>
            )}
            {showBarcode && (
              <div className="mt-3">
                <FieldLabel>Barcode (ISBN, UPC, GTIN, etc.)</FieldLabel>
                <AdminInput onChange={onFieldChange} />
              </div>
            )}
            {showSellOutOfStock && (
              <div className="mt-3">
                <AdminCheckbox
                  checked={sellOutOfStock}
                  onChange={(v) => { setSellOutOfStock(v); onFieldChange(); }}
                  label="Continue selling when out of stock"
                />
              </div>
            )}

            {/* Expandable options */}
            <div className="flex flex-wrap gap-1 mt-3">
              {!showSku && (
                <ExpandableOptionButton label="SKU" onClick={() => setShowSku(true)} />
              )}
              {!showBarcode && (
                <ExpandableOptionButton label="Barcode" onClick={() => setShowBarcode(true)} />
              )}
              {!showSellOutOfStock && (
                <ExpandableOptionButton label="Sell when out of stock Off" onClick={() => setShowSellOutOfStock(true)} />
              )}
            </div>
          </>
        )}
      </div>
    </AdminCard>
  );
}
