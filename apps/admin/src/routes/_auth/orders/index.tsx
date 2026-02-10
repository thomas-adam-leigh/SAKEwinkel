import { createFileRoute } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { AdminCard } from "@/components/admin/card";
import { OrdersEmptyState } from "@/components/admin/orders/orders-empty-state";
import { OrdersTabBar, type OrderTab } from "@/components/admin/orders/orders-tab-bar";
import { OrdersTable } from "@/components/admin/orders/orders-table";
import { PageHeader } from "@/components/admin/page-header";
import { orders as mockOrders } from "@/data/orders";

export const Route = createFileRoute("/_auth/orders/")({
  component: OrdersPage,
});

function OrdersPage() {
  const [activeTab, setActiveTab] = useState<OrderTab>("All");

  const filteredOrders =
    activeTab === "All"
      ? mockOrders
      : mockOrders.filter((order) => {
          switch (activeTab) {
            case "Unfulfilled":
              return order.fulfillmentStatus === "Unfulfilled";
            case "Unpaid":
              return (
                order.paymentStatus === "Pending" ||
                order.paymentStatus === "Partially paid"
              );
            case "Open":
              return order.fulfillmentStatus === "Unfulfilled";
            case "Closed":
              return (
                order.fulfillmentStatus === "Fulfilled" && order.paymentStatus === "Paid"
              );
            default:
              return true;
          }
        });

  return (
    <div>
      <div className="flex items-center justify-between">
        <PageHeader title="Orders" />
        <button
          type="button"
          className="bg-bg-tertiary text-text-primary flex h-[28px] items-center gap-0.5 rounded-[8px] border-none text-[13px]"
          style={{ fontWeight: 450, padding: "4px 6px 4px 12px" }}
        >
          More actions
          <ChevronDown className="size-4" />
        </button>
      </div>

      {mockOrders.length === 0 ? (
        <OrdersEmptyState />
      ) : (
        <AdminCard className="overflow-hidden">
          <OrdersTabBar onTabChange={setActiveTab} />
          <OrdersTable orders={filteredOrders} />
        </AdminCard>
      )}
    </div>
  );
}
