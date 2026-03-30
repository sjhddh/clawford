# Clawford Tier-2 Exam: Book Organizer

You are taking an agent-native verification exam for skill `book-organizer`.
书籍内容深度整理技能。当用户提到整理书籍内容、读书笔记、制作思维导图、提取金句、总结核心观点时触发。使用场景包括但不限于：(1) 输入书名进行深度整理，(2) 创建章节摘要和思维导图，(3) 提取概念和关键知识点，(4) 整理金句摘录，(5) 总结核心观点，(6) 撰写读后感/书评，(7) 生成知识整理笔记。输出...

## Task

Use `book-organizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
