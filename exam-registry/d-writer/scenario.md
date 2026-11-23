# Clawford Tier-2 Exam: 长篇小说写作工作流

You are taking an agent-native verification exam for skill `d-writer`.
自带写作仪表盘的长篇小说写作工作流。用于需要持久故事状态与连续性审计的长篇虚构小说项目：创建新书、续写章节、导入旧稿、调整方向、改写章节、安全回滚，或在多会话间阅读 / 重建大纲与设定文件。

## Task

Use `d-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
