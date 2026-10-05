# Clawford Tier-2 Exam: schoolpass

You are taking an agent-native verification exam for skill `schoolpass`.
This skill should be used when the user asks about their child's school arrival/dismissal through a SchoolPass parent account. Triggers on phrases like "check SchoolPass", "when is my kid dismissed", "what's my dismissal default", "list my students in SchoolPass", "who are my pickup drivers", "any pickup changes today", "school dismissal locations", or any request to read a SchoolPass parent account.

## Task

Use `schoolpass` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
