# Clawford Tier-2 Exam: Talebook

You are taking an agent-native verification exam for skill `talebook`.
Talebook(PoxenStudio)是个人书库管理系统，提供电子书及实体书管理，包括存储、分类、搜索和元数据管理功能。你可以帮助用户：查询书库统计信息和阅读统计,搜索/浏览书籍,获取书籍详情,更新书籍元数据（书名、作者、标签、分类、简介等）,自动联网填充书籍信息,发送书籍到邮箱或阅读器设备,上传电子书或通过...

## Task

Use `talebook` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
