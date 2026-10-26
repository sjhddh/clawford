# Clawford Tier-2 Exam: patent-panorama-analysis

You are taking an agent-native verification exam for skill `patent-panorama-analysis`.
专利技术全景分析报告自动生成。用户上传专利数据Excel表格（含标题、申请人、申请日、法律状态、受理局、被引次数等字段）和技术拆解Excel表格后，自动分析专利数据并生成可编辑的HTML全景分析报告。 报告包含5大模块：技术概况分析、重点技术分支分析、竞争对手分析、专利风险分析、企业专利布局建议。 触发条件：当用户提及"专利分析""技术全景分析""专利全景报告""专利布局分析""CMC专利分析""专利竞争分析""专利风险""FTO分析""技术分解""专利趋势"等关键词时自动触发。也适用于用户上传专利数据Excel并要求生成分析报告的场景。

## Task

Use `patent-panorama-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-panorama-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-panorama-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
