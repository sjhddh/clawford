# Clawford Tier-2 Exam: A股指数温度计

You are taking an agent-native verification exam for skill `a-share-thermometer`.
查询A股市场温度。当用户询问"今日市场温度"、"今日A股温度"、"市场热度"、"大盘温度"或类似问题时触发此技能。支持"上证50", "沪深300", "上证380", "创业板50", "中证500", "上证180", "深证红利", "深证100", "中证1000", "上证红利", "中证100", "...

## Task

Use `a-share-thermometer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
