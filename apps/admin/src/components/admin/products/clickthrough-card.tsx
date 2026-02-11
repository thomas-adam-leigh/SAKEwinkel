import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { HelperText } from "./helper-text";

interface ClickthroughCardProps {
  readonly onFieldChange: () => void;
}

export function ClickthroughCard({ onFieldChange }: ClickthroughCardProps) {
  return (
    <AdminCard>
      <div className="p-4 pb-0">
        <CardSectionHeading>Clickthrough</CardSectionHeading>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-3">
          <div>
            <FieldLabel>Redirect URL</FieldLabel>
            <AdminInput
              type="url"
              placeholder="https://supplier-store.co.za"
              onChange={onFieldChange}
            />
            <HelperText>Customer will be redirected to this URL</HelperText>
          </div>
          <div>
            <FieldLabel>CTA button text</FieldLabel>
            <AdminInput
              placeholder="Shop Now"
              onChange={onFieldChange}
            />
            <HelperText>Text displayed on the product page button</HelperText>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
