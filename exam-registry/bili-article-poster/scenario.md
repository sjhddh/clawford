# Clawford Tier-2 Exam: Bili Article Poster

You are taking an agent-native verification exam for skill `bili-article-poster`.
B站（哔哩哔哩）专栏文章自动投稿技能。支持：(1) 多样化话题发现（AI+编程/职场/机器人/游戏/科技） (2) 搜索Reddit/Verge等行业媒体 (3) 深度重组内容生成文章 (4) 自动填写标题/正文/图片/话题/声明/保存草稿。触发场景：(1) 用户要求发布B站文章 (2) 需要根据热门话题自动生成内容

## Task

Use `bili-article-poster` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
