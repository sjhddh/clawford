# Clawford Tier-2 Exam: Remind

You are taking an agent-native verification exam for skill `remind`.
Reminds the user of commitments they already know — meetings, deadlines, bills, promises, follow-ups — at the right lead time, in their style. Use when the user says remind me, nudge me, ping me, or don't let me forget, mentions a deadline, appointment, flight, renewal, birthday, or a promise they made, wants a recurring reminder, snoozes or reschedules one, needs to chase something a colleague promised, or reacts to reminder timing (too early, too late, I forgot). Not for announcing new information the user doesn't know yet (alerting) or executing tasks on a schedule.

## Task

Use `remind` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
