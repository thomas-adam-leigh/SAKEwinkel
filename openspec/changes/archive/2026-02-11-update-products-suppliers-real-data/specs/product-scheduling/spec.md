## ADDED Requirements

### Requirement: Product status lifecycle
Products can be in one of three statuses: Draft, Unlisted, or Active.

#### Scenario: Default status for new products
- **WHEN** a new product is created
- **THEN** its status defaults to "Draft"

#### Scenario: Draft product behavior
- **WHEN** a product has status "Draft"
- **THEN** it is not visible on the storefront and does not appear in the product gallery

#### Scenario: Unlisted product behavior
- **WHEN** a product has status "Unlisted"
- **THEN** it is accessible via direct URL but does not appear in the product gallery

#### Scenario: Active product behavior
- **WHEN** a product has status "Active"
- **THEN** it is visible in the product gallery and accessible via direct URL

### Requirement: Product scheduling dates
Products can have start and end dates controlling when they are available.

#### Scenario: Setting product availability window
- **WHEN** the user sets productStart and productEnd dates
- **THEN** the product is only available for purchase (or clickthrough) between those dates

#### Scenario: Products without scheduling
- **WHEN** productStart and productEnd are not set
- **THEN** the product availability is controlled solely by its status (no time-based restriction)

### Requirement: Status selector in product form
The product form's right sidebar shows a status dropdown with three options.

#### Scenario: Selecting product status
- **WHEN** the user opens the Status card in the product form
- **THEN** they can choose between "Draft", "Unlisted", and "Active"

### Requirement: Scheduling card in product form
A scheduling card allows setting start and end dates.

#### Scenario: Scheduling card display
- **WHEN** the user views the product form
- **THEN** a scheduling card in the right sidebar shows optional start date and end date pickers
