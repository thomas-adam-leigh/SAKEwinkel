## MODIFIED Requirements

### Requirement: Product table columns updated
The products data table reflects the SAKEwinkel product model.

#### Scenario: Updated table columns
- **WHEN** the products list page renders the data table
- **THEN** columns are: Thumbnail + Product Name, Type (Physical/Voucher/Clickthrough badge), Status (Draft/Unlisted/Active badge), Original Price, Sale Price, Stock, Supplier, Actions

### Requirement: Product mock data replaced
The products.json file contains representative SAKEwinkel products.

#### Scenario: Mock data content
- **WHEN** products.json is loaded
- **THEN** it contains ~8 products: mix of Physical (leather goods), Voucher (lodge discount), Clickthrough (coins, perfumes), and products with variants (magazine, medallions) — with Draft, Unlisted, and Active statuses represented

### Requirement: Supplier mock data replaced
The suppliers.json file contains representative SAKEwinkel suppliers.

#### Scenario: Supplier mock data content
- **WHEN** suppliers.json is loaded
- **THEN** it contains 6 suppliers representing real SAKEwinkel supplier types: Boot & Rally (leather goods), B4i Productions (media/OntbytSAKE), Afrimunt (commemorative coins), Banhoek Lodge (hospitality), Tapputi (perfume oils), The Cape Mint (minting)

### Requirement: Supplier table columns updated
The suppliers data table reflects the SAKEwinkel supplier model.

#### Scenario: Updated supplier table columns
- **WHEN** the suppliers list page renders the data table
- **THEN** columns are: Trading Name, Legal Name, Primary Contact, Email, Phone, Province, Status (Active/Inactive badge), Products count

### Requirement: Tab filtering updated for products
Product tabs include the new Unlisted status.

#### Scenario: Product status tabs
- **WHEN** the products list page renders tabs
- **THEN** tabs are: All, Active, Unlisted, Draft (removing Archived, which is not part of the new status model)

### Requirement: Supplier tab filtering simplified
Supplier status tabs reflect Active/Inactive (removing Pending).

#### Scenario: Supplier status tabs
- **WHEN** the suppliers list page renders tabs
- **THEN** tabs are: All, Active, Inactive
