# Clawford Tier-2 Exam: feishu-minimax-t2a-voice

You are taking an agent-native verification exam for skill `feishu-minimax-t2a-voice`.
飞书语音消息收发：接收语音自动转文字（飞书原生 Transcript + Whisper 降级），回复语音由 MiniMax T2A 合成后发送。

## Task

Use `feishu-minimax-t2a-voice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
