## ADDED Requirements

### Requirement: Coming Soon pill badge on nav items
Nav items marked as "coming soon" SHALL display a pill-shaped badge with text "Coming soon" to the right of the label. The pill SHALL have font-size 11px, font-weight 550, padding 1px 6px, border-radius 9999px, background `#e4e4e4`, and color `#616161`.

#### Scenario: Reports nav item shows Coming Soon pill
- **WHEN** the sidebar renders
- **THEN** the "Reports" nav item displays the label "Reports" followed by a "Coming soon" pill badge

#### Scenario: Marketing nav item shows Coming Soon pill
- **WHEN** the sidebar renders
- **THEN** the "Marketing" nav item displays the label "Marketing" followed by a "Coming soon" pill badge

#### Scenario: Content nav item shows Coming Soon pill
- **WHEN** the sidebar renders
- **THEN** the "Content" nav item displays the label "Content" followed by a "Coming soon" pill badge

### Requirement: Non-navigable coming-soon items
Nav items marked as "coming soon" that do not have a corresponding route SHALL render as a non-interactive element (not a `<Link>`). They SHALL use `cursor-default` and SHALL NOT show hover background. Specifically, Marketing and Content SHALL be non-navigable.

#### Scenario: Clicking Marketing does nothing
- **WHEN** the user clicks on the "Marketing" nav item
- **THEN** no navigation occurs and the URL does not change

#### Scenario: Clicking Content does nothing
- **WHEN** the user clicks on the "Content" nav item
- **THEN** no navigation occurs and the URL does not change

### Requirement: Navigable coming-soon items
Nav items marked as "coming soon" that DO have a corresponding route SHALL render as a `<Link>` and navigate normally. Specifically, Reports SHALL navigate to `/reports`.

#### Scenario: Clicking Reports navigates to /reports
- **WHEN** the user clicks on the "Reports" nav item
- **THEN** the browser navigates to `/reports`
