## ADDED Requirements

### Requirement: Suppliers listing page layout
The `/suppliers` page SHALL display a page header with title "Suppliers", action buttons (Export, Import, More actions, Add supplier), and a card containing tabs, search bar, and data table. The layout SHALL match the structure of the products listing page.

#### Scenario: Page renders with header and actions
- **WHEN** the user navigates to `/suppliers`
- **THEN** the page displays a PageHeader with title "Suppliers" and action buttons: "Export" (tertiary), "Import" (tertiary), "More actions" (tertiary with chevron), and "Add supplier" (primary)

#### Scenario: Add supplier button navigates to create page
- **WHEN** the user clicks the "Add supplier" button
- **THEN** the browser navigates to `/suppliers/new`

### Requirement: Suppliers tab bar
The suppliers listing SHALL display pill-variant tabs: All, Active, Inactive, Pending. Each non-All tab SHALL display a count badge. Changing tabs SHALL filter the table and clear any row selection.

#### Scenario: Tabs render with counts
- **WHEN** the suppliers page renders
- **THEN** tabs "All", "Active", "Inactive", "Pending" are displayed, with count badges on Active, Inactive, and Pending tabs

#### Scenario: Selecting a tab filters the table
- **WHEN** the user clicks the "Active" tab
- **THEN** only suppliers with status "Active" are displayed in the table

#### Scenario: Changing tabs clears selection
- **WHEN** the user has selected rows and then clicks a different tab
- **THEN** the row selection is cleared

### Requirement: Suppliers search bar
The suppliers listing SHALL display a search input with placeholder "Search suppliers" and a sort button. Typing in the search input SHALL filter suppliers by company name, contact name, or email.

#### Scenario: Search filters by company name
- **WHEN** the user types "Asahi" in the search input
- **THEN** only suppliers whose company name contains "Asahi" (case-insensitive) are displayed

#### Scenario: Search filters by contact name
- **WHEN** the user types "Tanaka" in the search input
- **THEN** only suppliers whose contact first or last name contains "Tanaka" are displayed

#### Scenario: Search filters by email
- **WHEN** the user types "sake@" in the search input
- **THEN** only suppliers whose contact email contains "sake@" are displayed

### Requirement: Suppliers data table columns
The suppliers data table SHALL display the following columns in order: Checkbox, Supplier, Contact, Email, Phone, City, Status, Products.

#### Scenario: Table renders all columns
- **WHEN** the suppliers page renders with data
- **THEN** the table displays columns: a checkbox column, "Supplier" (company name), "Contact" (contact person full name), "Email" (contact email), "Phone" (contact phone), "City" (address city), "Status" (status badge), "Products" (product count)

#### Scenario: Status column displays correct badge tones
- **WHEN** a supplier has status "Active"
- **THEN** the status badge displays with success tone (green background, dark green text)
- **WHEN** a supplier has status "Pending"
- **THEN** the status badge displays with warning tone (yellow background, dark yellow text)
- **WHEN** a supplier has status "Inactive"
- **THEN** the status badge displays with subdued tone (grey background, grey text)

### Requirement: Suppliers table row selection
Each row SHALL have a checkbox for selection. The table header SHALL have a select-all checkbox. Selected rows SHALL be tracked in a `Set<string>` of supplier IDs.

#### Scenario: Selecting individual rows
- **WHEN** the user clicks a row's checkbox
- **THEN** the row is added to the selection set and the checkbox displays as checked

#### Scenario: Select all checkbox
- **WHEN** the user clicks the header checkbox
- **THEN** all visible supplier rows are selected

#### Scenario: Deselect all
- **WHEN** all rows are selected and the user clicks the header checkbox
- **THEN** all rows are deselected

### Requirement: Suppliers table row styling
Table rows SHALL have height 52px, hover background `bg-bg-surface-hover`, and bottom border using `border-border-separator`. The checkbox column SHALL have fixed width 40px.

#### Scenario: Row hover effect
- **WHEN** the user hovers over a supplier table row
- **THEN** the row background changes to the surface hover color

### Requirement: Mock supplier data
The suppliers listing SHALL use mock data from `data/suppliers.json` containing 6-8 supplier entries covering all three statuses (Active, Inactive, Pending) with realistic sake supplier data.

#### Scenario: Mock data covers all statuses
- **WHEN** the suppliers page loads
- **THEN** the mock data includes at least 2 Active suppliers, at least 1 Inactive supplier, and at least 1 Pending supplier

### Requirement: Footer learn more link
The page SHALL display a centered "Learn more about suppliers" link below the card, styled at 12px font-size, font-weight 550, with hover underline.

#### Scenario: Footer link renders
- **WHEN** the suppliers page renders
- **THEN** a centered "Learn more about suppliers" link appears below the table card
