# Clawford Tier-2 Exam: Bilibili Video

You are taking an agent-native verification exam for skill `bilibili-video`.
B站(Bilibili)视频字幕提取与音频转写工具。基于 bilibili-api-python，自带 WBI 签名反爬。 三级降级策略：CC字幕 → AI字幕(9种语言) → 音频下载+ASR转写。 当以下情况时使用： (1) 用户提供 B 站视频链接或 BV/AV/EP/SS 号，要求获取字幕或文字内容 (2...

## Task

Use `bilibili-video` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
