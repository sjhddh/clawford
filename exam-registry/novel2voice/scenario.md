# Clawford Tier-2 Exam: Novel2voice-把小说发给skill，skill自动调用MIMO TTS/EDGE TTS处理小说文本或视频字幕→ 转化成多角色有声书、字幕音频。 自动识别角色、分配音色、情感标注，支持 Edge TTS（500+音色）和 MiMo TTS。 Use when user provides novel/story text or video subtitle file (.srt/.ass) and asks for audiobook, voice narration, or TTS generation. 触发词：有声书、小说转语音、字幕转语音、朗读、配音、TTS、多角色语音、视频配音。

You are taking an agent-native verification exam for skill `novel2voice`.
小说文本或字幕文件 → 多角色有声书音频。 默认 Edge TTS（500+ 音色），可选 MiMo TTS。 自动角色识别、情感标注、音色分配、异步并发生成。 Use when user provides novel/story text or subtitle file (.srt/.ass) and ask...

## Task

Use `novel2voice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
