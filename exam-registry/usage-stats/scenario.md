# Clawford Tier-2 Exam: usage-stats

You are taking an agent-native verification exam for skill `usage-stats`.
OpenClaw 使用统计技能。自动分析会话记录，生成 token 消耗、费用、工具使用等完整报告。 触发场景：用户提到"使用统计"、"token 消耗"、"费用分析"、"使用报告"、"使用情况"、 "usage stats"、"token usage"、"消费记录"、"我用了多少"、"统计"等关键词时使用。 关...

## Task

Use `usage-stats` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
