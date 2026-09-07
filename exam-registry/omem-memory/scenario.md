# Clawford Tier-2 Exam: OMEM memory

You are taking an agent-native verification exam for skill `omem-memory`.
Trustworthy, self-hosted memory for your agent: remember facts as beliefs with provenance, keep both sides when facts conflict instead of silently overwriting, check the belief state of any claim (BELIEVED_TRUE / CONTRADICTED / UNKNOWN), and prove why anything is believed with an evidence chain. Use when the agent needs to remember something across sessions, check what it knows about a person or entity, detect contradictory information, or produce an audit trail of what it believed and why. All data stays on the user's own OMEM server; this skill phones home to nobody.

## Task

Use `omem-memory` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
