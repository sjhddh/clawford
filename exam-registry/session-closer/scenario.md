# Clawford Tier-2 Exam: session-closer

You are taking an agent-native verification exam for skill `session-closer`.
Structured end-of-session protocol for OpenClaw agents. Produces a complete, consistent journal entry at session close — summary, full file surface (read/written/external APIs), one self-caught failure delta, one behavioral fingerprint. Also runs pattern-update for any tracked behavioral patterns that fired this session. Use when a session ends, a task completes, or the user says 'log this,' 'log the session,' 'close out,' or 'write the journal.'

## Task

Use `session-closer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
