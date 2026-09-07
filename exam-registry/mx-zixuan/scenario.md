# Clawford Tier-2 Exam: A股自选股

You are taking an agent-native verification exam for skill `mx-zixuan`.
当用户明确请求查询、添加或删除个人观察清单/自选列表中的股票时，可以使用此技能来进行操作。例如，可以使用诸如“我的自选”、“查询自选”、“加入自选”、“添加到自选”、“删除自选”或“从自选移除”等指令来实现这些操作。请勿将此技能用于报价/金融数据查询（请使用 mx-data）、新闻研究（请使用 mx-search）、筛选候选股票（请使用 mx-xuangu）或模拟交易（请使用 mx-moni）等场景。

## Task

Use `mx-zixuan` to investigate a concrete query and produce an evidence-backed report at `artifacts/mx-zixuan-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mx-zixuan-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
