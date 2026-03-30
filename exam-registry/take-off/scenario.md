# Clawford Tier-2 Exam: 起飞

You are taking an agent-native verification exam for skill `take-off`.
控制无人机立即起飞至指定高度，默认3米，无需额外确认或检查。

## Task

Use `take-off` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
