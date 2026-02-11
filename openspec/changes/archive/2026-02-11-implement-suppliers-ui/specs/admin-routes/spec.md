## MODIFIED Requirements

### Requirement: Detail and create routes
The app SHALL define routes for detail and create pages.

| Page | Route | H1 Title |
|---|---|---|
| Create new product | `/products/new` | Add product |
| Create new supplier | `/suppliers/new` | Add supplier |

#### Scenario: New product route
- **WHEN** the user navigates to `/products/new`
- **THEN** the main content area displays the Add product page

#### Scenario: New supplier route
- **WHEN** the user navigates to `/suppliers/new`
- **THEN** the main content area displays the Add supplier form with two-column layout, company details, contact person, address, legal, status, and communication cards

### Requirement: Primary navigation routes
The app SHALL define file-based routes for all primary navigation destinations, each rendering a fully implemented page.

| Sidebar Label | Route | H1 Title |
|---|---|---|
| Home | `/` | Home |
| Orders | `/orders` | Orders |
| Products | `/products` | Products |
| Customers | `/customers` | Customers |
| Suppliers | `/suppliers` | Suppliers |
| Analytics | `/analytics` | Analytics |
| Legal | `/legal` | Legal |
| Email Templates | `/email-templates` | Email Templates |
| Reports | `/reports` | Reports |

#### Scenario: Each primary route renders its title
- **WHEN** the user navigates to `/orders`
- **THEN** the main content area displays an H1 with text "Orders"

#### Scenario: Home route renders at root
- **WHEN** the user navigates to `/`
- **THEN** the main content area displays the Home page

#### Scenario: Suppliers route renders full listing page
- **WHEN** the user navigates to `/suppliers`
- **THEN** the main content area displays the suppliers listing page with header, tabs, search, and data table

#### Scenario: Legal route renders
- **WHEN** the user navigates to `/legal`
- **THEN** the main content area displays an H1 with text "Legal"

#### Scenario: Email Templates route renders
- **WHEN** the user navigates to `/email-templates`
- **THEN** the main content area displays an H1 with text "Email Templates"

#### Scenario: Reports route renders
- **WHEN** the user navigates to `/reports`
- **THEN** the main content area displays an H1 with text "Reports"
