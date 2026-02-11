import { Eye } from "lucide-react";
import { ProductStatusBadge } from "./status-badge";

interface Product {
  id: string;
  title: string;
  status: string;
  inventory: number;
  category: string;
  channelCount: number;
  thumbnailUrl: string;
}

interface ProductsDataTableProps {
  readonly products: Product[];
  readonly selectedIds: Set<string>;
  readonly onSelectionChange: (ids: Set<string>) => void;
}

export function ProductsDataTable({
  products,
  selectedIds,
  onSelectionChange,
}: ProductsDataTableProps) {
  const allSelected =
    products.length > 0 && selectedIds.size === products.length;

  function toggleAll() {
    if (allSelected) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(products.map((p) => p.id)));
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
          <th className="w-[48px] py-2 text-center">
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleAll}
              aria-label="Select all products"
              className="accent-bg-primary"
            />
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Product
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Status
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Inventory
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Category
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Channels
          </th>
          <th className="w-[48px] py-2" />
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr
            key={product.id}
            className="group h-[52px] cursor-pointer border-b border-border-separator transition-colors hover:bg-bg-surface-hover"
          >
            <td
              className="w-[48px] text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                checked={selectedIds.has(product.id)}
                onChange={() => toggleOne(product.id)}
                aria-label={`Select ${product.title}`}
                className="accent-bg-primary"
              />
            </td>
            <td className="px-4">
              <div className="flex items-center gap-3">
                <img
                  src={product.thumbnailUrl}
                  alt=""
                  width={36}
                  height={36}
                  className="shrink-0 rounded-[4px] object-cover"
                />
                <span className="truncate text-[12px] font-[450] text-text-primary hover:underline">
                  {product.title}
                </span>
              </div>
            </td>
            <td className="px-4">
              <ProductStatusBadge status={product.status} />
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {product.inventory} in stock
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {product.category}
            </td>
            <td className="px-4 text-[12px] font-[450] text-text-primary">
              {product.channelCount}
            </td>
            <td className="w-[48px] text-center">
              <button
                type="button"
                className="flex size-[28px] items-center justify-center rounded-[8px] text-text-secondary opacity-0 transition-all hover:bg-bg-nav-hover group-hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus-ring"
                aria-label="Preview on Online Store"
              >
                <Eye className="size-4" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
