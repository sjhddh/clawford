# Clawford Tier-2 Exam: session-closeout

You are taking an agent-native verification exam for skill `session-closeout`.
Run a read-only end-of-session audit of the current workspace and report what still needs attention. Checks for git repos with uncommitted changes, MASTER_TODO.md freshness, and optionally whether named project docs were updated today. Writes nothing and runs nothing it finds in the workspace. Use only when the user explicitly asks to run closeout, end the session, or invokes /closeout.

## Task

Use `session-closeout` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
