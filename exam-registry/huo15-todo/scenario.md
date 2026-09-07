# Clawford Tier-2 Exam: Huo15 Todo

You are taking an agent-native verification exam for skill `huo15-todo`.
多步任务拆解与待办跟踪 — 把复杂编程任务拆成可勾选清单,做一项勾一项,始终只一项进行中。借鉴 Claude Code 的 TodoWrite 纪律。

## Task

Use `huo15-todo` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
