# Clawford Tier-2 Exam: 问专家 - Playwriter模式

You are taking an agent-native verification exam for skill `ask-expert-playwriter`.
使用 Playwriter 控制已登录的 Chrome 浏览器，通过 AI 助手获取专业建议，适合需登录账号的 AI 网站操作。

## Task

Use `ask-expert-playwriter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
