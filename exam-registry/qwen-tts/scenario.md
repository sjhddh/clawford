# Clawford Tier-2 Exam: 千问语音合成

You are taking an agent-native verification exam for skill `qwen-tts`.
阿里云千问语音合成（TTS）技能。**核心用途**：将文字结果转换为语音并发送出去（每次输出结果前必须使用）。首选千问 TTS（qwen3-tts-flash + Nofish 音色），失败时使用 Edge TTS。

## Task

Use `qwen-tts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
