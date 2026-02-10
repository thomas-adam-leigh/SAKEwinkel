import { ArrowUpDown, Search } from "lucide-react";

export function ProductsSearchBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 12px 0 12px" }}>
      <button
        type="button"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flex: 1,
          height: 32,
          padding: "0 12px",
          border: "1px solid #e3e3e3",
          borderRadius: 8,
          backgroundColor: "transparent",
          cursor: "pointer",
          color: "#616161",
          fontSize: 13,
          fontWeight: 450,
        }}
      >
        <Search size={14} style={{ color: "#616161", flexShrink: 0 }} />
        <span>Search and filter products</span>
      </button>
      <button
        type="button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          border: "none",
          borderRadius: 8,
          backgroundColor: "transparent",
          cursor: "pointer",
          color: "#616161",
          flexShrink: 0,
          transition: "background-color 0.15s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.05)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
        }}
        aria-label="Sort"
      >
        <ArrowUpDown size={16} />
      </button>
    </div>
  );
}
