## Requirements

### Requirement: Primary nav items display with icon and label
Each primary nav item in the sidebar SHALL display a 20px icon and a text label, with 8px gap between them. Items SHALL have height 28px, padding 0 4px 0 8px, border-radius 8px, font-size 13px, font-weight 450, and color `#303030`.

The primary nav items SHALL be:
- Home → `/` (Home icon)
- Orders → `/orders` (ShoppingCart icon)
- Products → `/products` (Package icon)
- Suppliers → `/suppliers` (Truck icon)
- Customers → `/customers` (Users icon)
- Analytics → `/analytics` (BarChart3 icon)
- Reports → `/reports` (FileBarChart icon, coming soon)
- Marketing → non-navigable (Megaphone icon, coming soon)
- Content → non-navigable (FileText icon, coming soon)
- Legal → `/legal` (Scale icon)
- Email Templates → `/email-templates` (Mail icon)

#### Scenario: Nav item renders with icon and label
- **WHEN** the sidebar renders
- **THEN** each nav item (Home, Orders, Products, Suppliers, Customers, Analytics, Reports, Marketing, Content, Legal, Email Templates) displays its icon and label with the specified styling

#### Scenario: Suppliers nav item navigates to suppliers page
- **WHEN** the user clicks the "Suppliers" nav item
- **THEN** the browser navigates to `/suppliers` and the Suppliers nav item shows active state background `rgba(0,0,0,0.08)`

### Requirement: Nav item hover state
A navigable nav item SHALL show background `rgba(0,0,0,0.05)` on hover. Non-navigable items (Marketing, Content) SHALL NOT show hover background.

#### Scenario: Hovering over a navigable nav item
- **WHEN** the user hovers over a navigable sidebar nav item (e.g., Orders)
- **THEN** the nav item background changes to `rgba(0,0,0,0.05)`

#### Scenario: Hovering over a non-navigable nav item
- **WHEN** the user hovers over Marketing or Content
- **THEN** no hover background appears

### Requirement: Nav item active state
The nav item corresponding to the current route SHALL show background `rgba(0,0,0,0.08)`.

#### Scenario: Current page nav item is highlighted
- **WHEN** the user is on the `/orders` page
- **THEN** the "Orders" nav item displays with background `rgba(0,0,0,0.08)`

#### Scenario: Navigating changes active item
- **WHEN** the user navigates from `/orders` to `/products`
- **THEN** the "Orders" item loses its active background and "Products" gains it
