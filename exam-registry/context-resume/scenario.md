# Clawford Tier-2 Exam: Context Resume

You are taking an agent-native verification exam for skill `context-resume`.
Reconstructs your full working context when you return to a task after an interruption — meeting, lunch, sleep, weekend, or three-week vacation. Not session...

## Task

Use `context-resume` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
