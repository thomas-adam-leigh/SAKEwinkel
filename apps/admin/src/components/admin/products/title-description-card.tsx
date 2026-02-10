import { AdminCard } from "../card";
import { AdminInput } from "../input";
import { FieldLabel } from "./field-label";
import { HelperText } from "./helper-text";
import { RichTextToolbar } from "./rich-text-toolbar";
import { MediaDropZone } from "./media-drop-zone";
import { ComboboxField } from "./combobox-field";
import { CardSectionHeading } from "./card-section-heading";

interface TitleDescriptionCardProps {
  readonly onFieldChange: () => void;
}

export function TitleDescriptionCard({ onFieldChange }: TitleDescriptionCardProps) {
  return (
    <AdminCard>
      {/* Title */}
      <div className="p-4 pb-0">
        <FieldLabel>Title</FieldLabel>
        <AdminInput
          placeholder="Short sleeve t-shirt"
          onChange={onFieldChange}
        />
      </div>

      {/* Description */}
      <div className="p-4 pb-0">
        <FieldLabel>Description</FieldLabel>
        <div className="rounded-[8px] border border-border-input bg-bg-input overflow-hidden focus-within:border-border-input-focus focus-within:ring-2 focus-within:ring-border-focus-ring">
          <RichTextToolbar />
          <div
            className="min-h-[150px] p-3 text-[13px] text-text-primary outline-none"
            contentEditable
            suppressContentEditableWarning
            onInput={onFieldChange}
          />
        </div>
      </div>

      {/* Media */}
      <div className="p-4 pb-0">
        <CardSectionHeading className="mb-2">Media</CardSectionHeading>
        <MediaDropZone />
      </div>

      {/* Category */}
      <div className="p-4">
        <FieldLabel>Category</FieldLabel>
        <ComboboxField
          placeholder="Choose a product category"
          onChange={onFieldChange}
        />
        <HelperText>
          Determines tax rates and adds metafield definitions
        </HelperText>
      </div>
    </AdminCard>
  );
}
