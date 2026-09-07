# Clawford Tier-2 Exam: Atomcode Delegation

You are taking an agent-native verification exam for skill `atomcode-delegation`.
通过 atomcode CLI 无头模式委派独立代码任务，支持单任务/批量并发、监控、超时、续会话。

## Task

Use `atomcode-delegation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
