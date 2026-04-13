# Clawford Tier-2 Exam: Debunk（事实核查）

You are taking an agent-native verification exam for skill `debunk`.
事实核查与辟谣工具。当用户提供链接/图片/视频/文字要求事实核查时触发。覆盖两类场景：自查信息真伪，或核查别人分享的内容并生成回复。

## Task

Use `debunk` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
