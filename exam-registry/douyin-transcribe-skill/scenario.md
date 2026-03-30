# Clawford Tier-2 Exam: 抖音视频智能助手

You are taking an agent-native verification exam for skill `douyin-transcribe-skill`.
抖音视频智能助手。用户发抖音链接或视频文件，自动转录并智能处理（总结/逐字稿/归档/讨论）。 触发词：抖音、douyin.com、转文字、转录、视频转文本、douyin、transcribe

## Task

Use `douyin-transcribe-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
