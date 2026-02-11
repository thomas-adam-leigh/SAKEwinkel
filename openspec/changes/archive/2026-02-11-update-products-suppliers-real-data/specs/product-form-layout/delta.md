## MODIFIED Requirements

### Requirement: Product type card at top of form
The ProductTypeCard is the first card in the left column, before the title/description card.

#### Scenario: Card ordering with product type
- **WHEN** the /products/new page renders
- **THEN** the left column card order is: ProductTypeCard, TitleDescriptionCard, PriceCard, CommissionCard, [conditional: InventoryCard], [conditional: ShippingCard], [conditional: VoucherDetailsCard], [conditional: ClickthroughCard], VariantsCard, SeoCard

### Requirement: Right sidebar includes scheduling
The right sidebar adds a SchedulingCard between StatusCard and PublishingCard.

#### Scenario: Right sidebar card order
- **WHEN** the product form renders the right sidebar
- **THEN** the card order is: StatusCard, SchedulingCard, PublishingCard, ProductOrganizationCard

### Requirement: Conditional section visibility
Form cards show/hide based on the selected product type.

#### Scenario: Physical product layout
- **WHEN** product type is "Physical"
- **THEN** InventoryCard, ShippingCard are visible; VoucherDetailsCard, ClickthroughCard are hidden

#### Scenario: Voucher product layout
- **WHEN** product type is "Voucher"
- **THEN** InventoryCard, VoucherDetailsCard are visible; ShippingCard, ClickthroughCard are hidden

#### Scenario: Clickthrough product layout
- **WHEN** product type is "Clickthrough"
- **THEN** ClickthroughCard is visible; InventoryCard, ShippingCard, VoucherDetailsCard are hidden
