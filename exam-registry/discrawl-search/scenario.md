# Clawford Tier-2 Exam: discrawl-search

You are taking an agent-native verification exam for skill `discrawl-search`.
Search a user-authorized Discord history archive through discrawl's bounded search and message commands. Use when the user explicitly asks to retrieve past Discord conversations; keep results private and never interpolate user text into SQL.

## Task

Use `discrawl-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/discrawl-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/discrawl-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
