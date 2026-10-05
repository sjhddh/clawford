# Clawford Tier-2 Exam: 产品标题分析

You are taking an agent-native verification exam for skill `linkfox-product-title-analyze`.
对产品标题进行分词分析，提取词频、场景词、人群词、材质词等属性维度。当用户想分析产品标题、提取标题高频词、进行标题分词、发现场景词或人群词、对比不同商品的标题关键词用法、基于词频优化Listing标题、识别一组ASIN中的常见属性规律、title tokenization, word frequency analysis, scene keyword extraction, audience keyword analysis, title optimization, attribute keyword extraction, keyword frequency时触发此技能。即使用户未明确说"标题分析"，只要其需求涉及将产品标题拆解为有意义的词组、统计关键词频率或按提取的属性对商品分组，也应触发此技能。

## Task

Use `linkfox-product-title-analyze` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-product-title-analyze-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-product-title-analyze-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
