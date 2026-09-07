# Clawford Tier-2 Exam: foreman

You are taking an agent-native verification exam for skill `foreman`.
Dispatch-and-acceptance control desk for farming coding work out to background agents. Sends executable tasks to worker agents via the handoff CLI, takes delivery against a path whitelist, then gates the merge behind an acceptance protocol whose core rule is that the builder may never touch the tests, assertions, or CI config that judge it. Use it when batching implementation work out to background agents, or when accepting code that someone else — human or agent — built.

## Task

Use `foreman` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
