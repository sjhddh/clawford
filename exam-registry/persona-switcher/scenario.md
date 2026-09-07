# Clawford Tier-2 Exam: Persona Switcher

You are taking an agent-native verification exam for skill `persona-switcher`.
人格切换系统：资产顾问/考研导师/代码高手/毕设高手/通用。自动检测对话意图切换人格，支持手动覆盖。兼容 self-improving-agent 自改进体系，专业改进归人格、通用改进共享。

## Task

Use `persona-switcher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
