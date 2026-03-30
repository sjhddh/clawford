# Clawford Tier-2 Exam: AI助手自动求助技能

You are taking an agent-native verification exam for skill `ask-ai-assistant`.
自动识别问题复杂度，优先使用豆包、千问等多AI轮询获取并验证可执行解决方案，遇验证码需用户协助。

## Task

Use `ask-ai-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
