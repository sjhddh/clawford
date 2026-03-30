# Clawford Tier-2 Exam: voice-text-to-meme

You are taking an agent-native verification exam for skill `voice-text-to-meme`.
根据输入法语音识别文本或润色后文本生成单张表情包图片。适用于用户想把一句话做成聊天可发送的表情包、meme 图、带字梗图或贴纸图时。支持原始语音文本和润色后文本两种输入，默认优先使用润色后文本；自动根据文本语气判断风格；默认直接生成带字图片，也支持生成无字图并同时给出配文模板；使用 doubao-seedream...

## Task

Use `voice-text-to-meme` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
