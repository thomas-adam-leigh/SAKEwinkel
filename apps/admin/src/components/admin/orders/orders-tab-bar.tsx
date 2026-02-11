import { Search } from "lucide-react";
import { AdminTabs, type TabDef } from "@/components/admin/tabs";

const tabs: TabDef[] = [
  { id: "All", label: "All" },
  { id: "Unfulfilled", label: "Unfulfilled" },
  { id: "Unpaid", label: "Unpaid" },
  { id: "Open", label: "Open" },
  { id: "Closed", label: "Closed" },
];

export type OrderTab = "All" | "Unfulfilled" | "Unpaid" | "Open" | "Closed";

interface OrdersTabBarProps {
  readonly activeTab: OrderTab;
  readonly onTabChange: (tab: OrderTab) => void;
  readonly tabCounts: Record<OrderTab, number>;
  readonly searchValue: string;
  readonly onSearchChange: (value: string) => void;
}

export function OrdersTabBar({
  activeTab,
  onTabChange,
  tabCounts,
  searchValue,
  onSearchChange,
}: OrdersTabBarProps) {
  const tabsWithCounts = tabs.map((t) => ({
    ...t,
    count: t.id !== "All" ? tabCounts[t.id as OrderTab] : undefined,
  }));

  return (
    <div className="flex items-center justify-between border-b border-border-subdued px-4">
      <AdminTabs
        tabs={tabsWithCounts}
        activeTab={activeTab}
        onTabChange={(id) => onTabChange(id as OrderTab)}
        variant="underline"
      />

      <div className="flex h-[32px] items-center gap-1.5 rounded-[8px] border border-border-input bg-bg-input px-2 focus-within:border-border-input-focus focus-within:ring-2 focus-within:ring-border-focus-ring/20">
        <Search className="size-4 text-text-secondary" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={`Search ${activeTab === "All" ? "all orders" : activeTab.toLowerCase()}`}
          className="w-[140px] border-none bg-transparent text-[13px] text-text-primary placeholder:text-text-subdued outline-none"
        />
      </div>
    </div>
  );
}
