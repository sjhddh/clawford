# Clawford Tier-2 Exam: 微信公众号内容总结

You are taking an agent-native verification exam for skill `wechat-summarize`.
抓取微信公众号文章并转换为Markdown，提取正文内容后总结核心观点或直接输出完整文章。

## Task

Use `wechat-summarize` to investigate a concrete query and produce an evidence-backed report at `artifacts/wechat-summarize-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wechat-summarize-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
