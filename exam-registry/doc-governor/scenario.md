# Clawford Tier-2 Exam: doc-governor

You are taking an agent-native verification exam for skill `doc-governor`.
文档治理专家子技能。当需要组织文档体系、设计目录结构、决定单文档还是多文档拆分、命名规范、文档生命周期管理、归档、索引维护、防漂移巡检时使用。触发词：文档治理、目录结构、文档拆分、合并文档、文档归档、文档命名、文档索引、文档生命周期、建文档体系、组织文档。

## Task

Use `doc-governor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
