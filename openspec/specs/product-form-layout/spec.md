## ADDED Requirements

### Requirement: Two-column form page layout
The "Add product" page SHALL use a two-column flexbox layout container with `max-width: 998px`, centered horizontally within the main content area. The container SHALL use `display: flex; flex-wrap: wrap; margin: -16px 0 0 -16px` for gap simulation. Each child column SHALL have `margin-top: 16px; margin-left: 16px`.

#### Scenario: Two-column layout renders at correct dimensions
- **WHEN** the "Add product" page is rendered
- **THEN** a flex container is displayed with max-width 998px, centered, containing a left column (`flex: 2 2 480px; min-width: 51%`) and a right column (`flex: 1 1 240px; min-width: 0`)

#### Scenario: Layout columns wrap on narrow viewports
- **WHEN** the viewport narrows below the left column's min-width threshold
- **THEN** the columns wrap vertically with the right column stacking below the left column

### Requirement: Page header with breadcrumb and title
The page header SHALL display a "Products" breadcrumb link with a left arrow icon (font-size 12px, color `#303030`) that navigates back to the products list. Below or beside the breadcrumb, the title "Add product" SHALL render as an H1 with font-size 18px, font-weight 600, color `#303030`, line-height 24px.

#### Scenario: Page header renders with breadcrumb and title
- **WHEN** the "Add product" page is rendered
- **THEN** a breadcrumb link "Products" with a left arrow is displayed above the H1 "Add product"

#### Scenario: Breadcrumb navigates back to products list
- **WHEN** the user clicks the "Products" breadcrumb link
- **THEN** the browser navigates to the `/products` route

### Requirement: Contextual save bar
The page SHALL display a contextual save bar at the top of the content area. It SHALL contain: "Unsaved product" text (font-size 12px, font-weight 450, color `#e3e3e3`), a "Discard" button (transparent background, color `#e3e3e3`, font-size 12px, font-weight 550, height 28px, border-radius 8px, hover: `rgba(255,255,255,0.1)` background), and a "Save" button. The save bar SHALL have a dark background matching the top bar color (`#1a1a1a`).

#### Scenario: Save bar renders in disabled state
- **WHEN** the page loads with no unsaved changes
- **THEN** the save bar displays with the "Save" button in disabled state (transparent background, color `#8a8a8a`)

#### Scenario: Save bar renders in enabled state
- **WHEN** the user has made changes to any form field
- **THEN** the "Save" button changes to enabled state (background `#ffffff`, color `#303030`)

#### Scenario: Discard button hover state
- **WHEN** the user hovers over the "Discard" button
- **THEN** the button background changes to `rgba(255,255,255,0.1)`

### Requirement: Bottom save button
A primary save button SHALL appear at the bottom of the form, spanning the full content width row below the two-column layout. The button SHALL have background `#303030`, color `#ffffff`, font-size 13px, font-weight 450, padding `6px 12px`, border-radius 8px, height 28px, and the Polaris primary button box shadow.

#### Scenario: Bottom save button renders below form columns
- **WHEN** the "Add product" page is rendered
- **THEN** a "Save" button appears below both columns, spanning the full content width

#### Scenario: Bottom save button disabled state
- **WHEN** no changes have been made to the form
- **THEN** the bottom save button is visually disabled

### Requirement: Form card container styling
All form sections SHALL be wrapped in white card containers with background `#ffffff`, border-radius 12px, and the Polaris shadow-100 box shadow. Cards SHALL have no outer padding -- inner content areas define their own padding. Section heading areas SHALL use `padding: 16px 16px 0`. Form field areas SHALL use `padding: 0 16px 16px`.

#### Scenario: Form cards render with correct styling
- **WHEN** any form card section is rendered
- **THEN** it displays with white background, 12px border-radius, and the Polaris-100 shadow

### Requirement: Card section heading typography
Card section headings (H2) SHALL use font-size 13px, font-weight 600, color `#303030`, line-height 20px. These are used for headings like "Price", "Inventory", "Shipping", "Variants", "Status", etc.

#### Scenario: Card section heading renders with correct typography
- **WHEN** a card section heading is rendered (e.g., "Price")
- **THEN** it displays at 13px, font-weight 600, color `#303030`

### Requirement: Product type card at top of form
The ProductTypeCard is the first card in the left column, before the title/description card.

#### Scenario: Card ordering with product type
- **WHEN** the /products/new page renders
- **THEN** the left column card order is: ProductTypeCard, TitleDescriptionCard, PriceCard, CommissionCard, [conditional: InventoryCard], [conditional: ShippingCard], [conditional: VoucherDetailsCard], [conditional: ClickthroughCard], VariantsCard, SeoCard

### Requirement: Right sidebar includes scheduling
The right sidebar adds a SchedulingCard between StatusCard and ProductOrganizationCard.

#### Scenario: Right sidebar card order
- **WHEN** the product form renders the right sidebar
- **THEN** the card order is: StatusCard, SchedulingCard, ProductOrganizationCard

### Requirement: Conditional section visibility
Form cards show/hide based on the selected product type.

#### Scenario: Physical product layout
- **WHEN** product type is "Physical"
- **THEN** InventoryCard, ShippingCard are visible; VoucherDetailsCard, ClickthroughCard are hidden

#### Scenario: Voucher product layout
- **WHEN** product type is "Voucher"
- **THEN** InventoryCard, VoucherDetailsCard are visible; ShippingCard, ClickthroughCard are hidden

#### Scenario: Clickthrough product layout
- **WHEN** product type is "Clickthrough"
- **THEN** ClickthroughCard is visible; InventoryCard, ShippingCard, VoucherDetailsCard are hidden
