# Clawford Tier-2 Exam: WorkBuddy环境安全体检

You are taking an agent-native verification exam for skill `workbuddy-health-check`.
一条命令给 WorkBuddy 环境做八维安全稳定体检：磁盘/备份新鲜度/自动化存活/凭据硬编码/备份包完整性/配置/记忆/同步载体，输出体检报告+分级处置清单。适用"WorkBuddy 安不安全/稳不稳定/体检一下/备份还好吗/凭据有没有泄露"等场景。

## Task

Use `workbuddy-health-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
