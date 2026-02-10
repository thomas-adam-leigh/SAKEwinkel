import { Eye } from "lucide-react";
import { StatusBadge } from "./status-badge";

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

const gridColumns = "48px 1fr 100px 120px 120px 80px 48px";

const headerCellStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 550,
  color: "#616161",
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
};

const dataCellStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 450,
  color: "#303030",
  padding: "0 16px",
  display: "flex",
  alignItems: "center",
};

function Checkbox({
  checked,
  onChange,
  ariaLabel,
}: {
  checked: boolean;
  onChange: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      aria-label={ariaLabel}
      onClick={onChange}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16,
        borderRadius: 4,
        border: checked ? "1px solid #303030" : "1px solid #8a8a8a",
        backgroundColor: checked ? "#303030" : "transparent",
        cursor: "pointer",
        padding: 0,
        flexShrink: 0,
      }}
    >
      {checked && (
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export function ProductsDataTable({
  products,
  selectedIds,
  onSelectionChange,
}: ProductsDataTableProps) {
  const allSelected = products.length > 0 && selectedIds.size === products.length;

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
    <div>
      {/* Header row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          alignItems: "center",
          borderBottom: "1px solid #f1f1f1",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ ...headerCellStyle, justifyContent: "center" }}>
          <Checkbox
            checked={allSelected}
            onChange={toggleAll}
            ariaLabel="Select all products"
          />
        </div>
        <div style={headerCellStyle}>Product</div>
        <div style={headerCellStyle}>Status</div>
        <div style={headerCellStyle}>Inventory</div>
        <div style={headerCellStyle}>Category</div>
        <div style={headerCellStyle}>Channels</div>
        <div style={headerCellStyle} />
      </div>

      {/* Data rows */}
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "grid",
            gridTemplateColumns: gridColumns,
            alignItems: "center",
            height: 52,
            borderBottom: "1px solid #f1f1f1",
            backgroundColor: "#ffffff",
            cursor: "pointer",
            transition: "background-color 0.1s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#f7f7f7";
            const actionBtn = e.currentTarget.querySelector<HTMLElement>("[data-action-btn]");
            if (actionBtn) actionBtn.style.opacity = "1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#ffffff";
            const actionBtn = e.currentTarget.querySelector<HTMLElement>("[data-action-btn]");
            if (actionBtn) actionBtn.style.opacity = "0";
          }}
        >
          {/* Checkbox */}
          <div style={{ ...dataCellStyle, justifyContent: "center" }}>
            <Checkbox
              checked={selectedIds.has(product.id)}
              onChange={() => toggleOne(product.id)}
              ariaLabel={`Select ${product.title}`}
            />
          </div>

          {/* Product */}
          <div style={{ ...dataCellStyle, gap: 12 }}>
            <img
              src={product.thumbnailUrl}
              alt=""
              width={36}
              height={36}
              style={{ borderRadius: 4, flexShrink: 0, objectFit: "cover" }}
            />
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              style={{
                fontSize: 12,
                fontWeight: 450,
                color: "#303030",
                textDecoration: "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              {product.title}
            </a>
          </div>

          {/* Status */}
          <div style={dataCellStyle}>
            <StatusBadge status={product.status} />
          </div>

          {/* Inventory */}
          <div style={dataCellStyle}>{product.inventory} in stock</div>

          {/* Category */}
          <div style={dataCellStyle}>{product.category}</div>

          {/* Channels */}
          <div style={dataCellStyle}>{product.channelCount}</div>

          {/* Actions */}
          <div style={{ ...dataCellStyle, justifyContent: "center" }}>
            <button
              type="button"
              data-action-btn
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                border: "none",
                borderRadius: 8,
                backgroundColor: "transparent",
                cursor: "pointer",
                color: "#616161",
                opacity: 0,
                transition: "opacity 0.1s, background-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
              aria-label="Preview on Online Store"
            >
              <Eye size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
