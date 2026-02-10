## ADDED Requirements

### Requirement: Primary button variant
The primary button SHALL have background `#303030`, color `#ffffff`, font-size 13px, font-weight 450, padding `6px 12px`, border-radius 8px, height 28px, and the Polaris primary button box shadow. On hover, background SHALL change to `#1a1a1a`.

#### Scenario: Primary button renders with correct styling
- **WHEN** a primary button is rendered
- **THEN** it displays with dark background, white text, 8px border-radius, and Polaris inset shadow

#### Scenario: Primary button hover state
- **WHEN** the user hovers over a primary button
- **THEN** the background changes to `#1a1a1a`

### Requirement: Secondary button variant
The secondary button SHALL have background `#ffffff`, color `#303030`, font-size 13px, font-weight 450, padding `6px 12px`, border-radius 8px, height 28px, and the Polaris secondary button box shadow.

#### Scenario: Secondary button renders with correct styling
- **WHEN** a secondary button is rendered
- **THEN** it displays with white background, dark text, and Polaris secondary inset shadow

### Requirement: Tertiary button variant
The tertiary button SHALL have background `#e3e3e3`, color `#303030`, font-size 13px, font-weight 450, padding `4px 12px`, border-radius 8px, height 28px, and no box shadow.

#### Scenario: Tertiary button renders with correct styling
- **WHEN** a tertiary button is rendered
- **THEN** it displays with light gray background, dark text, and no shadow

### Requirement: Ghost button variant
The ghost button SHALL have transparent background, color `#303030`, font-size 12px, font-weight 550, no padding, no border. On hover, text SHALL be underlined.

#### Scenario: Ghost button renders as text-only
- **WHEN** a ghost button is rendered
- **THEN** it displays as plain text with no background or border

#### Scenario: Ghost button underlines on hover
- **WHEN** the user hovers over a ghost button
- **THEN** the text becomes underlined

### Requirement: Card component
The card component SHALL have background `#ffffff`, border-radius 12px, and the Polaris shadow-100 box shadow. It SHALL have no visible border — the shadow's outer ring acts as the border.

#### Scenario: Card renders with Polaris styling
- **WHEN** a card is rendered
- **THEN** it displays with white background, 12px border-radius, and the Polaris-100 shadow

### Requirement: Input field component
The input field wrapper SHALL have border `1px solid #8a8a8a`, border-radius 8px, background `#fdfdfd`, and height 32px. The inner input SHALL have font-size 13px, color `#303030`, padding `6px 12px`, transparent background, no border. On focus, the wrapper border SHALL change to `#303030` with a blue focus ring (`0 0 0 2px #005bd3`).

#### Scenario: Input renders with Polaris styling
- **WHEN** an input field is rendered
- **THEN** it displays with the gray border, light background, and 32px height

#### Scenario: Input focus state shows blue ring
- **WHEN** the user focuses an input field
- **THEN** the border color changes to `#303030` and a blue focus ring appears

### Requirement: Page header component
The page header SHALL display an H1 with font-size 18px, font-weight 600, color `#303030`, line-height 24px. It SHALL include a back arrow icon to the left for breadcrumb-style navigation.

#### Scenario: Page header renders with title
- **WHEN** a page renders with a title of "Products"
- **THEN** an H1 displays "Products" with the specified typography and a back arrow icon

#### Scenario: Back arrow navigates to parent
- **WHEN** the user clicks the back arrow on the Products page
- **THEN** navigation goes back to the previous page or parent route
