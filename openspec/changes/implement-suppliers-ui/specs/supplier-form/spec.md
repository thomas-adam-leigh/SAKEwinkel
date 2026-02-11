## ADDED Requirements

### Requirement: Supplier form page layout
The `/suppliers/new` page SHALL use the two-column `NewProductLayout` component with a PageHeader displaying title "Add supplier" and a back link to `/suppliers`. The page SHALL include a ContextualSaveBar and a bottom Save button.

#### Scenario: Page renders with correct layout
- **WHEN** the user navigates to `/suppliers/new`
- **THEN** the page displays a PageHeader with title "Add supplier", a ContextualSaveBar, a two-column form layout, and a bottom Save button

#### Scenario: Back link navigates to suppliers list
- **WHEN** the user clicks the back arrow or breadcrumb link
- **THEN** the browser navigates to `/suppliers`

### Requirement: Contextual save bar behavior
The ContextualSaveBar SHALL display "Unsaved supplier" text. It SHALL start in disabled state and become enabled when any form field changes. The Discard button SHALL reset the dirty state.

#### Scenario: Save bar starts disabled
- **WHEN** the page loads with no changes
- **THEN** the save bar Save button is in disabled state

#### Scenario: Save bar enables on field change
- **WHEN** the user changes any form field
- **THEN** the save bar Save button becomes enabled

#### Scenario: Discard resets form state
- **WHEN** the user clicks "Discard"
- **THEN** the dirty state is reset and the Save button returns to disabled

### Requirement: Company Details card
The left column SHALL contain a "Company details" card as the first section. It SHALL contain two AdminInput fields: "Company name" (required) and "Trading name" with a helper text "Leave blank if same as company name".

#### Scenario: Company details card renders
- **WHEN** the form page renders
- **THEN** a card with heading "Company details" displays with "Company name" and "Trading name" input fields

#### Scenario: Editing company name marks form dirty
- **WHEN** the user types into the "Company name" field
- **THEN** the form is marked as dirty

### Requirement: Contact Person card
The left column SHALL contain a "Contact person" card with fields: "First name" and "Last name" (side by side in a two-column grid), "Job title", "Email address", and "Phone number". All fields SHALL use AdminInput.

#### Scenario: Contact person card renders with field layout
- **WHEN** the form page renders
- **THEN** a card with heading "Contact person" displays with first name and last name in a two-column row, followed by job title, email address, and phone number fields

#### Scenario: Editing any contact field marks form dirty
- **WHEN** the user types into any contact person field
- **THEN** the form is marked as dirty

### Requirement: Business Address card
The left column SHALL contain a "Business address" card with fields: "Street address", "Apartment, suite, etc." (optional), "City" and "Province" (side by side in a two-column grid), "Postal code" and "Country" (side by side in a two-column grid). Country SHALL use an AdminSelect with South Africa as the default option.

#### Scenario: Business address card renders
- **WHEN** the form page renders
- **THEN** a card with heading "Business address" displays with street address, optional apartment field, city/province row, and postal code/country row

#### Scenario: Country defaults to South Africa
- **WHEN** the business address card renders
- **THEN** the Country select shows "South Africa" as the default value

### Requirement: Legal & Compliance card
The left column SHALL contain a "Legal & compliance" card with fields: "Company registration number", "VAT number", and "License number" (optional, with helper text "Required for alcohol distribution"). All fields SHALL use AdminInput.

#### Scenario: Legal compliance card renders
- **WHEN** the form page renders
- **THEN** a card with heading "Legal & compliance" displays with registration number, VAT number, and license number fields

#### Scenario: License number shows helper text
- **WHEN** the legal compliance card renders
- **THEN** the license number field displays helper text "Required for alcohol distribution"

### Requirement: Status card
The right column SHALL contain a "Status" card as the first section. It SHALL contain an AdminSelect with options: "Active", "Inactive", "Pending". The default selection SHALL be "Pending".

#### Scenario: Status card renders with default
- **WHEN** the form page renders
- **THEN** a card with heading "Status" displays with a select defaulting to "Pending"

#### Scenario: Changing status marks form dirty
- **WHEN** the user changes the status select
- **THEN** the form is marked as dirty

### Requirement: Communication card
The right column SHALL contain a "Communication" card with: an AdminInput for "Order notification email" with helper text "Email address that receives order notifications", and three AdminToggle switches: "New order placed" (default on), "Payment received" (default on), "Shipment required" (default on). Each toggle SHALL have a label describing the notification type.

#### Scenario: Communication card renders with defaults
- **WHEN** the form page renders
- **THEN** a card with heading "Communication" displays with an email input and three toggle switches, all defaulting to enabled

#### Scenario: Toggling a notification preference marks form dirty
- **WHEN** the user toggles any notification switch
- **THEN** the form is marked as dirty

#### Scenario: Order notification email is independent from contact email
- **WHEN** the user views the communication card
- **THEN** the order notification email field is independent and can be set to a different address than the contact person email

### Requirement: Bottom save button
A primary Save button SHALL appear below the two-column layout, matching the products form pattern. It SHALL be disabled when the form has no unsaved changes.

#### Scenario: Bottom save button disabled by default
- **WHEN** the form loads with no changes
- **THEN** the bottom Save button is visually disabled

#### Scenario: Bottom save button enables on change
- **WHEN** the user modifies any field
- **THEN** the bottom Save button becomes enabled

### Requirement: Form card styling consistency
All form section cards SHALL use AdminCard with white background, 12px border-radius, and Polaris shadow-100. Section headings SHALL use CardSectionHeading at 13px font-weight 600. Field labels SHALL use FieldLabel at 13px font-weight 450.

#### Scenario: Cards match product form styling
- **WHEN** any supplier form card renders
- **THEN** it uses the same AdminCard styling, CardSectionHeading, and FieldLabel components as the product form
