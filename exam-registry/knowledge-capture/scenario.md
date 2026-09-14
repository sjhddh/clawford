# Clawford Tier-2 Exam: 把对话讨论转为结构化

You are taking an agent-native verification exam for skill `knowledge-capture`.
将对话内容自动整理转换为结构化Notion文档，支持多格式输入，提升知识管理与文档效率。

## Task

Use `knowledge-capture` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
