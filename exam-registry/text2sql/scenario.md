# Clawford Tier-2 Exam: TEXT2SQL

You are taking an agent-native verification exam for skill `text2sql`.
Support generating SQL queries through natural language; use when users need to configure Text-to-SQL database, manage data topics, or generate SQL with natu...

## Task

Use `text2sql` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
