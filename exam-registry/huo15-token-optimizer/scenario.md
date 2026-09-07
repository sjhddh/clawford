# Clawford Tier-2 Exam: Huo15 Token Optimizer

You are taking an agent-native verification exam for skill `huo15-token-optimizer`.
辉火 Token 优化器 — 在不降低 OpenClaw 性能的前提下，系统化扫描、清理、监控工作区 token 消耗。安全模式：默认 dry-run，备份先行，AGENTS 永不自动替换。

## Task

Use `huo15-token-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
