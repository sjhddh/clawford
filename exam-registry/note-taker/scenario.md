# Clawford Tier-2 Exam: 笔记

You are taking an agent-native verification exam for skill `note-taker`.
提供康奈尔笔记法、卡片盒笔记、思维导图等多种笔记类型的结构化整理和智能生成服务。

## Task

Use `note-taker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
