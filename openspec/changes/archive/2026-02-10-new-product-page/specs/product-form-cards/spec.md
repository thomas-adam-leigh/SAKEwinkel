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
The description field SHALL display a toolbar with formatting buttons at 24×24px, padding 2px, border-radius 4px, color `#4a4a4a`. The toolbar SHALL include: "Paragraph" dropdown, Bold, Italic, Underline, Color, Alignment, Link, Image, Video, More, HTML buttons, and a "Generate text" AI button. A bottom border (`0.5px solid #8a8a8a`) SHALL separate the toolbar from the editor area. The toolbar is a visual placeholder — formatting actions are non-functional.

#### Scenario: Rich text toolbar renders with formatting buttons
- **WHEN** the description rich text editor is rendered
- **THEN** a toolbar with formatting icon buttons is displayed above the editor area, separated by a bottom border

### Requirement: Media upload card section
The media section SHALL display a "Media" section label and a drop zone area with dashed border (`1px dashed #c0c0c0`), border-radius 8px, padding 16px, centered text, and background `#f7f7f7`. The drop zone SHALL show "Upload new" and "Select existing" buttons and helper text "Accepts images, videos, or 3D models". This is visual only — no actual upload functionality.

#### Scenario: Media drop zone renders with correct styling
- **WHEN** the media section is rendered
- **THEN** a dashed-border drop zone is displayed with upload buttons and helper text

### Requirement: Category section
The category section SHALL display a combobox input with placeholder "Choose a product category" and a chevron icon. Helper text about tax rates and metafields SHALL appear below the input.

#### Scenario: Category combobox renders with placeholder
- **WHEN** the category section is rendered
- **THEN** a combobox input with placeholder "Choose a product category" and helper text is displayed

### Requirement: Price card
The price card SHALL display an H2 heading "Price" and a price input field with a "R " currency prefix displayed inside the input wrapper, left-aligned. Below the price input, an expandable options row SHALL contain buttons for: "Compare at", "Unit price", "Charge tax Yes", "Cost per item".

#### Scenario: Price input renders with currency prefix
- **WHEN** the price card is rendered
- **THEN** a price input with "R " prefix inside the wrapper is displayed

#### Scenario: Price expandable options render as button row
- **WHEN** the price card is rendered
- **THEN** a horizontal row of expandable option buttons ("Compare at", "Unit price", "Charge tax Yes", "Cost per item") is displayed below the price input

#### Scenario: Clicking an expandable option reveals the field
- **WHEN** the user clicks the "Compare at" expandable option button
- **THEN** the button disappears and a "Compare at" input field with currency prefix is revealed

### Requirement: Inventory card
The inventory card SHALL display an H2 heading "Inventory", a toggle switch labeled "Inventory tracked" (on by default), and a quantity table. The quantity table SHALL have a header row ("Quantity" label at font-size 12px, font-weight 550, color `#616161`, border-bottom `1px solid #e3e3e3`) and a data row ("Shop location" text + spinbutton input). An expandable options row SHALL contain buttons for: "SKU", "Barcode", "Sell when out of stock Off".

#### Scenario: Inventory card renders with toggle and quantity table
- **WHEN** the inventory card is rendered
- **THEN** the "Inventory tracked" toggle is shown in the ON state, followed by a quantity table with "Shop location" row and a spinbutton input

#### Scenario: Toggling inventory tracked off hides quantity table
- **WHEN** the user toggles "Inventory tracked" to OFF
- **THEN** the quantity table and expandable options are hidden

### Requirement: Shipping card
The shipping card SHALL display an H2 heading "Shipping", a toggle switch labeled "Physical product" (on by default), a package selector combobox with placeholder "Store default - Sample box...", a product weight section with a number input and a unit select dropdown (options: kg, g, lb, oz), and expandable options for "Country of origin" and "HS Code".

#### Scenario: Shipping card renders with toggle and package fields
- **WHEN** the shipping card is rendered
- **THEN** the "Physical product" toggle is shown in the ON state, followed by the package selector combobox and weight input with unit select

#### Scenario: Toggling physical product off hides shipping fields
- **WHEN** the user toggles "Physical product" to OFF
- **THEN** the package selector, weight fields, and expandable options are hidden

### Requirement: Variants card
The variants card SHALL display an H2 heading "Variants" and a single expandable button labeled "Add options like size or color". Clicking the button SHALL reveal a combobox input for adding variant options.

#### Scenario: Variants card renders with expandable option
- **WHEN** the variants card is rendered
- **THEN** a heading "Variants" is displayed with an "Add options like size or color" expandable button

### Requirement: Search engine listing card
The SEO card SHALL display an H2 heading "Search engine listing" and an "Edit" button. In collapsed state, placeholder text SHALL read "Add a title and description to see how this product might appear in a search engine listing". Clicking "Edit" SHALL reveal SEO title and description fields.

#### Scenario: SEO card renders in collapsed state
- **WHEN** the SEO card is rendered
- **THEN** a heading "Search engine listing" with an "Edit" button and placeholder text is displayed

#### Scenario: Clicking edit reveals SEO fields
- **WHEN** the user clicks the "Edit" button on the SEO card
- **THEN** the placeholder text is replaced with editable title and description fields

### Requirement: Status card
The status card SHALL be the first card in the right column. It SHALL display an H2 heading "Status" and a select dropdown with options "Active" (default) and "Draft". The total card height SHALL be approximately 92px.

#### Scenario: Status card renders with active default
- **WHEN** the status card is rendered
- **THEN** a select dropdown is displayed with "Active" as the default selected value

### Requirement: Publishing card
The publishing card SHALL display an H2 heading "Publishing", a "Manage publishing" button, and channel pills for "Online Store" and "Point of Sale". Each pill SHALL be styled as an inline-flex chip with padding `4px 8px`, border-radius 8px, font-size 13px, background `#f1f1f1`, and an "x" remove button.

#### Scenario: Publishing card renders with channel pills
- **WHEN** the publishing card is rendered
- **THEN** "Online Store" and "Point of Sale" channel pills are displayed with remove buttons

#### Scenario: Clicking remove on a channel pill removes it
- **WHEN** the user clicks the "x" on the "Point of Sale" pill
- **THEN** the "Point of Sale" pill is removed from the display

### Requirement: Product organization card
The product organization card SHALL display an H2 heading "Product organization" with a "Learn more" ghost link. It SHALL contain four combobox autocomplete fields: "Type", "Vendor", "Collections" (with search icon), and "Tags".

#### Scenario: Product organization card renders with four combobox fields
- **WHEN** the product organization card is rendered
- **THEN** four labeled combobox fields (Type, Vendor, Collections, Tags) are displayed vertically

### Requirement: Theme template card
The theme template card SHALL be a small card (~88px height) with a select dropdown defaulting to "Default product".

#### Scenario: Theme template card renders with default selection
- **WHEN** the theme template card is rendered
- **THEN** a select dropdown with "Default product" selected is displayed
