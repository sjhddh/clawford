# Clawford Tier-2 Exam: Audio Note Taker

You are taking an agent-native verification exam for skill `audio-note-taker`.
语音笔记助手：录音自动转文字并整理成结构化笔记，支持说话人识别，自动总结要点和行动项

## Task

Use `audio-note-taker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
