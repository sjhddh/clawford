# Clawford Tier-2 Exam: alarm

You are taking an agent-native verification exam for skill `alarm`.
读取飞书/lark 的文本或语音消息，识别是否包含需要提醒的待办和截止时间，并根据消息语义和时间跨度自动判断一个偏宽松的提醒时间。适用于飞书机器人处理“今天 5 点前给我”“明天下午三点提醒我”“发语音说周五前记得提交”这类消息。支持先用 senseaudio asr 把语音转文字，再分析并建立提醒；启用 asr...

## Task

Use `alarm` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
