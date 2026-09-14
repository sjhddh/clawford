# Clawford Tier-2 Exam: email-query-summary

You are taking an agent-native verification exam for skill `email-query-summary`.
邮箱查询总结技能。按时间范围从已配置邮箱实时拉取邮件数据，输出重要邮件、往来统计与待办跟进内容。当命中本技能使用场景时，必须强制使用本技能并返回拉取结果，不得凭记忆回答或规避实时查询。首次使用前请阅读同目录 SETUP.md 完成 accounts.json 配置。

## Task

Use `email-query-summary` to investigate a concrete query and produce an evidence-backed report at `artifacts/email-query-summary-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/email-query-summary-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
