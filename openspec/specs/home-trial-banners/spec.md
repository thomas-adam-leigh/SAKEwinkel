## ADDED Requirements

### Requirement: Top trial banner
The home page SHALL display a dismissible trial banner at the very top of the main content area (above the greeting). The banner SHALL have white background (`#ffffff`), rounded corners, and shadow-100 styling matching `AdminCard`. It SHALL contain the promotional text "Get 3 months for $1/month", a "Select a plan" CTA styled as a text link, and a dismiss button (X icon) on the right side.

#### Scenario: Trial banner renders at top of content
- **WHEN** the home page loads for the first time in a session
- **THEN** a trial banner with text "Get 3 months for $1/month" and a "Select a plan" link is visible at the top of the content area

#### Scenario: Trial banner dismiss button
- **WHEN** the user clicks the X dismiss button on the trial banner
- **THEN** the banner is removed from the page and the content below shifts up

#### Scenario: Trial banner state resets on reload
- **WHEN** the user dismisses the banner and then reloads the page
- **THEN** the trial banner reappears (dismiss state is not persisted)

### Requirement: Bottom floating trial bar
The home page SHALL display a fixed-position floating trial bar at the bottom-right corner of the viewport. The bar SHALL be positioned with `position: fixed`, `bottom: 16px`, `right: 16px`. It SHALL have background `#1a1a1a`, height `44px`, border-radius `8px`, box-shadow `0 0 3px rgba(0,0,0,0.1), 0 4px 20px rgba(0,0,0,0.15)`, padding `6px 12px`, and white text (`#ffffff`). The bar SHALL display the text "3 days left in your trial". The z-index SHALL be `30` to sit below TopBar (50) and Sidebar (40) but above page content.

#### Scenario: Floating trial bar renders in fixed position
- **WHEN** the home page loads
- **THEN** a dark floating bar with text "3 days left in your trial" is visible at the bottom-right corner of the viewport

#### Scenario: Floating trial bar stays fixed on scroll
- **WHEN** the user scrolls the main content area
- **THEN** the floating trial bar remains fixed at bottom-right and does not scroll with page content

#### Scenario: Floating trial bar layering
- **WHEN** the floating trial bar renders
- **THEN** it appears above the main content but below the TopBar and Sidebar
