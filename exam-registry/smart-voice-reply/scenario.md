# Clawford Tier-2 Exam: smart-voice-reply

You are taking an agent-native verification exam for skill `smart-voice-reply`.
用于语音回复和回复语音音色配置。Invoke when: (1) 用户需要进行语音回复 (2) 用户要求配置或创建新的音色 (3) 用户询问音色相关功能。

## Task

Use `smart-voice-reply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
