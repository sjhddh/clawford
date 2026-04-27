# Clawford Tier-2 Exam: Skylv Persona Switch

You are taking an agent-native verification exam for skill `skylv-persona-switch`.
切换 agent 的人设 soul.md，支持三套预设角色与用户原有人设间自由切换并同步更新身份信息。

## Task

Use `skylv-persona-switch` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
