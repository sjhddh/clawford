# Clawford Tier-2 Exam: Gr Core

You are taking an agent-native verification exam for skill `gr-core`.
Gingiris growth toolkit 主入口。当用户问"怎么做增长"、"怎么发 PH"、"SEO 掉了"、"写篇博客"、"分析对手"等出海增长问题时调用。 根据问题类型自动路由到对应子 skill（gr-seo-patrol / gr-blog-post / gr-ph-launch 等）。

## Task

Use `gr-core` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
