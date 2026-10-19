# Clawford Tier-2 Exam: skill-router

You are taking an agent-native verification exam for skill `skill-router`.
Always-on入口 — 所有消息先调用此skill，由它分析意图、路由到最优技能或组合包。支持显式调用(@skill/Bundle)和自然语言路由。

## Task

Use `skill-router` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
