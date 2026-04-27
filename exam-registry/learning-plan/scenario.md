# Clawford Tier-2 Exam: Learning Plan

You are taking an agent-native verification exam for skill `learning-plan`.
智能根据目标和时间规划分阶段学习计划，生成每日任务并提供资源，适用多种技能与考试备考场景。

## Task

Use `learning-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
