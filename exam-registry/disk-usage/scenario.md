# Clawford Tier-2 Exam: Disk Usage

You are taking an agent-native verification exam for skill `disk-usage`.
Show disk usage of a directory or file in human-readable format. Use when the user wants to know how much space a folder or file takes.

## Task

Use `disk-usage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
