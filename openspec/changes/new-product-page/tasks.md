## 1. Setup and Git Worktree

- [x] 1.1 Create git worktree at `./worktrees/new-product-page` branching from main
- [x] 1.2 Create the `apps/admin/src/components/admin/products/` directory for product form components

## 2. Shared Form Field Components

- [x] 2.1 Create `FieldLabel` component — 13px, font-weight 450, color `#303030`, margin-bottom 4px
- [x] 2.2 Create `HelperText` component — 12px, font-weight 450, color `#616161`, margin-top 4px
- [x] 2.3 Create `CardSectionHeading` component — H2, 13px, font-weight 600, color `#303030`
- [x] 2.4 Create `PriceInput` component — AdminInput wrapper with "R " currency prefix inside the border
- [x] 2.5 Create `AdminSelect` component — native select with Polaris input styling (border, radius, height 32px, chevron)
- [x] 2.6 Create `AdminToggle` component — 36×20px toggle switch with ON (#303030) / OFF (#b5b5b5) states, smooth transition
- [x] 2.7 Create `AdminCheckbox` component — 16×16px checkbox with Polaris styling, checked state (#303030, white checkmark)
- [x] 2.8 Create `SpinButton` component — number input with increment/decrement arrows, right-aligned text
- [x] 2.9 Create `ComboboxField` component — text input with dropdown chevron icon on right
- [x] 2.10 Create `ExpandableOptionButton` component — transparent "+" button, hover bg rgba(0,0,0,0.05), hides on click to reveal field
- [x] 2.11 Create `ChannelPill` component — inline-flex chip with bg #f1f1f1, 8px radius, "x" remove button

## 3. Page Layout and Structure

- [x] 3.1 Create `NewProductLayout` component — two-column flexbox container (max-width 998px, centered, negative margin technique), left column (flex: 2 2 480px, min-width 51%), right column (flex: 1 1 240px)
- [x] 3.2 Create `ContextualSaveBar` component — sticky dark bar (#1a1a1a) with "Unsaved product" text, Discard button, Save button (disabled/enabled states)
- [x] 3.3 Wire up page header using existing `PageHeader` component with breadcrumb "Products" linking to `/products` and title "Add product"

## 4. Left Column Cards

- [x] 4.1 Create `TitleDescriptionCard` — combined card containing Title input (placeholder "Short sleeve t-shirt"), Description label + RichTextToolbar + editable area, Media drop zone section, and Category combobox section
- [x] 4.2 Create `RichTextToolbar` — visual toolbar placeholder with formatting icon buttons (Paragraph dropdown, Bold, Italic, Underline, Color, Alignment, Link, Image, Video, More, HTML, Generate text), non-functional, 24×24px buttons, bottom border separator
- [x] 4.3 Create `MediaDropZone` — dashed border (1px dashed #c0c0c0), bg #f7f7f7, centered content with "Upload new" and "Select existing" buttons and helper text
- [x] 4.4 Create `PriceCard` — H2 "Price", PriceInput with "R " prefix, expandable options row (Compare at, Unit price, Charge tax Yes, Cost per item) with expand/reveal state
- [x] 4.5 Create `InventoryCard` — H2 "Inventory", AdminToggle "Inventory tracked" (default on, hides content when off), quantity table (header row + "Shop location" row with SpinButton), expandable options (SKU, Barcode, Sell when out of stock Off)
- [x] 4.6 Create `ShippingCard` — H2 "Shipping", AdminToggle "Physical product" (default on, hides content when off), package combobox, weight input + unit select (kg/g/lb/oz), expandable options (Country of origin, HS Code)
- [x] 4.7 Create `VariantsCard` — H2 "Variants", single expandable button "Add options like size or color" that reveals a combobox input
- [x] 4.8 Create `SeoCard` — H2 "Search engine listing" with "Edit" button, collapsed placeholder text, expanded state reveals title + description fields

## 5. Right Column Cards

- [x] 5.1 Create `StatusCard` — H2 "Status", AdminSelect with options Active (default) / Draft, ~92px total height
- [x] 5.2 Create `PublishingCard` — H2 "Publishing", "Manage publishing" button, ChannelPills for "Online Store" and "Point of Sale" with removable state
- [x] 5.3 Create `ProductOrganizationCard` — H2 "Product organization" + "Learn more" ghost link, four ComboboxFields (Type, Vendor, Collections with search icon, Tags)
- [x] 5.4 Create `ThemeTemplateCard` — small card (~88px), AdminSelect defaulting to "Default product"

## 6. Page Assembly and Bottom Save

- [x] 6.1 Create bottom save button row — full-width primary AdminButton "Save" below the two-column layout
- [x] 6.2 Assemble all components in the route file `apps/admin/src/routes/_auth/products/new.tsx` — ContextualSaveBar, PageHeader, NewProductLayout with left column cards and right column cards, bottom save button
- [x] 6.3 Wire up basic form dirty state — track if any field has been modified to toggle save bar and save button enabled/disabled states

## 7. Visual Verification

- [x] 7.1 Start dev server and verify page renders at `/products/new` with correct two-column layout, card spacing, and overall structure
- [x] 7.2 Verify all form field components render with correct Polaris styling (inputs, toggles, selects, checkboxes, spinbuttons)
- [x] 7.3 Verify expandable option buttons show/hide fields correctly across Price, Inventory, Shipping, Variants, and SEO cards
- [x] 7.4 Verify contextual save bar toggles between disabled and enabled states based on form interaction
- [x] 7.5 Verify channel pills can be removed and toggle switches hide/show dependent content
