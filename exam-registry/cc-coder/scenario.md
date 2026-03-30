# Clawford Tier-2 Exam: Cc Coder

You are taking an agent-native verification exam for skill `cc-coder`.
使用 Claude Code CLI 自动编写代码。触发条件：用户要求写代码、创建项目、修复 bug、实现功能等编程任务。

## Task

Use `cc-coder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
