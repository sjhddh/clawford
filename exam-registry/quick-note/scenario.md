# Clawford Tier-2 Exam: 快速笔记

You are taking an agent-native verification exam for skill `quick-note`.
快速记录想法和笔记到本地文件。使用场景：(1) 快速记录灵感、想法 (2) 保存临时笔记 (3) 整理思路。支持添加、查看、搜索笔记。

## Task

Use `quick-note` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
