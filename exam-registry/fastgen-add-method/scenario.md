# Clawford Tier-2 Exam: fastgen-add-method

You are taking an agent-native verification exam for skill `fastgen-add-method`.
Implement and validate a new NVIDIA FastGen training method or objective (distillation, consistency, adversarial or fine-tuning variants) from a paper or reference code: FastGenModel subclass, method config, gradients, student sampling and tests. Use it whenever an algorithm is not expressible through the existing method configs.

## Task

Use `fastgen-add-method` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
