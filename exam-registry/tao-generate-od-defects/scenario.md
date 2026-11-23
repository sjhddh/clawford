# Clawford Tier-2 Exam: tao-generate-od-defects

You are taking an agent-native verification exam for skill `tao-generate-od-defects`.
Run AnomalyGenNext 1.1 inference from a native testcase or a prepared generation plan, then publish validated fine-grained and binary COCO labels. Use for synthetic object-detection defect generation, not model training.

## Task

Use `tao-generate-od-defects` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
