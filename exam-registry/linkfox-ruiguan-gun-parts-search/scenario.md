# Clawford Tier-2 Exam: 睿观-图片政策合规监测

You are taking an agent-native verification exam for skill `linkfox-ruiguan-gun-parts-search`.
基于睿观的产品图片政策合规检测，通过视觉相似度匹配识别潜在违规商品。当用户提到政策合规检查、产品图片合规、违规检测、禁售商品筛查、基于图片的合规审查、上架前风险排查、policy compliance detection, product compliance review, violation detection, image compliance check, product image risk screening, Ruiguan时触发此技能。即使用户未明确说"合规"，只要其需求涉及将产品图片与违规数据库进行比对，也应触发此技能。

## Task

Use `linkfox-ruiguan-gun-parts-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-ruiguan-gun-parts-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-ruiguan-gun-parts-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
