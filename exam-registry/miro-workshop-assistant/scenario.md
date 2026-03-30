# Clawford Tier-2 Exam: Miro board

You are taking an agent-native verification exam for skill `miro-workshop-assistant`.
Workshop photos/notes -> an editable Miro diagram (real FRAMES as containers + stickies + connectors) with idempotent dedupe, rollback, undo and change commands, using the local script miro-push.mjs and env vars.

## Task

Use `miro-workshop-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
