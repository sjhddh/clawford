# Clawford Tier-2 Exam: Xhs Cover Skill

You are taking an agent-native verification exam for skill `xhs-cover-skill`.
生成小红书风格封面图片。使用场景：(1) 用户要求生成小红书封面 (2) 用户要求生成社交媒体封面图 (3) 用户为笔记/文章生成配图 (4) 用户询问 credit 余额或生成历史。首次使用会自动引导注册。

## Task

Use `xhs-cover-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
