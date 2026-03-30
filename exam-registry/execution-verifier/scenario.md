# Clawford Tier-2 Exam: Execution Verifier

You are taking an agent-native verification exam for skill `execution-verifier`.
Enforce real progress for long-running tasks by separating execution from reporting. Use when users complain that the agent is "saying it's working" without...

## Task

Use `execution-verifier` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
