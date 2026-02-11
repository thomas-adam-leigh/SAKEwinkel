import { useState } from "react";
import { Package, Ticket, ExternalLink } from "lucide-react";
import { AdminCard } from "../card";
import { CardSectionHeading } from "./card-section-heading";
import type { ProductType } from "@/types/product";

interface ProductTypeCardProps {
  readonly value: ProductType;
  readonly onTypeChange: (type: ProductType) => void;
  readonly onFieldChange: () => void;
}

const types: { id: ProductType; label: string; icon: typeof Package }[] = [
  { id: "Physical", label: "Physical", icon: Package },
  { id: "Voucher", label: "Voucher", icon: Ticket },
  { id: "Clickthrough", label: "Clickthrough", icon: ExternalLink },
];

export function ProductTypeCard({ value, onTypeChange, onFieldChange }: ProductTypeCardProps) {
  function handleSelect(type: ProductType) {
    if (type !== value) {
      onTypeChange(type);
      onFieldChange();
    }
  }

  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Product type</CardSectionHeading>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2">
          {types.map(({ id, label, icon: Icon }) => {
            const selected = value === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                className="flex flex-col items-center gap-1.5 rounded-[8px] border px-3 py-3 text-[12px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
                style={{
                  fontWeight: selected ? 600 : 450,
                  borderColor: selected ? "#303030" : "var(--color-border-subdued)",
                  backgroundColor: selected ? "var(--color-bg-surface-hover)" : "transparent",
                  color: "var(--color-text-primary)",
                }}
              >
                <Icon className="size-4" />
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </AdminCard>
  );
}
