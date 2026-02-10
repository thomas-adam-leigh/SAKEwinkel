## Requirements

### Requirement: Primary navigation routes
The app SHALL define file-based routes for all primary navigation destinations, each rendering a placeholder page.

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

#### Scenario: Suppliers route renders
- **WHEN** the user navigates to `/suppliers`
- **THEN** the main content area displays an H1 with text "Suppliers"

#### Scenario: Legal route renders
- **WHEN** the user navigates to `/legal`
- **THEN** the main content area displays an H1 with text "Legal"

#### Scenario: Email Templates route renders
- **WHEN** the user navigates to `/email-templates`
- **THEN** the main content area displays an H1 with text "Email Templates"

#### Scenario: Reports route renders
- **WHEN** the user navigates to `/reports`
- **THEN** the main content area displays an H1 with text "Reports"

### Requirement: Detail and create routes
The app SHALL define routes for create pages.

| Page | Route | H1 Title |
|---|---|---|
| Create new product | `/products/new` | Add product |
| Create new supplier | `/suppliers/new` | Add supplier |

#### Scenario: New product route
- **WHEN** the user navigates to `/products/new`
- **THEN** the main content area displays the Add product page

#### Scenario: New supplier route
- **WHEN** the user navigates to `/suppliers/new`
- **THEN** the main content area displays an H1 with text "Add supplier"

### Requirement: All routes are authenticated
All admin routes SHALL be nested under the `_auth` layout route, which redirects unauthenticated users to the login page.

#### Scenario: Unauthenticated access redirects to login
- **WHEN** an unauthenticated user navigates to `/orders`
- **THEN** they are redirected to `/login`

### Requirement: Remove legacy dashboard route
The existing `/_auth/dashboard` route SHALL be removed. The root `/` route SHALL serve as the home page.

#### Scenario: Dashboard URL no longer exists
- **WHEN** a user navigates to `/dashboard`
- **THEN** a not-found page is displayed
