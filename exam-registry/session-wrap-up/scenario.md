# Clawford Tier-2 Exam: Session Wrap-Up

You are taking an agent-native verification exam for skill `session-wrap-up`.
Wrap up a conversation session before starting a new one. Use when the user says "wrap up", "wrap up this conversation", "session wrap up", or uses /session_wrap_up command. Flushes context to memory files, updates PARA notes, commits changes, and provides a summary.

## Task

Use `session-wrap-up` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
