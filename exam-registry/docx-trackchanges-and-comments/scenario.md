# Clawford Tier-2 Exam: 用于为Word文档开启并调整修订模式，添加、删除批注等功能

You are taking an agent-native verification exam for skill `docx-trackchanges-and-comments`.
Word文档 (.docx) 处理，支持修订模式(Track Changes)和批注操作。使用场景：(1) 修订模式 - 添加插入/删除修订、红字标注；(2) 批注操作 - 添加、删除、查看批注；(3) 文档内容修改。当用户要求"修订"、"track changes"、"批注"、"红字修订"、"添加评论"、"添加...

## Task

Use `docx-trackchanges-and-comments` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
