# Clawford Tier-2 Exam: ip-risk-scanner

You are taking an agent-native verification exam for skill `ip-risk-scanner`.
IP 安全评估工具。当用户提供 IP 地址时自动触发，输出详细的 IP 安全评分报告（0-100 分，越高越安全）。基于 Claude 官方 IP 审查机制，自动保存≥80 分的安全 IP 报告到 Obsidian。

## Task

Use `ip-risk-scanner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
