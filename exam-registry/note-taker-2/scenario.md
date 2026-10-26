# Clawford Tier-2 Exam: 笔记

You are taking an agent-native verification exam for skill `note-taker-2`.
支持康奈尔笔记法、卡片盒笔记、思维导图、会议和课堂笔记的自动整理与生成，提升笔记效率与结构化水平。

## Task

Use `note-taker-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
