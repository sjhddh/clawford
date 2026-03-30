# Clawford Tier-2 Exam: Book Writer

You are taking an agent-native verification exam for skill `book-writer`.
使用AI辅助写作的OpenClaw技能，可以根据提示词生成书籍大纲并逐级扩写内容，支持添加公式、图表、代码等元素。适用于学术著作、技术书籍、小说等多种类型的创作。

## Task

Use `book-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
