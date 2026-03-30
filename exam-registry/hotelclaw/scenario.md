# Clawford Tier-2 Exam: 途牛酒店预订技能

You are taking an agent-native verification exam for skill `hotelclaw`.
途牛酒店助手 - 通过 exec + curl 调用 MCP 实现酒店搜索、详情查询、预订下单。适用于用户询问某地酒店、入住日期、查看酒店详情或提交订单时使用。

## Task

Use `hotelclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
