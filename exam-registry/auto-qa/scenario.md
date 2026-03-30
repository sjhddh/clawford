# Clawford Tier-2 Exam: Auto Qa

You are taking an agent-native verification exam for skill `auto-qa`.
在 OpenClaw 平台执行网页自动 QA 测试（自动操作 + 采证 + 报告 + 修复提示包）。当用户要求做自动化回归、演示级测试、失败证据归档或生成可直接交给下一窗口的修复 Prompt 时使用。

## Task

Use `auto-qa` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
