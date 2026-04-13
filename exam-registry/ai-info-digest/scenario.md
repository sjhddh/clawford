# Clawford Tier-2 Exam: AI Info Digest

You are taking an agent-native verification exam for skill `ai-info-digest`.
微信公众号文章摘要整理工具。获取用户关注的微信公众号在指定时间范围内发布的文章，逐篇阅读全文，然后按主题聚合整理成一篇简明的摘要文章，标注来源便于评估各公众号的价值。 当用户提到以下场景时触发：整理公众号文章、公众号周报/日报、微信文章摘要、帮我看看公众号最近发了什么、总结一下这几天的公众号内容、公众号阅读整理、...

## Task

Use `ai-info-digest` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
