## ADDED Requirements

### Requirement: Product preview card
The home page SHALL display a product preview card using `AdminCard` styling (white background, 12px border-radius, shadow-100). The card SHALL contain a centered product image thumbnail, the product name, the product price (formatted with currency symbol), and a status line reading "Product added" with a green checkmark icon. Below the product info, a "Find products" secondary-style button SHALL be displayed with white background, `#303030` text, 13px font-size, font-weight 450, 8px border-radius, and 32px height.

#### Scenario: Product card renders with mock data
- **WHEN** the home page loads
- **THEN** a product card displays with an image thumbnail, product name, price, and "Product added" status from mock data

#### Scenario: Find products button renders
- **WHEN** the product preview card renders
- **THEN** a "Find products" button is visible below the product information, styled as a secondary button

### Requirement: Design your store setup card
The home page SHALL display a "Design your store" setup card. The card SHALL contain an H3 heading "Design your store", descriptive text, a text input for business description, a "Generate" primary button (dark brand-fill style using `AdminButton` primary variant), and a text link "browse pre-designed themes".

#### Scenario: Design store card renders with input and generate button
- **WHEN** the home page loads
- **THEN** a card titled "Design your store" is visible with a text input, a dark "Generate" button, and a "browse pre-designed themes" link

#### Scenario: Generate button does not submit
- **WHEN** the user types in the business description input and clicks "Generate"
- **THEN** nothing happens — the button is UI-only with no side effects

### Requirement: Payment provider setup card
The home page SHALL display a "Set up a payment provider" setup card. The card SHALL contain the heading text, payment method icons (PayPal, Visa, Mastercard displayed as static icon representations), and an "Activate" action link/button.

#### Scenario: Payment card renders with icons
- **WHEN** the home page loads
- **THEN** a card titled "Set up a payment provider" is visible with payment method icons and an "Activate" action

### Requirement: Shipping rates setup card
The home page SHALL display a "Review your shipping rates" setup card. The card SHALL contain the heading text, a "Domestic" label indicating the shipping scope, and a "Review" action link/button.

#### Scenario: Shipping card renders with domestic label
- **WHEN** the home page loads
- **THEN** a card titled "Review your shipping rates" is visible with a "Domestic" label and a "Review" action

### Requirement: Domain setup card
The home page SHALL display a "Domain customized" setup card. The card SHALL contain the heading text, the store's myshopify.com domain from mock data, a "Get $20" promotional tag, and a "Buy a domain" button.

#### Scenario: Domain card renders with store domain
- **WHEN** the home page loads
- **THEN** a card titled "Domain customized" is visible showing the store domain, a "Get $20" tag, and a "Buy a domain" button

### Requirement: Educational content card
The home page SHALL display an educational content card with heading "Learn the basics of dropshipping" (H2 level), a descriptive paragraph, a "Watch video" button, and a "Learn more" text link. The card SHALL use `AdminCard` styling.

#### Scenario: Educational card renders with video CTA
- **WHEN** the home page loads
- **THEN** a card titled "Learn the basics of dropshipping" is visible with descriptive text, a "Watch video" button, and a "Learn more" link

### Requirement: Setup cards vertical layout
All setup cards (product preview, design store, payment provider, shipping rates, domain, educational content) SHALL render in a vertical stack within the main content area, each as a separate `AdminCard`. The cards SHALL appear below the store name header section.

#### Scenario: Cards render in vertical order
- **WHEN** the home page loads
- **THEN** the cards appear in order: product preview, design your store, payment provider, shipping rates, domain, educational content — stacked vertically with consistent spacing
