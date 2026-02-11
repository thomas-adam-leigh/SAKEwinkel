## MODIFIED Requirements

### Requirement: Top bar internal layout
The top bar SHALL use a CSS grid with three columns: left (logo), center (slots container), and right (icon buttons). Items SHALL be vertically centered within the 56px height. The center column SHALL contain a slots container that conditionally renders either a search bar or a contextual save bar, with animated transitions between them. The slots container SHALL use `overflow: clip` and be relatively positioned to contain both the search slot and the absolute-positioned save bar slot.

#### Scenario: Top bar left section displays logo
- **WHEN** the top bar renders
- **THEN** the left section displays a logo glyph (21×24px) and wordmark (62×20px) in white, with 20px left padding

#### Scenario: Top bar center section displays search placeholder by default
- **WHEN** the top bar renders with no unsaved changes
- **THEN** the center section displays a search bar with background `#303030`, border-radius 12px, height 36px, a magnifying glass icon, "Search" placeholder text in `#e3e3e3`, and keyboard shortcut badges (⌘ K)

#### Scenario: Top bar center section displays contextual save bar when dirty
- **WHEN** the top bar renders with unsaved changes present
- **THEN** the center section displays a contextual save bar with "Unsaved changes" message, Discard button, and Save button, replacing the search bar

#### Scenario: Top bar right section displays icon buttons
- **WHEN** the top bar renders
- **THEN** the right section displays notification bell icon button (36×36px, 12px border-radius), and a store switcher button with a 24px circular avatar and store name text
