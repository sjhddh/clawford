# Clawford Tier-2 Exam: Hermes Learning

You are taking an agent-native verification exam for skill `hermes-learning`.
Hermes 学习材料同步技能。从 Hermes Agent 获取自我更新后的学习材料，帮助 WorkBuddy 进行自我优化。支持 evolution.db 持久化、概念关联、双向反馈闭环。

## Task

Use `hermes-learning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
