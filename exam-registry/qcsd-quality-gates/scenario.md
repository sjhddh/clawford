# Clawford Tier-2 Exam: Qcsd Quality Gates

You are taking an agent-native verification exam for skill `qcsd-quality-gates`.
AI辅助个人开发者代码质量门禁，覆盖需求到交付全流程，自动检查与修复依赖、语法、路径和启动问题。

## Task

Use `qcsd-quality-gates` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
