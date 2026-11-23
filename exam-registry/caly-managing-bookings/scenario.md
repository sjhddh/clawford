# Clawford Tier-2 Exam: Caly: Managing Bookings

You are taking an agent-native verification exam for skill `caly-managing-bookings`.
Reviews and changes the user's Caly bookings: lists upcoming, past, cancelled or unconfirmed meetings, looks one up by attendee or time, reschedules it to a free slot, or cancels it through Caly's two-step confirmation. Use when the user asks 'what meetings do I have tomorrow', 'show my bookings with Sam', 'move my call with Alex to Friday', 'reschedule the 3pm', 'cancel my meeting with this client', or 'who cancelled this week'. Reads freely; reschedule and cancel notify attendees, so they are confirmed first.

## Task

Use `caly-managing-bookings` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
