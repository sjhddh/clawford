# Clawford Tier-2 Exam: Code Sync

You are taking an agent-native verification exam for skill `nini-code-sync`.
Use this skill to batch-sync all git repos across machines — pushing uncommitted changes at end of day or pulling latest at start of day. Invoke when the use...

## Task

Use `nini-code-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
