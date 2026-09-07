# Clawford Tier-2 Exam: Novel Writer

You are taking an agent-native verification exam for skill `novel-writer`.
网文爽文写作助手。生成大纲/人物设定、逐章续写、文风统一、润色改稿。当用户需要写小说、续写章节、设定人物、生成大纲、修改网文时使用。支持所有网文爽文类型（玄幻、都市、系统、穿越、重生等）。

## Task

Use `novel-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
