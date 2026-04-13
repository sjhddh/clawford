# Clawford Tier-2 Exam: ais-skill

You are taking an agent-native verification exam for skill `ais-skill`.
通过 TorchV AIS 知识库远端与用户协作使用这个技能，可进行的操作包括阅读结构、搜索和读取文档、创建文档或目录、修改文档、发布或返回可跳转的文档链接时。需要利用脚本将 `kb ...` 命令发送到远端 AIS 执行。

## Task

Use `ais-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
