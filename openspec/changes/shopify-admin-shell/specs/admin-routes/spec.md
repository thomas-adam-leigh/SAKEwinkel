## ADDED Requirements

### Requirement: Primary navigation routes
The app SHALL define file-based routes for all primary navigation destinations, each rendering an empty placeholder page with an H1 title.

| Sidebar Label | Route | H1 Title |
|---|---|---|
| Home | `/` | Home |
| Orders | `/orders` | Orders |
| Products | `/products` | Products |
| Customers | `/customers` | Customers |
| Marketing | `/marketing` | Marketing |
| Discounts | `/discounts` | Discounts |
| Content | `/content` | Content |
| Markets | `/markets` | Markets |
| Analytics | `/analytics` | Analytics |

#### Scenario: Each primary route renders its title
- **WHEN** the user navigates to `/orders`
- **THEN** the main content area displays an H1 with text "Orders"

#### Scenario: Home route renders at root
- **WHEN** the user navigates to `/`
- **THEN** the main content area displays an H1 with text "Home"

### Requirement: Sub-navigation routes
The app SHALL define routes for all sub-navigation items, each rendering an empty placeholder page with an H1 title.

| Parent | Sub-nav Label | Route | H1 Title |
|---|---|---|---|
| Orders | Drafts | `/orders/drafts` | Drafts |
| Orders | Abandoned checkouts | `/orders/abandoned` | Abandoned checkouts |
| Products | Collections | `/products/collections` | Collections |
| Products | Inventory | `/products/inventory` | Inventory |
| Products | Purchase orders | `/products/purchase-orders` | Purchase orders |
| Products | Transfers | `/products/transfers` | Transfers |
| Products | Gift cards | `/products/gift-cards` | Gift cards |
| Customers | Segments | `/customers/segments` | Segments |
| Marketing | Automations | `/marketing/automations` | Automations |
| Marketing | Campaigns | `/marketing/campaigns` | Campaigns |
| Content | Metaobjects | `/content/metaobjects` | Metaobjects |
| Content | Files | `/content/files` | Files |
| Analytics | Reports | `/analytics/reports` | Reports |
| Analytics | Live View | `/analytics/live` | Live View |

#### Scenario: Sub-nav route renders its title
- **WHEN** the user navigates to `/products/collections`
- **THEN** the main content area displays an H1 with text "Collections"

### Requirement: Secondary navigation routes
The app SHALL define routes for secondary navigation items.

| Label | Route | H1 Title |
|---|---|---|
| Online Store | `/online-store` | Online Store |
| Settings | `/settings` | Settings |

#### Scenario: Settings route renders
- **WHEN** the user navigates to `/settings`
- **THEN** the main content area displays an H1 with text "Settings"

### Requirement: Detail and create routes
The app SHALL define parameterized routes for detail and create pages.

| Page | Route | H1 Title |
|---|---|---|
| Create new product | `/products/new` | Add product |
| Edit product | `/products/:id` | Product detail |
| Order detail | `/orders/:id` | Order detail |
| Customer detail | `/customers/:id` | Customer detail |
| Add customer | `/customers/new` | Add customer |

#### Scenario: Product detail route with dynamic ID
- **WHEN** the user navigates to `/products/123`
- **THEN** the main content area displays an H1 with text "Product detail"

#### Scenario: New product route
- **WHEN** the user navigates to `/products/new`
- **THEN** the main content area displays an H1 with text "Add product"

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
