## 1. Mock Data & Types

- [x] 1.1 Create `apps/admin/src/data/suppliers.json` with 6-8 mock suppliers covering Active, Inactive, and Pending statuses, with realistic sake supplier data (Japanese breweries, South African distributors, etc.)
- [x] 1.2 Create Supplier TypeScript interface matching the design doc data shape (with nested contact, address, legal, communication objects)

## 2. Suppliers Listing Page Components

- [x] 2.1 Create `suppliers-tab-bar.tsx` — pill-variant tabs (All, Active, Inactive, Pending) with count badges, wrapping AdminTabs
- [x] 2.2 Create `suppliers-search-bar.tsx` — search input with placeholder "Search suppliers" and sort button, matching ProductsSearchBar pattern
- [x] 2.3 Create `suppliers-data-table.tsx` — table with columns: Checkbox, Supplier, Contact, Email, Phone, City, Status (StatusBadge), Products count. Include row selection via Set<string>, select-all checkbox, hover styling, 52px row height

## 3. Suppliers Listing Page Route

- [x] 3.1 Create `routes/_auth/suppliers/index.tsx` — listing page with PageHeader ("Suppliers"), action buttons (Export, Import, More actions, Add supplier), AdminCard containing tab bar, search bar, and data table. Include tab filtering, search filtering (by company name, contact name, email), and selection state management
- [x] 3.2 Add footer "Learn more about suppliers" link below the card

## 4. Supplier Form Page Components

- [x] 4.1 Create `company-details-card.tsx` — card with "Company name" and "Trading name" inputs, helper text on trading name
- [x] 4.2 Create `contact-person-card.tsx` — card with first name/last name (two-column row), job title, email address, phone number
- [x] 4.3 Create `business-address-card.tsx` — card with street address, apartment/suite (optional), city/province (two-column row), postal code/country (two-column row), country defaults to South Africa
- [x] 4.4 Create `legal-compliance-card.tsx` — card with registration number, VAT number, license number (optional with helper text "Required for alcohol distribution")
- [x] 4.5 Create `supplier-status-card.tsx` — card with AdminSelect for Active/Inactive/Pending, defaulting to Pending
- [x] 4.6 Create `communication-card.tsx` — card with order notification email input (with helper text), three AdminToggle switches: "New order placed", "Payment received", "Shipment required" — all defaulting to on

## 5. Supplier Form Page Route

- [x] 5.1 Create `routes/_auth/suppliers/new.tsx` — form page with ContextualSaveBar ("Unsaved supplier"), PageHeader ("Add supplier" with back link to /suppliers), NewProductLayout with left column (company details, contact person, business address, legal compliance) and right column (status, communication), bottom Save button. Wire all onFieldChange callbacks to markDirty
