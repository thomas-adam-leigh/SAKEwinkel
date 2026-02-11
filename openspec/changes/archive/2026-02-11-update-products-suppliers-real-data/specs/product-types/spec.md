## ADDED Requirements

### Requirement: Product type enumeration
Products must belong to exactly one of three types: Physical, Voucher, or Clickthrough. The type determines which form sections are visible and which fields are required.

#### Scenario: Creating a Physical product
- **WHEN** the user selects "Physical" as the product type
- **THEN** the shipping/delivery card is shown, the inventory card is shown, and the voucher/clickthrough cards are hidden

#### Scenario: Creating a Voucher product
- **WHEN** the user selects "Voucher" as the product type
- **THEN** the voucher details card is shown (code prefix, expiry, offer text), the shipping card is hidden, and the clickthrough card is hidden

#### Scenario: Creating a Clickthrough product
- **WHEN** the user selects "Clickthrough" as the product type
- **THEN** the clickthrough card is shown (redirect URL, CTA text), the shipping card is hidden, the inventory card is hidden, and the voucher card is hidden

### Requirement: Type-specific data fields
Each product type has fields unique to it, stored on the Product type.

#### Scenario: Physical product fields
- **WHEN** a product is of type Physical
- **THEN** it may have delivery_cost, weight, package type, and country of origin fields

#### Scenario: Voucher product fields
- **WHEN** a product is of type Voucher
- **THEN** it has voucher_code_prefix, voucher_expiry, voucher_offer, and optional_headline fields

#### Scenario: Clickthrough product fields
- **WHEN** a product is of type Clickthrough
- **THEN** it has click_through_url (required) and cta_button_text fields, and the add-to-cart button is replaced with the CTA on the storefront

### Requirement: Variants are type-independent
All three product types can have variants. Variants override the parent product's price, stock, and image.

#### Scenario: Adding variants to any product type
- **WHEN** the user adds variants to a product of any type
- **THEN** each variant has its own name, variation label, original_price, sale_price, qty_in_stock, max_per_order, commission_value, and main_image_url

### Requirement: Product data model
The Product TypeScript interface includes shared fields and type-discriminated fields.

#### Scenario: Shared product fields
- **WHEN** a product is created
- **THEN** it has: id, name, slug, productType, status, supplierId, originalPrice, salePrice, commissionValue, shortOverview, description, color, mainImageUrl, galleryImages, maxPerOrder, onHomepage, hidPrice, galleryHeadline, optionalHeadline, productStart, productEnd, variants, createdAt, updatedAt

### Requirement: Supplier data model
The Supplier TypeScript interface reflects the real SAKEwinkel business structure.

#### Scenario: Supplier type structure
- **WHEN** a supplier record is defined
- **THEN** it has: id, legalName, tradingName, businessType, identificationDetails (type + number), vatRegistration (isRegistered + number), primaryContact (firstName, surname, phone, email, role), additionalContacts array, address (street, town, province, magisterialDistrict), banking (bankName, accountType, accountNumber, branchCode), shortDescription, websiteUrl, logoPath, isActive, createdAt
