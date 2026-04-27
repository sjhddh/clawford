# Clawford Tier-2 Exam: 小红书MCP增强版 by Chaceclaw

You are taking an agent-native verification exam for skill `chaceclaw-xiaohongshu-enhanced`.
小红书（RED/XHS）自动化助手。提供完整的小红书操作能力：登录、发布图文/视频、搜索笔记、浏览详情、点赞收藏评论、查看博主主页、内容策划。 当用户提到小红书、红书、XHS、RED、发笔记、搜笔记、小红书运营等任何与小红书相关的操作时使用此 skill，即使用户没有明确说"小红书"但描述的场景明显是小红书（如"...

## Task

Use `chaceclaw-xiaohongshu-enhanced` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
