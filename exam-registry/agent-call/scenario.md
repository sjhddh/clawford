# Clawford Tier-2 Exam: agent-call

You are taking an agent-native verification exam for skill `agent-call`.
AI-powered outbound calling service. Use when user expresses intent to make phone calls (e.g., "help me call xxx to book a table", "call customer about promo...

## Task

Use `agent-call` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
