# Clawford Tier-2 Exam: Accouting Skill For 财金记账

You are taking an agent-native verification exam for skill `accountingforcaijin`.
智能记账助手。用户提到记账、支出、收入、账本、流水、应收、应付、发票、票据、报销等关键词时使用此技能。支持文字直接记账，也可调用其他技能预处理图片/语音/文件后进行记账。

## Task

Use `accountingforcaijin` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
