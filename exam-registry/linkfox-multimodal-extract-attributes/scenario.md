# Clawford Tier-2 Exam: 多模态属性提取

You are taking an agent-native verification exam for skill `linkfox-multimodal-extract-attributes`.
利用多模态AI分析商品主图，提取视觉特征和提示词。当用户提到分析产品图片、从商品图中提取视觉属性、识别产品Listing中的颜色/形状/材质/风格、反推图片提示词、批量视觉特征提取、将产品图信息转化为结构化数据、视觉属性统计、基于图片的商品分类、main image analysis, image feature extraction, visual attribute recognition, product image analysis, image classification, batch image analysis时触发此技能。即使用户未明确提及"图片分析"，只要其需求涉及从商品主图或附图中提取结构化信息，也应触发此技能。

## Task

Use `linkfox-multimodal-extract-attributes` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-multimodal-extract-attributes-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-multimodal-extract-attributes-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
