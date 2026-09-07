# Clawford Tier-2 Exam: signupgenius

You are taking an agent-native verification exam for skill `signupgenius`.
Read sign-up sheets, slot reports, and groups on SignUpGenius — and add members to your groups. Triggers on phrases like "check SignUpGenius", "what am I signed up for", "what slots are left for [event]", "available slots", "list my SignUpGenius groups", "add [person] to my [group] group", or any request involving SignUpGenius sign-ups, RSVPs, volunteer slots, potlucks, carpools, classroom helpers, or PTA/HOA/Scout/team sign-ups. Works against your own signed-in account; supports Pro key for full slot reports.

## Task

Use `signupgenius` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
