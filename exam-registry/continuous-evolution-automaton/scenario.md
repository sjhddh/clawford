# Clawford Tier-2 Exam: Continuous Evolution

You are taking an agent-native verification exam for skill `continuous-evolution-automaton`.
持续进化系统 - 每次任务后记录经验、分析原因、归档到经验库，实现持续自我改进。

## Task

Use `continuous-evolution-automaton` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
