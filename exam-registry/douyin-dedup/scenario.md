# Clawford Tier-2 Exam: Douyin Dedup

You are taking an agent-native verification exam for skill `douyin-dedup`.
抖音视频下载、去水印、深度混剪去重、去除音频的全自动处理工具。当用户发送抖音链接（v.douyin.com 或 douyin.com 格式）并要求处理、去重、下载或类似意图时，自动触发此技能。

## Task

Use `douyin-dedup` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
