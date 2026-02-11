## ADDED Requirements

### Requirement: Product type selector field
A radio-button or segmented-control field for choosing between Physical, Voucher, and Clickthrough.

#### Scenario: Product type field rendering
- **WHEN** the ProductTypeCard is rendered
- **THEN** it shows three selectable options with icons/labels: Physical (box icon), Voucher (ticket icon), Clickthrough (external-link icon)

### Requirement: URL input field
A text input specialized for URLs, used by the Clickthrough card.

#### Scenario: URL input with validation hint
- **WHEN** the ClickthroughCard renders the redirect URL field
- **THEN** it shows a text input with placeholder "https://supplier-store.co.za" and helper text "Customer will be redirected to this URL"

### Requirement: CTA text input field
A text input for the call-to-action button text on clickthrough products.

#### Scenario: CTA text field
- **WHEN** the ClickthroughCard renders the CTA field
- **THEN** it shows a text input with placeholder "Shop Now" and helper text "Text displayed on the product page button"

### Requirement: Date picker fields
Date picker inputs for product scheduling (start and end dates).

#### Scenario: Date picker rendering
- **WHEN** the SchedulingCard renders
- **THEN** it shows two date inputs: "Start date" and "End date" using native date inputs

### Requirement: Voucher-specific text fields
Text inputs for voucher code prefix, expiry text, and offer text.

#### Scenario: Voucher fields rendering
- **WHEN** the VoucherDetailsCard renders
- **THEN** it shows: "Voucher code prefix" (text, placeholder "SAKE-"), "Expiry" (text, placeholder "Valid until 31 December 2026"), "Offer description" (text, placeholder "50% Afslag"), "Optional headline" (text, placeholder "50% Afslagsbewys")

## MODIFIED Requirements

### Requirement: Price field labels updated
Price input labels change to distinguish original from sale price.

#### Scenario: Updated price labels
- **WHEN** the PriceCard renders price fields
- **THEN** the primary field is labeled "Original price" (previously "Price") and "Sale price" replaces "Compare at price"
