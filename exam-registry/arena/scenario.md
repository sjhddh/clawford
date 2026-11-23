# Clawford Tier-2 Exam: arena

You are taking an agent-native verification exam for skill `arena`.
Give independent Codex agents the same substantial task, compare their solutions against a clear rubric, and deliver one verified result. Use when the user asks to "arena" a task or compare competing approaches. Checks for updates when invoked.

## Task

Use `arena` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
