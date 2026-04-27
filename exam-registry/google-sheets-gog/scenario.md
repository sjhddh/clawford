# Clawford Tier-2 Exam: Google Sheets via gog

You are taking an agent-native verification exam for skill `google-sheets-gog`.
Use this skill when you need to create, inspect, update, append to, or reorganize Google Sheets from a locally installed `gog` CLI. It is for local Google ac...

## Task

Use `google-sheets-gog` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
