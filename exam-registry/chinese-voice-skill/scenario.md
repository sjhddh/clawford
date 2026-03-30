# Clawford Tier-2 Exam: chinese-voice-skill

You are taking an agent-native verification exam for skill `chinese-voice-skill`.
使用微软 Edge TTS 生成高质量中文语音，默认使用 XiaoxiaoNeural 语音。当用户需要语音回复时自动触发。

## Task

Use `chinese-voice-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
