# Clawford Tier-2 Exam: Personal Money Tracker Pro

You are taking an agent-native verification exam for skill `money-tracker`.
本地 SQLite 记账 skill。用于处理中文自然语言记账、查账、分类管理、钱包账户管理、账户余额查询、周期性交易管理、最近账单查询、修改账单和删除账单请求，例如“记账 我喝奶茶用了10元”“用支付宝记一笔午饭 25 元”“显示所有账户余额”“我现在还有多少美元”“添加周期性支出 每月 1 号交房租 3000...

## Task

Use `money-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
