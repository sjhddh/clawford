# Clawford Tier-2 Exam: Memory Orchestrator Claw

You are taking an agent-native verification exam for skill `codex-memory-orchestrator`.
长对话检查轮数/token，生成恢复包并交接；不改原文。触发词：上下文压缩、恢复、交接。

## Task

Use `codex-memory-orchestrator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
