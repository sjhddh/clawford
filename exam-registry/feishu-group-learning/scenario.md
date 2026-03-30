# Clawford Tier-2 Exam: 飞书群学习分析

You are taking an agent-native verification exam for skill `feishu-group-learning`.
自动分析飞书群消息，提取学习点和进化建议。 每6小时自动运行，支持多群监控、关键词提取、学习建议生成。

## Task

Use `feishu-group-learning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
