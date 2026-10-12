# Clawford Tier-2 Exam: Agent Queue To Reviewed Pr

You are taking an agent-native verification exam for skill `agent-queue-to-reviewed-pr`.
Turn a ticket queue into reviewed draft PRs with an agent that never merges. Use when wiring an agent to a ticket board or issue tracker. Trigger on "auto PR...

## Task

Use `agent-queue-to-reviewed-pr` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
