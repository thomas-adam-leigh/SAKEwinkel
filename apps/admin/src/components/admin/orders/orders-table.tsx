import { useNavigate } from "@tanstack/react-router";
import { ArrowDown, ArrowUp } from "lucide-react";
import { StatusBadge, type StatusTone } from "@/components/admin/status-badge";
import type { FulfillmentStatus, Order, PaymentStatus } from "@/data/orders";

export type SortField =
  | "orderNumber"
  | "date"
  | "customer"
  | "total"
  | "paymentStatus"
  | "fulfillmentStatus";

export type SortDirection = "asc" | "desc";

interface OrdersTableProps {
  readonly orders: Order[];
  readonly selectedIds: Set<string>;
  readonly onSelectionChange: (ids: Set<string>) => void;
  readonly sortField: SortField | null;
  readonly sortDirection: SortDirection;
  readonly onSort: (field: SortField) => void;
}

interface ColumnDef {
  readonly key: SortField;
  readonly label: string;
}

const paymentTone: Record<PaymentStatus, StatusTone> = {
  Paid: "success",
  Pending: "warning",
  "Partially paid": "warning",
  Refunded: "subdued",
};

const fulfillmentTone: Record<FulfillmentStatus, StatusTone> = {
  Fulfilled: "success",
  Unfulfilled: "warning",
};

const columns: ColumnDef[] = [
  { key: "orderNumber", label: "Order" },
  { key: "date", label: "Date" },
  { key: "customer", label: "Customer" },
  { key: "total", label: "Total" },
  { key: "paymentStatus", label: "Payment status" },
  { key: "fulfillmentStatus", label: "Fulfillment status" },
];

export function OrdersTable({
  orders,
  selectedIds,
  onSelectionChange,
  sortField,
  sortDirection,
  onSort,
}: OrdersTableProps) {
  const navigate = useNavigate();

  const allSelected = orders.length > 0 && selectedIds.size === orders.length;
  const someSelected = selectedIds.size > 0;

  function toggleAll() {
    if (allSelected) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(orders.map((o) => o.id)));
    }
  }

  function toggleRow(id: string) {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    onSelectionChange(next);
  }

  return (
    <div className="relative">
      {/* Bulk action bar */}
      {someSelected && (
        <div className="sticky top-0 z-10 flex items-center gap-3 border-b border-border-subdued bg-bg-surface px-4 py-2">
          <span className="text-[13px] font-[550] text-text-primary">
            {selectedIds.size} selected
          </span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              className="rounded-[8px] px-3 py-1 text-[12px] font-[450] text-text-primary transition-colors hover:bg-bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
            >
              Fulfill orders
            </button>
            <button
              type="button"
              className="rounded-[8px] px-3 py-1 text-[12px] font-[450] text-text-primary transition-colors hover:bg-bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
            >
              Capture payments
            </button>
            <button
              type="button"
              className="rounded-[8px] px-3 py-1 text-[12px] font-[450] text-text-secondary transition-colors hover:bg-bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
            >
              More actions
            </button>
          </div>
        </div>
      )}

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-border-subdued bg-bg-surface-secondary">
            <th className="w-[32px] px-4 py-2 text-left">
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleAll}
                className="accent-bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
              />
            </th>
            {columns.map((col) => {
              const isActive = sortField === col.key;
              return (
                <th
                  key={col.key}
                  className="cursor-pointer select-none px-4 py-2 text-left text-[12px] font-[550] text-text-secondary transition-colors hover:text-text-primary"
                  onClick={() => onSort(col.key)}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.label}
                    {isActive ? (
                      sortDirection === "asc" ? (
                        <ArrowUp className="size-3" />
                      ) : (
                        <ArrowDown className="size-3" />
                      )
                    ) : (
                      <ArrowDown className="size-3 opacity-0 transition-opacity group-hover:opacity-30" />
                    )}
                  </span>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="cursor-pointer border-b border-border-separator transition-colors hover:bg-bg-surface-hover"
              onClick={() => navigate({ to: "/orders/$orderId", params: { orderId: order.id } })}
            >
              <td
                className="w-[32px] px-4 py-3"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="checkbox"
                  checked={selectedIds.has(order.id)}
                  onChange={() => toggleRow(order.id)}
                  className="accent-bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
                />
              </td>
              <td className="px-4 py-3 text-[13px] font-[550] text-text-primary">
                {order.orderNumber}
              </td>
              <td className="px-4 py-3 text-[13px] text-text-primary">
                {order.date}
              </td>
              <td className="px-4 py-3 text-[13px] text-text-primary">
                {order.customer}
              </td>
              <td className="px-4 py-3 text-[13px] text-text-primary">
                {order.total}
              </td>
              <td className="px-4 py-3">
                <StatusBadge tone={paymentTone[order.paymentStatus]}>
                  {order.paymentStatus}
                </StatusBadge>
              </td>
              <td className="px-4 py-3">
                <StatusBadge tone={fulfillmentTone[order.fulfillmentStatus]}>
                  {order.fulfillmentStatus}
                </StatusBadge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
