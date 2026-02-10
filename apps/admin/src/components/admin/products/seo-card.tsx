import { useState } from "react";
import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { AdminButton } from "../button";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";

interface SeoCardProps {
  readonly onFieldChange: () => void;
}

export function SeoCard({ onFieldChange }: SeoCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading
          action={
            <AdminButton variant="ghost" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Collapse" : "Edit"}
            </AdminButton>
          }
        >
          Search engine listing
        </CardSectionHeading>
      </div>
      <div className="p-4">
        {expanded ? (
          <div className="flex flex-col gap-3">
            <div>
              <FieldLabel>Page title</FieldLabel>
              <AdminInput placeholder="Product title" onChange={onFieldChange} />
            </div>
            <div>
              <FieldLabel>Meta description</FieldLabel>
              <textarea
                className="w-full min-h-[80px] rounded-[8px] border border-border-input bg-bg-input text-[13px] text-text-primary px-3 py-1.5 outline-none resize-y focus:border-border-input-focus focus:ring-2 focus:ring-border-focus-ring placeholder:text-text-subdued"
                placeholder="Description"
                onChange={onFieldChange}
              />
            </div>
          </div>
        ) : (
          <p className="text-[13px] text-text-secondary" style={{ fontWeight: 450 }}>
            Add a title and description to see how this product might appear in a search engine listing
          </p>
        )}
      </div>
    </AdminCard>
  );
}
