## ADDED Requirements

### Requirement: Primary nav items display with icon and label
Each primary nav item in the sidebar SHALL display a 20px icon and a text label, with 8px gap between them. Items SHALL have height 28px, padding 0 4px 0 8px, border-radius 8px, font-size 13px, font-weight 450, and color `#303030`.

#### Scenario: Nav item renders with icon and label
- **WHEN** the sidebar renders
- **THEN** each primary nav item (Home, Orders, Products, Customers, Marketing, Discounts, Content, Markets, Analytics) displays its icon and label with the specified styling

### Requirement: Nav item hover state
A primary nav item SHALL show background `rgba(0,0,0,0.05)` on hover.

#### Scenario: Hovering over a nav item
- **WHEN** the user hovers over a sidebar nav item
- **THEN** the nav item background changes to `rgba(0,0,0,0.05)`

### Requirement: Nav item active state
The nav item corresponding to the current route SHALL show background `rgba(0,0,0,0.08)`.

#### Scenario: Current page nav item is highlighted
- **WHEN** the user is on the `/orders` page
- **THEN** the "Orders" nav item displays with background `rgba(0,0,0,0.08)`

#### Scenario: Navigating changes active item
- **WHEN** the user navigates from `/orders` to `/products`
- **THEN** the "Orders" item loses its active background and "Products" gains it

### Requirement: Expandable nav items with sub-navigation
Nav items that have sub-pages (Orders, Products, Customers, Marketing, Content, Analytics) SHALL display a chevron indicator on the right side. Clicking the item SHALL toggle the sub-navigation visibility and rotate the chevron.

#### Scenario: Expanding a nav item shows sub-nav
- **WHEN** the user clicks on "Products" (which has sub-nav items)
- **THEN** the sub-nav items (Collections, Inventory, Purchase orders, Transfers, Gift cards) appear directly below "Products", other nav items shift down, and the chevron rotates downward

#### Scenario: Collapsing a nav item hides sub-nav
- **WHEN** the user clicks on an already-expanded nav item
- **THEN** the sub-nav items hide, other nav items shift back up, and the chevron rotates back to the right

### Requirement: Sub-nav item styling
Sub-nav items SHALL have the same styling as primary nav items except with padding-left of 36px and no icon — text only.

#### Scenario: Sub-nav items are indented and text-only
- **WHEN** "Orders" is expanded
- **THEN** "Drafts" and "Abandoned checkouts" appear as text-only items indented with 36px left padding

### Requirement: Sub-nav items per parent
The sidebar SHALL display the following sub-nav items for each parent:
- Orders: Drafts, Abandoned checkouts
- Products: Collections, Inventory, Purchase orders, Transfers, Gift cards
- Customers: Segments
- Marketing: Automations, Campaigns
- Content: Metaobjects, Files
- Analytics: Reports, Live View

#### Scenario: Products sub-nav displays all children
- **WHEN** "Products" is expanded
- **THEN** the sub-nav shows exactly: Collections, Inventory, Purchase orders, Transfers, Gift cards — in that order

### Requirement: Section headers
The sidebar SHALL display section headers ("Sales channels", "Apps") below the primary nav items. Section headers SHALL have height 24px, padding `4px 3px 4px 8px`, font-size 13px, font-weight 400, color `#000000`, with a toggle chevron on the right.

#### Scenario: Sales channels section renders
- **WHEN** the sidebar renders
- **THEN** a "Sales channels" section header appears below the primary nav items, with "Online Store" as a sub-item beneath it

### Requirement: Apps section with Add button
The sidebar SHALL display an "Apps" section header with an "Add" button beneath it. The Add button SHALL have a "+" icon, font-weight 550, and color `#616161`.

#### Scenario: Apps section shows Add button
- **WHEN** the sidebar renders
- **THEN** the "Apps" section appears with an "Add" button styled with a plus icon and secondary text color

### Requirement: Settings link pinned to bottom
The sidebar SHALL display a "Settings" link with a gear icon, pinned to the bottom of the sidebar using flex spacer or `mt-auto`. It SHALL use the same styling as primary nav items.

#### Scenario: Settings is always at the bottom
- **WHEN** the sidebar renders at any viewport height
- **THEN** the "Settings" link appears at the bottom of the sidebar, separated from other nav items by a flex spacer

### Requirement: Auto-expand section on navigation
When the user navigates to a sub-page, the parent nav item SHALL automatically expand to show its sub-navigation.

#### Scenario: Direct navigation to sub-page expands parent
- **WHEN** the user navigates directly to `/orders/drafts` (e.g. via URL or bookmark)
- **THEN** the "Orders" section is automatically expanded showing "Drafts" as active
