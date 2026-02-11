## MODIFIED Requirements

### Requirement: Product table columns
The Products data table SHALL display columns in order: Checkbox, Product (thumbnail + name), Type (badge), Status (badge), Original Price, Sale Price, Stock, Supplier, Actions.

Clicking a product row SHALL navigate to `/products/$productId` where `$productId` is the product's `id`.

#### Scenario: Row click navigates to detail page
- **WHEN** user clicks on a product row in the data table
- **THEN** the browser navigates to `/products/$productId` for that product's ID

#### Scenario: Checkbox click does not navigate
- **WHEN** user clicks the checkbox column of a product row
- **THEN** the row selection toggles without navigating away from the listing page

### Requirement: Add product button navigates to creation form
The "Add product" primary button SHALL be wrapped in a `Link` component that navigates to `/products/new`.

#### Scenario: Add product navigation
- **WHEN** user clicks the "Add product" button on the products listing page
- **THEN** the browser navigates to `/products/new`
