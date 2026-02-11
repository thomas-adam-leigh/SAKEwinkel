## ADDED Requirements

### Requirement: App shell renders three fixed zones
The authenticated layout SHALL render an app shell composed of three zones: a fixed top bar, a fixed sidebar, and a scrollable main content area. All authenticated routes SHALL render inside this shell.

#### Scenario: Authenticated user sees app shell
- **WHEN** an authenticated user navigates to any admin route
- **THEN** the page displays a fixed top bar at the top, a fixed sidebar on the left, and the route content in the main area

#### Scenario: Unauthenticated user does not see app shell
- **WHEN** an unauthenticated user accesses the app
- **THEN** they are redirected to the login page without seeing the app shell

### Requirement: Top bar dimensions and positioning
The top bar SHALL be fixed at the top of the viewport, span the full viewport width, have a height of 56px, a background color of `#1a1a1a`, and a z-index of 50.

#### Scenario: Top bar stays fixed on scroll
- **WHEN** the user scrolls the main content area
- **THEN** the top bar remains fixed at the top of the viewport

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

### Requirement: Sidebar dimensions and positioning
The sidebar SHALL be fixed, positioned below the top bar (top: 56px), on the left edge, 240px wide, filling the remaining viewport height (`calc(100vh - 56px)`), with background `#ebebeb`, overflow-y auto, and z-index 40.

#### Scenario: Sidebar stays fixed beside content
- **WHEN** the user scrolls the main content area
- **THEN** the sidebar remains fixed in position

#### Scenario: Sidebar scrolls independently when content overflows
- **WHEN** the sidebar contains more nav items than fit in the viewport
- **THEN** the sidebar scrolls independently of the main content area

### Requirement: Main content area positioning
The main content area SHALL have a left margin of 240px (sidebar width), top margin of 56px (top bar height), minimum height of `calc(100vh - 56px)`, and background `#f1f1f1`. The main content area SHALL be the only zone that scrolls vertically.

#### Scenario: Main content fills remaining space
- **WHEN** the app shell renders
- **THEN** the main content area fills all remaining viewport space after the top bar and sidebar

### Requirement: Polaris design tokens in Tailwind v4
The app SHALL define Polaris design tokens as CSS custom properties and map them via Tailwind v4's `@theme inline` block. Tokens SHALL include: background colors, text colors, border colors, icon colors, sidebar colors, spacing scale, font sizes with line heights, font weights, border radii, and box shadows as defined in the infrastructure specification.

#### Scenario: Polaris color utilities are available
- **WHEN** a component uses a Tailwind class like `bg-bg-page` or `text-text-primary`
- **THEN** the correct Polaris hex color is applied

#### Scenario: Polaris spacing utilities are available
- **WHEN** a component uses a Tailwind class like `p-polaris-400`
- **THEN** the correct spacing value (1rem / 16px) is applied

### Requirement: Inter font family
The app SHALL load the Inter font from Google Fonts and configure the font-sans family to use Inter as the primary typeface, followed by system font fallbacks.

#### Scenario: Inter font loads and applies
- **WHEN** the app renders
- **THEN** all text uses the Inter font family
