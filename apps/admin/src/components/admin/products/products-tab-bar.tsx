import { AdminTabs, type TabDef } from "@/components/admin/tabs";

type ProductTab = "all" | "active" | "draft" | "archived";

const tabs: TabDef[] = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "draft", label: "Draft" },
  { id: "archived", label: "Archived" },
];

interface ProductsTabBarProps {
  readonly activeTab: string;
  readonly onTabChange: (tab: string) => void;
  readonly tabCounts?: Record<ProductTab, number>;
}

export function ProductsTabBar({
  activeTab,
  onTabChange,
  tabCounts,
}: ProductsTabBarProps) {
  const tabsWithCounts = tabCounts
    ? tabs.map((t) => ({
        ...t,
        count: t.id !== "all" ? tabCounts[t.id as ProductTab] : undefined,
      }))
    : tabs;

  return (
    <div className="px-3">
      <AdminTabs
        tabs={tabsWithCounts}
        activeTab={activeTab}
        onTabChange={onTabChange}
        variant="pill"
        showAddButton
      />
    </div>
  );
}
