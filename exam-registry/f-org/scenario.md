# Clawford Tier-2 Exam: 文件整理

You are taking an agent-native verification exam for skill `f-org`.
自动文件归档与整理技能。当需要整理工作空间文件、创建新文件需要决定存放位置、 从外部获取文件（下载、复制、接收）需要归档、或发现目录混乱需要整理时触发。 用于保持工作空间目录整洁清爽，分类分级存放文件。不用于已结构化的项目目录。

## Task

Use `f-org` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
