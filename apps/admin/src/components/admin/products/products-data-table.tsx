import { useNavigate } from "@tanstack/react-router";
import { ProductStatusBadge } from "./status-badge";
import type { Product } from "@/types/product";
import type { Supplier } from "@/types/supplier";

interface ProductsDataTableProps {
  readonly products: Product[];
  readonly suppliers: Supplier[];
  readonly selectedIds: Set<string>;
  readonly onSelectionChange: (ids: Set<string>) => void;
}

const typeBadgeColors: Record<string, { bg: string; text: string }> = {
  Physical: { bg: "#e3f1e8", text: "#1a5c2e" },
  Voucher: { bg: "#e8e0f3", text: "#4a2d7a" },
  Clickthrough: { bg: "#dce8f5", text: "#1a3a5c" },
};

function formatPrice(value: number): string {
  return `R ${value.toLocaleString("en-ZA")}`;
}

export function ProductsDataTable({
  products,
  suppliers,
  selectedIds,
  onSelectionChange,
}: ProductsDataTableProps) {
  const navigate = useNavigate();
  const allSelected =
    products.length > 0 && selectedIds.size === products.length;

  const supplierMap = new Map(suppliers.map((s) => [s.id, s]));

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

  function getStock(product: Product): string {
    if (product.productType === "Clickthrough") return "—";
    if (product.variants && product.variants.length > 0) {
      const total = product.variants.reduce((sum, v) => sum + v.qtyInStock, 0);
      return `${total} in stock`;
    }
    return "—";
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
            Type
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Status
          </th>
          <th className="px-4 py-2 text-right text-[12px] font-[550] text-text-secondary">
            Price
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Stock
          </th>
          <th className="px-4 py-2 text-left text-[12px] font-[550] text-text-secondary">
            Supplier
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          const typeColors = typeBadgeColors[product.productType] ?? typeBadgeColors.Physical;
          const supplier = supplierMap.get(product.supplierId);

          return (
            <tr
              key={product.id}
              className="group h-[52px] cursor-pointer border-b border-border-separator transition-colors hover:bg-bg-surface-hover"
              onClick={() => navigate({ to: "/products/$productId", params: { productId: product.id } })}
            >
              <td
                className="w-[48px] text-center"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="checkbox"
                  checked={selectedIds.has(product.id)}
                  onChange={() => toggleOne(product.id)}
                  aria-label={`Select ${product.name}`}
                  className="accent-bg-primary"
                />
              </td>
              <td className="px-4">
                <div className="flex items-center gap-3">
                  <img
                    src={product.mainImageUrl ?? "https://placehold.co/36x36/e0e0e0/909090?text=?"}
                    alt=""
                    width={36}
                    height={36}
                    className="shrink-0 rounded-[4px] object-cover"
                  />
                  <span className="truncate text-[12px] font-[450] text-text-primary hover:underline">
                    {product.name}
                  </span>
                </div>
              </td>
              <td className="px-4">
                <span
                  className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px]"
                  style={{
                    fontWeight: 550,
                    backgroundColor: typeColors.bg,
                    color: typeColors.text,
                  }}
                >
                  {product.productType}
                </span>
              </td>
              <td className="px-4">
                <ProductStatusBadge status={product.status} />
              </td>
              <td className="px-4 text-right text-[12px] font-[450] text-text-primary">
                {product.salePrice ? (
                  <div>
                    <span className="line-through text-text-subdued mr-1">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span>{formatPrice(product.salePrice)}</span>
                  </div>
                ) : (
                  formatPrice(product.originalPrice)
                )}
              </td>
              <td className="px-4 text-[12px] font-[450] text-text-primary">
                {getStock(product)}
              </td>
              <td className="px-4 text-[12px] font-[450] text-text-primary">
                {supplier?.tradingName ?? "—"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
