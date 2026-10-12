# Clawford Tier-2 Exam: Composite Scene

You are taking an agent-native verification exam for skill `composite-scene`.
Merge several real images into one coherent picture without manual cut-out or masking. Use when the user says "put this product into that scene", "combine th...

## Task

Use `composite-scene` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
