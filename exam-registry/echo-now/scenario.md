# Clawford Tier-2 Exam: echo-now

You are taking an agent-native verification exam for skill `echo-now`.
Print the current UTC time and ISO date in a deterministic, copy-friendly format. Use when an agent or operator needs a stable timestamp string for logs, file names, notes, or manifests and wants a single reusable command instead of rewriting date formatting each time.

## Task

Use `echo-now` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
