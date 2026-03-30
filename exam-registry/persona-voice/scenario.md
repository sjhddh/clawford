# Clawford Tier-2 Exam: persona-voice

You are taking an agent-native verification exam for skill `persona-voice`.
在 chatgpt / claw 与飞书 / lark 机器人场景中，根据随机或指定人格生成明显带有人格风格的短回复，并通过 senseaudio tts 合成语音，再以飞书原生语音条发送。支持文字输入和音频输入；音频输入时先调用 senseaudio asr。适用于飞书人格陪伴、随机人格语音回复、角色化语音机器...

## Task

Use `persona-voice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
