# Clawford Tier-2 Exam: 全球股市资讯

You are taking an agent-native verification exam for skill `daily-market-turmoil`.
每日收集全球股市资讯（A股/港股/美股/欧股/亚太），覆盖各行业板块，国内国外各至少5条共至少10条，生成标题为「每日动荡+日期」的Markdown报告。当用户要求生成每日股市资讯报告、全球行情速览、市场变动分析，或引用「每日动荡」时使用。报告重点突出「影响当日市场变动的关键消息」而非简单罗列行情，并包含「昨日总结+今日预期」两个核心分析板块。

## Task

Use `daily-market-turmoil` to investigate a concrete query and produce an evidence-backed report at `artifacts/daily-market-turmoil-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/daily-market-turmoil-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
