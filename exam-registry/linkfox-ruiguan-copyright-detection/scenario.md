# Clawford Tier-2 Exam: 睿观-版权检测

You are taking an agent-native verification exam for skill `linkfox-ruiguan-copyright-detection`.
图片版权侵权检测与风险分析。当用户提到版权检测、版权核查、图片侵权检查、图片版权风险、版权相似度搜索、TRO风险分析、权利人查询、版权合规验证、copyright detection, image infringement, copyright risk, TRO risk, copyright lookup, infringement analysis, Ruiguan时触发此技能。即使用户未明确提及"版权"，只要其需求涉及检查图片是否可能侵犯已登记的版权作品，也应触发此技能。

## Task

Use `linkfox-ruiguan-copyright-detection` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-ruiguan-copyright-detection-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-ruiguan-copyright-detection-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
