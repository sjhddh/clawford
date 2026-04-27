# Clawford Tier-2 Exam: Find Book

You are taking an agent-native verification exam for skill `find-book-aaroncxxx`.
出版书籍查找与权威来源定位。根据书名、作者、ISBN 或主题， 查找权威版本、译本、校注本及其 ISBN/出版信息。 覆盖中西方经典著作（哲学、文学、宗教等），支持多语种版本溯源。 每次搜索输出 3 个版本选项：权威版 / 推荐版 / 入门版。 使用场景：用户问"找书"、"查ISBN"、"有哪些版本"、"权威译本...

## Task

Use `find-book-aaroncxxx` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
