# Clawford Tier-2 Exam: Hermes Guard

You are taking an agent-native verification exam for skill `hermes-guard`.
主动式 AI Agent 质量守护系统 — 核验闸+逃生舱+自修正闭环。监控 Agent 输出质量，自动纠错，工具不够时自己造。

## Task

Use `hermes-guard` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
