## Requirements

Products page renders full layout with header, tabs, search, data table, and footer link.
All interactive states (hover, active, selected) match spec.
Mock data covers Active, Unlisted, and Draft statuses.

### Requirement: Product table columns
The products data table reflects the SAKEwinkel product model.

Clicking a product row SHALL navigate to `/products/$productId` where `$productId` is the product's `id`.

#### Scenario: Table columns
- **WHEN** the products list page renders the data table
- **THEN** columns are: Thumbnail + Product Name, Type (Physical/Voucher/Clickthrough badge), Status (Draft/Unlisted/Active badge), Original Price, Sale Price, Stock, Supplier, Actions

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

### Requirement: Product mock data
The products.json file contains representative SAKEwinkel products.

#### Scenario: Mock data content
- **WHEN** products.json is loaded
- **THEN** it contains ~8 products: mix of Physical (leather goods), Voucher (lodge discount), Clickthrough (coins, perfumes), and products with variants (magazine, medallions) -- with Draft, Unlisted, and Active statuses represented

### Requirement: Supplier mock data
The suppliers.json file contains representative SAKEwinkel suppliers.

#### Scenario: Supplier mock data content
- **WHEN** suppliers.json is loaded
- **THEN** it contains 6 suppliers representing real SAKEwinkel supplier types: Boot & Rally (leather goods), B4i Productions (media/OntbytSAKE), Afrimunt (commemorative coins), Banhoek Lodge (hospitality), Tapputi (perfume oils), The Cape Mint (minting)

### Requirement: Supplier table columns
The suppliers data table reflects the SAKEwinkel supplier model.

#### Scenario: Updated supplier table columns
- **WHEN** the suppliers list page renders the data table
- **THEN** columns are: Trading Name, Legal Name, Primary Contact, Email, Phone, Province, Status (Active/Inactive badge), Products count

### Requirement: Tab filtering for products
Product tabs include the Unlisted status.

#### Scenario: Product status tabs
- **WHEN** the products list page renders tabs
- **THEN** tabs are: All, Active, Unlisted, Draft

### Requirement: Supplier tab filtering
Supplier status tabs reflect Active/Inactive.

#### Scenario: Supplier status tabs
- **WHEN** the suppliers list page renders tabs
- **THEN** tabs are: All, Active, Inactive
