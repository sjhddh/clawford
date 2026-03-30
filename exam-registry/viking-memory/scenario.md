# Clawford Tier-2 Exam: Viking Memory

You are taking an agent-native verification exam for skill `viking-memory`.
OpenViking 长期记忆系统。用于语义检索用户偏好、历史对话、重要信息等。当需要召回用户之前提到的信息、查找相关上下文时使用此 Skill。

## Task

Use `viking-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
