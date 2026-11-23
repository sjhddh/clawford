# Clawford Tier-2 Exam: project-archive-cleanup

You are taking an agent-native verification exam for skill `project-archive-cleanup`.
Archive-clean finished, long-idle project directories — retain planning documents and result artifacts, strip execution traces (one-off scripts, import intermediates, scrape snapshots, console logs, superseded versions, byte-identical duplicates). Use when asked to clean up project leftovers, reduce process noise, or archive completed work. Always read-only scan first, then a two-phase backup-and-delete with batching for the safe-delete threshold.

## Task

Use `project-archive-cleanup` to investigate a concrete query and produce an evidence-backed report at `artifacts/project-archive-cleanup-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/project-archive-cleanup-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
