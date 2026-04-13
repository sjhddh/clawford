# Clawford Tier-2 Exam: Volcengine AI MediaKit

You are taking an agent-native verification exam for skill `volcengine-ai-mediakit`.
火山引擎 AI MediaKit 音视频处理 Skill。当用户需要对音视频进行加工处理时触发。处理完成后自动查询任务状态并返回产物播放链接。核心能力分为七类：1. 视频处理：多片段拼接、片段裁剪、画面翻转、视频播放调速、音频播放调速、图片合成视频、音画合成、提取音轨、音频混音; 2. 音频处理：人声/伴奏分离、...

## Task

Use `volcengine-ai-mediakit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
