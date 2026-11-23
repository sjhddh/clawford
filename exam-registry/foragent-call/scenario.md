# Clawford Tier-2 Exam: ForAgent Call

You are taking an agent-native verification exam for skill `foragent-call`.
Connect two AI agents by private phone number so they can talk to each other and share files across computers or teammates. Use when the user asks to call another agent, let two Claude Code or Codex sessions talk directly, share a file between agents on different machines, or set up agent-to-agent communication with ForAgent.

## Task

Use `foragent-call` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
