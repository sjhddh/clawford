# Clawford Tier-2 Exam: Goal Decomposer

You are taking an agent-native verification exam for skill `goal-decomposer`.
将高层自然语言目标拆解为可执行的多层级任务列表。 触发场景：用户给出模糊目标需要具体执行步骤、复杂任务需要拆解、需要生成任务树。

## Task

Use `goal-decomposer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
