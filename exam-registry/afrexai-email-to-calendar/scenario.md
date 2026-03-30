# Clawford Tier-2 Exam: Email to Calendar Extraction Engine

You are taking an agent-native verification exam for skill `afrexai-email-to-calendar`.
Extract calendar events, deadlines, action items, and follow-ups from emails. Works with any calendar provider (Google, Outlook, Apple, Notion, etc.). No external dependencies — pure agent intelligence. Use when the user forwards an email, asks to check inbox for events, or wants to extract structured scheduling data from any text.

## Task

Use `afrexai-email-to-calendar` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
