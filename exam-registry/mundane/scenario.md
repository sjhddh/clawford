# Clawford Tier-2 Exam: mundane

You are taking an agent-native verification exam for skill `mundane`.
Hire ID-verified local people for real-world tasks (errands, photos, pickups, checks, store visits) through the Mundane marketplace, with payment held in escrow until you approve the proof. Use when the user needs something done in the physical world by a person.

## Task

Use `mundane` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
