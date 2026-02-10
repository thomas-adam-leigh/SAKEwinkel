## Why

The admin app shell (top bar, sidebar, navigation, routes, shared components) is complete but every route renders a placeholder H1. The Products page is the primary product catalog interface for merchants and needs to be implemented as a pixel-perfect recreation of Shopify's Products list view.

## What Changes

- Replace the placeholder at `/products` with a full Products list page
- Implement page header row with action buttons
- Implement tab bar, search bar, and data table with all columns
- Implement status badges, row selection, and hover states
- Add mock product data via JSON file

## Capabilities

### New Capabilities
- `products-list-page`: The complete Products list page UI

### Modified Capabilities
_None._

## Impact

- **Code**: New components under `apps/admin/src/components/admin/products/`, mock data, and updated route
- **Dependencies**: None new
- **APIs/Database**: No changes
