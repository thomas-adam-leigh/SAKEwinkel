## Context

SAKEwinkel admin has fully implemented listing and creation pages for Products, Orders, and Customers. The Suppliers route (`/suppliers`) exists in the route spec but currently returns a placeholder. The previous Supabase backend had a `suppliers` table with only 4 columns (id, name, created_at, adminEmail) — far too sparse for the requirements. Suppliers need business identity, a contact person, legal/compliance info, a business address, and communication settings for order notifications.

This is a UI-only implementation. No API calls. Mock data drives the listing. The form captures all fields needed for future backend integration, where a single `suppliers` table with JSONB columns will store supplementary data.

## Goals / Non-Goals

**Goals:**
- Implement `/suppliers` listing page with data table, tabs, search, and bulk selection matching existing page patterns
- Implement `/suppliers/new` form page using the same two-column card layout as `/products/new`
- Define a comprehensive supplier data model covering business identity, contact person, address, legal info, and communication preferences
- Create mock data that exercises all table columns and status variants
- Maintain full visual and structural consistency with existing admin pages

**Non-Goals:**
- No API integration, backend calls, or data persistence
- No supplier detail/edit page (`/suppliers/$supplierId`) — future work
- No file upload for legal documents — future work
- No actual email sending or notification configuration — form captures preferences only

## Decisions

### 1. Supplier data shape — flat with nested objects

The mock data and TypeScript interface will use a flat structure with nested objects for address and contact, mirroring the future backend's single-table-with-JSONB approach:

```typescript
interface Supplier {
  id: string;
  companyName: string;
  tradingName: string;
  status: "Active" | "Inactive" | "Pending";
  contact: {
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    phone: string;
  };
  address: {
    street: string;
    street2?: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  legal: {
    registrationNumber: string;
    vatNumber: string;
    licenseNumber?: string;
  };
  communication: {
    orderNotificationEmail: string;
    notifyOnNewOrder: boolean;
    notifyOnPaymentReceived: boolean;
    notifyOnShipmentRequired: boolean;
  };
  productsCount: number;
  createdAt: string;
}
```

**Rationale:** Matches the future backend model (single table + JSONB). Grouping related fields into objects keeps the interface organized and makes form sections map cleanly to data sections.

### 2. Table columns for listing

| Column | Field | Notes |
|--------|-------|-------|
| Checkbox | — | Bulk selection, same as products/orders/customers |
| Supplier | companyName | Primary identifier, bold text |
| Contact | contact.firstName + contact.lastName | Contact person display |
| Email | contact.email | Communication column |
| Phone | contact.phone | Quick reference |
| City | address.city | Location at a glance |
| Status | status | StatusBadge with tone mapping |
| Products | productsCount | Number of products from this supplier |

**Rationale:** These columns give an admin a complete at-a-glance view: who is the supplier, who do I contact, where are they, are they active, and how many products do they supply. Mirrors the information density of the customers and orders tables.

### 3. Tab structure for listing

Tabs: All | Active | Inactive | Pending

**Rationale:** Matches the status enum. "Pending" captures suppliers that have been set up but not yet activated (e.g., awaiting legal verification).

### 4. Form layout — two-column card sections

Following the `/products/new` pattern with `NewProductLayout`:

**Left column (primary data):**
1. **Company Details Card** — companyName, tradingName
2. **Contact Person Card** — firstName, lastName, role, email, phone
3. **Business Address Card** — street, street2, city, province, postalCode, country
4. **Legal & Compliance Card** — registrationNumber, vatNumber, licenseNumber

**Right column (settings):**
1. **Status Card** — Active/Inactive/Pending select
2. **Communication Card** — orderNotificationEmail, toggle for notifyOnNewOrder, notifyOnPaymentReceived, notifyOnShipmentRequired

**Rationale:** Groups data by concern. The left column captures factual business data (who, where, legal). The right column captures operational settings (status, notification preferences). This mirrors the products form where left = content, right = metadata/settings.

### 5. Component file structure

```
components/admin/suppliers/
  suppliers-data-table.tsx    — table with columns, selection, row actions
  suppliers-tab-bar.tsx       — tab component wrapping AdminTabs
  suppliers-search-bar.tsx    — search + sort bar
  company-details-card.tsx    — company name/trading name form card
  contact-person-card.tsx     — contact person form card
  business-address-card.tsx   — address form card
  legal-compliance-card.tsx   — registration/VAT/license form card
  communication-card.tsx      — notification email + toggles form card
  supplier-status-card.tsx    — status select card

routes/_auth/suppliers/
  index.tsx                   — listing page
  new.tsx                     — create page

data/
  suppliers.json              — mock data (6-8 entries covering all statuses)
```

**Rationale:** Follows the exact same file organization as products. Each form card is its own component accepting `onFieldChange` prop, keeping them composable and testable.

### 6. Reuse existing shared components

Reuse directly: `AdminCard`, `AdminButton`, `AdminInput`, `AdminSelect`, `AdminCheckbox`, `AdminToggle`, `PageHeader`, `ContextualSaveBar`, `NewProductLayout` (rename consideration below), `AdminTabs`, `StatusBadge`, `FieldLabel`, `CardSectionHeading`.

`NewProductLayout` will be reused as-is since it's a generic two-column layout — it just has a product-specific name. No renaming in this change to avoid scope creep.

## Risks / Trade-offs

- **Mock data divergence** → When backend is built, the mock data shape may not perfectly match the API response. Mitigation: The TypeScript interface serves as the contract; adapter functions can bridge any gaps.
- **Component naming** → `NewProductLayout` is reused for suppliers but has a product-specific name. Mitigation: Accept the naming inconsistency for now; a future rename to `ResourceFormLayout` can be done as a separate change.
- **No validation** → The form captures data but has no validation logic. Mitigation: Validation will be added when backend integration happens. The form UI is complete; validation is additive.
