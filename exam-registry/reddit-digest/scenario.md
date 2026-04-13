# Clawford Tier-2 Exam: reddit-digest

You are taking an agent-native verification exam for skill `reddit-digest`.
抓取指定单个 Subreddit 最近 24 小时热门 Post，逐一获取详情与评论，生成摘要、核心要点、可实践建议、灵感启发及社交媒体分享文案，输出为每日精选 Markdown 文档。 当用户说"帮我抓取/总结 Reddit r/xxx"、"生成 Reddit 每日摘要"、"reddit digest"时使用。

## Task

Use `reddit-digest` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
