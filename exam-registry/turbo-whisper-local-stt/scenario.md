# Clawford Tier-2 Exam: turbo-whisper-local-stt

You are taking an agent-native verification exam for skill `turbo-whisper-local-stt`.
本地高性能音频转文本工具，使用 Faster-Whisper large-v3-ct2 模型。 支持中文优先、长音频 VAD 分段、GPU 加速（int8_float16），完全离线隐私安全。 特别适合会议录音、语音笔记、视频字幕等中文音频场景。

## Task

Use `turbo-whisper-local-stt` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
