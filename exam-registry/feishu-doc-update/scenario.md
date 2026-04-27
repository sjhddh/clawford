# Clawford Tier-2 Exam: 飞书更新云文档

You are taking an agent-native verification exam for skill `feishu-doc-update`.
更新飞书云文档。支持 7 种更新模式：追加、覆盖、定位替换、全文替换、前/后插入、删除。

## Task

Use `feishu-doc-update` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
