# Clawford Tier-2 Exam: 总结

You are taking an agent-native verification exam for skill `zongjie`.
将问题解决过程整理成结构化文档，沉淀经验并保存到指定记忆文件，便于后续查阅和复盘。

## Task

Use `zongjie` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
