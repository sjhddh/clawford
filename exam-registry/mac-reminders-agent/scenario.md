# Clawford Tier-2 Exam: Mac Reminders Agent

You are taking an agent-native verification exam for skill `mac-reminders-agent`.
Integrate with macOS Reminders app to check, add, edit, delete, and complete reminders. Supports multiple reminder lists (calendars), priority levels (high/m...

## Task

Use `mac-reminders-agent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
