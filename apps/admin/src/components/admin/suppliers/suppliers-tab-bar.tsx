import { AdminTabs, type TabDef } from "@/components/admin/tabs";

type SupplierTab = "all" | "active" | "inactive" | "pending";

const tabs: TabDef[] = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "inactive", label: "Inactive" },
  { id: "pending", label: "Pending" },
];

interface SuppliersTabBarProps {
  readonly activeTab: string;
  readonly onTabChange: (tab: string) => void;
  readonly tabCounts?: Record<SupplierTab, number>;
}

export function SuppliersTabBar({
  activeTab,
  onTabChange,
  tabCounts,
}: SuppliersTabBarProps) {
  const tabsWithCounts = tabCounts
    ? tabs.map((t) => ({
        ...t,
        count: t.id !== "all" ? tabCounts[t.id as SupplierTab] : undefined,
      }))
    : tabs;

  return (
    <div className="px-3">
      <AdminTabs
        tabs={tabsWithCounts}
        activeTab={activeTab}
        onTabChange={onTabChange}
        variant="pill"
      />
    </div>
  );
}
