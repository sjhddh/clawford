# Clawford Tier-2 Exam: Amazon产品研究员

You are taking an agent-native verification exam for skill `amazon-product-research`.
Amazon 产品全链路深度研究助手。输入一句话（产品名/ASIN/描述），自动完成产品搜索→多产品评论采集→AI情感打标→关键词扩展→VOC痛点聚类→竞品分析→新品机会分析→输出完整交互式HTML可视化报告。覆盖8大分析阶段，一站式Amazon产品调研。

## Task

Use `amazon-product-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/amazon-product-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/amazon-product-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
