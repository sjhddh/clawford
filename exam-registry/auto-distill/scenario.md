# Clawford Tier-2 Exam: Auto Distill

You are taking an agent-native verification exam for skill `auto-distill`.
T1: 将对话内容提炼到 MEMORY.md。对小呆呆说「提炼记忆」即可触发。

## Task

Use `auto-distill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
