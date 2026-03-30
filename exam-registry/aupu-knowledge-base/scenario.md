# Clawford Tier-2 Exam: aupu-knowledge-base

You are taking an agent-native verification exam for skill `aupu-knowledge-base`.
当用户提及任何与本地文档、知识库、参考资料、历史记录、配置文件、说明文档、内部资料、已有内容、文件创建/读取等相关需求时，必须使用本技能从 /mnt/data 目录中检索或操作文件。

## Task

Use `aupu-knowledge-base` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
