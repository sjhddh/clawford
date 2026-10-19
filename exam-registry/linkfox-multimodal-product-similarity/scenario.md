# Clawford Tier-2 Exam: 多模态商品相似度

You are taking an agent-native verification exam for skill `linkfox-multimodal-product-similarity`.
多模态产品图片相似度分析与分组。当用户提到产品图片相似度、视觉分组、查找外观相似的商品、基于图片去重、竞品同款检测、同款商品聚类、按外观分组、image similarity, product image comparison, visual clustering, same-style recognition, appearance deduplication, image grouping时触发此技能。即使用户未明确说"图片相似度"，只要其意图涉及商品主图对比、视觉聚类、识别视觉上相同或相似的商品，或根据外观、颜色、构图等视觉特征对商品列表进行后处理，也应触发此技能。

## Task

Use `linkfox-multimodal-product-similarity` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
