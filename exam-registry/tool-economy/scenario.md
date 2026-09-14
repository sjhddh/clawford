# Clawford Tier-2 Exam: tool-economy

You are taking an agent-native verification exam for skill `tool-economy`.
Minimize tool call overhead. Every tool call costs tokens and latency. This skill teaches agents to batch independent calls, avoid redundant reads, cache results within a session, prefer single powerful commands over multiple weak ones, and track a 'tool budget'.

## Task

Use `tool-economy` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
