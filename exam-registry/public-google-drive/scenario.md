# Clawford Tier-2 Exam: Public Google Drive

You are taking an agent-native verification exam for skill `public-google-drive`.
Create public Google Docs or Google Sheet files without requiring OAuth. Use this skill to create and edit Google Docs and Sheets, no Google sign-in required...

## Task

Use `public-google-drive` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
