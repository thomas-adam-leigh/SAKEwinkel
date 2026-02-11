import { Link } from "@tanstack/react-router";
import { StatusBadge } from "@/components/admin/status-badge";
import type { Supplier } from "@/types/supplier";

interface SuppliersDataTableProps {
  readonly suppliers: Supplier[];
  readonly selectedIds: Set<string>;
  readonly onSelectionChange: (ids: Set<string>) => void;
}

export function SuppliersDataTable({
  suppliers,
  selectedIds,
  onSelectionChange,
}: SuppliersDataTableProps) {
  const allSelected =
    suppliers.length > 0 && selectedIds.size === suppliers.length;

  function toggleAll() {
    if (allSelected) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(suppliers.map((s) => s.id)));
    }
  }

  function toggleOne(id: string) {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    onSelectionChange(next);
  }

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b border-border-separator">
          <th className="w-[40px] py-2 pl-4">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleAll}
              aria-label="Select all suppliers"
              className="accent-bg-primary"
            />
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Trading Name
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Legal Name
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Contact
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Email
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Phone
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Province
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Status
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Products
          </th>
        </tr>
      </thead>
      <tbody>
        {suppliers.map((supplier) => (
          <tr
            key={supplier.id}
            className="group h-[52px] cursor-pointer border-b border-border-separator transition-colors hover:bg-bg-surface-hover"
          >
            <td
              className="w-[40px] pl-4"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                checked={selectedIds.has(supplier.id)}
                onChange={() => toggleOne(supplier.id)}
                aria-label={`Select ${supplier.tradingName}`}
                className="accent-bg-primary"
              />
            </td>
            <td className="px-4">
              <Link
                to="/suppliers/$supplierId"
                params={{ supplierId: supplier.id }}
                className="text-[12px] font-[550] text-text-primary no-underline hover:underline"
              >
                {supplier.tradingName}
              </Link>
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {supplier.legalName}
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {supplier.primaryContact.firstName} {supplier.primaryContact.surname}
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {supplier.primaryContact.email}
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {supplier.primaryContact.phone}
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {supplier.address.province}
            </td>
            <td className="px-4">
              <StatusBadge tone={supplier.isActive ? "success" : "subdued"}>
                {supplier.isActive ? "Active" : "Inactive"}
              </StatusBadge>
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {supplier.productsCount}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
