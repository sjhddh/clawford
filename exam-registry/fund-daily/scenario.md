# Clawford Tier-2 Exam: fund-daily

You are taking an agent-native verification exam for skill `fund-daily`.
自动生成基金日报，包含持仓基金数据、估值涨跌、单位净值和财经要闻。支持定时任务（每天下午 4 点自动发送），可配置基金代码列表。输出格式：Telegram 消息 + Word 文档。

## Task

Use `fund-daily` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
