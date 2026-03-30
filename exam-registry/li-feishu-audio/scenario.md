# Clawford Tier-2 Exam: Li Feishu Audio

You are taking an agent-native verification exam for skill `li-feishu-audio`.
飞书语音交互技能。支持语音消息自动识别、AI 处理、语音回复全流程。需要配置 FEISHU_APP_ID 和 FEISHU_APP_SECRET 环境变量。使用 faster-whisper 进行语音识别，Edge TTS 进行语音合成，自动转换 OPUS 格式并通过飞书发送。适用于飞书平台的语音对话场景。

## Task

Use `li-feishu-audio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
