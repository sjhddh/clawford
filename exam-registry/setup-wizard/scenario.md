# Clawford Tier-2 Exam: Setup Wizard

You are taking an agent-native verification exam for skill `setup-wizard`.
引导用户输入卡密完成 OpenClaw 激活，验证后逐步配置并标记激活状态，激活后停止拦截对话。

## Task

Use `setup-wizard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
