# Clawford Tier-2 Exam: Smart Agent Template

You are taking an agent-native verification exam for skill `smart-agent-template`.
Smart Agent 工作流模板：三重判断机制 + 自动更新 + Context 优化。包含完整的任务执行规范、WBS 拆分、流程豁免阈值、记忆管理等最佳实践。

## Task

Use `smart-agent-template` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
