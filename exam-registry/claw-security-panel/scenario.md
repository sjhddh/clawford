# Clawford Tier-2 Exam: claw-security-panel

You are taking an agent-native verification exam for skill `claw-security-panel`.
OpenClaw 安全检查面板（Python 3.7+ 兼容）。用户发送"启动安全检查"时触发，按四大类检查：接入安全、权限安全、执行安全、韧性安全。生成带 token 的临时 HTML 页面，含风险详情子页面和一键修复功能。

## Task

Use `claw-security-panel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
