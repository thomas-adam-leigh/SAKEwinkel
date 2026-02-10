## ADDED Requirements

### Requirement: Sidebar displays named sections
The sidebar SHALL organize nav items into named sections: **Operations**, **Insights**, **Growth**, and **Configuration**. Each section SHALL display a section header label followed by its child nav items. Home SHALL remain as a standalone item at the top, outside any section.

#### Scenario: Sidebar renders all sections in order
- **WHEN** the sidebar renders
- **THEN** the sections appear in this order: Home (standalone), Operations, Insights, Growth, Configuration

#### Scenario: Operations section contains commerce items
- **WHEN** the sidebar renders
- **THEN** the Operations section displays: Orders, Products, Suppliers, Customers — in that order

#### Scenario: Insights section contains analytics items
- **WHEN** the sidebar renders
- **THEN** the Insights section displays: Analytics, Reports — in that order

#### Scenario: Growth section contains future feature items
- **WHEN** the sidebar renders
- **THEN** the Growth section displays: Marketing, Content — in that order

#### Scenario: Configuration section contains set-once items
- **WHEN** the sidebar renders
- **THEN** the Configuration section displays: Legal, Email Templates — in that order

### Requirement: Section headers are static labels
Section headers SHALL display the section name as a non-interactive label. They SHALL NOT have collapse/expand toggles or chevrons. All section children SHALL always be visible.

#### Scenario: Section header is not clickable
- **WHEN** the user views the sidebar
- **THEN** section headers (Operations, Insights, Growth, Configuration) are plain text labels without any toggle button or chevron

### Requirement: Section header styling
Section headers SHALL have height 28px, padding `4px 3px 4px 8px`, font-size 12px, font-weight 600, color `#616161`, text-transform uppercase, letter-spacing 0.5px. There SHALL be 8px margin-top before each section (except after Home, which has 4px).

#### Scenario: Section header renders with correct styling
- **WHEN** the sidebar renders
- **THEN** each section header displays as an uppercase, muted-color label above its nav items

### Requirement: No Sales channels, Apps, or Settings sections
The sidebar SHALL NOT display the "Sales channels" section, the "Apps" section, or the pinned "Settings" link at the bottom.

#### Scenario: Removed sections are not rendered
- **WHEN** the sidebar renders
- **THEN** there is no "Sales channels" section, no "Apps" section, and no "Settings" link
