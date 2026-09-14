# Clawford Tier-2 Exam: weread-socrates

You are taking an agent-native verification exam for skill `weread-socrates`.
提供纯离线单文件微信读书苏格拉底伴读、Reader Memory v2 与用户确认的跨书关系。仅当用户明确要求 weread-socrates、微信读书伴读或跨书观点对照时调用。

## Task

Use `weread-socrates` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
