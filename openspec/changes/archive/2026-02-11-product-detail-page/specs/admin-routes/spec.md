## MODIFIED Requirements

### Requirement: Primary navigation routes
The admin application SHALL provide these primary navigation routes, each rendered as pages with their respective H1 titles:
- `/` — Home
- `/orders` — Orders
- `/products` — Products
- `/customers` — Customers
- `/suppliers` — Suppliers
- `/analytics` — Analytics
- `/legal` — Legal
- `/email-templates` — Email Templates
- `/reports` — Reports

Detail/create routes:
- `/products/new` — Add product
- `/products/$productId` — Edit product (shows product name as title)
- `/suppliers/new` — Add supplier
- `/suppliers/$supplierId` — Edit supplier (shows supplier trading name as title)

All routes SHALL be nested under the `_auth` layout route.

#### Scenario: Product detail route resolves
- **WHEN** an authenticated user navigates to `/products/prod-001`
- **THEN** the system renders the product detail page for that product ID

#### Scenario: Product detail route with invalid ID
- **WHEN** an authenticated user navigates to `/products/nonexistent`
- **THEN** the system renders a "Product not found" message
