import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { AdminButton } from "../button";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { PriceInput } from "./price-input";
import { AdminToggle } from "./admin-toggle";

interface VariantRow {
  id: string;
  name: string;
  variation: string;
}

interface VariantDefault {
  readonly id: string;
  readonly name: string;
  readonly variation: string;
  readonly originalPrice?: number;
  readonly salePrice?: number | null;
  readonly qtyInStock?: number;
  readonly maxPerOrder?: number;
  readonly commissionValue?: number;
}

interface VariantsCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: readonly VariantDefault[];
}

export function VariantsCard({ onFieldChange, defaultValues }: VariantsCardProps) {
  const hasDefaults = defaultValues && defaultValues.length > 0;
  const [showVariants, setShowVariants] = useState(!!hasDefaults);
  const [variants, setVariants] = useState<VariantRow[]>(
    hasDefaults
      ? defaultValues.map((v) => ({ id: v.id, name: v.name, variation: v.variation }))
      : [],
  );

  function addVariant() {
    setVariants((prev) => [
      ...prev,
      { id: `v-${Date.now()}`, name: "", variation: "" },
    ]);
    onFieldChange();
  }

  function removeVariant(id: string) {
    setVariants((prev) => prev.filter((v) => v.id !== id));
    onFieldChange();
  }

  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Variants</CardSectionHeading>
      </div>
      <div className="p-4">
        <AdminToggle
          checked={showVariants}
          onChange={(v) => { setShowVariants(v); if (!v) setVariants([]); onFieldChange(); }}
          label="Add variants"
          id="add-variants"
        />

        {showVariants && (
          <div className="mt-4 flex flex-col gap-4">
            {variants.map((variant, i) => (
              <div
                key={variant.id}
                className="rounded-[8px] border border-border-subdued p-3"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[12px] font-[550] text-text-secondary">
                    Variant {i + 1}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeVariant(variant.id)}
                    className="flex size-[24px] items-center justify-center rounded-[6px] text-text-secondary hover:bg-bg-nav-hover transition-colors"
                    aria-label="Remove variant"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <FieldLabel>Variant name</FieldLabel>
                    <AdminInput placeholder="e.g. Signed by Kobus" defaultValue={defaultValues?.[i]?.name} onChange={onFieldChange} />
                  </div>
                  <div>
                    <FieldLabel>Variation label</FieldLabel>
                    <AdminInput placeholder="e.g. Signer" defaultValue={defaultValues?.[i]?.variation} onChange={onFieldChange} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <FieldLabel>Original price</FieldLabel>
                    <PriceInput placeholder="0.00" defaultValue={defaultValues?.[i]?.originalPrice} onChange={onFieldChange} />
                  </div>
                  <div>
                    <FieldLabel>Sale price</FieldLabel>
                    <PriceInput placeholder="0.00" defaultValue={defaultValues?.[i]?.salePrice ?? undefined} onChange={onFieldChange} />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  <div>
                    <FieldLabel>Stock qty</FieldLabel>
                    <AdminInput type="number" placeholder="0" min="0" defaultValue={defaultValues?.[i]?.qtyInStock} onChange={onFieldChange} />
                  </div>
                  <div>
                    <FieldLabel>Max per order</FieldLabel>
                    <AdminInput type="number" placeholder="No limit" min="1" defaultValue={defaultValues?.[i]?.maxPerOrder} onChange={onFieldChange} />
                  </div>
                  <div>
                    <FieldLabel>Commission</FieldLabel>
                    <PriceInput placeholder="0.00" defaultValue={defaultValues?.[i]?.commissionValue} onChange={onFieldChange} />
                  </div>
                </div>
                <div>
                  <FieldLabel>Image</FieldLabel>
                  <div className="flex items-center justify-center h-[48px] rounded-[8px] border border-dashed border-border-subdued text-[12px] text-text-subdued">
                    Upload image
                  </div>
                </div>
              </div>
            ))}
            <AdminButton variant="tertiary" onClick={addVariant}>
              <Plus className="size-3.5 mr-1" />
              Add variant
            </AdminButton>
          </div>
        )}
      </div>
    </AdminCard>
  );
}
