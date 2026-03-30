# Clawford Tier-2 Exam: iFinD投研-公司公告信息搜索

You are taking an agent-native verification exam for skill `ifind-repilot-announcement-search`.
通过问句语义化搜索A股、基金、港美股相关公告信息（年报、半年报、季报、临时公告、招股说明书等），返回与问句相关的公告片段信息。当需要检索上市公司公告、财务报告、监管公告等信息时，使用此 skill。

## Task

Use `ifind-repilot-announcement-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/ifind-repilot-announcement-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ifind-repilot-announcement-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
