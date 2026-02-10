import { AdminCard } from "../card";
import { AdminSelect } from "./admin-select";

interface ThemeTemplateCardProps {
  readonly onFieldChange: () => void;
}

export function ThemeTemplateCard({ onFieldChange }: ThemeTemplateCardProps) {
  return (
    <AdminCard>
      <div className="p-4">
        <AdminSelect
          options={[
            { value: "default", label: "Default product" },
          ]}
          defaultValue="default"
          onChange={onFieldChange}
        />
      </div>
    </AdminCard>
  );
}
