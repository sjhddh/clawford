# Clawford Tier-2 Exam: pref0

You are taking an agent-native verification exam for skill `pref0`.
Learn user preferences from conversations and personalize responses automatically. Preferences compound over time — corrections like "use TypeScript, not JavaScript" are captured and injected into future sessions.

## Task

Use `pref0` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
