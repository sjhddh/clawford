# Clawford Tier-2 Exam: checkpoint

You are taking an agent-native verification exam for skill `checkpoint`.
Part of the Overpowered skill suite. Create a durable, self-contained state package so a fresh agent, session, or different harness can resume non-trivial work without the original chat history. Use for long-running work, context resets, handoffs, or pauses; not for simple finished tasks.

## Task

Use `checkpoint` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
