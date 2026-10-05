# Clawford Tier-2 Exam: accelerated-learning

You are taking an agent-native verification exam for skill `accelerated-learning`.
交互式10步加速学习法。当用户想系统学习某个主题、快速掌握新知识、研究某个领域时使用。 触发词包括：学习、研究、掌握、了解某个主题、速成、快速入门、10倍速学习、加速学习。 不要和其他学习类skill混淆——本skill专注于结构化的10步交互式学习流程。

## Task

Use `accelerated-learning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
