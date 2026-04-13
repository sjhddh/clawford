# Clawford Tier-2 Exam: 金十数据

You are taking an agent-native verification exam for skill `jin10`.
金十数据财经信息查询 skill。查询黄金/白银/原油等行情报价、最新财经快讯、资讯新闻、财经日历数据时使用。 触发场景：问"黄金价格"、"XAUUSD报价"、"原油快讯"、"财经日历"、"非农什么时候"、"资讯详情"等。 本 skill 包含 Python 代码（jin10/ 模块 + scripts/jin1...

## Task

Use `jin10` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
