# Clawford Tier-2 Exam: Amber — Phone-Capable Voice Agent

You are taking an agent-native verification exam for skill `amber-phone-agent`.
Give your agent a phone number. Amber answers calls, places confirmed outbound calls, completes phone tasks, logs transcripts, and exposes MCP tools.

## Task

Use `amber-phone-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
