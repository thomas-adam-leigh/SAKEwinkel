## Why

The products listing page renders clickable rows but doesn't navigate anywhere — users can create products via `/products/new` but cannot view or edit existing ones. The suppliers section already has a working detail page (`/suppliers/$supplierId`) that pre-fills the creation form with existing data. Products needs the same pattern to complete the CRUD workflow.

## What Changes

- Add a new route `/products/$productId` that renders the product form pre-filled with existing product data
- Update the products data table so clicking a row navigates to `/products/$productId`
- Update the "Add product" button on the products listing page to navigate to `/products/new` (currently a non-functional button)
- Add `defaultValues` prop support to all product form cards that don't already have it
- Reuse the existing `NewProductLayout` and all product form card components from `/products/new`

## Capabilities

### New Capabilities
- `product-detail-page`: Route, data loading, and pre-filled form rendering for viewing/editing an existing product at `/products/$productId`

### Modified Capabilities
- `products-list-page`: Row click navigates to detail page; "Add product" button wrapped in Link to `/products/new`
- `product-form-cards`: All cards accept optional `defaultValues` prop to support edit mode
- `admin-routes`: New `/products/$productId` route added

## Impact

- **Routes**: New `_auth/products/$productId.tsx` route file
- **Components**: Product form cards updated with `defaultValues` prop interfaces
- **Data table**: `products-data-table.tsx` updated with row click navigation
- **Products listing**: `products/index.tsx` "Add product" button wrapped in `Link`
- **No breaking changes**: New page only adds functionality; form cards remain backward-compatible via optional props
