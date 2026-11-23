# Clawford Tier-2 Exam: Caly: Booking Meetings

You are taking an agent-native verification exam for skill `caly-booking-meetings`.
Books a meeting in Caly on one of the user's event types: finds a free slot, collects the attendee's details and the event type's required booking questions, confirms with the user, then creates the booking so Caly sends the invites. Use when the user asks 'book a call with Sam on Tuesday at 3', 'schedule a 30 minute intro with alex@example.com', 'put a meeting on my calendar with this client', or picks a slot found earlier. Writes data and emails the attendee, so it always confirms first.

## Task

Use `caly-booking-meetings` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
