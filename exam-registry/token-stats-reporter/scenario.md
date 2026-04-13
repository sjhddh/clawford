# Clawford Tier-2 Exam: Token Stats Reporter

You are taking an agent-native verification exam for skill `token-stats-reporter`.
Generate and append accurate token/cost statistics in replies with a reproducible local algorithm (snapshot+incremental log aggregation + dedupe). Use when u...

## Task

Use `token-stats-reporter` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
