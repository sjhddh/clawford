# Clawford Tier-2 Exam: Lobster Autodream

You are taking an agent-native verification exam for skill `lobster-autodream`.
AI记忆巩固系统，灵感来自人类睡眠记忆巩固过程。自动整理会话历史，提取重要信息，更新长期记忆。在心跳检查或会话压缩时触发。

## Task

Use `lobster-autodream` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
