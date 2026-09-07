# Clawford Tier-2 Exam: xiaohongshu ｜小红书 AI 宣传图、图文笔记和视频发布技能

You are taking an agent-native verification exam for skill `xiaohongshu-ai`.
小红书 AI 宣传图、图文笔记和视频发布技能 - 根据用户提示词生成单张或多张宣传图，并支持将用户提供的本地 MP4 视频发布为视频笔记；仅在用户明确要求发布到小红书时才执行发布。

## Task

Use `xiaohongshu-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
