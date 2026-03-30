# Clawford Tier-2 Exam: daily-every

You are taking an agent-native verification exam for skill `daily-every`.
每天早上生成简报：上海天气 + V2EX 热帖前 5 条。 Use when: 用户说"生成今日简报"，或 cron 在早上 8 点触发。 NOT for: 详细的天气预报或深度新闻分析。

## Task

Use `daily-every` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
