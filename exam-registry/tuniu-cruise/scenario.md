# Clawford Tier-2 Exam: 途牛邮轮预订技能

You are taking an agent-native verification exam for skill `tuniu-cruise`.
途牛邮轮助手 - 通过 exec + curl 调用 MCP 实现邮轮产品搜索、团期查询、预订下单。适用于用户询问邮轮、查询邮轮价格或提交邮轮订单时使用。兼容用户说"游轮"的情况。

## Task

Use `tuniu-cruise` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
