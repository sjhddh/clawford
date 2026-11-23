# Clawford Tier-2 Exam: 睿观-实用新型专利检测

You are taking an agent-native verification exam for skill `linkfox-ruiguan-utility-patent-detection`.
基于产品信息检测和搜索相似的实用新型/发明专利。当用户提到实用新型专利检测、专利侵权风险、专利相似度搜索、专利排查、发明专利查询、专利风险评估、TRO（临时限制令）风险分析、utility patent, invention patent detection, patent infringement risk, patent search, TRO risk, Ruiguan时触发此技能。即使用户未明确说"实用新型专利"，只要其需求涉及在目标市场销售前检查产品是否可能侵犯已有的实用新型/发明专利，也应触发此技能。

## Task

Use `linkfox-ruiguan-utility-patent-detection` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-ruiguan-utility-patent-detection-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-ruiguan-utility-patent-detection-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
