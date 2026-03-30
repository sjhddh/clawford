# Clawford Tier-2 Exam: Bookkeeping

You are taking an agent-native verification exam for skill `bookkeeping-agent`.
导入账单、检查重复、查询交易、查看汇总，并通过本地 bookkeeping CLI 执行。优先处理当前消息里已经落到本地的账单附件；当用户要求导入支付宝、微信或本地账单时，优先直接使用当前消息上下文中已有的本地文件路径。

## Task

Use `bookkeeping-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
