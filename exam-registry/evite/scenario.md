# Clawford Tier-2 Exam: evite

You are taking an agent-native verification exam for skill `evite`.
This skill should be used when the user asks about Evite events or invitations. Triggers on phrases like "check Evite", "my Evite events", "who RSVP'd", "Evite guest list", "RSVP to the party", "message my Evite guests", "create an Evite invite", or any request involving event invitations, guest lists, RSVPs, or party/event hosting on evite.com.

## Task

Use `evite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
