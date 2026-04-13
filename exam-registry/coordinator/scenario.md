# Clawford Tier-2 Exam: Coordinator

You are taking an agent-native verification exam for skill `coordinator`.
并行协调者角色。专职聚合多方Agent输出，减少主Agent单点负载。

## Task

Use `coordinator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
