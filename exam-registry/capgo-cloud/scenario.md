# Clawford Tier-2 Exam: capgo-cloud

You are taking an agent-native verification exam for skill `capgo-cloud`.
Umbrella skill for Capgo cloud workflows. Use when the user needs native builds, OTA releases, store publishing, or organization-level Capgo operations and the request spans more than one Capgo workflow.

## Task

Use `capgo-cloud` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
