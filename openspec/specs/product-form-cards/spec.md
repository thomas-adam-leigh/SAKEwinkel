## ADDED Requirements

### Requirement: Title and description card
The first card in the left column SHALL contain a "Title" text input field with placeholder "Short sleeve t-shirt" (full-width) and a "Description" label followed by a rich text editor area. The Title and Description fields, along with Media and Category sections, SHALL be grouped within a single card container.

#### Scenario: Title field renders with placeholder
- **WHEN** the title and description card is rendered
- **THEN** a text input with placeholder "Short sleeve t-shirt" is displayed as the first field

#### Scenario: Description field renders with rich text toolbar
- **WHEN** the title and description card is rendered
- **THEN** a "Description" label is shown followed by a rich text editor toolbar and editable area (min-height ~150px)

### Requirement: Rich text editor toolbar
The description field SHALL display a toolbar with formatting buttons at 24x24px, padding 2px, border-radius 4px, color `#4a4a4a`. The toolbar SHALL include: "Paragraph" dropdown, Bold, Italic, Underline, Color, Alignment, Link, Image, Video, More, HTML buttons, and a "Generate text" AI button. A bottom border (`0.5px solid #8a8a8a`) SHALL separate the toolbar from the editor area. The toolbar is a visual placeholder -- formatting actions are non-functional.

#### Scenario: Rich text toolbar renders with formatting buttons
- **WHEN** the description rich text editor is rendered
- **THEN** a toolbar with formatting icon buttons is displayed above the editor area, separated by a bottom border

### Requirement: Media upload card section
The media section SHALL display a "Media" section label and a drop zone area with dashed border (`1px dashed #c0c0c0`), border-radius 8px, padding 16px, centered text, and background `#f7f7f7`. The drop zone SHALL show "Upload new" and "Select existing" buttons and helper text "Accepts images, videos, or 3D models". This is visual only -- no actual upload functionality.

#### Scenario: Media drop zone renders with correct styling
- **WHEN** the media section is rendered
- **THEN** a dashed-border drop zone is displayed with upload buttons and helper text

### Requirement: Category section
The category section SHALL display a combobox input with placeholder "Choose a product category" and a chevron icon. Helper text about tax rates and metafields SHALL appear below the input.

#### Scenario: Category combobox renders with placeholder
- **WHEN** the category section is rendered
- **THEN** a combobox input with placeholder "Choose a product category" and helper text is displayed

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

### Requirement: Price card
The price card SHALL display an H2 heading "Price" with "Original price" and "Sale price" fields (currency inputs with "R " prefix), plus expandable options for: "Cost per item", "Charge tax".

#### Scenario: Price input renders with currency prefix
- **WHEN** the price card is rendered
- **THEN** "Original price" and "Sale price" inputs with "R " prefix inside the wrapper are displayed

#### Scenario: Price expandable options render as button row
- **WHEN** the price card is rendered
- **THEN** a horizontal row of expandable option buttons ("Cost per item", "Charge tax Yes") is displayed below the price inputs

#### Scenario: Clicking an expandable option reveals the field
- **WHEN** the user clicks the "Cost per item" expandable option button
- **THEN** the button disappears and a "Cost per item" input field with currency prefix is revealed

### Requirement: Inventory card
The inventory card SHALL display an H2 heading "Inventory", a toggle switch labeled "Inventory tracked" (on by default), a quantity table, and a "Max per order" number input. The quantity table SHALL have a header row and a data row ("Shop location" text + spinbutton input). An expandable options row SHALL contain buttons for: "SKU", "Barcode", "Sell when out of stock Off". The inventory card is only visible for Physical and Voucher product types.

#### Scenario: Inventory card renders with toggle and quantity table
- **WHEN** the inventory card is rendered for a Physical or Voucher product
- **THEN** the "Inventory tracked" toggle is shown in the ON state, followed by a quantity table with "Shop location" row, a spinbutton input, and a "Max per order" number input

#### Scenario: Toggling inventory tracked off hides quantity table
- **WHEN** the user toggles "Inventory tracked" to OFF
- **THEN** the quantity table and expandable options are hidden

#### Scenario: Inventory hidden for clickthrough
- **WHEN** the product type is "Clickthrough"
- **THEN** the InventoryCard is not rendered

### Requirement: Shipping card
The shipping card SHALL display an H2 heading "Shipping", a toggle switch labeled "Physical product" (on by default), a package selector combobox, a product weight section with a number input and unit select dropdown (options: kg, g, lb, oz), and expandable options for "Country of origin" and "HS Code". The shipping card is only visible for Physical product types.

#### Scenario: Shipping card renders with toggle and package fields
- **WHEN** the shipping card is rendered for a Physical product
- **THEN** the "Physical product" toggle is shown in the ON state, followed by the package selector combobox and weight input with unit select

#### Scenario: Toggling physical product off hides shipping fields
- **WHEN** the user toggles "Physical product" to OFF
- **THEN** the package selector, weight fields, and expandable options are hidden

#### Scenario: Shipping card hidden for non-physical
- **WHEN** the product type is "Voucher" or "Clickthrough"
- **THEN** the ShippingCard is not rendered

### Requirement: Variants card
The variants card SHALL display an H2 heading "Variants" with an "Add variants" toggle. When enabled, variant rows can be added with per-variant fields: variant name, variation label, original price, sale price, stock quantity, max per order, commission value, and image upload placeholder.

#### Scenario: Variants card renders with toggle
- **WHEN** the variants card is rendered
- **THEN** a heading "Variants" is displayed with an "Add variants" toggle

#### Scenario: Adding a variant
- **WHEN** the user adds a variant in the VariantsCard
- **THEN** each variant row has: variant name, variation label, original price, sale price, stock quantity, max per order, commission, and image upload placeholder

### Requirement: Search engine listing card
The SEO card SHALL display an H2 heading "Search engine listing" and an "Edit" button. In collapsed state, placeholder text SHALL read "Add a title and description to see how this product might appear in a search engine listing". Clicking "Edit" SHALL reveal SEO title and description fields.

#### Scenario: SEO card renders in collapsed state
- **WHEN** the SEO card is rendered
- **THEN** a heading "Search engine listing" with an "Edit" button and placeholder text is displayed

#### Scenario: Clicking edit reveals SEO fields
- **WHEN** the user clicks the "Edit" button on the SEO card
- **THEN** the placeholder text is replaced with editable title and description fields

### Requirement: Status card
The status card SHALL be the first card in the right column. It SHALL display an H2 heading "Status" and a select dropdown with options "Draft", "Unlisted", and "Active".

#### Scenario: Status card renders with draft default
- **WHEN** the status card is rendered
- **THEN** a select dropdown is displayed with "Draft", "Unlisted", and "Active" options

### Requirement: Product organization card
The product organization card SHALL display an H2 heading "Product organization" with a "Learn more" ghost link. It SHALL contain four combobox autocomplete fields: "Type", "Vendor", "Collections" (with search icon), and "Tags".

#### Scenario: Product organization card renders with four combobox fields
- **WHEN** the product organization card is rendered
- **THEN** four labeled combobox fields (Type, Vendor, Collections, Tags) are displayed vertically
