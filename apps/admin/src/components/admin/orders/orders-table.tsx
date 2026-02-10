import { useState } from "react";
import type { Order } from "@/data/orders";
import { StatusBadge } from "./status-badge";

interface OrdersTableProps {
  readonly orders: Order[];
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set());

  const allSelected = orders.length > 0 && selectedIds.size === orders.length;

  function toggleAll() {
    if (allSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(orders.map((o) => o.id)));
    }
  }

  function toggleRow(id: string) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-bg-surface-secondary border-b border-[#e3e3e3]">
          <th className="w-[32px] px-4 py-2 text-left">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleAll}
              className="accent-bg-primary"
            />
          </th>
          <th
            className="text-text-secondary px-4 py-2 text-left text-[12px]"
            style={{ fontWeight: 550 }}
          >
            Order
          </th>
          <th
            className="text-text-secondary px-4 py-2 text-left text-[12px]"
            style={{ fontWeight: 550 }}
          >
            Date
          </th>
          <th
            className="text-text-secondary px-4 py-2 text-left text-[12px]"
            style={{ fontWeight: 550 }}
          >
            Customer
          </th>
          <th
            className="text-text-secondary px-4 py-2 text-left text-[12px]"
            style={{ fontWeight: 550 }}
          >
            Total
          </th>
          <th
            className="text-text-secondary px-4 py-2 text-left text-[12px]"
            style={{ fontWeight: 550 }}
          >
            Payment status
          </th>
          <th
            className="text-text-secondary px-4 py-2 text-left text-[12px]"
            style={{ fontWeight: 550 }}
          >
            Fulfillment status
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr
            key={order.id}
            className="hover:bg-bg-surface-hover border-b border-[#f1f1f1] transition-colors"
          >
            <td className="w-[32px] px-4 py-3">
              <input
                type="checkbox"
                checked={selectedIds.has(order.id)}
                onChange={() => toggleRow(order.id)}
                className="accent-bg-primary"
              />
            </td>
            <td
              className="text-text-primary px-4 py-3 text-[13px]"
              style={{ fontWeight: 550 }}
            >
              {order.orderNumber}
            </td>
            <td className="text-text-primary px-4 py-3 text-[13px]">{order.date}</td>
            <td className="text-text-primary px-4 py-3 text-[13px]">{order.customer}</td>
            <td className="text-text-primary px-4 py-3 text-[13px]">{order.total}</td>
            <td className="px-4 py-3">
              <StatusBadge variant="payment" status={order.paymentStatus} />
            </td>
            <td className="px-4 py-3">
              <StatusBadge variant="fulfillment" status={order.fulfillmentStatus} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
