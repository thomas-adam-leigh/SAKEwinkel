## MODIFIED Requirements

### Requirement: Title and Description Card
The TitleDescriptionCard SHALL accept an optional `defaultValues` prop with fields `name`, `shortOverview`, and `description`. When provided, the title input SHALL render with the `name` value and the description editor SHALL render with the `description` value.

#### Scenario: Edit mode with default values
- **WHEN** TitleDescriptionCard receives `defaultValues` with `name: "Jana Bag"` and `description: "<p>Handcrafted leather bag</p>"`
- **THEN** the title input displays "Jana Bag" and the description editor displays the HTML content

#### Scenario: Create mode without default values
- **WHEN** TitleDescriptionCard receives no `defaultValues` prop
- **THEN** all fields render empty with their placeholder text

### Requirement: Product Type Card
The ProductTypeCard SHALL accept an optional `defaultValue` prop of type `ProductType`. When provided, the corresponding type option SHALL be pre-selected.

#### Scenario: Edit mode with default type
- **WHEN** ProductTypeCard receives `defaultValue: "Voucher"`
- **THEN** the "Voucher" option is pre-selected

### Requirement: Price Card
The PriceCard SHALL accept an optional `defaultValues` prop with fields `originalPrice` and `salePrice`. When provided, the price inputs SHALL render with those values.

#### Scenario: Edit mode with prices
- **WHEN** PriceCard receives `defaultValues` with `originalPrice: 1000` and `salePrice: 599`
- **THEN** the original price input shows "1000" and the sale price input shows "599"

### Requirement: Commission Card
The CommissionCard SHALL accept an optional `defaultValues` prop with a `commissionValue` field. When provided, the commission input SHALL render with that value.

#### Scenario: Edit mode with commission
- **WHEN** CommissionCard receives `defaultValues` with `commissionValue: 120`
- **THEN** the commission input shows "120"

### Requirement: Inventory Card
The InventoryCard SHALL accept an optional `defaultValues` prop with fields for stock quantity and `maxPerOrder`. When provided, the inventory fields SHALL render with those values.

#### Scenario: Edit mode with inventory data
- **WHEN** InventoryCard receives `defaultValues` with `maxPerOrder: 5`
- **THEN** the max per order input shows "5"

### Requirement: Shipping Card
The ShippingCard SHALL accept an optional `defaultValues` prop with fields `deliveryCost`, `weight`, `packageType`, and `countryOfOrigin`. When provided, the shipping fields SHALL render with those values.

#### Scenario: Edit mode with shipping data
- **WHEN** ShippingCard receives `defaultValues` with `weight: 1.2`, `packageType: "Parcel"`, `countryOfOrigin: "South Africa"`
- **THEN** the weight input shows "1.2", package type shows "Parcel", and country shows "South Africa"

### Requirement: Voucher Details Card
The VoucherDetailsCard SHALL accept an optional `defaultValues` prop with fields `voucherCodePrefix`, `voucherExpiry`, `voucherOffer`, and `optionalHeadline`. When provided, the fields SHALL render with those values.

#### Scenario: Edit mode with voucher data
- **WHEN** VoucherDetailsCard receives `defaultValues` with voucher fields populated
- **THEN** each field renders with its corresponding value

### Requirement: Clickthrough Card
The ClickthroughCard SHALL accept an optional `defaultValues` prop with fields `clickThroughUrl` and `ctaButtonText`. When provided, the fields SHALL render with those values.

#### Scenario: Edit mode with clickthrough data
- **WHEN** ClickthroughCard receives `defaultValues` with `clickThroughUrl: "https://example.com"` and `ctaButtonText: "Shop Now"`
- **THEN** the URL input shows "https://example.com" and the CTA input shows "Shop Now"

### Requirement: Status Card
The StatusCard SHALL accept an optional `defaultValue` prop of type `ProductStatus`. When provided, the status dropdown SHALL render with that value selected.

#### Scenario: Edit mode with status
- **WHEN** StatusCard receives `defaultValue: "Active"`
- **THEN** the status dropdown shows "Active" selected

### Requirement: Scheduling Card
The SchedulingCard SHALL accept an optional `defaultValues` prop with fields `productStart` and `productEnd`. When provided, the date inputs SHALL render with those values.

#### Scenario: Edit mode with schedule dates
- **WHEN** SchedulingCard receives `defaultValues` with `productStart: "2025-04-10"` and `productEnd: "2025-12-31"`
- **THEN** the start date picker shows "2025-04-10" and the end date picker shows "2025-12-31"

### Requirement: Variants Card
The VariantsCard SHALL accept an optional `defaultValues` prop with an array of variant objects. When provided, the variants table SHALL render with those variants pre-populated.

#### Scenario: Edit mode with variants
- **WHEN** VariantsCard receives `defaultValues` with 2 variant objects
- **THEN** the variants toggle is on and the table shows 2 pre-populated variant rows

### Requirement: SEO Card
The SeoCard SHALL accept an optional `defaultValues` prop with fields for SEO title and description. When provided, the SEO fields SHALL render with those values.

#### Scenario: Edit mode with SEO data
- **WHEN** SeoCard receives `defaultValues` with SEO title and description
- **THEN** the SEO fields render with those values when expanded
