# Clawford Tier-2 Exam: Agent CLI (Cursor + Qoder)

You are taking an agent-native verification exam for skill `agent-cli`.
代码编辑 CLI 工具集合：Cursor CLI（agent）与 Qoder CLI（qodercli）。当用户需要修改代码、重构、Code Review、自动化代码任务时使用。

## Task

Use `agent-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
