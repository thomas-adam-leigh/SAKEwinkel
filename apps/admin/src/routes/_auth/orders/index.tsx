import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown, SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { AdminButton } from "@/components/admin/button";
import { AdminCard } from "@/components/admin/card";
import { OrdersEmptyState } from "@/components/admin/orders/orders-empty-state";
import {
  OrdersTabBar,
  type OrderTab,
} from "@/components/admin/orders/orders-tab-bar";
import {
  OrdersTable,
  type SortDirection,
  type SortField,
} from "@/components/admin/orders/orders-table";
import { PageHeader } from "@/components/admin/page-header";
import { type Order, orders as mockOrders } from "@/data/orders";

export const Route = createFileRoute("/_auth/orders/")({
  component: OrdersPage,
});

function filterByTab(order: Order, tab: OrderTab): boolean {
  switch (tab) {
    case "All":
      return true;
    case "Unfulfilled":
      return order.fulfillmentStatus === "Unfulfilled";
    case "Unpaid":
      return (
        order.paymentStatus === "Pending" ||
        order.paymentStatus === "Partially paid"
      );
    case "Open":
      return (
        order.fulfillmentStatus === "Unfulfilled" ||
        order.paymentStatus === "Pending" ||
        order.paymentStatus === "Partially paid"
      );
    case "Closed":
      return (
        order.fulfillmentStatus === "Fulfilled" &&
        order.paymentStatus === "Paid"
      );
    default:
      return true;
  }
}

function computeTabCounts(
  orders: Order[],
): Record<OrderTab, number> {
  return {
    All: orders.length,
    Unfulfilled: orders.filter((o) => filterByTab(o, "Unfulfilled")).length,
    Unpaid: orders.filter((o) => filterByTab(o, "Unpaid")).length,
    Open: orders.filter((o) => filterByTab(o, "Open")).length,
    Closed: orders.filter((o) => filterByTab(o, "Closed")).length,
  };
}

function sortOrders(
  orders: Order[],
  field: SortField | null,
  direction: SortDirection,
): Order[] {
  if (!field) return orders;

  return [...orders].sort((a, b) => {
    const aVal = a[field];
    const bVal = b[field];
    const cmp = aVal.localeCompare(bVal);
    return direction === "asc" ? cmp : -cmp;
  });
}

function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderTab>("All");
  const [searchValue, setSearchValue] = useState("");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    () => new Set(),
  );
  const [sortField, setSortField] = useState<SortField | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const tabCounts = useMemo(() => computeTabCounts(mockOrders), []);

  const filteredOrders = useMemo(() => {
    let result = mockOrders.filter((order) => filterByTab(order, activeTab));

    if (searchValue.trim()) {
      const query = searchValue.toLowerCase();
      result = result.filter(
        (order) =>
          order.orderNumber.toLowerCase().includes(query) ||
          order.customer.toLowerCase().includes(query) ||
          order.total.toLowerCase().includes(query),
      );
    }

    return sortOrders(result, sortField, sortDirection);
  }, [activeTab, searchValue, sortField, sortDirection]);

  function handleTabChange(tab: OrderTab) {
    setActiveTab(tab);
    setSelectedIds(new Set());
  }

  function handleSort(field: SortField) {
    if (sortField === field) {
      setSortDirection((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Orders" />
        <AdminButton variant="tertiary">
          More actions
          <ChevronDown className="ml-0.5 size-4" />
        </AdminButton>
      </div>

      {mockOrders.length === 0 ? (
        <OrdersEmptyState />
      ) : (
        <AdminCard className="overflow-hidden">
          <OrdersTabBar
            activeTab={activeTab}
            onTabChange={handleTabChange}
            tabCounts={tabCounts}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
          />

          {filteredOrders.length === 0 ? (
            <div className="flex flex-col items-center gap-2 py-16">
              <SearchX className="size-8 text-text-subdued" />
              <p className="text-[13px] font-[450] text-text-secondary">
                {searchValue.trim()
                  ? `No orders matching "${searchValue}"`
                  : "No orders in this view"}
              </p>
              {searchValue.trim() && (
                <button
                  type="button"
                  onClick={() => setSearchValue("")}
                  className="text-[12px] font-[550] text-text-primary hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          ) : (
            <OrdersTable
              orders={filteredOrders}
              selectedIds={selectedIds}
              onSelectionChange={setSelectedIds}
              sortField={sortField}
              sortDirection={sortDirection}
              onSort={handleSort}
            />
          )}
        </AdminCard>
      )}
    </div>
  );
}
