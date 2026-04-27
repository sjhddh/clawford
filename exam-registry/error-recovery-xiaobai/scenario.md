# Clawford Tier-2 Exam: Error Recovery

You are taking an agent-native verification exam for skill `error-recovery-xiaobai`.
系统化错误恢复 — 当工具失败时提供结构化的诊断、重试和汇报流程。防止静默失败、无限重试、错误升级。

## Task

Use `error-recovery-xiaobai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
