# Clawford Tier-2 Exam: sn-ppt-entry

You are taking an agent-native verification exam for skill `sn-ppt-entry`.
Use when a user asks to create a presentation, slide deck, PPT, or PPTX from a query and optional files, or to resume an existing SenseNova presentation task.

## Task

Use `sn-ppt-entry` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
