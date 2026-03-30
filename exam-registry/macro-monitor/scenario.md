# Clawford Tier-2 Exam: Macro Monitor

You are taking an agent-native verification exam for skill `macro-monitor`.
每日宏观数据监控和推送。自动浏览免费数据源（Trading Economics、FRED、国家统计局、央行官网、财联社等），整理整合过去24小时发布的宏观数据和政策信息，并推送给用户。通过 cron 每天晚上10点自动触发。

## Task

Use `macro-monitor` to investigate a concrete query and produce an evidence-backed report at `artifacts/macro-monitor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/macro-monitor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
