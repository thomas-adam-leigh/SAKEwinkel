## Why

The admin app has listing and creation pages for Products, Orders, and Customers but no Suppliers management. Suppliers are a core entity — every product originates from a supplier, and when a customer places an order, both the customer and the supplier must be notified via email. We need a UI to manage suppliers before building out the backend, allowing us to validate the data model and creation flow upfront.

## What Changes

- Add `/suppliers` route with a filterable, searchable data table listing all suppliers
- Add `/suppliers/new` route with a multi-section form for creating a new supplier
- Supplier table columns: name, contact person, email, phone, city, status, products count
- Supplier creation form captures: business identity, contact person, business address, legal/compliance info, and communication/notification settings
- Add sidebar navigation entry for Suppliers under the appropriate section
- Create mock data file for supplier listings
- UI only — no API calls or backend integration

## Capabilities

### New Capabilities
- `suppliers-list-page`: Data table for listing suppliers with tabs, search, sorting, and bulk selection. Follows the same patterns as products-list-page, orders, and customers tables.
- `supplier-form`: Multi-section form for creating a new supplier, covering business identity, contact person, address, legal info, and email notification settings. Follows the product-form-layout pattern with two-column card-based layout.

### Modified Capabilities
- `admin-routes`: Adding `/suppliers` and `/suppliers/new` routes to the router
- `admin-navigation`: Adding a "Suppliers" entry to the sidebar navigation

## Impact

- **Routes**: Two new route files under `routes/_auth/suppliers/`
- **Components**: New components under `components/admin/suppliers/`
- **Data**: New mock data file `data/suppliers.json`
- **Navigation**: Sidebar update to include Suppliers link
- **No backend impact**: Pure UI implementation with static mock data
