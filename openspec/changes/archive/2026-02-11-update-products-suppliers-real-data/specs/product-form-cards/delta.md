## ADDED Requirements

### Requirement: Product type selector card
A new card at the top of the form allows selecting the product type before filling other fields.

#### Scenario: Product type selection
- **WHEN** the product form is opened
- **THEN** a ProductTypeCard is shown at the top of the left column with three options: Physical, Voucher, Clickthrough

### Requirement: Voucher details card
A card for voucher-specific fields, only shown when product type is Voucher.

#### Scenario: Voucher card visibility
- **WHEN** the product type is "Voucher"
- **THEN** a VoucherDetailsCard is shown with fields: voucher code prefix, voucher expiry text, voucher offer text, and optional headline

### Requirement: Clickthrough details card
A card for clickthrough-specific fields, only shown when product type is Clickthrough.

#### Scenario: Clickthrough card visibility
- **WHEN** the product type is "Clickthrough"
- **THEN** a ClickthroughCard is shown with fields: redirect URL (required) and CTA button text

### Requirement: Commission card
A card for tracking SAKEwinkel's commission on the product.

#### Scenario: Commission card display
- **WHEN** the product form is shown
- **THEN** a CommissionCard displays a commission value input (currency field in ZAR)

### Requirement: Scheduling card
A card for product start and end dates.

#### Scenario: Scheduling card in sidebar
- **WHEN** the product form is shown
- **THEN** a SchedulingCard in the right sidebar shows optional date pickers for product start and product end

## MODIFIED Requirements

### Requirement: Price card supports sale pricing
The existing PriceCard must show both original price and sale price.

#### Scenario: Sale price field
- **WHEN** the PriceCard is rendered
- **THEN** it shows "Original price" (was "Price") and "Sale price" fields, plus existing expandable options (compare at, cost per item, charge tax)

### Requirement: Shipping card conditional on product type
The ShippingCard should only render for Physical products.

#### Scenario: Shipping card hidden for non-physical
- **WHEN** the product type is "Voucher" or "Clickthrough"
- **THEN** the ShippingCard is not rendered

### Requirement: Inventory card conditional on product type
The InventoryCard should only render for Physical and Voucher products.

#### Scenario: Inventory hidden for clickthrough
- **WHEN** the product type is "Clickthrough"
- **THEN** the InventoryCard is not rendered

### Requirement: Inventory card shows max per order
The InventoryCard should include a max per order field.

#### Scenario: Max per order field
- **WHEN** the InventoryCard is rendered
- **THEN** it includes a "Max per order" number input in addition to existing stock fields

### Requirement: Status card supports Unlisted
The StatusCard dropdown must include "Unlisted" as a third option.

#### Scenario: Three status options
- **WHEN** the StatusCard dropdown is opened
- **THEN** options are: "Draft", "Unlisted", "Active"

### Requirement: Variants card enhanced
The VariantsCard must support adding multiple variants with per-variant pricing, stock, and images.

#### Scenario: Adding a variant
- **WHEN** the user adds a variant in the VariantsCard
- **THEN** each variant row has: variant name, variation label, original price, sale price, stock quantity, max per order, commission, and image upload placeholder
