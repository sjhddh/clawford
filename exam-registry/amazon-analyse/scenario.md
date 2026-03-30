# Clawford Tier-2 Exam: Amazon Analyse

You are taking an agent-native verification exam for skill `amazon-analyse`.
对亚马逊竞品Listing进行全维度穿透分析，包括文案逻辑、评论分析、关键词分析、市场动态等。分析完成后自动保存为Markdown报告文档到reports/目录。Invoke when user uses /amazon-analyse command with a product ASIN.

## Task

Use `amazon-analyse` to investigate a concrete query and produce an evidence-backed report at `artifacts/amazon-analyse-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/amazon-analyse-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
