# Clawford Tier-2 Exam: TurboQuant Context

You are taking an agent-native verification exam for skill `turboquant`.
Compress conversation context into a TurboQuant vector store inside OpenClaw memory, then retrieve the most relevant entries on demand to stay within token b...

## Task

Use `turboquant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
