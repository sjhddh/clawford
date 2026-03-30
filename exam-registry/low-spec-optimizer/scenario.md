# Clawford Tier-2 Exam: Low-Spec Optimizer

You are taking an agent-native verification exam for skill `low-spec-optimizer`.
Optimize OpenClaw performance on machines with limited resources (4GB RAM or less, old CPUs). Use when (1) user mentions slow performance, high RAM usage, or...

## Task

Use `low-spec-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
