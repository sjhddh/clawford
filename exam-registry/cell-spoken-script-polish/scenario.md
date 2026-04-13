# Clawford Tier-2 Exam: 口播脚本打磨

You are taking an agent-native verification exam for skill `cell-spoken-script-polish`.
Polish Chinese spoken scripts for videos and tutorials by improving fluency, shortening breath groups, marking pauses, and preserving original meaning.

## Task

Use `cell-spoken-script-polish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
