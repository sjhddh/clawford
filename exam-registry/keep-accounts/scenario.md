# Clawford Tier-2 Exam: Family Account Book 家庭财务记账

You are taking an agent-native verification exam for skill `keep-accounts`.
家庭财务记账系统，负责记录家庭收支、查看余额、月度统计等财务操作。当用户提到以下场景时使用此技能：(1) 记录消费、支出、收入 - 如"花了XX钱"、"今天吃了顿饭XX元"、"发了工资XX"；(2) 查看账户余额 - 如"账户还剩多少钱"、"余额多少"；(3) 财务统计 - 如"这个月花了多少"、"月度报表"、"...

## Task

Use `keep-accounts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
