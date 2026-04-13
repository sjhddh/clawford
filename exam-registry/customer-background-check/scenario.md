# Clawford Tier-2 Exam: Customer Background Check

You are taking an agent-native verification exam for skill `customer-background-check`.
对客户公司做三查式合规背调，重点覆盖 OFAC 制裁名单检索、BIS/ECFR 黑名单地址关键词核查，以及生成给商务部同事 Dora 或 Shellen 的协查请求。用于用户要求“做客户背调”“查客户是否在制裁名单”“查注册地址是否在黑名单”“做三查”“生成给 Dora/Shellen 的出口数据协查消息”等场景。

## Task

Use `customer-background-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
