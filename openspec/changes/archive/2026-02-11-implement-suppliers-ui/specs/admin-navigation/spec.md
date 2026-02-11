## MODIFIED Requirements

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
