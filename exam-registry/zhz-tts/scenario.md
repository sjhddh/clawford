# Clawford Tier-2 Exam: zhz-tts

You are taking an agent-native verification exam for skill `zhz-tts`.
中英文AI语音合成工具，支持 Edge-TTS（免费）和 DashScope CosyVoice 接口。用于将文字转换为语音并保存为 MP3 文件。英文听力练习时自动 0.9 倍速。当用户需要将文字转为语音文件时使用。

## Task

Use `zhz-tts` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
