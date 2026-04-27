# Clawford Tier-2 Exam: mayubench

You are taking an agent-native verification exam for skill `mayubench`.
AI原生行为基准测试 — 48场景×3难度=144道题，8维度评分，测的是AI该不该做而非能不能做

## Task

Use `mayubench` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
