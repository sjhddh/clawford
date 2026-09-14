# Clawford Tier-2 Exam: 科技新闻日报

You are taking an agent-native verification exam for skill `technews-daily-report`.
每日AI/科技热榜日报。从AIHOT单站读取近3天热榜，生成报告并同步飞书文档，只发链接不发全文。

## Task

Use `technews-daily-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/technews-daily-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/technews-daily-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
