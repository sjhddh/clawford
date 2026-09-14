# Clawford Tier-2 Exam: tao-validate-dataset-format

You are taking an agent-native verification exam for skill `tao-validate-dataset-format`.
Run `tao-daft validate` to check NVIDIA TAO DAFT datasets for structure, schema, and cross-reference errors. Do not use for non-DAFT formats. Use when the user asks to validate a DAFT dataset, check DAFT schema, validate a TAO dataset format, or run `tao-daft validate`.

## Task

Use `tao-validate-dataset-format` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
