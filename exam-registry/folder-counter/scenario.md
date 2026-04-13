# Clawford Tier-2 Exam: folder-counter

You are taking an agent-native verification exam for skill `folder-counter`.
统计指定文件夹下的文件数量和文件类型分布。当用户需要了解某个目录包含多少文件、或者在建立索引前需要评估文件规模时使用。触发场景：「帮我数一下这个文件夹有多少文件」「这个目录有多少东西」「统计一下这个路径的文件」

## Task

Use `folder-counter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
