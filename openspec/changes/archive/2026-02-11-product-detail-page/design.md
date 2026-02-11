## Context

The admin app uses TanStack Router with file-based routing. The suppliers section already implements the detail page pattern: `/suppliers/$supplierId.tsx` loads a supplier from the JSON data file, finds it by ID, and renders the same form cards used in `/suppliers/new.tsx` — but with a `defaultValues` prop pre-filling every field.

Products currently have `/products/index.tsx` (listing) and `/products/new.tsx` (creation form) but no detail route. The products data table renders clickable-styled rows that don't navigate. The "Add product" button is not wrapped in a `Link`.

Product IDs in the mock data use the format `prod-001` etc. The real backend will use CUIDs — no routing changes needed since TanStack Router's `$productId` param accepts any string.

## Goals / Non-Goals

**Goals:**
- Product detail page at `/products/$productId` that mirrors the creation form with pre-filled data
- Row click navigation from products table to detail page
- "Add product" button navigation to `/products/new`
- All product form cards support `defaultValues` for edit mode

**Non-Goals:**
- Actual save/update API calls (UI-only for now)
- Product deletion
- Form validation logic
- URL slug changes or breadcrumb updates beyond the page header title

## Decisions

### 1. Reuse existing form cards with `defaultValues` prop

**Decision**: Add optional `defaultValues` prop to each product form card, following the supplier pattern exactly.

**Rationale**: The supplier detail page proves this works. Each card already accepts `onFieldChange`; adding `defaultValues` is additive and non-breaking. Cards without `defaultValues` render as blank (creation mode).

**Alternative considered**: Creating separate "edit" card components — rejected because it duplicates code and diverges from the working supplier pattern.

### 2. Route file: `_auth/products/$productId.tsx`

**Decision**: Use TanStack Router's file-based dynamic route with `$productId` param.

**Rationale**: Matches the existing `$supplierId.tsx` pattern exactly. The param name `productId` is consistent with the data model.

### 3. Row click navigation via `useNavigate`

**Decision**: Add `onClick` handler to table rows that calls `navigate({ to: '/products/$productId', params: { productId: product.id } })`.

**Rationale**: The suppliers table uses a `Link` on the trading name column only. For products, making the entire row clickable (with `stopPropagation` on the checkbox) is more intuitive and matches the existing cursor-pointer styling already on product rows.

### 4. Page header shows product name

**Decision**: The detail page header shows the product name as H1 instead of "Add product", with a "Products" breadcrumb link back to the listing.

**Rationale**: Matches the supplier detail page pattern where the header shows the supplier's trading name.

### 5. ProductType state initialized from data

**Decision**: The `productType` state in the detail page is initialized from `product.productType` instead of defaulting to "Physical".

**Rationale**: This ensures conditional cards (Shipping, Voucher, Clickthrough) render correctly based on the existing product type.

## Risks / Trade-offs

- **[Form cards need interface changes]** → Each card's TypeScript interface must add optional `defaultValues`. Low risk since it's additive and follows the proven supplier pattern.
- **[JSON data lookup could be slow with many products]** → `Array.find()` on mock data is fine. Real API will replace this entirely. No mitigation needed now.
- **[Row click and checkbox interaction]** → Checkbox column already uses `stopPropagation`. Same pattern works in suppliers. Low risk.
