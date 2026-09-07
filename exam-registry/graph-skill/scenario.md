# Clawford Tier-2 Exam: graph

You are taking an agent-native verification exam for skill `graph-skill`.
Execute coding work as a cached dependency graph with local quality gates, parallel agents, localized retries, resume support, token telemetry, and an interactive report. Use for /graph requests.

## Task

Use `graph-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
