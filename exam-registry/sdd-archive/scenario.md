# Clawford Tier-2 Exam: SDD Archive

You are taking an agent-native verification exam for skill `sdd-archive`.
将已完成的 feature spec 归档到全局知识库。提取关键决策，更新约束和领域索引，然后将 feature 目录移到 spec/archive/。

## Task

Use `sdd-archive` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
