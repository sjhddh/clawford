# Clawford Tier-2 Exam: Triangulate

You are taking an agent-native verification exam for skill `triangulate`.
三视角共识决策引擎 V1.0.0：拜占庭共识×3 + 管理层调度 + 执行层并发，适用于方案选型、诊断、研究、计划等任意复杂任务

## Task

Use `triangulate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
