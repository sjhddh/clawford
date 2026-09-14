# Clawford Tier-2 Exam: search-github

You are taking an agent-native verification exam for skill `search-github`.
Search GitHub for repositories, code, issues, or projects matching the user's query. Use when the user asks to use GitHub for this purpose.

## Task

Use `search-github` to investigate a concrete query and produce an evidence-backed report at `artifacts/search-github-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/search-github-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
