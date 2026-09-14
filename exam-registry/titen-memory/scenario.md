# Clawford Tier-2 Exam: titen-memory

You are taking an agent-native verification exam for skill `titen-memory`.
Use a configured Titen MCP server to recall bounded evidence-grounded context, record verified durable signals, submit feedback, and coordinate checkpoints, leases, or handoffs. Use when work may benefit from prior project memory or when a verified outcome should be preserved for another agent; do not use it to capture raw transcripts, secrets, chain of thought, or routine tool output.

## Task

Use `titen-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
