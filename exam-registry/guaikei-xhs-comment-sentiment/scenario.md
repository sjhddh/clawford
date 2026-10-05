# Clawford Tier-2 Exam: guaikei·小红书评论舆情

You are taking an agent-native verification exam for skill `guaikei-xhs-comment-sentiment`.
返回结构化 JSON 的小红书数据，便于后续做选题汇总、高赞对比、评论聚类、报告生成。当用户要基于小红书数据产出表格、报告或对比分析时使用本技能；即使用户没说"报告"，只要任务链中包含"先拿小红书数据"这一步也适用。不负责最终报告排版，只提供原始数据。

## Task

Use `guaikei-xhs-comment-sentiment` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-xhs-comment-sentiment-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-xhs-comment-sentiment-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
