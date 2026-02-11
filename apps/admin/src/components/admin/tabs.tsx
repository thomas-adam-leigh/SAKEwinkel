import { Plus } from "lucide-react";

export interface TabDef {
  readonly id: string;
  readonly label: string;
  readonly count?: number;
}

interface AdminTabsProps {
  readonly tabs: readonly TabDef[];
  readonly activeTab: string;
  readonly onTabChange: (id: string) => void;
  readonly variant?: "underline" | "pill";
  readonly showAddButton?: boolean;
  readonly onAdd?: () => void;
}

export function AdminTabs({
  tabs,
  activeTab,
  onTabChange,
  variant = "pill",
  showAddButton,
  onAdd,
}: AdminTabsProps) {
  return (
    <div
      className={`flex items-center gap-0 ${
        variant === "underline" ? "" : "gap-1"
      }`}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        if (variant === "underline") {
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`relative px-3 py-2 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring focus-visible:ring-offset-1 ${
                isActive
                  ? "font-[550] text-text-primary"
                  : "font-[450] text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab.label}
              {tab.count != null && tab.count > 0 && (
                <span className="ml-1 text-[11px] text-text-subdued">
                  {tab.count}
                </span>
              )}
              {isActive && (
                <span className="absolute right-3 bottom-0 left-3 h-[2px] rounded-full bg-text-primary" />
              )}
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`h-[28px] rounded-[8px] px-2 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring focus-visible:ring-offset-1 ${
              isActive
                ? "bg-bg-nav-active font-[400] text-text-primary"
                : "bg-transparent font-[450] text-text-secondary hover:bg-bg-nav-hover hover:text-text-primary"
            }`}
          >
            {tab.label}
            {tab.count != null && tab.count > 0 && (
              <span className="ml-1 text-[11px] text-text-subdued">
                {tab.count}
              </span>
            )}
          </button>
        );
      })}

      {showAddButton && (
        <button
          type="button"
          onClick={onAdd}
          className="flex size-[28px] items-center justify-center rounded-[8px] text-text-secondary transition-colors hover:bg-bg-nav-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
          aria-label="Create new view"
        >
          <Plus className="size-4" />
        </button>
      )}
    </div>
  );
}
