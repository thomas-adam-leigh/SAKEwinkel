import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { CardSectionHeading } from "./card-section-heading";
import { FieldLabel } from "./field-label";
import { HelperText } from "./helper-text";

interface ClickthroughCardProps {
  readonly onFieldChange: () => void;
  readonly defaultValues?: {
    clickThroughUrl?: string;
    ctaButtonText?: string;
  };
}

export function ClickthroughCard({ onFieldChange, defaultValues }: ClickthroughCardProps) {
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
              defaultValue={defaultValues?.clickThroughUrl}
              onChange={onFieldChange}
            />
            <HelperText>Customer will be redirected to this URL</HelperText>
          </div>
          <div>
            <FieldLabel>CTA button text</FieldLabel>
            <AdminInput
              placeholder="Shop Now"
              defaultValue={defaultValues?.ctaButtonText}
              onChange={onFieldChange}
            />
            <HelperText>Text displayed on the product page button</HelperText>
          </div>
        </div>
      </div>
    </AdminCard>
  );
}
