# Clawford Tier-2 Exam: amazon-sorftime-research-reviews-skill

You are taking an agent-native verification exam for skill `amazon-sorftime-research-reviews-skill`.
对亚马逊商品评论进行深度分析，自动识别产品痛点、分析退货原因，生成改进建议和客服回复模板。Invoke when user uses /review-analysis command with a product ASIN.

## Task

Use `amazon-sorftime-research-reviews-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/amazon-sorftime-research-reviews-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/amazon-sorftime-research-reviews-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
