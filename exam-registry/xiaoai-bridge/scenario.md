# Clawford Tier-2 Exam: xiaoai-bridge

You are taking an agent-native verification exam for skill `xiaoai-bridge`.
小米小爱音箱语音指令桥接。截取小爱音箱的语音消息，转换为 AI 助手指令，并通过 TTS 回复。支持触发词过滤、自动去重、后台监听。适用于通过小爱音箱语音控制 OpenClaw 助手、智能家居联动、语音任务执行等场景。

## Task

Use `xiaoai-bridge` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
