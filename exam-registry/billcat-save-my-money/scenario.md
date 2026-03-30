# Clawford Tier-2 Exam: 乖猫记账

You are taking an agent-native verification exam for skill `billcat-save-my-money`.
使用 BillCat API 从自然语言中提取并保存记账信息到乖猫记账 App，并支持删除账单、账单统计、账本与资产列表查询。适合当用户想把一句中文消费/收入描述转成结构化账单、按 billId 删除账单、按时间范围统计收入支出，或查看账本/资产汇总时使用。

## Task

Use `billcat-save-my-money` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
