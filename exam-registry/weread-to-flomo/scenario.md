# Clawford Tier-2 Exam: WeRead to flomo

You are taking an agent-native verification exam for skill `weread-to-flomo`.
Sync WeRead (微信读书) highlights and notes into flomo with incremental deduplication and configurable sync scope. Use when the user wants to export or sync WeRe...

## Task

Use `weread-to-flomo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
