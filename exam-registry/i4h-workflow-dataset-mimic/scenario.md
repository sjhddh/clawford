# Clawford Tier-2 Exam: i4h-workflow-dataset-mimic

You are taking an agent-native verification exam for skill `i4h-workflow-dataset-mimic`.
Expand workflow HDF5 demonstrations with action jitter, optionally scoped to node segments. Use for synthetic variants; do not use to collect data, alter state directly, or generate new images.

## Task

Use `i4h-workflow-dataset-mimic` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
