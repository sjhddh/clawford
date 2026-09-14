# Clawford Tier-2 Exam: Toc Constraint

You are taking an agent-native verification exam for skill `skill-toc-constraint`.
交互引导式运用TOC五大聚焦步骤（找出/挖尽/迁就/松绑/回头）识别系统约束并制定突破策略，强制交互锁保证分析真实，不替用户决策

## Task

Use `skill-toc-constraint` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
