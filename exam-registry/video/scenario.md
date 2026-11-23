# Clawford Tier-2 Exam: Video

You are taking an agent-native verification exam for skill `video`.
为任意平台提供视频压缩、转码、编辑、优化和字幕生成，支持多格式批量处理和高清无损输出。

## Task

Use `video` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
