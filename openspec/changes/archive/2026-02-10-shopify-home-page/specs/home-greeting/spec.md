## ADDED Requirements

### Requirement: Time-aware greeting message
The home page SHALL display a greeting message that changes based on the user's local time of day. The text SHALL follow the format "Good {period}, let's get started." where {period} is "morning" (before 12:00), "afternoon" (12:00–17:59), or "evening" (18:00+). The greeting SHALL be styled with font-size `18px`, font-weight `600`, color `#303030`, and line-height `20px`.

#### Scenario: Morning greeting
- **WHEN** the user visits the home page and local time is before 12:00
- **THEN** the greeting displays "Good morning, let's get started."

#### Scenario: Afternoon greeting
- **WHEN** the user visits the home page and local time is between 12:00 and 17:59
- **THEN** the greeting displays "Good afternoon, let's get started."

#### Scenario: Evening greeting
- **WHEN** the user visits the home page and local time is 18:00 or later
- **THEN** the greeting displays "Good evening, let's get started."

### Requirement: Support contact text
The greeting section SHALL display a right-aligned support contact text "Questions? 080 062 7837" on the same row as the greeting. The text SHALL use secondary text color (`#616161`) and font-size `13px`.

#### Scenario: Support text renders alongside greeting
- **WHEN** the home page loads
- **THEN** a support text "Questions? 080 062 7837" appears right-aligned on the same row as the greeting

### Requirement: Sidekick chat input shell
The home page SHALL display a chat input area below the greeting. The input SHALL be a multiline textarea with placeholder text "Ask anything...". The input container SHALL have rounded corners and contain two action elements: a "+" icon button (labeled "Add files and more") on the left side and a "Send" button on the right side. This component is UI-only and SHALL NOT submit or process any input.

#### Scenario: Chat input renders with placeholder
- **WHEN** the home page loads
- **THEN** a multiline textarea with placeholder "Ask anything..." is visible below the greeting

#### Scenario: Chat input has action buttons
- **WHEN** the chat input area renders
- **THEN** a "+" icon button and a "Send" button are visible within the input container

#### Scenario: Chat input does not submit
- **WHEN** the user types text and clicks "Send" or presses Enter
- **THEN** nothing happens — no network request, no state change, no visual feedback

### Requirement: Store name header
The home page SHALL display the store name as a heading below the chat input area. The store name SHALL be rendered from mock data. An edit (pencil) icon SHALL appear next to the store name as a clickable element. The store name heading SHALL use primary text color (`#303030`).

#### Scenario: Store name renders from mock data
- **WHEN** the home page loads
- **THEN** the store name from mock data is displayed as a heading

#### Scenario: Edit icon visible next to store name
- **WHEN** the store name heading renders
- **THEN** a pencil icon is visible adjacent to the store name text
