# Clawford Tier-2 Exam: 微信选题挖掘

You are taking an agent-native verification exam for skill `wechat-search-topic-mining`.
围绕一个关键词做微信生态选题挖掘：综合搜索结果、微信指数相关结果、热门文章、联想推荐词，汇总成「这个方向值不值得做、有哪些细分角度」的选题清单。 适用场景：用户要围绕某个关键词挖掘微信内的选题、看相关文章热度、拓展长尾词时使用。

## Task

Use `wechat-search-topic-mining` to investigate a concrete query and produce an evidence-backed report at `artifacts/wechat-search-topic-mining-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wechat-search-topic-mining-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
