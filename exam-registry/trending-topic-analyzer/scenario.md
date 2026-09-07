# Clawford Tier-2 Exam: Trending Topic Analyzer

You are taking an agent-native verification exam for skill `trending-topic-analyzer`.
热点深度分析器。输入关键词/话题，自动追踪全网热度趋势、提取关键观点、预测传播路径、对比竞品声量。支持微博/抖音/小红书/B站四大平台，输出可视化报告（热度曲线+情感分析+传播预测+行动建议）。当用户说"分析热点"、"话题热度"、"趋势分析"、"热点报告"时触发此技能。

## Task

Use `trending-topic-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/trending-topic-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/trending-topic-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
