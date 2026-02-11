## 1. Type Definitions

- [x] 1.1 Create `/apps/admin/src/types/product.ts` with `Product`, `ProductVariant`, `ProductType`, and `ProductStatus` types. ProductType: `"Physical" | "Voucher" | "Clickthrough"`. ProductStatus: `"Draft" | "Unlisted" | "Active"`. Product includes all shared fields plus type-discriminated fields (voucher_*, click_through_*, shipping fields). ProductVariant includes name, variation, originalPrice, salePrice, qtyInStock, maxPerOrder, commissionValue, mainImageUrl, slug.
- [x] 1.2 Update `/apps/admin/src/types/supplier.ts` with new Supplier interface: legalName, tradingName, businessType (enum), identificationType/Number, vatRegistration, primaryContact, additionalContacts array, address (street, town, province, magisterialDistrict), banking (bankName, accountType, accountNumber, branchCode), shortDescription, websiteUrl, logoPath, isActive, productsCount, createdAt.

## 2. Mock Data

- [x] 2.1 Rewrite `/apps/admin/src/data/suppliers.json` with 6 representative suppliers: Boot & Rally (leather, Active), B4i Productions/OntbytSAKE (media, Active), Afrimunt (coins, Active), Banhoek Lodge (hospitality, Active), Tapputi Perfume Oils (cosmetics, Active), The Cape Mint (minting, Inactive — to show both statuses). Each with full contact, address, banking, and business registration details (fabricated but realistic).
- [x] 2.2 Rewrite `/apps/admin/src/data/products.json` with ~8 representative products: (Physical) Boot & Rally Jana Bag R599 sale from R1000, Boot & Rally "BitterLekker" Leather Apron R799 sale from R999; (Voucher) Banhoek Lodge 50% Accommodation Voucher R500; (Clickthrough) Afrimunt "Afrikaans is 100" Gold Coin R124,000, Tapputi Egyptian Perfume Oils; (Variants) OntbytSAKE 25-Year Magazine with 6 variants by signer R269 each, Pinotage 100 Commemorative Coin with Silver R2,400 and Gold R93,000 variants. Include Draft, Unlisted, and Active statuses. Include scheduling dates, commission values, and supplier references.

## 3. New Product Form Components

- [x] 3.1 Create `ProductTypeCard` component — shows three selectable cards/buttons for Physical, Voucher, Clickthrough with icons. Emits selected type via `onTypeChange` callback. Placed at top of left column.
- [x] 3.2 Create `VoucherDetailsCard` component — fields: voucher code prefix (text), expiry (text), offer description (text), optional headline (text). Only rendered when productType is "Voucher".
- [x] 3.3 Create `ClickthroughCard` component — fields: redirect URL (required text input), CTA button text (text input, default "Shop Now"). Only rendered when productType is "Clickthrough".
- [x] 3.4 Create `CommissionCard` component — single currency input for commission value in ZAR.
- [x] 3.5 Create `SchedulingCard` component — two native date inputs: "Start date" and "End date". Placed in right sidebar.

## 4. Modified Product Form Components

- [x] 4.1 Update `PriceCard` — rename "Price" to "Original price", replace "Compare at price" with "Sale price" as a non-expandable visible field. Keep other expandable options (cost per item, charge tax).
- [x] 4.2 Update `StatusCard` — add "Unlisted" option to dropdown, making options: Draft, Unlisted, Active.
- [x] 4.3 Update `InventoryCard` — add "Max per order" number input field below stock quantity.
- [x] 4.4 Update `VariantsCard` — support adding multiple variant rows, each with: variant name, variation label, original price, sale price, stock qty, max per order, commission value, image placeholder. Show/hide based on an "Add variants" toggle.
- [x] 4.5 Remove `ThemeTemplateCard` from the right sidebar (not applicable to SAKEwinkel). Remove the Publishing card's channel pills (not applicable).

## 5. Product Form Layout & Logic

- [x] 5.1 Update `/apps/admin/src/routes/_auth/products/new.tsx` — add `productType` state (default: "Physical"). Wire ProductTypeCard at top. Conditionally render cards: ShippingCard (Physical only), InventoryCard (Physical + Voucher), VoucherDetailsCard (Voucher only), ClickthroughCard (Clickthrough only). Always show: ProductTypeCard, TitleDescriptionCard, PriceCard, CommissionCard, VariantsCard, SeoCard.
- [x] 5.2 Update right sidebar ordering: StatusCard, SchedulingCard, ProductOrganizationCard (remove PublishingCard, ThemeTemplateCard).

## 6. Product List Page

- [x] 6.1 Update `ProductsDataTable` — change columns to: Thumbnail + Name, Type badge (Physical/Voucher/Clickthrough), Status badge (Draft/Unlisted/Active), Original Price (with sale price shown struck-through if different), Stock, Supplier name. Remove "Category" and "Channels" columns.
- [x] 6.2 Update `ProductsTabBar` — change tabs to: All, Active, Unlisted, Draft (remove Archived).
- [x] 6.3 Update product search to search by name and supplier name (instead of name and category).

## 7. Supplier Pages

- [x] 7.1 Update `SuppliersDataTable` — change columns to: Trading Name, Legal Name, Primary Contact (first + last), Email, Phone, Province, Status badge (Active/Inactive), Products count. Remove the City column.
- [x] 7.2 Update `SuppliersTabBar` — change tabs to: All, Active, Inactive (remove Pending).
- [x] 7.3 Update supplier form cards in `/suppliers/new.tsx` and `/suppliers/$supplierId.tsx`: rename CompanyDetailsCard fields to Legal Name + Trading Name + Business Type dropdown + Short Description textarea + Website URL. Update LegalComplianceCard to Identification Type dropdown + Identification Number + VAT registered toggle + VAT number. Add BankingDetailsCard with Bank Name, Account Type (Cheque/Savings), Account Number, Branch Code. Update ContactPersonCard to show primary contact fields and support rendering additional contacts. Update BusinessAddressCard to use SA provinces (Gauteng, Western Cape, etc.) instead of generic countries.
- [x] 7.4 Update supplier search to match against trading name, legal name, and primary contact email.
