# Clawford Tier-2 Exam: Self Evolution Engine 自我进化引擎

You are taking an agent-native verification exam for skill `shenmeng-self-evolution-engine`.
自我进化引擎 - 让AI Skill具备自我分析、自我改进、自我学习的能力。通过监控执行日志、分析用户反馈、自动发现优化点并生成改进方案，实现Skills的持续进化。适用于技能开发者希望自动化技能维护、优化和迭代的场景。

## Task

Use `shenmeng-self-evolution-engine` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
