## Why

The "Add product" page is a core form page in the Shopify admin portal. With the app shell infrastructure (step 00) complete, we need to implement the individual page UIs. The new product form is one of the most complex pages — a two-column layout with 8+ form cards, contextual save bar, expandable option groups, toggles, rich text editing, and media upload zones. Building this page establishes the form patterns that will be reused across other admin form pages (orders, customers, etc.).

## What Changes

- Implement the full "Add product" form page UI at the `/products/new` route
- Build a two-column Polaris-style layout (primary ~633px, sidebar ~317px, max-width 998px centered)
- Create left column form cards: Title/Description, Media upload, Category, Price, Inventory, Shipping, Variants, SEO
- Create right column cards: Status, Publishing, Product Organization, Theme Template
- Add contextual save bar integration in the top bar (Unsaved product, Discard, Save buttons)
- Build form field components: text inputs, number/price inputs with currency prefix, combobox/autocomplete, select dropdowns, checkboxes, toggle switches, spinbutton quantity inputs, rich text editor toolbar
- Build expandable option button rows ("+Compare at", "+Unit price", "+SKU", etc.)
- Add bottom full-width save button
- All UI-only with mock/static data — no API integration

## Capabilities

### New Capabilities
- `product-form-layout`: Two-column form page layout with contextual save bar, page header with breadcrumb, and bottom save button
- `product-form-cards`: All form card sections (Title/Description, Media, Category, Price, Inventory, Shipping, Variants, SEO, Status, Publishing, Product Organization, Theme Template)
- `product-form-fields`: Form field components specific to the product form — price inputs with currency prefix, toggle switches, expandable option buttons, quantity spinbutton, media drop zone, rich text editor placeholder, combobox autocomplete fields

### Modified Capabilities
_(none — no existing spec-level requirements are changing)_

## Impact

- **Route file**: `apps/admin/src/routes/_auth/products/new.tsx` — replaced stub with full form page
- **New components**: Product form components under `apps/admin/src/components/admin/products/` (or co-located with the route)
- **Existing components**: Reuses `page-header`, `card`, `input`, `button` from admin shared components
- **Design tokens**: Uses existing Polaris tokens from `styles.css` — no new tokens needed
- **Dependencies**: May leverage shadcn/ui `select`, `checkbox`, `toggle` from `packages/ui/`
- **No backend changes**: Static/mock data only, no database or API modifications
