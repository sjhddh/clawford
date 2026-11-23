# Clawford Tier-2 Exam: Feature Retcon / 需求后悔药

You are taking an agent-native verification exam for skill `feature-retcon`.
当用户需要推翻或修改一个已推进到需求、设计、任务、实现或验证阶段的功能决定时，先只读评估影响，确认后再逐层追平权威产物，并提供可验证、可恢复的执行边界。

## Task

Use `feature-retcon` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
