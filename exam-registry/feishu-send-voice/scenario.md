# Clawford Tier-2 Exam: Feishu Send Voice

You are taking an agent-native verification exam for skill `feishu-send-voice`.
将文本转为语音并通过飞书 audio 消息发送给指定用户。用于“给用户发语音”“把这段话转语音并发飞书”“语音播报结果”等场景，尤其当普通文件发送会降级为文本时使用。仅在指定 channel=feishu 时触发。优先在需要高可达、可听播报时使用。

## Task

Use `feishu-send-voice` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
