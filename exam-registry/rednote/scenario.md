# Clawford Tier-2 Exam: 小红书 - RedNote

You are taking an agent-native verification exam for skill `rednote`.
小红书全能助手 — 文案生成、封面制作、内容发布与管理。当用户要求写小红书笔记、生成小红书文案/标题/封面、发小红书、搜索小红书、评论点赞收藏等任何小红书相关操作时使用。支持一站式从文案创作到自动发布的完整流程。封面AI生图需配置可选环境变量（GEMINI_API_KEY 或 IMG_API_KEY 或 HUNY...

## Task

Use `rednote` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
