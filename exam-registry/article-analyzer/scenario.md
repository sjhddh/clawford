# Clawford Tier-2 Exam: Article Analyzer

You are taking an agent-native verification exam for skill `article-analyzer`.
爆款文章拆解分析工具。当用户发来公众号文章链接（mp.weixin.qq.com）或其他网页链接并要求拆解、分析、学习、拆文时触发。支持：结构分析、金句提取、选题逻辑、情绪曲线、复刻建议。也支持将分析结果写入飞书文档。

## Task

Use `article-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/article-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/article-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
