# Clawford Tier-2 Exam: 睿观-外观专利检测

You are taking an agent-native verification exam for skill `linkfox-ruiguan-detection-patent-design`.
基于睿观的外观专利侵权检测，支持25+国家/地区的图片专利检索。当用户提到外观专利检测、专利侵权检查、专利风险分析、TRO案件查询、外观设计专利搜索、设计专利相似度、产品专利排查、design patent detection, patent infringement, design patent, TRO cases, patent risk, patent search, Ruiguan时触发此技能。即使用户未明确提及"外观专利"，只要其需求涉及检查产品图片是否可能侵犯已有的外观设计专利，或提到侵权、专利、TRO、外观专利等关键词，也应触发此技能。

## Task

Use `linkfox-ruiguan-detection-patent-design` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-ruiguan-detection-patent-design-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-ruiguan-detection-patent-design-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
