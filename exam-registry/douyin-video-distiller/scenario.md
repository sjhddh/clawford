# Clawford Tier-2 Exam: douyin-video-distiller

You are taking an agent-native verification exam for skill `douyin-video-distiller`.
抖音视频蒸馏 Skill。用户提供抖音链接、视频文件或要求把短视频提炼成知识卡片、摘要、时间线、证据、行动项、Wiki 内容或第二大脑资料时使用；也适用于"帮我把这个视频真正变成可检索知识"等未明确说蒸馏的请求。

## Task

Use `douyin-video-distiller` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
