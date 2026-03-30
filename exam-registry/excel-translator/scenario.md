# Clawford Tier-2 Exam: Excel Translator

You are taking an agent-native verification exam for skill `excel-translator`.
Translates Excel files (.xlsx) from English to Chinese while preserving all formatting, images, and charts. Use for any task where a user provides an Excel f...

## Task

Use `excel-translator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
