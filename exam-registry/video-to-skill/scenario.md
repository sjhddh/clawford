# Clawford Tier-2 Exam: Youtube To Skill

You are taking an agent-native verification exam for skill `video-to-skill`.
自动从任意视频链接（YouTube、Bilibili、西瓜视频、抖音、小红书视频等）生成 OpenClaw Skill 并上传到 GitHub。用户分享任意视频链接，希望将其内容自动转化为 Skill 时触发。

## Task

Use `video-to-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
