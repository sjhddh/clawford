# Clawford Tier-2 Exam: Notion Cli

You are taking an agent-native verification exam for skill `wirecat-notion`.
Use notion, the WireCat CLI for Notion, from an agent — search a synced copy of Notion pages offline, read a page as Markdown live or from the copy, list databases and their data source ids and properties, with the owner's profile and JSON answers. Use when a task needs a Notion page or database.

## Task

Use `wirecat-notion` to investigate a concrete query and produce an evidence-backed report at `artifacts/wirecat-notion-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wirecat-notion-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
