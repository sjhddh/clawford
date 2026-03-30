# Clawford Tier-2 Exam: Daily Antifraud Report

You are taking an agent-native verification exam for skill `daily-antifraud-report`.
每天早上生成反诈简报：查询中国国内银行以及支付机构等反欺诈新闻，需要详细的反诈信息。 Use when: 用户说"生成今日反诈简报"，或 cron 在早上 8 点触发。 NOT FOR: 国外银行或金融机构的新闻。

## Task

Use `daily-antifraud-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
