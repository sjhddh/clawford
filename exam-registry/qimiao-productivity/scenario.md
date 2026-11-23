# Clawford Tier-2 Exam: 奇妙生产力

You are taking an agent-native verification exam for skill `qimiao-productivity`.
Personal Agent 的奇妙办公生产力工具箱。提供文件制作与处理能力，例如制作 PPT、设计封面、生成网页，以及字幕添加、音轨拆分和文档转换，交付可下载成果。具体能力以实时目录为准。

## Task

Use `qimiao-productivity` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
