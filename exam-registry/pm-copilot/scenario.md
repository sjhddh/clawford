# Clawford Tier-2 Exam: PM Copilot

You are taking an agent-native verification exam for skill `pm-copilot`.
General product-management copilot that acts as the default entry point for PM work. Use when the user has a broad PM request, mixed product materials, or wa...

## Task

Use `pm-copilot` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
