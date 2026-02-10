## ADDED Requirements

### Requirement: Field label styling
Form field labels SHALL use font-size 13px, font-weight 450, color `#303030`, line-height 20px, and margin-bottom 4px.

#### Scenario: Field label renders with correct typography
- **WHEN** a form field label is rendered
- **THEN** it displays at 13px, font-weight 450, color `#303030`, with 4px bottom margin

### Requirement: Price input with currency prefix
The price input SHALL be a text input wrapper containing a "R " currency prefix on the left (font-size 13px, font-weight 450, color `#303030`, padding-left 12px) and a number input field. The wrapper SHALL match standard input styling (border `1px solid #8a8a8a`, border-radius 8px, background `#fdfdfd`, height 32px). The inner input SHALL have no left padding (the prefix occupies that space).

#### Scenario: Price input renders with R prefix
- **WHEN** a price input is rendered
- **THEN** the "R " prefix is displayed inside the input wrapper, left-aligned, followed by the number input

#### Scenario: Price input accepts numeric values
- **WHEN** the user types "199.99" into the price input
- **THEN** the value "199.99" is displayed after the "R " prefix

### Requirement: Combobox autocomplete field
The combobox field SHALL have the same border, radius, background, and height as a standard text input. It SHALL display a dropdown chevron icon on the right side. Placeholder text SHALL use the muted color (`#8a8a8a`).

#### Scenario: Combobox renders with chevron icon
- **WHEN** a combobox field is rendered
- **THEN** it displays an input with a chevron icon on the right and the standard input border styling

### Requirement: Select dropdown field
The select dropdown SHALL have border `1px solid #8a8a8a`, border-radius 8px, background `#fdfdfd`, height 32px, font-size 13px, and padding `6px 12px`. A chevron icon SHALL appear on the right.

#### Scenario: Select dropdown renders with correct styling
- **WHEN** a select dropdown is rendered (e.g., weight unit selector)
- **THEN** it displays with the standard input border, radius, and a chevron icon

#### Scenario: Select dropdown allows option selection
- **WHEN** the user opens the weight unit select and clicks "g"
- **THEN** the select displays "g" as the selected value

### Requirement: Toggle switch
The toggle switch SHALL be 36px wide, 20px tall, with border-radius 9999px (fully rounded). In ON state: background `#303030`, white knob on the right. In OFF state: background `#b5b5b5`, white knob on the left. The transition between states SHALL be a smooth slide animation.

#### Scenario: Toggle renders in ON state
- **WHEN** a toggle switch is rendered in the ON state (e.g., "Inventory tracked")
- **THEN** it displays with dark background (`#303030`) and the white knob positioned on the right

#### Scenario: Toggle renders in OFF state
- **WHEN** a toggle switch is clicked to turn OFF
- **THEN** the background changes to `#b5b5b5` and the knob slides smoothly to the left

### Requirement: Checkbox
The checkbox SHALL be 16×16px with border `1px solid #8a8a8a` and border-radius 4px. When checked, the background SHALL be `#303030` with a white checkmark icon.

#### Scenario: Checkbox renders in unchecked state
- **WHEN** a checkbox is rendered unchecked
- **THEN** it displays as a 16×16px box with gray border and no fill

#### Scenario: Checkbox renders in checked state
- **WHEN** a checkbox is clicked to check
- **THEN** the background changes to `#303030` and a white checkmark icon appears

### Requirement: Spinbutton quantity input
The spinbutton SHALL be a number input with increment/decrement controls. It SHALL have border `1px solid #8a8a8a`, border-radius 8px, background `#fdfdfd`, height 32px, font-size 13px, padding `6px 12px`, and right-aligned text. Spinner arrow buttons SHALL appear on the right side.

#### Scenario: Spinbutton renders with increment/decrement controls
- **WHEN** a spinbutton is rendered (e.g., inventory quantity)
- **THEN** a right-aligned number input with up/down arrow controls is displayed

#### Scenario: Spinbutton increments value
- **WHEN** the user clicks the increment arrow on a spinbutton with value "0"
- **THEN** the value changes to "1"

### Requirement: Expandable option buttons
Expandable option buttons SHALL have transparent background, color `#303030`, font-size 13px, font-weight 400, padding `4px 8px`, border-radius 8px, height 28px, and no border. Each button SHALL display a "+" icon. On hover, the background SHALL change to `rgba(0,0,0,0.05)`. Buttons SHALL be arranged horizontally in a flex-wrap row. When clicked, the button SHALL disappear and the corresponding form field SHALL be revealed.

#### Scenario: Expandable option button renders with plus icon
- **WHEN** an expandable option button is rendered (e.g., "Compare at")
- **THEN** it displays as a transparent button with "+" icon and the label text

#### Scenario: Expandable option button hover state
- **WHEN** the user hovers over an expandable option button
- **THEN** the button background changes to `rgba(0,0,0,0.05)`

#### Scenario: Clicking expandable option reveals field and hides button
- **WHEN** the user clicks the "SKU" expandable option button
- **THEN** the "SKU" button disappears and a "SKU" text input field is revealed in its place

### Requirement: Helper text styling
Helper/description text below form fields SHALL use font-size 12px, font-weight 450, color `#616161`, line-height 16px, and margin-top 4px.

#### Scenario: Helper text renders below a field
- **WHEN** helper text is associated with a form field (e.g., category helper text)
- **THEN** it displays below the field at 12px, color `#616161`, with 4px top margin

### Requirement: Media drop zone
The media drop zone SHALL display a dashed-border area with border `1px dashed #c0c0c0`, border-radius 8px, padding 16px, centered text, and background `#f7f7f7`. It SHALL contain "Upload new" and "Select existing" buttons and the helper text "Accepts images, videos, or 3D models". The drop zone is visual only — no upload functionality.

#### Scenario: Media drop zone renders with upload buttons
- **WHEN** the media drop zone is rendered
- **THEN** a dashed-border area is displayed with "Upload new" and "Select existing" buttons and helper text

### Requirement: Channel pill/chip
Channel pills SHALL be inline-flex elements with padding `4px 8px`, border-radius 8px, font-size 13px, and background `#f1f1f1`. Each pill SHALL include an "x" remove button. Clicking the "x" SHALL remove the pill from the display.

#### Scenario: Channel pill renders with remove button
- **WHEN** a channel pill is rendered (e.g., "Online Store")
- **THEN** it displays as a rounded chip with the channel name and an "x" icon

#### Scenario: Channel pill removed on x click
- **WHEN** the user clicks the "x" on a channel pill
- **THEN** the pill is removed from the display

### Requirement: Quantity table styling
The quantity table header row SHALL use font-size 12px, font-weight 550, color `#616161`, padding `8px 0`, and border-bottom `1px solid #e3e3e3`. Table data rows SHALL use font-size 13px, color `#303030`, padding `8px 0`, with `display: flex; justify-content: space-between; align-items: center`.

#### Scenario: Quantity table renders with header and data row
- **WHEN** the quantity table is rendered
- **THEN** a header row with "Quantity" label and a data row with "Shop location" text and spinbutton input are displayed with correct styling
