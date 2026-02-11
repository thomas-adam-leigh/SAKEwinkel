## Requirements

### Requirement: Product detail route renders at /products/$productId
The system SHALL render a product detail page when the user navigates to `/products/$productId` where `$productId` matches a product's `id` field from the data source.

#### Scenario: Valid product ID
- **WHEN** user navigates to `/products/prod-001`
- **THEN** the system renders the product form pre-filled with data for the product with `id: "prod-001"`

#### Scenario: Invalid product ID
- **WHEN** user navigates to `/products/nonexistent-id`
- **THEN** the system renders a "Product not found" message with the attempted ID displayed

### Requirement: Detail page layout matches creation form
The detail page SHALL use the same `NewProductLayout` two-column layout and render the same form cards in the same order as `/products/new`.

#### Scenario: Layout structure
- **WHEN** user views a product detail page
- **THEN** the left column contains ProductTypeCard, TitleDescriptionCard, PriceCard, CommissionCard, conditional InventoryCard, conditional ShippingCard, conditional VoucherDetailsCard, conditional ClickthroughCard, VariantsCard, and SeoCard
- **AND** the right column contains StatusCard, SchedulingCard, and ProductOrganizationCard

### Requirement: Form cards pre-filled with product data
Each form card SHALL receive the corresponding product data via a `defaultValues` prop and render fields with those values pre-filled.

#### Scenario: Title and description pre-filled
- **WHEN** user views a product with name "Jana Bag" and description content
- **THEN** the TitleDescriptionCard displays "Jana Bag" in the title input and the description in the rich text editor

#### Scenario: Price fields pre-filled
- **WHEN** user views a product with originalPrice 1000 and salePrice 599
- **THEN** the PriceCard displays "1000" in the original price field and "599" in the sale price field

#### Scenario: Product type initialized from data
- **WHEN** user views a product with productType "Voucher"
- **THEN** the ProductTypeCard shows "Voucher" selected
- **AND** VoucherDetailsCard is visible
- **AND** ShippingCard is hidden

#### Scenario: Status pre-filled
- **WHEN** user views a product with status "Active"
- **THEN** the StatusCard dropdown shows "Active" selected

### Requirement: Page header shows product name
The detail page header SHALL display the product name as the H1 title with a "Products" breadcrumb link navigating back to `/products`.

#### Scenario: Header rendering
- **WHEN** user views the detail page for product "Jana Bag"
- **THEN** the page header displays "Jana Bag" as the title
- **AND** a "Products" breadcrumb link points to `/products`

### Requirement: Contextual save bar tracks changes
The ContextualSaveBar SHALL appear when any field value is modified, displaying "Unsaved changes" with Discard and Save buttons.

#### Scenario: Field modification triggers save bar
- **WHEN** user modifies any field on the product detail page
- **THEN** the ContextualSaveBar becomes visible with enabled Save and Discard buttons

### Requirement: Supplier data resolved for display
The detail page SHALL resolve the product's `supplierId` to the supplier's trading name for display in relevant fields.

#### Scenario: Supplier lookup
- **WHEN** user views a product with supplierId "sup-001"
- **THEN** the system looks up the supplier and makes the trading name available to form cards
